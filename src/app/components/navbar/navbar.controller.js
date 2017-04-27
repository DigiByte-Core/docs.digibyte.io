 (function() {
  'use strict';

  angular
      .module('htdocs')
      .controller('NavbarController', NavbarController);

  /** @ngInject */
  function NavbarController($location) {
		var vm = this;

    vm.isActive = function(route) {
      return route === $location.path();
    };

	}
})();