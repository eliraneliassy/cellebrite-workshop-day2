import { InjectionToken } from '@angular/core';

export const LOGGER_CONFIG: InjectionToken<LoggerConfig> = new InjectionToken<LoggerConfig>('Logger Config');


export interface LoggerConfig {
    appName: string;
    numOfRetry: number;
}
