function check(ID, Regex, message = '') {
    if ($(ID).val().trim() === "") {
        $(ID).parent().next('.form-message').text('Vui lòng nhập trường này').show();
        return false;
    } else if (Regex !== '0') {
        if (!Regex.test($(ID).val())) {
            $(ID).parent().next('.form-message').text(message).show();
            return false;
        }
    }
    $(ID).parent().next(".form-message").text('').show();
    return true;
}


$(document).ready(function () {
    $('#Name').on('input', () => { check('#Name', /^[a-zA-ZÀ-ỹ ]+$/, 'Tên chỉ có ký tự chữ') });
    $('#Phone').on('input', () => { check('#Phone', /^0[1-9][0-9]{8,10}$/, 'Số điện thoại không hợp lệ'); });

    $('#Submit').click(function (e) {
        e.preventDefault();
        const isName = check('#Name', /^[a-zA-ZÀ-ỹ ]+$/, 'Tên chỉ có ký tự chữ');

        if (isName && isPhone) {
            alert('Bạn đã liên hệ thành công!');
            $('#Name').val('');
        }
    })

})