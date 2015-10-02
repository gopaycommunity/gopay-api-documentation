##Opakování platby (na vyžádání)

Pomocí požadavku je možné opakovat platbu na základě dříve založené opakované platby v
režimu ```ON_DEMAND```. Opakováním v tomto režimu je založena následná platba v libovolné částce. O provedení
platby je prodejní místo informováno formou notifikace o změně stavu platby.
   
Podrobné informace k provádění opakovaných plateb naleznete v našem [centru nápovědy](https://help.gopay.com/cs/s/hT).

```shell
curl - v https://gw.sandbox.gopay.com/api/payments/payment/3000006542/create-recurrence\
-X "POST" \
-H "Accept: application/json" \
-H "Content-Type:application/json" \
-H "Authorization: Bearer AAArt6RuTM69kX6UUGZ6p9hyMPrTUVXmMDdkC4BNnQvQcbNyUTvQtCv45R969" \
-d'{
    "amount":"500",
    "currency":"CZK",
    "order_number":"002”,
    "order_description":"pojisteni02",
    "items":[{"name":"item01","amount":"500"}],
    "additional_params":[{
                          "name":"invoicenumber",
                          "value":"2015001004"
                        }]
}'
```
```php
<?php
$ch = curl_init();

$data = array(
    'amount' => '500',
    'currency' => 'CZK',
    'order_number' => '002',
    'order_description' => 'pojisteni02',
    'items' => array(
      array('name' => 'item01', 'amount' => '500')
    ),
    'additional_params' => array(
      array('name' => 'invoicenumber', 'value' => '2015001004')
    )
);

$data_send = json_encode($data);

curl_setopt($ch, CURLOPT_URL, "https://gw.sandbox.gopay.com/api/payments/payment/".$id."/create-recurrence");
//nutno predat id refundovane platby
curl_setopt($ch, CURLOPT_HTTPHEADER,
  array('Accept: application/json',
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token));
//nutno predat token vytvoreny ve scope=payment-all
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_send);

$result = curl_exec($ch);
?>
```
###Request

```POST /api/payments/payment/{id}/create-recurrence```

###Hlavička požadavku

Název parametru | Popis parametru | Povinný
----------------|-----------------|--------
Accept|application/json|ANO
Content-Type|application/json|ANO
Authorization|Bearer [```<access-token>```](#přístupový-token)|ANO

###Tělo požadavku

Název parametru|Popis parametru|Povinný|Datový typ
---------------|---------------|-------|-------
amount|Částka|ANO|long > 0
[currency](#currency)|Určuje měnu platby, formát měny odpovídá [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|ANO|string, nabývající hodnot viz [currency](#currency)
order_number|ID objednávky|Identifikace objednávky v rámci prodejního místa|string, pouze alfanumerické znaky (128 znaků)
order_description|Popis objednávky|ANO|string, pouze alfanumerické znaky (256 znaků)
[items](#items)|Detailně rozepsané jednotlivé položky objednávky|ANO|Objekt
[additional_params](#additional_params)|Doplňkové parametry platby|NE|Objekt

> Response

```json
{
"id":3000006621,
"parent_id":3000006542,
"order_number":"002",
"state":"CREATED",
"amount":1000,
"currency":"CZK",
"payment_instrument":"PAYMENT_CARD",
"payer": {
         "contact":{"first_name":"Zbynek",
                    "last_name":"Zak",
                    "email":" zbynek.zak@gopay.cz",
                    "phone_number":"+420777456123",
                    "city":"C.Budejovice",
                    "street":"Plana 67",
                    "postal_code":"37301",
                    "country_code":"CZE"
          }
},
"target":{"type":"ACCOUNT",
         "goid":8123456789
        },
"additional_params":[{"name":"invoicenumber","value":"2015001004"}],
"lang":"cs",
"gw_url":"https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF"
}
```

###Response 
  
Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
id|ID platby|long
parent_id|ID zakládající platby|long
order_number|ID objednávky|string, pouze alfanumerické znaky (128 znaků)
[state](#stavy-plateb)|Stav platby|Objekt
amount|Částka v haléřích|long > 0
[currency](#currency)|Určuje měnu platby, formát měny odpovídá [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|string, nabývající hodnot viz [currency](#currency)
[payment_instrument](#payment_instrument)| Kód zvolené platební metody | string, nabývající hodnot viz [payment_instrument](#payment_instrument)
[payer](#payer)| Objekt popisující plátce platby|Objekt
[target](#target)| Objekt popisující příjemce platby|Objekt
[additional_params](#additional_params)| Volitelné parametry platby|Pole objektů
[lang](#lang)|Jazyk platby|string, nabývající hodnot viz [lang](#lang)
gw_url|URL pro inicializaci platební brány|string