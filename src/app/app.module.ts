import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { IssuesEffects } from './store/effects/github.effects';
import { reducers, metaReducers } from './store';
import {  RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }), 
    environment.storeModules,
    EffectsModule.forRoot([IssuesEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
