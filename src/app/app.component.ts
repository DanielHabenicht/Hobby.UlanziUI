import { Component } from '@angular/core';
import { DefaultService } from 'src/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public $stats;
  public $loop;

  public $power;

  constructor(private apiService: DefaultService) {
    this.$stats = this.apiService.apiStatsGet();
    this.$loop = this.apiService.apiLoopGet();
    this.$power = this.apiService.apiSettingsGet();
    this.set();
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
        DAT: true,
        BAT: false,
        HUM: false,
        TEMP: false,
      })
      .subscribe();
    // this.apiService.apiRebootPost().subscribe();
  }

  public sleep() {
    this.apiService.apiSleepPost({ sleep: 5 }).subscribe();
  }
}
