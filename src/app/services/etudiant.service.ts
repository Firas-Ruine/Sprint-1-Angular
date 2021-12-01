import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
headers: new HttpHeaders( {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin':'*',
  'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjpbIkFETUlOIiwiVVNFUiJdLCJleHAiOjE2Mzg5MDcxOTV9.ArMwzd0XR8Y4fl_U7wsaWJ613gJGFKUKngPSSELxCDs',
} )


};
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  apiURL: string = 'http://localhost:8080/etudiants/api';
  etudiants: Etudiant[]=[];
 // etudiant?: Etudiant;
  constructor(private http : HttpClient) {


   }
   listeEtudiants():Observable<any>{
    return this.http.get(this.apiURL,httpOptions);


   }
   /*ngOnInit(): void {
    this.etudiantService.listeEtudiants().subscribe(etuds => {
    console.log(etuds);
    this.etudiants = etuds;
    });
    }*/

   ajouterEtudiants(etud:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.apiURL, etud,httpOptions);
   }
   supprimerEtudiant( id:number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url,httpOptions);
    }


  consulterEtudiant(id:number): Observable<Etudiant>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Etudiant>(url,httpOptions);
    }
  get(url: string): Observable<any> {
    throw new Error('Method not implemented.');
  }



    updateEtudiant(etud:Etudiant):Observable<Etudiant>{
       return this.http.put<Etudiant>(`${this.apiURL}`,etud,httpOptions)
    }

}
