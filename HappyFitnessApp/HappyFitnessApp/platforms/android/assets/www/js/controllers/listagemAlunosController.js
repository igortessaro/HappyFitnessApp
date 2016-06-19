angular.module('hfApp')
    .controller('listagemAlunosController', listagemAlunosController);

listagemAlunosController.$inject = ['$location'];

function listagemAlunosController($location) {
    var vm = this;

    //#region Variaveis

    vm.tittle = "Happy Fitnes - Alunos";

    vm.model = [];

    //#endregion

    //#region Métodos Publicos

    vm.init = init;

    vm.init();

    //#endregion

    //#region Métodos Privados

    function init() {
        var nomes =
        [
            "Fulano de Tal",
            "Ciclano Arnaldo",
            "Beltrano Silva",
            "Silva Santos"
        ];

        angular.forEach(nomes, function (nome, key) {
            var aluno =
            {
                nome: nome,
                alunoCodigo: (key + 1)
            };

            adicionarAluno(aluno);
        });
    };

    function adicionarAluno(aluno) {
        vm.model.push(aluno);
    };

    //#endregion
}