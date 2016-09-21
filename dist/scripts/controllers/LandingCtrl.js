(function() {
    function LandingCtrl(Room, $uibModal) {
        var $ctrl = this;

        this.heroTitle = "Let's Chat!";

        $ctrl.rooms = Room.all

        // Remember to do this to manipulate and debug things:
        window.foo = this.rooms

        this.createNewRoom = function(newRoom){
          $ctrl.rooms.$add({name: newRoom});
        }

        $ctrl.open = function () {
          var modalInstance = $uibModal.open({
            templateUrl: "NewRoomModal.html",
          });
        };
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room','$uibModal', LandingCtrl]);
})();
