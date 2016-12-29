$(document).ready(function () {
    var addressElements = window.location.href.split("?");
    var len = addressElements.length;
    var name = (len == 1) ? "index.inc.html" : addressElements[len - 1] + ".inc.html";
    $.get(name, function (data) {
        $("#content").css({opacity: 0});
        window.setTimeout(function () {
            $("#content>.col-sm-10>.article").html(data);
            $("#content").css({opacity: 1});
            var header = $("h2").text();
            document.title = header.substring(0, header.indexOf("."));
            $("#backToIndex").show();
            prepareCategories();
        }, 500);
    })
    .fail(function () {
        $("#content>.col-sm-10>.article").html("<div class='alert alert-warning'><strong>Not found.</strong>" + 
            " Resource can not be found.</div>");
            prepareCategories();
    });
});

function prepareCategories() {
    $("#sideBar").find(".label").each(function (i, v) {
        var cl = "." + v.classList[1];
        var count = $("#content").find(cl).length;
        if (count > 0) {
            $(v).show();
            v.nextElementSibling.innerText = count;
            $(v).click(function () {
                $("#content").find(".label").parent().parent().hide();
                $("#content").find(cl).parent().parent().show();
            });
        }
    });
}