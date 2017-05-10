var DataService = function($q, $http){
  return{
      getMeteo : function(latitude, longitude){
        console.log("blibli");
        var deferred = $q.defer();
        var urlBeginning = "http://www.infoclimat.fr/public-api/gfs/json?_ll=";
        var urlEnd = "&_auth=ABoFElMtAyFQfVNkBnAAKVY%2BUmcPeQEmB3sAY1o%2FB3oFbl8%2BBGRRN1E%2FA35UewE3Un8GZQA7ADAKYQB4CnhTMgBqBWlTOANkUD9TNgYpACtWeFIzDy8BJgdsAGVaKQdmBWJfOAR5UTFRPQNoVHoBN1JiBmEAIAAnCmgAYwpuUzMAagVoUzIDaVA5UzgGKQArVmBSOw8wAWoHbABiWmYHYQUyXz4EM1E3UTsDZ1R6ATxSZAZkAD0APwpuAGAKZFMvAHwFGFNDA3xQf1NzBmMAclZ4UmcPbgFt&_c=78be7f079be2c363e761b11d36999dc3";
        $http({
          method: "GET",
          url: urlBeginning +latitude+","+longitude+ urlEnd,
          cache: false
        }).then(function success(response){
          deferred.resolve(response.data);
        }, function success(error){
          deferred.reject(error.status);
        });
    return deferred.promise;
    }
  };
}
