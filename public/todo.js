// Import the functions you need from the SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { ref, getDatabase, push, onValue, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     
//     authDomain: "todo-app-c9e06.firebaseapp.com",
//     databaseURL: "https://todo-app-c9e06-default-rtdb.firebaseio.com",
//     projectId: "todo-app-c9e06",
//     storageBucket: "todo-app-c9e06.appspot.com",
//     messagingSenderId: "164983714053",
//     appId: "1:164983714053:web:8d16fba07f2c444ee5476c",
//     measurementId: "G-88VFY76Y52"
// };



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
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
  const main = document.getElementById('main');
  window.delAll=function () {
      main.innerHTML = "";
    }
    
    
//     window.createElem=function () {
//     const inp = document.getElementById('inp');
//     const p = document.createElement('P');
//     const txt = document.createTextNode(inp.value);
//     p.appendChild(txt);
//     p.setAttribute('class', 'para');
//     p.setAttribute('id', 'pl');

//     const delBtn = document.createElement("BUTTON");
//     const delLabel = document.createTextNode('Delete');
//     delBtn.appendChild(delLabel);
//     delBtn.setAttribute('onclick', 'delTodo(this)');
//     p.appendChild(delBtn);

//     var editBtn = document.createElement("BUTTON")
//     var editLabel = document.createTextNode('EDIT')
//     editBtn.appendChild(editLabel)
//     editBtn.setAttribute('onclick','editTodo(this)')
//     p.appendChild(editBtn)

//     main.appendChild(p);
    
//     var obj = { Originalvalue: inp.value };
//     obj.id = push(ref(database, "Tasks/")).key;
//     var reference = ref(database, `Tasks/${obj.id}`);
//     set(reference,obj);
//     inp.value = "";
// }

// window.delTodo=function (elem) {
//     const p = elem.parentNode;
//     p.remove();
// }
// // window.editTodo=function(ele){
// //     var newVal = prompt ("Enter your new value");
// //     ele.parentNode.firstChild.nodeValue = newVal
// //     console.log(newVal)


// // }
// window.editTodo = function (ele) {
//     var newVal = prompt("Enter your new value");
//     if (newVal !== null) { // Check if user canceled the prompt
//         ele.parentNode.firstChild.nodeValue = newVal;
//         var todoId = ele.parentNode.getAttribute('id'); // Get the ID of the todo item
//         var reference = ref(database, `Tasks/${todoId}`);
//         set(reference, { Originalvalue: newVal }); // Update the value in Firebase
//     }
// }

// Function to fetch and display all todo items from Firebase
function displayAllTodos() {
    const todoRef = ref(database, "Tasks/");
    onValue(todoRef, (snapshot) => {
        main.innerHTML = ""; // Clear existing todo items
        snapshot.forEach((childSnapshot) => {
            const todoData = childSnapshot.val();
            const todoId = childSnapshot.key;
            
            const p = document.createElement('p');
            const txt = document.createTextNode(todoData.Originalvalue);
            p.appendChild(txt);
            p.setAttribute('class', 'para');
            p.setAttribute('id', todoId);

            const delBtn = document.createElement("button");
            const delLabel = document.createTextNode('Delete from database');
            delBtn.appendChild(delLabel);
            delBtn.setAttribute('onclick', 'delTodo(this)');
            p.appendChild(delBtn);

            var editBtn = document.createElement("button");
            var editLabel = document.createTextNode('if the value is edit only edit value can store');
            editBtn.appendChild(editLabel);
            editBtn.setAttribute('onclick', 'editTodo(this)');
            p.appendChild(editBtn);

            main.appendChild(p);
        });
    });
}

// Call the function to display todos when the page loads
window.onload = function() {
    displayAllTodos();
};

// Function to add a new todo item to Firebase and display it
window.createElem = function () {
    const inp = document.getElementById('inp');
    var obj = { Originalvalue: inp.value };
    obj.id = push(ref(database, "Tasks/")).key;
    var reference = ref(database, `Tasks/${obj.id}`);
    set(reference, obj);
    inp.value = "";
};

// Function to delete a todo item from Firebase and update UI
window.delTodo = function (elem) {
    const todoId = elem.parentNode.getAttribute('id');
    var reference = ref(database, `Tasks/${todoId}`);
    set(reference, null); // Set the value to null to delete the todo item
};

// Function to edit a todo item in Firebase and update UI
window.editTodo = function (ele) {
    var newVal = prompt("Enter your new value");
    if (newVal !== null) {
        ele.parentNode.firstChild.nodeValue = newVal;
        var todoId = ele.parentNode.getAttribute('id');
        var reference = ref(database, `Tasks/${todoId}`);
        set(reference, { Originalvalue: newVal });
    }
};





















