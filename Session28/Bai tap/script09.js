let menu = `
1. Thêm sách mới.
2. Hiển thị danh sách sách.
3. Tìm kiếm sách theo tiêu đề.
4. Cập nhật trạng thái mượn/trả sách theo id sách.
5. Xóa sách theo id sách ra khỏi danh sách.
6. Sắp xếp sách theo giá tăng dần.
7. Thoát.
Lựa chọn của bạn
`

let choice;
let library = [];
let checkId=1;

while(choice !== 7) {
    choice = +prompt(menu);

    switch(choice) {
        case 1:
            addNewBook();
            break;
        case 2:
            displayBooks();
            break;
        case 3:
            findBookByTitle();
            break;
        case 4:
            updateBookStatus();
            break;
        case 5:
            deleteBookById();
            break;
        case 6:
            softBookByPrice();
            break;
        case 7:
            console.log("Thoát chương trình thành công!");
            break;
            default:
                console.log("Lựa chọn không hợp lệ!")
                break;
    }
}

function addNewBook() {
    let id = checkId++;
    let title = prompt("Nhập tên sách");
    let author = prompt("Nhập tên tác giả");
    let year = +prompt("Nhập năm xuất bản");
    let price = +prompt("Nhập giá sách");
    if(isNaN(year) || isNaN(price)) {
        console.log("Phải là số! thử lại");
        return;
    }
    let isAvailable = confirm("Sách có sẵn hay không")

    let book = {
        id:id,
        title:title,
        author:author,
        year:year,
        price:price,
        isAvailable:isAvailable
    }

    library.push(book);
    console.log("Thêm sách thành công");
}

function displayBooks() {
    if(library.length===0) {
        console.log("Chưa có sách trong thư viện");
        return;
    }
    library.forEach(book=> {
        console.log(`  
            ID: ${book.id}  
            Tên sách: ${book.title}  
            Tác giả: ${book.author}  
            Năm xuất bản: ${book.year}  
            Giá sách: ${book.price}  
            Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đang mượn"}  
        `);  
    });
}

function findBookByTitle() {
    let title= prompt("Nhập tên sách muốn tìm")
    let result = library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));

    if(result.length === 0) {
        console.log("Không tìm thấy sách");
    } else {
        result.forEach(book => {
            console.log(`  
                ID: ${book.id}  
                Tên sách: ${book.title}  
                Tác giả: ${book.author}  
                Năm xuất bản: ${book.year}  
                Giá sách: ${book.price}  
                Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đang mượn"}  
            `);  
        }) 
    }
}

function updateBookStatus() {
    let id = +prompt("Nhập id sách muốn cập nhật")
    let status =library.find(book=>book.id ===id)

    if(status) {
        status.isAvailable= !status.isAvailable;
        console.log(`Trạng thái sách ${status.title} được cập nhật`);
    } else {
        console.log("Không tìm thấy sách theo id:", id);
    }
}

function deleteBookById() {
    let id = +prompt("Nhập id sách muốn xoá")
    let index= library.findIndex(book=>book.id ===id)

    if(index!== -1) {
        let confirmDelete=confirm("Bạn có muốn xoá sách không?")
        if(confirmDelete) {
            library.splice(index, 1);
            console.log("Đã xoá sách thành công");
        } 
    } else {
        console.log("Không tìm thấy sách với id:", id);
    }
}

function softBookByPrice() {
    for(let i=0; i<library.length; i++){
        for(let j=0; j<library.length-i-1; j++){
            if(library[j].price>library[j+1].price){
                let temp=library[j];
                library[j]=library[j+1];
                library[j+1]=temp;
            }
        }
    }
    console.log("Đã sắp xếp sách theo giá tăng dàn");
    displayBooks();
}

