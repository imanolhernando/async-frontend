import { createFeatureSelector } from '@ngrx/store';
import { IssueDataState } from './github.state';

export const getIssuesSelector = createFeatureSelector<IssueDataState>('issue');


