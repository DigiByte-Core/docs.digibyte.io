(function() {
  'use strict';

  angular
    .module('htdocs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
