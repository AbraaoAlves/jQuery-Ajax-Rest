/// <reference path="../testlib/_reference.js" />
/// <reference path="../jquery.xhr.extension.js" />

describe("xhr extensions", function () {
		beforeEach(function(){
			jasmine.Ajax.useMock();
		});
		
        it("posso responder com um callback especifico de erro 500", function () {
            var callback = jasmine.createSpy();

            $.post("url", { data: 1 }).internalError(callback);

            var request = mostRecentAjaxRequest();
            request.response({ status: 500 });

            expect(callback).toHaveBeenCalled();
        });

        given(400, 404, 412).
        it("internalError callback só deve ser chamado se resultado for erro 500", function (statusReturned) {
            var callback = jasmine.createSpy();

            $.post("url", { data: 1 }).internalError(callback);

            var request = mostRecentAjaxRequest();
            request.response({ status: statusReturned });

            expect(callback).not.toHaveBeenCalled();
        });

        it("posso responder com um callback especifico de erro 400", function () {
            var callback = jasmine.createSpy();

            $.post("url", { data: 1 }).badRequest(callback);

            var request = mostRecentAjaxRequest();
            request.response({ status: 400 });

            expect(callback).toHaveBeenCalled();
        });

        given(404, 412, 500).
        it("badRequest callback só deve ser chamado se resultado for erro 400", function (statusReturned) {
            var callback = jasmine.createSpy();

            $.post("url", { data: 1 }).badRequest(callback);

            var request = mostRecentAjaxRequest();
            request.response({ status: statusReturned });

            expect(callback).not.toHaveBeenCalled();
        });

        it("posso responder com um callback especifico a um erro 412", function () {
            var callback = jasmine.createSpy();

            $.post("url", { data: 1 }).preconditionFailed(callback);

            var request = mostRecentAjaxRequest();
            request.response({ status: 412});

            expect(callback).toHaveBeenCalled();
        });

        given(400, 404, 500).
        it("badRequest callback só deve ser chamado se resultado for erro 412", function (statusReturned) {
            var callback = jasmine.createSpy();

            $.post("url", { data: 1 }).preconditionFailed(callback);

            var request = mostRecentAjaxRequest();
            request.response({ status: statusReturned });

            expect(callback).not.toHaveBeenCalled();
        });
    });