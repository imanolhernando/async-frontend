import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueData } from '../models/issue-data';
import { RepoData } from '../models/repo-data';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private repos = 'repos';
  private headers: HttpHeaders = new HttpHeaders() .set('Content-Type', 'application/json').set('x-requested-with', 'XMLHttpRequest');

  constructor(private http: HttpClient) { }

  getIssues(user: string, repo: string, perPage: number, page: number): Observable<IssueData[]> {
    const URL = `${environment.endpoint}/${this.repos}/${user}/${repo}/issues?per_page=${perPage}&page=${page}`;
    return this.http.get<IssueData[]> ( URL, { headers: this.headers, responseType: 'json' } );
  }

  getRepo(user: string, repo: string): Observable<RepoData> {
    const URL = `${environment.endpoint}/${this.repos}/${user}/${repo}`;
    return this.http.get<RepoData> ( URL, { headers: this.headers, responseType: 'json' } );
  }

}
