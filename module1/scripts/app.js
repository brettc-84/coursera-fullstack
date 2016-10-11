(function () {
'use strict';

	angular.module('LunchCheck',[])
	.controller('LunchCheckController', function($scope) {
		$scope.items = '';
		$scope.message = '';

		$scope.checkItems = () => {
			if ($scope.items == '') {
				$scope.message = 'Please enter data first';
			} else {
				$scope.message = $scope.items.split(',').length > 3 ? 'Too much!' : 'Enjoy!';
			}
		};

	});
})();