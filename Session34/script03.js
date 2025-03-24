document.getElementById('login').addEventListener("click", function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    if (email === "" || password === "") {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }
    let users = JSON.parse(localStorage.getItem('obj')) || [];
    let user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Đăng nhập thành công!");
        window.location.href = "home.html";
    } else {
        alert("Email hoặc mật khẩu không đúng!");
    }
});
