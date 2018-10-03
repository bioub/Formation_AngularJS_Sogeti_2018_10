(function(){
  'use strict';

  const module = angular.module('app.module', [
    'contacts.module',
    'ui.router',
  ]);

  /**
   * @param {import('@uirouter/angularjs').StateProvider} $stateProvider
   * @param {import('angular').ILocationProvider} $locationProvider
   */
  function config($stateProvider, $locationProvider) {
    // $locationProvider.html5Mode(true);

    /*
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


    $stateProvider.state({
      name: 'contacts-show',
      url: '/contacts/{id}',
      component: 'contactsShow',
    });
    */

   $stateProvider.state({
      name: 'contacts',
      url: '/contacts',
      component: 'contactsList',
    });

    $stateProvider.state({
      name: 'contacts.add',
      url: '/add',
      component: 'contactsAdd',
    });


    $stateProvider.state({
      name: 'contacts.show',
      url: '/{id}',
      component: 'contactsShow',
    });

  }

  config.$inject = ['$stateProvider', '$locationProvider'];

  module.config(config);

}());
