import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Countries} from '../models/Countries';

@Injectable({
  providedIn: 'root'
})
export class BusinessLogicService {

  constructor(private httpClient: HttpClient) {
  }

  public getData(): Observable<Array<Countries>> {
    return this.httpClient.get<Countries[]>('/assets/data/countries.json');
  }

  public login(): void {
    this.httpClient.post('https://login.staging.winoo.club/api/v1/login', {
      "login": "nicola.di.iorio@democom.it",
      "password": "Password1#",
      "grant_type": "password"
    }).subscribe((res) => console.log('richiesta partita => ', res), (error) => console.error('err => ', error));
  }
}
