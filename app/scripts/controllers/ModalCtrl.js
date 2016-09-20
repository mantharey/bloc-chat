(function() {
    function ModalCtrl($ubiModal, $log) {
        var $ctrl = this;



    }

    angular
        .module('blocChat', ['ngAnimate', 'ngSanitize', 'ui.bootstrap'])
        .controller('ModalCtrl', ['Room', ModalCtrl]);
})();
