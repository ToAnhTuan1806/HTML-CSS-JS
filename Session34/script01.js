document.getElementById('check').addEventListener("click", function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm').value;

    if (email === "" || password === "" || confirmPassword === "") {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }
    if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
        return;
    }
    let emails = JSON.parse(localStorage.getItem('obj')) || [];
    let emailExists = false;
    emails.forEach(function(user) {
        if (user.email === email) {
            emailExists = true;
        }
    });

    if (emailExists) {
        alert("Email đã tồn tại!");
        return;
    }
    emails.push({ email, password });
    localStorage.setItem('obj', JSON.stringify(emails));
    alert("Đăng ký thành công!");
});
