(function (){
    'use strict';

    // module to return the ASCII value of a given string

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

    // module to convert string into upperCase

    //angular.module('DIApp', [])
    //.controller('DIAppController', DependencyFunction);
    //
    //DIAppController.inject = ['$scope', '$filter'];
    //function DependencyFunction($scope, $filter){
    //    $scope.name = "srikanthmv";
    //    $scope.upper = function(){
    //        var upCase = $filter('uppercase');
    //        console.log(upCase);
    //        $scope.name = upCase($scope.name);
    //        console.log(upCase);
    //    }
    //}

    // expressions and introplation

    angular.module('MsgApp', [])
    .controller('MsgAppcontroller', DisplayMessage);

    function DisplayMessage($scope){
        $scope.name = "srikanthmv";
        $scope.stateOfBeing = "hungry";

        $scope.feedPanda = function(){
             $scope.stateOfBeing = "fed"
        }
    }
})();
