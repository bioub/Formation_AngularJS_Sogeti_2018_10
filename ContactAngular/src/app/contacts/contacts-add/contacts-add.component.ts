import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.css']
})
export class ContactsAddComponent implements OnInit {

  public contact = new Contact();

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  add() {
    this.contactService.create(this.contact).subscribe(() => {
      this.contactService.events.emit('refresh');
      this.router.navigate(['contacts']);
    });
  }

}
