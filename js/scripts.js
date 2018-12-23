function openNav() {
    var x = document.getElementById("mobilemenu");

    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    else {
        x.style.display = "flex";
    }
}