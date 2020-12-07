import { RepoData } from './../../models/repo-data';
import { IssueDataState } from '../../store/state/github.state';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {  Store } from '@ngrx/store';
import { getIssues, clearIssues, getRepo } from './../../store/actions/github.actions';
import { IssueData } from '../../models/issue-data';
import { getIssuesSelector } from '../../store/selectors/github.selector';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.scss']
})
export class RepositorioComponent implements OnInit , OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  issuesList: IssueData[] = [];
  error: Error;
  dataSource: MatTableDataSource<IssueData>;
  obs: Observable<IssueData[]>;
  resultsLength: number;

  constructor(
    private store: Store< IssueDataState[] >,
    private changeDetectorRef: ChangeDetectorRef
  ) {

  this.store.select(getIssuesSelector).subscribe(data => {
      if (data.issueData){
        this.issuesList = data.issueData;
        this.dataSource = new MatTableDataSource<IssueData>(this.issuesList);
        this.resultsLength = data.count;
        console.log( this.resultsLength);
        this.error = data.error;
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
      }
    });
  }

  ngOnInit(): void {
    // this.store.dispatch(getIssues({payload: 'irontec/ivozprovider'}));
  }

  ngOnDestroy(): void  {
    // TODO unsubscribe
  }

  dispatchGetIssues(url: string): void{
    const str: string = url.replace('https://github.com/', '');
    console.log(url.replace('https://github.com/', ''));
    this.store.dispatch(getIssues({payload: str}));
    this.store.dispatch(getRepo({payload: str}));
  }

  clear(): void{
    this.store.dispatch(clearIssues({payload: []}));
  }

}
