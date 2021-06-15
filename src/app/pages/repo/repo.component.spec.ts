import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material.module';
import { RepoComponent } from './repo.component';


describe('RepoComponent', () => {
  let component: RepoComponent;
  let fixture: ComponentFixture<RepoComponent>;
  let routerSpy = {
    navigate: jasmine.createSpy('navigate')
  }

  beforeEach( () => {
     TestBed.configureTestingModule({
       imports:[
        MaterialModule, 
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
       ],
      declarations: [ RepoComponent ],
      providers: [
        { provide: Router, useValue: routerSpy },
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

    // Set url to something correct
    url.setValue("github.com/angular/angular");
    errors = url.errors || {};
    expect(errors['required']).toBeFalsy();
    });
 
    it('submit() ', () => {
      const url = 'github.com/angular/angular'
      component.submit(url);
      expect(routerSpy.navigate).toHaveBeenCalledWith(['angular/angular']);
    }); 




});

