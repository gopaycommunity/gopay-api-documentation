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
   "contact": {...}
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
   "email":"zbynek.zak@gopay.cz",
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
   {"name":"item01","amount":"500"},
   {"name":"item02","amount":"500"},
   {...}
]
```

Parameter name|Parameter description| Data´s type
---------------|---------------|-------
name|Product name|string, alphanumeric characters (256 characters)
amount|Product price| long > 0


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
[{
    "name":"invoicenumber",
    "value":"2015001003"
  },
  {...}
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