(function () {

'use strict';

angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
      var buyList = this;
      buyList.items = ShoppingListCheckOffService.getItems();

      buyList.buyItem = function (itemIndex) {
          ShoppingListCheckOffService.removeBuyItem(itemIndex);
      }
  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
      var boughtList = this;
      boughtList.items = ShoppingListCheckOffService.getBoughtItems();

      boughtList.boughtItem = function (itemIndex) {
          ShoppingListCheckOffService.removeBoughtItem(itemIndex);
      }
  }


  function ShoppingListCheckOffService() {
    var service = this;

    var buyItems = [
      {
        name : 'cookies',
        quantity : 50
      },
      {
        name : 'Biscuits',
        quantity : 10
      },
      {
        name : 'Ice Cream',
        quantity : 99
      },
      {
        name : 'Beer',
        quantity : 1000
      },
      {
        name : 'Biryani',
        quantity : 5
      },
      {
        name : 'Dresses',
        quantity : 5
      },
      {
        name : 'Books',
        quantity : 10
      },
      {
        name : 'Rice',
        quantity : 15
      },
      {
        name : 'Laptops',
        quantity : 2
      },
      {
        name : 'Mobile Pouch',
        quantity : 5
      }
    ];

    var boughtItems = [];

    service.removeBuyItem = function (itemIndex) {
        boughtItems.push(buyItems[itemIndex]);
        buyItems.splice(itemIndex, 1);
    }

    service.removeBoughtItem = function (itemIndex) {
        buyItems.unshift(boughtItems[itemIndex]);
        boughtItems.splice(itemIndex, 1);
    }

    service.getItems = function () {
        return buyItems;
    };

    service.getBoughtItems = function () {
        return boughtItems;
    }

  }

})();