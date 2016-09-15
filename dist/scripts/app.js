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

          .state('messages', {
            url: '/messages',
            controller: 'MessagesCtrl as messages',
            templateUrl: '/templates/messages.html'
          });
    }
    angular
         .module('blocChat', ['ui.router', 'firebase'])
         .config(config);
})();
