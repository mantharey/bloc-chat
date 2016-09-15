(function() {
    function LandingCtrl(Room) {

        this.heroTitle = "Let's Talk!";


        this.rooms = Room.all

        // Remember to do this to manipulate and debug things:
        window.foo = this.rooms

    }

    angular
        .module('blocChat')
        .controller('LandingCtrl', ['Room', LandingCtrl]);
})();
