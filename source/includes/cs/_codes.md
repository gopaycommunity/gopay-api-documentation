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

Hodnota paramentru|Popis
------------------|-----
CZK | České koruny
EUR | Eura

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
SUBASKBX| Všeobecná úverová banka Banka
TATRSKBX| Tatra Banka
UNCRSKBX| Unicredit Bank SK
GIBASKBX| Slovenská spořitelna
OTPVSKBX| OTP Banka
POBNSKBA| Poštová Banka
CEKOSKBX| ČSOB SK
LUBASKBX| Sberbank Slovensko