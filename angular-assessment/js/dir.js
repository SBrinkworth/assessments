// INITILIZE DIRECTIVE
// ============================================================
angular.module("assessment")
	.directive('productDir', function() {
		return {
			restrict: 'EA',
			templateUrl: './views/product-Tmpl.html',
			scope: {
				product: '='
			}
		};
	});
