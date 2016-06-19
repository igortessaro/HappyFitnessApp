angular.module('starter', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'homeController as vm'
        })
        .state('menu', {
            url: '/menu',
            templateUrl: 'menu.html'
        })
        .state('treino', {
            url: '/treino',
            templateUrl: 'treino.html',
            controller: "treinoController as vm"
        })

        $urlRouterProvider.otherwise("/");
    })
    .controller('homeController', homeController)
    .controller('treinoController', treinoController)
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(cordova.platformId === 'ios' && window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
