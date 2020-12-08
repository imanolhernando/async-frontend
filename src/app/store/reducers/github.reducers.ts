import { IssueData } from './../../models/issue-data';
import { Action, createReducer, on } from '@ngrx/store';
import * as GitHubActions from './../actions/github.actions';
import { initializeState, IssueDataState } from '../state/github.state';

const GitHubreducer = createReducer(
  initializeState,
  on(GitHubActions.getIssues, state => state),
  on(GitHubActions.successGetIssues, (state, { payload }) => ({ ...state, issueData: payload, error: null}) ),
  on(GitHubActions.errorGetIssues, (state, { error }) => ({ ...state, error, issueData: []})),
  on(GitHubActions.getRepo, state => state),
  on(GitHubActions.successGetRepo, (state, { payload }) => ({ ...state, count: payload, error: null}) ),
  on(GitHubActions.errorGetRepo, (state, { error }) => ({ ...state, error})),
  on(GitHubActions.clearIssues, (state, { payload }) => ({ ...state, issueData: payload}) )
);

export function reducer(state: IssueDataState | undefined, action: Action): {issueData: IssueData[]; count: number; error: any; }  {
  return GitHubreducer(state, action);
}

export const getIssues = (state: IssueDataState) => {
  return {
    issueData : state.issueData,
    count: state.count,
    error :  state.error
  };
};


