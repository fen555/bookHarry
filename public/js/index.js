/* global angular */
var eppingList = angular.module('root', [])
eppingList.controller('index', ['$scope', function ($scope) {
  $scope.list = []
  $scope.amount = []
  $scope.discountBook = 0
  $scope.sell = 0 // ส่วนลด
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
    }
    $scope.getDiscount($scope.amount)
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
  $scope.getDiscount = function (amount) {
    // $scope.discountBook += 1
    $scope.sell = 0
    var countlist = 0 // เช็ครอบเข้า เงื่อนไขลดราคา
    var exit = 0
    console.log(amount)
    do {
      // /////// for เช็ค จำนวนเล่มหนังสือ
      for (var i = 0; i < amount.length; i++) {
        if (amount[i] !== 0) {
          countlist += 1
        }
        if (amount[i] === 0) {
          countlist += 0
          break
        }
      }
      // ///// เงื่อนไขลดราคา
      if (countlist === 1) {
        // มีไว้เฉยๆๆ ไม่มีทำงานไม่ได้
        console.log('1')
      } if (countlist === 2) {
        $scope.sell += ((countlist * 100) * 0.1)
        console.log('2')
      } else if (countlist === 3) {
        $scope.sell += ((countlist * 100) * 0.2)
        console.log('3')
      } else if (countlist === 4) {
        $scope.sell += ((countlist * 100) * 0.3)
        console.log('4')
      } else if (countlist === 5) {
        $scope.sell += ((countlist * 100) * 0.4)
        console.log('5')
      } else if (countlist === 6) {
        $scope.sell += ((countlist * 100) * 0.5)
        console.log('6')
      } else if (countlist === 7) {
        $scope.sell += ((countlist * 100) * 0.6)
        console.log('7')
      } else if (countlist === 0) {
        exit = 1
        console.log('exit')
      }
      // // ลบ จำนวนออกทีละ 1
      for (var o = 0; o < amount.length; o++) {
        if (amount[o] > 0) {
          amount[o] -= 1
          countlist = 0 // รีค่าใหม่
        }
      }
    } while (exit !== 1)

    console.log($scope.sell)
  }
}])
