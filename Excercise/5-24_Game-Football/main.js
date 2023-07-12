var img = document.querySelectorAll(".slider");
function displayIMG(item) {
    if (item == "game") {
        img[0].classList.add("open");
        img[1].classList.remove("open");
        document.querySelector('.content').innerHTML = '<h4>Chúc bạn chiến thắng</h4>';

        // alert("Chúc bạn chiến thắng");
    }
    else {
        img[0].classList.remove("open");
        img[1].classList.add("open");
        document.querySelector('.content').innerHTML = '<h4>Hẹn gặp lại</h4>';
        // alert("Hẹn gặp lại");

    }
}



// B2
var iName = document.querySelector('.inputName');
var iEmail = document.querySelector('.inputEmail');
var iCity = document.querySelector('.inputCity');
var submit = document.querySelector('.submit');

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ^        : Bắt đầu của chuỗi.
// [^\s@]+  : Một chuỗi gồm ít nhất một ký tự, không phải dấu cách (\s) hoặc ký tự @.
// @        : Ký tự @.
// [^\s@]+  : Một chuỗi gồm ít nhất một ký tự, không phải dấu cách (\s) hoặc ký tự @.
// \.       : Ký tự dấu chấm . (để kiểm tra phần sau của địa chỉ email).
// [^\s@]+  : Một chuỗi gồm ít nhất một ký tự, không phải dấu cách (\s) hoặc ký tự @.
// $        : Kết thúc của chuỗi.


submit.onclick = function () {
    if (iName.value.length === 0) {
        alert("Vui lòng nhập đầy đủ họ tên");
        iName.focus();
    } else if (iEmail.value.length === 0) {
        alert("Vui lòng nhập Email");
        iEmail.focus();
    } else if (!validateEmail(iEmail.value)) {
        alert("Email không hợp lệ!");
        iEmail.focus();
    } else if (iCity.value.length === 0) {
        alert("Vui lòng nhập Mã Thành phố");
        iCity.focus();
    } else {
        // iName.value = "";
        document.querySelector('.submit').innerText = 'Đã gửi thành công';
        

    }

}


// 