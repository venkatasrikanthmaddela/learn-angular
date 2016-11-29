/**
 * Created by srikanthmv on 26/10/16.
 */

(function (){
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', foundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    function foundItems(){
        var ddo = {
            restrict:"AE",
            templateUrl:"foodList.html",
            scope:{
                found: "=",
                onRemove: "@"
            },
            controller: NarrowItDownController,
            controllerAs: 'menuSearch',
            bindToController: true
        };
        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService){
        var menuSearch = this;
        menuSearch.searchTerm="";

        menuSearch.searchMenuItems = function(){
            if(menuSearch.searchTerm){
                var promise = MenuSearchService.getMatchedMenuItems(menuSearch.searchTerm);
                promise.then(function(response){
                        menuSearch.found = response;
                    })
                    .catch(function(error){
                        console.log("error");
                    });
            }
            else{
                menuSearch.found = [];
            }
            menuSearch.searchTerm="";
        };

        menuSearch.removeItem = function(index){
            menuSearch.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http'];
    function MenuSearchService($http){
        var service = this;
        service.getMatchedMenuItems = function(searchTerm){
            return $http({
                method:'GET',
                url: "https://davids-restaurant.herokuapp.com/menu_items.json"
            })
                .then(function(result){
                    var foundItems = [];
                    for(var i=0;i<result.data.menu_items.length;i++){
                        if(result.data.menu_items[i].description.toLowerCase().includes(searchTerm.toLowerCase())){
                            foundItems.push(result.data.menu_items[i])
                        }
                    }
                    return foundItems;
                })
                .catch(function(errorResponse){
                    console.log("its Not Working");
                });
        };
    }

})();
