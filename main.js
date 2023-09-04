const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');

navToggle.addEventListener("click", () => {
    nav.classList.toggle('open')
}
)

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_2i4zq24", "template_2dpnji2", params).then(function (res) {
        alert("Success! " + res.status);
    })
}

function mergeSets() {
    let setAInput = document.getElementById("setA").value;
    let setBInput = document.getElementById("setB").value;

    let mergedSet = setAInput + ", " + setBInput;
    document.getElementById("unionSet").textContent = mergedSet;
}

function findMatchingCharacters() {
    let setA2 = document.getElementById("setA2").value;
    let setB2 = document.getElementById("setB2").value;

    let matchingCharacters = "";

    for (let i = 0; i < setA2.length; i++) {
        let currentChar = setA2[i];
        if (setB2.includes(currentChar) && !matchingCharacters.includes(currentChar)) {
            matchingCharacters += currentChar;
        }
    }

    if (matchingCharacters.length > 0) {
        document.getElementById("intersectionSet").innerHTML = matchingCharacters;
    } else {
        document.getElementById("intersectionSet").innerHTML = "No matching characters found.";
    }
}

function findAndMerge() {
    const setA3 = document.getElementById("setA3").value;
    const setB3 = document.getElementById("setB3").value;

    const arrayA = Array.from(setA3);
    const arrayB = Array.from(setB3);

    const mergedArray = [];


    for (let char of arrayA) {
        if (!arrayB.includes(char) && !mergedArray.includes(char)) {
            mergedArray.push(char);
        }
    }


    for (let char of arrayB) {
        if (!arrayA.includes(char) && !mergedArray.includes(char)) {
            mergedArray.push(char);
        }
    }

    const resultElement = document.getElementById("complimentSet");
    resultElement.textContent = mergedArray.join(', ');
}

function findCombinations() {
    const setA4 = document.getElementById("setA4").value.split(",").map(value => value.trim());
    const setB4 = document.getElementById("setB4").value.split(",").map(value => value.trim());

    const result = document.getElementById("subsetSet");
    result.innerHTML = "";

    for (const valueA of setA4) {
        for (const valueB of setB4) {
            const combination = `${valueA}, ${valueB}`;
            result.innerHTML += combination + "<br>";
        }
    }
}
