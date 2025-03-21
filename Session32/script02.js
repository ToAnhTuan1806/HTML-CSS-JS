let count = 0;
document.getElementById("clickButton").onclick=function () {
    count++; 
    document.getElementById("countDisplay").textContent = "Số lần bấm: "+ count;
};
