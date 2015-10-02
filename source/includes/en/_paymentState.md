#Other payment operations

##Status of the payment
The payment status funcionality allows the point of sale to determine, whether the payment was successfully paid or not. 
By default, the payment status is queried after receiving of a notification about the payment status change.

More information about payment state you can find in [help center](https://help.gopay.com/en/s/3).

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
//pass id of payment 
curl_setopt($ch, CURLOPT_HTTPHEADER, 
  array('Accept: application/json',
        'Content-Type: application/x-www-form-urlencoded',
        'Authorization: Bearer ' . $token));
//get token first at scope=payment-all
curl_setopt($ch, CURLOPT_HTTPGET, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);
?>
```

###Request

```GET /api/payments/payment/{id}```

###Header of request

Parameter name|Parameter description| Required
----------------|-----------------|--------
Accept|application/json|YES
Content-Type|application/x-www-form-urlencoded|YES
Authorization|Bearer [```<access-token>```](#access-token)|YES

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
  "lang":"en",
  "gw_url":"https://gw.sandbox.gopay.com/gw/v3/bCcvmwTKK5hrJx2aGG8ZnFyBJhAvF"
}
```

###Response

Parameter name|Parameter description|Data´s type
---------------|---------------|-----------
id|Payment ID|long
order_number|Order identification within the point of sale|string, alphanumeric characters only (128 characters)
[state](#payment-status)|Payment status| string, can gain values see [state](#payment-status)
amount|Amount in cents|long > 0
[currency](#currency)|Payment currency| string, can gain values see [currency](#currency)
[payment_instrument](#payment_instrument)| Code of chosen payment method | string, can gain values see [payment_instrument](#payment_instrument)
[payer](#payer)|Object describing the payer of payment | Object
[target](#target)| Object describing the target of payment (payee) | Object
[recurrence](#recurrence)| Object describing the recurring payment| Object
[additional_params](#additional_params)|Additional parameters of the payment|Object array
[lang](#lang)|Payment language|string, can gain values see [lang](#lang)
gw_url|URL for redirecting to the payment gateway|string