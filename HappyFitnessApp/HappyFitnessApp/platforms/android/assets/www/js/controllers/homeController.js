angular.module('hfApp')
    .controller('homeController', homeController);

homeController.$inject = ['$location'];

function homeController($location) {
    var vm = this;

    //#region Variaveis

    vm.tittle = "Happy Fitnes";

    //#endregion

    //#region Métodos Publicos

    vm.init = init;

    vm.init();

    //#endregion

    //#region Métodos Privados

    function init() {

    };

    //#endregion
}