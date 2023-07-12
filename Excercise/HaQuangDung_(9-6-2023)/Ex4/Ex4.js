function checkNull(e, message) {
    if ($(e).val().trim() === '') {
        $(e).next('.form-message').text(message).show();
        return true;
    }
    $(e).next('.form-message').text('').show();
    return false;
}

function checkName(e) {
    var Name = $(e);
    var nameRegex = /^[\p{L}\s]+$/u;
    const isNull = checkNull(e, 'Vui lòng nhập trường này');
    if (isNull) {
        return false;
    } else if (!nameRegex.test(Name.val())) {
        Name.next('.form-message').text('Tên chỉ được chứa ký tự').show();
        return false;
    }
    Name.next(".form-message").text('').show();
    return true;
}

function checkAcc(e) {
    var Acc = $(e);
    var AccRegex = /^([^\s@]+@[^\s@]+\.[^\s@])|(0[1-9]\d{8,10})$/;
    const isNull = checkNull(e, 'Vui lòng nhập trường này');
    if (isNull) {
        return false;
    } else if (!AccRegex.test(Acc.val())) {
        Acc.next('.form-message').text('Tên tài khoản không hợp lệ').show();
        return false;
    }
    Acc.next(".form-message").text('').show();
    return true;
}

function checkReAcc(a, b) {
    const isNull = checkNull(b, 'Vui lòng nhập trường này');
    if (isNull) {
        return false;
    } else if ($(a).val() !== $(b).val()) {
        $(b).next('.form-message').text('Mật khẩu nhập lại không chính xác!').show();
        return false;
    }
    $(b).next('.form-message').text('').show();
    return true;
}

function checkPw(e) {
    const ps = $(e);
    const psRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[\w!@#$%^&*()]{8,}$/;
    const isNull = checkNull(e, 'Vui lòng nhập trường này');
    if (isNull) {
        return false;
    } else if (!psRegex.test(ps.val())) {
        ps.next('.form-message').text('Vui lòng nhập lại mật khẩu có ít nhất 8 ký tự, có ký tự viết hoa và ký tự đặc biệt!').show();
        return false;
    }
    ps.next('.form-message').text('').show();
    return true;

}

function checkEmail(e) {
    var Email = $(e);
    var EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (Email.val().trim() === "") {
        Email.next('.form-message').text('Vui lòng nhập trường này').show();
        return false;
    } else if (!EmailRegex.test(Email.val())) {
        Email.next('.form-message').text('Email không hợp lệ').show();
        return false;
    }
    Email.next(".form-message").hide();
    return true;
}


$(document).ready(function () {
    $('#name').on("blur", () => { checkAcc("#name") });
    $('#password').on("input", () => { checkPw('#password') });
    $('#repassword').on("blur", () => { checkReAcc('#password', '#repassword') });
    $('#fullname').on("input", () => { checkName("#fullname") });
    $('#email').on("blur", () => { checkEmail("#email") });



    $("#btnSignUp").click(function (e) {
        e.preventDefault();
        const isAcc =  checkAcc("#name");
        const isPw = checkPw('#password');
        const isReAcc = checkReAcc('#password', '#repassword');
        const isName = checkName("#fullname");
        const isEmail = checkEmail("#email");

        if (isAcc && isPw && isReAcc && isName && isEmail) {
            alert("Bạn đã đăng ký thành công");
        }
    });
});