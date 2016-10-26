/**
 * Created by srikanthmv on 26/10/16.
 */

(function (){
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', checkTheDishes);

    checkTheDishes.$inject = ['$scope'];
    function checkTheDishes($scope){
        $scope.dishes = "";
        $scope.dishStatusMessage = "";
        $scope.fontColor ="";

        $scope.checkMealQuantity = function(){
            if($scope.dishes)
            {
                var noOfDishes = $scope.dishes.split(",");
                if(noOfDishes.length<=3){
                    $scope.dishStatusMessage = "Enjoy!";
                    $scope.fontColor = "green"
                }
                else if(noOfDishes.length>3){
                    $scope.dishStatusMessage = "Too much!";
                    $scope.fontColor = "green"
                }
            }
            else{
                $scope.dishStatusMessage = "Please enter data first";
                $scope.fontColor = "red"
            }

        }
    }
})();
