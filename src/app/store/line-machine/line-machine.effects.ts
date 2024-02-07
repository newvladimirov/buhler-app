import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { configLoadedSuccess, initMachineLine, setError, setLineState, startMonitoring } from './line-machine.actions';
import { LineMachineConfigLoader } from '@buhler/features/line-machine/interfaces/line-machine-config-loader.interface';
import { LineMachineDataProvider } from '@buhler/features/line-machine/interfaces/line-machine-data-provider.interface';

export const initMachineLineEffect = createEffect(
    (actions$ = inject(Actions), configLoader = inject(LineMachineConfigLoader)) => {
        return actions$.pipe(
            ofType(initMachineLine),
            exhaustMap(() =>
                configLoader.loadConfig().pipe(
                    map((config) => configLoadedSuccess({ config })),
                    catchError((err) => {
                        return of(setError({ error: 'Config loading failed: ' + err.message }));
                    }),
                ),
            ),
        );
    },
    { functional: true },
);

export const startMonitoringEffect = createEffect(
    (actions$ = inject(Actions), dataProvider = inject(LineMachineDataProvider)) => {
        return actions$.pipe(
            ofType(startMonitoring),
            exhaustMap(() => dataProvider.start().pipe(map((state) => setLineState({ state })))),
            catchError((err) => {
                return of(setError({ error: 'Monitoring: ' + err.message }));
            }),
        );
    },
    { functional: true },
);
