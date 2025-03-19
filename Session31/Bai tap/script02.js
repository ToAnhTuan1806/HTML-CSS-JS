document.getElementById("btn-mode").onclick = function() {  
    let body = document.getElementById("body");  

    if(body.style.backgroundColor === "black") {  
        body.style.backgroundColor = "white"; 
        document.body.style.color = "black";  
    }else {    
        body.style.backgroundColor = "black";  
        document.body.style.color = "white";   
    }  
};  