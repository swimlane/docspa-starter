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
  DocsifyPluginsModule,
  RuntimeContentModule,
  MarkdownModule,
  MarkdownElementsModule,
  MARKDOWN_CONFIG_TOKEN
} from '@swimlane/docspa-core';

import { DocspaStackblitzModule } from '@swimlane/docspa-stackblitz';

import { AppComponent } from './app.component';

import { config } from '../docspa.config';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

const plugins = [];

if (window['EditOnGithubPlugin']) {
  const editPlugin = window['EditOnGithubPlugin']
    .create('https://github.com/swimlane/docspa-starter/blob/master/src/docs/');
  plugins.push(editPlugin);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    LoadingBarModule,
    LoadingBarHttpClientModule,
    LoggerModule.forRoot({ level: NgxLoggerLevel.WARN }),
    DocspaCoreModule.forRoot(config, environment),
    MarkdownModule.forRoot(),
    MarkdownElementsModule.forRoot(),
    RuntimeContentModule.forRoot({
      imports: [
        CommonModule,
      ]
    }),
    DocsifyPluginsModule.forRoot({
      plugins
    }),
    DocspaStackblitzModule,
    AppRoutingModule
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    { provide: MARKDOWN_CONFIG_TOKEN, useFactory: () => preset }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
