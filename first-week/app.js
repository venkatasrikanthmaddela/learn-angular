(function (){
'use strict';

angular.module('MyNumericApp', [])
.controller('MyNumericAppController', function ($scope){
  $scope.nameString = "";
  $scope.totalValue = 0;

  $scope.getNumericValue = function(){
     var totalNumericValue  = calculateTheNumericValue($scope.nameString);
     $scope.totalValue = totalNumericValue;
  };

  function calculateTheNumericValue(string){
    var totalStringValue = 0;
    for(var i=0; i < string.length; i++){
      totalStringValue += string.charCodeAt(i);
    }
    return totalStringValue;
  }
});
})();
