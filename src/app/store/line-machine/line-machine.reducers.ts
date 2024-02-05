import {createReducer, on} from '@ngrx/store';

import {configLoadedSuccess, setError, setLineState, updateMachineState} from "./line-machine.actions";
import {RunningStates} from "@buhler/features/line-machine/running-states";
import {MachineLineConfig} from "@buhler/features/line-machine/types";

export type LineState = { [type: number]: RunningStates };

export interface LineMachineState {
    config: MachineLineConfig;
    error: string | null;
    lineState: LineState;
}

export const initialState: LineMachineState = {
    config: {
        machines: [],
    },
    lineState: {},
    error: null,
};
export const lineMachineStateReducer = createReducer(
    initialState,
    on(setLineState, (state, props) => {
        return { ...state, lineState: props.state };
    }),
    on(updateMachineState, (state, props) => {
        return { ...state, lineState: {...state.lineState, [props.id]: props.state} };
    }),
    on(configLoadedSuccess, (state, props) => {
        return { ...state, config: props.config };
    }),
    on(setError, (state, props) => {
        return {...state, error: props.error}
    })
);
