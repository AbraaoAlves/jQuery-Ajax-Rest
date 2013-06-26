jQuery-Ajax-Rest
================

Extensios to jqXHR (deferred object) and ajax extension methods

##Features
	
* jqxhr extensions
	+ .failBy
	+ .internalError
	+ .badRequest
	+ .preconditionFailed
	+ .notFound
* ajax shorthand functions
	+ $.put
	+ $.delete
	+ $.getJSON
	+ $.putJSON
	+ $.postJSON
	+ $.deleteJSON 


##jQuery XHR extension:

### jqXHR.failBy
	
	API:
		jqxhr.failBy( statusCode , failCallback (jqxhr) )
Resgister um failcallback to status code response.	
Returns: [jqXHR](http://api.jquery.com/jQuery.get/#jqxhr-object).

Remember that jqXHR is a [deferred object](http://api.jquery.com/category/deferred-object/)

### jqXHR.[errorCallback]

		jqxhr.internalError, jqxhr.badRequest, jqxhr.notFound, jqxhr.preconditionFailed

	API:
		jqxhr.[method]( failCallback(jqxhr, status, error) )

Resgister um failcallback type of method called.	
Returns: [jqXHR](http://api.jquery.com/jQuery.get/#jqxhr-object).


.


##jQuery Ajax extension methods:

### $.[method]JSON
		$.getJSON, $.putJSON, $.postJSON, $.deleteJSON 
		
	API:
		$.[method]JSON( url [, data ] [, success(data, textStatus, jqXHR) ] )

Make a json request type of method called.	
Returns: [jqXHR](http://api.jquery.com/jQuery.get/#jqxhr-object).

This is a shorthand Ajax function, which is equivalent to:

``` 

		$.ajax({
		  url: url,
		  type: method,
		  data: data,
		  success: success,
		  dataType: "json",
		  contentType: "aplication/json;charset=UTF-8"
		});	

```	
	
### $.[method]
	
		$.get, $.put, post, $.delete`
	
	API:
		$.[method]( url [, data ] [, success(data, textStatus, jqXHR) ] [, dataType ] )

Make a json request type of method called.	
Returns: [jqXHR](http://api.jquery.com/jQuery.get/#jqxhr-object)

This is a shorthand Ajax function, which is equivalent to:

``` 

		$.ajax({
		  url: url,
		  type: method,
		  data: data,
		  success: success,
		  dataType: type
		});	

```	
