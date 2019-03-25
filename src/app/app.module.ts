import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { preset } from '@swimlane/docspa-remark-preset';

import {
  DocspaCoreModule,
  EmbedStackblitzModule,
  DocsifyPluginsModule,
  RuntimeContentModule,
  MarkdownModule,
  MarkdownElementsModule
} from '@swimlane/docspa-core';

import { AppComponent } from './app.component';

import { config } from '../docspa.config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoadingBarModule.forRoot(),
    LoadingBarHttpClientModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.WARN }),
    DocspaCoreModule.forRoot(config),
    MarkdownModule.forRoot(preset),
    MarkdownElementsModule.forRoot(),
    RuntimeContentModule.forRoot({
      imports: [
        CommonModule,
      ]
    }),
    DocsifyPluginsModule,
    EmbedStackblitzModule
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
