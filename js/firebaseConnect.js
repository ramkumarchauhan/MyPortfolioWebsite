import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

$(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyDSOdEOdG_97GfUwR6Vc72ADozaQSvDDCE",
        authDomain: "ram-projects-bd41d.firebaseapp.com",
        databaseURL: "https://ram-projects-bd41d-default-rtdb.firebaseio.com",
        projectId: "ram-projects-bd41d",
        storageBucket: "ram-projects-bd41d.appspot.com",
        messagingSenderId: "265151617343",
        appId: "1:265151617343:web:d9e592bb8ec10b047b9b8a",
        measurementId: "G-F4QX2G61PH"
    };

    // -----------Initialize app & database----------

    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);

    // -----------Submitting form details----------

    $('.submit').on('click', function (e) {
        e.preventDefault();

        // -----------getting form values----------

        const name = $("#name").val();
        const email = $("#email").val();
        const mobno = $("#mobno").val();
        const textarea = $("#textarea").val();

        // -----------Applying constraints----------

        if(name == "" && email == "" && mobno == "" && textarea == "" ){
            alert("Empty message can't be sent");
        }else if(name.length <3){
            alert("Name must have atleat 3 characters.");
        }
        else{

            // -----------setting into database and handeling success & errors ----------

            set(ref(db, "user/" + name), {
                username: name,
                email: email,
                mobno: mobno,
                textmessage: textarea
            }).then(() => {
                $("#name").val("");
                $("#email").val("");
                $("#mobno").val("");
                $("#textarea").val("");
                $("#successModal").fadeIn();
                setTimeout(function () {
                    $("#successModal").fadeOut();
                }, 600000);
            }).catch(() => {            
                $("#failedModal").fadeIn();
                setTimeout(function () {
                    $("#failedModal").fadeOut();
                }, 3000);
            });
        }       
    });
});
