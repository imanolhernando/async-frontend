import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, exhaustMap } from 'rxjs/operators';
import { ApiService } from './../../services/api.service';
import * as GitHubActions from './../actions/github.actions';
import { IssueData } from '../../models/issue-data';
@Injectable()
export class IssuesEffects {

  constructor(private apiService: ApiService, private action$: Actions) {}

  getIssues$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(GitHubActions.getIssues),
      exhaustMap((action) =>
        this.apiService.getIssues(action.payload).pipe(
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

}
