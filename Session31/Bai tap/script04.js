let model = document.getElementById("modal")
let btn = document.getElementById("open")
let close = document.getElementById("mark")
model.style.display = "none"
btn.style.borderColor = "black"

btn.onclick = function () {
    if (model.style.display === "none"){
        model.style.display = "block"
        document.body.classList.add("backgroundColorChange")
        btn.classList.add("backgroundColorChange")
    }
}
close.onclick = function (){
    model.style.display = "none"
    document.body.classList.remove("backgroundColorChange") 
    btn.classList.remove("backgroundColorChange")
    btn.style.borderColor = "black"
}
