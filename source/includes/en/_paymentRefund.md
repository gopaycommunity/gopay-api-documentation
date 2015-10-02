##Refund of the payment (cancelation)
Refund of the payment is a functionality which allows recovering funds for already made payment to the customer. 
Refund can be done in two ways. 
Fully refundable payment can refunded based on the parameter ```amount``` full amount of the payment, on the other hand partially refundable payment
is specified by the amount for refund. 

You can find additional information about refundations in [help center](https://help.gopay.com/en/s/9).

> Request

```shell
curl v https://gw.sandbox.gopay.com/api/payments/payment/3000006620/refund \
-X "POST" \
-H "Accept: application/json" \
-H "Content-Type:application/x-www-form-urlencoded"\
-H "Authorization: Bearer AAArt6RuTM69kX6UUGZ6p9hyMPrTUVXmMDdkC4BNnQvQcbNyUTvQtCv45R969" \
-d "amount=1000"
```

```php
<?php
$ch = curl_init();

$data = "amount=1000";

curl_setopt($ch, CURLOPT_URL, "https://gw.sandbox.gopay.com/api/payments/payment/".$id."/refund");
//pass payment id
curl_setopt($ch, CURLOPT_HTTPHEADER, 
  array('Accept: application/json',
        'Content-Type: application/x-www-form-urlencoded',
        'Authorization: Bearer ' . $token));
//get token first at scope=payment-all
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$result = curl_exec($ch);
?>
```

###Request
```POST /api/payments/payment/{id}/refund```

###Header of request

Parameter name|Parameter description| Required
----------------|-----------------|--------
Accept|application/json|YES
Content-Type|application/x-www-form-urlencoded|YES
Authorization|Bearer [```<access-token>```](#access-token)|YES

###Body of request

Parameter name|Parameter description| Required| Data´s type
---------------|---------------|-------|-------
amount|Refunded amount|YES|long > 0

> Response

```json
{
 "id":3000006620,
 "result":"FINISHED"
}
```

###Response 
Parameter name|Parameter description| Data´s type
---------------|---------------|-------
id|Payment ID|long
[result](#result)|Status of request| Object