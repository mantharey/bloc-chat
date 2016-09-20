(function() {
    function LandingCtrl(Room) {
        var $ctrl = this;

        this.heroTitle = "Let's Chat!";


        $ctrl.rooms = Room.all

        // Remember to do this to manipulate and debug things:
        window.foo = this.rooms

        this.createNewRoom = function(newRoom){
          console.log("newRoom: " + newRoom)
          $ctrl.rooms.$add({name: newRoom});
          // console.log("Meow Two")
          // console.log($ctrl.newRoom);
        }
    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
