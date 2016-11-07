(function(){
	"use strict";
	angular
	.module('psi')
	.factory('TestCenterService', TestCenterService);

	/** @ngInject */
	function TestCenterService($http, $log) {
		function search(){
			return $http.get("app/data/test.centers.json").then(successFunc).catch(errorFunc);
		}
		function successFunc(response){
			return response.data.test_centers;
		}
		function errorFunc(response){
			$log.error(response);
		}
		return {
			search:search
		}

	}
})();