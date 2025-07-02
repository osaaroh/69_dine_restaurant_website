let errorNameMsg =""
let errorEmailMsg =""
let errorPhoneMsg =""
let errorPlanMsg =""
let nameInput = ""
let emailInput = ""
let phoneInput = ""

const step1ValidationTimeout = () => setInterval(() => {
    errorNameMsg.innerHTML = "";
    errorEmailMsg.innerHTML = "";
    errorPhoneMsg.innerHTML = "";
}, 5500);
const step2ValidationTimeout = () => setInterval(() => {
    errorPlanMsg.innerHTML =""
}, 5500);


const checkNameInput=(name)=>{
    nameInput = document.querySelector("#name");
    errorNameMsg = document.querySelector(".error_input__name");
    if (name.length === 0 || (/^\w+( \w+)*$/.test(name))===false) {
        errorNameMsg.innerHTML = "Name can contain only letters";
        nameInput.classList.add('error_border')
        return  false;
    } 
    
    else {
        return true
    }
}
const checkEmailInput=(email)=>{
    emailInput = document.querySelector("#email");
    errorEmailMsg = document.querySelector(".error_input__email");
    const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length === 0 || (emailValidation.test(email))===false) {
        errorEmailMsg.innerHTML = "Enter valid Email";
        emailInput.classList.add('error_border')
        return  false;
    } 
    
    else {
        return true
    }
}
const checkPhoneInput=(phone)=>{
    phoneInput = document.querySelector("#phone");
    errorPhoneMsg = document.querySelector(".error_input__phone");
    if (phone.trim().length === 0) {
        errorPhoneMsg.innerHTML = "This field is required";
        phoneInput.classList.add('error_border')
        return false;
    } 
    
    else {
        return true
    }
}

let step1Validation =(obj)=>{
    const nameBool = obj.hasOwnProperty("name")? checkNameInput(obj.name):false;
    const emailBool = obj.hasOwnProperty("email")?checkEmailInput(obj.email):false;
    const phoneBool = obj.hasOwnProperty("phone")?checkPhoneInput(obj.phone):false;
    step1ValidationTimeout()
    return [nameBool, emailBool, phoneBool]

    
    
}
let step2Validation =(obj)=>{
    errorPlanMsg = document.querySelector(".error_input__plan");
    if(obj.hasOwnProperty("plan")){
        errorPlanMsg.innerHTML="";
        return true
    } else {
        errorPlanMsg.innerHTML="Please choose a plan below";
        step2ValidationTimeout();
        return false
    }
    
}

export let isValid = (currentStep, formObjects)=>{
    console.log(formObjects);
    if(currentStep===0){
        let step1ValidationValues = step1Validation(formObjects);
        if(step1ValidationValues[0]&&step1ValidationValues[1]&&step1ValidationValues[2]){
            return true
        }
        else{
            return false
        }
    }
    else if(currentStep===1){
        if(step2Validation(formObjects)){
            return true
        }
        else{
            return false
        }
    }
    else if(currentStep===2){
        return true
    }
    else if(currentStep===3){
        return true
    }
}