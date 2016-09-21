(function () {
    function config($stateProvider, $locationProvider) {
        $locationProvider
          .html5Mode({
            enabled: true,
            requireBase: false
          });

        $stateProvider
          .state('landing', {
            url: '/',
            controller: 'LandingCtrl as landing',
            templateUrl: '/templates/landing.html'
          })
          .state('newroommodal', {
            url: '/newroommodal',
            controller: 'NewRoomModalCtrl as newroommodal',
            templateUrl: '/templates/NewRoomModal.html'
          });
    }
    angular
         .module('blocChat', ['ui.router', 'firebase','ui.bootstrap'])
         .config(config);
})();
