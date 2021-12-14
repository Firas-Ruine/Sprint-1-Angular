import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import{University} from '../model/university.model';
import { UniversityService } from '../services/university.service';
@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styles: []
})
export class UpdateUniversityComponent implements OnInit {
  currentUniversity = new University();
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router ,
              private universityService:UniversityService) { }

  ngOnInit() : void{
    this.universityService.consulterUniversity(this.activatedRoute.snapshot.params['id']).
    subscribe( etud =>{ this.currentUniversity = etud;

    },(error)=> { console.log(error)});


  }
  updateUniversity()
  {
  this.universityService.updateUniversity(this.currentUniversity).
  subscribe(()=>{
      this.router.navigate(['universities']);
    },(error) => { alert("Problème lors de la modification !"); }
    );
  }
}
