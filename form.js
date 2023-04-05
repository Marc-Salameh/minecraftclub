function formSubmit() {
    //changing display
    document.getElementById('form-filled').style.display = "block";
    document.getElementById('form-to-fill').style.display = "none";


    // displaying first and last name
    var fname = document.getElementById('fname').value;
    fname1.innerHTML = fname;
    var lname = document.getElementById('lname').value;
    lname1.innerHTML = lname;

    //displaying usekid
    var usekId = document.getElementById('phoneNum').value;
    usekId1.innerHTML = usekId;

    //displaying course code
    var courseCode = document.getElementById('email').value;
    courseCode1.innerHTML = courseCode;
}

function reviewForm() {
    formSubmit();
    document.getElementById('form-to-fill').style.display = "block";
    document.getElementById('form-filled').style.display = "none";
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}