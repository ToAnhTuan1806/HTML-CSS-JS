const contact = [
    {  
        id: 1,  
        name: "Nguyễn Văn A",  
        email: "nguyenvana@gmail.com",  
        phone: "0123456789"  
    },  
    {  
        id: 2,  
        name: "Trần Thị B",  
        email: "tranthib@gmail.com",  
        phone: "0987654321"  
    },
    {  
        id: 3,  
        name: "Nguyễn anh C",  
        email: "nguyenanhC@gmail.com",  
        phone: "0912873456"  
    }  

];
let menu = `
    1. Thêm đối tượng Contact vào danh sách liên hệ.
    2. Hiển thị danh sách danh bạ.
    3. Tìm kiếm thông tin Contact theo số điện thoại.
    4. Cập nhật thông tin Contact(name, email, phone) theo id.
    5. Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
    6. Thoát.

`

let choice;

while(choice !== 6){
    choice= +prompt(menu);

    switch(choice){
        case 1:
            addContact();
            break;
        case 2:
            displayContact();
            break;
        case 3:
            findContactByPhone();
            break;
        case 4:
            updateInfoContactById();
            break;
        case 5:
            deleteContactById();
            break;
        case 6:
            console.log("Thoát chương trình thành công!");
            break;
            default:
                console.log("Lựa chọn không hợp lệ. Thử lại!");
                break;
    }
}

function addContact() {
    let id = Math.floor(Math.random()*99999+ new Date().getMilliseconds());
    let name = prompt("Nhập tên người liên hệ")
    let email = prompt("Nhập email người liên hệ")
    let phone = prompt("Nhập số điện thoại người liên hệ");
    if(isNaN(id)) {
        console.log("Id phải là số nguyên");
        return;
    }
    let info = {
        id:id,
        name:name,
        email:email,
        phone:phone
    }

    contact.push(info);
    console.log("Thêm thông tin thành công");
}

function displayContact() {
    if(contact.length === 0){
        console.log("Chưa có liên hệ trong danh bạ");
    }
    contact.forEach(function(info, index){
        console.log(`
            ID: ${info.id}
            Name: ${info.name}
            Email: ${info.email}
            Phone: ${info.phone}
            `)
    });
}

function displayOneContact(contact) {  
    console.log(`  
        ID: ${contact.id}  
        Tên: ${contact.name}  
        Email: ${contact.email}  
        Số điện thoại: ${contact.phone}  
    `);  
}  

function search(key, value) {  
    let findIndex = -1;  
    for (let i in contact) {  
        if (value === contact[i][key]) {  
            findIndex = i;  
            break;  
        }  
    }  
    return findIndex;  
}  

function findContactByPhone() {
    let searchPhone = prompt("Nhập số điện thoại muốn tìm");
    let contactIndex = search("phone", searchPhone)
    if(contactIndex===-1) {
        console.log("Không tìm thấy số trên");
        
    } else {
        displayOneContact(contact[contactIndex]);
    }
}

function updateInfoContactById() {
    let searchId = +prompt("Nhập ID liên hệ cần cập nhật")
    let contactIndex = search("id", searchId);
    if(contactIndex===-1) {
        console.log("Không tìm thấy liên hệ với ID trên");
        
    }else {
        let name = prompt("Nhập tên mới")
        let email = prompt("Nhập email mới")
        let phone = prompt("Nhập số điện thoại mới")

        contact[contactIndex].name = name;  
        contact[contactIndex].email = email;  
        contact[contactIndex].phone = phone;  

        console.log("Cập nhật thông tin thành công");  
    }  
}  

function deleteContactById () {
    let searchId =+prompt("Nhập ID liên hệ cần xóa");  
        let contactIndex =search("id", searchId);  
    
        if (contactIndex ===-1) {  
            console.log("Không tìm thấy liên hệ với ID trên");  
        } else {  
            contact.splice(contactIndex, 1); 
            console.log("Đã xóa liên hệ thành công");  
        }  
}