(function() {
    function LandingCtrl(Room, $uibModal, $firebaseArray) {
        var $ctrl = this;
        this.heroTitle = "Let's Chat!";
        $ctrl.rooms = Room.all

        $ctrl.setRoom = function(room){
            $ctrl.currentRoom = room;
            var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo($ctrl.currentRoom.$id);
            $ctrl.messages = $firebaseArray(ref)
        }

        // Remember to do this to manipulate and debug things:
        window.foo = this.rooms

        $ctrl.open = function () {
          var modalInstance = $uibModal.open({
            templateUrl: "NewRoomModal.html",
            controller: "NewRoomModalCtrl",
            controllerAs: "newRoomModal"
          });
        };
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room','$uibModal','$firebaseArray', LandingCtrl]);
})();
