const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const form1 = document.querySelector(".Bcard");
const form2 = document.querySelector(".Paypal");


option1.addEventListener("click",() =>{
    form1.style.display = "flex";
    form2.style.display = "none";
    option1.style.textDecoration = "underline"
    option2.style.textDecoration = "none"
    option1.style.color = "black"
    option2.style.color = "#0000005f"

    
    
});
option2.addEventListener("click",() =>{
    form1.style.display = "none";
    form2.style.display = "flex";
    option2.style.textDecoration = "underline"
    option1.style.textDecoration = "none"
    option2.style.color = "black"
    option1.style.color = "#0000005f"
    
});