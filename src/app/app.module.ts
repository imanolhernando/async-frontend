import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment.prod';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssuesEffects } from './core/+state/github-repo/github.effects';
import { metaReducers, reducers } from './core/+state/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(
      reducers,
      {
        metaReducers: !environment.production ? [] : metaReducers,
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 25,
    }) : [],
    EffectsModule.forRoot([IssuesEffects]),
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production, }),
  ],
  // providers: [ { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true, } ],
  bootstrap: [AppComponent],
})
export class AppModule { }
