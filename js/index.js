/* global angular */
var shoppingList = angular.module('root', [])
shoppingList.controller('index', ['$scope', function ($scope) {
  $scope.itemQuantity1 = 0
  $scope.itemQuantity2 = 0
  $scope.itemQuantity3 = 0
  $scope.itemQuantity4 = 0
  $scope.itemQuantity5 = 0
  $scope.itemQuantity6 = 0
  $scope.itemQuantity7 = 0
  var $n = 0

  $scope.list = [
    {name: "Harry Potter and the Philosopher's Stone", shop: '1', quantity: 1, price: 100}

  ]
  $scope.listBook = []
  $scope.getTotal = function () {
    var total = 0
    for (var i = 0; i < $scope.list.length; i++) {
      total += $scope.list[i].price
    }
    return total
  }

  $scope.getDiscount = function (total) {
    var discount = 0
    var num = 0
    var num2 = 0
    var num3 = 0
    var num4 = 0
    var num5 = 0
    var num6 = 0
    var num7 = 0
    for (var i = 0; i < $scope.listBook.length; i++) {
      if ($scope.listBook[i] === 1) {
        num += 1
      }
      if ($scope.listBook[i] === 2) {
        num2 += 1
      }
      if ($scope.listBook[i] === 3) {
        num3 += 1
      }
      if ($scope.listBook[i] === 4) {
        num4 += 1
      }
      if ($scope.listBook[i] === 5) {
        num5 += 1
      }
      if ($scope.listBook[i] === 6) {
        num6 += 1
      }
      if ($scope.listBook[i] === 7) {
        num7 += 1
      }
    }
    if (num === 1 && num2 === 1) {
      discount = total * 0.1
    }
    return discount
  }

  $scope.remove = function (item) {
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1)
  }

  $scope.clearAll = function (list) {
    var length = list.length
    list.splice(0, length)
  }

  $scope.addItem = function () {
    if ($scope.itemQuantity1 !== 0) {
      $scope.list.push({name: "Harry Potter and the Philosopher's Stone", shop: '1', quantity: $scope.itemQuantity1, price: 100 * $scope.itemQuantity1})
      for ($n = 0; $n < $scope.itemQuantity1; $n++) {
        $scope.listBook.push(1)
      }
      $scope.itemQuantity1 = 0
    }
    if ($scope.itemQuantity2 !== 0) {
      $scope.list.push({name: 'Harry Potter and the Chamber of Secrets', shop: '2', quantity: $scope.itemQuantity2, price: 100 * $scope.itemQuantity2})
      for ($n = 0; $n < $scope.itemQuantity2; $n++) {
        $scope.listBook.push(2)
      }
      $scope.itemQuantity2 = 0
    }
    if ($scope.itemQuantity3 !== 0) {
      $scope.list.push({name: 'Harry Potter and the Prisoner of Azkaban', shop: '3', quantity: $scope.itemQuantity3, price: 100 * $scope.itemQuantity3})
      for ($n = 0; $n < $scope.itemQuantity3; $n++) {
        $scope.listBook.push(3)
      }
      $scope.itemQuantity3 = 0
    }
    if ($scope.itemQuantity4 !== 0) {
      $scope.list.push({name: 'Harry Potter and the Goblet of Fire', shop: '4', quantity: $scope.itemQuantity4, price: 100 * $scope.itemQuantity4})
      for ($n = 0; $n < $scope.itemQuantity4; $n++) {
        $scope.listBook.push(4)
      }
      $scope.itemQuantity4 = 0
    }
    if ($scope.itemQuantity5 !== 0) {
      $scope.list.push({name: 'Harry Potter and the Order of the Phoenix', shop: '5', quantity: $scope.itemQuantity5, price: 100 * $scope.itemQuantity5})
      for ($n = 0; $n < $scope.itemQuantity5; $n++) {
        $scope.listBook.push(5)
      }
      $scope.itemQuantity5 = 0
    }
    if ($scope.itemQuantity6 !== 0) {
      $scope.list.push({name: 'Harry Potter and the Half-Blood Prince', shop: '6', quantity: $scope.itemQuantity6, price: 100 * $scope.itemQuantity6})
      for ($n = 0; $n < $scope.itemQuantity6; $n++) {
        $scope.listBook.push(6)
      }
      $scope.itemQuantity6 = 0
    }
    if ($scope.itemQuantity7 !== 0) {
      $scope.list.push({name: 'Harry Potter and the Deathly Hallows', shop: '7', quantity: $scope.itemQuantity7, price: 100 * $scope.itemQuantity7})
      for ($n = 0; $n < $scope.itemQuantity7; $n++) {
        $scope.listBook.push(7)
      }
      $scope.itemQuantity7 = 0
    }
    console.log($scope.listBook)
  }
}])
