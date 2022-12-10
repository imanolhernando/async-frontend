import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { urlValidator } from '@utils/validators';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss'],
})
export class RepoComponent implements OnInit {
  form: FormGroup;

  private urlControl = new FormControl<string>('', {
    validators: [urlValidator, Validators.required],
    nonNullable: true,
  });

  constructor(
    private router: Router,
     public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = new FormGroup({
      url: this.urlControl,
    });
  }

  submit(url: string): void {
    const str: string[] = url.split('/');
    this.router.navigate([`${str[str.length - 2]}/${str[str.length - 1]}`]);
  }

  get fUrl(): FormControl<string> {
    return this.form.controls['url'] as FormControl;
  }
}
