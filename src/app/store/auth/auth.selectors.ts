import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.reducers';

export const selectAuth = createFeatureSelector<AuthState>('auth');
export const selectAuthUserName = createSelector(selectAuth, (state) => state.userName);
