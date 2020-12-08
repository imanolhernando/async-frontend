import { clearIssues, getIssues, getRepo } from './../../store/actions/github.actions';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IssueData } from '../../models/issue-data';
import { getIssuesSelector } from '../../store/selectors/github.selector';
import { IssueDataState } from '../../store/state/github.state';
import { ActivatedRoute, Router } from '@angular/router';

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
  pageSize = 100;
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
    this.state$ = this.store.select(getIssuesSelector).subscribe(data => {
      if (data.issueData){
        this.issuesList = new MatTableDataSource<IssueData>(data.issueData);
        this.error = data.error;
        this.changeDetectorRef.detectChanges();
        this.issuesList$ = this.issuesList.connect();
        this.resultsLength = data.count;
        this.calculate(this.resultsLength, this.pageSize);
      }
    });
  }

  ngOnDestroy(): void{
    this.state$.unsubscribe();
  }

  pageEventEmit(event): void{
    console.error(event);
    this.resultsLength = event.length;
    this.store.dispatch(getIssues({user: this.user, repo: this.repo, perPage: event.pageSize, page: event.pageIndex + 1}));
    this.pageEvent = event;
  }

  calculate(total: number, perPage: number): number{
    return  total  / perPage;
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
