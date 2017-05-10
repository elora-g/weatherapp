function temperatureFilter(){ // aucun paramètre ne doit être passé
  return function(kelvin, temperatureType){ //closure
    if(temperatureType == "Convertir en Kelvin"){
      celcius = kelvin - 273,15;
      deg = celcius.toFixed(2);
      return(deg + " °C");
    }else{
      return(kelvin + " °K");
    }
  };
}
