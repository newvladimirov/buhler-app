import { createAction, props } from '@ngrx/store';
import { RunningStates } from '@buhler/features/line-machine/running-states';
import { MachineLineConfig } from '@buhler/features/line-machine/types';

const actionPrefix = '[LineMachines]';

export const updateMachineState = createAction(
    `${actionPrefix} Update machine state`,
    props<{ id: number; state: RunningStates }>(),
);

export const setLineState = createAction(
    `${actionPrefix} Set line-machine state`,
    props<{ state: { [typeId: number]: RunningStates } }>(),
);

export const configLoadedSuccess = createAction(
    `${actionPrefix} Config loaded successfully`,
    props<{ config: MachineLineConfig }>(),
);

export const initMachineLine = createAction(`${actionPrefix} Init machine line`);
export const startMonitoring = createAction(`${actionPrefix} Start monitoring`);
export const setError = createAction(`${actionPrefix} Set error`, props<{ error: string | null }>());
