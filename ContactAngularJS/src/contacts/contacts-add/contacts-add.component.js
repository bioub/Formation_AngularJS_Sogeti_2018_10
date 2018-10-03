(function(){
  'use strict';

  const module = angular.module('contacts-add.component', []);

  class ContactAddController {
    constructor(contactService, $state) {
      this.contactService = contactService;
      this.$state = $state;
      this.contact = {
        name: '',
        company: '',
      };
    }

    add() {
      this.contactService.create(this.contact)
        .then(() => {
          this.$state.go('contacts-list'); // redirige vers la route contacts-list
        });
    }
  }

  ContactAddController.$inject = ['contactService', '$state'];

  module.component('contactsAdd', {
    controller: ContactAddController,
    // relatif à index.html
    templateUrl: './contacts/contacts-add/contacts-add.component.html'
  });

}());
