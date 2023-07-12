function ktra_tong() {
    let ten_ = document.getElementById("ten").value;
    let dem=0;

    if(ten_.trim() == "" ){
        alert("Yều cầu nhập họ và tên!");
        dem=0;
    }else {
        dem++;
    }

    if(dem!=0){
        alert("Thông tin đóng góp của bạn đã được gửi!");
    }
}