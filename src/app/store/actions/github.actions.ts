import { RepoData } from './../../models/repo-data';
import { createAction, props } from '@ngrx/store';
import { IssueData } from '../../models/issue-data';

export const getIssues = createAction('[GitHub API] Get Issues', props<{user: string, repo: string, perPage: number, page: number,}>());
export const successGetIssues = createAction('[GitHub API] Success Get Issues ', props<{payload: IssueData[]}>());
export const errorGetIssues = createAction('[GitHub API] Error Get Issues', props<{error: Error}>());


export const getRepo = createAction('[GitHub API] Get  Repo', props<{user: string, repo: string}>());
export const successGetRepo = createAction('[GitHub API] Success Get  Repo ', props<{payload: number}>());
export const errorGetRepo = createAction('[GitHub API] Error Get  Repo', props<{error: Error}>());

export const clearIssues = createAction('[GitHub API] Clear Issues', props<{payload: IssueData[]}>());
