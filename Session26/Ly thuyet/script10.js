let products = [  
    ["mì tôm", 5, 5000],   
    ["bánh mì", 12, 15000],   
    ["bánh bao", 5, 8000],   
    ["mèn mén", 30, 20000]  
];  

let cart = [];  

// B1: Tạo menu  
let menu = `  
------Menu-----  
1.Danh sách sản phẩm  
2.Mua hàng  
3.Tính tiền + Hoá đơn  
4.Thoát  
`;  

let input;  
while (input !== 4) {  
    // Cho người dùng nhập vào các sự lựa chọn  
    input = +prompt(menu);  

    switch (input) {  
        case 1: // Hiển thị danh sách sản phẩm  
            displayProducts(products);  
            break;  
        case 2: // Mua hàng  
            // B3: Cho người dùng nhập vào tên sản phẩm muốn mua  
            let productName = prompt("Mời bạn nhập vào tên sản phẩm muốn mua");  
            // B4: Tìm kiếm xem sản phẩm có tồn tại trong cửa hàng hay không  
            let findIndex = -1; // (tìm kiếm tuyến tính bằng for-in trong js)  
            for (let index in products) {  
                if (productName === products[index][0]) {  
                    findIndex = index;  
                    break; // Thoát vòng lặp khi đã tìm thấy  
                }  
            }  
            // B5: Nếu không --> Hiển thị sản phẩm không tồn tại  
            if (findIndex === -1) {  
                console.log("Không tìm thấy sản phẩm");  
            } else {  
                // B6: Tiến hành cho người dùng tiến hành mua hàng  
                // B7: Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa  
                let inCartIndex = -1;  
                for (let i in cart) {  
                    if (cart[i][0] === productName) {  
                        inCartIndex = i;  
                        break; // Thoát vòng lặp khi đã tìm thấy  
                    }  
                }  
                if (inCartIndex === -1) {  
                    // B8: Nếu chưa --> Thêm sản phẩm đó vào giỏ hàng  
                    let product = products[findIndex];  
                    let addProduct = [...product]; // Sao chép sản phẩm  
                    addProduct[1] = 1; // Đặt số lượng = 1  
                    cart.push(addProduct);  
                    console.log(cart);  
                } else {  
                    // B9: Nếu đã có --> Tăng số lượng lên 1  
                    cart[inCartIndex][1] = cart[inCartIndex][1] + 1;  
                }  

                // B10: Giảm số lượng của sản phẩm trong cửa hàng đi 1 đơn vị  
                products[findIndex][1]--;  
                console.log(products);  
            }  
            break;  
        case 3: // Hoá đơn  
            displayProducts(cart); 
            let sum = 0;
            for (let product of cart) {
                sum =sum + product[1] * product[2];
            } 
            console.log("Tổng hoá đơn = ", sum)
            break;  
        case 4: // Thoát  
            console.log("Thank you for using the app");  
            break;  
        default: // Lựa chọn không hợp lệ  
            console.log("Lựa chọn không hợp lệ");  
            break;  
    }  
}  

function displayProducts(productList) {  
    for (let index in productList) {  
        console.log(`${+index + 1}. ${productList[index][0]} - ${productList[index][2]} - ${productList[index][1]}`);  
    }  
}  