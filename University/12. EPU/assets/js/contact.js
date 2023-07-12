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
    $('#Name').val('');
    $('#Email').val('');
    $('#Content').val('');
    $(".form-message").hide();

}

$(document).ready(function () {
    $('#FirstName').on('blur', () => { check('#FirstName', /^[\p{L}\s]+$/u, 'Tên chỉ có ký tự chữ') });
    $('#LastName').on('blur', () => { check('#LastName', /^[\p{L}\s]+$/u, 'Tên chỉ có ký tự chữ') });
    $('#Email').on('blur', () => { check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email không hợp lệ') });
    $('#Phone').on('blur', () => { check('#Phone', /^0[1-9][0-9]{8}$/, 'Số điện thoại không hợp lệ') });
    $('#Content').on('blur', () => { check('#Content', '0', '') });

    $('#Submit').click(function (e) {
        e.preventDefault();
        const isFirstName = check('#FirstName', /^[\p{L}\s]+$/u, 'Tên chỉ có ký tự chữ');
        const isLastName = check('#LastName', /^[\p{L}\s]+$/u, 'Tên chỉ có ký tự chữ');
        const isEmail = check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Vui lòng nhập đúng định dạng email!');
        const isPhone = check('#Phone', /^0[1-9][0-9]{8}$/, 'Số điện thoại không hợp lệ') ;
        const isContent = check('#Content', '0', '');

        if (isFirstName && isLastName && isEmail && isPhone && isContent) {
            reset();
            alert('Bạn đã đăng ký thành công!')
        }
    })
})