import {createFeatureSelector, createSelector} from "@ngrx/store";
import {LineMachineState} from "@buhler/store";

export const selectLineMachines = createFeatureSelector<LineMachineState>('lineMachine');
export const selectLineMachineConfig = createSelector(selectLineMachines, (state) => state.config);
export const selectLineMachineState = createSelector(selectLineMachines, (state) => state.lineState);
export const selectLineMachine = (id: number) => createSelector(selectLineMachines, ({ lineState }) => lineState[id]);
export const selectError = createSelector(selectLineMachines,(state) => state.error)
