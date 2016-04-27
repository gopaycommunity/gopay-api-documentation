#Objekty
Popis jednotlivých objektů použitých při komunikaci s platební bránou

##payer
Definice plátce platby

```json
 {
   "allowed_payment_instruments":["PAYMENT_CARD", "BANK_ACCOUNT"],
   "default_payment_instrument":"BANK_ACCOUNT",
   "default_swift":"GIBACZPX",
   "allowed_swifts":["FIOBCZPP","BREXCZPP"],
   "contact": {}
 }
```

Název parametru|Popis parametru|Datový typ
---------------|---------------|----------
[allowed_payment_instruments](#payment_instrument)|Pole povolených platebních metod|string, nabývající hodnot viz [payment_instrument](#payment_instrument)
[default_payment_instrument](#payment_instrument)|Preferovaná platební metoda|string, nabývající hodnot viz [payment_instrument](#payment_instrument)
[default_swift](#swift)|Preferová banka pokud je default_payment_instrument nastaveno na BANK_ACCOUNT, nastaveno pomocí SWIFT kódu banky|string, nabývající hodnot viz [SWIFT](#swift)
[allowed_swifts](#swift)| Pole povolených kódů bank| string, nabývající hodnot viz [SWIFT](#swift) 
[contact](#contact)|Údaje o zákaníkovi|Objekt


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
email|E-mail zákazníka|string, 128 znaků
phone_number|Telefonní číslo zákazníka|string 128 znaků
city|Město zákazníka|string, 128 znaků
street|Ulice zákazníka|string, 128 znaků
postal_code|Poštovní směrovací číslo zákazníka|string 16 znaků
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

##items
Jednotlivé položky objednávky spolu s cenou

```json
[
   {"count":"2","name":"item01","amount":"500"},
   {"count":"...","name":"...","amount":"..."}
]
```

Název parametru|Popis parametru|Datový typ
---------------|---------------|-------
count|Počet položek produktu| long > 0
name|Název produktu|string, alfanumerické znaky (256 znaků)
amount|Cena produktu| long > 0


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
return_url|URL adresa pro návrat na eshop|string
notification_url|URL adresa pro odeslání asynchronní notifikace v případě změny stavu platby|string


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
[recurrence_cycle](#recurrence_cycle)|Časový úsek opakování|string, nabývá hodnot viz [recurrence_cycle](#recurrence_cycle)
recurrence_period|Perioda opakování opakované platby| long
recurrence_date_to|Doba platnosti opakované platby| string yyyy-mm-dd
recurrence_state|Popis stavu opakované platby| string, nabývá hodnot REQUESTED, STARTED, STOPPED 

##groups   
Název každé skupiny odpovídá [kódům](#group-codes) skupin

Název parametru|Popis parametru|
---------------|---------------
label| Objekt obsahující lokalizované názvy skupiny platebních metod
cs | Český název skupiny platebních metod

##group-codes
Názvy skupin platebních metod

Název skupiny|Popis skupiny|
-------------|--------------
card-payment| Platby kartou
bank-transfer| Bankovní Převody
wallet| Platby prostřednictvím elektronických peněženek
others| Ostatní platební metody

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

##enabledPaymentInstruments  
Název každého objektu odpovídá [kódům platebních metod](#payment_instrument)

Název parametru|Popis parametru|
---------------|---------------
label| Objekt obsahující lokalizované názvy platební metody
image| Logo platební metody dostupné ve dvou formátech - normal, large
[currencies](#currency)| Měny podporované platební metodou, nabývá hodnot viz [currency](#currency)
[group](#groups)| Skupina, do které platební metoda náleží viz [groups](#groups)
[enabledSwifts](#swift)| Jednotlivé podobjekty reprezentují banky povolené pro platební metodu. Předává se pouze v případě metody BANK_ACCOUNT

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

##enabledSwifts   
Název každého objektu odpovídá [SWIFT](#swift) kódům bank 

Název parametru|Popis parametru|
---------------|---------------
label| Objekt obsahující lokalizace názvu banky
image| Logo banky dostupné ve dvou formátech - normal, large
[currencies](#currencies)| Měny podporované bankou, nabývá hodnot viz [currency](#currency)
isOnline| Stav symbolizující zda banka podporuje online převod

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