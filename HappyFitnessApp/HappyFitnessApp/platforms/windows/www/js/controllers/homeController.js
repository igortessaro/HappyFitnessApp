function homeController() {
    var vm = this;
    vm.tittle = "Happy Fitness";

    vm.inciar = function () {
        vm.tittle = vm.tittle + ' I';
    };
}