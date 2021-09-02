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
room_name = localStorage.getItem("room_name");

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}

function getData() {

    firebase.database().ref("/"+room_name).on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
        childKey = childSnapshot.key;
        childData = childSnapshot.val();
        if(childKey != "purpose")
        {

            firebase_message_id = childKey;
            message_data = childData;

            console.log(message_data);
            name = message_data['name']
            message = message_data['message'];
            like = message_data['like'];
            row = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4><h4 class='message_h4'>"+ message +"</h4><button class='btn btn=warning' id="+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'><span class='glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
            document.getElementById("output").innerHTML = row;


        }
    })
})
}