import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsShowComponent } from './contacts-show/contacts-show.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactsListComponent,
    ContactsShowComponent,
    ContactsAddComponent,
  ],
})
export class ContactsModule { }
