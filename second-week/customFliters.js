/**
 * Created by srikanthmv on 4/11/16.
 */
(function (){
    'use strict';
    angular.module('MsgApp', [])
        .controller('MsgController', MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        //$scope.msg = "srikanth likes sri sri poetry";
        $scope.sayMessage = function (){
            return "srikanth likes sri sri poetry"
        };
    }b
})();