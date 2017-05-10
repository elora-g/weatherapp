function FirstCtrl($scope, DataService){
  $scope.search = '';

  $scope.charged = true;
  $scope.display = false;

  $scope.getMeteo = function(){
    $scope.charged = false;
    setTimeout(function(){
      console.log("blablabla");
      DataService.getMeteo($scope.latitude, $scope.longitude)
        .then(
          function(success){
            console.log(success);
            $scope.meteo=success;
            $scope.charged = true;
            $scope.display = true;
          },
          function(error){
            console.log("Erreur:" +error);
            $scope.charged = true;
          }
        );
    }, 2500)
  };

  var pluie = 0.00;
  $scope.setTemps = function(value){
    pluie = value;
  };

  $scope.getTemps = function(){
    return pluie;
   };

  var temperature = 0;

  $scope.setTemperature = function(value){
    temperature = value;
  };

  $scope.getTemperature = function(){
    return temperature;
   };


  $scope.temperatureType = "Convertir en Kelvin";
  $scope.convert = function(){
    if($scope.temperatureType=="Convertir en Celcius"){
      $scope.temperatureType="Convertir en Kelvin";
    }else{
      $scope.temperatureType="Convertir en Celcius";
    }
   };

};
