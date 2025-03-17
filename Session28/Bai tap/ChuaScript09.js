// B1: Xay dung cau truc du lieu
const library = [
    {
        id: 1,
        title: "Harry Potter",
        author: "J.K Rowling",
        year: 2000,
        price: 10,
        isAvailable: true,
    },
    {
        id: 2,
        title: "Doraemon",
        author: "F.F",
        year: 2003,
        price: 6,
        isAvailable: true,
    },
    {
        id: 3,
        title: "Conan",
        author: "Aoyama Gōshō",
        year: 1999,
        price: 8,
        isAvailable: false,
    },
];

// B2: Xây dựng menu tính năng
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
// B3: Hiển thị menu và cho người dùng nhập vào sự
// lựa chọn
let choice;


// B4: Dieu huong chuong trinh dua vao lua chon cua ng dung
while(choice !== 7) {
    choice = +prompt(menu);

    switch(choice) {
        case 1:
            // Them moi sach
            // B5: Cho ng dung lan luot nhap vao cac truong thong tin cua sach muon the,
            // (title, author, year, price, isAvailable)

            // B6: Tao ra doi tuon moi bao gom cac thong tin
            // Ng dung nhap vao tu ban phim
            // book(id tu sinh, title, author, year, price, isAvailable)

            // B7: Them moi quyen sach nay vao trong library
            addNewBook();
            break;
        case 2:
            // Hien thi sach
            // B8: Duyet qua danh sach Library
            // B9: Lay ra toan bo doi tuong sach trong library
            // B10: Lan luot truy cap (.) vao trong tung thuoc tinh
            displayBooks();
            break;
        case 3:
            // Tim kiém sach theo tieu de
            // B11: Cho ng dung nhap vao tieu de sach
            // B12: Linear Search
            findBookByTitle();
            break;
        case 4:
            // Cap nhat sach theo trang thai
            // B13: Cho ng dùng nhap vao id sach muốn cập nhat
            // B14: Tim kiem sach theo id
            // B15: Neu khong tim thay -> khong co sach do
            // B16: Cho ng dung nhap vao cac truong thong tin moi
            // cua quyen sach can phai cap nhat
            // B17: Tien hanh cap naht
            // B18: Hien thi ra toan bo sach de phan anh su cap nhat do
            updateBookStatus();
            break;
        case 5:
            // Xoa sach theo Id
            // 
            deleteBookById();
            break;
        case 6:
            // Sap xep sach theo gia tang dan
            softBookByPrice();
            break;
        case 7:
            // Thoat
            console.log("Thoát chương trình thành công!");
            break;
            default:
                console.log("Lựa chọn không hợp lệ!")
                break;
    }
}

function addNewBook() {
    // Them moi sach
    // B5: Cho ng dung lan luot nhap vao cac truong thong tin cua sach muon the,
    // (title, author, year, price, isAvailable)
    let title = prompt("Nhập tên sách");
    let author = prompt("Nhập tên tác giả");
    let year = +prompt("Nhập năm xuất bản");
    let price = +prompt("Nhập giá sách");
    if(isNaN(year) || isNaN(price)) {
        console.log("Phải là số! thử lại");
        return;
    }
    let isAvailable = prompt("Nhập trạng thái sách")
    // B6: Tao ra doi tuon moi bao gom cac thong tin
    // Ng dung nhap vao tu ban phim
    // book(id tu sinh, title, author, year, price, isAvailable)
    let book = {
        id:Math.random(),
        title:title,
        author:author,
        year:year,
        price:price,
        isAvailable:isAvailable
    }
    // B7: Them moi quyen sach nay vao trong library
    library.push(book);
    console.log("Thêm sách thành công");
}

function displayBooks() {
    library.forEach(function(book, index){
        console.log(`
            Quyển sách: ${index+1}
            ID: ${book.id}  
            Tên sách: ${book.title}  
            Tác giả: ${book.author}  
            Năm xuất bản: ${book.year}  
            Giá sách: ${book.price}  
            Trạng thái: ${book.isAvailable}
            `)
    })
}

function findBookByTitle() {
    let searchTitle = prompt("Nhập tiêu đề của sách muốn tìm");
    let findIndex = search("title", searchTitle);
    if(findIndex===-1) {
        console.log(`Không có quyển sách nào với tiêu đề: ${searchTitle}`);
        
    } else {
        displayOneBook(library[findIndex], findIndex);
    }
}

function displayOneBook(book, index) {
    console.log(`
        Quyển sách: ${+index +1}
        ID: ${book.id}  
        Tên sách: ${book.title}  
        Tác giả: ${book.author}  
        Năm xuất bản: ${book.year}  
        Giá sách: ${book.price}  
        Trạng thái: ${book.isAvailable}
        "------------------------"
        `)
}

function updateBookStatus() {
    let searchId = +prompt("Nhập id sách cần cập nhật");
    let updateIndex = search("id", searchId);
    if(updateIndex===-1) {
        console.log("Không tìm thấy sách với Id trên");
        
    } else {
        library[updateIndex].isAvailable = prompt("Nhập trạng thái cập nhật");
    }
    displayOneBook(library[updateIndex], updateIndex)
}

function search(key, value) {
    let findIndex = -1;
    for(let i in library) {
        if(value === library[i][key]) {
            findIndex = i;
            break;
        }
    }
    return findIndex;
}

function deleteBookById() {
    let searchId = +prompt("Nhập id sách cần xoá");
    let deleteBook = search("id", searchId);
    if(deleteBook === -1) {
        console.log("Không tìm thấy sách với id trên");
        
    } else {
        
    }
}