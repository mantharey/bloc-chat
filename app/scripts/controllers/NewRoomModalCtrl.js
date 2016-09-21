(function() {
    function RoomModalCtrl(Room, $ubiModal) {
        var $ctrl = this;

        $ctrl.rooms = Room.all

        // Remember to do this to manipulate and debug things:
        window.foo = this.rooms

        this.createNewRoom = function(newRoom){
          $ctrl.rooms.$add({name: newRoom});
        }

        $ctrl.open = function () {
          var modalInstance = $uibModal.open({
            templateUrl: "NewRoomModal.html",
            controller: "NewRoomModalCtrl",
            controllerAs: "newroommodal"
          });
        };

        // $ctrl.cancel = function () {
        //   $uibModalInstance.dismiss('cancel');
        // };

    }

    angular
        .module('blocChat')
        .controller('RoomModalCtrl', ['Room','$uibModal', RoomModalCtrl]);
})();
