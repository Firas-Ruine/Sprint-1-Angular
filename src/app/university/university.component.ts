
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{University} from '../model/university.model';
import { UniversityService } from '../services/university.service';
import {RouterModule} from '@angular/router';
@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})

export class UniversityComponent implements OnInit {
   universities : any = [];
  constructor(private universityService: UniversityService,private router:Router) {
   //this.etudiants= etudiantService.listeEtudiants();

  }

    ngOnInit(): void {
      this.universityService.listeUniversity().subscribe((uni) => {
      console.log(uni);
      this.universities = uni;
      })
      }

supprimerUniversity(u:University){

  let conf = confirm("Etes-vous sûr ?");
    if (conf)
  this.universityService.supprimerUniversity(u.idUni).subscribe(()=>{
  this.SuprimerUniversityDuTableau(u);
  });
}

SuprimerUniversityDuTableau(uni : University) {
  this.universities.forEach((cur: { idUni: number; }, index: any) => {
  if(uni.idUni=== cur.idUni) {
  this.universities.splice(index, 1);
  }
  });
  }
}
