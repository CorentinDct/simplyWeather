document.addEventListener('deviceready', function(){
	navigator.splashscreen.hide();
}, false);

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/home', {templateUrl: 'views/home.html'})
	.when('/about', {templateUrl: 'views/about.html'})
	.otherwise({redirectTo: '/home'})
})
