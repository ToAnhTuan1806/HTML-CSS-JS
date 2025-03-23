let dish = [
    {name: `Rau sạch`, category: `Đồ ăn`},
    {name: `Thịt lợn`, category: `Đồ ăn`},
    {name: `Pepsi không calo`, category: `Nước`},
    {name: `Cocacola`, category: `Nước`},
    {name: `Cờ lê`, category: `Dung cụ`},
    {name: `Tuy vít`, category: `Dụng cụ`},
]

function filter() {
    let select = document.getElementById(`categorySelect`)
    let choice = select.value
    let list = document.getElementById(`list`)
    list.innerHTML=``;
    let display = ``

    dish.forEach(function(element){
        if(choice===`Tất cả` || element.category===choice) {
            let li = document.createElement(`li`)
            display += `<li><b>Tên đồ ăn:</b> ${element.name} <b>- Danh mục:</b> ${element.category}</li>`
        }
    })
    list.innerHTML = display;
}