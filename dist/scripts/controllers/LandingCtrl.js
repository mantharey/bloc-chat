(function() {
    function LandingCtrl(Room, $uibModal, $firebaseArray) {
        var $ctrl = this;
        this.heroTitle = "Let's Chat!";
        $ctrl.rooms = Room.all

        $ctrl.rooms.$watch(function(){
          if($ctrl.currentRoom == undefined){
             $ctrl.currentRoom = $ctrl.rooms[0]

             var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo($ctrl.currentRoom.$id);
             $ctrl.messages = $firebaseArray(ref)
          }
        })


        $ctrl.setRoom = function(room){
            $ctrl.currentRoom = room;


            
        }

        // Remember to do this to manipulate and debug things:
        window.foo = this.rooms

        this.createNewRoom = function(newRoom){
          $ctrl.rooms.$add({name: newRoom});
        }

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
