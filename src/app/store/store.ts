import {ActionReducer} from "@ngrx/store";
import {LineMachineState, lineMachineStateReducer} from "./line-machine/line-machine.reducers";
import {AuthState, authStateReducer} from "@buhler/store/auth/auth.reducers";

export interface AppStore {
    lineMachine: ActionReducer<LineMachineState>;
    auth: ActionReducer<AuthState>
}

export const appStore: AppStore = {
    lineMachine: lineMachineStateReducer,
    auth: authStateReducer,
};
