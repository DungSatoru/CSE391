function change_color()
{
    var check = document.getElementsByName("color");
    if (check[0].checked)
    {
        document.getElementById("text").style.backgroundColor = "red";
        document.getElementById("text").style.color = "white";
        document.getElementById("text").innerHTML = "Bạn đã chọn red radio button";
    }
    if (check[1].checked)
    {
        document.getElementById("text").style.backgroundColor = "blue";
        document.getElementById("text").style.color = "white";
        document.getElementById("text").innerHTML = "Bạn đã chọn blue radio button";
    }
    if (check[2].checked)
    {
        document.getElementById("text").style.backgroundColor = "green";
        document.getElementById("text").style.color = "white";
        document.getElementById("text").innerHTML = "Bạn đã chọn green radio button";
    }
}