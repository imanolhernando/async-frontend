import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { State } from '@core/+state/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { getIssuesSelector } from '../../../core/+state/github-repo/github.selector';
import { MaterialModule } from '../../components/material.module';
import { IssuesComponent } from './issues.component';

/**
 * Test unitario para el componente IssuesComponent
 */

describe('IssuesComponent', () => {
  let mockgetIssuesSelector;
  let store: MockStore<State>;

  const initialState: State = {
    issue: {
      issueData: [],
      error: null,
      count: null,
    },
    router: null,
  };
  // declaracion del componente a testear
  let component: IssuesComponent;

  // declaracion extrae del componente las inyecciones
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(() => {
    /**
     * TesBed objeto para configurar el test
     */
    TestBed.configureTestingModule({
      // en este objeto de configuracion se añaden los arrays (similar a los modules)
      imports: [BrowserAnimationsModule, MaterialModule, RouterTestingModule],
      providers: [
        //servicios necesarios
        provideMockStore({ initialState }),
      ],
      declarations: [IssuesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  /**
   * Evento que se ejecuta en cada test
   * Instancia el test
   */
  beforeEach(() => {
    // crear el componente con la configuracion configureTestingModule
    fixture = TestBed.createComponent(IssuesComponent);
    // instanciamos el componente
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);

    mockgetIssuesSelector = store.overrideSelector(getIssuesSelector, {
      issueData: [],
      error: null,
      count: null,
    });

    store.refreshState();
    // se activara el NgOnInit
    fixture.detectChanges();
  });

  /**
   * Test
   */
  it('should create with data', () => {
    expect(component).toBeTruthy();

    expect(component.resultsLength).not.toBeUndefined;

    mockgetIssuesSelector.setResult({
      issueData: null,
      error: null,
      count: null,
    });
    store.refreshState();
    fixture.detectChanges();
    expect(component.resultsLength).toBeUndefined;
  });

  it('clear()', () => {
    const spyStore = spyOn(store, 'dispatch');
    component.clear();
    expect(spyStore).toHaveBeenCalled();
  });

  it('setPageSizeOptions()', () => {
    component.setPageSizeOptions('2');
    expect(component.pageSizeOptions).toEqual([2]);

    component.setPageSizeOptions('');
    expect(component.pageSizeOptions).toEqual(component.pageSizeOptions);
  });

  it('pageEventEmit()', () => {
    const spyStore = spyOn(store, 'dispatch');
    component.pageEventEmit({
      pageIndex: 1,
      previousPageIndex: 1,
      pageSize: 1,
      length: 1,
    });
    expect(component.pageEvent.length).toBe(1);
    expect(spyStore).toHaveBeenCalled();
  });
});
