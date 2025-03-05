let password = "tatls1806";
let input;
while (input !== password) {
    input = prompt("Nhập vào mật khẩu");

    if (input === password) {
        console.log("Mật khẩu đúng");
    } else {
        console.log("Mật khẩu sai, nhập lại!");
    }
}

