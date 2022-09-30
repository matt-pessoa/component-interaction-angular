import { Component, Input, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit {
  listOfCharacters: ICharacter[] = [];
  @Input() get characters(): ICharacter[] {
    return this.listOfCharacters;
  }

  set characters(value: ICharacter[]) {
    if (value) {
      this.listOfCharacters = value;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
