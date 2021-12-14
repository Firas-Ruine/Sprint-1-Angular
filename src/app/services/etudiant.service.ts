import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*',
} )
};
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiURL: string = 'http://localhost:8080/etudiants/api';
  etudiants: Etudiant[]=[];
 // etudiant?: Etudiant;
  constructor(private http : HttpClient , private authService:AuthService) {


   }
   listeEtudiants():Observable<any>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
     let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.get(this.apiURL+"/all",{headers:httpHeaders}
);
   }


   /*ngOnInit(): void {
    this.etudiantService.listeEtudiants().subscribe(etuds => {
    console.log(etuds);
    this.etudiants = etuds;
    });
    }*/

   ajouterEtudiants(etud:Etudiant):Observable<Etudiant>{
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.post<Etudiant>(this.apiURL, etud, {headers:httpHeaders});
   }
   supprimerEtudiant( id:number){
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
    }


  consulterEtudiant(id:number): Observable<Etudiant>{
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<Etudiant>(url,{headers:httpHeaders});
    }
  get(url: string): Observable<any> {
    throw new Error('Method not implemented.');
  }



    updateEtudiant(etud:Etudiant):Observable<Etudiant>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<Etudiant>(this.apiURL, etud, {headers:httpHeaders});
    }

}
