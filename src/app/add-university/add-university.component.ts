import { Component, OnInit } from '@angular/core';
import { University } from '../model/university.model';
import { UniversityService } from '../services/university.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-university',
  templateUrl: './add-university.component.html',
  styleUrls: ['./add-university.component.css']
})
export class AddUniversityComponent implements OnInit {
newUniversity = new University();
  constructor(private universityService: UniversityService,private router :Router) { }

  ngOnInit(): void {
  }
 addUniversity(){
  this.universityService.ajouterUniversity(this.newUniversity)
  .subscribe(etud => {
  console.log(etud);
  });
  this.router.navigate(['universities']).then(()=>
  window.location.reload());
 }
}
