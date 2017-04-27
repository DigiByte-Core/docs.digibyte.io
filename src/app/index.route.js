(function() {
  'use strict';

  angular
    .module('digiDocs')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($routeProvider, $locationProvider) {
    $routeProvider
			.when('/overview', {
				template: '<marked src=' + '\"\'/app/docs/index.md\'\"' + '></marked>'
    	})
			.when('/address', {
				template: '<marked src=' + '\"\'/app/docs/address.md\'\"' + '></marked>'
			})
			.when('/block', {
				template: '<marked src=' + '\"\'/app/docs/block.md\'\"' + '></marked>'
			})
			.when('/crypto', {
				template: '<marked src=' + '\"\'/app/docs/crypto.md\'\"' + '></marked>'
			})
			.when('/encoding', {
				template: '<marked src=' + '\"\'/app/docs/encoding.md\'\"' + '></marked>'
			})
			.when('/hd-keys', {
				template: '<marked src=' + '\"\'/app/docs/hierarchical.md\'\"' + '></marked>'
			})
			.when('/networks', {
				template: '<marked src=' + '\"\'/app/docs/networks.md\'\"' + '></marked>'
			})
			.when('/private-key', {
				template: '<marked src=' + '\"\'/app/docs/privatekey.md\'\"' + '></marked>'
			})
			.when('/public-key', {
				template: '<marked src=' + '\"\'/app/docs/publickey.md\'\"' + '></marked>'
			})
			.when('/script', {
				template: '<marked src=' + '\"\'/app/docs/script.md\'\"' + '></marked>'
			})
			.when('/transaction', {
				template: '<marked src=' + '\"\'/app/docs/transaction.md\'\"' + '></marked>'
			})
			.when('/units', {
				template: '<marked src=' + '\"\'/app/docs/unit.md\'\"' + '></marked>'
			})
			.when('/unspent-outputs', {
				template: '<marked src=' + '\"\'/app/docs/unspentoutput.md\'\"' + '></marked>'
			})
			.when('/uri', {
				template: '<marked src=' + '\"\'/app/docs/uri.md\'\"' + '></marked>'
			})
			.otherwise({redirectTo:'/overview'});

		$locationProvider.html5Mode(true);
  }

})();
