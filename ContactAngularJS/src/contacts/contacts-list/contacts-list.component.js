(function(){
  'use strict';

  const module = angular.module('contacts-list.component', []);

  class ContactsListController {
    constructor(contactService) {
      this.contacts = [];
      contactService.getAll()
        .then((contacts) => this.contacts = contacts);
    }
  }

  ContactsListController.$inject = ['contactService'];

  module.component('contactsList', {
    // relatif à index.html
    controller: ContactsListController,
    templateUrl: './contacts/contacts-list/contacts-list.component.html'
  });

}());
