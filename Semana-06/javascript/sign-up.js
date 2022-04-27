window.onload = function () {

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

        if (fName == "") {
            containerFocusBlur[0].textContent = "Name cannot be empty";
            firstName.style.border = "3px solid black";
            firstName.style.color = "black";
            containerFocusBlur[0].style = "color: red; font-size: 16px";
            containerFocusBlur[0].style.display = "flex";
        }

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

        if (lName == "") {
            containerFocusBlur[1].textContent = "Last Name cannot be empty";
            lastName.style.border = "3px solid black";
            lastName.style.color = "black";
            containerFocusBlur[1].style = "color: red; font-size: 16px";
            containerFocusBlur[1].style.display = "flex";
        }

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
    var flagDni = 1;

    dNi.addEventListener("focus", focusdNi);
    dNi.addEventListener("blur", blurdNi);

    function focusdNi() {
        containerFocusBlur[2].style.display = "none";
        dNi.style.backgroundColor = "#DCDCDC";
    }

    function blurdNi() {
        var dNiValue = dNi.value;

        if (dNiValue == "") {
            containerFocusBlur[2].textContent = "DNI cannot be empty";
            dNi.style.border = "3px solid black";
            dNi.style.color = "black";
            containerFocusBlur[2].style = "color: red; font-size: 16px";
            containerFocusBlur[2].style.display = "flex";
        }

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
                flag = 1;
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

    var flagBirth = 1;

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

        if (birthdayValue == "") {
            containerFocusBlur[3].textContent = "Birthday cannot be empty";
            birth.style.border = "3px solid black";
            birth.style.color = "black";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        }

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
            flagBirth = 1;
        }
    }

    /////////////////// TELEPHONE ///////////////////
    var phone = document.getElementById("telephone");
    var flagPhone = 1;

    phone.addEventListener("focus", focusPhone);
    phone.addEventListener("blur", blurPhone);

    function focusPhone() {
        containerFocusBlur[3].style.display = "none";
        birth.style.backgroundColor = "#DCDCDC";
    }

    function blurPhone() {
        var phoneValue = phone.value;

        if (phoneValue == "") {
            containerFocusBlur[4].textContent = "Phone cannot be empty";
            phone.style.border = "3px solid black";
            phone.style.color = "black";
            containerFocusBlur[4].style = "color: red; font-size: 16px";
            containerFocusBlur[4].style.display = "flex";
        }

        if ((phoneValue == Number(phoneValue)) && (phoneValue.length == 10)) {
            phone.style.border = "3px solid green";
            phone.style.color = "black";
            containerFocusBlur[4].textContent = "";
            flagPhone = 1;
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

    var flagAdress = 1;

    adreSs.addEventListener("focus", focusAdress);
    adreSs.addEventListener("blur", blurAdress);

    function focusAdress() {
        containerFocusBlur[3].style.display = "none";
        adreSs.style.backgroundColor = "#DCDCDC";
    }

    function blurAdress() {
        var adressValue = adreSs.value;

        if (adressValue == "") {
            containerFocusBlur[5].textContent = "Adress cannot be empty";
            adreSs.style.border = "3px solid black";
            adreSs.style.color = "black";
            containerFocusBlur[5].style = "color: red; font-size: 16px";
            containerFocusBlur[5].style.display = "flex";
        }

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
                    flagAdress = 1;
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

    var locationFlag = 1;

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

        if (cityValue == "") {
            containerFocusBlur[6].textContent = "City cannot be empty";
            city.style.border = "3px solid black";
            city.style.color = "black";
            containerFocusBlur[6].style = "color: red; font-size: 16px";
            containerFocusBlur[6].style.display = "flex";
        }

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
            locationFlag = 1;
        }

    }

    /////////////////// POST CODE ///////////////////
    var codePost = document.getElementById("postCode");

    var codePostFlag = 1;

    codePost.addEventListener("focus", focusCodePost);
    codePost.addEventListener("blur", blurCodePost);
    console.log("hola");
    function focusCodePost() {
        containerFocusBlur[7].style.display = "none";
        codePost.style.backgroundColor = "#DCDCDC";
    }

    function blurCodePost() {
        var codePostValue = codePost.value;

        if (codePostValue == "") {
            containerFocusBlur[7].textContent = "City cannot be empty";
            codePost.style.border = "3px solid black";
            codePost.style.color = "black";
            containerFocusBlur[7].style = "color: red; font-size: 16px";
            containerFocusBlur[7].style.display = "flex";
        }

        if ((codePostValue == Number(codePostValue)) && ((codePostValue.length == 4) || (codePostValue.length == 5))) {
            codePost.style.border = "3px solid green";
            codePost.style.color = "black";
            containerFocusBlur[7].textContent = "";
            codePostFlag = 1;
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

    var emailFlag = 1;

    email.addEventListener("focus", focusEmail);
    email.addEventListener("blur", blurEmail);

    function focusEmail() {
        containerFocusBlur[8].style.display = "none";
        email.style.backgroundColor = "#DCDCDC";
    }

    function blurEmail() {
        var emailIsValid = mailformat.test(email.value);

        if (email.value == "") {
            containerFocusBlur[8].textContent = "Email cannot be empty";
            email.style.border = "3px solid black";
            email.style.color = "black";
            containerFocusBlur[8].style = "color: red; font-size: 16px";
            containerFocusBlur[8].style.display = "flex";
        }

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
            emailFlag = 1;
        }
    }

    /////////////////// PASSWORD ///////////////////
    var pass = document.getElementById("password");

    var passFlag = 1; 

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

        if (passwordValue == "") {
            containerFocusBlur[9].textContent = "Password cannot be empty";
            pass.style.border = "3px solid black";
            pass.style.color = "black";
            containerFocusBlur[9].style = "color: red; font-size: 16px";
            containerFocusBlur[9].style.display = "flex";
        }

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
            passFlag = 1;
        }
    }

    /////////////////// REPEAT - PASSWORD ///////////////////
    var repeatPass = document.getElementById("repeatPassword");

    var flagRepeat = 1;

    repeatPass.addEventListener("focus", focusRepeatPass);
    repeatPass.addEventListener("blur", blurRepeatPass);

    function focusRepeatPass() {
        containerFocusBlur[10].style.display = "none";
        repeatPass.style.backgroundColor = "#DCDCDC";
    }

    function blurRepeatPass() {
        var repeatPassValue = repeatPass.value;
        var valuePassword = pass.value;

        if (repeatPasswordValue == "") {
            containerFocusBlur[10].textContent = "Repeat Password cannot be empty";
            repeatPass.style.border = "3px solid black";
            repeatPass.style.color = "black";
            containerFocusBlur[10].style = "color: red; font-size: 16px";
            containerFocusBlur[10].style.display = "flex";
        }

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

    /////////////////// BOTON CONFIRM ///////////////////
    var confirmBtn = document.getElementById("btnConfirm");

    var modal = document.getElementById("myModal");
    var btnConfirm = document.getElementById("sign-in-js");
    var close = document.getElementsByClassName("closeSpan");

    btnConfirm.onclick = function (e) {
        e.preventDefault();

        var modalTitle = document.getElementById("titleModal");

        modal.style.display = "block";
        if (flagName == 1 && flagLname == 1 && flagDni == 1 && flagBirth == 1 && flagPhone == 1) {
            modalTitle.textContent = 'Logged fail';
            text.textContent = 'Email: ' + email.value + ' is not valid';
        } else if (passIsValid == 2) {
            modalTitle.textContent = 'Login failed';
            text.textContent = 'Password: ' + password.value + ' not valid';
        } else {
            modalTitle.textContent = 'Login Succefull';
            text.textContent = "Email: " + email.value + " Password: " + password.value;
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