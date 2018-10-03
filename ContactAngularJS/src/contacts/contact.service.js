(function(){
  'use strict';

  const module = angular.module('contact.service', []);

  class ContactService {
    constructor($http) {
      this.$http = $http;
    }
    getPeopleNames() {
      return this.$http.get('https://swapi.co/api/people/')
        .then((res) => res.data.results.map((people) => people.name));
    }
  }

  ContactService.$inject = ['$http'];

  module.service('contactService', ContactService);

}());
