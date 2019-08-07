$(document).ready(function() {
    /* put your code here
    $(".theButton").click(function() {
    $("#panel .container").siblings().hide();
    });
    $(".theButton").click(function() {
    $(this).hide();
    });
    $(".theButton").click(function() {
        $("#panel .container").siblings().fadeTo(1000, 0.1);
    });
    $(".superButton").click(function() {
        $("#panel .container").siblings().fadeTo(1000, 1);
    });
    $(".theButton").mouseenter(function() {
        $(this).addClass("makeBlack");
    });
    $(".theButton").mouseleave(function() {
        $(this).removeClass("makeBlack");
    }); */
    $(".theButton").click(function() {
        var col = $(this).css('background-color');
        $('.superButton').text(col);

    });
});
