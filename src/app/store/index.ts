import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { reducer,  } from './reducers/github.reducers';
import { IssueDataState } from './state/github.state';

export interface State {
    issue: IssueDataState;
    router: RouterReducerState;
  }

export const reducers: ActionReducerMap<State> = {
    issue: reducer,
    router: routerReducer
  };

export const metaReducers: MetaReducer<any>[] = [];

