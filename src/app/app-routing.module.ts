import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes , CanActivate} from '@angular/router';
import { EtudiantsComponent } from './etudiants/etudiants.component';
import { AddEtudiantComponent } from './add-etudiant/add-etudiant.component';
import { UpdateEtudiantComponent } from './update-etudiant/update-etudiant.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EtudiantGuard } from './etudiant.guard';
import { LoginComponent } from './login/login.component';
import { UniversityComponent } from './university/university.component';
import { AddUniversityComponent } from './add-university/add-university.component';
import { UniversityGuard } from './university.guard';
import { UpdateUniversityComponent } from './update-university/update-university.component';
const routes: Routes = [
  {path:"etudiants",component:EtudiantsComponent},
  {path:"add-etudiant",component:AddEtudiantComponent, canActivate:[EtudiantGuard]},
  {path:"universities",component:UniversityComponent},
  {path:"add-university",component:AddUniversityComponent, canActivate:[UniversityGuard]},
  {path:  'login', component: LoginComponent},
  {path:  'app-forbidden', component: ForbiddenComponent},
  {path:"",redirectTo:"etudiants",pathMatch:"full"},
  {path: "updateEtudiant/:id", component: UpdateEtudiantComponent,canActivate:[EtudiantGuard]},
  {path: "updateUniversity/:id", component: UpdateUniversityComponent,canActivate:[UniversityGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
