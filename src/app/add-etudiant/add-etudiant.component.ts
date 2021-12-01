import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {
newEtudiant = new Etudiant();
  constructor(private etudiantService: EtudiantService,private router :Router) { }

  ngOnInit(): void {
  }
 addEtudiant(){
  this.etudiantService.ajouterEtudiants(this.newEtudiant)
  .subscribe(etud => {
  console.log(etud);
  });
  this.router.navigate(['etudiants']).then(()=>
  window.location.reload());
 }
}
