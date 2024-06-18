import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';  // Asegúrate de tener esta importación
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedComponent } from './shared/shared.component';
import { ReportsModule } from './modules/reports/reports.module';
import { AuthInterceptor } from './_helpers/http.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DashboardComponent } from './modules/reports/dashboard/dashboard.component'; // Importa tu módulo de enrutamiento

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SharedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,  // Asegúrate de que AppRoutingModule esté incluido aquí
    RouterModule,
    ReportsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
