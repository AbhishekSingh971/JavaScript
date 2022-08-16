window.onload = ()=>{
const uname = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
let validUser = false;
let validEmail = false;
let validPhone = false;

// console.log(name,email,phone);

uname.addEventListener('blur', () => {
    console.log('name is blurred');
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = uname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your username is valid");
        uname.classList.remove('is-invalid');
        validUser=true;
    }
    else {
        console.log('Your username is not valid');
        uname.classList.add('is-invalid');
        validUser = false;
    }
});

email.addEventListener('blur', () => {
    console.log('email is blurred');
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your Email is valid");
        email.classList.remove('is-invalid');
        validEmail=true;
    }
    else {
        console.log('Your Email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {
    console.log('phone is blurred');
    // validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log("Your phone number is valid");
        phone.classList.remove('is-invalid');
        validPhone=true;
    }
    else {
        console.log('Your phone number is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    console.log('This submit button is working');
    console.log(validEmail,validUser,validPhone);
    
    //submit your form here
    if (validEmail && validPhone && validUser) {
        console.log('phone, email, and user are valid. submitting the form');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        success.classList.add('show');
        failure.classList.remove('show');
        // $('#failure').alert('close');
        // $('failure').hide();
        // $('success').show();
    }
    else {
        console.log('one of phone,email or user are not valid. hence not submitting the form. Please correct the errors and try again');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
        // $('#success').alert('close');
        // $('success').hide();
        // $('failure').show();
    }

    e.preventDefault();
});
}