let hideOrShow = false
function convert() {
    let input = document.getElementById(`password`)
    hideOrShow = !hideOrShow
    if(hideOrShow) {
        input.type = `text`
    } else {
        input.type = `password`
    }
    let icon  = document.getElementById(`eye`)
    if (hideOrShow) {  
        icon.classList.remove('fa-eye');  
        icon.classList.add('fa-eye-slash');  
    } else {  
        icon.classList.remove('fa-eye-slash');  
        icon.classList.add('fa-eye');  
    }  
}

