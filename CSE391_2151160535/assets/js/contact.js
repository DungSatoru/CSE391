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

function reset() {
    $('#Title').val('');
    $('#Name').val('');
    $('#Email').val('');
    $('#Phone').val('');
    $('#Address').val('');
    $('#Content').val('');
    $(".form-message").text('').show();
    $('#NotRobot').prop('checked', false);
    hideCheckmark($('.checkmark'));
    $('#Submit').removeClass('btn-primary');
    $('#NotRobot').css('transform', 'scale(1.8)');
}

$(document).ready(function () {
    $('#Title').on('input', () => { check('#Title', '0', '') })
    $('#Name').on('input', () => { check('#Name', /^[a-zA-ZÀ-ỹ ]+$/, 'Tên chỉ có ký tự chữ') })
    $('#Email').on('blur', () => { check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Vui lòng nhập đúng định dạng email!') })
    $('#Phone').on('input', () => { check('#Phone', /^0[1-9]\d{8}$/, 'Số điện thoại không hợp lệ') })
    $('#Content').on('input', () => { check('#Content', '0', '') })


    $('#ReEnter').click(function (e) {
        e.preventDefault();
        reset();
    })

    $('#NotRobot').on('change', function () {
        if ($(this).is(':checked')) {
            // Đổi màu btn
            $('#Submit').addClass('btn-primary');
            // Bắt sự kiện click cho Nút Gửi đi
            $('#Submit').click(function (event) {
                event.preventDefault();
                if ($('#NotRobot').is(':checked')) {
                    const isTitle = check('#Title', '0', '');
                    const isName = check('#Name', /^[a-zA-ZÀ-ỹ ]+$/, 'Tên chỉ có ký tự chữ');
                    const isEmail = check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Vui lòng nhập đúng định dạng email!');
                    const isContent = check('#Content', '0', '');

                    if (isTitle && isName && isEmail && isContent) {
                        reset();
                        alert('Bạn đã đăng ký thành công!')
                    }
                }

            })

            // Loading
            showLoadingSpinner($('.loading-spinner'));
            setTimeout(function () {
                hideLoadingSpinner($('.loading-spinner'));
                showCheckmark($('.checkmark'));
            }, 1000);

            // Thu nhỏ ô input
            $('#NotRobot').css('transform', 'scale(0.1)');
        } else {
            $('#Submit').removeClass('btn-primary');
            $('#NotRobot').css('transform', 'scale(1.8)');
            hideCheckmark($('.checkmark'));
        }
    });


})

function showLoadingSpinner(spinner) {
    spinner.css('display', 'block');
}

function hideLoadingSpinner(spinner) {
    spinner.css('display', 'none');
}

function showCheckmark(checkmark) {
    checkmark.css('display', 'block');
}
function hideCheckmark(checkmark) {
    checkmark.css('display', 'none');
}
