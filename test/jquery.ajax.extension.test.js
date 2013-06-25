/// <reference path="../testlib/_reference.js" />
/// <reference path="../jquery.ajaxmethods.extension.js" />

describe("jquery ajax methods extensions", function () {
	beforeEach(function(){
		jasmine.Ajax.useMock();
	});
        
	given("post", "get", "put", "delete").
	it("o metodo da requisição deve ser correspondente a extension method", function (method) {
		$[method.toLowerCase() + "JSON"]("url", { data: 1 });

		var request = mostRecentAjaxRequest();

		expect(request.method).toBe(method.toUpperCase());
	});

	given("post", "get", "put", "delete").
	it("o tipo de dado de retorno e conteudo enviado devem ser json", function (method) {
	   $[method.toLowerCase() + "JSON"]("url", { data: 1 });

	   var request = mostRecentAjaxRequest();

	   expect(request.requestHeaders.Accept).toContain("json");
	   expect(request.requestHeaders['Content-Type']).toContain("application/json");
   });

	it("posso setar o tipo de dado de retorno como json", function () {
		$.postJSON("url", { data: 1 });

		var request = mostRecentAjaxRequest();

		expect(request.requestHeaders.Accept).toContain("json");
	});

	it("se passar um objeto como parametro o tipo de dado será json", function () {
		$.postJSON("url", { data: 1 });
		var request = mostRecentAjaxRequest();

		expect(request.requestHeaders['Content-Type']).toContain("application/json");
	});

	it("se passar uma string como parametro o tipo de dado será form-urlencoded", function () {
		$.post("url", $.param({ data: 1 }));

		var request = mostRecentAjaxRequest();

		expect(request.requestHeaders['Content-Type']).toContain("application/x-www-form-urlencoded");
	});

});