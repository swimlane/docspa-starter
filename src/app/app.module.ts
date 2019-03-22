import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { plugins, preset, prism, mermaid } from '@swimlane/docspa-remark-preset';

import {
  DocspaCoreModule,
  EmbedStackblitzModule,
  UseDocsifyPluginsModule,
  RuntimeContentModule,
  MarkdownModule,
  ThemeModule,
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
    MarkdownModule.forRoot({
      ...preset,
      plugins: [
        ...plugins,
        mermaid,
        prism
      ]
    }),
    MarkdownElementsModule.forRoot(),
    RuntimeContentModule.forRoot({
      imports: [
        CommonModule,
      ]
    }),
    ThemeModule.forRoot({
      theme: {
        '--theme-color': '#42b983',
        '--theme-color-secondary-light': '#bdffe1',
        '--cover-background-color': 'linear-gradient(to left bottom, hsl(28, 100%, 85%) 0%,hsl(149, 100%, 85%) 100%)'
      }
    }),
    UseDocsifyPluginsModule,
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
