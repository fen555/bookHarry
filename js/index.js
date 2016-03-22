/* global angular */
var eppingList = angular.module('root', [])
eppingList.controller('index', ['$scope', function ($scope) {
  $scope.list = []
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

    $scope.getDiscount()
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
  $scope.getDiscount = function () {
    // var listss = $scope.list2
    // // console.log(listss)
    // var ee = 0
    // var num = 0
    // for (var i = ee; i < listss.length; i++) {
    //   num += listss[i].amount
    //   ee++
    // }
    // // ///////////////////// /
    // var countlist = 0 // เช็ครอบเข้า เงื่อนไขลดราคา
    // var sell = 0 // ส่วนลด
    // var exit = 0
    // do {
    //   // /////// for เช็ค จำนวนเล่มหนังสือ
    //   for (var i = 0; i < listss.length; i++) {
    //     if (listss[i].amount !== 0) {
    //       countlist += 1
    //     }
    //     if (listss[i].amount === 0) {
    //       countlist += 0
    //       break
    //     }
    //   }
    //   // ///// เงื่อนไขลดราคา
    //   if (countlist === 1) {
    //     // มีไว้เฉยๆๆ ไม่มีทำงานไม่ได้
    //     console.log('1')
    //   } if (countlist === 2) {
    //     sell += ((countlist * 100) * 0.1)
    //     console.log('2')
    //   } else if (countlist === 3) {
    //     sell += ((countlist * 100) * 0.2)
    //     console.log('3')
    //   } else if (countlist === 4) {
    //     sell += ((countlist * 100) * 0.3)
    //     console.log('4')
    //   } else if (countlist === 5) {
    //     sell += ((countlist * 100) * 0.4)
    //     console.log('5')
    //   } else if (countlist === 6) {
    //     sell += ((countlist * 100) * 0.5)
    //     console.log('6')
    //   } else if (countlist === 7) {
    //     sell += ((countlist * 100) * 0.6)
    //     console.log('7')
    //   } else if (countlist === 0) {
    //     exit = 1
    //     console.log('exit')
    //   }
    //   console.log(sell)
    //   // // ลบ จำนวนออกทีละ 1
    //   for (var i = 0; i < listss.length; i++) {
    //     if (listss[i].amount > 0) {
    //       listss[i].amount -= 1
    //       countlist = 0 // รีค่าใหม่
    //     }
    //   }
    // } while (exit !== 1)
    // return sell
  }
}])
