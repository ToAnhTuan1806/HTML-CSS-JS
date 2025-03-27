let buttons = document.getElementsByClassName("btn");
let likes = document.getElementsByClassName("likes");

for (let i=0; i<buttons.length; i++) {
    let likesCount = localStorage.getItem("likes"+i);
    if (likesCount===null) {
        likesCount=0;
    } else {
        likesCount = Number(likesCount);
    }
    likes[i].textContent = "❤️ " + likesCount + " lượt thích";
    buttons[i].onclick = function () {
        likesCount = likesCount+1;
        localStorage.setItem("likes"+i, likesCount);
        likes[i].textContent = "❤️ " + likesCount + " lượt thích";
    };
}
