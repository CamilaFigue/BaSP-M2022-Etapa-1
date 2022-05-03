window.onload = function () {
    var email = document.getElementById("mail");
    var invalidEmail = document.getElementById("emailInvalid");
    var password = document.getElementById("pass");
    var invalidPass = document.getElementById("passInvalid");

    var mailformat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    var emailIsValid = 0;
    var passIsValid = 0;

    email.addEventListener("focus", focusEmail);
    email.addEventListener("blur", blurEmail);
    password.addEventListener("focus", focusPass);
    password.addEventListener("blur", blurPass);


    function focusEmail() {
        invalidEmail.style.display = "none";
        email.style.backgroundColor = "#DCDCDC";
    }

    function blurEmail() {
        emailIsValid = mailformat.test(email.value);

        if (!emailIsValid) {
            emailIsValid = 2;
            invalidEmail.innerHTML = "The email is invalid";
            email.style.border = "3px solid red";
            invalidEmail.style.color = "red";
            invalidEmail.style.display = "flex";
        } else {
            emailIsValid = 1;
            email.style.border = "3px solid green";
        }
    }

    function focusPass() {
        invalidPass.style.display = "none";
        password.style.backgroundColor = "#DCDCDC";
    }

    function validatePassword() {
        var passValue = password.value;
        var sumLetter = 0;
        var sumNum = 0;

        if (passValue.length < 7) {
            return false;
        } else {
            for (i = 0; i < passValue.length; i++) {
                if (isNaN(passValue[i])) {
                    sumLetter += 1;
                } else {
                    sumNum += 1;
                }
            }
        }
        return (sumLetter !== 0 && sumNum !== 0)
    }

    function blurPass() {
        passIsValid = validatePassword()

        if (!passIsValid) {
            passIsValid = 2;
            invalidPass.innerHTML = "The password is invalid";
            password.style.border = "3px solid red";
            invalidPass.style.color = "red";
            invalidPass.style.display = "flex";
        } else {
            passIsValid = 1;
            password.style.border = "3px solid green";
        }
    }

    var modal = document.getElementById("myModal");
    var btnConfirm = document.getElementById("sign-in-js");
    var close = document.getElementsByClassName("closeSpan");

    var text = document.getElementById("emailPassModalText");
    var modalTitle = document.getElementById("titleModal");

    btnConfirm.onclick = function (e) {
        e.preventDefault();

        var url = "https://basp-m2022-api-rest-server.herokuapp.com/login";
        url = url + "?email=" + email.value + "&password=" + password.value;

        modal.style.display = "block";

        if (emailIsValid == 2) {
            modalTitle.textContent = "Logged fail";
            text.textContent = "Email: " + email.value + " is not valid";
        } else if (passIsValid == 2) {
            modalTitle.textContent = "Login failed";
            text.textContent = "Password: " + password.value + " not valid";
        } else if (emailIsValid == 1 && passIsValid == 1) {
            fetch(url)
                .then(function (response) {
                    return response.json()
                })
                .then(function (responseJ) {
                    if (responseJ.success) {
                        modalTitle.textContent = "Login Succefull";
                        text.textContent = responseJ.msg;
                    } else {
                        throw (responseJ);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                    text.textContent = (error.msg);
                })
        }
    }

    close.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

}