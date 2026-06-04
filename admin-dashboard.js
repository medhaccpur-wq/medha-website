import { db } from "./teacher/js/firebase-config.js";

import {
collection,
getDocs
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

console.log("ADMIN DASHBOARD LOADED");

async function loadTeacherStats(){

try{

const snapshot =
await getDocs(collection(db,"teachers"));

let totalTeachers = 0;
let pendingTeachers = 0;

snapshot.forEach((doc)=>{

totalTeachers++;

const data = doc.data();

if(data.status === "pending"){
pendingTeachers++;
}

});

const totalElement =
document.getElementById("totalTeachers");

const pendingElement =
document.getElementById("pendingTeachers");

if(totalElement){
totalElement.innerText = totalTeachers;
}

if(pendingElement){
pendingElement.innerText = pendingTeachers;
}

console.log(
"Teachers:",
totalTeachers,
"Pending:",
pendingTeachers
);

}
catch(error){

console.error(
"Dashboard Error:",
error
);

}

}

loadTeacherStats();
