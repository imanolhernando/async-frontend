import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { clearIssues, getIssues, getRepo } from '@core/+state/github-repo/github.actions';
import { getIssuesSelector } from '@core/+state/github-repo/github.selector';
import { IssueDataState } from '@core/+state/github-repo/github.state';
import { IssueData } from '@core/repository/domain/issue-data';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})

export class IssuesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  error: Error;
  issuesList: MatTableDataSource<IssueData>;
  issuesList$: Observable<IssueData[]>;
  resultsLength: number;
  state$: Subscription;
  pageSize = 7;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent;
  user: string;
  repo: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store < IssueDataState[] >,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.user = this.route.snapshot.paramMap.get('user');
    this.repo = this.route.snapshot.paramMap.get('repo');
    this.store.dispatch(getIssues({user: this.user, repo: this.repo, perPage: this.pageSize, page: 1}));
    this.store.dispatch(getRepo({user: this.user, repo: this.repo}));
  }

  ngOnInit(): void {
    this.state$ = this.store.pipe(select(getIssuesSelector)).subscribe(data => {
      if (data.issueData){
        this.issuesList = new MatTableDataSource<IssueData>(data.issueData);
        this.error = data.error;
        this.changeDetectorRef.detectChanges();
        this.issuesList$ = this.issuesList.connect();
        this.resultsLength = data.count;
      }
    });
  }

  ngOnDestroy(): void{
    this.state$.unsubscribe();
  }

  pageEventEmit(event): void{
    this.pageEvent = event;
    this.store.dispatch(
      getIssues(
        { user: this.user,
          repo: this.repo,
          perPage: this.pageEvent.pageSize,
          page: this.pageEvent.pageIndex + 1 
        }
      )
    );
  }

  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  clear(): void{
    this.store.dispatch(clearIssues({payload: []}));
    this.router.navigate([`/`]);
  }
}
