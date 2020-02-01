// Adding hamburger menu
document.addEventListener('click', function () {
    var menuBar = event.target;

    var menuContainer = menuBar.parentElement;
    if (!menuContainer.classList.contains('fe-menu-container')) {
        return;
    }

    var menu = menuContainer.parentElement;
    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    }
    else {
        menu.classList.add('open');
    }
});

// Expand Collapes
document.addEventListener('click', function () {
    var courseTitle = event.target;

    if (!courseTitle.classList.contains('fe-course-title')) {
        return;
    }

    var course = courseTitle.parentElement;

    if (course.classList.contains('open')) {
        course.classList.remove('open');
    }
    else {
        course.classList.add('open');
    }

    // console.log(event.target);
    // console.log(course);

});


// Form Validation 

var form = document.getElementById('my-form');
var errorMessage = document.getElementById('error-message');

form.onsubmit = function () {
    if (!form.email.value && !form.contactmessage.value) {
        errorMessage.innerHTML = "Please enter your email address and message";
        return false;
    }

    if (!form.email.value) {
        errorMessage.innerHTML = "Please enter your email address";
        return false;
    }

    if (!form.contactmessage.value) {
        errorMessage.innerHTML = "Please enter your message";
        return false;
    }

    if (!form.email.value && !form.contactmessage.value) {
        errorMessage.innerHTML = "";
        return true;
    }

}














