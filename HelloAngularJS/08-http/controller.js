(function(){
  'use strict';

  const module = angular.module('app', []);

  class PrenomController {
    constructor($http) {

      $http.get('https://swapi.co/api/people/')
        .then((res) => {
          const data = res.data;
          this.prenoms = data.results.map((people) => people.name);
        })
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

  module.controller('PrenomController', PrenomController);

  module.component('prenomsList', {
    controller: 'PrenomController',
    templateUrl: './template.html',
  });

}());
