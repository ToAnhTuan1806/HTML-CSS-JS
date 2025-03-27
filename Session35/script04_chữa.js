// B1: Xây dựng kho luu tru du lieu mau
// let employeeList = [


// {id:1, name: "Nguyễn Văn A", position: "Devoloper"},


// {id:2, name: "Trần Thị B", position: "Designer"},


// {id:3, name: "Phạm Văn C", position: "Project manager"},


// {id:4, name: "Lê Thị D", position: "QA Engineer"},


// {id:5, name: "Vũ Văn E", position: "DevOps"},


// {id:6, name: "Hoàng Thị F", position: "HR Manager"},
// ]
let employeeList = JSON.parse(localStorage.getItem("employeeList"))
let tbody = document.getElementById("tbody")
let form = document.getElementById("add-form")
let paginationContainer = document.getElementById("pagination")
let totalPage = 4;
let pageSize = 5;



// B2: Luu tru danh sach du lieu mau tren vao localstorage
// localStorage.setItem("employeeList", JSON.stringify(employeeList)) //(chi dung 1 lan duy nhat)

// B3: Duyet qua mang employeeList lay ra toan bo phan tu co trong mang chuyen thanh HTML

// dung for-in vi can lay id
render(employeeList)

// B4: Tinh nang Create - them moi
form.onsubmit = function(event) {
    event.preventDefault(); // ngan chan load lai trang
    // Tien hanh them moi

    let name = form.employeeName.value
    let position = form.position.value

    // B4.2: Tao ra 1 doi tuong sinh vien
    let employee = {
        id: Math.random(),
        name: name,
        position: position
    }
    
    // B4.3 Them doi tuong nhan vien do vao trong Local storage
    employeeList.push(employee)
    localStorage.setItem("employeeList", JSON.stringify(employeeList))
    // B4.4: Phan anh su thay doi du lieu do
    // = cach goi ham render
        render(employeeList)
}

function render(list) {
    tbody.innerHTML = ""
    for(let i in employeeList){
        employeeList[i] // {}, {}, {}
        let tr = `
            <tr>
              <th scope="row">${+i+1}</th>
              <td>${employeeList[i].name}</td>
              <td>${employeeList[i].position}</td>
            </tr>
        `;
        // console.log(tr);
        tbody.innerHTML += tr;
    }
}

// Tinh nang phan trang (Pagination)

// Dat ra cau hoi
// Bao nhieu trang?
// 1 trang co bao nhieu doi tuong du lieu
// So trang = 4
// Trang 1 -> 5 doi tuong
// Trang 2 -> 5 doi tuong
// Trang 3 -> 5 doi tuong
// Trang 4 -> 3 doi tuong

// B5: Tao ra giao dien cua cac trang trong component
// phan trang
for(let i=1; i<=totalPage; i++){
    let li = `
        <li class="page-item"><a class="active-page page-link" href="#">${i}</a></li>
    `

    paginationContainer.innerHTML += li;
}
paginationContainer.innerHTML +=`
         <li class="page-item"><a class="page-link" href="#">Next</a></li>
    `
let activePages = document.getElementsByClassName("active-page")
for(let page of activePages) {
    page.onclick =function(event) {
        event.preventDefault();
        let pageIndex = +page.innerText;

        // Tinh nang phan trang

        // LOGIC -> Lay dung ra so luong phan tu
        // co trong trang dang bam vao
        // BO QUA toan bo phan tu cua cac trang truoc

        // B1: Tao ra 1 mang dung de hien thi thanh cac phan tu HTML (tr) o tren trinh duyet
        // MAng nay phai bao gom cac phan tu du lieu tuong ung voi trang bam vao
        let paginateList = []
        let start = (pageIndex-1)*pageSize;
        let end = (start+pageSize-1)
        if(end>=employeeList.length-1){
            end=employeeList.length-1;
        }

        for(let i=start; i<=end; i++) {
            paginateList.push(employeeList[i])
        }
        console.log(paginateList);
        
        render(paginateList)
        // Trang 1: 0-4
        // Trang 2: 5-9


        // hien thi cac phan tu lay ra duoc khi bam vao trang
        // thong qua ham render
    }
}

// khi lam tinh nang phan trang
// So luong phan tu trong 1 trang (5) - pageSize
// Trang dang bam vao la trang nao - pageIndex
