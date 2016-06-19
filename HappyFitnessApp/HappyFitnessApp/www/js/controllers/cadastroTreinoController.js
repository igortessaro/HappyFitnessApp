angular.module('hfApp')
    .controller('cadastroTreinoController', cadastroTreinoController);

cadastroTreinoController.$inject = ['$location', '$stateParams'];

function cadastroTreinoController($location, $stateParams) {
    var vm = this;

    console.log($stateParams);

    //#region Variaveis

    vm.tittle = "Cadastro de Treino";
    vm.model = [];
    vm.model.tipoTreino = 0;
    vm.alunoCodigo = 0;

    vm.showSummary = false;
    vm.mensagemList = [];

    vm.aluno = [];

    //#endregion

    //#region Métodos Publicos

    vm.init = init;
    vm.salvarTreino = salvarTreino;

    vm.init();

    //#endregion

    //#region Métodos Privados

    function init() {
        vm.alunoCodigo = $stateParams.alunoCodigo;

        vm.tipoTreinoList =
        [
            { text: '(Selecione)', value: 0, selected: true },
            { text: 'Hipertrofia', value: 1, selected: false },
            { text: 'Fortalecimento', value: 2, selected: false },
            { text: 'Resistência', value: 3, selected: false }
        ];

        initAlunoMoke();

        resetSummaryError();
    };

    function initAlunoMoke() {
        vm.aluno = [];
        vm.aluno.nome = 'Fulano de Tal';
        vm.aluno.idade = 16;
        vm.aluno.peso = 55.9;
    };

    function salvarTreino(form) {
        var myForm = form;

        if (!validarForm(myForm)) return;

        alert('treino salvo com sucesso...');

    };

    function validarForm(form) {
        resetSummaryError();

        if (form.$invalid) {
            vm.showSummary = true;

            if (form.dataInicio.$error.required) {
                adicionarMensagem('* Informe a data de inicio.');
            }

            if (form.dataFim.$error.required) {
                adicionarMensagem('* Informe a data de fim.');
            }

            if (form.tipoTreino.$error.required) {
                adicionarMensagem('* Informe o tipo do treino.');
            }
        }

        if (vm.model.tipoTreino === 0) {
            vm.showSummary = true;
            adicionarMensagem('* Informe o tipo do treino.');
        }

        return !vm.showSummary;
    };

    function resetSummaryError() {
        vm.showSummary = false;
        vm.mensagemList = [];
    };

    function adicionarMensagem(mensagem) {
        vm.mensagemList.push(mensagem);
    };

    //#endregion
}