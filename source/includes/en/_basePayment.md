# Establishment of payment

Before initiating the payment gateway, it is necessary to establish the payment. In effect of calling, we repeat parameters of the payment including the parameter ```gw_url```, which you can initiate to [inline](#inline-option) or [redirect](#redirect-option) payment gateway.  
   
The payee of the payment is identified by ```goid``` in object [target](##target). You can get it, when you integrate the payment gateway for identification of specific point of sale, e.g. [www.goshop.cz](http://www.goshop.cz).
<aside class='notice'>
If you do not have GoID, contact us on e-mail integrace@gopay.cz. 
</aside>  
Within the payment, the paying party is described by an object [payer](##payer),  
which identifies the payer and determines the set of permitted payment method,  
including the default method. 

## Standard payment

The payment is determined for paying of an order by credit card, bank transfer, GoPay account and other payment methods.  

For further information about all steps needed to make base payment check our [help center](https://help.gopay.com/en/s/ey).

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
      "lang":"en"
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
  'lang' => 'en'
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
Authorization| Bearer [```<access-token>```](#access-token)|YES

###Body of request
Parameter name| Parameter description | Required | Data´s type
----------------|-----------------|---------|-----------
[payer](#payer)|The object describing the payer of the payment|NO| Object
[target](#target)|The object describing the target of the payment (payee)|YES| Object
amount|Amount in cents|YES| long > 0
[currency](#currency)|Specifies the currency of payment, currency format corresponds to [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|YES| string
order_number|Identification of the order within the point of sale|YES| string, alphanumeric characters only (128 characters)
order_description|Description of goods / service|YES|string, alphanumeric characters only (256 characters)
[items](#items)|Itemized in detail each item of the order|YES| Object
[callback](#callback)|Callback URL for processing of the payment result / Notification URL for processing of change of payment status|YES| Object
[additional_params](#additional_params)|Additional payment parameters|No| According to object
[lang](#lang)|Parameters defines language of the payment|NO| string, can gain values see [lang](#lang)

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
  "lang":"en",
  "gw_url":" https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF"
}  
```                          
                
###Response 
  
Parameter name|Parameter description| Data´s type
---------------|---------------|-----------
id|Payment ID|long
order_number|Identification of order| string, alphanumeric characters only (128 characters)
[state](#payment-status)|Payment status| string, can gain values see [state](#payment-status)
amount|Amount in cents| long > 0
[currency](##currency)|Specifies the currency of payment| string, can gain values see [currency](##currency)
[payer](#payer)| Object describing the payer of the payment| Object
[target](#target)| Object describing the target of the payment (payee)| Object
[additional_params](#additional_params)|Additional parameters of payments| Object array
[lang](#lang)|Parameter defines payment language| string, can gain values see [lang](#lang)
gw_url|URL for initiation of the payment gate|string

<aside class='notice'>
For creating of the payment, you need to use a token created in scope of payment-create.
</aside>