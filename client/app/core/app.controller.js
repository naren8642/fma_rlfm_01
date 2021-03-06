(function () {
  'use strict';
  angular.module('app').controller('AppCtrl', [
    '$scope', '$location', '$rootScope', '$route', '$document', function($scope, $location, $rootScope, $route, $document) {
      $scope.isSpecificPage = function() {
        var path, ref, specificPages;
        path = $location.path();
        specificPages = ['/core/welcome', '/404', '/page/404', '/page/500', '/page/login', '/student/signin', '/teacher/signin', '/page/signin2', '/page/signup', '/page/signup1', '/page/signup2', '/page/lock-screen'];
        return (ref = specificPages.indexOf(path) >= 0) != null ? ref : {
          1: -1
        };
      };

      $scope.doLogin = function(type) {
        $scope.login = type;
        if ($scope.login === 'teacher') {
          $location.path('teacher/guide');
        }

        if ($scope.login === 'student') {
          $location.path('student/demographics');
        }

      }

      $scope.setNav = function() {
        $scope.nav = 'app/layout/nav-student.html';

        if ($scope.login === 'teacher') {
          $scope.nav = 'app/layout/nav-teacher.html';
        }

        if ($scope.login === 'student') {
          $scope.nav = 'app/layout/nav-student.html';
        }

        if ($location.path() === '/teacher/guide') {
          $scope.nav = 'app/layout/nav-guide.html';
        }
        return $scope.nav;
      };

      $scope.main = {
        brand: 'Real Life Mathematics',
        name: 'Lisa Garcia'
      };
      return $rootScope.$on("$routeChangeSuccess", function(event, currentRoute, previousRoute) {
        return $document.scrollTo(0, 0);
      });
    }
  ]).controller('NavCtrl', ['$scope', 'filterFilter', function($scope, filterFilter) {}]).controller('DashboardCtrl', [
    '$scope', function($scope) {
      $scope.comboChartData = [['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'], ['2014/05', 165, 938, 522, 998, 450, 614.6], ['2014/06', 135, 1120, 599, 1268, 288, 682], ['2014/07', 157, 1167, 587, 807, 397, 623], ['2014/08', 139, 1110, 615, 968, 215, 609.4], ['2014/09', 136, 691, 629, 1026, 366, 569.6]];
      return $scope.salesData = [['Year', 'Sales', 'Expenses'], ['2010', 1000, 400], ['2011', 1170, 460], ['2012', 660, 1120], ['2013', 1030, 540]];
    }
  ]);
})();

