import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule, Configuration } from 'src/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiModule.forRoot(() => {
      return new Configuration({
        basePath: 'http://localhost:4200',
      });
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
