
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDFTDu4usCpbUYeDxMp2lx69IZoqM_IiZs",
  authDomain: "fir-techkolachi-all.firebaseapp.com",
  projectId: "fir-techkolachi-all",
  storageBucket: "fir-techkolachi-all.appspot.com",
  messagingSenderId: "524364333991",
  appId: "1:524364333991:web:e0b13a878bb129b1a1ec82"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


// let btn = document.getElementById("register-btn");
// btn.addEventListener("click", () => {
//   let name = document.getElementById("name");
//   let phone = document.getElementById("phone");
//   let email = document.getElementById("email");
//   let password = document.getElementById("password");

//   let userData = {
//     name: name.value,
//     phone: phone.value,
//     email: email.value,
//     password: password.value

//   }


//   createUserWithEmailAndPassword(auth, userData.email, userData.password)
//     .then(async (userCredential) => {
//       const user = userCredential.user;
//       console.log(user);
//       try {
//         const docRef = await addDoc(collection(db, "users"), {
//           // first: "Ada",
//           // last: "Lovelace",
//           // born: 1815
//           ...userData,
//           uid: user.uid
//         });
//         console.log("Document written with ID: ", docRef.id);
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log(error.message)
//     });

// })


// let getAllUsers = async () => {
//   const querySnapshot = await getDocs(collection(db, "users"));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} =>`, doc.data());
//   });
// }

// getAllUsers()


let updateBtn = document.getElementById("update-btn");
updateBtn.addEventListener("click", async () => {
  console.log(auth.currentUser);
  const id = auth.currentUser.uid; 
  let name = document.getElementById("name");
  let phone = document.getElementById("phone"); 

  const washingtonRef = doc(db, "users", "Moqu23n8CIsG5ZQONsSr");
  try{
    await updateDoc(washingtonRef, {
      name: name.value,
      phone: phone.value

    });
    console.log("UPDATED");
  }
  catch (err){
    console.log(err);

  }



})

