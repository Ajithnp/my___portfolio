var  nameError = document.getElementById('name-error')
var companyError = document.getElementById('company-error')
var emailError = document.getElementById('email-error')
var phoneError = document.getElementById('phone-error')
var messageError = document.getElementById('message-error')
var submitError = document.getElementById('submit-error')

function validateName(){
    var name =document.getElementById('contact-name').value;
    if(name.lenght == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]+(\s{1}[A-Za-z]+)+$/)){
        nameError.innerHTML = 'Enter full Name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;

}
function validateEmail(){
    var email = document.getElementById('contact-email').value;
    var emailError = document.getElementById('email-error')

    if(email.lenght == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.match(emailPattern)){
        emailError.innerHTML = 'Invalid Email';
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validateMessage() {
    var message = document.getElementById('contact-message').value;
    if(message.length === 0) {
        messageError.innerHTML = 'Message is required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}
function validatePhone() {
    var phone = document.getElementById('contact-phone').value;
    var phoneError = document.getElementById('phone-error'); // Ensure this ID is correct

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (!/^[0-9]*$/.test(phone)) {
        phoneError.innerHTML = 'Enter numbers only';
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Enter 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Invalid phone number';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'; 
    return true;
}

function validateForm(){

    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.innerHTML ='please fill contents';
        return false;
        

    }
    submitError.innerHTML ='';
    return true;

}