(function() {
    
    
    var config = {
    apiKey: "AIzaSyAi4CLhngsn-4PfeVZGxmzvyTucZXMI59Y",
    authDomain: "wishlist-13c3d.firebaseapp.com",
    databaseURL: "https://wishlist-13c3d.firebaseio.com",
    storageBucket: "wishlist-13c3d.appspot.com",
    messagingSenderId: "842369376108"
  };
  firebase.initializeApp(config);

    
angular.module("app", [ "firebase"])

.controller("MyCtrl", function($firebaseObject){
    
    const rootRef = firebase.database().ref().child("angular");
    const ref = rootRef.child("object");
    this.object = $firebaseObject(ref);
    
    
})    
    

    

}());