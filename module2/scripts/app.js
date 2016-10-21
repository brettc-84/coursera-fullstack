(function () {
'use strict';

	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService) {
		var toBuy = this;

		toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

		toBuy.buyItem = function(itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		}
	};

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var bought = this;

		bought.items = ShoppingListCheckOffService.getItemsBought();

	};

	function ShoppingListCheckOffService() {
		  var service = this;
		  var itemsToBuy = [{ name: "cookies", quantity: 10 },
		  					{ name: "milk", quantity: 2 },
		  					{ name: "bread", quantity: 4 },
		  					{ name: "beer", quantity: 6 },
		  					{ name: "cheese", quantity: 1 }];
		  var itemsBought = [];

		  service.buyItem = function(itemIndex) {
		  	itemsBought.push(itemsToBuy[itemIndex]);
		  	itemsToBuy.splice(itemIndex, 1);
		  }

		  service.getItemsToBuy = function() {
		  	return itemsToBuy;
		  }

		  service.getItemsBought = function() {
		  	return itemsBought;
		  }


	};

})();