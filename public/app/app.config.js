app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		})
		.when('/cohorts', {
			templateUrl: 'partials/cohorts.html',
			controller: 'CohortsHomeCtrl'
		})
		.when('/:cohortId/portal', {
			templateUrl: 'partials/portal.html',
			controller: 'PortalCtrl'
		})
    	.when('/:cohortId/one-on-one', {
			templateUrl: 'partials/one-on-one.html',
			controller: 'OneOnOneCtrl'
		})
		.otherwise('/');
});
