/**
 * Created by srikanthmv on 25/11/16.
 */
(function(){

    'use strict';

    angular.module('shoppingListDirectiveApp', [])
        .controller('ShoppingListAddController1', ShoppingListAddController1)
        .controller('ShoppingListAddController2', ShoppingListAddController2)
        .factory('ShoppingListFactory', ShoppingListFactory)
        .directive('listItemDescription', ListItemDescription)
        .directive('listItem', ListItem);

    function ListItem(){
        var ddo = {
            templateUrl: 'listitem.html'
        };
        return ddo;
    }


    function ListItemDescription(){
        var ddo = {
            template: '{{item.quantity}} of {{item.name}}'
        };
        return ddo;
    }


    ShoppingListAddController1.$inject = ['ShoppingListFactory'];
    function ShoppingListAddController1(ShoppingListFactory){
        var list1 = this;
        var shoppingList = ShoppingListFactory();
        list1.items = shoppingList.getItems();
        list1.itemName = "";
        list1.itemQuantity = "";
        list1.errorMessage = "";

        list1.addItem = function(){
            shoppingList.addItem(list1.itemName, list1.itemQuantity);
        };

        list1.removeItem = function(itemIndex){
            shoppingList.removeItem(itemIndex);
        };
    }

    ShoppingListAddController2.$inject = ['ShoppingListFactory'];
    function ShoppingListAddController2(ShoppingListFactory){
        var list2 = this;
        var shoppingList = ShoppingListFactory(3);
        list2.items = shoppingList.getItems();
        list2.itemName = "";
        list2.itemQuantity = "";
        list2.errorMessage = "";
        list2.addItem = function(){
            try{
              shoppingList.addItem(list2.itemName, list2.itemQuantity);
            } catch (error){
                list2.errorMessage = error.message;
            }
        };

        list2.removeItem = function(itemIndex){
            shoppingList.removeItem(itemIndex);
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

        service.getItems = function(){
            return items;
        };

        service.removeItem = function(index){
            items.splice(index, 1);
        }

    }

    function ShoppingListFactory(){
        var factory = function (maxItems){
            return new ShoppingListService(maxItems);
        };
        return factory;
    }

})();