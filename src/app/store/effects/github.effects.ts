import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { IssueData } from '../../models/issue-data';
import { RepoData } from './../../models/repo-data';
import { ApiService } from './../../services/api.service';
import * as GitHubActions from './../actions/github.actions';
@Injectable()
export class IssuesEffects {

  constructor(private apiService: ApiService, private action$: Actions) {}

  getIssues$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GitHubActions.getIssues),
      exhaustMap((action) =>
        this.apiService.getIssues(action.user, action.repo, action.perPage, action.page).pipe(
          map((data: IssueData[]) => {
            return GitHubActions.successGetIssues({ payload: data });
          }),
          catchError((error) => {
            return of(GitHubActions.errorGetIssues(error));
          })
        )
      )
    )
  );

  getRepo$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GitHubActions.getRepo),
      exhaustMap((action) =>
        this.apiService.getRepo(action.user, action.repo).pipe(
          map((data: RepoData) => {
            return GitHubActions.successGetRepo({ payload: data.open_issues_count });
          }),
          catchError((error) => {
            return of(GitHubActions.errorGetIssues(error));
          })
        )
      )
    )
  );

}
