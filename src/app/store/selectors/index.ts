import { createFeatureSelector } from '@ngrx/store';
import * as fromGithub from '../reducers/github.reducers';

export const getIssuesSelector = createFeatureSelector<fromGithub.IssueDataState>('issue');


