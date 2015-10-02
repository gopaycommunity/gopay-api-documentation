## Recurring payment
Recurring payment is a functionality that allows accepting the payment via credit cards from the customer on a regular basis. 
Establishment of the payment is extended to recurrence parameter ```recurrence```. After the successful establishment of the initiation payment, payments are made automatically, e.g. on daily basis ```DAY```  or on demand  ```ON_DEMAND```.

Another information about recurring payments you can find in our [help center](https://help.gopay.com/en/s/5).

In the case of the on-demand payment, the subsequent payment is made by API calling [recurrence payment](#recurrence-payment---on-demand)

> Request

```shell
curl -v https://gw.sandbox.gopay.com/api/payments/payment \
-X "POST" \
-H "Accept: application/json" \
-H "Content-Type: application/json" \
-H "Authorization: Bearer xzZnu3YnAHRk298EsmyttFQMcbCcvmwTKK5hrJx2aGG8ZnFyBJhAvFWNmbWVSD7p" \
-d '{
      "payer": {
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
      "target":{"type":"ACCOUNT",
                 "goid":"8123456789"
               },
      "amount":"1000",
      "currency":"CZK",
      "order_number":"001",
      "order_description":"pojisteni01",
      "items":[{"name":"item01","amount":"500"},
               {"name":"item02","amount":"500"}
              ],
      "recurrence":{"recurrence_cycle":"DAY",
                    "recurrence_period":"7",
                    "recurrence_date_to":"2015-12-31"},
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
      array('name' => 'item01','amount' => '500'),
      array('name' => 'item02','amount' => '500')
  ),
  'recurrence' => array(
      'recurrence_cycle' => 'DAY',
      'recurrence_period' => "7",
      'recurrence_date_to' => '2015-12-31'
  ),
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
Parameter name | Parameter description | Required| Data´s type
----------------|-----------------|---------|--------
[payer](#payer)|Object describing the payer of the payment|NO| Object
[target](#target)|Object describing the target of the payment (payee) 	|YES| Object
amount|Amount in cents|YES| long
[currency](#currency)|Specifies the currency payment, currency format corresponds to [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|YES|string, can gain values see [currency](#currency)
order_number|Order identification within the point of sale|YES|string, alphanumeric characters only (128 characters)
order_description| 	Description of goods/service|YES|string, alphanumeric characters only (256 characters)
[items](#items)|Itemized in detail each item of the order|YES|Object array
[recurrence](#recurrence)|Object describing the recurring payment|NO| Object
[additional_params](#additional_params)|Additional parameters of the payment|NO|Object array
[callback](#callback)|Callback URL and Notification URL for change in the payment status|YES|Object


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
                      "email":" zbynek.zak@gopay.cz",
                      "phone_number":"+420777456123",
                      "city":"C.Budejovice",
                      "street":"Plana 67",
                      "postal_code":"37301",
                      "country_code":"CZE"
                    }
          },
    "target":{"type":"ACCOUNT","goid":8123456789},
    "recurrence":{"recurrence_cycle":"DAY",
                  "recurrence_period":7,
                  "recurrence_date_to":"2015-12-31",
                  "recurrence_state":"REQUESTED"
                },
    "additional_params":[{"name":"invoicenumber",
                          "value":"2015001003"
                        }],
    "lang":"en",
    "gw_url":" https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF "
}
```
###Response 
Parameter name|Parameter description| Data´s type
---------------|---------------|-------
id|Payment ID|long
order_number|Order ID| string, alphanumeric characters only (128 characters)
[state](#payment-status)| Payment status| Object
amount| 	Amount in cents |long > 0
[payer](#payer)| Object describing the payer of the payment| Object
[target](#target)| Object describing the target of the payment (payee) | Object
[recurrence](#recurrence)| Object describing the recurring payment| Object
[additional_params](#additional_params)| Additional parameters of payment| Object array
[lang](#lang)|Language of payment| string, can gain values see [lang](#lang)
gw_url|URL to initiate the payment gateway| string

# Initiation of the payment gateway
To initiate the payment gateway, it is possible to use HTML form using javascript
initiates the payment gateway.  