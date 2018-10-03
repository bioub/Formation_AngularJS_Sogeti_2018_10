import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contact';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  public contacts: Contact[] = [];

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.getContacts();
    this.contactService.events.pipe(
      filter((event) => event === 'refresh'),
    ).subscribe((event) => {
      this.getContacts();
    });
  }

  getContacts() {
    this.contactService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

}
