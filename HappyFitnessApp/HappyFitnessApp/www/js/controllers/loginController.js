angular.module('hfApp')
    .controller('loginController', loginController);

loginController.$inject = ['$location'];

function loginController($location) {
    var vm = this;

    //#region Variaveis

    vm.tittle = "Happy Fitness";
    vm.model = [];

    //#endregion

    //#region Métodos Publicos

    vm.init = init;
    vm.logar = logar;

    //#endregion

    //#region Métodos Privados

    function init() {
        resetSummaryError();
    };

    function logar(form) {
        if (!validarForm(form)) return;

        if (!validarUsuario(vm.model)) {
            resetSummaryError();
            vm.showSummary = true;
            adicionarMensagem('* Usuário ou senha inválido.');

            return;
        }

        vm.model.usuario = null;
        vm.model.senha = null;

        $location.path('/home');
    }

    function validarUsuario(model) {
        if (model.usuario == 'adm' && model.senha == 123) {
            return true;
        }

        return false;
    }

    function validarForm(form) {
        var myForm = form;

        resetSummaryError();

        if (myForm.$invalid) {
            vm.showSummary = true;

            if (myForm.usuario.$error.required) {
                adicionarMensagem('* Informe o usuário');
            }

            if (myForm.senha.$error.required) {
                adicionarMensagem('* Informe a senha');
            }
        }

        return !vm.showSummary;
    }

    function resetSummaryError() {
        vm.showSummary = false;
        vm.mensagemList = [];
    }

    function adicionarMensagem(mensagem) {
        vm.mensagemList.push(mensagem);
    }

    //#endregion
}