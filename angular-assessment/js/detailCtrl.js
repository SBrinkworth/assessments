// INITILIZE CONTROLLER
// ============================================================
angular.module("assessment")
	.controller("detailCtrl", function($scope, $state, mainService) {

		// VARIABLES
		// ============================================================
		var id = $state.params.id;

		// FUNCTIONS
		// ============================================================
		$scope.getProduct = function() {
			mainService.getProduct(id)
				.then(function(response) {
					console.log(response);

					$scope.product = response.data;
				});
		};
		$scope.getProduct();


	});
