const menuCategory = {
    "Món chính": [  
        { name: "Phở bò", price: 50000, description: "Món phở nổi tiếng với nước dùng thanh ngọt, thịt bò tươi ngon và bánh phở mềm." },  
        { name: "Bánh mì thịt", price: 30000, description: "Bánh mì giòn với nhân thịt nướng, rau sống và nước sốt đặc trưng." },  
        { name: "Cơm tấm sườn", price: 60000, description: "Cơm tấm với sườn nướng và nước mắm chua ngọt." }  
    ],  
    "Món ăn Hải sản": [  
        { name: "Ngêu hấp", price: 70000, description: "Ngêu hấp với sả và ớt, rất thơm ngon và bổ dưỡng." },  
        { name: "Gỏi cá", price: 80000, description: "Món gỏi cá tươi sống trộn với rau thơm và nước chấm đặc biệt." }  
    ],  
    "Món ăn chay": [  
        { name: "Đậu hũ chiên", price: 40000, description: "Đậu hũ chiên giòn, phục vụ kèm với nước chấm chua ngọt." },  
        { name: "Xôi lá cẩm", price: 35000, description: "Xôi được nấu từ gạo nếp và lá cẩm, có màu tím đẹp mắt." }  
    ],  
    "Món tráng miệng": [  
        { name: "Kem sữa dừa", price: 20000, description: "Món kem ăn mát lạnh, béo ngậy vị dừa rất ngọt và thanh." },  
        { name: "Bánh flan", price: 25000, description: "Bánh flan mềm mịn, ăn kèm với caramel ngọt." }  
    ]  
}

let menu = `
    1. Thêm món ăn vào danh mục.
    2. Xóa món ăn theo tên khỏi danh mục.
    3. Cập nhật thông tin theo tên của món ăn  (tên, giá, mô tả).
    4. Hiển thị toàn bộ menu gồm từng danh mục và từng món ăn.
    5. Tìm kiếm món ăn theo tên trong toàn bộ menu.
    6. Thoát
`

let choice;

while (choice!==6) {
    choice= +prompt(menu);

    switch (choice) {
        case 1:
            addDish()
            break;
        case 2:
            deleteNameDish()
            break;
        case 3:
            updateDishByName()
            break;
        case 4:
            displayMenuDish()
            break;
        case 5:
            searchDishByName()
            break;
        case 6:
            console.log("Thoát chương trình thành công!");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Thử lại~");
            break;
    }
}

function addDish() {
    let category = prompt("Nhập danh mục cho món ăn")
    let name = prompt("Nhập tên món ăn muốn thêm")
    let price = +prompt("Nhập giá món ăn")
    let description = prompt("Nhập mô tả về món ăn")

    if(isNaN(price)) {
        console.log("Giá tiền phải là số hợp lệ");
        return   
    }

    if(!menuCategory[category]) {
        menuCategory[category]=[]
    }
    let dish = {
        name:name,
        price:price,
        description:description
    }

    menuCategory[category].push(dish);
    console.log("Thêm món ăn thành công");
}

function search(dishName) {  
    for (let category in menuCategory) {  
        for (let dish of menuCategory[category]) {  
            if (dish.name=== dishName) {  
                return {category, dish};  
            }  
        }  
    }  
    return null;
}  

function deleteNameDish() {  
    let searchNameDish = prompt("Nhập tên món ăn muốn xóa:");  
    let result = search(searchNameDish); 

    if (result) {  
        let {category, dish} = result;
        let dishIndex = menuCategory[category].findIndex(function(d, index){
            return d.name === dish.name
        });
        
        if (dishIndex>-1) {  
            menuCategory[category].splice(dishIndex, 1);
            console.log(`Đã xóa món ăn '${dish.name}' khỏi danh mục '${category}'`);  
        }  
    } else {  
        console.log("Không tìm thấy món ăn trên trong danh mục");  
    } 
}  

function updateDishByName() {
    let dishName = prompt("Nhập tên món ăn muốn cập nhật");  
    let result = search(dishName);  
    
    if (result) {  
        let {category, dish} = result;  
        let newName = prompt("Nhập tên mới cho món ăn");  
        let newPrice = +prompt("Nhập giá mới cho món ăn");  
        let newDescription = prompt("Nhập mô tả mới cho món ăn");  

        if (isNaN(newPrice)) {  
            console.log("Giá phải là một số hợp lệ");
            return;  
        } 
    
        dish.name = newName;  
        dish.price = newPrice;  
        dish.description = newDescription;  
        console.log("Cập nhật món ăn thành công");  
    }
}

function displayMenuDish() {
    for (let category in menuCategory) {  
        console.log(`Danh mục: ${category}`);  
        menuCategory[category].forEach(function(dish, index) {  
            console.log(`
                Tên món ăn: ${dish.name} 
                Giá: ${dish.price} VNĐ
                Mô tả: ${dish.description}
                `) 
        });  
    }  
}

function searchDishByName() {  
    let dishName = prompt("Nhập tên món ăn muốn tìm")  
    let result = search(dishName)
    
    if(result){  
        console.log(`
            Danh mục: ${result.category}
            Tên món ăn: ${result.dish.name} 
            Giá: ${result.dish.price} VNĐ
            Mô tả: ${result.dish.description}
            `) 
    } else {  
        console.log("Không tìm thấy món ăn trong menu");  
    }  
}  