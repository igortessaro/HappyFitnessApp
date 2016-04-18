function treinoController($http) {
    var vm = this;
    vm.exercicioList = [];
    //vm.atividadeFisica =
    //    {
    //        icone: 'img/fitness-training-311490_960_720.png',
    //        nome: 'Atividade 1',
    //        series: 3,
    //        repeticoes: 10
    //    };

    vm.init = function () {
        //for (var i = 0; i < 10; i++) {
        //    var exercicio =
        //        {
        //            icone: 'img/fitness-training-311490_960_720.png',
        //            nome: 'Exercicio '+(i+1),
        //            series: 3,
        //            repeticoes: 10
        //        };

        //    vm.exercicioList.push(exercicio);
        //}

        var response = $http.get('http://happyfitness.azurewebsites.net/api/Exercicio',
            {
                params: {
                    pessoaCodigo: 10
                }
            });
        response.success(function (data) {
            vm.exercicioList = data;
        });
        response.error(function (data) {
            alert(data);
        });
    };

    vm.init();
}