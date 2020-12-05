import { Action, createReducer, on } from '@ngrx/store';
import * as GitHubActions from './../actions/github.actions';
import { IssueData } from '../../models/issue-data';
import { initializeState, IssueDataState } from '../state/github.state';


const GitHubreducer = createReducer(
  initializeState,
  on(GitHubActions.getIssues, state => state),
  on(GitHubActions.successGetIssues, (state, { payload }) => ({ ...state, issueData: payload}) ),
  on(GitHubActions.errorGetIssues, (state, { error }) => ({ ...state, error})),
  on(GitHubActions.clearIssues, (state, { payload }) => ({ ...state, issueData: payload}) )
);

export function reducer(state: IssueDataState | undefined, action: Action) {
  return GitHubreducer(state, action);
}

export const getIssues = (state: IssueDataState) => {
  return {
    issueData : state.issueData,
    error :  state.error
  };
};


