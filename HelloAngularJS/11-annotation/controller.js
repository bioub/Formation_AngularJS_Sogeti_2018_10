(function(){
  'use strict';

  const module = angular.module('app', []);

  class PrenomController {
    constructor(starWarsService) {

      starWarsService.getPeopleNames()
        .then((prenoms) => this.prenoms = prenoms)
        .catch((err) => {
          console.log(err);
        });

      this.prenoms = [];
    }

    add() {
      this.prenoms.push(this.prenom);
    }

    sort() {
      this.prenoms.sort();
    }

    remove(i) {
      this.prenoms.splice(i, 1);
    }
  }

  PrenomController.$inject = ['starWarsService'];

  module.controller('PrenomController', PrenomController);

  module.component('prenomsList', {
    controller: 'PrenomController',
    templateUrl: './template.html',
  });

  // Pour les services custom

  // 2 cas possible
  // class ou constructor function
  class StarWarsService {
    constructor($http) {
      this.$http = $http;
    }
    getPeopleNames() {
      return this.$http.get('https://swapi.co/api/people/')
        .then((res) => res.data.results.map((people) => people.name));
    }
  }

  StarWarsService.$inject = ['$http'];

  module.service('starWarsService', StarWarsService);


  // factory (une fonction qui retoure l'objet)
  /*
  function starWarsServiceFactory() {
    return {};
  }
  module.factory('starWarsService', starWarsServiceFactory);
  */

}());
