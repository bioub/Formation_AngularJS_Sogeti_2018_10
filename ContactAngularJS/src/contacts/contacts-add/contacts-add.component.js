(function(){
  'use strict';

  const module = angular.module('contacts-add.component', []);

  class ContactAddController {
    constructor(contactService) {
      this.contact = {
        name: '',
        company: '',
      };
    }

    add() {
      console.log(this.contact);
    }
  }

  ContactAddController.$inject = ['contactService'];

  module.component('contactsAdd', {
    controller: ContactAddController,
    // relatif à index.html
    templateUrl: './contacts/contacts-add/contacts-add.component.html'
  });

}());
