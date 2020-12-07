import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { urlValidator } from 'src/app/validators';
import { getIssues, getRepo } from './../../store/actions/github.actions';
import { Store } from '@ngrx/store';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private store: Store,
    private  router: Router,
    public formBuilder: FormBuilder ) {   }

  ngOnInit(): void{
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      url:
        new FormControl(
          'https://github.com/angular/angular',
          [ urlValidator(), Validators.required ])
    });
  }

  dispatchGetIssues(url: string): void{
    const str: string = url.replace('https://github.com/', '');
    const strarr: string[] = url.replace('https://github.com/', '').split('/');
    this.router.navigate([`${strarr[0]}/${strarr[1]}`]);
  }

}
