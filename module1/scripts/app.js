(function () {
'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope) {

		$scope.items = '';

		$scope.checkItems = function() {
			if ($scope.items == '') {
				$scope.message = 'Please enter data first';
			} else {
				$scope.message = $scope.items.split(',').length > 3 ? 'Too much!' : 'Enjoy!';
			}
		};
	};
})();