function checkLength(number){
    return number.length >= 10;
}

function writeToPage(text, yes){
    const resultContainer = document.querySelector("#results-div");
    const place = document.createElement("div");
    place.classList.add("result");
    const answer = document.createElement("p");

    if(yes){
        answer.textContent = "Valid US number: " + text;
    } else {
        answer.textContent = "Invalid US number: " + text;
    }

    place.appendChild(answer);
    resultContainer.appendChild(place);
    return;
}

function checkPhoneNumber(phoneNumber) {
    let checkNumber = "";
    let mark = 0;
    let numCode = phoneNumber.slice(0, phoneNumber.indexOf(" ")).toInteger;
    for(let i = 0; i < phoneNumber.length; i++) {
        if(phoneNumber[i] >= '0' && phoneNumber[i] <= '9'){
            checkNumber += phoneNumber[i];
        }
        if(phoneNumber[i] === "("){
            mark ++;
        }
        if(phoneNumber[i] === ")"){
            mark ++;
        }
    }

    if(numCode != 1){
        writeToPage(phoneNumber, false);
        return;
    }

    if(checkLength(checkNumber) && (mark === 2 || mark === 0) &&
        (!phoneNumber.startsWith("(") && phoneNumber.endsWith(")"))){
        writeToPage(phoneNumber, true);
        return;
    } else {
        writeToPage(phoneNumber, false);
        return;
    }

}

document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    userInput.innerHTML = "";
    if(userInput === "") {
        alert('Please provide a phone number');
    } else {
        checkPhoneNumber(userInput);
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    const resultContainer = document.querySelector("#results-div");
    resultContainer.innerHTML = "";
});