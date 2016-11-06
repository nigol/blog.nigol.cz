$(document).ready(function () {
    var addressElements = window.location.href.split("?");
    var len = addressElements.length;
    var name = (len == 1) ? "index.inc.html" : addressElements[len - 1] + ".inc.html";
    $.get(name, function (data) {
        $("#content").css({opacity: 0});
        window.setTimeout(function () {
            $("#content>.col-sm-10>.article").html(data);
            $("#content").css({opacity: 1});
        }, 500);
    })
    .fail(function () {
        $("#content>.col-sm-10>.article").html("<div class='alert alert-warning'><strong>Not found.</strong>" + 
            " Resource can not be found.</div>");
    });
});