import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-show',
  templateUrl: './contacts-show.component.html',
  styleUrls: ['./contacts-show.component.css']
})
export class ContactsShowComponent implements OnInit {

  public contact = new Contact();

  constructor(
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      map((params) => params.id),
      switchMap((id) => this.contactService.getById(id)),
    ).subscribe((contact) => {
      this.contact = contact;
    });
  }

}
