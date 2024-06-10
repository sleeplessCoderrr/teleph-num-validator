function checkPhoneNumber(phoneNumber) {
   const resultContainer = document.querySelector("#results-div");
   const place = document.createElement("div");
   place.classList.add("result");
   const answer = document.createElement("p");
   answer.textContent = phoneNumber;
   place.appendChild(answer);
   resultContainer.appendChild(place);

}

document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
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