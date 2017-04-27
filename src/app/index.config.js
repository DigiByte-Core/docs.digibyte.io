(function() {
  'use strict';

  angular
    .module('htdocs')
    .config(config);

  /** @ngInject */
  function config($logProvider, markedProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
		markedProvider.setOptions({
			gfm: true,
			tables: true,
			highlight: function (code, lang) {
				return Prism.highlight(code, Prism.languages['javascript']);
			}
		});
  }

})();
