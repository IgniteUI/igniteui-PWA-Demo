import { ApplicationConfig, ErrorHandler, Provider, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { GlobalErrorHandlerService } from './error-routing/error/global-error-handler.service';
import { environment } from '../environments/environment';
import { provideServiceWorker } from '@angular/service-worker';

// provide the HAMMER_GESTURE_CONFIG token
// to override the default settings of the HammerModule
// { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }

// The 'providers' array is built up here, including all necessary imports and service worker setup.
const appProviders: Provider = [
  provideRouter(routes),
  importProvidersFrom(BrowserModule, HammerModule),
  provideAnimations(),
  provideServiceWorker('ngsw-worker.js', {
    enabled: !isDevMode(),
    registrationStrategy: 'registerWhenStable:30000'
  })
];

// Conditionally push the custom ErrorHandler only in production
if (environment.production) {
  appProviders.push({
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerService
  });
}

// The ApplicationConfig object only needs the single 'providers' property.
// I have renamed the local variable to 'appProviders' to avoid confusion,
// but the original 'providers' shorthand would also work.
export const appConfig: ApplicationConfig = { 
  providers: appProviders,
};
