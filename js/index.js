/* global angular */
var eppingList = angular.module('root', [])
eppingList.controller('index', ['$scope', function ($scope) {
  $scope.list = []
  $scope.amount = []
  // $scope.list2 = []
  $scope.getTotal = function () {
    var total = 0
    for (var i = 0; i < $scope.list.length; i++) {
      total += ($scope.list[i].amount * 100)
    }
    return total
  }

  $scope.remove = function (item) {
    var index = $scope.list.indexOf(item)
    $scope.list.splice(index, 1)
  // $scope.list2.splice(index, 1)
  }

  $scope.clearAll = function (list) {
    var length = list.length
    list.splice(0, length)
  // list2.splice(0, length)
  }
  $scope.addItem = function (ep, name) {
    if (check($scope.list, ep)) {
      var index = findArrBook($scope.list, ep)
      $scope.list[index].amount += 1
    // $scope.list2[index].amount += 1
    } else {
      var data = {
        ep: ep,
        name: name,
        amount: 1
      }
      $scope.list.push(data)
    }

    $scope.list.sort(function (a, b) {
      if (a.amount > b.amount) {
        return -1
      }
      if (a.amount < b.amount) {
        return 1
      }
      return 0
    })
    var amountproduct = []
    for (var i = 0; i < $scope.list.length; i++) {
      if (typeof $scope.list[i].amount !== 'undefined') {
        amountproduct.push($scope.list[i].amount)
      }
      $scope.amount = amountproduct
      console.log($scope.amount)
    }
  // console.log($scope.list[0].amount)
  // var count = 0
  // var dis = 0
  // for (var r = 0; r <= $scope.list[0].amount - 1; r--) {
  //   if ($scope.list[r]) {
  //   }
  // }
  // $scope.getDiscount()
  }
  var check = function (list, ep) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].ep === ep) {
        return true
      }
    }
  }
  var findArrBook = function (list, ep) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].ep === ep) {
        return i
      }
    }
  }
  $scope.getDiscount = function (listD) {
    console.log(listD)
  // for (var r = 0; r < $scope.list[0].amount; r++) {
  //
  // }
  }
}])
