(function(){
  'use strict';

  const module = angular.module('app', []);

  class PrenomController {
    constructor() {
      this.prenoms = ['Jean', 'Eric'];
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

  module.directive('prenomsList', function() {
    return {
      restrict: 'E',
      controller: 'PrenomController',
      controllerAs: 'prenomCtrl',
      templateUrl: './template.html',
    };
  });

}());
