import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { University } from "../model/university.model";
import { AuthService } from "./auth.service";

const httpOptions = {
  headers: new HttpHeaders( {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
  } )
  };
  @Injectable({
    providedIn: 'root'
  })

export class UniversityService {
  apiURL: string = 'http://localhost:8080/etudiants/api/university';
  universities: University[]=[];
  constructor(private http : HttpClient , private authService:AuthService) {


  }

  listeUniversity():Observable<any>{
    let jwt = this.authService.getToken();
    jwt = "Bearer "+jwt;
     let httpHeaders = new HttpHeaders({"Authorization":jwt})
     return this.http.get(this.apiURL+"/all",{headers:httpHeaders}
);
   }
  ajouterUniversity(uni:University):Observable<University>{
    let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.post<University>(this.apiURL+"/", uni, {headers:httpHeaders});
   }

   supprimerUniversity( id:number){
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.delete(url, {headers:httpHeaders});
    }


  consulterUniversity(id:number): Observable<University>{
    const url = `${this.apiURL}/${id}`;
let jwt = this.authService.getToken();
jwt = "Bearer "+jwt;
let httpHeaders = new HttpHeaders({"Authorization":jwt})
return this.http.get<University>(url,{headers:httpHeaders});
    }
  get(url: string): Observable<any> {
    throw new Error('Method not implemented.');
  }



    updateUniversity(etud:University):Observable<University>{
      let jwt = this.authService.getToken();
      jwt = "Bearer "+jwt;
      let httpHeaders = new HttpHeaders({"Authorization":jwt})
      return this.http.put<University>(this.apiURL+"/", etud, {headers:httpHeaders});
    }

}
