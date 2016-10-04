(function() {
   function Room($firebaseArray) {
      var $ctrl = this;
      var ref = firebase.database().ref().child("rooms");
      var rooms = $firebaseArray(ref);

      return {
         // Public Interface of Room object, this is the stuff that other files can access
         all: rooms,
         create: function(newRoom) {
            //create method logic
            this.createNewRoom = function(newRoom){
              $ctrl.rooms.$add({name: newRoom});
            }
         },
         getMessages: function(roomId) {
            //getMessages query logic
            $ctrl.rooms.$watch(function(){
               if($ctrl.currentRoom == undefined){
                  $ctrl.currentRoom = $ctrl.rooms[0]

                  var ref = firebase.database().ref().child("messages").orderByChild("roomId").equalTo($ctrl.currentRoom.$id);
                  $ctrl.messages = $firebaseArray(ref)
             }
            })
         }
      };
   }

      angular
         .module('blocChat')
         .factory('Room', ['$firebaseArray', Room]);
})();
