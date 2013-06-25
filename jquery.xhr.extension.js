(function ($) {
	"use strict";
    $.extend({
        statusCode: {
            internalError: 500,
            badRequest: 400,
            notFound: 404,
            preconditionFailed: 412
        }
    });

    var xxxhr = {
        failBy: function (statusCode, fnCallback) {
            return this.fail(function (xhr) {
                if (xhr.status === statusCode) {
                    fnCallback.apply(this, arguments);
                }
            });
        }
    };

    $.each($.statusCode, function (key, val) {
        xxxhr[key] = function (fn) {
            return this.failBy(val, fn);
        };
    });
    
    $(document).ajaxSend(function (event, xhr) {
        $.extend(xhr, xxxhr);
    });

})(jQuery);