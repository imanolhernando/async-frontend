import { IssueData } from './../../models/issue-data';

export interface IssueDataState {
    issueData: IssueData[];
    error: Error;
    count: number;
  }

export const initializeState: IssueDataState = {
    issueData : null,
    error : null,
    count: null
  };
