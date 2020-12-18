import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptor';
import {RespuestasService} from './respuestas.service';

import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecureComponent } from './secure/secure.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card'
import { ResultadosComponent } from './resultados/resultados.component';
import { MatSpinnerOverlayComponent } from './mat-spinner-overlay/mat-spinner-overlay.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecureComponent,
    RegisterComponent,
    TestComponent,
    ResultadosComponent,
    MatSpinnerOverlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatRadioModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },RespuestasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
