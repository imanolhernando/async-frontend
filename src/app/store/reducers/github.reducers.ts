import { Action, createReducer, on } from '@ngrx/store';
import { initializeState, IssueDataState } from '../state/github.state';
import { IssueData } from './../../models/issue-data';
import * as GitHubActions from './../actions/github.actions';

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

export function reducer(state: IssueDataState | undefined, action: Action): {issueData: IssueData[]; count: number; error: Error; }  {
  return GitHubreducer(state, action);
}


