let nameInput = document.getElementById("nameInput");  
let saveBtn = document.getElementById("saveBtn");  
let greeting = document.getElementById("greeting");  
let userNameDisplay = document.getElementById("userName");  
let formContainer = document.getElementById("formContainer");  
let changeNameBtn = document.getElementById("changeNameBtn");  
let savedName = localStorage.getItem("userName");  
if (savedName) {  
    userNameDisplay.textContent = savedName;  
    greeting.style.display = "block";  
    formContainer.style.display = "none";  
}  

saveBtn.onclick = function () {  
    let name = nameInput.value.trim();  
    if (name) {  
        localStorage.setItem("userName", name);  
        userNameDisplay.textContent = name;  
        greeting.style.display = "block";  
        formContainer.style.display = "none";  
    }  
};  

changeNameBtn.onclick = function () {  
    greeting.style.display = "none";  
    formContainer.style.display = "block";  
    nameInput.value = ""
};  
