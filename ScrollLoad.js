(function ($) {
    var scrollloading = false;
    $.fn.extend({
        scrollload: function (callback) {
            var el = $(this);
            $(window).bind("scroll", function () {
                //动态递减数参数
                if ($(window).scrollTop() > parseInt(el.offset().top) + el.height() - $(window).height()) {
                    if (scrollloading) return;

                    if (typeof callback == "function") {
                        scrollloading = true;
                        callback();
                    }
                    //避免重复加载
                    var stop = setTimeout(function () {
                        scrollloading = false;
                    }, 2000);
                }
            });
        }
    });
})(jQuery);