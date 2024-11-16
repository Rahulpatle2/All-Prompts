const PasswordInput = document.querySelector(".pinput");
const eyeIcon = document.querySelector(".icon");


eyeIcon.addEventListener('click',() =>{
    // console.log(e)

    if(PasswordInput.type === "text"){
        PasswordInput.type = "password";
        PasswordInput.textContent = "hide"
    }else{
         PasswordInput.type = "text";
        PasswordInput.textContent = "show"
    }
})