const listProduct = [
        {id: 78274, name: "Bim bim", price: 7000, category: "Thực phẩm", quantity: 100},
        {id: 12345, name: "Bát", price: 20000, category: "Đồ gia dung", quantity: 30},
        {id: 67892, name: "Áo sơ mi", price: 100000, category: "Thời trang", quantity: 45}

];
let menu = `
    1. Thêm sản phẩm vào danh sách sản phẩm.
    2. Hiển thị tất cả sản phẩm.
    3. Hiển thị chi tiết sản phẩm theo id.
    4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
    5. Xóa sản phẩm theo id.
    6. Lọc sản phẩm theo khoảng giá.
    7. Thoát.
`

let choice;

while(choice !== 7) {
    choice = +prompt(menu);

    switch (choice) {
        case 1:
            addProduct();
            break;
        case 2:
            displayListProduct();
            break;
        case 3:
            displayProductById();
            break;
        case 4:
            updateInfoProductById();
            break;
        case 5:
            deleteProductById();
            break;
        case 6:
            filterProductByPrice();
            break;
        case 7:
            console.log("Thoát chương trình thành công");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Thử lại!");
            break;
    }
}

function addProduct() {
    let id = Math.floor(Math.random()*99999+ new Date().getMilliseconds());
    let name = prompt("Nhập tên sản phẩm")
    let price = +prompt("Nhập giá sản phẩm")
    let category = prompt("Nhập danh mục sản phẩm")
    let quantity = +prompt("Nhập số lượng sản phẩm trong kho")
    if(isNaN(price) || isNaN(quantity)){
        console.log("Giá và số lượng phải là số hợp lệ");
        return;
    }

    let product = {
        id:id,
        name:name,
        price:price,
        category:category,
        quantity:quantity
    }
    listProduct.push(product);
    console.log("Thêm sản phẩm thành công");
}

function displayListProduct() {
    if(listProduct.length===0) {
        console.log("Chưa có sản phẩm nào trong danh sách");
        return;
    }
    listProduct.forEach(function(product, index){
        console.log(`
            ID: ${product.id}
            Tên sản phẩm: ${product.name}
            Giá sản phẩm: ${product.price}
            Danh mục sản phẩm: ${product.category}
            Số lượng sản phẩm trong kho: ${product.quantity}
            `);
        
    });
}

function displayOneListProduct(product) {
    console.log(`
        ID: ${product.id}
        Tên sản phẩm: ${product.name}
        Giá sản phẩm: ${product.price}
        Danh mục sản phẩm: ${product.category}
        Số lượng sản phẩm trong kho: ${product.quantity}
        `);
}

function displayProductById() {
    let searchId = +prompt("Nhập Id sản phẩm cần xem")
    let product = listProduct.find(function(pd, index) {  
        return pd.id === searchId;  
    });  

    if(product){
        displayOneListProduct(product)
    } else {
        console.log("Không tìm thấy sản phẩm với id trên");
    }
}

function search(key, value) {  
    let findIndex = -1;  
    for (let i in listProduct) {
        if (value === listProduct[i][key]) {  
            findIndex = i;
            break;  
        }  
    }  
    return findIndex;
}  
function updateInfoProductById() {
    let searchId = +prompt("Nhập Id sản phẩm cần cập nhật");
    let productIndex = search("id", searchId);
    if(productIndex===-1) {
        console.log("Không tìm thấy sản phẩm với Id trên");
        
    }else {
        let name = prompt("Nhập tên mới")
        let price = +prompt("Nhập giá mới")
        let category = prompt("Nhập danh mục mới")
        let quantity = prompt("Nhập số lượng mới")

        if (isNaN(price) || isNaN(quantity)) {  
            console.log("Giá và số lượng phải là số hợp lệ");  
            return; 
        }  
        listProduct[productIndex].name = name;  
        listProduct[productIndex].price = price;  
        listProduct[productIndex].category = category;  
        listProduct[productIndex].quantity = quantity;  
        console.log("Cập nhật sản phẩm thành công");  
    }  
}

function deleteProductById() {
    let searchId =+prompt("Nhập ID sản phẩm cần xóa");  
    let productIndex =search("id", searchId);  

    if (productIndex ===-1) {  
        console.log("Không tìm thấy sản phẩm với Id trên");  
    } else {  
        listProduct.splice(productIndex, 1); 
        console.log("Đã xóa sản phẩm thành công");  
    }  
}

function filterProductByPrice() {
    let minPrice = +prompt("Nhập giá tối thiểu");  
    let maxPrice = +prompt("Nhập giá tối đa");  

    if (isNaN(minPrice) || isNaN(maxPrice) || minPrice < 0 || maxPrice < 0) {  
        console.log("Giá nhập vào phải là số hợp lệ và không được âm");  
        return;  
    }  

    let filteredProducts = listProduct.filter(function(product, index) {  
        return product.price >= minPrice && product.price <= maxPrice;  
    });   

    if (filteredProducts.length ===0) {  
        console.log("Không tìm thấy sản phẩm nào trong khoảng giá này");  
    } else {  
        console.log(`Các sản phẩm trong khoảng giá từ ${minPrice} đến ${maxPrice}:`);  
        filteredProducts.forEach(function(product, index) {  
            displayOneListProduct(product);
        });  
    }  
}