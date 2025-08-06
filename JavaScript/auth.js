
  import {auth,db} from "./firbase-config.js";
  import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  import { doc, addDoc,getDocs,setDoc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";
 
  document.addEventListener("DOMContentLoaded",()=>{
    let loginbtn = document.getElementById('login-btn')
    let registerbtn = document.getElementById('register-btn')

    if(loginbtn){
        loginbtn.addEventListener('click',async()=>{
            let email = document.getElementById('login-email').value
            let password = document.getElementById('login-password').value
            loginbtn.innerText = "Signing in..."
            if(email=="" || password==""){
                document.getElementById('login-message').innerText = "All fields are required"
            }
            try {
                let userCredentials  = await signInWithEmailAndPassword(auth,email,password)
                let user = userCredentials.user
                window.open('../index.html','_blank')
                loginbtn.innerText = "Sign in"
            } catch (error) {
                document.getElementById('login-message').style.display = 'block'
                loginbtn.innerText = "Sign in"
                setTimeout(()=>{
                    document.getElementById('login-message').style.display = 'none'
                },4000)
                console.log("Error",error)
            }
        })
    }

    if(registerbtn){
        registerbtn.addEventListener('click',async()=>{
            let email = document.getElementById('register-email').value
            let password = document.getElementById('register-password').value
            let role = document.getElementById('role').value
            if(email=="" || password==""){
                document.getElementById('register-message').innerText = "All fields are required"
            }
             registerbtn.innerText  = "Signing up..."
            try {
                const userCredentials  = await createUserWithEmailAndPassword(auth,email,password)
                await setDoc(doc(db,'users',userCredentials.user.uid),{
                    email,
                    role,
                    points:0,
                    trophy : 0,
                    level : 1,
                    gold : 0,
                    silver : 0,
                    bronze : 0,

                    createAt : new Date()

                })
                
                window.location.href = "login.html"
            } catch (error) {
                console.log(error)
                if(email=="" || password==""){
                    document.getElementById('register-message').innerText = "All fields are required"
                }
                else if (error.message.includes("auth/weak-password")) {
                    document.getElementById('register-message').innerText = "Password should be at least 6 characters.";
                  } else if (error.message.includes("auth/email-already-in-use")) {
                    document.getElementById('register-message').innerText = "This email is already in use.";
                  } else {
                    document.getElementById('register-message').innerText = "Registration failed. Please try again.";
                  }
                //FirebaseError: Firebase: Password should be at least 6 characters
               // document.getElementById('register-message').innerText = error.message
                
                document.getElementById('register-message').style.display = 'block'
                registerbtn.innerText  = "Sign up"
                setTimeout(()=>{
                    document.getElementById('register-message').style.display = 'none'
                },4000)
                
            }
        })
    }
  })