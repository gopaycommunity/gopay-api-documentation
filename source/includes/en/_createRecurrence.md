##Recurring payment on demand

The functionality allows you to recur the payment based on previously established recurring payment
```ON_DEMAND``` mode. Recurring in this mode establishes the subsequent payment. The point of sale is informed through the notification about the change in the payment status.

More information about reccuring payments you can find in [help center](https://help.gopay.com/en/s/5).

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
//pass id of payment
curl_setopt($ch, CURLOPT_HTTPHEADER,
  array('Accept: application/json',
        'Content-Type: application/json',
        'Authorization: Bearer ' . $token));
//get token first at scope=payment-all
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_send);

$result = curl_exec($ch);
?>
```

###Request

```POST /api/payments/payment/{id}/create-recurrence```

###Header of request

Parameter name|Parameter description| Required|
----------------|-----------------|--------
Accept|application/json|YES
Content-Type|application/json|YES
Authorization|Bearer [```<access-token>```](#access-token)|YES

###Body of request

Parameter name|Parameter description| Required| Data´s type
---------------|---------------|-------|-------
amount|Amount|YES|long > 0
[currency](#currency)|Specifies the currency of the payment, currency format corresponds to[ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|YES|string, can gain values see [currency](#currency)
order_number|Order ID| 	Order identification within the point of sale|string, alphanumeric characters only (128 characters)
order_description| 	Description of goods/service|YES|string, alphanumeric characters only (256 characters)
[items](#items)|Itemized in detail of each item of the order|YES|Object
[additional_params](#additional_params)|Additional parameters of the payment|NO|Object

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
 "lang":"en",
 "gw_url":"https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF"
}
```

###Response 
  
Parameter name|Parameter description| Data´s type
---------------|---------------|-------
id|Payment ID|long
parent_id|Parent payment ID|long
order_number|Order ID|string, alphanumeric characters only (128 characters)
[state](#payment-status)|Payment status|Object
amount|Amount in cents|long > 0
[currency](#currency)|Specifies the currency payment, currency format corresponds to [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)|string, can gain values see [currency](#currency)
[payment_instrument](#payment_instrument)| Code of chosen payment method | string can gain values see [payment_instrument](#payment_instrument)
[payer](#payer)| Object describing the payer of the payment|Object
[target](#target)| Object describing the target of the payment (payee)|Object
[additional_params](#additional_params)|  Additional parameters of the payment|Object arrays
[lang](#lang)|Payment language|string, can gain values see [lang](#lang)
gw_url|URL for initiation of the payment gateway|string