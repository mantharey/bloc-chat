(function() {
    function LandingCtrl(Room, Message, $uibModal, $firebaseArray, $cookies) {
        var $ctrl = this;
        this.currentUser = $cookies.get('blocChatCurrentUser');
        this.heroTitle = "Let's Chat!";
        $ctrl.rooms = Room.all

        $ctrl.setRoom = function(room){
            $ctrl.currentRoom = room;
            var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo($ctrl.currentRoom.$id);
            $ctrl.messages = $firebaseArray(ref)
        }

        $ctrl.sendMessage = function(){
           console.log("sendMessage() was called")
            var message = {
               content: $ctrl.newMessage.content,
               sentAt: Date.now(),
               username: $ctrl.currentUser,
               roomId: $ctrl.currentRoom.$id
            }
            console.log(message)
            $ctrl.newMessage = {};
            Message.send(message);
        }

        // Remember to do this to manipulate and debug things:
        window.foo = this.rooms
        window.bar = this.messages

        // Modal
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
        .controller('LandingCtrl', ['Room', 'Message', '$uibModal', '$firebaseArray', '$cookies', LandingCtrl]);
})();
