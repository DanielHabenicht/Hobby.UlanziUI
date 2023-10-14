import { Component } from '@angular/core';
import { DefaultService } from 'src/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public stats: any;

  constructor(private apiService: DefaultService){
    this.apiService.statsGet().subscribe(stats => {
      this.stats = stats
    })
  }
}
