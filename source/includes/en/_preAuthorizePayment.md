## Pre-authorized payment

Via the credit card, you can block the payment for 4 days using the pre-authorization. Blocked funds can be received by API calling [transaction is completed via pre-autorized payment](#transaction completed via pre-authorized payment)
Pre-authorized payment can be created by setting of a parameter ```preauthorization``` to ```true``` .    
   
Additional information about pre-authorized payments you can find in our [help center](https://help.gopay.com/en/s/7).

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
//get token first
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_send);

$result = curl_exec($ch);
?>
```

###Request
```POST /api/payments/payment```

###Header of request
Parameter name | Parameter description | Required
----------------|-----------------|--------
Accept|application/json|YES
Content-Type|application/json|YES
Authorization|Bearer [```<access-token>```](#access-token)|YES

###Body of request
Parameter name | Parameter description | Required | Data´s type
----------------|-----------------|---------|--------
[payer](#payer)|Object describing the payer of the payment|NO| Object
[target](#target)|Object describing the target of the payment (payee)|YES| Object
amount| Amount in cents|YES| long > 0
[currency](#currency)|Specifies the currency of the payment, currency format corresponding to [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|YES|string, can gain values see [currency](#currency)
order_number|Order identification within the point of sale|YES| string, alphanumeric characters only (128 characters)
order_description|Description of goods / service|YES| string, alphanumeric characters only (256 characters)
[items](#items)|Itemized in detail each item of the order|YES| Object array
preauthorization|Activation of pre-authorized payment|NO| bool
[additional_params](#additional_params)|Additional parameters of the payment|NO| Object array
[callback](#callback)|Callback URL and notification URL for change in the payment status|YES| Object

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
  "lang":"en",
  "gw_url":" https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF "
}
```

###Response
  
Parameter name|Parameter description|Data´s type
---------------|---------------|-------
id|Payment ID|long
order_number| order ID| string, alphanumeric characters only (128 characters)
[state](#payment-status)|Payment status| string, can gain values see[state](#payment-status)
amount|Amount in cents|long > 0
[payer](#payer)| Object describing the payer of the payment| Object
[target](#target)| Object describing the target of the payment (payee)| Object
[preauthorization](#preauthorization)| Object describing the pre-authorization| Object
[additional_params](#additional_params)| Additional parameters of the payment| Object array
[lang](#lang)|Payment language| string, can gain values see [lang](#lang)
gw_url|URL to initiate the payment gateway| string