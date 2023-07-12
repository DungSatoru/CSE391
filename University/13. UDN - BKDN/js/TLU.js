// const active = document.querySelector('.header2_nav-GioiThieu');
// const submenu = document.querySelector('.header2_nav-GioiThieu--submenu');

// function open(e){
//     active.classList.toggle("active");
// }   
// active.addEventListener('click',function(e){
//     if(e.target == e.currentTarget){
//         open();
//     }
// });

function SubNav_Active_Hide(down, b, up) {
    if (window.innerWidth < 940) {

        $(down).click(function () {
            if (1) {
                $(".header2_nav-submenu").css("display", "none");
                $(".fa-chevron-up").css("display", "none");
                $(".fa-chevron-down").css("display", "block");
            }
            $(b).css("display", "block");
            $(b).css("position", "relative");
            $(b).css("width", "100%");
            $(down).css("display", "none");
            $(up).css("display", "block");
        });
        $(up).click(function () {
            $(b).css("display", "none");
            $(up).css("display", "none");
            $(down).css("display", "block");
        });
    } else {
        $(b).css("display", "block");
    }
}


jQuery(Document).ready(function () {

    if (window.innerWidth < 940) {
        // Hiện Navbar
        var nav_bar_Icons = 0;
        $("#nav-bar-Icons").click(function () {
            if (nav_bar_Icons === 0) {
                $("#header2_nav").css("display", "flex");
                nav_bar_Icons++;
            } else {
                $("#header2_nav").css("display", "none");
                nav_bar_Icons = 0;
            }
        });

        // Hiện subnav
        SubNav_Active_Hide("#GioiThieu_down", ".header2_nav-GioiThieu--submenu", "#GioiThieu_up");
        SubNav_Active_Hide("#TTTB_down", ".header2_nav-TTTB--submenu", "#TTTB_up");
        SubNav_Active_Hide("#TuyenSinh_down", ".header2_nav-TuyenSinh--submenu", "#TuyenSinh_up");
        SubNav_Active_Hide("#DaoTao_down", ".header2_nav-DaoTao--submenu", "#DaoTao_up");
        SubNav_Active_Hide("#NghienCuu_down", ".header2_nav-NghienCuu--submenu", "#NghienCuu_up");
        SubNav_Active_Hide("#DoiNgoai_down", ".header2_nav-DoiNgoai--submenu", "#DoiNgoai_up");
        SubNav_Active_Hide("#SinhVien_down", ".header2_nav-SinhVien--submenu", "#SinhVien_up");
    }
});

