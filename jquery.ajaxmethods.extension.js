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