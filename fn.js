$(document).ready(function () {
    var addressElements = window.location.href.split("?");
    var len = addressElements.length;
    var name = (len == 1) ? "index.inc.html" : addressElements[len - 1] + ".inc.html";
    $.get(name, function (data) {
        $("#content>.col-sm-10").html(data);
    })
    .fail(function () {
        $("#content>.col-sm-10").html("<div class='alert alert-warning'><strong>Not found.</strong>" + 
            " Resource can not be found.</div>");
    });
});