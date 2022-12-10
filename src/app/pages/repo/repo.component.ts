import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { urlValidator } from '../../validators';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  form: UntypedFormGroup;
  constructor(
    private  router: Router,
    public formBuilder: UntypedFormBuilder ) {
    }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new UntypedFormGroup({
      url:
        new UntypedFormControl(
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
