(function() {
    function NewRoomModalCtrl(Room, $uibModalInstance) {
        var $ctrl = this;

          $ctrl.rooms = Room.all

          this.createNewRoom = function(newRoom){
            $ctrl.rooms.$add({name: newRoom});
            $ctrl.cancel();
          }

          $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };

    }

    angular
        .module('blocChat')
        .controller('NewRoomModalCtrl', ['Room','$uibModalInstance', NewRoomModalCtrl]);
})();
