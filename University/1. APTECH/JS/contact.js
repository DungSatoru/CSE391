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
  $('#Name').on('input', () => { check('#Name', /^[\p{L}\s]+$/u, 'Tên chỉ có ký tự chữ') })
  $('#Email').on('input', () => { check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Vui lòng nhập đúng định dạng email!\nExample: abc@gmail.com') })
  $('#Phone').on('input', () => { check('#Phone', /^0[1-9]\d{8,10}$/, 'Số điện thoại không hợp lệ') })
  $('#Content').on('input', () => { check('#Content', '0', '') })


  $('#submit').click(function (e) {
    e.preventDefault();
    const isName = check('#Name', /^[\p{L}\s]+$/u, 'Tên chỉ có ký tự chữ');
    const isEmail = check('#Email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Vui lòng nhập đúng định dạng email!');
    const isPhone = check('#Phone', /^0[1-9]\d{8,10}$/, 'Số điện thoại không hợp lệ');
    const isContent = check('#Content', '0', '');
    const isNotRobot = $('#NotRobot').is(':checked');

    if (isName && isEmail && isContent && isNotRobot) {
      reset();
      alert('Bạn đã đăng ký thành công!')
    }
  })
})