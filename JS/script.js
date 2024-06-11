function checkLength(number){
    return number.length >= 10;
}

function writeToPage(text, yes){
    const resultContainer = document.querySelector("#results-div");
    const place = document.createElement("div");
    place.classList.add("result");
    const answer = document.createElement("p");

    if(yes === 1){
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
    let numCode = parseInt(phoneNumber.slice(0, phoneNumber.indexOf(" ")));
    let numCode2 = parseInt(phoneNumber.slice(0, phoneNumber.indexOf("(")));
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

    //Check phone code number within spaces
    if(phoneNumber.indexOf(" ") == 1 || phoneNumber.indexOf(" ") == 2){
        if(numCode != 1){
            writeToPage(phoneNumber, false);
            return;
        }
        if(checkLength(checkNumber) && (mark === 2 || mark === 0) && (!phoneNumber.startsWith("(") && !phoneNumber.endsWith(")"))){
            writeToPage(phoneNumber, 1);
            return;
        } else {
            writeToPage(phoneNumber, 0);
            return;
        }
    }

    //Check phone code number within parenthesis
    if(phoneNumber.indexOf("(") == 1 || phoneNumber.indexOf("(") == 2){
        if(numCode2 != 1){
            writeToPage(phoneNumber, false);
            return;
        }
        if(checkLength(checkNumber) && (mark === 2 || mark === 0) && (!phoneNumber.startsWith("(") && !phoneNumber.endsWith(")"))){
            writeToPage(phoneNumber, 1);
            return;
        } else {
            writeToPage(phoneNumber, 0);
            return;
        }
    }

    //Check phone number 
    if(checkLength(checkNumber) && (mark === 2 || mark === 0) && (checkNumber[0] == 1 || checkNumber[0] == 5)){
        writeToPage(phoneNumber, 1);
        return;
    } else {
        writeToPage(phoneNumber, 0);
        return;
    }

}

document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    if(userInput === "") {
        alert('Please provide a phone number');
    } else {
        checkPhoneNumber(userInput);
    }
    document.getElementById('user-input').value = "";
});

document.getElementById('clear-btn').addEventListener('click', function() {
    const resultContainer = document.querySelector("#results-div");
    resultContainer.innerHTML = "";
});