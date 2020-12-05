import { IssueData } from './../../models/issue-data';

export interface IssueDataState {
    issueData: IssueData[];
    error: Error;
  }

export const initializeState: IssueDataState = {
        issueData : null,
        error : null
  };
