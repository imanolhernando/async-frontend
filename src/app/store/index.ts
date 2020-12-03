import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromGithub from './reducers/github.reducers';

export interface State {
    issue: fromGithub.IssueDataState;
    router: RouterReducerState;
  }

export const reducers: ActionReducerMap<State> = {
    issue: fromGithub.reducer,
    router: routerReducer
  };

export const metaReducers: MetaReducer<any>[] = [];

