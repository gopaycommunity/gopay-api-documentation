#Code lists
##recurrence_cycle
Cycle of recurring payment

Parameter's value|Description
-----------------|-----
DAY| Daily recurring
WEEK| Weekly recurring
MONTH| Monthly recurring
ON_DEMAND| Set only at manual recurring payments


##currency
Payment currency

Parameter's value|Description
------------------|-----
CZK | Czech crowns
EUR | Euros
PLN | Polish złoty
HUF | Hungarian forint
GBP | British pound
USD | US dollar
RON | Romanian Leu
HRK | Kuna
BGN | Bulgarian Lev

##scope
Parameter describing group of acquired rights

Parameter's value|Description
-------|-----
payment-create|Allows only the establishment of payments
payment-all|Allows all operations
account-info| Allows to get account information (for [PSD2 AIS](#ais) purposes only)

##result
Result of operation

Parameter's name|Parameter's description
---------------|---------------
ACCEPTED| Request accepted 
FINISHED| Operation finished
FAILED| Operation failed

##Payment status 
Payment can gain values following status

Parameter's name|Parameter's description
-----------|---------------------
CREATED|Payment created 
PAYMENT_METHOD_CHOSEN|Payment method chosen
PAID|Payment paid
AUTHORIZED|Payment pre-authorized
CANCELED|Payment canceled
TIMEOUTED|Payment timeouted
REFUNDED|Payment refunded
PARTIALLY_REFUNDED|Payment partially refunded

##Payment substate
Payment can gain values following substates

Parameter's value|Parameter's description
-----------|---------------------
_101|Payment pending. We are waiting for the online payment to be made.
_102|Payment pending. We are waiting for the offline payment to be made.
_3001|Bank payment confirmed by letter of advice.
_3002|Bank payment confirmed by statement.
_3003|Bank payment not authorised.
_5001|Approved with zero amount
_5002|Payment declined by the customer's bank authorization centre. The payment card limit had been reached.
_5003|Payment declined by the customer's bank authorization centre. There are some issues at the card issuer side.
_5004|Payment declined by the customer's bank authorization centre. Issues at the card issuer side.
_5005|Payment declined by the customer's bank authorization centre.  Payment card blocked.
_5006|Payment declined by the customer's bank authorization centre. Insufficient funds at the payment card. 
_5007|Payment declined by the customer's bank authorization centre. The payment card is expired.
_5008|Payment declined by the customer's bank authorization centre. The CVV/CVC code had been declined.
_5009, _5015, _5017, _5018, _5019, _6502, _6504|Payment declined in the 3D Secure system of the customer's bank.
_5010, _5014|Payment declined by the customer's bank authorization centre. There are some issues with the payment card. 
_5011, _5036|Payment declined by the customer's bank authorization centre. There are some issues with the payment card account.
_5012|Payment declined by the customer's bank authorization centre. There are some technical issues in the customer's bank authorization centre.
_5013|Payment declined by the customer's bank authorization centre. The customer entered an incorrect card number. 
_5016|Payment declined by the customer's bank authorization centre. The customer's card had not been authorized to make the payment.
_5020|Unknown seller
_5021|Payment declined by the customer's bank authorization centre. The card limits had been exceeded.
_5022|A technical issue occured in the customer's bank authorization centre. 
_5023, _5038|Payment not made. 
_5024|Payment not made. Customer did not enter the payment credentials in the time limit at the payment gateway.
_5025|Payment not made. The specific reason is to be reported to the customer. 
_5026|Payment not made. The total credited amounts exceeded the amount paid. 
_5027|Payment not made. The user is not authorized to undertake the operation. 
_5028|Payment not made. The amount due exceeded the amount authorized. 
_5029|Payment has not been made yet. 
_5030|Payment not made. There were several attempts to settle the payment.
_5031|A technical issue occurred in the bank while processing the payment.
_5033|SMS failed to be received. 
_5035|Card issued in a region where the card payments are not supported. 
_5037|Cardholder cancelled the payment. 
_5039|Payment declined by the customer's bank authorization centre. The payment card is blocked. 
_5040|Duplicate reversal
_5041|Duplicate transaction
_5042|Bank transfer declined. 
_5043|Payment cancelled by user.
_5044|SMS has been sent. It has not been delivered yet. 
_5045|Payment received. Payment is to be credited after it has been processed in the Bitcoin system.
_5046|A full amount of payment not made. 
_5047|Payment made after due date.

##lang
Setting of the language of the payment gateway

Language's code|Language
----------|-----
CS| Czech
EN| English
SK| Slovak
DE| German
RU| Russian
PL| Polish
HU| Hungarian
FR| French
RO| Romanian
BG| Bulgarian
HR| Croatian
IT| Italian
ES| Spanish

##payment_instrument
Payment method codes

Payment method's code|Payment method's description
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
MASTERPASS| Masterpass
GPAY| Google Pay

##SWIFT
Bank SWIFT codes

Bank SWIFT code|Bank name
---------|-----------
GIBACZPX| Česká spořitelna
KOMBCZPP| Komerční Banka
RZBCCZPP| Raiffeisenbank
BREXCZPP| mBank
FIOBCZPP| FIO Bank
CEKOCZPP| ČSOB
CEKOCZPP-ERA| ERA
BACXCZPP| Unicredit Bank CZ
SUBASKBX| Všeobecná úverová banka
TATRSKBX| Tatra Banka
UNCRSKBX| Unicredit Bank SK
GIBASKBX| Slovenská spořitelna
POBNSKBA| Poštová Banka
CEKOSKBX| ČSOB SK
OTHERS| Special SWIFT without specific bank selected
BREXPLPW|mBank
CITIPLPX|Citi Handlowy
BPKOPLPW-IKO|IKO
BPKOPLPW-INTELIGO|Inteligo
IVSEPLPP|Plus Bank
BPHKPLPK|BANK BPH S.A.
TOBAPLPW|Toyota Bank
VOWAPLP1|Volkswagen Bank
GBWCPLPP|SGB
POCZPLP4|Pocztowy bank
GOPZPLPW|BGZ Bank
IEEAPLPA|IDEA
POLUPLPR|BPS
GBGCPLPK-GIO|Getin Online
GBGCPLPK-BLIK|Blik
GBGCPLPK-NOB|Noble bank
BREXPLPW-OMB|Orange
WBKPPLPP|BZ WBK
RCBWPLPW|RAIFFEISEN BANK POLSKA S.A.
BPKOPLPW|POWSZECHNA KASA OSZCZEDNOSCI BANK POLSKI SA
ALBPPLPW|Alior Bank
INGBPLPW|ING Bank Śląski
PKOPPLPW|PEKAO S.A
GBGCPLPK|Getin Online
BIGBPLPW|Bank Millennium
EBOSPLPW|Bank Ochrony Środowiska
PPABPLPK|BNP Paribas Polska
AGRIPLPR|Credit Agricole
DEUTPLPX|DEUTSCHE BANK POLSKA S.A.
DNBANOKK|DnB Nord
NBPLPLPW|E-SKOK
SOGEPLPW|Eurobank
PBPBPLPW|POLSKI BANK PRZEDSIEBIORCZOSCI SPOLKA AKCYJNA

##format
Format of account [statement](https://help.gopay.com/en/s/cj) file

Parameter's value|Description
------------------|-----
CSV_A | CSV type A
CSV_B | CSV type B
CSV_C | CSV type C
CSV_D | CSV type D
XLS_A | XLS type A
XLS_B | XLS type B
XLS_C | XLS type C
ABO_A | ABO (.gpc)
ABO_B | ABO (.gpc)

##type
Type of row for the registration of sales

Parameter's value|Description
------------------|-----
ITEM|Item
DELIVERY|Delivery
DISCOUNT|Discount

##vat_rate
VAT rate for the registration of sales

Parameter's value|Description
------------------|-----
0| VAT rate 0 %
10| VAT rate 10 %
15| VAT rate 15 %
21| VAT rate 21 %

##state

Parameter's value|Description
------------------|-----
CREATED|Created
DELIVERY_FAILED|Delivery failed
DELIVERED|Delivered

##eet_mode

Parameter's value|Description
------------------|-----
AUTO|variant A
EET|variant B

##state of superCASH batch

Parameter's value|Description
------------------|-----
CREATED|Created
RUNNING|Running
QUEUED|Queued
SCHEDULED|Scheduled
COMPLETED|Completed
STOPPED|Stopped
FAILED|Failed

##sub_type
Type of superCASH coupon

Parameter's value|Description
------------------|-----
POSTPAID|Coupon suitable for one-time payment. Payment is generated with coupon creation.
PREPAID|Coupon suitable for multiple payments. Payment is generated after each customer's payment.

##3ds_result
3D Secure authorization’s result

Parameter's value|Description
------------------|-----
"N/"|The payment card doesn't support 3D Secure authorization
"Y/Y"|Full 3D Secure authorization
"Y/A"|Partial 3D Secure authorization
"X/X"|3D Secure authorization was not made