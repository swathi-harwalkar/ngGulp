(function() {
  'use strict';

  angular
    .module('mytodo2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
