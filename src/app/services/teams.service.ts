import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Team } from '../models/Team';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  apiUrl = 'https://jonathanallisson.github.io/Backend-copa/db.json';

  constructor(private httpClient: HttpClient) { }

  public getGroups() {
    return this.httpClient.get(this.apiUrl);
  }
}
