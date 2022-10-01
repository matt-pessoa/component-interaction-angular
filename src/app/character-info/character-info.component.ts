import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../core/data.service';
import { ICharacter } from '../shared/interfaces';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
})
export class CharacterInfoComponent implements OnInit {
  url: string = 'https://hp-api.herokuapp.com/api/characters';
  name!: string;
  character!: ICharacter | null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name') || '';

    this.dataService
      .getCharacterByName(this.url, this.name)
      .subscribe((char) => {
        this.character = char;
      });
  }
}
