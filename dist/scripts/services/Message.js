(function() {
   function Message($firebaseArray) {
      var $ctrl = this;
      var ref = firebase.database().ref().child("messages");
      var messages = $firebaseArray(ref);

      return {
         send: function(newMessage) {
            // Send method logic
            messages.$add(newMessage)
         }
      };
   }

   angular
      .module('blocChat')
      .factory('Message', ['$firebaseArray', Message]);
})();
