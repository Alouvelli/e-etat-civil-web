import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ActeNaissance} from "../model/acte-naissance.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ActeNaissanceService {
  constructor(private http:HttpClient) { }

  public getActesNaissance():Observable<Array<ActeNaissance>>{
    return this.http.get<Array<ActeNaissance>>(environment.backendHost+"/actesNaissance")
  }
  public searchActesNaissance(keyword : string):Observable<Array<ActeNaissance>>{
    return this.http.get<Array<ActeNaissance>>(environment.backendHost+"/actesNaissance/search?keyword="+keyword)
  }
  public saveActeNaissance(acteNaissance: ActeNaissance):Observable<ActeNaissance>{
    return this.http.post<ActeNaissance>(environment.backendHost+"/actesNaissance",acteNaissance);
  }
  public deleteActeNaissance(id: number){
    return this.http.delete(environment.backendHost+"/actesNaissance/"+id);
  }
}
