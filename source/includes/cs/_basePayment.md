# Založení platby

Před vyvoláním platební brány je nutné provést založení platby. Ve výsledku volání vám zopakujeme parametry platby spolu s parametrem ```gw_url```, který použijete pro inicializaci [inline](#inline-varianta) nebo [redirect](#redirect-varianta) platební brány.   
  
Příjemce platby je identifikován ```goid``` v objektu [target](##target). Získáte jej při integraci platební brány pro identifikaci konkrétního prodejního místa, např. [www.goshop.cz](http://www.goshop.cz).
<aside class='notice'>
Pokud ještě nemáte goid, kontaktujte nás na integrace@gopay.cz
</aside>
  
Platící strana je v rámci platby popsána objektem [payer](##payer), který identifikuje platícího, a případně určuje množinu povolených platebních metod, včetně metody defaultní.  

## Standardní platba
Platba je určena pro úhradu objednávky platební kartou, bankovním převodem, GoPay účtem a jinými platebními metodami.  

Podrobný popis kroků nutných pro provedení standardní platby naleznete v [centru nápovědy](https://help.gopay.com/cs/s/i4).

> Request

```shell
curl -v https://gw.sandbox.gopay.com/api/payments/payment \
-X "POST" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer xzZnu3YnAHRk298EsmyttFQMcbCcvmwTKK5hrJx2aGG8ZnFyBJhAvFWNmbWVSD7p" \
-d '{
    "payer": {
                "default_payment_instrument":"BANK_ACCOUNT",
                "allowed_payment_instruments":["BANK_ACCOUNT"],
                "default_swift":"FIOBCZPP",
                "allowed_swifts":["FIOBCZPP","BREXCZPP"],
                "contact":{"first_name":"Zbynek",
                           "last_name":"Zak",
                           "email":"zbynek.zak@gopay.cz",
                           "phone_number":"+420777456123",
                           "city":"C.Budejovice",
                           "street":"Plana 67",
                           "postal_code":"373 01",
                           "country_code":"CZE"
                          }
              },
    "target": {
                "type":"ACCOUNT",
                "goid":"8123456789"
              },
    "amount":"1000",
    "currency":"CZK",
    "order_number":"001",
    "order_description":"pojisteni01",
    "items":[{"name":"item01","amount":"500"},
             {"name":"item02","amount":"500"}
            ],
    "additional_params":[{"name":"invoicenumber",
                          "value":"2015001003"
                        }],
    "callback":{
                "return_url":"http://www.eshop.cz/return",
                "notification_url":"http://www.eshop.cz/notify"
              },
    "lang":"cs"
}'
```

```php
<?php
$ch = curl_init();

$data = array(
  'payer' => array(
      'default_payment_instrument' => 'BANK_ACCOUNT',
      'allowed_payment_instruments' => array('BANK_ACCOUNT'),
      'default_swift' => 'FIOBCZPP',
      'allowed_swifts' => array('FIOBCZPP','BREXCZPP'),
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
  'additional_params' => array(
      array('name' => 'invoicenumber', 'value' => '2015001003')
  ),
  'callback' => array(
      'return_url' => 'http://www.eshop.cz/return',
      'notification_url' => 'http://www.eshop.cz/notify'
  ),
  'lang' => 'cs'
);

$data_send = json_encode($data);

curl_setopt($ch, CURLOPT_URL, "https://gw.sandbox.gopay.com/api/payments/payment");
curl_setopt($ch, CURLOPT_HTTPHEADER,
  array('Accept: application/json',
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token));
//nejprve je nutne ziskat token
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
Authorization| Bearer [```<access-token>```](#přístupový-token)|ANO

###Tělo požadavku
Název parametru | Popis parametru | Povinný | Datový typ
----------------|-----------------|---------|-----------
[payer](#payer)|Objekt popisující plátce platby|NE| Objekt
[target](#target)|Objekt popisující příjemce platby|ANO| Objekt
amount|Částka v haléřích|ANO| long > 0
[currency](#currency)|Určuje měnu platby, formát měny odpovídá [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|ANO| string
order_number|Identifikace objednávky v rámci prodejního místa|ANO| string, pouze alfanumerické znaky (128 znaků)
order_description|Popis objednávky|ANO|string, pouze alfanumerické znaky (256 znaků)
[items](#items)|Detailně rozepsané jednotlivé položky objednávky|ANO| Objekt
[callback](#callback)|Návratové URL a notifikační URL pro oznámení změny stavu platby|ANO| Objekt
[additional_params](#additional_params)|Doplňkové parametry platby|NE| Pole objektů
[lang](#lang)|Parametr definuje jazyk platby|NE| string, může nabývat hodnot viz [lang](#lang)

>Response

```json
{
  "id":3000006529,
  "order_number":"001",
  "state":"CREATED",
  "amount":1000,"currency":"CZK",
  "payer":{
           "default_payment_instrument":"BANK_ACCOUNT",
           "allowed_payment_instruments":["BANK_ACCOUNT"],
           "default_swift":"FIOBCZPP",
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
  "additional_params":[{"name":"invoicenumber",
                        "value":"2015001003"
                      }],
  "lang":"cs",
  "gw_url":" https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF"
}  
```                          
                
###Response 
  
Název parametru|Popis parametru| Datový typ
---------------|---------------|-----------
id|ID platby|long
order_number|ID objednávky| string, pouze alfanumerické znaky (128 znaků)
[state](#stavy-plateb)|Stav platby| string, může nabývat hodnot viz [state](#stavy-plateb)
amount|Částka v haléřích| long > 0
[currency](##currency)|Měna platby| string, může nabývat hodnot viz [currency](##currency)
[payer](#payer)| Objekt popisující plátce platby| Objekt
[target](#target)| Objekt popisující příjemce platby| Objekt
[additional_params](#additional_params)|Doplňkové parametry platby| Pole objektů
[lang](#lang)|Parametr definuje jazyk platby| string, může nabývat hodnot viz [lang](#lang)
gw_url|URL pro inicializaci platební brány|string

<aside class='notice'>
Pro vytvoření platby je nutné použít přístupový token vytvořený ve scope payment-create.
</aside>