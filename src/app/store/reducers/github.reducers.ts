import { Action, createReducer, on } from '@ngrx/store';
import * as GitHubActions from './../actions/github.actions';
import { IssueData } from '../../models/issue-data';

export interface IssueDataState {
  issueData: IssueData[];
  error: Error;
}

export const initializeState: IssueDataState = {
      issueData : null,
      error : null

};

const GitHubreducer = createReducer(
  initializeState,
  on(GitHubActions.getIssues, state => state),
  on(GitHubActions.successGetIssues, (state, { payload }) => ({ ...state, issueData: payload}) ),
  on(GitHubActions.errorGetIssues, (state, { error }) => ({ ...state, error})),
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


