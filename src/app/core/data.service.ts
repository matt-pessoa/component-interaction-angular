import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

import { ICharacter } from '../shared/interfaces';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getCharacters(url: string): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>(url).pipe(
      map((characters: ICharacter[]) => {
        let character = characters.filter(
          (char: ICharacter) => char.image !== ''
        );

        return character;
      })
    );
  }

  getCharacterByName(
    url: string,
    charName: string
  ): Observable<ICharacter | null> {
    return this.http.get<ICharacter[]>(url).pipe(
      map((characters: ICharacter[]) => {
        let character = characters.find(({ name }) => name === charName);
        if (character) {
          return character;
        } else {
          return null;
        }
      })
    );
  }
}
