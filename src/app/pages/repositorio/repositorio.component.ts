import { IssueDataState } from '../../store/state/github.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { getIssues, clearIssues } from './../../store/actions/github.actions';
import { IssueData } from '../../models/issue-data';
import { getIssuesSelector } from '../../store/selectors/github.selector';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss']
})
export class RepositorioComponent implements OnInit , OnDestroy {

  issuesList: IssueData[] = [];
  error: Error;

  constructor(private store: Store< IssueDataState >) {
    this.store.select(getIssuesSelector).subscribe(data => {
      this.issuesList = data.issueData as any;
      this.error = data.error as any;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(getIssues({payload:'irontec/ivozprovider'}));
  }

  ngOnDestroy(): void  { }

  dispatchGetIssues(url: string): void{
    const str: string = url.replace('https://github.com/', '');
    console.log(url.replace('https://github.com/', ''));
    this.store.dispatch(getIssues({payload: str}));
  }

  clear(): void{
    this.store.dispatch(clearIssues({payload: []}));
  }

}
