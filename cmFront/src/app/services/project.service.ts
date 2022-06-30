import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  jsonPath = '../../../assets/json/'
  constructor(
    private http: HttpClient
  ) { }

// es functionn or ka kvercne httpic get method u kveradarcne mezi json isk
//  Observable knshanake or krnanaq iran subscribe exninq u ksenq or inqe pti exni Projectsneri massiv jog?ha
//  verj es er,apris bayc es qomenttner@ mi jnje ok ;) naye ban exav dzen khanes exav apris shat xndrem ;) mekel @ chmoranas slackov )es ditmamb chei nshe or qnac exneir chzartneir apris sche hangist dir es shut kzzardim exav de ;)
  getProjects(): Observable<Projects[]>{
    return this.http.get<Projects[]>(`${this.jsonPath}/projects.json`);
  }
}
