import { IssueDataState } from '../../store/state/github.state';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  Store } from '@ngrx/store';
import * as GitHubActions from './../../store/actions/github.actions';
import { IssueData } from '../../models/issue-data';
import * as from from './../../store/selectors/';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss']
})
export class RepositorioComponent implements OnInit , OnDestroy {

  issuesList: IssueData[] = [];
  error: Error;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private store: Store< IssueDataState >) {

  this.store.select(from.getIssuesSelector) .subscribe(data => {
    this.issuesList = data.issueData as any;
    this.error = data.error as any;
  });

  }


  ngOnInit(): void {
    // this.store.dispatch(GitHubActions.getIssues({payload:'irontec/ivozprovider'})); 
  }

  ngOnDestroy(): void  { }

  dispatchGetIssues(url: string): void{
    const str: string = url.replace('https://github.com/', '');
    console.log(url.replace('https://github.com/', ''));
    this.store.dispatch(GitHubActions.getIssues({payload: str}));
  }

  clear(): void{
    this.store.dispatch(GitHubActions.clearIssues({payload: []}));
  }

}
