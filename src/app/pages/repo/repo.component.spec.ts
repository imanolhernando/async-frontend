import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from 'src/app/modules/material.module';

import { RepoComponent } from './repo.component';

describe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;
  let router = {
    navigate: jasmine.createSpy('navigate')
  }

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
      declarations: [ RepoComponent ],
      providers: [
        { provide: Router, useValue: router }
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
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
    expect(url.valid).toBeFalse();

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
 
  it('submit() call navigate if str.length', () => {
    const url = 'github.com/angular/angular'
    component.submit(url);
    expect(router.navigate).toHaveBeenCalled();
  }); 

  xit('submit() 2', () => {
    component.submit('http://github.com/f');
    expect(router.navigate).not.toHaveBeenCalled();
  }); 

  
  // it('submit4', () => {
  //   const url = ''
  //   component.submit(url);
  //   expect(router.navigate).not.toHaveBeenCalled();
  // });



});

