function submitted(){
    let name = document.myform.name.value;
    let email = document.myform.email.value;
    let message = document.myform.message.value;
    let phone = document.myform.phone.value;

    if(name.length < 5){
        alert("Name must be minimum 6 characters");
        return false;
    }
    if(email == null || email == ""){
        alert("Dont Leave the Email field Empty");
        return false;
    }
    if(phone == ""){
        alert("Enter the phone number field");
        return false;
    }
    if(message == ""){
        alert("Enter the Message field");
        return false;
    }
    else{
        alert("Thankyou for submitting the Feedback");
        myform.reset();
        return true;
    }
}