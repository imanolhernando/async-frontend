import { createFeatureSelector } from '@ngrx/store';
import { IssueDataState } from '../state/github.state';

export const getIssuesSelector = createFeatureSelector<IssueDataState>('issue');


