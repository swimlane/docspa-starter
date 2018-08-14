import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { DocspaCoreModule } from '@swimlane/docspa-core';

import { AppComponent } from './app.component';

import { config } from '../docspa.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DocspaCoreModule.forRoot(config)
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
