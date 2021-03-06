import { config } from './../../../../../../src/app/app.module';
import { NgModule, InjectionToken, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerInterceptor } from './logger.interceptor';
import { LoggerConfig, LOGGER_CONFIG } from './APP_NAME';

export function getAppName() {
  return 'App1';
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggerInterceptor,
      multi: true,
    },
    // { provide: APP_NAME, useValue: 'App1' }
    // { provide: APP_NAME, useFactory: getAppName },

  ]
})
export class LoggerModule {
  static init(config: LoggerConfig): ModuleWithProviders {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LOGGER_CONFIG, useValue: config }
      ]
    };
  }
}
