#Objekty
Popis jednotlivých objektů použitých při komunikaci s platební bránou

##accounts
Údaje účtu elektronických peněz

```json
{
    "id": 100001660,
    "balance": 0,
    "currency": "EUR"
}
```

Název parametru|Popis parametru|Datový typ
---------------|---------------|----------
id| ID účtu
balance| Zůstatek účtu
[currency](#currency)| Měna, formát měny odpovídá [ISO 4217](http://www.iso.org/iso/home/standards/currency_codes.htm)

##address
Adresa/sídlo

```json
{
  "street": "Planá 67",
  "postal_code": "37001",
  "city": "Planá",
  "country": "cz"
}
```
Název parametru|Popis parametru|Datový typ
---------------|---------------|----------
street| Ulice | string
postal_code| Poštovní směrovací číslo | string
city| Město | string
country| Kód státu| string [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2)

##payer
Definice plátce platby

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

Název parametru|Popis parametru|Datový typ
---------------|---------------|----------
[allowed_payment_instruments](#payment-instrument)|Pole povolených platebních metod|string, nabývající hodnot viz [payment_instrument](#payment-instrument)
[default_payment_instrument](#payment-instrument)|Preferovaná platební metoda|string, nabývající hodnot viz [payment_instrument](#payment-instrument)
[default_swift](#swift)|Preferová banka pokud je default_payment_instrument nastaveno na BANK_ACCOUNT, nastaveno pomocí SWIFT kódu banky|string, nabývající hodnot viz [SWIFT](#swift)
[allowed_swifts](#swift)|Pole povolených kódů bank| string, nabývající hodnot viz [SWIFT](#swift)
[bank_account](#bank-account)|Údaje o bankovním účtu plátce|Objekt
[payment_card](#payment-card)|Údaje o použité platební kartě|Objekt
[contact](#contact)|Údaje o zákaníkovi|Objekt
verify_pin|PIN pro účely [identifikační platby](#identifikacni-platba)|String, 4 číslice
allowed_card_token|Token pro účely [identifikační platby](#identifikacni-platba)|String

##bank_account
Údaje o bankovním účtu plátce

```json
{
    "prefix":"670100",
    "account_number":"7654322",
    "bank_code":"0100",
    "account_name":"JAN NOVAK"
}
```
Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
iban|Kód IBAN bankovního účtu zákazníka|string, 50 znaků
bic|SWIFT kód banky zákazníka|string, 11 znaků
prefix|Předčíslí bankovního účtu zákazníka|string, 64 znaků
account_number|Číslo bankovního účtu zákazníka|string, 128 znaků
bank_code|Kód banky zákazníka|string, 8 znaků
account_name|Jméno majitele bankovního účtu|string, 70 znaků

##payment_card
Údaje o použité platební kartě

```json
{
    "card_number":"444444******4448",
    "card_expiration":"1909",
    "card_brand":"VISA",
    "card_issuer_country":"CZE",
    "card_issuer_bank":"AIR BANK, A.S."
}
```
Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
card_number|Vymaskované číslo platební karty|string, 16 znaků
card_expiration|Datum expirace|string, 4 znaky
card_brand|Typ platební karty|string, 50 znaků
card_issuer_country|Kód země vydavatelské banky|string, 3 znaky
card_issuer_bank|Vydavatelská banka|string, 80 znaků
card_token|Token platební karty pro účely [identifikační platby](#identifikacni-platba)|string
[3ds_result](#3ds-result)|Výsledek 3D Secure autorizace pro účely [identifikační platby](#identifikacni-platba)|string

##contact
Zákaznické informace

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

Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
first_name|Jméno zákazníka|string, 256 znaků
last_name|Příjmení zákazníka|string, 256 znaků
email|Validní e-mail zákazníka|string, 128 znaků
phone_number|Telefonní číslo zákazníka s předvolbou|string, 128 znaků
city|Město zákazníka|string, 128 znaků
street|Ulice zákazníka|string, 128 znaků
postal_code|Poštovní směrovací číslo zákazníka|string, 16 znaků
country_code|Kód státu zákazníka| string [ISO 3166-1 alpha-3](http://en.wikipedia.org/wiki/ISO_3166-1_alpha-3)

##target
Identifikace příjemce platby

```json
{
  "type":"ACCOUNT",
  "goid":"8123456789"
}
```

Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
type|Popis příjemce platby|string, nastaveno na ACCOUNT
goid|Jedinečný identifikátor eshopu v systému platební brány|long
email|E-mail (pouze pro účely [PSD2 API](#psd2-api))

##items
Jednotlivé položky objednávky

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

Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
[type](#type)|Typ položky|enum, nabývá hodnot viz [type](#type)
product_url|URL adresa produktu|string, (512 znaků)
ean|[EAN kód produktu](https://cs.wikipedia.org/wiki/European_Article_Number)|varchar, (13 znaků)
count|Počet položek produktu| long > 0
name|Název produktu|string, alfanumerické znaky (256 znaků)
amount|Součet cen položek s DPH v haléřích| long, kladná nebo záporná celá čísla
[vat_rate](#vat-rate)|Sazba daně, pro potřeby EET|nabývá hodnot viz [vat_rate](#vat-rate)

##eet
Parametry pro elektronickou evidenci tržeb (EET)

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
Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
dic_poverujiciho| DIČ pověřujícího poplatníka| varchar
celk_trzba| Celková částka tržby| long v centech
zakl_nepodl_dph| Celková částka plnění osvobozených od DPH| long v centech
zakl_dan1| Celkový základ daně se základní sazbou DPH| long v centech
dan1| Celková DPH se základní sazbou| long v centech
zakl_dan2| Celkový základ daně s první sníženou sazbou DPH| long v centech
dan2| Celková DPH s první sníženou sazbou| long v centech
zakl_dan3| Celkový základ daně s druhou sníženou sazbou DPH| long v centech
dan3| Celková DPH s druhou sníženou sazbou| long v centech
cest_sluz| Celková částka v režimu DPH pro cestovní službu| long v centech
pouzit_zboz1| Celková částka v režimu DPH pro prodej použitého zboží se základní sazbou| long v centech
pouzit_zboz2| Celková částka v režimu DPH pro prodej použitého zboží s první sníženou sazbou|  long v centech
pouzit_zboz3| Celková částka v režimu DPH pro prodej použitého zboží s druhou sníženou sazbou| long v centech
urceno_cerp_zuct| Celková částka plateb určená k následnému čerpání nebo zúčtování| long v centech
cerp_zuct|Celková částka plateb, které jsou následným čerpáním nebo zúčtováním platby| long v centech
mena|[Měna](#currency), ve které jsou údaje předávány|string

##eet_code
EET kódy účtenky

```json
{
    "fik":"28da0811-e050-46c7-a62c-aa456d1f07ef-ff",
    "bkp":"5d874afc-251f8661-ff0e0b13-c7cd8793-6bf0386a",
    "pkp":"Ca8sTbURReQjjgcy/znXBKjPOnZof3AxWK5WySpyMrUXF0o7cz1BP6a....."
}
```
Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
fik| Fiskální identifikační kód (FIK)| varchar, 39 znaků
bkp| Bezpečnostní kód poplatníka (BKP)| varchar, 44 znaků
pkp| Podpisový kód poplatníka (PKP)| varchar, 344 znaků

##callback
Definice návratové a notifikační URL

```json
{
   "return_url":"http://www.eshop.cz/return",
   "notification_url":"http://www.eshop.cz/notify"
}
```

Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
return_url|URL adresa pro návrat na eshop (včetně protokolu)|string, (512 znaků)
notification_url|URL adresa pro odeslání asynchronní notifikace v případě změny stavu platby (včetně protokolu)|string, (512 znaků)


##additional_params
Dodatečné parametry platby

```json
[
   {"name":"invoicenumber","value":"2015001003"},
   {"name":"...","value":"..."}
]
```

Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
name|Název parametru|string
value|Hodnota volitelného parametru|string


##recurrence
Nastavení opakované platby

> Opakování každý sedmý den

```json
{
  "recurrence_cycle":"DAY",
  "recurrence_period":"7",
  "recurrence_date_to":"2015-12-31"
}
```

> Opakování každý třetí den

```json
{
  "recurrence_cycle":"DAY",
  "recurrence_period":"3",
  "recurrence_date_to":"2015-12-31"
}
```

> Opakování každý druhý měsíc

```json
{
  "recurrence_cycle":"MONTH",
  "recurrence_period":"2",
  "recurrence_date_to":"2015-12-31"
}
```

Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
[recurrence_cycle](#recurrence-cycle)|Časový úsek opakování|string, nabývá hodnot viz [recurrence_cycle](#recurrence-cycle)
recurrence_period|Perioda opakování opakované platby| long
recurrence_date_to|Doba platnosti opakované platby| string yyyy-mm-dd
recurrence_state|Popis [stavu](#stav-platby) opakované platby| string, nabývá hodnot REQUESTED, STARTED, STOPPED 

##groups   
Název každé skupiny odpovídá [kódům](#group-codes) skupin

Název parametru|Popis parametru|
---------------|---------------
label| Objekt obsahující lokalizované názvy skupiny platebních metod
cs | Český název skupiny platebních metod

##group-codes
Názvy skupin platebních metod

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

Název skupiny|Popis skupiny|
-------------|--------------
card-payment| Platby kartou
bank-transfer| Bankovní převody
wallet| Platby prostřednictvím elektronických peněženek
others| Ostatní platební metody


##enabledPaymentInstruments  
Název každého objektu odpovídá [kódům platebních metod](#payment-instrument)

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

Název parametru|Popis parametru|
---------------|---------------
label| Objekt obsahující lokalizované názvy platební metody
image| Logo platební metody dostupné ve dvou formátech - normal, large
[group](#groups)| Skupina, do které platební metoda náleží viz [groups](#groups)
[enabledSwifts](#enabledswifts)| Jednotlivé podobjekty reprezentují banky povolené pro platební metodu. Předává se pouze v případě metody BANK_ACCOUNT

##enabledSwifts   
Název každého objektu odpovídá [SWIFT](#swift) kódům bank 

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

Název parametru|Popis parametru|
---------------|---------------
label| Objekt obsahující lokalizace názvu banky
image| Logo banky dostupné ve dvou formátech - normal, large
isOnline| Stav symbolizující zda banka podporuje online převod

##defaults
Výchozí hodnoty superCASH kupónů

```json
{
    "sub_type":"POSTPAID",
    "amounts":[300,400,500,600,700,800,900,1000],
    "order_description":"supercash batch test"
}
```

Název parametru|Popis parametru|
---------------|---------------
[sub_type](#sub-type)|Typ superCASH kupónu
custom_id|Vlastní ID pro kupón
amounts|Pole částek v haléřích
order_number|Identifikace objednávky v rámci prodejního místa
order_description|Popis objednávky
buyer_email|Validní e-mail zákazníka
buyer_phone|Telefonní číslo zákazníka s předvolbou
date_valid_to|Datum platnosti kupónu
notification_url|URL adresa pro odeslání asynchronní notifikace v případě změny stavu kupónu (včetně protokolu)

##coupons
Specifické hodnoty superCASH kupónů

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

Název parametru|Popis parametru|
---------------|---------------
[sub_type](#sub-type)|Typ superCASH kupónu
custom_id|Vlastní ID pro kupón
amounts|Pole částek v haléřích
order_number|Identifikace objednávky v rámci prodejního místa
order_description|Popis objednávky
buyer_email|Validní e-mail zákazníka
buyer_phone|Telefonní číslo zákazníka s předvolbou
date_valid_to|Datum platnosti kupónu
notification_url|URL adresa pro odeslání asynchronní notifikace v případě změny stavu kupónu (včetně protokolu)