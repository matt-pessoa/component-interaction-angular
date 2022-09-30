import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from '../shared/interfaces';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getCharacters(url: string): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(url);
  }
}
