##Cancellation of the pre-authorized payment
The functionality allows you to cancel previously created​ pre-authorized payment.​ [created payment](#pre-authorized payment)
   
More information about pre-authorized payments you can find in [help center](https://help.gopay.com/en/s/7).

> Request

```shell
curl -v https://gw.sandbox.gopay.com/api/payments/payment/3000006542/void-authorization\
-X "POST" \
-H "Accept: application/json" \
-H "Content-Type:application/x-www-form-urlencoded"\
-H "Authorization: Bearer AAArt6RuTM69kX6UUGZ6p9hyMPrTUVXmMDdkC4BNnQvQcbNyUTvQtCv45R969"
```
```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://gw.sandbox.gopay.com/api/payments/payment/".$id."/void-authorization");
//pass id of payment
curl_setopt($ch, CURLOPT_HTTPHEADER, 
  array('Accept: application/json',
        'Content-Type: application/x-www-form-urlencoded',
        'Authorization: Bearer ' . $token));
//get token first at scope=payment-all
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, false);

$result = curl_exec($ch);
?>
```

###Request
```POST /api/payments/payment/{id}/void-authorization```

###Header of request

Parameter name|Parameter description| Required
----------------|-----------------|--------
Accept|application/json|YES
Content-Type|application/x-www-form-urlencoded|YES
Authorization|Bearer [```<access-token>```](#access-token)|YES

> Response

```json
{
 "id":3000006542,
 "result":"FINISHED"
}
```

###Response
Parameter name|Parameter description| Data´s type
---------------|---------------|----------
id|payment ID|long
[result](#result)|Object describing of request status|long