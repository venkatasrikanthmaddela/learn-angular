/**
 * Created by srikanthmv on 24/11/16.
 */
(function(){

    'use strict';
    angular.module('ShoppingListApp', [])
        .controller('ShoppingListAddController1', ShoppingListAddController1)
        .provider('ShoppingListService', ShoppingListServiceProvider);

    ShoppingListAddController1.$inject = ['ShoppingListService'];
    function ShoppingListAddController1(ShoppingListService){
        var list1 = this;
        list1.items = ShoppingListService().getAllItems();
        list1.itemName = "";
        list1.itemQuantity = "";
        list1.errorMessage = "";

        list1.addItem = function(){
            try{
             ShoppingListService.addItem(list1.itemName, list1.itemQuantity);
            }catch (error){
                list1.errorMessage = error.message;
            }

        };

        list1.removeItem = function(itemIndex){
            ShoppingListService.removeItem(itemIndex);
        };
    }

    function ShoppingListService(maxItems){
        var service = this;

        var items = [];

        service.addItem = function (itemName, quantity){
            if ((maxItems === undefined)||(maxItems!== undefined)&&(items.length<maxItems)){
                var item = {
                    name:itemName,
                    quantity:quantity
                };
                items.push(item);
            }
            else{
                throw new Error("MAx items ("+maxItems+") reached");
            }

        };

        service.getAllItems = function(){
            return items;
        };

        service.removeItem = function(index){
            items.splice(index, 1);
        }

    }

    function ShoppingListServiceProvider(){
        var provider = this;

        provider.defaults = {
            maxItems:5
        };

        provider.$get = function () {
            var shoppingList = new ShoppingListService(provider.defaults.maxItems);
        }
    }
})();
