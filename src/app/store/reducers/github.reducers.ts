import { Action, createReducer, on } from '@ngrx/store';
import * as GitHubActions from './../actions/github.actions';
import { initializeState, IssueDataState } from '../state/github.state';
import { IssueData } from 'src/app/models/issue-data';


const GitHubreducer = createReducer(
  initializeState,
  on(GitHubActions.getIssues, state => state),
  on(GitHubActions.successGetIssues, (state, { payload }) => ({ ...state, issueData: payload, error: null}) ),
  on(GitHubActions.errorGetIssues, (state, { error }) => ({ ...state, error})),
  on(GitHubActions.clearIssues, (state, { payload }) => ({ ...state, issueData: payload}) )
);

export function reducer(state: IssueDataState | undefined, action: Action): {issueData: IssueData[]; error: any; }  {
  return GitHubreducer(state, action);
}

export const getIssues = (state: IssueDataState) => {
  return {
    issueData : state.issueData,
    error :  state.error
  };
};


