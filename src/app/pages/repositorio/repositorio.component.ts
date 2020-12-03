import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';


import * as GitHubActions from './../../store/actions/github.actions';
import { IssueData } from '../../models/issue-data';
import { map } from 'rxjs/operators';
import { IssueDataState } from 'src/app/store/reducers/github.reducers';
import * as from from './../../store/selectors/';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss']
})
export class RepositorioComponent implements OnInit , OnDestroy {

  issuesList: IssueData[] = [];

  constructor(private store: Store< IssueDataState >) {
    this.store.select(from.getIssuesSelector) .subscribe(data => {
      this.issuesList = data.issueData as any;
    });
  }


  ngOnInit(): void { }

  ngOnDestroy(): void  { }

 dispatchGetIssues(): void{
  this.store.dispatch(GitHubActions.getIssues());
 }

}
