(function(){
  'use strict';

  const module = angular.module('app', ['ngResource']);

  class UserController {
    constructor(User) {
      this.users = User.query();
    }
  }

  module.controller('UserController', UserController);

  module.component('usersList', {
    controller: 'UserController',
    templateUrl: './template.html',
  });

  function userFactory($resource) {
    return $resource(
      'https://jsonplaceholder.typicode.com/users/:userId',
      {userId: '@id'}
    );
  }
  module.factory('User', userFactory);


}());
