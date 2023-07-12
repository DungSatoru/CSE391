function checkloi() {
    let ho_ = document.getElementById("ho_").value;
    let ten_ = document.getElementById("ten_").value;
    let email_ = document.getElementById("email_").value;

    let chech_email = document.getElementById("check_email");
    let checkten = document.getElementById("check_ten");
    
    if(ho_ == "" || ten_ == "" || email_ == "")
    {
        alert("Bạn chưa nhập đủ thông tin!");
    }
    else{
        if(!isNaN(ten_)){
            checkten.textContent = "Tên nhập chưa chính xác!";


        }
        
        for(let i = 0; i<email_; i++){
            if(!isNaN(email_)){
                if(email_[0] != 0){
                    chech_email.textContent = "Số đầu phải là số 0";
                }else{
                    if(email_.length >= 10 || email_.length <=12){
                chech_email.textContent = "Số điện thoại không phải từ 10 đến 12 số!";
            }
                } 
            }
        }

        

    }


}