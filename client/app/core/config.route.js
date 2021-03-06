(function () {
    'use strict';

    angular.module('app')
        .config(['$routeProvider', function($routeProvider) {
            var routes, setRoutes;

            routes = [
                'dashboard',
                'ui/typography', 'ui/buttons', 'ui/icons', 'ui/grids', 'ui/widgets', 'ui/components', 'ui/boxes', 'ui/timeline', 'ui/nested-lists', 'ui/pricing-tables', 'ui/maps',
                'table/static', 'table/dynamic', 'table/responsive',
                'form/elements', 'form/layouts', 'form/validation', 'form/wizard',
                'chart/charts', 'chart/flot', 'chart/morris',
                'page/404', 'page/500', 'page/blank', 'page/forgot-password', 'page/invoice', 'page/lock-screen', 'page/profile', 'page/invoice', 'page/signin', 'page/signup',
                'mail/compose', 'mail/inbox', 'mail/single',
                'app/tasks', 'app/calendar',
                'search/search',
                'core/welcome', 
                'teacher/signin', 'teacher/lessonplan', 'teacher/guide',
                'student/signin', 'student/signup', 'student/demographics', 'student/grit', 'student/pisa'
            ]
            
            var lessons = [[1,1]];
            lessons.forEach(function(lesson){
                routes.push('teacher/lessons/unit'+lesson[0]+'/lesson'+lesson[1]);
                routes.push('student/lessons/unit'+lesson[0]+'/lesson'+lesson[1]);
            })

            setRoutes = function(route) {
                var config, url;
                url = '/' + route;
                config = {
                    templateUrl: 'app/' + route + '.html'
                };
                $routeProvider.when(url, config);
                return $routeProvider;
            };

            routes.forEach(function(route) {
                return setRoutes(route);
            });

            $routeProvider
                .when('/', {redirectTo: '/core/welcome'})
                .when('/core/welcome', {templateUrl: 'app/core/welcome.html'})
                .when('/404', {templateUrl: 'app/page/404.html'})
                .otherwise({ redirectTo: '/404'});

        }]
    );

})(); 