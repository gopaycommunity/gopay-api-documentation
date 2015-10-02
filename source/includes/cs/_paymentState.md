#Další platební operace

##Stav platby
Funkcionalita stav platby umožní prodejnímu místu zjistit jaký je aktuální stav dříve vytvořené platby. Standardně je stav platby dotazován po doručení notifikace o změně stavu platby.
   
Podrobnější informace k dotazu na stav platby naleznete v našem [centru nápovědy](https://help.gopay.com/cs/s/h3).

> Request

```shell
curl -v https://gw.sandbox.gopay.com/api/payments/payment/3000006542 \
-X "GET" \
-H "Accept: application/json" \
-H "Content-Type: application/x-www-form-urlencoded" \
-H "Authorization: Bearer AAArt6RuTM69kX6UUGZ6p9hyMPrTUVXmMDdkC4BNnQvQcbNyUTvQtCv45R969"
```

```php
<?php
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, "https://gw.sandbox.gopay.com/api/payments/payment/".$id);
//nutno doplnit id dotazovane platby
curl_setopt($ch, CURLOPT_HTTPHEADER, 
  array('Accept: application/json',
        'Content-Type: application/x-www-form-urlencoded',
        'Authorization: Bearer ' . $token));
//nutno nejprve ziskat token vytvoreny ve scope=payment-all
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);
?>
```

###Request

```GET /api/payments/payment/{id}```

###Hlavička požadavku

Název parametru | Popis parametru | Povinný
----------------|-----------------|--------
Accept|application/json|ANO
Content-Type|application/x-www-form-urlencoded|ANO
Authorization|Bearer [```<access-token>```](#přístupový-token)|ANO

> Response.

```json
{
"id":3000006542,
"order_number":"001",
"state":"CREATED",
"amount":1000,
"currency":"CZK",
"payment_instrument":"PAYMENT_CARD",
"payer":{
         "contact":{"first_name":"Zbynek",
                    "last_name":"Zak",
                    "email":" zbynek.zak@gopay.cz ",
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
"recurrence":{"recurrence_cycle":"DAY",
              "recurrence_period":7,
              "recurrence_date_to":"2015-12-31",
              "recurrence_state":"REQUESTED"
            },
"additional_params":[{"name":"invoicenumber",
                      "value":"2015001003"
                    }],
"lang":"cs",
"gw_url":"https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF"
}
```

###Response

Název parametru|Popis parametru| Datový typ
---------------|---------------|-----------
id|ID platby|long
order_number|Identifikace objednávky v rámci prodejního místa|string, pouze alfanumerické znaky (128 znaků)
[state](#stavy-plateb)|Stav platby| string, nabývající hodnot viz [state](#stavy-plateb)
amount|Částka v haléřích|long > 0
[currency](#currency)|Měna platby| string, nabývající hodnot viz [currency](#currency)
[payment_instrument](#payment_instrument)| Kód zvolené platební metody | string, nabývající hodnot viz [payment_instrument](#payment_instrument)
[payer](#payer)|Objekt popisující plátce platby | Objekt
[target](#target)| Objekt popisující příjemce platby | Objekt
[recurrence](#recurrence)| Objekt popisující opakovanou platbu| Objekt
[additional_params](#additional_params)|Volitelné parametry platby|Pole objektů
[lang](#lang)|Jazyk platby|string, nabývající hodnot viz [lang](#lang)
gw_url|URL pro inicializaci platební brány|string