function treinoController($http) {
    var vm = this;
    vm.exercicioList = [];

    vm.init = function () {
       /* for (var i = 0; i < 15; i++) {
            var exercicio =
                {
                    Icone: 'img/fitness-training-311490_960_720.png',
                    Nome: 'Exercicio ' + (i + 1),
                    QuantidadeSerie: 3,
                    QuantidadeRepeticoes: 10
                };

            vm.exercicioList.push(exercicio);
                } */
        
        //var response = $http.get('http://happyfitnessapp.azurewebsites.net/api/Exercicio?pessoaCodigo=1',
        var response = $http.get('http://localhost:60178/services/MapNat.svc',
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