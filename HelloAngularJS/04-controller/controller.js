(function(){
  'use strict';

  const module = angular.module('app', []);

  class PrenomController {
    constructor($scope) {

      $scope.prenoms = ['Jean', 'Eric'];

      $scope.add = function() {
        $scope.prenoms.push($scope.prenom);
      };

      $scope.sort = function() {
        $scope.prenoms.sort();
      };

      $scope.remove = function(i) {
        $scope.prenoms.splice(i, 1);
      };

      // MDN : Array.prototype.sort
      // Array.prototype.splice

    }
  }

  module.controller('PrenomController', PrenomController);

}());
