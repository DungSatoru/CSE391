function change_tab_1()
        {
            document.getElementById("main_infor").style.backgroundColor = "white";
            document.getElementById("main_infor").style.color = "blue";
            document.getElementById("text").innerHTML = "Tab thông tin chính";
            document.getElementById("image").style.backgroundColor = "#348ec9";
            document.getElementById("image").style.color = "white";
            document.getElementById("SEO").style.backgroundColor = "#348ec9";
            document.getElementById("SEO").style.color = "white";
        }

        function change_tab_2()
        {
            document.getElementById("image").style.backgroundColor = "white";
            document.getElementById("image").style.color = "blue";
            document.getElementById("text").innerHTML = "Tab hình ảnh";
            document.getElementById("SEO").style.backgroundColor = "#348ec9";
            document.getElementById("SEO").style.color = "white";
            document.getElementById("main_infor").style.backgroundColor = "#348ec9";
            document.getElementById("main_infor").style.color = "white";
        }

        function change_tab_3()
        {
            document.getElementById("SEO").style.backgroundColor = "white";
            document.getElementById("SEO").style.color = "blue";
            document.getElementById("text").innerHTML = "Tab SEO";
            document.getElementById("main_infor").style.backgroundColor = "#348ec9";
            document.getElementById("main_infor").style.color = "white";
            document.getElementById("image").style.backgroundColor = "#348ec9";
            document.getElementById("image").style.color = "white";
        }