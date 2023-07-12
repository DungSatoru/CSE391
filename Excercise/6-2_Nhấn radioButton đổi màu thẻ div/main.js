jQuery(Document).ready(function () {
    $('#rbGreen').click(() => {
        $('.Info').css('background-color', 'green').text(`Đây là màu xanh`).show();
    })
    $('#rbRed').click(() => {
        $('.Info').css('background-color', 'red').text(`Đây là màu đỏ`).show();
    })
    $('#rbBlue').click(() => {
        $('.Info').css('background-color', 'blue').text(`Đây là màu Xanh da trời`).show();
    })
    $('#rbYellow').click(() => {
        $('.Info').css('background-color', 'yellow').text(`Đây là màu vàng`).show();
    })
});

