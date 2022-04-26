window.onload = function () {
    var email = document.getElementById("mail");
    var invalidEmail = document.getElementById("emailInvalid");
    var password = document.getElementById("pass");
    var invalidPass = document.getElementById("passInvalid");
    var signIn = document.getElementById("sign-in-js");
    
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    var emailIsValid = false;
    var passIsValid = false;

    email.addEventListener("focus", focusEmail);
    email.addEventListener("blur", blurEmail);
    password.addEventListener("focus", focusPass);
    password.addEventListener("blur", blurPass);
    signIn.addEventListener("click", clickSignIn);


    function focusEmail() {
        invalidEmail.style.display = "none";
        email.style.backgroundColor = "#DCDCDC";
    }

    function blurEmail() {
        var emailIsValid = mailformat.test(email.value);

        if (!emailIsValid) {
            invalidEmail.innerHTML = "The email is invalid";
            email.style.border = "3px solid red";
            invalidEmail.style.color = "red";
            invalidEmail.style.display = "flex";
        } else {
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
            invalidPass.innerHTML = "The password is invalid";
            password.style.border = "3px solid red";
            invalidPass.style.color = "red";
            invalidPass.style.display = "flex";
        } else {
            password.style.border = "3px solid green";
        }
    }


    function clickSignIn() {
        if (!emailIsValid) {
            alert(email.value + " Email incorrect");
        } else if (!passIsValid) {
            alert(passValue + " Password incorrect");
        } else if (emailIsValid && passIsValid) {
            alert("successfull login - Email: " + email.value + "Password: " + password.value);
        }
    }

}

    // function blurPass() {
    //     var passValue = password.value;
    //     var arrayNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //     var numberFlag = false;
    //     var arrayString = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //     var stringFlag = false;
    //     var numString = arrayNum + arrayString;
    //     console.log(numString);
    //     var bothFlag = true;
        // var passMin = passValue.toLoweCase().split(" ");

        // for (var i = 0; i < passValue.length; i++) {
        //     for (var j = 0; j < arrayNum.length; j++) {

        //         if (passValue[i] == arrayNum[j]) {
        //             numberFlag = true;
        //             console.log("numberflag: ", numberFlag);
        //         }

        //     }
        // }

        // for (var i = 0; i < passValue.length; i++) {
        //     for (var j = 0; j < arrayString.length; j++) {

        //         if (passValue[i] = arrayString[j]) {
        //             stringFlag = true;
        //             console.log("string flag: ", stringFlag);
        //         }
        //     }
        // }

        // for (var i = 0; i < passValue.length; i++) {
        //     for (var j = 0; j < numString.length; j++) {

        //         if (passValue[i] != numString[j]) {
        //             bothFlag = false;
        //             console.log("both flag: ", bothFlag);
        //         }
        //     }
        // }

        // if (numberFlag == true && stringFlag == true) {

        // }

        //     var includesNumbers = passMin.some((c) => arrayNum.includes(c));
        //     var includesLetters = passMin.some((c) => arrayString.includes(c));

        //     var isValid = passMin.every((c) => numString.includes(c));

        //     if (includesNumbers && includesLetters && isValid) {
        //         email.style.border = "3px solid green";
        //     } else {
        //         invalidPass.textContent = "The password is invalid";
        //         email.style.border = "3px solid red";
        //         invalidEmail.style.color = "red";
        //     }
        // }



