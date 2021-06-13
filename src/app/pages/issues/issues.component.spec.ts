import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MaterialModule } from './../../modules/material.module';
import { IssueDataState } from './../../store/state/github.state';
import { IssuesComponent } from './issues.component';
/**
 * Test unitario para el componente IssuesComponent
 */

describe('IssuesComponent', () => {
  
  let store: MockStore < IssueDataState[]> ;
  const initialState  = {};
  // declaracion del componente a testear
  let component: IssuesComponent;

  // declaracion extrae del componente las inyecciones 
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach( () => {
    /**
     * TesBed objeto para configurar el test
     */
    TestBed.configureTestingModule({
      // en este objeto de configuracion se añaden los arrays (similar a los modules)
      imports:[
        // si se importa algun servico sera necesario SIMULAR la llamada HTTP
        // HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule, 
      ],
      providers:[
        //servicios necesarios
        provideMockStore({ initialState }),
      ],
      declarations: [ IssuesComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();
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
    store = TestBed.inject(MockStore)
    // se activara el NgOnInit
    fixture.detectChanges();
  });

  /**
   * Test
   */
  it('should create', () => {
    let issueDataState: IssueDataState[] = [
      {
        issueData : [],
        error : null,
      count: null
      }
    ]
    store.setState(issueDataState);
    expect(component).toBeTruthy();
  });

});
