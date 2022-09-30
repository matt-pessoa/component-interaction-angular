import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/data.service';
import { ICharacter } from '../shared/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  url: string = 'https://hp-api.herokuapp.com/api/characters';
  characters!: ICharacter[];
  filteredCharacters: ICharacter[] = [];

  constructor(private dataService: DataService) {}

  filter(filterText: string): void {
    if (filterText) {
      this.filteredCharacters = this.characters.filter(
        ({ name }) => name.toLowerCase().indexOf(filterText.toLowerCase()) > -1
      );
    } else {
      this.filteredCharacters = this.characters;
    }
  }

  ngOnInit(): void {
    this.dataService
      .getCharacters(this.url)
      .subscribe(
        (response: ICharacter[]) =>
          (this.characters = this.filteredCharacters = response)
      );
  }
}
