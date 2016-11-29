/**
 * Created by srikanthmv on 24/11/16.
 */
(function(){
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

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListAddController', ShoppingListAddController)
        .controller('ShoppingListShowController', ShoppingListShowController)
        .service('ShoppingListService', ShoppingListService);

    ShoppingListAddController.$inject = ['ShoppingListService'];
    function ShoppingListAddController(ShoppingListService){
        var itemAdder = this;
        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.addItem = function (){
            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        }
    }

    ShoppingListShowController.$inject = ['ShoppingListService'];
    function ShoppingListShowController(ShoppingListService){
        var showList = this;

        showList.items = ShoppingListService.getItems();
        showList.removeItem = function(itemIndex){
            ShoppingListService.removeItem(itemIndex)
        }
    }

    function ShoppingListService(){
        var service = this;

        var items = [];

        service.addItem = function (itemName, quantity){
            var item = {
                name:itemName,
                quantity:quantity
            };
            items.push(item);
        };

        service.getItems = function(){
            return items;
        };

        service.removeItem = function(index){
            items.splice(index, 1);
        }
    }
})();