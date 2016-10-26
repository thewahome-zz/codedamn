/*

var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		template: 'Welcome user!'
	})
	.when('/anotherPage',{
		template: 'Welcome user! Again'
	})
	.otherwise({
		template: 'error 404!'
	});
});*/

var app = angular.module('mainApp',['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'login/login.html'
	})
	.when('/dashboard',{
		resolve:{
			"check":function($location,$rootScope) {
				if (!$rootScope.loggedIn) {
					$location.path('/')
				}else{
					templateUrl: 'login/dashboard.html'
				}
			}
		},
		
	})
	.otherwise({
		template: 'error 404!'
	});
});

app.controller('loginCtrl', function($scope, $location){
	$scope.submit= function 	() {
		var uName = $scope.username;
		var uPass = $scope.password;
		if (uName=='admin'&& uPass=='admin') {
			$rootScope.loggedIn=true;
			$location.path('/dashboard');

		}else{$location.path('/error')}
	}
});

app.controller('people',function($scope,$http){
	$http.get('http://localhost:81/angular/codedamn/data/database.json')
	.success(function(response){
		$scope.persons=response.records;
	});
});