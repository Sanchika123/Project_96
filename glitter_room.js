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
    
    var user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " +user_name+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
     console.log("room name - " + Room_names);
     var row= "<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
     document.getElementById("output").innerHTML= row;
      //End code
      });});}
getData();

function add_room(){
      var room_name= document.getElementById("room_name").value;
      localStorage.setItem("room_name", room_name);
      firebase.database().ref("/").child(room_name).update({
            purpose: "Adding room name"
      });
      window.location = "glitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name );
      window.location= "glitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
}







