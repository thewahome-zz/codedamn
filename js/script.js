/**
*  Module
*
* Description
*/
var app= angular.module('mainApp', []);

app.service('fromService',function(){
	this.message="This is from the service";
});

app.factory('fromFactory', function(){
	var factory={};
	factory.message="This is from the factory";
	return factory;
});

app.provider('fromProvider',function(){
	var providerMessage="This is from the provider";
	return{
		$get:function(){
			return{
				message:providerMessage
			}
		}
	}
});

app.controller('fromSFPCtrl',function($scope,fromService,fromFactory,fromProvider){
  $scope.greetingsMessage=[fromService.message,fromFactory.message,fromProvider.message];
});

app.controller('ngShowDirectiveCtrl',function($scope){
	$scope.show='firstMessage';
	$scope.toggle=function(){
		$scope.show = $scope.show == 'firstMessage' ? 'secondMessage' : 'firstMessage';
	};

});