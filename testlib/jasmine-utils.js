/// <reference path="jasmine.js" />

String.prototype.format = String.prototype.format || function () {
    var format = this;
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg === null || arg === undefined) arg = "";
        var regex = new RegExp("\\{" + i + "\\}", "g");
        format = format.replace(regex, arg);
    }
    return format;
};

function given() {
    ///<summary>ex: given("param1", "param2", "paramN").it("", function(param){ }) </summary>

    var args = Array.prototype.slice.call(arguments);

    return {
        it: function (descricao, fn) {
            args.forEach(function (arg) {
                arg = Array.isArray(arg) ? arg : [arg];

                var argDesc = arg.join(" , ");
                var desc = String.prototype.format.apply(descricao, arg);

                jasmine.getEnv().it("dado " + argDesc + " - " + desc, function () {
                    fn.apply(this, arg);
                });

            });
        }
    };
}