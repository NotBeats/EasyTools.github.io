function validateForm() {
    var name = document.querySelector('.name-input');
    var email = document.querySelector('.email-input');
    var idea = document.querySelector('.idea-input');
    var error = document.querySelector('.error-message');

    if (name.value === '' || email.value === '' || idea.value === ''){
        $('.error-message').text('Please enter your details');
        // error.innerHTML = 'Please enter your details';
        return false;
    }
}

$(window).on("load", function(){
    $(".contact-form").submit(function(e) {
        return validateForm();
    });
});

// function validate(e) {
//     var form = document.querySelector('.contact-form');
//     form.addEventListener("submit", validateForm, false);
//     form.addEventListener("submit", validateOther, false);
//     e.preventDefault
// }

// window.addEventListener('load', validate, false);