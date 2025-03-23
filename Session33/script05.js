const products = [  
    {  
        id: 1,  
        name: 'Laptop Dell XPS 15',  
        price: 35990000,  
        image: 'https://th.bing.com/th/id/OIP.Btt_CHwe0MNvBm-xh_9YDgHaEK?w=303&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',  
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.'  
    },  
    {  
        id: 2,  
        name: 'iPhone 15 Pro Max',  
        price: 32990000,  
        image: 'https://th.bing.com/th?id=OIF.elexZoM%2fpuQ7lZvd%2bAiEGQ&w=324&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7',  
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.'  
    },  
    {  
        id: 3,  
        name: 'Samsung Galaxy S24 Ultra',  
        price: 28990000,  
        image: 'https://th.bing.com/th/id/OIP.n5ZE0e4C910Ed2cLhNKjPAHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',  
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.'  
    },  
    {  
        id: 4,  
        name: 'Tai nghe Sony WH-1000XM5',  
        price: 7990000,  
        image: 'https://th.bing.com/th/id/OIP.ruwgYKQuyaMxkZiThYFSNgHaEM?w=318&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',  
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.'  
    },  
    {  
        id: 5,  
        name: 'Apple Watch Series 9',  
        price: 11990000,  
        image: 'https://bgr.com/wp-content/uploads/2023/09/Apple-Watch-Series-9.jpg?quality=82&strip=1',  
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.'  
    },  
    {  
        id: 6,  
        name: 'Loa JBL Charge 5',  
        price: 3990000,  
        image: 'https://mega.com.vn/media/news/0408_loa-jbl.jpg',  
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.'  
    }  
]   

function displayProducts(products) {  
    const productList = document.getElementById('productList')  
    productList.innerHTML = ''  
    products.forEach(function(product) {  
        productList.innerHTML += `  
            <div class="product-card">  
                <div class="product-image" style="background-image: url('${product.image}');"></div>  
                <h5>${product.name}</h5>  
                <p>${product.description}</p>  
                <p class="price">${product.price.toLocaleString()} VNĐ</p>  
                <button class="btn">Buy</button>  
            </div>  
        `  
    })  
}  
displayProducts(products)  

function searchProducts() {  
    let input = document.getElementById('searchInput').value.toLowerCase()  
    let filteredProducts = products.filter(function(product) {  
        return product.name.toLowerCase().includes(input) || product.description.toLowerCase().includes(input)  
    })  
    displayProducts(filteredProducts) 
}    
document.getElementById('btn-search').addEventListener('click', searchProducts)   