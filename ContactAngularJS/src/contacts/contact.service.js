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
  }

  ContactService.$inject = ['$http'];

  module.service('contactService', ContactService);

}());
