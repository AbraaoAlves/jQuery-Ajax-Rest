 /**
 * jquery.ajax.rest.js
 * @version: v0.0.1
 * @author: Abraão Alves
 *
 * Created by Abraão Alves on 2013-06-25
 *
 * Copyright (c) 2013 Abraão Alves https://github.com/abraaoalves
 */
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

(function($){
    "use strict";
    jQuery.each(["get", "post", "put", "delete"], function (i, method) {
        jQuery[method] = function (url, data, callback, type, ajaxOptions) {
            // shift arguments if data argument was omitted
            if (jQuery.isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            } 

            return jQuery.ajax($.extend({
                type: method,
                url: url,
                data: data,
                success: callback,
                dataType: type
            }, ajaxOptions || {}));
        };

        jQuery[method + "JSON"] = function (url, data, callback) {
            return jQuery[method](url, data, callback, "json", { contentType: "application/json; charset=UTF-8" });
        };
    });

}(jQuery));