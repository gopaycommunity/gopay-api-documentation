#Číselníky
##recurrence_cycle
Cyklus opakované platby

Hodnota parametru|Popis
-----------------|-----
DAY| Denní opakování
WEEK| Týdenní opakování
MONTH| Měsíční opakování
ON_DEMAND| U opakovaných plateb na vyžádání


##currency
Měna platby

Hodnota parametru|Popis
------------------|-----
CZK | České koruny
EUR | Eura
PLN | Polský złoty
HUF | Maďarský forint
GBP | Britská libra
USD | Americký dolar

##scope
Parametr popisující množinu získaných práv

Hodnota|Popis
-------|-----
payment-create|Umožňuje pouze zakládání plateb
payment-all|Umožňuje provádět veškeré operace nad platbami

##result
Výsledek operace

Název parametru|Popis parametru
---------------|---------------
ACCEPTED| Požadavek přijat
FINISHED| Operace provedena
FAILED| Operace skončila chybou

##Stavy plateb
Platba může nabývat následujících stavů

Název stavu|Popis parametru stavu
-----------|---------------------
CREATED|Platba založena
PAYMENT_METHOD_CHOSEN|Platební metoda vybrána
PAID|Platba zaplacena
AUTHORIZED|Platba předautorizována
CANCELED|Platba zrušena
TIMEOUTED|Vypršelá platnost platby
REFUNDED|Platba refundována
PARTIALLY_REFUNDED|Platba částečně refundována

##lang
Natavení jazyka platební brány

Kód jazyka|Jazyk
----------|-----
CS| Čeština
EN| Angličtina
SK| Slovenština
DE| Němčina
RU| Ruština

##payment_instrument
Kódy platebních metod

Kód platební metody|Popis platební metody
-------------------|---------------------
PAYMENT_CARD| Platební karty
BANK_ACCOUNT| Bankovní převody
PRSMS|Premium SMS
MPAYMENT|Mplatba
PAYSAFECARD|paysafecard
SUPERCASH|superCASH
GOPAY|GoPay účet
PAYPAL|PayPal účet
BITCOIN| Platba bitcoiny

##SWIFT
Kódy jednotlivých bank

Kód banky|Název banky
---------|-----------
GIBACZPX| Česká spořitelna
​​KOMBCZPP| Komerční Banka
RZBCCZPP| Raiffeisenbank
BREXCZPP| mBank
FIOBCZPP| FIO Banka
CEKOCZPP| ČSOB
CEKOCZPP-ERA| ERA
ZUNOCZPP| ZUNO
SUBASKBX| Všeobecná úverová banka
TATRSKBX| Tatra Banka
UNCRSKBX| Unicredit Bank SK
GIBASKBX| Slovenská spořitelna
OTPVSKBX| OTP Banka
POBNSKBA| Poštová Banka
CEKOSKBX| ČSOB SK
LUBASKBX| Sberbank Slovensko
RIDBSKBX| ZUNO SK
OTHERS| Speciální swift bez předvýběru konkrétní banky

##format
Formát souboru generovaného výpisu

Hodnota parametru|Popis
------------------|-----
CSV_A | CSV typ A
CSV_B | CSV typ B
CSV_C | CSV typ C
CSV_D | CSV typ D
XLS_A | XLS typ A
XLS_B | XLS typ B
XLS_C | XLS typ C
ABO | ABO (.gpc)