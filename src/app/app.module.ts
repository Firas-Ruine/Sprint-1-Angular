import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { UniversityComponent } from './university/university.component';
@NgModule({
  declarations: [
    AppComponent,
    EtudiantsComponent,
    AddEtudiantComponent,
    UpdateEtudiantComponent,
    LoginComponent,
    ForbiddenComponent,
    AddUniversityComponent,
    UpdateUniversityComponent,
    UniversityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
