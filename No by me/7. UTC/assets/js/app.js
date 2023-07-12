$(document).ready(() => {
	$(".main__form").submit((event) => {
		event.preventDefault();

		let isValid = true;
		$(".form__input").each(function () {
			if ($(this).val() === "") {
				isValid = false;
				$(this).parent().next().text("Vui lòng nhập đầy đủ nội dung").show();
			} else {
				$(this).parent().next().hide();
			}
		});
		if (isValid) {
			alert(
				"“Bạn đã gửi liên hệ thành công. Chúng tôi sẽ sớm liên hệ lại với Bạn"
			);
		}
	});
});
