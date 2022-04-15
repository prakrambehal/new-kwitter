
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAJ3Z2fXkySFTatHCHzTIypu9opX33K76k",
      authDomain: "new-kwitter-87d3e.firebaseapp.com",
      databaseURL: "https://new-kwitter-87d3e-default-rtdb.firebaseio.com",
      projectId: "new-kwitter-87d3e",
      storageBucket: "new-kwitter-87d3e.appspot.com",
      messagingSenderId: "388773823548",
      appId: "1:388773823548:web:0542044bf0e058c04e2f39"
    };
    
    // Initialize Firebase
   // const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name+"!";
    function addRoom() {
          room_name=document.getElementById("room_name").value;
          localStorage.setItem("room_name",room_name);
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
row="<div class='room_name'id="+Room_names+"onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function RedirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
