//YOUR FIREBASE LINKS
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyABg6Qnbn1VULh0ih0TUejcCHQLRTEWWs8",
      authDomain: "kwiter-4e167.firebaseapp.com",
      databaseURL: "https://kwiter-4e167-default-rtdb.firebaseio.com",
      projectId: "kwiter-4e167",
      storageBucket: "kwiter-4e167.appspot.com",
      messagingSenderId: "621163420350",
      appId: "1:621163420350:web:883521165c3f38ddf09cef",
      measurementId: "G-L6VV92PYRK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
