let stars = document.querySelectorAll(".stars")
let ratingText = document.getElementById("selected-rating")
let cmtInput = document.getElementById("comment-input")
let cmtList = document.getElementById("comment-list")
let selectRating=0

let reviews = JSON.parse(localStorage.getItem("reviews")) || []




for (let i=0; i<stars.length; i++) {
    stars[i].onclick = function () {
        selectStar(parseInt(stars[i].getAttribute("data-value")))
    }
}
function updateStar(rating){
    for(let i=0; i<stars.length; i++){
        if(i<rating){
            stars[i].style.color= "gold"
        }else{
            stars[i].style.color= "#ddd"
        }
    }
}

function selectStar(rating) {
    selectRating=rating
    ratingText.textContent= "Đánh giá: " + rating + " sao"
    updateStar(rating) 
}

function submitReview() {
    let comment = cmtInput.value.trim()
    if(selectRating===0){
        alert("Hãy chọn số sao")
        return
    }
    if(comment===""){
        alert("Hãy nhập bình luận")
        return
    }
    let newReview={
        rating: selectRating,
        comment: comment
    }
    reviews.push(newReview)
    localStorage.setItem("reviews", JSON.stringify(reviews))

    cmtInput.value= ""
    selectRating=0
    ratingText.textContent = "Bạn chưa đánh giá."
    updateStar(0)

    renderReview()
}

function renderReview(){
    let content=""
    for(let i=0; i<reviews.length; i++){
        content += `<li>
                    <span>${"★".repeat(reviews[i].rating)}</span>
                    <b>${reviews[i].comment}</b>
                 </li>`
    }
    cmtList.innerHTML=content
}
renderReview();