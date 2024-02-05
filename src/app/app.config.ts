import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideHttpClient} from '@angular/common/http';
import {appStore, initMachineLineEffect, startMonitoringEffect} from "./store";
import {LineMachineHttpConfigLoader, LineMachineRandomDataProvider} from "./features/line-machine/services";
import {LineMachineConfigLoader} from "@buhler/features/line-machine/interfaces/line-machine-config-loader.interface";
import {LineMachineDataProvider} from "@buhler/features/line-machine/interfaces/line-machine-data-provider.interface";

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideEffects({ initMachineLineEffect, startMonitoringEffect }),
        provideStore(appStore),
        {
            provide: LineMachineConfigLoader,
            useFactory: () => new LineMachineHttpConfigLoader('/assets/machine-line-config.json'),
        },
        {
            provide: LineMachineDataProvider,
            useClass: LineMachineRandomDataProvider, // Could be HttpDataProvider, WebSocketDataProvider, etc
        },
    ],
};

