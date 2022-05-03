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

    var flagDni = 0;

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
                flagDni = 0;
                containerFocusBlur[2].textContent = "ID should only contain numbers";
                dNi.style.border = "3px solid red";
                dNi.style.color = "red";
                containerFocusBlur[2].style = "color: red; font-size: 16px";
                containerFocusBlur[2].style.display = "flex";
            } else {
                flagDni = 1;
                dNi.style.border = "3px solid green";
                dNi.style.color = "black";
            }
        } else {
            flagDni = 0;
            containerFocusBlur[2].textContent = "ID should contain more than 7 characters";
            dNi.style.border = "3px solid red";
            dNi.style.color = "red";
            containerFocusBlur[2].style = "color: red; font-size: 16px";
            containerFocusBlur[2].style.display = "flex";
        }
    }

    /////////////////// DATE OF BIRTHDAY ///////////////////
    var birth = document.getElementById("birthday");

    var flagBirth = 0;

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
            flagBirth = 0;
            containerFocusBlur[3].textContent = "The day is not valid";
            birth.style.border = "3px solid red";
            birth.style.color = "red";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        } else if (month < 1 || month > 12) {
            flagBirth = 0;
            containerFocusBlur[3].textContent = "The month is not valid";
            birth.style.border = "3px solid red";
            birth.style.color = "red";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        } else if (year < 1900 || year > 2018) {
            flagBirth = 0;
            containerFocusBlur[3].textContent = "The year is not valid";
            birth.style.border = "3px solid red";
            birth.style.color = "red";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        } else if (slash != "/" || secondSlash != "/") {
            flagBirth = 0;
            containerFocusBlur[3].textContent = "The format is not valid, you need write XX/XX/XXXX";
            birth.style.border = "3px solid red";
            birth.style.color = "red";
            containerFocusBlur[3].style = "color: red; font-size: 16px";
            containerFocusBlur[3].style.display = "flex";
        } else {
            flagBirth = 1;
            birth.style.border = "3px solid green";
            birth.style.color = "black";
        }
    }

    /////////////////// TELEPHONE ///////////////////
    var phone = document.getElementById("telephone");

    var flagPhone = 0;

    phone.addEventListener("focus", focusPhone);
    phone.addEventListener("blur", blurPhone);

    function focusPhone() {
        containerFocusBlur[4].style.display = "none";
        phone.style.backgroundColor = "#DCDCDC";
    }

    function blurPhone() {
        var phoneValue = phone.value;

        if ((phoneValue == Number(phoneValue)) && (phoneValue.length == 10)) {
            flagPhone = 1;
            phone.style.border = "3px solid green";
            phone.style.color = "black";
            containerFocusBlur[4].textContent = "";
        } else {
            flagPhone = 0;
            containerFocusBlur[4].textContent = "Telephone should contain 10 characters";
            phone.style.border = "3px solid red";
            phone.style.color = "red";
            containerFocusBlur[4].style = "color: red; font-size: 16px";
            containerFocusBlur[4].style.display = "flex";
        }
    }

    /////////////////// ADRESS ///////////////////
    var adreSs = document.getElementById("adress");

    var flagAdress = 0;

    adreSs.addEventListener("focus", focusAdress);
    adreSs.addEventListener("blur", blurAdress);

    function focusAdress() {
        containerFocusBlur[5].style.display = "none";
        adreSs.style.backgroundColor = "#DCDCDC";
    }

    function blurAdress() {
        var adressValue = adreSs.value;

        if (adressValue.length < 5) {
            flagAdress = 0;
            containerFocusBlur[5].textContent = "The format is not valid, the adress need to have more than 5 caracters";
            adreSs.style.border = "3px solid red";
            adreSs.style.color = "red";
            containerFocusBlur[5].style = "color: red; font-size: 16px";
            containerFocusBlur[5].style.display = "flex";
        } else {
            if (adressValue.indexOf(" ") === -1) {
                flagAdress = 0;
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
                    flagAdress = 0;
                    containerFocusBlur[5].textContent = "The format is not valid, insert numbers and letters";
                    adreSs.style.border = "3px solid red";
                    adreSs.style.color = "red";
                    containerFocusBlur[5].style = "color: red; font-size: 16px";
                    containerFocusBlur[5].style.display = "flex";
                } else if (letterCount + spaceCount + numberCount == adressValue.length) {
                    flagAdress = 1;
                    adreSs.style.border = "3px solid green";
                    adreSs.style.color = "black";
                    containerFocusBlur[5].textContent = "";
                } else {
                    flagAdress = 0;
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

    var cityFlag = 0;

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

        if (city.value == "") {
            containerFocusBlur[6].textContent = "City cannot be empty";
            city.style.border = "3px solid black";
            city.style.color = "black";
            containerFocusBlur[6].style = "color: red; font-size: 16px";
            containerFocusBlur[6].style.display = "flex";
        }

        cityIsValid = validateCity();

        if (!cityIsValid) {
            cityFlag = 0;
            containerFocusBlur[6].textContent = "The city is invalid, it needs to have more than 3 characters";
            city.style.border = "3px solid red";
            city.style.color = "red";
            containerFocusBlur[6].style = "color: red; font-size: 16px";
            containerFocusBlur[6].style.display = "flex";
        } else {
            cityFlag = 1;
            city.style.border = "3px solid green";
            city.style.color = "black";
            containerFocusBlur[6].textContent = "";
        }

    }

    /////////////////// POST CODE ///////////////////
    var codePost = document.getElementById("postCode");

    var codePostFlag = 0;

    codePost.addEventListener("focus", focusCodePost);
    codePost.addEventListener("blur", blurCodePost);

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
            codePostFlag = 1;
            codePost.style.border = "3px solid green";
            codePost.style.color = "black";
            containerFocusBlur[7].textContent = "";
        } else {
            codePostFlag = 0;
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

    var emailFlag = 0;

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
            emailFlag = 0;
            containerFocusBlur[8].textContent = "The email is invalid, it need to have this format example@example.com";
            email.style.border = "3px solid red";
            email.style.color = "red";
            containerFocusBlur[8].style = "color: red; font-size: 16px";
            containerFocusBlur[8].style.display = "flex";
        } else {
            emailFlag = 1;
            email.style.border = "3px solid green";
            email.style.color = "black";
            containerFocusBlur[8].textContent = "";
        }
    }

    /////////////////// PASSWORD ///////////////////
    var pass = document.getElementById("password");

    var passFlag = 0;

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

        if (pass.value == "") {
            containerFocusBlur[9].textContent = "Password cannot be empty";
            pass.style.border = "3px solid black";
            pass.style.color = "black";
            containerFocusBlur[9].style = "color: red; font-size: 16px";
            containerFocusBlur[9].style.display = "flex";
        }

        if (!passIsValid) {
            passFlag = 0;
            containerFocusBlur[9].textContent = "The password is invalid, it need to have numbers and letter only";
            pass.style.border = "3px solid red";
            pass.style.color = "red";
            containerFocusBlur[9].style = "color: red; font-size: 16px";
            containerFocusBlur[9].style.display = "flex";
        } else {
            passFlag = 1;
            pass.style.border = "3px solid green";
            pass.style.color = "black";
            containerFocusBlur[9].textContent = "";
        }
    }

    /////////////////// REPEAT - PASSWORD ///////////////////
    var repeatPass = document.getElementById("repeatPassword");

    var flagRepeat = 0;

    repeatPass.addEventListener("focus", focusRepeatPass);
    repeatPass.addEventListener("blur", blurRepeatPass);

    function focusRepeatPass() {
        containerFocusBlur[10].style.display = "none";
        repeatPass.style.backgroundColor = "#DCDCDC";
    }

    function blurRepeatPass() {
        var repeatPassValue = repeatPass.value;
        var valuePassword = pass.value;

        if (repeatPass == "") {
            containerFocusBlur[10].textContent = "Repeat Password cannot be empty";
            repeatPass.style.border = "3px solid black";
            repeatPass.style.color = "black";
            containerFocusBlur[10].style = "color: red; font-size: 16px";
            containerFocusBlur[10].style.display = "flex";
        }

        if (repeatPassValue == valuePassword) {
            flagRepeat = 1;
            repeatPass.style.border = "3px solid green";
            repeatPass.style.color = "black";
            containerFocusBlur[10].textContent = "";
        } else {
            passFlag = 0;
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
    var close = document.getElementsByClassName("closeSpan");

    var modalTitle = document.getElementById("titleModal");
    var text = document.getElementById("emailPassModalText");

    confirmBtn.onclick = function (e) {
        e.preventDefault();

        modal.style.display = "block";

        var url = "https://basp-m2022-api-rest-server.herokuapp.com/signup";
        url = url + "?name=" + firstName.value + "&lastName=" + lastName.value + "&dni=" + dNi.value + "&dob=" + birth.value + "&phone=" + phone.value + "&address=" +
        adreSs.value + "&city=" + city.value + "&zip=" + codePost.value + "&email=" + email.value + "&password=" + pass.value;

        if (flagName == 0) {
            modalTitle.textContent = "The name is not valid";
            text.textContent = "Name: " + firstName.value + " is not valid";
        } else if (flagLname == 0) {
            modalTitle.textContent = "The surname is not valid";
            text.textContent = "Surname: " + lastName.value + " is not valid";
        } else if (flagDni == 0) {
            modalTitle.textContent = "The DNI is not valid";
            text.textContent = "DNI: " + dNi.value + " is not valid";
        } else if (flagBirth == 0) {
            modalTitle.textContent = "The date of birthday is not valid";
            text.textContent = "Date of birthday: " + birth.value + " is not valid";
        } else if (flagPhone == 0) {
            modalTitle.textContent = "The phone is not valid";
            text.textContent = "Phone: " + phone.value + " is not valid";
        } else if (flagAdress == 0) {
            modalTitle.textContent = "The adress is not valid";
            text.textContent = "Adress: " + adreSs.value + " is not valid";
        } else if (cityFlag == 0) {
            modalTitle.textContent = "The city is not valid";
            text.textContent = "City: " + city.value + " is not valid";
        } else if (codePostFlag == 0) {
            modalTitle.textContent = "The Post Code is not valid";
            text.textContent = "Date of birthday: " + codePost.value + " is not valid";
        } else if (emailFlag == 0) {
            modalTitle.textContent = "The email is not valid";
            text.textContent = "Email: " + email.value + " is not valid";
        } else if (passFlag == 0) {
            modalTitle.textContent = "The password is not valid";
            text.textContent = "Password: " + pass.value + " is not valid";
        } else if (flagRepeat == 0) {
            modalTitle.textContent = "The Password Repeat is not valid";
            text.textContent = "Date of birthday: " + repeatPass.value + " is not valid";
        } else if (pass.value !== repeatPass.value) {
            modalTitle.textContent = "The passwords not match";
            text.textContent = "The passwords not match, please try again";

        } else if (flagName == 1 && flagLname == 1 && flagDni == 1 && flagBirth == 1 && flagPhone == 1 && flagAdress == 1 &&
            flagRepeat == 1 && passFlag == 1 && emailFlag == 1 && codePostFlag == 1 && cityFlag == 1) {

            fetch(url)
                .then(function (response) {
                    return response.json()
                })
                .then(function (responseJ) {
                    if (responseJ.success) {
                        modalTitle.textContent = responseJ.msg;
                        text.textContent = "Name: " + responseJ.data.name + " Surname: " + responseJ.data.lastName +
                        " DNI: " + responseJ.data.dni + " Date of birthday: " + responseJ.data.dob + " Phone: " + responseJ.data.phone +
                        " Address: " + responseJ.data.address + " City: " + responseJ.data.city + " Post Code: " + responseJ.data.zip +
                        " Email: " + responseJ.data.email + " Password: " + responseJ.data.password;
                        // text.textContent = "Surname " + responseJ.data.lastName;
                        // text.textContent = "DNI " + responseJ.data.dni;
                        // text.textContent = "Date of birthday " + responseJ.data.dob;
                        // text.textContent = "Phone " + responseJ.data.phone;
                        // text.textContent = "Address " + responseJ.data.address;
                        // text.textContent = "City " + responseJ.data.city;
                        // text.textContent = "Post Code " + responseJ.data.zip;
                        // text.textContent = "Email " + responseJ.data.email;
                        // text.textContent = "Password " + responseJ.data.password;

                        localStorage.setItem("Name ", responseJ.data.name);
                        localStorage.setItem("Surname ", responseJ.data.lastName);
                        localStorage.setItem("DNI ", responseJ.data.dni);
                        localStorage.setItem("Birthday ", responseJ.data.dob);
                        localStorage.setItem("Phone ", responseJ.data.phone);
                        localStorage.setItem("Address ", responseJ.data.address);
                        localStorage.setItem("City ", responseJ.data.city);
                        localStorage.setItem("Post Code ", responseJ.data.zip);
                        localStorage.setItem("Email ", responseJ.data.email);
                        localStorage.setItem("Password ", responseJ.data.password);
                    }
                    else {
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