import { TestBed, async } from '@angular/core/testing';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import {APP_BASE_HREF} from '@angular/common';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { DocspaCoreModule } from '@swimlane/docspa-core';

import { AppComponent } from './app.component';

import { config } from '../docspa.config';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LoadingBarModule.forRoot(),
        LoggerModule.forRoot({ level: NgxLoggerLevel.WARN }),
        DocspaCoreModule.forRoot(config)
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        {provide: APP_BASE_HREF, useValue : '/' }
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'my-docspa-project'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('my-docspa-project');
  }));
  xit('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to my-docspa-project!');
  }));
});
