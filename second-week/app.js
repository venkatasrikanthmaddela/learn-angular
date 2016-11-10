/**
 * Created by srikanthmv on 8/11/16.
 */
(function(){
    angular.module('CounterApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope', '$timeout'];
    function CounterController($scope, $timeout){
        $scope.counter = 0;

        $scope.upCounter = function(){
            $timeout(function(){
                $scope.counter++;
                console.log("counter incremented..!");
            }, 2000);
        };

        //$scope.upCounter = function(){
        //    setTimeout(function(){
        //        $scope.$apply(function(){
        //           $scope.counter++;
        //           console.log("counter incremented..!");
        //        });
        //    },2000);
        //}
    }

    shoppingList2 = [
        {
            name:"Milk",
            quantity:"5"
        },
        {
            name:"Donouts",
            quantitiy:"10"
        },
        {
            name:"Drinks",
            quantitiy:"20"
        },
        {
            name:"Vegetables",
            quantitiy:"25"
        },
        {
            name:"Sprouts",
            quantitiy:"30"
        }
    ];

    angular.module('shoppingListApp', [])
        .controller('shoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope){
        $scope.shoppingList2 = shoppingList2;

        $scope.addNewItem = function(){
            var newItemData = {
                name:$scope.newItemName,
                quantitiy:$scope.newItemQuantity
            };
            $scope.shoppingList2.push(newItemData)
        }
    }
})();