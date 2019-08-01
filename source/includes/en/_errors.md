# Error codes

##HTTP result codes
HTTP code|Meaning of code
----------------|-----------
200|Calling was successful 
403|Not-authorized access
409|Validation errors 
500|Calling ended with error
404|Service does not exist 

## Return errors

> Example of error response - field specific

```json
{"date_issued":1390336022001,
"errors":[
	{"scope":"F","field":"email","message":"E-mail already existed.","error_code":112,"error_name":"NOT_UNIQUE"},
	{"scope":"F","field":"mobile_phone","message":"Mobile phone already existed.","error_code":112,"error_name":"NOT_UNIQUE"}
]}
```

> Example of error response - global

```json
{"scope":"G","field":null,"error_code":500,"error_name":null,"message":null,"description":null}
```

Detail of error is described in body of response as application/json datas of next structure


Parameter |Parameter's description
--------|---------------
date issued|timestamp of error moment
[errors](#errors)|List of error messages 

###errors

Parameter|Parameter's description
--------|---------------
scope|F - field specific, G - global
field| Set only in case of validation error joined with field
message|Localized message. Localization based on ```Accept-Language``` header. Localization is set to ```en-US``` by default. It is possible to use ```Accept-Language: cs``` header for czech localization.
description|Technical description of error 
error_code|Numbers type of error 
error_name|Code type of error 

##List of errors

###Global
Code|Description
---|-----
100|System error 
110|Required
111|Error format
112|Already existed
113|Not possible to change 
114|Not possible to delete
115|Not clear
116|Invalid request

###Authentication, authorization
Code|Description
---|-----
200|Not authorized access
201|Method of allocation of rights is not supported
202|Wrong access data 
203|Access via PIN was deactivated

###Payment
Code|Description
---|-----
350|Charged of payment failed 
351|Charged of payment was successful
352|Cancel of pre-authorization failed 
353|Cancel of pre-authorization was successful
340|Recurring payment failed 
341|Recurring payment is not supported
342|Recurring payment was stopped
343|Number of attempts to recure payment was exceeded
330|Payment is not possible to refund 
331|Payment is not possible to refund
332|Wrong amount
333|Not sufficient funds on account 
301|Not possible to create a payment
302|Not possible to make a payment
303|Payment in wrong state
304|Payment not found
305|E-shop deactivated
321|Payee can not accept payment