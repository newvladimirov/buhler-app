import {createReducer} from "@ngrx/store";

export interface AuthState {
    userName: string
}

const initialState: AuthState = {
    userName: 'Operator'
};
export const authStateReducer = createReducer(
    initialState,
);
