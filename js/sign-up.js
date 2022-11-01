function checkPassword(form) {
    var password1 = document.querySelector('.password-input').value;
    var password2 = document.querySelector('.password2-input').value;
    var errorMsg = document.querySelector('.error');

    // if password isn't long enough return false
    // else if passwords don't match return false    
      if (password1.length < 8) {
          errorMsg.innerHTML = "Password is not at least 8 characters";
          return false;
    } else if (password1 != password2) {
        errorMsg.innerHTML = "Passwords do not match";
        return false;
    }
}

// put the user's name in local storage once they sign up
function userName() {
    var text = document.getElementById("name-input").value;
    const array = text.split(" ");
    let name = array[0];

    localStorage.setItem("name", name);
    return false;
}