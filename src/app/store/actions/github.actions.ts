import { createAction, props } from '@ngrx/store';
import { IssueData } from '../../models/issue-data';


export const getIssues = createAction('[Issues API] Get Issues');
export const successGetIssues = createAction('[Issues API] Get Issues ', props<{payload: IssueData[]}>());
export const errorGetIssues = createAction('[Issues API] Error Get Issues', props<{error: Error}>());
