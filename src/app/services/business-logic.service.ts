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
}
