import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{Etudiant} from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
import { UniversityService } from '../services/university.service';
@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: []
})
export class UpdateEtudiantComponent implements OnInit {
  currentEtudiant = new Etudiant();
  universityList:any = [];

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router ,
              private etudiantService:EtudiantService,
              private universityService:UniversityService) { }

  ngOnInit() : void{
    this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params['id']).
    subscribe( etud =>{ this.currentEtudiant = etud;

    },(error)=> { console.log(error)});

    this.onSelectUni(this.currentEtudiant.idEtudiant);
  }
  updateEtudiant()
  {
  this.etudiantService.updateEtudiant(this.currentEtudiant).
  subscribe(()=>{
      this.router.navigate(['etudiants']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }

  onSelectUni(id:number){
    this.universityService.listeUniversity().subscribe(response =>{
      console.log(response)
      this.universityList = response;

    });
  }
}
