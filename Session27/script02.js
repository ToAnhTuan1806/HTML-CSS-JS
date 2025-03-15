let menu = `
-----Menu-----
1. Nhập danh sách sinh viên
2. Hiển thị danh sách sinh viên
3. Tìm sinh viên theo tên
4. Xoá sinh viên khỏi danh sách
5. Thoát
Lựa chọn của bạn:
`;

let input;
let arrStd = [];

while(input !== 5) {
    input = +prompt(menu);

    switch(input) {
        case 1:
            addStd();
            break;
        case 2:
            displayStd();
            break;
        case 3:
            findStdByName();
            break;
        case 4:
            removeStd();
            break;
        case 5:
            console.log("Thank for using!!!");
            break;
            default:
                console.log("Lựa chọn không hợp lệ");
                break;
    }
}

function addStd () {
    let n = +prompt("Nhập số lượng sinh viên:");
    for(let i=0; i<n; i++) {
        let fullName = prompt("Nhập đầy đủ họ tên sinh viên");
        arrStd.push(fullName);
    }
}
function displayStd() {  
    if (arrStd.length === 0) {  
        console.log("Danh sách sinh viên trống");  
        return;  
    }  

    console.log("Danh sách sinh viên:");  
    for (let i=0; i<arrStd.length; i++) {  
        console.log(`${i + 1}. ${arrStd[i]}`);  
    }  
}  
function findStdByName() {  
    let nameToFind = prompt("Nhập tên sinh viên muốn tìm");  
    let found = []; 

    for (let i=0; i<arrStd.length; i++) {  
        if (arrStd[i].toLowerCase().includes(nameToFind.toLowerCase())) {  
            found.push(arrStd[i]); 
        }  
    }  
    if (found.length > 0) {  
        console.log("Kết quả tìm kiếm:");  
        for (let j=0; j<found.length; j++) {  
            console.log(found[j]); 
        }  
    } 
}  
function removeStd() {  
    let nameToRemove = prompt("Nhập tên sinh viên muốn xoá");  
    let index = -1; 

    for (let i = 0; i < arrStd.length; i++) {  
        if (arrStd[i].toLowerCase() === nameToRemove.toLowerCase()) {  
            index = i;  
            break; 
        }  
    }  

    if (index !== -1) {  
        arrStd.splice(index, 1); 
        console.log(`Đã xoá sinh viên ${nameToRemove}`);  
    } else {  
        console.log("Không tìm thấy sinh viên để xoá");  
    }  
}  