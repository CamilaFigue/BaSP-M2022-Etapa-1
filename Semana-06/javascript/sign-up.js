window.onload = function () {

    var confirmBtn = document.getElementById("btnConfirm");
    var containerFocusBlur = document.getElementsByClassName("blurFocusContainer");

    /////////////////// NAME ///////////////////
    var firstName = document.getElementById("name");

    var flagName = 0;

    firstName.addEventListener("focus", focusfName);
    firstName.addEventListener("blur", blurfName);

    function focusfName() {
        containerFocusBlur[0].style.display = "none";
        firstName.style.backgroundColor = "#DCDCDC";
    }

    function blurfName() {
        var fName = firstName.value;
        flagName = 1;

        for (var i = 0; i < fName.length; i++) {
            var letterName = fName.substring(i, i + 1);

            if (letterName == Number(letterName)) {
                flagName = 2;
            }

        }
        if (flagName == 1) {
            firstName.style.border = "3px solid green";
            firstName.style.color = "black";
        } else {
            containerFocusBlur[0].textContent = "The email is invalid";
            firstName.style.border = "3px solid red";
            firstName.style.color = "red";
            containerFocusBlur[0].style = "color: red; font-size: 16px";
            containerFocusBlur[0].style.display = "flex";
        }
    }

    /////////////////// LAST NAME ///////////////////
    var lastName = document.getElementById("lastName");

    var flagLname = 0;

    lastName.addEventListener("focus", focuslName);
    lastName.addEventListener("blur", blurlName);

    function focuslName() {
        containerFocusBlur[1].style.display = "none";
        lastName.style.backgroundColor = "#DCDCDC";
    }

    function blurlName() {
        var lName = lastName.value;
        flagLname = 1;

        for (var i = 0; i < lName.length; i++) {

            var letterLname = lName.substring(i, i + 1);

            if (letterLname == Number(letterLname)) {
                flagLname = 2;
            }

        }
        if (flagLname == 1) {
            lastName.style.border = "3px solid green";
            lastName.style.color = "black";
        } else {
            containerFocusBlur[1].textContent = "The Password is invalid";
            lastName.style.border = "3px solid red";
            lastName.style.color = "red";
            containerFocusBlur[1].style = "color: red; font-size: 16px";
            containerFocusBlur[1].style.display = "flex";
        }
    }

    /////////////////// DNI ///////////////////
    var dNi = document.getElementById("dni");

    dNi.addEventListener("focus", focusdNi);
    dNi.addEventListener("blur", blurdNi);

    function focusdNi() {
        containerFocusBlur[2].style.display = "none";
        dNi.style.backgroundColor = "#DCDCDC";
    }

    function blurdNi() {
        var dNiValue = dNi.value;

        if (dNiValue.length > 6) {
            var countLetters = 0;
            for (var i = 0; i < dNiValue.length; i++) {
                var letter = dNiValue.substring(i, i + 1);
                var letterCode = letter.charCodeAt();
                if (
                    !(
                        letterCode < 65 ||
                        (letterCode > 90 && letterCode < 97) ||
                        (letterCode > 122 && letterCode != 209 && letterCode != 241)
                    )
                ) {
                    countLetters += 1;
                }
            }
            if (countLetters >= 1) {
                containerFocusBlur[2].textContent = "ID should only contain numbers";
                dNi.style.border = "3px solid red";
                dNi.style.color = "red";
                containerFocusBlur[2].style = "color: red; font-size: 16px";
                containerFocusBlur[2].style.display = "flex";
            } else {
                dNi.style.border = "3px solid green";
                dNi.style.color = "black";
            }
        } else {
            containerFocusBlur[2].textContent = "ID should contain more than 7 characters";
            dNi.style.border = "3px solid red";
            dNi.style.color = "red";
            containerFocusBlur[2].style = "color: red; font-size: 16px";
            containerFocusBlur[2].style.display = "flex";
        }
    }

    /////////////////// DATE OF BIRTHDAY ///////////////////
    var birth = document.getElementById("birthday");

    birth.addEventListener("focus", focusBirth);
    birth.addEventListener("blur", blurBirth);

    function focusBirth() {
        containerFocusBlur[3].style.display = "none";
        birth.style.backgroundColor = "#DCDCDC";
    }

    function blurBirth() {
        var birthdayValue = birth.value;

        var day = birthdayValue.substring(0, 2);
        var slash = birthdayValue.substring(2, 3);
        var month = birthdayValue.substring(3, 5);
        var secondSlash = birthdayValue.substring(5, 6);
        var year = birthdayValue.substring(6, 10);

        day = Number(day);
        month = Number(month);
        year = Number(year);
        console.log(day, month, year);
        if (day < 1 || day > 31) {
            containerFocusBlur[3].textContent = "The day is not valid";
            birth.style.border = "3px solid red";
            birth.style.color = "red";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        } else if (month < 1 || month > 12) {
            containerFocusBlur[3].textContent = "The month is not valid";
            birth.style.border = "3px solid red";
            birth.style.color = "red";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        } else if (year < 1900 || year > 2018) {
            containerFocusBlur[3].textContent = "The year is not valid";
            birth.style.border = "3px solid red";
            birth.style.color = "red";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        } else if (slash != "/" || secondSlash != "/") {
            containerFocusBlur[3].textContent = "The format is not valid, you need write XX/XX/XXXX";
            birth.style.border = "3px solid red";
            birth.style.color = "red";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        } else {
            birth.style.border = "3px solid green";
            birth.style.color = "black";
        }
    }

    /////////////////// TELEPHONE ///////////////////
    var phone = document.getElementById("telephone");

    phone.addEventListener("focus", focusPhone);
    phone.addEventListener("blur", blurPhone);

    function focusPhone() {
        containerFocusBlur[3].style.display = "none";
        birth.style.backgroundColor = "#DCDCDC";
    }

    function blurPhone() {
        var phoneValue = phone.value;

        if ((phoneValue == Number(phoneValue)) && (phoneValue.length == 10)) {
            phone.style.border = "3px solid green";
            phone.style.color = "black";
            containerFocusBlur[4].textContent = "";
        } else {
            containerFocusBlur[4].textContent = "Telephone should contain 10 characters";
            phone.style.border = "3px solid red";
            phone.style.color = "red";
            containerFocusBlur[4].style = "color: red; font-size: 16px";
            containerFocusBlur[4].style.display = "flex";
        }
    }

    /////////////////// ADRESS ///////////////////
    var adreSs = document.getElementById("adress");

    adreSs.addEventListener("focus", focusAdress);
    adreSs.addEventListener("blur", blurAdress);

    function focusAdress() {
        containerFocusBlur[3].style.display = "none";
        adreSs.style.backgroundColor = "#DCDCDC";
    }

    function blurAdress() {
        var adressValue = adreSs.value;

        if (adressValue.length < 5) {
            console.log(adressValue);
            containerFocusBlur[5].textContent = "The format is not valid, the adress need to have more than 5 caracters";
            adreSs.style.border = "3px solid red";
            adreSs.style.color = "red";
            containerFocusBlur[5].style = "color: red; font-size: 16px";
            containerFocusBlur[5].style.display = "flex";
        } else {
            if (adressValue.indexOf(" ") === -1) {
                containerFocusBlur[5].textContent = "The format is not valid, the adress need to have some space";
                adreSs.style.border = "3px solid red";
                adreSs.style.color = "red";
                containerFocusBlur[5].style = "color: red; font-size: 16px";
                containerFocusBlur[5].style.display = "flex";
            } else {
                var letterCount = 0;
                var spaceCount = 0;
                var numberCount = 0;

                for (var i = 0; i < adressValue.length; i++) {
                    var addressLetter = adressValue.substring(i, i + 1);
                    var codeLetter = addressLetter.charCodeAt();
                    if (addressLetter == Number(addressLetter)) {
                        numberCount += 1;
                    } else if (
                        !(codeLetter < 65 || (codeLetter > 90 && codeLetter < 97)
                            || (codeLetter > 122 && codeLetter != 209 && ascii != 241))
                    ) {
                        letterCount += 1;
                    } else if (codeLetter == 32) {
                        spaceCount += 1;
                    }
                }
                if (letterCount == 0 || numberCount == 0) {
                    containerFocusBlur[5].textContent = "The format is not valid, insert numbers and letters";
                    adreSs.style.border = "3px solid red";
                    adreSs.style.color = "red";
                    containerFocusBlur[5].style = "color: red; font-size: 16px";
                    containerFocusBlur[5].style.display = "flex";
                } else if (letterCount + spaceCount + numberCount == adressValue.length) {
                    adreSs.style.border = "3px solid green";
                    adreSs.style.color = "black";
                    containerFocusBlur[5].textContent = "";
                } else {
                    containerFocusBlur[5].textContent = "The format is not valid, insert numbers and letters";
                    adreSs.style.border = "3px solid red";
                    adreSs.style.color = "red";
                    containerFocusBlur[5].style = "color: red; font-size: 16px";
                    containerFocusBlur[5].style.display = "flex";
                }
            }
        }
    }

    /////////////////// LOCATION ///////////////////
    var city = document.getElementById("location");
    var cityIsValid = false;

    city.addEventListener("focus", focusCity);
    city.addEventListener("blur", blurCity);

    function focusCity() {
        containerFocusBlur[6].style.display = "none";
        city.style.backgroundColor = "#DCDCDC";
    }

    function validateCity() {
        var cityValue = city.value;
        var letterSumCity = 0;
        var numSumCity = 0;

        if (cityValue.length < 3) {
            return false;
        } else {
            for (i = 0; i < cityValue.length; i++) {
                if (isNaN(cityValue[i])) {
                    letterSumCity += 1;
                } else {
                    numSumCity += 1;
                }
            }
        }
        return (letterSumCity !== 0 || numSumCity !== 0)
    }


    function blurCity() {

        cityIsValid = validateCity();

        if (!cityIsValid) {
            containerFocusBlur[6].textContent = "The city is invalid, it needs to have more than 3 characters";
            city.style.border = "3px solid red";
            city.style.color = "red";
            containerFocusBlur[6].style = "color: red; font-size: 16px";
            containerFocusBlur[6].style.display = "flex";
        } else {
            city.style.border = "3px solid green";
            city.style.color = "black";
            containerFocusBlur[6].textContent = "";
        }

    }

    /////////////////// POST CODE ///////////////////
    var codePost = document.getElementById("postCode");

    codePost.addEventListener("focus", focusCodePost);
    codePost.addEventListener("blur", blurCodePost);
    console.log("hola");
    function focusCodePost() {
        containerFocusBlur[7].style.display = "none";
        codePost.style.backgroundColor = "#DCDCDC";
    }

    function blurCodePost() {
        var codePostValue = codePost.value;

        if ((codePostValue == Number(codePostValue)) && ((codePostValue.length == 4) || (codePostValue.length == 5))) {
            codePost.style.border = "3px solid green";
            codePost.style.color = "black";
            containerFocusBlur[7].textContent = "";
        } else {
            containerFocusBlur[7].textContent = "Code Post should contain 4 or 5 characters";
            codePost.style.border = "3px solid red";
            codePost.style.color = "red";
            containerFocusBlur[7].style = "color: red; font-size: 16px";
            containerFocusBlur[7].style.display = "flex";
        }
    }

    /////////////////// EMAIL ///////////////////
    var email = document.getElementById("mail");
    var mailformat = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;

    email.addEventListener("focus", focusEmail);
    email.addEventListener("blur", blurEmail);

    function focusEmail() {
        containerFocusBlur[8].style.display = "none";
        email.style.backgroundColor = "#DCDCDC";
    }

    function blurEmail() {
        var emailIsValid = mailformat.test(email.value);

        if (!emailIsValid) {
            containerFocusBlur[8].textContent = "The email is invalid, it need to have this format example@example.com";
            email.style.border = "3px solid red";
            email.style.color = "red";
            containerFocusBlur[8].style = "color: red; font-size: 16px";
            containerFocusBlur[8].style.display = "flex";
        } else {
            email.style.border = "3px solid green";
            email.style.color = "black";
            containerFocusBlur[8].textContent = "";
        }
    }

    /////////////////// PASSWORD ///////////////////
    var pass = document.getElementById("password");

    pass.addEventListener("focus", focusPass);
    pass.addEventListener("blur", blurPass);

    function focusPass() {
        containerFocusBlur[9].style.display = "none";
        pass.style.backgroundColor = "#DCDCDC";
    }

    function validatePassword() {
        var passwordValue = pass.value;
        var sumLetter = 0;
        var sumNum = 0;

        if (passwordValue.length < 7) {
            return false;
        } else {
            for (i = 0; i < passwordValue.length; i++) {
                if (isNaN(passwordValue[i])) {
                    sumLetter += 1;
                } else {
                    sumNum += 1;
                }
            }
        }
        return (sumLetter !== 0 && sumNum !== 0)
    }

    function blurPass() {
        passIsValid = validatePassword();

        if (!passIsValid) {
            containerFocusBlur[9].textContent = "The password is invalid, it need to have numbers and letter only";
            pass.style.border = "3px solid red";
            pass.style.color = "red";
            containerFocusBlur[9].style = "color: red; font-size: 16px";
            containerFocusBlur[9].style.display = "flex";
        } else {
            pass.style.border = "3px solid green";
            pass.style.color = "black";
            containerFocusBlur[9].textContent = "";
        }
    }

    /////////////////// REPEAT - PASSWORD ///////////////////
    var repeatPass = document.getElementById("repeatPassword");

    repeatPass.addEventListener("focus", focusRepeatPass);
    repeatPass.addEventListener("blur", blurRepeatPass);

    function focusRepeatPass() {
        containerFocusBlur[10].style.display = "none";
        repeatPass.style.backgroundColor = "#DCDCDC";
    }

    function blurRepeatPass() {
        var repeatPassValue = repeatPass.value;
        var valuePassword = pass.value;
        if (repeatPassValue == valuePassword) {
            repeatPass.style.border = "3px solid green";
            repeatPass.style.color = "black";
            containerFocusBlur[10].textContent = "";
        } else {
            containerFocusBlur[10].textContent = "The password is invalid, it need to be the same password";
            repeatPass.style.border = "3px solid red";
            repeatPass.style.color = "red";
            containerFocusBlur[10].style = "color: red; font-size: 16px";
            containerFocusBlur[10].style.display = "flex";
        }
    }

}