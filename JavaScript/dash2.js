import { auth,db } from "./firbase-config.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import {doc,getDoc,setDoc,collection,addDoc,deleteDoc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"

document.addEventListener('DOMContentLoaded', () => {
    const loginbtn = document.getElementById('login-btn');
    const profileIcon = document.getElementById('profile');
    const submenu = document.getElementById('submenu');

    function showElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.remove('hidden');
        }
    }
    
    // Function to hide elements by adding the 'hidden' class
    function hideElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.classList.add('hidden');
        }
    }

    onAuthStateChanged(auth,async(user) => {
        if(user){
            //console.log(user.uid);
            showElement('quiz-tab');
            showElement('achievement-tab');
            showElement('leaderboard-tab');
            showElement('aisuggestions-tab');
            loginbtn.style.display = "none"
            profileIcon.style.display = "block"
            const userDoc = await getDoc(doc(db,'users',user.uid))
            //console.log(userDoc)
            if(userDoc.exists()){
                const email = userDoc.data().email
                console.log(email)
                document.getElementById('log-email').innerText = email
            }
        }else{
            hideElement('quiz-tab');
            hideElement('achievement-tab');
            hideElement('leaderboard-tab');
            hideElement('aisuggestions-tab');
            loginbtn.style.display = "block"
            profileIcon.style.display = "none"
            submenu.classList.remove("open-menu")
        }
    });

    const logoutbtn = document.getElementById('profile-logout');
    if (logoutbtn) {
        logoutbtn.addEventListener('click', async () => {
            try {
                await signOut(auth);
                loginbtn.style.display = "block";
                profileIcon.style.display = "none";
                submenu.classList.remove("open-menu");
                window.location.href = "../index.html";
            } catch (error) {
                console.error("Logout error:", error);
            }
        });
    }
});
