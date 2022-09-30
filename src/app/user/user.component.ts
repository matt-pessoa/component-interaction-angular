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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getCharacters(this.url)
      .subscribe((response: ICharacter[]) => (this.characters = response));
  }
}
