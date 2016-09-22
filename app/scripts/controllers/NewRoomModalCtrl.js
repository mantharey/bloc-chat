(function() {
    function NewRoomModalCtrl(Room, $uibModalInstance) {
        var $ctrl = this;
        $ctrl.foo = "bar"
          $ctrl.rooms = Room.all
          //
          // // Remember to do this to manipulate and debug things:
          // window.foo = this.rooms
          //
          this.createNewRoom = function(newRoom){
            console.log("Meow")
            console.log(newRoom)
            $ctrl.rooms.$add({name: newRoom});
          }

          $ctrl.cancel = function () {
            $uibModalInstance.dismiss('cancel');
          };

    }

    angular
        .module('blocChat')
        .controller('NewRoomModalCtrl', ['Room','$uibModalInstance', NewRoomModalCtrl]);
})();
