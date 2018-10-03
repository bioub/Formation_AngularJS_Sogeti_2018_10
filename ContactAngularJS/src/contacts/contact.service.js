(function(){
  'use strict';

  const module = angular.module('contact.service', []);

  class ContactService {
    constructor($http) {
      this.$http = $http;
    }
    getPeopleNames() {
      return this.$http.get('http://localhost:3000/contacts')
        .then((res) => res.data.map((people) => people.name));
    }

    getAll() {
      return this.$http.get('http://localhost:3000/contacts')
        .then((res) => res.data);
    }

    getById(id) {
      return this.$http.get('http://localhost:3000/contacts/' + id)
        .then((res) => res.data);
    }

    create(contact) {
      return this.$http.post('http://localhost:3000/contacts', contact);
    }
  }

  ContactService.$inject = ['$http'];

  module.service('contactService', ContactService);

}());
