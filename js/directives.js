/**
* mainApp Module
*
* Description: Directives
*/
var app = angular.module('mainApp', []);

app.directive('myFirstDirective',function(){
	return {
		template:'HW Hellow World!',
		restrict:'A'
	};
});