window.onload = function () {

    var phone = document.getElementById("telephone");
    var city = document.getElementById("location");
    var codePost = document.getElementById("postCode");
    var email = document.getElementById("mail");
    var pass = document.getElementById("password");
    var repeatPass = document.getElementById("repeatPassword");
    var confirmBtn = document.getElementById("btnConfirm");
    var containerFocusBlur = document.getElementsByClassName("blurFocusContainer");

    /////////////////// NAME ///////////////////
    var firstName = document.getElementById("name");
    var fName = firstName.value;

    var flagName = 0;

    firstName.addEventListener("focus", focusfName);
    firstName.addEventListener("blur", blurfName);

    function validateName() {
        flagName = 1;
        for (var i = 0; i < fName.length; i++) {
            if (!isNaN(fName[i])) {
                flagName = 2;
            }
        }
        return flagName;
    }

    function focusfName() {
        containerFocusBlur[0].style.display = "none";
        firstName.style.backgroundColor = "#DCDCDC";
    }

    function blurfName() {
        flagName = 1;

        for (var i = 0; i < fName.length; i++) {
            var letterName = fName.substring(i, i + 1);

            if (letterName == Number(letterName)) {
                flagName = 2;
            }

        }
        if (flagName == 1) {
            firstName.style.border = "3px solid green";
        } else {
            var text = "The email is invalid";
            containerFocusBlur[0].textContent = "The email is invalid";
            firstName.style.border = "3px solid red";
            firstName.style.color = "red";
            containerFocusBlur[0].classList.add.display = "flex";
        }
    }
    /////////////////// LAST NAME ///////////////////
    var lastName = document.getElementById("lastName");
    var lName = lastName.value;

    var flagLname = 0;

    lastName.addEventListener("focus", focuslName);
    lastName.addEventListener("blur", blurlName);

    function validateLname() {
        flagLname = 1;
        for (var i = 0; i < lName.length; i++) {
            if (!isNaN(lName[i])) {
                flagLname = 2;
            }
        }
        return flagLname;
    }

    function focuslName() {
        containerFocusBlur[1].style.display = "none";
        lastName.style.backgroundColor = "#DCDCDC";
    }

    function blurlName() {
        flagLname = 1;

        for (var i = 0; i < lName.length; i++) {

            var letterLname = lName.substring(i, i + 1);

            if (letterLname == Number(letterLname)) {
                flagLname = 2;
            }

        }
        if (flagLname == 1) {
            lastName.style.border = "3px solid green";
        } else {
            var text = "The email is invalid";
            containerFocusBlur[1].textContent = "The email is invalid";
            lastName.style.border = "3px solid red";
            lastName.style.color = "red";
            containerFocusBlur[1].classList.add.display = "flex";
        }
    }

    /////////////////// DNI ///////////////////
    var dNi = document.getElementById("dni");
    var dNiValue = dNi.value;

    dNi.addEventListener("focus", focusdNi);
    dNi.addEventListener("blur", blurdNi);

    function focusdNi() {
        containerFocusBlur[2].style.display = "none";
        lastName.style.backgroundColor = "#DCDCDC";
    }

    function blurdNi() {
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
          if (countLetters == dNiValue.length) {
            dNiValue = true;
            idError = document.getElementById("id-error-box");
            // form-name.style.border = "green";
            idError.innerText = "";
          } else {
            var idError = document.getElementById("id-error-box");
            idError.innerText = "ID should contain more than 7 characters";
            idError.style = "color: red; font-size: 16px";
          }
        } else {
          idError = document.getElementById("id-error-box");
          idError.innerText = "ID should only contain numbers";
          idError.style = "color: red; font-size: 16px";
        }
      }
      function idFocus() {
        idData.style = "border-color:none";
        var idError = document.getElementById("id-error-box");
        var idInput = document.getElementsByClassName("sing-up-input");
        idInput[0].style = "border-bottom: solid #49A37B 0.5px";
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

        if (day < 1 || day > 31) {
            console.log("erros day");
        } else if (month < 1 || month > 12) {
            console.log("error month");
        } else if (year < 1900 || year > 2018) {
            console.log("error year");
        } else if (slash == "/" && secondSlash == "/") {
            console.log("erros slash");
        } else {
            console.log("fine");
            bdayOk = true;
        }
    }

    /////////////////// TELEPHONE ///////////////////


    /////////////////// ADRESS ///////////////////
    var adreSs = document.getElementById("adress");
    var adressValue = adreSs.value;

    if (adressValue.length < 5) {
        console.log("error pintar rojo length tiene q ser mayor a 5");
    } else {
        if (adressValue.indexOf(" ") === -1) {
            console.log("no hay espacios recuadro rojo y cartel abajo");
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
                console.log("insert numbers and letters");
            } else if (letterCount + spaceCount + numberCount == adressValue.length) {
                console.log("everything is ok");
            } else {
                console.log("INGRESO CARACTERES ESPECIALES EN ROJO");
            }
        }
    }


}