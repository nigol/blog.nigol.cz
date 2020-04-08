var article = document.body.getElementsByTagName("article")[0].innerHTML;
$.get("/template/template.head", function (head) {
    $("head").append(head);
    $.get("/template/template.body", function (body) {
        $("body").css({opacity: 0});    
        window.setTimeout(function() {
            $("body").html(body);
            $("#content>.col-sm-10>.article").html(article);
            prepareCategories();        
            $("body").css({opacity: 1});    
        }, 500);
    });
});

function prepareCategories() {
    $("#sideBar").find(".label").each(function (i, v) {
        var cl = "." + v.classList[2];
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