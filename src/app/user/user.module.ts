import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FilterTextComponent } from './user-list/filter-text.component';
import { UsersRoutingModule } from './user-routing.module';
import { CharacterInfoRoutingModule } from '../character-info/character-info-routing.module';

@NgModule({
  declarations: [UserComponent, UserListComponent, FilterTextComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersRoutingModule,
    CharacterInfoRoutingModule,
  ],
  exports: [UserComponent, UserListComponent, FilterTextComponent],
})
export class UserModule {}
