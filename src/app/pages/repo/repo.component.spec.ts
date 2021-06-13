import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/modules/material.module';

import { RepoComponent } from './repo.component';

describe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;

  beforeEach( () => {
     TestBed.configureTestingModule({
       imports:[
        RouterTestingModule,
        MaterialModule, 
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
       ],
      declarations: [ RepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('url field validity', () => {
    let errors = {};
    let url = component.form.controls['url'];
    expect(url.valid).toBeFalsy();

    // url field is required
    errors = url.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set url to something incorrect
    url.setValue("test");
    errors = url.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set url to something correct
    url.setValue("github.com/angular/angular");
    errors = url.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
    });
 
  it('submit', () => {
    component.submit('github.com/angular/angular');
  }); 

  it('submit2', () => {
    component.submit('https://github.com/angular/angular');
  });

  

  it('submit3', () => {
    component.submit('http://github.com/angular/angular');
  });

  it('submit3', () => {
    component.submit('d');
  });
  



});

