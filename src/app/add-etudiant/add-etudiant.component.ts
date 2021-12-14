import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute,Router } from '@angular/router';
import { UniversityService } from '../services/university.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
newEtudiant = new Etudiant();
universityList:any = [];



  constructor(private etudiantService: EtudiantService,private router :Router,private universityService : UniversityService) {


   }

  ngOnInit(): void {
    this.onSelectUni();
  }
 addEtudiant(){

  this.etudiantService.ajouterEtudiants(this.newEtudiant)
  .subscribe(etud => {
  console.log(etud);
  });
  this.ngOnInit();
  this.router.navigate(['etudiants']).then(()=>
  window.location.reload());
 }

 onSelectUni(){
  this.universityService.listeUniversity().subscribe(response =>{
    console.log(response)
    this.universityList = response;

  });
}

}
