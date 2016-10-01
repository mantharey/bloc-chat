(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      console.log("This thing ran")
      $uibModal.open({
         templateUrl: './templates/signInModal.html',
         controller: function($uibModalInstance){
            var $ctrl = this;
            this.signIn = function(){
               $cookies.put('blocChatCurrentUser', $ctrl.user.username);
               $uibModalInstance.dismiss('cancel');
            }
         },
         controllerAs: "$ctrl"
      });
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
