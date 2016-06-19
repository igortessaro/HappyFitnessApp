// Config
angular.module('hfApp').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('login', {
        url: '/',
        templateUrl: '/views/login.html',
        controller: 'loginController as vm'
    })
    .state('home', {
        url: '/home',
        templateUrl: '/views/home.html',
        controller: 'homeController as vm'
    })
    .state('listagemAlunos', {
        url: '/listagemAlunos',
        templateUrl: '/views/instrutor/listagemAlunos.html',
        controller: 'listagemAlunosController as vm'
    })
    .state('cadastroTreino', {
        url: '/cadastroTreino/:alunoCodigo',
        templateUrl: '/views/instrutor/cadastroTreino.html',
        controller: 'cadastroTreinoController as vm'
    });

    $urlRouterProvider.otherwise("/");
});