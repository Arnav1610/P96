//ADD YOUR FIREBASE LINKS HERE
const config = {
      apiKey: "AIzaSyBpDhPb26f-xQzTcsAeldihB-eDbk8WMaA",
      authDomain: "kwitter-66c2d.firebaseapp.com",
      databaseURL: "https://kwitter-66c2d-default-rtdb.firebaseio.com",
      projectId: "kwitter-66c2d",
      storageBucket: "kwitter-66c2d.appspot.com",
      messagingSenderId: "536855218181",
      appId: "1:536855218181:web:19b045168436a494e8f46c"
};
// Initialize Firebase
firebase.initializeApp(config);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class= 'room_name' id= " + Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML = row;
            });
      });
}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
            window.location = "kwitter_page"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
            window.location = "kwitter.html";
}