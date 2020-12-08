import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { urlValidator } from '../../validators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  form: FormGroup;

  constructor(
    private  router: Router,
    public formBuilder: FormBuilder ) {   }

  ngOnInit(): void{
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      url:
        new FormControl(
          '',
          [ urlValidator(), Validators.required ])
    });
  }

  dispatchGetIssues(url: string): void{
    const str: string[] = url.replace('https://github.com/', '').split('/');
    this.router.navigate([`${str[0]}/${str[1]}`]);
  }

}
