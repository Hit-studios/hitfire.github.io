/*sidebar*/
var open = false
/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = '30%';
    console.log(document.getElementById("main").style.width);
    document.getElementById("mySidebar").style.height = "100%";
    document.getElementById("mySidebar").style.transition.height = 1;
    document.getElementById("main").style.marginLeft = "30%";
    open = true
}
/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("mySidebar").style.height = "45%";
    document.getElementById("main").style.marginLeft = "0";
    open = false
}

function toggleNav() {
    open = !open
    if open == true {
        openNav()
    }
    if open == false {
        closeNav()
    }
}