#Objects
Description of each object used within the communication with the payment gateway. 

##payer
Definition of the payer or the payment

```json
 {
   "allowed_payment_instruments":["PAYMENT_CARD", "BANK_ACCOUNT"],
   "default_payment_instrument":"BANK_ACCOUNT",
   "default_swift":"GIBACZPX",
   "allowed_swifts":["FIOBCZPP","BREXCZPP"],
   "contact": {}
 }
```

Parameter name|Parameter description| Data´s type
---------------|---------------|----------
[allowed_payment_instruments](#payment_instrument)|Array of allowed payment methods|string, can gain values of [payment_instrument](#payment_instrument)
[default_payment_instrument](#payment_instrument)|Preferred payment method|string, can gain values of [payment_instrument](#payment_instrument)
[default_swift](#swift)|Preferred bank if default_payment_instrument is set to BANK_ACCOUNT, set by SWIFT code|string, can gain values of [SWIFT](#swift)
[allowed_swifts](#swift)|Array of allowed bank codes| string, can gain values of [SWIFT](#swift)
[contact](#contact)|Customer´s data|Object


##contact
Customer´s information

```json
{
   "first_name":"Zbynek",
   "last_name":"Zak",
   "email":"test@test.cz",
   "phone_number":"+420777456123",
   "city":"C.Budejovice",
   "street":"Plana 67",
   "postal_code":"373 01",
   "country_code":"CZE"
}
```

Parameter name|Parameter description| Data´s type
---------------|---------------|-------
first_name|First name|string, 256 characters
last_name|Last name|string, 256 characters
email|E-mail|string, 128 characters
phone_number|Phone number|string 128 characters
city|City|string, 128 characters
street|Street|string, 128 characters
postal_code|Postal code|string 16 characters
country_code|Country code| string [ISO 3166-1 alpha-3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)

##target
Identification of the payee

```json
{
  "type":"ACCOUNT",
  "goid":"8123456789"
}
```

Parameter name|Parameter description| Data´s type
---------------|---------------|-------
type|Description of payee|string, set to ACCOUNT
goid|Unique identifier of an e-shop in the payment gateway system|long

##items
Each item of the order and its price


```json
[
   {"count":"2","name":"item01","amount":"500"},
   {"count":"...",name":"...","amount":"..."}
]
```

Parameter name|Parameter description| Data´s type
---------------|---------------|-------
count|Number of items| long > 0
name|Product name|string, alphanumeric characters (256 characters)
amount|Product price| long, positive or negative integers


##callback
Definition of callback and notification URL

```json
{
   "return_url":"http://www.eshop.cz/return",
   "notification_url":"http://www.eshop.cz/notify"
}
```

Parameter name|Parameter description| Data´s type
---------------|---------------|-------
return_url|URL address for return to e-shop|string
notification_url|URL address for sending  asynchronous notification in the case of changes in the payment status|string


##additional_params
Additional parameters of the payment

```json
[
   {"name":"invoicenumber","value":"2015001003"},
   {"name":"...","value":"..."}
]
```

Parameter name|Parameter description| Data´s type
---------------|---------------|-------
name|Parameter name|string
value|Value of optional parameter|string


##recurrence
Setting of recurring payment


> Recurring each seventh day

```json
{
  "recurrence_cycle":"DAY",
  "recurrence_period":"7",
  "recurrence_date_to":"2015-12-31"
}
```

> Recurring each third day

```json
{
  "recurrence_cycle":"DAY",
  "recurrence_period":"3",
  "recurrence_date_to":"2015-12-31"
}
```

> Recurring each second month

```json
{
  "recurrence_cycle":"MONTH",
  "recurrence_period":"2",
  "recurrence_date_to":"2015-12-31"
}
```


Parameter name|Parameter description| Data´s type
---------------|---------------|-------
[recurrence_cycle](#recurrence_cycle)|Time period of recurring|string, can gain values see [recurrence_cycle](#recurrence_cycle)
recurrence_period|Recurring period of recurring payment| long
recurrence_date_to|The period of validity recurring payment| string yyyy-mm-dd
recurrence_state|Describes state of recurring payment| string, can gain values REQUESTED, STARTED, STOPPED 

##groups
Name of every group corresponds to group [codes](#group-codes)

Parameter name|Parameter description|
---------------|---------------
label| Object that contains localised name of payment group
cs | Czech name of payment group

##group-codes
Names of payment method groups

```json
"groups": {
        "card-payment": {
            "label": {
                "cs": "Platební karta"
            }
        },
        "bank-transfer": {
            "label": {
                "cs": "Bankovní platba"
            }
        },
        "wallet": {
            "label": {
                "cs": "Elektronické peněženky"
            }
        },
        "others": {
            "label": {
                "cs": "Ostatní"
            }
        }
    }
```

Group name|Group description|
-------------|--------------
card-payment| Payment card payments
bank-transfer| Bank transfers
wallet| E-wallet payments
others| Other payment methods

##enabledPaymentInstruments  
Name of every object coresponds to [payment method codes](#payment_instrument)

```json
 "enabledPaymentInstruments": {
        "PAYMENT_CARD": {
            "label": {
                "cs": "Platební karta"
            },
            "image": {
                "normal": "https://gate.gopay.cz/images/checkout/payment_card.png",
                "large": "https://gate.gopay.cz/images/checkout/payment_card@2x.png"
            },
            "currencies": [
                "CZK",
                "EUR"
            ],
            "group": "card-payment",
            "enabledSwifts": null
        },
        "BANK_ACCOUNT": {
            "label": {
                "cs": "Bankovní platba"
            },
            "image": {
                "normal": "https://gate.gopay.cz/images/checkout/bank_account.png",
                "large": "https://gate.gopay.cz/images/checkout/bank_account@2x.png"
            },
            "currencies": [
                "CZK",
                "EUR"
            ],
            "group": "bank-transfer",
            "enabledSwifts": {
                "GIBACZPX": {
                    "label": {
                        "cs": "Česká spořitelna"
                    },
                    "image": {
                        "normal": "https://gate.gopay.cz/images/checkout/GIBACZPX.png",
                        "large": "https://gate.gopay.cz/images/checkout/GIBACZPX@2x.png"
                    },
                    "currencies": {
                        "CZK": {
                            "isOnline": true
                        }
                    }
                },
                "OTHERS": {
                    "label": {
                        "cs": "Jiná banka"
                    },
                    "image": {
                        "normal": "https://gate.gopay.cz/images/checkout/OTHERS.png",
                        "large": "https://gate.gopay.cz/images/checkout/OTHERS@2x.png"
                    },
                    "currencies": {
                        "CZK": {
                            "isOnline": false
                        },
                        "EUR": {
                            "isOnline": false
                        }
                    }
                }
            },
            ...
        }
```

Parameter name|Parameter description|
---------------|--------------
label| Object that contains localised name of payment method
image| Logo of payment method avaliable in two formats - normal, large 
[currencies](#currency)| Currencyes supported by peyment method coresponds to [currency](#currency)
[group](#groups)| Group into which payment method belongs, coresponds to [groups](#groups)
[enabledSwifts](#swift)| Each sub object represents allowed banks for payment method. It is set only for BANK_ACCOUNT


##enabledSwifts   
Name of each object coresponds to [SWIFT](#swift) codes 

```json
  "GIBACZPX": {
        "label": {
            "cs": "Česká spořitelna"
        },
        "image": {
            "normal": "https://gate.gopay.cz/images/checkout/GIBACZPX.png",
            "large": "https://gate.gopay.cz/images/checkout/GIBACZPX@2x.png"
        },
        "currencies": {
            "CZK": {
                "isOnline": true
            }
        }
    },
    "OTHERS": {
        "label": {
            "cs": "Jiná banka"
        },
        "image": {
            "normal": "https://gate.gopay.cz/images/checkout/OTHERS.png",
            "large": "https://gate.gopay.cz/images/checkout/OTHERS@2x.png"
        },
        "currencies": {
            "CZK": {
                "isOnline": false
            },
            "EUR": {
                "isOnline": false
            }
        }
    },
    ...
```

Parameter name|Parameter description|
---------------|---------------
label| Object that contains localised name of bank 
image| Logo of bank avaliable in two formats - normal, large 
[currencies](#currencies)| Currencyes supported by peyment method coresponds to [currency](#currency)
isOnline| State that symbolise if bank support online bank transfers