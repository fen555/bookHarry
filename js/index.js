/* global angular */
var shoppingList = angular.module('root', [])
shoppingList.controller('index', ['$scope', function ($scope) {
  $scope.itemName
  $scope.itemShop
  $scope.itemQuantity
  $scope.itemPrice

  $scope.list = [
    {name: "Harry Potter and the Philosopher's Stone", shop: '1', quantity: 1, price: 100}

  ]

  $scope.getTotal = function () {
    var total = 0
    for (var i = 0; i < $scope.list.length; i++) {
      total += $scope.list[i].price
    }
    return total
  }

  $scope.remove = function (item) {
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1)
  }

  $scope.clearAll = function (list) {
    var length = list.length
    list.splice(0, length)
  }

  $scope.addItem = function (book) {
    if (book === 1) {
      $scope.list.push({name: "Harry Potter and the Philosopher's Stone", shop: '1', quantity: $scope.itemQuantity1, price: 100 * $scope.itemQuantity1})
      $scope.itemQuantity1 = 0
    } else {
      $scope.list.push({name: $scope.itemName, shop: $scope.itemShop, quantity: $scope.itemQuantity, price: 100 * $scope.itemQuantity, checked: false})
    }
  }
}])
