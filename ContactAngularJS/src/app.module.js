(function(){
  'use strict';

  const module = angular.module('app.module', [
    'contacts.module',
    'ui.router',
  ]);

  /**
   * @param {import('@uirouter/angularjs').StateProvider} $stateProvider
   */
  function config($stateProvider) {
    $stateProvider.state({
      name: 'contacts-list',
      url: '/contacts',
      component: 'contactsList',
    });

    $stateProvider.state({
      name: 'contacts-add',
      url: '/contacts/add',
      component: 'contactsAdd',
    });
  }

  config.$inject = ['$stateProvider'];

  module.config(config);

}());
