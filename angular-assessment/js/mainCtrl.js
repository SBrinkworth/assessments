// INITILIZE CONTROLLER
// ============================================================
angular.module("assessment")
	.controller("mainCtrl", function($scope, mainService) {

		// VARIABLES
		// ============================================================


		// FUNCTIONS
		// ============================================================
		$scope.getProducts = function() {
			mainService.getProducts()
				.then(function(response) {
					console.log(response);

					$scope.products = response.data;
				});
		};
		$scope.getProducts();

	});
