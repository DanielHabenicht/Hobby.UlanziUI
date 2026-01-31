import { Component } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs';
import {
  ApiSettingsGet200Response,
  ApiStatsGet200Response,
  DefaultService,
} from 'src/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public stats: ApiStatsGet200Response = {
    app: '',
    bat: 0,
    bat_raw: 0,
    bri: 0,
    hum: 0,
    indicator1: false,
    indicator2: false,
    indicator3: false,
    ldr_raw: 0,
    lux: 0,
    messages: 0,
    ram: 0,
    temp: 0,
    type: 0,
    uptime: 0,
    uid: '',
    version: '',
    wifi_signal: 0,
  };
  public apps: string[] = [];

  public settings: ApiSettingsGet200Response = {
    MATP: true,
    ABRI: true,
    BRI: 25,
    ATRANS: true,
    TCOL: 16777215,
    TEFF: 2,
    TSPEED: 400,
    ATIME: 7,
    TMODE: 1,
    CHCOL: 16711680,
    CTCOL: 0,
    CBCOL: 16777215,
    TFORMAT: '%H %M',
    DFORMAT: '%d.%m.%y',
    SOM: true,
    CEL: true,
    BLOCKN: false,
    MAT: 0,
    SOUND: true,
    GAMMA: 1.899999976,
    UPPERCASE: true,
    CCORRECTION: '#000000',
    CTEMP: '#000000',
    WD: true,
    WDCA: 16777215,
    WDCI: 6710886,
    SSPEED: 100,
    TIM: true,
    DAT: true,
    HUM: false,
    TEMP: false,
    BAT: false,
  };

  public tab: 'apps' | 'settings' = 'apps';

  constructor(
    private apiService: DefaultService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.updateSettings();
    this.updateStats();
    setInterval(() => {
      this.updateStats();
    }, 2000);
    this.updateApps();

    this.activatedRoute.queryParamMap.pipe(skip(1)).subscribe((map) => {
      const tab = map.get('tab');
      if (tab) {
        this.tab = tab as 'apps' | 'settings';
      } else {
        this.tab = 'apps';
        this.router.navigate([], {
          queryParams: {
            tab: this.tab,
          },
        });
      }
    });
    // this.set();
  }

  public tabChange(event: MatTabChangeEvent) {
    this.tab = event.tab.textLabel.toLowerCase() as 'apps' | 'settings';
    this.router.navigate([], {
      queryParams: {
        tab: this.tab,
      },
    });
  }

  private updateSettings() {
    this.apiService.apiSettingsGet().subscribe((settings) => {
      this.settings = settings;
    });
  }

  private updateStats() {
    this.apiService.apiStatsGet().subscribe((stats) => {
      this.stats = stats;
    });
  }

  private updateApps() {
    this.apiService.apiLoopGet().subscribe((loop) => {
      this.apps = Object.keys(loop);
    });
  }

  public refresh() {
    this.updateStats();
    this.updateApps();
    this.updateSettings();
  }

  public moodlight() {
    this.apiService
      .apiMoodlightPost({
        brightness: 100,
        kelvin: 3500,
      })
      .subscribe();
  }
  public moodlightOff() {
    this.apiService.apiMoodlightPost('').subscribe();
  }

  public on() {
    this.apiService.apiPowerPost({ power: true }).subscribe();
  }

  public off() {
    this.apiService.apiPowerPost({ power: false }).subscribe();
  }

  public set() {
    this.apiService
      .apiSettingsPost({
        TIM: true,
        DAT: false,
        BAT: false,
        HUM: false,
        TEMP: false,
      })
      .subscribe();
    this.apiService.apiRebootPost().subscribe();
  }

  public try() {
    this.apiService
      .apiSettingsPost({
        BLOCKN: true,
      })
      .subscribe();
  }

  public sleep() {
    this.apiService.apiSleepPost({ sleep: 5 }).subscribe();
  }

  public delete(app: string) {
    this.apiService.apiCustomPost(app, '').subscribe({
      complete: () => {
        this.updateApps();
      },
    });
  }

  public display(app: string) {
    this.apiService.apiSwitchPost({ name: app }).subscribe();
  }

  public next() {
    this.apiService.apiNextappPost().subscribe();
  }

  public prev() {
    this.apiService.apiPreviousappPost().subscribe();
  }

  public reboot() {
    this.apiService.apiRebootPost().subscribe();
  }

  public brightness(brightness: Event) {
    // debugger;
    if (!brightness.target) return;
    this.apiService
      .apiSettingsPost({
        BRI: (brightness.target as HTMLInputElement).valueAsNumber,
        ABRI: false,
      })
      .subscribe();
    this.updateSettings();
  }

  public autoBrightness() {
    this.apiService
      .apiSettingsPost({
        ABRI: true,
      })
      .subscribe();
    this.updateSettings();
  }

  public displayIndicator(number: number) {
    switch (number) {
      case 1:
        this.apiService
          .apiIndicator1Post({
            color: this.stats?.indicator1 ? '#000000' : '#32a852',
          })
          .subscribe();
        break;
      case 2:
        this.apiService
          .apiIndicator2Post({
            color: this.stats?.indicator2 ? '#000000' : '#32a852',
          })
          .subscribe();
        break;
      case 3:
        this.apiService
          .apiIndicator3Post({
            color: this.stats?.indicator3 ? '#000000' : '#32a852',
          })
          .subscribe();
        break;
    }
  }
  public saveSettings() {
    this.apiService
      .apiSettingsPost({
        ...this.settings,
      })
      .subscribe();
    this.updateSettings();
  }

  public resetSettings() {
    this.apiService.apiResetSettingsPost().subscribe();
    this.updateSettings();
  }
}
