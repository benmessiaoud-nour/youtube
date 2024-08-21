$(document).ready(function () {
    $("#myBtn").on("click", function () {
        read();
    });
    $(".reply").click(function () {
        $(this).parents("div.row").next("div.card").toggle();
    })

})
function read() {
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "عرض المزيد";
        more.style.display = "none";
    } else {
        dots.style.display = "none";
        btn.innerHTML = "عرض عناصر اقل";
        more.style.display = "inline";
    }
}