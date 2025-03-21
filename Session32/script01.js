document.getElementById("btn-changeColor").onclick=function() {
    let r=Math.floor(Math.random()*256)
    let g=Math.floor(Math.random()*256)
    let b=Math.floor(Math.random()*256)
     let opacity=Math.random().toFixed(2)
     document.body.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${opacity})`
 }