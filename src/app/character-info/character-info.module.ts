import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterInfoComponent } from './character-info.component';
import { CharacterInfoRoutingModule } from './character-info-routing.module';

@NgModule({
  declarations: [CharacterInfoComponent],
  imports: [CommonModule, CharacterInfoRoutingModule],
  exports: [CharacterInfoComponent],
})
export class CharacterInfoModule {}
