let products = [
    {
        id:1,
        name:"mèn mén",
        price: 20000,
        quantity: 20,
        category: "món ăn dân tộc Mông",
    },
    {
        id:2,
        name:"mứt",
        price: 80000,
        quantity: 21,
        category: "món ăn dân tộc Kinh",
    },
    {
        id:3,
        name:"cơm lam",
        price: 40000,
        quantity: 15,
        category: "món ăn dân tộc Mông",
    },
    {
        id:4,
        name:"bánh đậu xanh",
        price: 60000,
        quantity: 30,
        category: "món ăn dân tộc Kinh",
    }
];

let menu =`
1.Hiển thị các sản phẩm theo tên danh mục.
2.Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
    a.Tăng dần.
    b.Giảm dần.
4.Tính số tiền thanh toán trong giỏ hàng.
5.Thoát.
`

let cart=[];
let choice;

while (choice!==5) {
    choice = +prompt(menu);

    switch (choice) {
        case 1:
            displayProducByCategory();
            break;
        case 2:
            buyProductById();
            break;
        case 3:
            softProductByprice();
            break;
        case 4:
            calculateTotal()
            break;
        case 5:
            console.log("Thoát chương trình thành công");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Thử lại");
            break;
    }
}

function displayProducByCategory() {
    let category = prompt("Nhập danh mục sản phẩm muốn tìm")
    let fillterProduct = products.filter(function(product, index){
        return product.category ===category
    });  
    if (fillterProduct.length ===0) {  
        console.log("Không có sản phẩm nào trong danh mục này")
    } else {  
        fillterProduct.forEach(function(product, index) {  
            console.log(`
                ID: ${product.id}
                Tên: ${product.name} 
                Giá: ${product.price}
                Số lượng: ${product.quantity}
                `);  
        });  
    }  
}  

function buyProductById() {
    let searchId = +prompt("Nhập Id sản phẩm muốn mua");
    let result=products.find(element=>element.id===searchId)
    if(!result){
        console.log("Sản phẩm không tồn tại");
    } else {  
        let cartQuantity = +prompt("Nhập số lượng sản phẩm muốn mua");  
        if (result.quantity<cartQuantity || cartQuantity<=0) {  
            console.log("Số lượng sản phẩm trong kho không đủ");  
        } else {  
            console.log("Mua sản phẩm thành công");  
            result.quantity -= cartQuantity;  
            cart.push({ 
                id: result.id,
                name: result.name, 
                price: result.price, 
                quantity: cartQuantity 
            });  
        } 
    }

}
function softProductByprice() {
    let order = prompt(`Chọn thứ tự sắp xếp:  
        a. Tăng dần   
        b. Giảm dần`);  
    
        if (order==="a") {  
            products.sort(function(a, b){  
                return a.price-b.price;  
            });  
            console.log("Sản phẩm đã được sắp xếp theo giá tăng dần");  
        } else if (order==="b") {  
            products.sort(function(a, b){  
                return b.price-a.price;  
            });    
            console.log("Sản phẩm đã được sắp xếp theo giá giảm dần");  
        } else {  
            console.log("Thứ tự không hợp lệ");  
        }  
    
}

function calculateTotal() {  
    let total=0;  
    let totalQuantity=0
    cart.forEach(function(item, index) {   
        total += item.price*item.quantity
        totalQuantity += item.quantity
    });  
    console.log("Tổng số sản phẩm đã mua: " +totalQuantity);
    console.log("Tổng tiền thanh toán trong giỏ hàng là: " +total);  
}  
