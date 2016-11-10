/**
 * Created by srikanthmv on 26/10/16.
 */

(function (){
    'use strict';

    var shoppingItemsList = [
        {name:'rice', quantity:'5'},
        {name:'biscuts', quantity:'10'},
        {name:'cookies', quantity:'15'},
        {name:'dry furits', quantity:'20'},
        {name:'pickles', quantity:'25'},
        {name:'choclates', quantity:'30'},
        {name:'rolls', quantity:'35'},
        {name:'burgers', quantity:'40'},
        {name:'non-veg', quantity:'45'},
        {name:'biriyani', quantity:'50'}
    ];

    var boughtList = [];


    angular.module('checkOffListApp', [])
        .controller('checkOffListController', checkOffListController);

    checkOffListController.$inject = ['$scope'];
    function checkOffListController($scope){
        $scope.toBuyList = shoppingItemsList;
        $scope.alreadyBought = boughtList;

        $scope.buyItem = function(index){
            var boughtItemData = {
                name:$scope.toBuyList[index].name,
                quantity:$scope.toBuyList[index].quantity
            };
            shoppingItemsList.splice(index, 1);
            boughtList.push(boughtItemData)
        }
    }

})();
