import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { urlValidator } from '../../validators';
import { Router } from '@angular/router';
import { of } from 'rxjs';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  form: FormGroup;
  constructor(
    private  router: Router,
    public formBuilder: FormBuilder ) {
    }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      url:
        new FormControl(
          '',
          [
            urlValidator,
            Validators.required,
          ])
    });
  }

  submit(url: string): void{
    const str: string[] = url.split('/');
    this.router.navigate([`${str[str.length - 2] }/${str[str.length - 1 ]}`]);
  }

}
