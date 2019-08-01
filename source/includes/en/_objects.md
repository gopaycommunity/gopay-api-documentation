#Objects
Description of each object used within the communication with the payment gateway. 

##accounts
Information about electronic money account

```json
{
    "id": 100001660,
    "balance": 0,
    "currency": "EUR"
}
```

Název parametru|Popis parametru|Datový typ
---------------|---------------|----------
id| ID of account
balance| Balance of account
[currency](#currency)|Currency of payment, format corresponds to [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)

##address
Address

```json
{
  "street": "Planá 67",
  "postal_code": "37001",
  "city": "Planá",
  "country": "cz"
}
```
Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|----------
street| Street | string
postal_code| Postal code | string
city| City | string
country| Country code| string [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)

##payer
Definition of the payer or the payment

```json
 {
   "allowed_payment_instruments":["PAYMENT_CARD", "BANK_ACCOUNT"],
   "default_payment_instrument":"BANK_ACCOUNT",
   "default_swift":"GIBACZPX",
   "allowed_swifts":["FIOBCZPP","BREXCZPP"],
   "bank_account":{},
   "contact": {}
 }
```

Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|----------
[allowed_payment_instruments](#payment-instrument)|Array of allowed payment methods|string, can gain values of [payment_instrument](#payment-instrument)
[default_payment_instrument](#payment-instrument)|Preferred payment method|string, can gain values of [payment_instrument](#payment-instrument)
[default_swift](#swift)|Preferred bank if default_payment_instrument is set to BANK_ACCOUNT, set by SWIFT code|string, can gain values of [SWIFT](#swift)
[allowed_swifts](#swift)|Array of allowed bank codes| string, can gain values of [SWIFT](#swift)
[bank_account](#bank-account)|Bank account´s information|Object
[payment_card](#payment-card)|Payment card´s information|Object
[contact](#contact)|Customer´s data|Object
verify_pin|PIN for [identification payment](#identification-payment) purposes|String, 4 digits
allowed_card_token|Token for [identification payment](#identification-payment) purposes|String

##bank_account
Bank account´s information

```json
{
    "prefix":"670100",
    "account_number":"7654322",
    "bank_code":"0100",
    "account_name":"JAN NOVAK"
}
```
Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
iban|International bank account number|string, 50 characters
bic|Business identification code (SWIFT)|string, 11 characters
prefix|Bank account prefix|string, 64 characters
account_number|Bank account number|string, 128 characters
bank_code|Bank account code|string, 8 characters
account_name|Bank account name|string, 70 characters

##payment_card
Payment card´s information

```json
{
    "card_number":"444444******4448",
    "card_expiration":"1909",
    "card_brand":"VISA",
    "card_issuer_country":"CZE",
    "card_issuer_bank":"AIR BANK, A.S."
}
```
Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
card_number|Masked payment card´s number|string, 16 characters
card_expiration|Expiration date|string, 4 characters
card_brand|Payment card´s type|string, 50 characters
card_issuer_country|Country code of issuing bank|string, 3 characters
card_issuer_bank|Issuing bank|string, 80 characters
card_token|Token for [identification payment](#identification-payment) purposes|string
[3ds_result](#3ds-result)|3D Secure authorization's result for [identification payment](#identification-payment) purposes|string

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

Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
first_name|First name|string, 256 characters
last_name|Last name|string, 256 characters
email|E-mail|string, 128 characters
phone_number|Phone number with country code|string 128 characters
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

Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
type|Description of payee|string, set to ACCOUNT
goid|Unique identifier of an e-shop in the payment gateway system|long
email|E-mail (for purposes of [PSD2 API](#psd2-api) only)

##items
Each item of the order


```json
{
    "type":"ITEM", 
    "name":"obuv",
    "product_url":"https://www.eshop.cz/boty/lodicky", 
    "ean":1234567890123,
    "amount":119990,
    "count":1,
    "vat_rate":21
}
```

Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
[type](#type)|Type of row, for registration of sales|enum, can gain values see [type](#type)
product_url|URL address of the product|string, (512 characters)
ean|[EAN code of the product](https://cs.wikipedia.org/wiki/European_Article_Number)|varchar, (13 characters)
count|Number of items| long > 0
name|Product name|string, alphanumeric characters (256 characters)
amount|Total price of items in cents| long, positive or negative integers
[vat_rate](#vat-rate)|VAT rate, for registration of sales|can gain values see [vat_rate](#vat-rate)

##eet
Parameters for registration of sales

```json
{
    "celk_trzba":139951,
    "zakl_dan1":99165,
    "dan1":20825,
    "zakl_dan2":17357,
    "dan2":2604,
    "mena":"CZK"
}
```

Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
dic_poverujiciho| DIČ of the entrustment taxpayer| varchar
celk_trzba| The total amount| long in cents
zakl_nepodl_dph| The total amount of supplies exempt from VAT| long in cents
zakl_dan1| The total tax base amount, the basic VAT rate| long in cents
dan1| The total amount of VAT, the basic rate| long in cents
zakl_dan2| The total tax base amount with a first reduced rate of VAT| long in cents
dan2| The total VAT amount with a first reduced rate| long in cents
zakl_dan| The total tax base amount with a second reduced rate of VAT| long in cents
dan3| The total VAT amount with a second reduced rate| long in cents
cest_sluz| The total amount of the VAT regime for travel service| long in cents
pouzit_zboz1| The total amount of the VAT regime for the sale of used goods with a basic rate| long in cents
pouzit_zboz2| The total amount of the VAT regime for the sale of used goods with a first reduced rate|  long in cents
pouzit_zboz3| The total amount of the VAT regime for the sale of used goods with a second reduced rate| long in cents
urceno_cerp_zuct| The total amount of payments designated for subsequent pumping or settlement| long in cents
cerp_zuct|The total amount of payments which are followed by pumping or settlement of the payment| long in cents
mena|[Currency](#currency) of the parameters|string

##eet_code
Information about registration of sales

```json
{
    "fik":"28da0811-e050-46c7-a62c-aa456d1f07ef-ff",
    "bkp":"5d874afc-251f8661-ff0e0b13-c7cd8793-6bf0386a",
    "pkp":"Ca8sTbURReQjjgcy/znXBKjPOnZof3AxWK5WySpyMrUXF0o7cz1BP6a....."
}
```
Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
fik| Fiscal identification code (FIK)| varchar, 39 characters
bkp| Security code of the taxpayer (BKP)| varchar, 44 characters
pkp| Signature code of the taxpayer (PKP)| varchar, 344 characters

##callback
Definition of callback and notification URL

```json
{
   "return_url":"http://www.eshop.cz/return",
   "notification_url":"http://www.eshop.cz/notify"
}
```

Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
return_url|URL address for return to e-shop (with protocol)|string, (512 characters)
notification_url|URL address for sending  asynchronous notification in the case of changes in the payment status (with protocol)|string, (512 characters)


##additional_params
Additional parameters of the payment

```json
[
   {"name":"invoicenumber","value":"2015001003"},
   {"name":"...","value":"..."}
]
```

Parameter´s name|Parameter´s description| Data´s type
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


Parameter´s name|Parameter´s description| Data´s type
---------------|---------------|-------
[recurrence_cycle](#recurrence-cycle)|Time period of recurring|string, can gain values see [recurrence_cycle](#recurrence-cycle)
recurrence_period|Recurring period of recurring payment| long
recurrence_date_to|The period of validity recurring payment| string yyyy-mm-dd
recurrence_state|Describes [state](#status-of-the-payment) of recurring payment| string, can gain values REQUESTED, STARTED, STOPPED 

##groups
Name of each group corresponds to group [codes](#group-codes)

Parameter´s name|Parameter´s description|
---------------|---------------
label| Object that contains localised name of payment group
cs | Czech name of payment group

##group-codes
Names of payment method groups

```json
{
    "card-payment":{
      "label":{
        "cs":"Platební karta"}
      },
    "bank-transfer":{
      "label":{
        "cs":"Rychlý bankovní převod"}
      },
    "wallet":{
      "label":{
        "cs":"Elektronické peněženky"}
      },
    "others":{
      "label":{
        "cs":"Ostatní"}
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
Name of every object coresponds to [payment method codes](#payment-instrument)

```json
{
    "paymentInstrument":"PAYMENT_CARD",
      "label":{
        "cs":"Platební karta"},
      "image":{
        "normal":"https://gate.gopay.cz/images/checkout/payment_card.png",
        "large":"https://gate.gopay.cz/images/checkout/payment_card@2x.png"},
      "group":"card-payment",
      "enabledSwifts":null
}
```

Parameter´s name|Parameter´s description|
---------------|--------------
label| Object that contains localised name of payment method
image| Logo of payment method avaliable in two formats - normal, large 
[group](#groups)| Group into which payment method belongs, coresponds to [groups](#groups)
[enabledSwifts](#enabledswifts)| Each sub object represents allowed banks for payment method. It is set only for BANK_ACCOUNT


##enabledSwifts   
Name of each object coresponds to [SWIFT](#swift) codes 

```json
{
    "swift":"GIBACZPX",
        "label":{
          "cs":"Platba 24"},
        "image":{
          "normal":"https://gate.gopay.cz/images/checkout/GIBACZPX.png",
          "large":"https://gate.gopay.cz/images/checkout/GIBACZPX@2x.png"},
        "isOnline":true
}
```

Parameter´s name|Parameter´s description|
---------------|---------------
label| Object that contains localised name of bank 
image| Logo of bank avaliable in two formats - normal, large 
isOnline| State that symbolise if bank supports online bank transfers

##defaults
Default values of superCASH coupons

```json
{
    "sub_type":"POSTPAID",
    "amounts":[300,400,500,600,700,800,900,1000],
    "order_description":"supercash batch test"
}
```

Parameter´s name|Parameter´s description|
---------------|---------------
[sub_type](#sub-type)|Type of superCASH coupon
custom_id|Custom ID for coupon
amounts|Array of amounts in cents
order_number|Identification of the order within the point of sale
order_description|Description of goods/service
buyer_email|Valid e-mail address
buyer_phone|Phone number with country code
date_valid_to|Date of the coupon's validity
notification_url|URL address for sending asynchronous notification in the case of changes in the coupon's status (with protocol)

##coupons
Specific values of superCASH coupons

```json
[
    {
        "buyer_email":"zakaznik1@example.com",
        "custom_id":"ID-123457",
        "buyer_phone":"+420777666111",
        "amounts":[100]
        },
    {
        "buyer_email":"zakaznik2@example.com",
        "custom_id":"ID-123458",
        "buyer_phone":"+420777666222",
        "amounts":[200]
        },
    {
        "buyer_email":"zakaznik3@example.com",
        "custom_id":"ID-123459",
        "buyer_phone":"+420777666333"
        }
]
```

Parameter´s name|Parameter´s description|
---------------|---------------
[sub_type](#sub-type)|Type of superCASH coupon
custom_id|Custom ID for coupon
amounts|Array of amounts in cents
order_number|Identification of the order within the point of sale
order_description|Description of goods/service
buyer_email|Valid e-mail address
buyer_phone|Phone number with country code
date_valid_to|Date of the coupon's validity
notification_url|URL address for sending asynchronous notification in the case of changes in the coupon's status (with protocol)