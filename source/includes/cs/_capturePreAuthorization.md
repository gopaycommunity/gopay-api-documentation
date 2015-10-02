##Stržení předautorizované platby
Pomocí volání je možné strhnout předautorizaci finančních prostředků dříve vytvořené
[předautorizované platby](#předautorizovaná-platba).   
   
Podrobné informace k předautorizovaným platbám naleznete v [centru nápovědy](https://help.gopay.com/cs/s/hV).

> Request

```shell
curl -v https://gw.sandbox.gopay.com/api/payments/payment/3000006542/capture \
-X "POST" \
-H "Accept: application/json" \
-H "Content-Type:application/x-www-form-urlencoded"\
-H "Authorization: Bearer AAArt6RuTM69kX6UUGZ6p9hyMPrTUVXmMDdkC4BNnQvQcbNyUTvQtCv45R969"
```
```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://gw.sandbox.gopay.com/api/payments/payment/".$id."/capture");
//nutno predat id platby pro kterou m byt strzena autorizace
curl_setopt($ch, CURLOPT_HTTPHEADER, 
  array('Accept: application/json',
        'Content-Type: application/x-www-form-urlencoded',
        'Authorization: Bearer ' . $token));
//nutno predat token vytvoreny ve scope=payment-all
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, false);

$result = curl_exec($ch);
?>
```
###Request
```POST /api/payments/payment/{id}/capture```

###Hlavička požadavku

Název parametru | Popis parametru | Povinný
----------------|-----------------|--------
Accept|application/json|ANO
Content-Type|application/x-www-form-urlencoded|ANO
Authorization|Bearer [```<access-token>```](#přístupový-token)|ANO

> Response

```json
{ 
 "id":3000006542,
 "result":"FINISHED"
}
```

###Response

Název parametru|Popis parametru|Datový typ
---------------|---------------|----------
id|ID platby|long
[result](#result)|Objekt popisující stav požadavku| Objekt
