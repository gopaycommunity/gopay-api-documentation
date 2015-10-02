##Refundace platby (storno)
Refundace platby umožňuje navrácení finančních prostředků za již
provedenou platbu zpět zákazníkovi.

Refundace lze provádět dvěma způsoby. Plná refundace platby umožňuje na základě parametru ```amount``` vrácení celé částky,
zatímco částečná refundace specifikuje částku pro vrácení.

Doplňující informace k refundaci plateb naleznete v našem [centru nápovědy](https://help.gopay.com/cs/s/hZ).

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
//nutno predat id refundovane platby
curl_setopt($ch, CURLOPT_HTTPHEADER, 
  array('Accept: application/json',
        'Content-Type: application/x-www-form-urlencoded',
        'Authorization: Bearer ' . $token));
//nutno nejdrive vytvorit token ve scope=payment-all
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

$result = curl_exec($ch);
?>
```

###Request
```POST /api/payments/payment/{id}/refund```

###Hlavička požadavku

Název parametru | Popis parametru | Povinný
----------------|-----------------|--------
Accept|application/json|ANO
Content-Type|application/x-www-form-urlencoded|ANO
Authorization|Bearer [```<access-token>```](#přístupový-token)|ANO

###Tělo požadavku

Název parametru|Popis parametru|Povinný| Datový typ
---------------|---------------|-------|-------
amount|Refundovaná částka|ANO|long > 0

> Response

```json
{
 "id":3000006620,
 "result":"FINISHED"
}
```

###Response 
Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
id|ID platby|long
[result](#result)|Stav požadavku| Objekt