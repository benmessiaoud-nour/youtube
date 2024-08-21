$(document).ready(function () {
    $(".first-list-item").addClass("active");
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

    //عند الضغط على الأيقونة الخاصة بالقائمة الجانبية
    $("#toggler").click(function (event) {
        $('#wrap').toggleClass('toggled');

        //إضافة طبقة سوداء
        var right = $('.sidebar').css("right"); //أعطينا هذه الخاصية للقائمة الجانبية لكي تُصبح على اليمين
        if (right == '0px') //القائمة الجانبية بحالة إظهار وبالتالي يجب إغلاقها
        {
            $('.sidebar').css({ 'right': '-17rem' });
            $('.layer').hide(); /*أخفي الطبقة السوداء*/
        }
        else { //القائمة الجانبية بحالة إغلاق وبالتالي يجب إظهارها
            $('.sidebar').css({ 'right': '0' });
            $('.layer').show(); /*أظهر الطبقة السوداء*/
        }
    });

    //إخفاء القائمة الجانبية والطبقة السوداء عند الضغط على الطبقة السوداء
    $('.layer').click(function () {
        $('.sidebar').css({ 'right': '-17rem' });
        $('.layer').hide();
    });
    $(".saerch-icon").click(function () {
        $(".saerch-icon").slideToggle("slow");
    })







});