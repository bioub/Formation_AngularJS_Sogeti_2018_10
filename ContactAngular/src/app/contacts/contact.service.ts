import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public events = new EventEmitter<string>();

  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<Contact[]>('http://localhost:3000/contacts');
  }

  getById(id) {
    return this.httpClient.get<Contact>('http://localhost:3000/contacts/' + id);
  }

  create(contact) {
    return this.httpClient.post<Contact>('http://localhost:3000/contacts', contact);
  }
}
