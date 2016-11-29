/**
 * Created by srikanthmv on 24/11/16.
 */
(function(){

    'use strict';

    angular.module('MenuCategoriesApp', [])
        .controller('MenuCategoriesController', MenuCategoriesController)
        .service('MenuCategoriesService', MenuCategoriesService);

    MenuCategoriesController.$inject = ['MenuCategoriesService'];
    function MenuCategoriesController(MenuCategoriesService){
        var menu = this;

        var promise = MenuCategoriesService.getMenuCategories();

        promise.then(function(response){
                menu.categories = response.data;
            })
            .catch(function(error){
                alert("something went wrong");
            });

        menu.logMenuItems = function(shortName){
            var promise = MenuCategoriesService.getForMenuCategory(shortName);
            promise.then(function(response){
                    console.log(response.data);
                })
                .catch(function(error){
                    console.log("something ent wrong again");
                })
        };
    }

    MenuCategoriesService.$inject = ['$http'];
    function MenuCategoriesService($http){
        var service = this;

        service.getMenuCategories = function(){
            var response = $http({
                method:"GET",
                url:("http://davids-restaurant.herokuapp.com/categories.json")
            });

            return response;
        };

        service.getForMenuCategory = function(shortName){
            var response = $http({
                method:"GET",
                url:("http://davids-restaurant.herokuapp.com/categories.json"),
                params: {
                    category:shortName
                }
            });

            return response;
        }
    }
})();
