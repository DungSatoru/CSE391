function checkloi() {

const name_ = document.getElementById("name").value;
const ima_ = document.getElementById("ima").value;
const person_ = document.getElementById("person").value;
const phone_ = document.getElementById("phone").value;

    if(name_.trim() == "" || ima_.trim() == "" || person_.trim() == "" || phone_.trim() == "" )
    {
        alert("yêu cầu nhập đủ thông tin!");
    }
}