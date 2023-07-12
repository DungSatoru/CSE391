function checkUser(e) {
	const username = $(e);
	const nameRegex = /^[a-zA-Z]+$/;

	if (username.val() === "") {
		username.next(".form-message").text("Vui lòng nhập tên tài khoản").show();
		return false;
	} else if (!nameRegex.test(username.val())) {
		username.next(".form-message").text("Tên đăng nhập chỉ có thể chứa chữ").show();
		return false;
	}
	username.next(".form-message").hide();
	return true
}

function checkPW(e) {
	const password = $(e);
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;


	if (password.val() === "") {
		password.next(".form-message").text("Vui lòng nhập mật khẩu").show();
		return false;
	} else if (!passwordRegex.test(password.val())) {
		password.next(".form-message").text("Mật khẩu tối thiểu 8 ký tự, có ký tự hoa, có ký tự thường, có ký tự số").show();
		return false;
	}
	password.next(".form-message").hide();
	return true;
}

$(document).ready(() => {
	$('#username').on("input", function () {
		const isUS = checkUser("#username");
	});
	$('#password').on("input", function () {
		const isPW = checkPW("#password");
	});
	$(".main__form").submit((event) => {
		event.preventDefault();
		const isUS = checkUser("#username");
		const isPW = checkPW("#password");

		if (isUS && isPW) {
			alert("Đăng nhập thành công");
		}
	});
});
