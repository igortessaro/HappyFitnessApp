angular.module('starter', ['ionic'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'login.html',
            controller: 'loginController as vm'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'home.html',
            controller: 'homeController as vm'
        })
        .state('menu', {
            url: '/menu',
            templateUrl: 'menu.html',
            controller: "menuController as vm"
        })
        .state('treino', {
            url: '/treino',
            templateUrl: 'treino.html',
            controller: "treinoController as vm"
        })
        .state('perfil', {
            url: '/perfil',
            templateUrl: 'perfil.html',
            controller: "perfilController as vm"
        })
        .state('historico', {
            url: '/historico',
            templateUrl: 'historico.html',
            controller: "historicoController as vm"
        })
        .state('exercicio', {
            url: '/exercicio',
            templateUrl: 'exercicio.html',
            controller: "exercicioController as vm"
        })
        .state('endTreino', {
            url: '/endTreino',
            templateUrl: 'endTreino.html',
            controller: "endTreinoController as vm"
        })


        $urlRouterProvider.otherwise("/");
    })
    .controller('loginController', loginController)
    .controller('homeController', homeController)
    .controller('menuController', menuController)
    .controller('treinoController', treinoController)
    .controller('perfilController', perfilController)
    .controller('historicoController', historicoController)
    .controller('exercicioController', exercicioController)
    .controller('endTreinoController', endTreinoController)
    
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
