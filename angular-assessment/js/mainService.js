// INITILIZE SERVICE
// ============================================================
angular.module("assessment")
	.service("mainService", function($http) {

		// CRUD FUNCTIONS
		// ============================================================
		this.getProducts = function() {
			return $http({
				method: 'GET',
				url: 'http://practiceapi.devmounta.in/products'
			});
		};

		this.getProduct = function(id) {
			return $http({
				method: 'GET',
				url: 'http://practiceapi.devmounta.in/products/' + id
			});
		};

		// OTHER FUNCTIONS
		// ============================================================


	});
