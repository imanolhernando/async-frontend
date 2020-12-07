import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueData } from '../models/issue-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RepoData } from '../models/repo-data';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private repos = 'repos';
  private headers: HttpHeaders = new HttpHeaders() .set('Content-Type', 'application/json').set('x-requested-with', 'XMLHttpRequest');

  constructor(private http: HttpClient) { }

  getIssues(str: string): Observable<IssueData[]> {

    // const URL = `${environment.endpoint}/${this.repos}/${str}/issues`;

    // return this.http.get<IssueData[]> ( URL, { headers: this.headers, responseType: 'json' } );
    return this.http.get<IssueData[]> ( `assets/mock.json`);

  }

  getRepo(str: string): Observable<RepoData> {

    // const URL = `${environment.endpoint}/${this.repos}/${str}`;

    // return this.http.get<RepoData> ( URL, { headers: this.headers, responseType: 'json' } );
    return this.http.get<RepoData> ( `assets/repo.json`);

  }

}
