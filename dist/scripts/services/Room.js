(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    return {
      // Public Interface of Room object, this is the stuff that other files can access
      all: rooms,
      create: function(newRoom) {
         //create method logic
      },
      getMessages: function(roomId) {
         //getMessages query logic
         
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
