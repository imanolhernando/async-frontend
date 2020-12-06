import { createAction, props } from '@ngrx/store';
import { IssueData } from '../../models/issue-data';

export const getIssues = createAction('[GitHub API] Get Issues', props<{payload: string}>());
export const successGetIssues = createAction('[GitHub API] Success Get Issues ', props<{payload: IssueData[]}>());
export const errorGetIssues = createAction('[GitHub API] Error Get Issues', props<{error: Error}>());

export const clearIssues = createAction('[GitHub API] Clear Issues', props<{payload: IssueData[]}>());
