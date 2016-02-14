app.controller("WeatherCtrl", function($scope, $http) {

  $scope.panel = 0;

  $scope.search = function(){
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q="+ $scope.city +"&cnt=10&mode=json&units=metric&APPID=dbf481bfbb8fa13804911863c2d4b2b0";
    $scope.loader = true;
    $http.get(url).success(httpSuccess).error(httpError);
  }

  $scope.expand = function(e){
    $elem = $(e.currentTarget);
    $elem.addClass('card_active').siblings().removeClass('card_active');
  }

  $scope.geolocate = function(){
    $scope.loader = true;
    navigator.geolocation.getCurrentPosition(function(position){
      $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&cnt=8&mode=json&units=metric&APPID=dbf481bfbb8fa13804911863c2d4b2b0").success(httpSuccess).error(httpError);
    });
  }

  httpSuccess = function(response){
    $scope.panel = 1;
    $scope.loader = false;
    $scope.weather = response;
  }

  httpError = function(response){
    $scope.loader = false;
    alert("Impossible de récupérer les infos !");
  }

  $scope.Math = Math;
});
