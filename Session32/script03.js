document.getElementById("btn-addSubject").onclick = function () {
    let subjectInput =document.getElementById("subjectInput");
    let subjectName =subjectInput.value;

    if (subjectName === "") {
        alert("tên môn học không được để trống");
    } else {
        let subjectList =document.getElementById("subjectList");
        subjectList.innerHTML+=`<li>${subjectName}</li>`; 
        subjectInput.value="";
    }
};