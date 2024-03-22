// // Import the functions you need from the SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { ref, getDatabase, push, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {

//     authDomain: "todo-app-c9e06.firebaseapp.com",
//     databaseURL: "https://todo-app-c9e06-default-rtdb.firebaseio.com",
//     projectId: "todo-app-c9e06",
//     storageBucket: "todo-app-c9e06.appspot.com",
//     messagingSenderId: "164983714053",
//     appId: "1:164983714053:web:8d16fba07f2c444ee5476c",
//     measurementId: "G-88VFY76Y52"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const database = getDatabase();
// const auth = getAuth();

// var model = {};
// var username = document.getElementById('username');
// var email = document.getElementById('email');
// var password = document.getElementById('password');
// var signupSection = document.getElementById('signup-section');
// var todoSection = document.getElementById('todo-section');
// var inp = document.getElementById('inp');
// var main = document.getElementById('main');
// var showList = document.getElementById('showList');




  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
  import { ref, getDatabase, push, onValue, set } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    
    authDomain: "todo-try-2.firebaseapp.com",
    databaseURL: "https://todo-try-2-default-rtdb.firebaseio.com",
    projectId: "todo-try-2",
    storageBucket: "todo-try-2.appspot.com",
    messagingSenderId: "165485948146",
    appId: "1:165485948146:web:be3e5c4a45b846a82af46b",
    measurementId: "G-8814Q2PW09"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();
const auth = getAuth();

var model = {};
var username = document.getElementById('username');
var email = document.getElementById('email');
var password = document.getElementById('password');
var signupSection = document.getElementById('signup-section');
var todoSection = document.getElementById('todo-section');
var inp = document.getElementById('inp');
var main = document.getElementById('main');
var showList = document.getElementById('showList');






window.signUp = function (e) {
    e.preventDefault();
    if (username.value !== '' && email.value !== '' && password.value !== '') {
        model.email = email.value;
        model.username = username.value;
        model.password = password.value;

        createUserWithEmailAndPassword(auth, model.email, model.password)
            .then(function (res) {
                console.log(res.user.uid, "Success Response");
                model.id = res.user.uid;
                var reference = ref(database, `users/${model.id}`);
                onValue(reference, function (user) {
                    console.log(user.val());
                });

                email.value = "";
                username.value = "";
                password.value = "";

                showTodo();
            })
            
            .catch(function (err) {
                console.log(err, "error response");
                alert(err.message);
            });
    } else {
        mesg.innerHTML = 'First Register Yourself';
    }
}

window.showTodo=function showTodo() {
    signupSection.style.display = 'none';
    todoSection.style.display = 'block';
     // Automatically fetch and display todos after signing up
}
getData();
// window.add=function () {
//     var obj = {
//         text: inp.value,
//     };

//     obj.id = push(ref(database, "Tasks/")).key;
//     var reference = ref(database, `Tasks/${obj.id}`);
//     set(reference, obj);
// };

// window.renderList= function() {
//     // Clear the existing list before rendering
//     showList.innerHTML = "";
//     for (var i = 0; i < tasks.length; i++) {
//         showList.innerHTML += `<li>${tasks[i].text}</li>`;
//     }
// }

// window.getData=function () {
//     var reference = ref(database, "Tasks/");
//     onValue(reference, function (data) {
//         tasks = Object.values(data.val());
//         renderList();
//     });
// }

// window.delAll=function () {
//     main.innerHTML = "";
// }

// window.createElem=function () {
//     var p = document.createElement('P');
//     var txt = document.createTextNode(inp.value);

//     p.appendChild(txt);
//     p.setAttribute('class', 'para');
//     p.setAttribute('id', 'pl');

//     var delBtn = document.createElement("BUTTON");
//     var delLabel = document.createTextNode('Delete');
//     delBtn.appendChild(delLabel);
//     delBtn.setAttribute('onclick', 'delTodo(this)');
//     p.appendChild(delBtn);

//     var editBtn = document.createElement("BUTTON");
//     var editLabel = document.createTextNode('EDIT');
//     editBtn.appendChild(editLabel);
//     editBtn.setAttribute('onclick', 'editTodo(this)');
//     p.appendChild(editBtn);

//     main.appendChild(p);
// }

// window.delTodo=function (elem) {
//     var p = elem.parentNode;
//     p.remove();
// }

// window.editTodo=function (ele) {
//     var newVal = prompt("Enter your new value");
//     ele.parentNode.firstChild.nodeValue = newVal;
//     console.log(newVal);
// }

// // Automatically fetch and display todos when the app loads
// getData();

// Function to add a new task






