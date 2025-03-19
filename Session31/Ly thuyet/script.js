// console.log(document)
// let h1 = document.getElementById("demo-id")
// console.log(h1);


// let htmlList = document.getElementsByClassName("demo-class")
// console.log(htmlList);

// console.log(htmlList[0]);
// console.log(htmlList[2]);

// for(let i=0; i<htmlList.length; i++) {
//     console.log(htmlList[i]);
// }


let h1 = document.getElementById("demo-id")
console.dir(h1);

console.log(h1.innerHTML);
console.log(h1.innerText);
console.log(h1.textContent);

let div = document.getElementById("demo-inner")

console.log(div.innerHTML);
console.log(div.innerText);
console.log(div.textContent);

div.innerText = "Hello world!!!"
div.innerHTML = `
<ul>
    <li>Hlo</li>
    <li>Hlo</li>
    <li>Hlo</li>
</ul>`

console.log(div.id) 

// .style
// console.log(div.style);
// div.style.backgroundColor = "pink"
// div.style.borderRadius = "50%"
// div.style.border = "1px solid black"
// div.style.width = "200px"
// div.style.height = "200px"
// div.style.lineHeight = "200px"

console.log(div.classList);

div.classList.add("class-02")
div.classList.add("demo")
div.classList.remove("demo")

console.log(div.children[0].children[2].parentElement.parentElement);


let createText = document.createElement("p")
createText.innerText =  ("Hello World")
document.body.appendChild(createText)
