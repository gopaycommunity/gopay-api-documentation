#Code lists
##recurrence_cycle
Cycle of recurring payment

Parameter value|Description
-----------------|-----
DAY| Daily recurring
WEEK| Weekly recurring
MONTH| Monthly recurring
ON_DEMAND| Set only at manual recurring payments


##currency
Payment currency

Parameter value|Description
------------------|-----
CZK | Czech crowns
EUR | Euros

##scope
Parameter describing group of acquired rights

Parameter value|Description
-------|-----
payment-create|Allows only the establishment of payments
payment-all|Allows all operations above payments

##result
Result of operation

Parameter name|Parameter description
---------------|---------------
ACCEPTED| Request accepted 
FINISHED| Operation finished
FAILED| Operation failed

##Payment status 
Payment can gain values following status

Parameter name|Status parameter description
-----------|---------------------
CREATED|Payment created 
PAYMENT_METHOD_CHOSEN|Payment method chosen
PAID|Payment paid
AUTHORIZED|Payment pre-authorized
CANCELED|Payment canceled
TIMEOUTED|Payment timeouted
REFUNDED|Payment refunded
PARTIALLY_REFUNDED|Payment partially refunded

##lang
Setting of the language of the payment gateway

Language code|Language
----------|-----
CS| Czech
EN| English
SK| Slovak
DE| German
RU| Russian

##payment_instrument
Payment method codes

Payment method code|Payment method description
-------------------|---------------------
PAYMENT_CARD| Payment cards
BANK_ACCOUNT| Bank transfer
PRSMS|Premium SMS
MPAYMENT|mPayment
PAYSAFECARD|Paysafecard
SUPERCASH|superCASH
GOPAY|GoPay account
PAYPAL|PayPal account
BITCOIN| Bitcoin payment

##SWIFT
Bank SWIFT codes

Bank SWIFT code|Bank name
---------|-----------
GIBACZPX| Česká spořitelna
​​KOMBCZPP| Komerční Banka
RZBCCZPP| Raiffeisenbank
BREXCZPP| mBank
FIOBCZPP| FIO Bank
CEKOCZPP| ČSOB
CEKOCZPP-ERA| ERA
ZUNOCZPP| ZUNO
SUBASKBX| Všeobecná úverová banka Banka
TATRSKBX| Tatra Banka
UNCRSKBX| Unicredit Bank SK
GIBASKBX| Slovenská spořitelna
OTPVSKBX| OTP Banka
POBNSKBA| Poštová Banka
CEKOSKBX| ČSOB SK
LUBASKBX| Sberbank Slovensko
RIDBSKBX| ZUNO SK
OTHERS| Special SWIFT without specific bank selected