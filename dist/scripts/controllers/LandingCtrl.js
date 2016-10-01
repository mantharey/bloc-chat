(function() {
    function LandingCtrl(Room, $uibModal, $firebaseArray, $cookies) {
        var $ctrl = this;
        this.currentUser = $cookies.get('blocChatCurrentUser');
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
            templateUrl: './templates/NewRoomModal.html',
            controller: "NewRoomModalCtrl",
            controllerAs: "newRoomModal"
          });
        };
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room','$uibModal','$firebaseArray', '$cookies', LandingCtrl]);
})();
