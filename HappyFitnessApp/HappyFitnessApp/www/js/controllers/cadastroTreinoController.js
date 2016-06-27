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

    vm.series = [];

    vm.aluno = [];

    vm.treinoDiarioList = [];

    //#endregion

    //#region Métodos Publicos

    vm.init = init;
    vm.salvarTreino = salvarTreino;
    vm.addSerie = addSerie;
    vm.criarTreinoDiario = criarTreinoDiario;
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

    function addSerie(treinoDiario, serie) {
        var s = angular.copy(serie);
        serie.exercicio = null;
        serie.repeticao = null;
        serie.peso = null;
        serie.tempo = null;
        treinoDiario.series.push(s);
    };

    function initAlunoMoke() {
        vm.aluno = [];
        vm.aluno.nome = 'Fulano de Tal';
        vm.aluno.idade = 16;
        vm.aluno.peso = 55.9;
    };

    function salvarTreino(form) {
        var myForm = form;

        //if (!validarForm(myForm)) return;

        alert('treino salvo com sucesso...');

        $location.path('/listagemAlunos');
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

    function criarTreinoDiario(qtd) {
        if (qtd > 0) {
            for (var i = 0; i < qtd; i++) {
                var name = getNomeTreino(i+1);

                var treinoDiario =
                    {
                        series: [],
                        nome: name
                    };

                vm.treinoDiarioList.push(treinoDiario);
            }
        }
    };

    function getNomeTreino(numero) {
        var result = 'Treino ';

        switch (numero) {
            case 1:
                result = result + 'A';
                break;
            case 2:
                result = result + 'B';
                break;
            case 3:
                result = result + 'C';
                break;
            case 4:
                result = result + 'D';
                break;
            case 5:
                result = result + 'E';
                break;
            case 6:
                result = result + 'F';
                break;
            case 7:
                result = result + 'G';
                break;
            case 8:
                result = result + 'H';
                break;
            case 9:
                result = result + 'I';
                break;
            case 10:
                result = result + 'J';
                break;
            case 11:
                result = result + 'L';
                break;
            case 12:
                result = result + 'M';
                break;
            case 13:
                result = result + 'N';
                break;
            case 14:
                result = result + 'O';
                break;
            case 15:
                result = result + 'P';
                break;
            case 16:
                result = result + 'Q';
                break;
            case 17:
                result = result + 'R';
                break;
            case 18:
                result = result + 'S';
                break;
            case 19:
                result = result + 'T';
                break;
            case 20:
                result = result + 'U';
                break;
            case 21:
                result = result + 'V';
                break;
            case 22:
                result = result + 'X';
                break;
            case 23:
                result = result + 'Z';
                break;
            default:
        }

        return result;
    };

    //#endregion
}