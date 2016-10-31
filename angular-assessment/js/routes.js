// CONFIG
// ============================================================
angular.module("assessment")
	.config(function($stateProvider, $urlRouterProvider) {

		// INITILIZE STATES
		// ============================================================
		$stateProvider

		// HOME STATE
			.state('home', {
			url: '/home',
			templateUrl: './views/home.html'
		})

		// ABOUT STATE
		.state('about', {
			url: '/about',
			templateUrl: './views/about.html'
		})

		// ABOUT STATE
		.state('shop', {
			url: '/shop',
			templateUrl: './views/shop.html'
		})

		.state('details', {
			url: '/details/:id',
			templateUrl: './views/product-details.html',
			controller: 'detailCtrl'
		})

		// BLOG STATE
		.state('blog', {
			url: '/blog',
			templateUrl: './views/blog.html'
		});



		// ASSIGN OTHERWISE
		// ============================================================
		$urlRouterProvider.otherwise('/home');
	});
