function checkNull(e) {
    const x = $(e);
    if (x.val() !== '') {
        x.next('.form-message').text('').show();
        return false;
    }
    x.next('.form-message').text('This field is required!').show();
    return true;
}

function checkName(e) {
    const x = $(e);
    const nameRegex = /^[\p{L}\s]+$/u;
    const isNull = checkNull(e);
    if (isNull) {
        return false;
    } else if (!nameRegex.test(x.val())) {
        x.next('.form-message').text('Tên chỉ được chứa ký tự').show();
        return false;
    }
    x.next(".form-message").text('').show();
    return true;
}

function checkPhone(e) {
    const x = $(e);
    const phoneRegex = /^0[1-9]\d{8}$/;
    const isNull = checkNull(e);
    if (isNull) {
        return false;
    } else if (!phoneRegex.test(x.val())) {
        x.next('.form-message').text('Số điện thoại có 10 số và bắt đầu bằng số 0').show();
        return false;
    }
    x.next(".form-message").text('').show();
    return true;
}

function checkEmail(e) {
    const x = $(e);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isNull = checkNull(e);
    if (isNull) {
        return false;
    } else if (!emailRegex.test(x.val())) {
        x.next('.form-message').text(`Email không hợp lệ (Ví dụ: abc@gmail.com)`).show();
        return false;
    }
    x.next(".form-message").text('').show();
    return true;
}

function checkQuantity (e) {
    const x = $(e);
    const emailRegex = /^[1-9][\d]*$/;
    const isNull = checkNull(e);
    if (isNull) {
        return false;
    } else if (x.val() > 100) {
        x.next('.form-message').text(`Số lượng quá lớn`).show();
        return false;
    } else if (!emailRegex.test(x.val())) {
        x.next('.form-message').text(`Số lượng không hợp lệ`).show();
        return false;
    }
    x.next(".form-message").text('').show();
    return true;
}

$(document).ready(function () {
    $('#Name').on("input", () => { checkName("#Name") });
    $('#Address').on("input", () => { checkNull("#Address") });
    $('#Phone').on("input", () => { checkPhone("#Phone") });
    $('#Email').on("input", () => { checkEmail("#Email") });
    $('#Quantity').on("input", () => { checkQuantity("#Quantity") });
    
})