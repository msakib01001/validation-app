const validateName = () => {
    let name = document.getElementById("inputName").value;
    let nField = document.getElementById("name");
    let existingMessage = nField.querySelector("p");

    if (!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)) {
        console.log("Invalid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="invalid">Invalid, be sure you include both first and last name</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="invalid">Invalid, be sure you include both first and last name</span>`;
        }
    } else {
        console.log("Valid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="valid">Valid Name Input ✔</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="valid">Valid Name Input ✔</span>`;
        }
    }
}

const validateContact = () => {
    let contact = document.getElementById("inputContact").value;
    let nField = document.getElementById("contact");
    let existingMessage = nField.querySelector("p");

    if (!contact.match(/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/)) {
        console.log("Invalid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="invalid">Invalid Contact Number</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="invalid">Invalid Contact Number</span>`;
        }
    } else {
        console.log("Valid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="valid">Valid Contact ✔</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="valid">Valid Contact ✔</span>`;
        }
    }
}

const validatePostal = () => {
    let postal = document.getElementById("inputPostal").value;
    let nField = document.getElementById("postal");
    let existingMessage = nField.querySelector("p");

    if (!postal.match(/^\d{4}$/ )) {
        console.log("Invalid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="invalid">Invalid Post Code!</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="invalid">Invalid Post Code!</span>`;
        }
    } else {
        console.log("Valid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="valid">Valid Postal Code ✔</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="valid">Valid Postal Code ✔</span>`;
        }
    }
}


const validateEmail = () => {
    let email = document.getElementById("inputEmail").value;
    let nField = document.getElementById("email");
    let existingMessage = nField.querySelector("p");

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        console.log("Invalid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="invalid">Invalid Email Address!</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="invalid">Invalid Email Address!</span>`;
        }
    } else {
        console.log("Valid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="valid">Valid Email Address ✔</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="valid">Valid Email Address ✔</span>`;
        }
    }
}

const validatePass  = () => {
    let pass = document.getElementById("inputPass").value;
    let nField = document.getElementById("pass");
    let existingMessage = nField.querySelector("p");

    if (!pass.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
        console.log("Invalid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="invalid">Try To Set Strong Password...</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML =  `<span class="invalid">Try To Set Strong Password...</span>`;
        }
    } else {
        console.log("Valid");
        if (!existingMessage) {
            let message = document.createElement("p");
            message.innerHTML = `<span class="valid">Strong PassWord!</span>`;
            nField.appendChild(message);
        } else {
            existingMessage.innerHTML = `<span class="valid">Strong PassWord!</span>`;
        }
    }
}

let form = document.getElementById("validForm")

