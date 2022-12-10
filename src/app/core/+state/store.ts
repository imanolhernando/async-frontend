/* eslint-disable @typescript-eslint/no-explicit-any */
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { reducer } from './github-repo/github.reducers';
import { IssueDataState } from './github-repo/github.state';

export interface State {
  issue: IssueDataState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  issue: reducer,
  router: routerReducer,
};

export const metaReducers: MetaReducer<any>[] = [];
