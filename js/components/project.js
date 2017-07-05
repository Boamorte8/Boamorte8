angular.module('project', ['ngRoute', 'firebase'])

.config(function($routeProvider) {


    $routeProvider
        .when('/', {
            controller: 'ProjectController as projectctrl',
            templateUrl: 'main.html'
                //resolve: resolveProjects
        })
        // .when('/edit/:projectId', {
        //   controller:'EditProjectController as editProject',
        //   templateUrl:'detail.html',
        //   resolve: resolveProjects
        // })
        .otherwise({
            redirectTo: '/'
        });
});