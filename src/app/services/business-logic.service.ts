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
    this.httpClient.post('http://api.cashnova.democom.tech/api/v1/login', {
      "login": "super_admin@test.it",
      "password": "Password1#",
      "grant_type": "password"
    }).subscribe((res) => console.log('richiesta partita => ', res), (error) => console.error('err => ', error));
  }
}
