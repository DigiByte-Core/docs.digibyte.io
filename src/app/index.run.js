(function() {
  'use strict';

  angular
    .module('digiDocs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
