function check(ID, Regex, message = '') {
    if ($(ID).val() === "") {
        $(ID).parent().next('.form-message').text('Vui lòng nhập trường này').show();
        return false;
    } else if (Regex !== '0') {
        if (!Regex.test($(ID).val())) {
            $(ID).parent().next('.form-message').text(message).show();
            return false;
        }
    }
    $(ID).parent().next(".form-message").hide();
    return true;
}

function reset() {
    $('#Title').val('');
    $('#Name').val('');
    $('#Email').val('');
    $('#Phone').val('');
    $('#Address').val('');
    $('#Content').val('');
    $(".form-message").hide();

}

$(document).ready(function () {
    $('#Title').on('input', () => { check('#Title', '0', '') })
    $('#Name').on('input', () => { check('#Name', /^[\p{L}\s]+$/u, 'Tên chỉ có ký tự chữ') })
    $('#Email').on('input', () => { check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Vui lòng nhập đúng định dạng email!') })


    $('#reEnter').click( function(e) {
        e.preventDefault();
        reset();
    })

    $('#submit').click( function(e) {
        e.preventDefault();
        const isTitle = check('#Title', '0', '');
        const isName = check('#Name', /^[\p{L}\s]+$/u, 'Tên chỉ có ký tự chữ');
        const isEmail = check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]$/, 'Vui lòng nhập đúng định dạng email!');

        if (isTitle && isName && isEmail) {
            reset();
            alert('Bạn đã đăng ký thành công!')
        }


    })
})


