function check(ID, Regex, message = '') {
    if ($(ID).val() === "") {
        $(ID).next('.form-message').text('Vui lòng nhập trường này').show();
        return false;
    } else if (Regex !== '0') {
        if (!Regex.test($(ID).val())) {
            $(ID).next('.form-message').text(message).show();
            return false;
        }
    }
    $(ID).next(".form-message").hide();
    return true;
}

function reset() {
    $('#User').val('');
    $('#Password').val('');
    $(".form-message").hide();

}

$(document).ready(function () {
    $('#User').on('input', () => { $('#User').next(".form-message").hide()});
    $('#Password').on('input', () => {$('#Password').next(".form-message").hide()});


    $('#User').on('blur', () => { check('#User', /^\w+$/, 'Tên đăng nhập không hợp lệ') })
    $('#Password').on('blur', () => { check('#Password', /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[\w!@#$%^&*()]{8,}$/, 'Mật khẩu không hợp lệ!') })


    $('#Submit').click(function (e) {
        e.preventDefault();
        const isUser = check('#User', /^\w+$/, 'Tên đăng nhập không hợp lệ');
        const isPassword = check('#Password', /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[\w!@#$%^&*()]{8,}$/, 'Mật khẩu không hợp lệ!');

        if (isUser && isPassword) {
            reset();
            alert('Bạn đã đăng ký thành công!')
        }
    })
})