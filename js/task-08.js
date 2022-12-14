
const form = document.querySelector(".login-form");

// 1. First version 

const onFormSubmit = (event) => {
  event.preventDefault();
    const { elements: { email, password } } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        alert("All fields must be filled!")
    }    
    
    const formElements = event.currentTarget.elements
    const mail = formElements.email;
    const pass = formElements.password;

    const formData = {
        email: mail.value,
        password: pass.value,
    };

    if (mail.value !== "" && pass.value !== "") {
        console.log(formData);
    }
    
    event.currentTarget.reset();
}

form.addEventListener("submit", onFormSubmit);


// 2. Second version

// const onFormSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     formData.forEach((value, name) => {
//         if (value === "") {
//             alert("All fields must be filled!")
//         }

//         console.log('Name', name);
//         console.log("Value", value)

//         event.currentTarget.reset();
// });    
// }

// form.addEventListener("submit", onFormSubmit);

