import { clearIssues, getIssues, getRepo } from './../../store/actions/github.actions';
import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IssueData } from 'src/app/models/issue-data';
import { getIssuesSelector } from 'src/app/store/selectors/github.selector';
import { IssueDataState } from 'src/app/store/state/github.state';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  issuesList: IssueData[] = [];
  error: Error;
  dataSource: MatTableDataSource<IssueData>;
  obs: Observable<IssueData[]>;
  resultsLength: number;
  state$: Subscription;


  // MatPaginator Inputs
  pageSize = 100;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;


user: string;
repo: string;
  user$: Observable<unknown>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store< IssueDataState[] >,
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
        this.issuesList = data.issueData;
        this.dataSource = new MatTableDataSource<IssueData>(this.issuesList);
        this.error = data.error;
        this.changeDetectorRef.detectChanges();
        this.obs = this.dataSource.connect();
        this.resultsLength = data.count;
        this.calculate(this.resultsLength, this.pageSize);
        console.log(this.resultsLength);
        console.log("PAGINAS"+this.calculate(this.resultsLength, this.pageSize));
      }
    });
  }

  pageEventEmit(event): void{
    console.error(event);
    this.resultsLength = event.length;
    this.store.dispatch(getIssues({user: this.user, repo: this.repo, perPage: event.pageSize, page: event.pageIndex+1}));
    this.pageEvent = event;
  }

  ngOnDestroy(): void{
    this.state$.unsubscribe();
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

  calculate(total: number, perPage: number): number{
    return  total  / perPage;
  }
}
