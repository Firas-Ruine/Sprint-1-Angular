import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{Etudiant} from '../model/etudiant.model';
import { EtudiantService } from '../services/etudiant.service';
@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styles: []
})
export class UpdateEtudiantComponent implements OnInit {
  currentEtudiant = new Etudiant();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router ,
              private etudiantService:EtudiantService) { }

  ngOnInit() : void{
    this.etudiantService.consulterEtudiant(this.activatedRoute.snapshot.params['id']).
    subscribe( etud =>{ this.currentEtudiant = etud;

    },(error)=> { console.log(error)});


  }
  updateEtudiant()
  {
  this.etudiantService.updateEtudiant(this.currentEtudiant).
  subscribe(()=>{
      this.router.navigate(['etudiants']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }
}
