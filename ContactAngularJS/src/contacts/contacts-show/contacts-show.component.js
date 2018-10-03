(function(){
  'use strict';

  const module = angular.module('contacts-show.component', []);

  class ContactsShowController {
    /**
     *
     * @param {*} contactService
     * @param {import('@uirouter/angularjs').StateService} $state
     */
    constructor(contactService, $state) {
      contactService.getById($state.params.id)
        .then((contact) => this.contact = contact);
    }
  }

  ContactsShowController.$inject = ['contactService', '$state'];

  module.component('contactsShow', {
    // relatif à index.html
    controller: ContactsShowController,
    templateUrl: './contacts/contacts-show/contacts-show.component.html'
  });

}());
