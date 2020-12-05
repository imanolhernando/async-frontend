import { createFeatureSelector } from '@ngrx/store';
import * as fromGithub from '../state/github.state';

export const getIssuesSelector = createFeatureSelector<fromGithub.IssueDataState>('issue');


