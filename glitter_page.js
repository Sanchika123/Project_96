 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyC6eVA1T3ZEqukmdqttscMjptgkLk1r2I0",
      authDomain: "glitter-cd414.firebaseapp.com",
      databaseURL: "https://glitter-cd414-default-rtdb.firebaseio.com",
      projectId: "glitter-cd414",
      storageBucket: "glitter-cd414.appspot.com",
      messagingSenderId: "584394917805",
      appId: "1:584394917805:web:6c33bf19ea54bfce284324"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var room_name= localStorage.getItem("room_name");
    var user_name= localStorage.getItem("user_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send(){
      var msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            user_name: user_name,
            message: msg,
            like:0
      });
      document.getElementById("msg").value= "";
}