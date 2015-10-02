## Předautorizovaná platba

Předautorizace umožní při platbě kartou zablokovat po dobu 4 dnů prostředky na účtu zákazníka. Blokované prostředky lze následně strnout pomocí API volání [stržení předautorizované platby](#stržení-předautorizované-platby). Předautorizovanou platbu založíte nastavením parametru ```preauthorization``` na ```true``` .   
   
Podrobný popis kroků nutných k provedení předautorizované platby naleznete v [centru nápovědy](https://help.gopay.com/cs/s/hV).

> Request

```shell
curl -v https://gw.sandbox.gopay.com/api/payments/payment \
-X "POST" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer xzZnu3YnAHRk298EsmyttFQMcbCcvmwTKK5hrJx2aGG8ZnFyBJhAvFWNmbWVSD7p" \
-d '{
    "payer": {
              "contact":{
                           "first_name":"Zbynek",
                           "last_name":"Zak",
                           "email":"zbynek.zak@gopay.cz",
                           "phone_number":"+420777456123",
                           "city":"C.Budejovice",
                           "street":"Plana 67",
                           "postal_code":"373 01",
                           "country_code":"CZE"
                          }
              },
    "target": {"type":"ACCOUNT",
               "goid":"8123456789"
              },
    "amount":"1000",
    "currency":"CZK",
    "order_number":"001",
    "order_description":"pojisteni01",
    "items":[{"name":"item01","amount":"500"},
             {"name":"item02","amount":"500"}],
    "preauthorization":"true",
    "additional_params":[{"name":"invoicenumber",
                          "value":"2015001003"
                        }],
    "callback":{
                "return_url":"http://www.eshop.cz/return",
                "notification_url":"http://www.eshop.cz/notify"
               }
}'
```
```php
<?php
$ch = curl_init();

$data = array(
  'payer' => array(
      'contact' => array(
          'first_name' => 'Zbynek',
          'last_name' => 'Zak',
          'email' => 'zbynek.zak@gopay.cz',
          'phone_number' => '+420777456123',
          'city' => 'C.Budejovice',
          'street' => 'Plana 67',
          'postal_code' => '373 01',
          'country_code' => 'CZE',
      ),
  ),
  'target' => array('type' => 'ACCOUNT',
                    'goid' => '8123456789'),
  'amount' => '1000',
  'currency' => 'CZK',
  'order_number' => '001',
  'order_description' => 'pojisteni01',
  'items' => array(
      array('name' => 'item01', 'amount' => '500'),
      array('name' => 'item02', 'amount' => '500')
  ),
  'preauthorization' => 'true',
  'additional_params' => array(
       array('name' => 'invoicenumber', 'value' => '2015001003')
  ),
  'callback' => array(
      'return_url' => 'http://www.eshop.cz/return',
      'notification_url' => 'http://www.eshop.cz/notify'
  )
);

$data_send = json_encode($data);

curl_setopt($ch, CURLOPT_URL, "https://gw.sandbox.gopay.com/api/payments/payment");
curl_setopt($ch, CURLOPT_HTTPHEADER, 
  array('Accept: application/json',
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token));
//mejprve je nutne ziskat token
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_send);

$result = curl_exec($ch);
?>
```

###Request
```POST /api/payments/payment```

###Hlavička požadavku
Název parametru | Popis parametru | Povinný
----------------|-----------------|--------
Accept|application/json|ANO
Content-Type|application/json|ANO
Authorization|Bearer [```<access-token>```](#přístupový-token)|ANO

###Tělo požadavku
Název parametru | Popis parametru | Povinný | Datový typ
----------------|-----------------|---------|--------
[payer](#payer)|Objekt popisující plátce platby|NE| Objekt
[target](#target)|Objekt popisující příjemce platby|ANO| Objekt
amount| Částka v haléřích|ANO| long > 0
[currency](#currency)|Určuje měnu platby, formát měny odpovídá [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|ANO|string, může nabývat hodnot viz [currency](#currency)
order_number|Identifikace objednávky v rámci prodejního místa|ANO| string, pouze alfanumerické znaky (128 znaků)
order_description|Popis objednávky|ANO| string, pouze alfanumerické znaky (256 znaků)
[items](#items)|Detailně rozepsané jednotlivé položky objednávky|ANO| Pole objektů
preauthorization|Aktivace předautorizované platby|NE| bool
[additional_params](#additional_params)|Doplňkové parametry platby|NE| Pole objektů
[callback](#callback)|Návratové URL a notifikační URL pro oznámení změny stavu platby|ANO| Objekt

> Response

```json
{
  "id":3000006542,
  "order_number":"001",
  "state":"CREATED",
  "amount":1000,"currency":"CZK",
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
  "preauthorization":{"requested":true,
                      "state":"REQUESTED"
                    },
  "additional_params":[{"name":"invoicenumber",
                        "value":"2015001003"
                      }],
  "lang":"cs",
  "gw_url":" https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF "
}
```

###Response
  
Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
id|ID platby|long
order_number| ID objednávky| string, pouze alfanumerické znaky (128 znaků)
[state](#stavy-plateb)|Stav platby| string, může nabývat hodnot viz [state](#stavy-plateb)
amount|Částka v haléřích|long > 0
[payer](#payer)| Objekt popisující plátce platby| Objekt
[target](#target)| Objekt popisující příjemce platby| Objekt
[preauthorization](#preauthorization)| Objekt popisující předautorizaci| Objekt
[additional_params](#additional_params)| Volitelné parametry platby| Pole objektů
[lang](#lang)|Jazyk platby| string, může nabývat hodnot viz [lang](#lang)
gw_url|URL pro inicializaci platební brány| string