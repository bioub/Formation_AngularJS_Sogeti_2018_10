import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import { ContactsAddComponent } from './contacts/contacts-add/contacts-add.component';
import { ContactsShowComponent } from './contacts/contacts-show/contacts-show.component';

const routes: Routes = [{
  path: 'contacts',
  component: ContactsListComponent,
  children: [
    {
      path: 'add',
      component: ContactsAddComponent,
    },
    {
      path: ':id',
      component: ContactsShowComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
