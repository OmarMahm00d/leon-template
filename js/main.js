is_none = 1;
function display_menu_links () {
    links = document.querySelector("#sidebar");
    if(is_none == 1){
        links.style.display = "block";
        is_none = 0;
    }
    else if(is_none == 0){
        links.style.display = "none";
        is_none = 1;
    }
}