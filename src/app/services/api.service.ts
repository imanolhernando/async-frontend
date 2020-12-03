import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssueData } from '../models/issue-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private repos = 'repos';
  private headers: HttpHeaders = new HttpHeaders() .set('Content-Type', 'application/json') .set('x-requested-with', 'XMLHttpRequest');

  constructor(private http: HttpClient) { }

  getIssues(owner?: string, repo?: string): Observable<IssueData[]> {

    // const URL = `${environment.endpoint}/${this.repos}/${owner}/${repo}/issues`;

    // return this.http.get<IssueData> ( URL, { headers: this.headers, responseType: 'json' } );
    return this.http.get<IssueData[]> ( `assets/mock.json`);

  }

}
