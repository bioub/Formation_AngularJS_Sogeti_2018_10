(function(){
  'use strict';

  const module = angular.module('contacts-list.component', []);

  class ContactsListController {
    constructor(contactService) {
      this.prenoms = [];
      contactService.getPeopleNames()
        .then((prenoms) => this.prenoms = prenoms);
    }
  }

  ContactsListController.$inject = ['contactService'];

  module.component('contactsList', {
    // relatif à index.html
    controller: ContactsListController,
    templateUrl: './contacts/contacts-list/contacts-list.component.html'
  });

}());
