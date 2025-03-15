let test1 = [2,1,4,6,18,12,3];
let test2 = [4,6,5,8,12,5];
let test3 = "abc";

function sortEven(arr) {
    if(!Array.isArray(arr)) {
        let evenArr =arr.filter(item=>item%2===0);
        console.log("evenArr", evenArr);
        // sx mang
        for(let i=0; i<evenArr.length; i++) {
            for (let j=0; j<evenArr.length-1-i; j++) {
                if(evenArr[j]>evenArr[j+1]){
                    let temp=evenArr[j];
                    evenArr[j]=evenArr[j+1]
                    evenArr[j+1]=temp;
                }
            }
        }
        console.log("Mang da duoc loc")
    }
}