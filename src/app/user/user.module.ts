import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { FilterTextComponent } from './user-list/filter-text.component';

@NgModule({
  declarations: [UserComponent, UserListComponent, FilterTextComponent],
  imports: [CommonModule, FormsModule],
  exports: [UserComponent, UserListComponent, FilterTextComponent],
})
export class UserModule {}
