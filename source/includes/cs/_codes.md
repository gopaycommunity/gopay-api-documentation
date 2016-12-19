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

##Podstav plateb
Platba může nabývat následujících podstavů

Hodnota parametru|Popis parametru podstavu
-----------|---------------------
_101|Čekáme na provedení online platby.
_102|Čekáme na provedení offline platby.
_3001|Bankovní platba potvrzena avízem.
_3002|Bankovní platba potvrzena výpisem.
_3003|Bankovní platba nebyla potvrzena.
_5002|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu dosažení limitů na platební kartě.
_5003|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu problémů na straně vydavatele platební karty.
_5002|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu dosažení limitů na platební kartě.
_5004|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu problému na straně vydavatele platební karty.
_5005|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu zablokované platební karty.
_5006|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu nedostatku peněžních prostředků na platební kartě.
_5007|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu expirované platební karty.
_5008|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu zamítnutí CVV/CVC kódu.
_5009, _5015, _5017, _5018, _5019, _6502, _6504|Zamítnutí platby v systému 3D Secure banky zákazníka.
_5010, _5014|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu problémů na platební kartě.
_5011, _5036|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu problémů na účtu platební karty.
_5012|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu technických problémů v autorizačním centru banky zákazníka.
_5013|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu chybného zadání čísla platební karty.
_5016|Zamítnutí platby v autorizačním centru banky zákazníka, platba nebyla povolena na platební kartě zákazníka.
_5021|Zamítnutí platby v autorizačním centru banky zákazníka z důvodu dosažení nastavených limitů na platební kartě.
_5022|Nastal technický problém spojený s autorizačním centrem banky zákazníka.
_5023, _5038|Platba nebyla provedena.
_5024|Platba nebyla provedena. Platební údaje nebyly zadány v časovém limitu na platební bráně.
_5025|Platba nebyla provedena. Konkrétní důvod zamítnutí je sdělen přímo zákazníkovi.
_5026|Platba nebyla provedena. Součet kreditovaných částek překročil uhrazenou částku.
_5027|Platba nebyla provedena. Uživatel není oprávněn k provedení operace.
_5028|Platba nebyla provedena. Částka k úhradě překročila autorizovanou částku.
_5029|Platba zatím nebyla provedena.
_5030|Platba nebyla provedena z důvodu opakovaného zadání platby.
_5031|Při platbě nastal technický problém na straně banky.
_5033|SMS se nepodařilo doručit.
_5035|Platební karta je vydaná v regionu, ve kterém nejsou podporovány platby kartou.
_5037|Držitel platební karty zrušil platbu.
_5039|Platba byla zamítnuta v autorizačním centru banky zákazníka z důvodu zablokované platební karty.
_5042|Bankovní platba byla zamítnuta.
_5043|Platba zrušena uživatelem.
_5044|SMS byla odeslána. Zatím se ji nepodařilo doručit.
_5045|Platba byla přijata. Platba bude připsána po zpracování v síti Bitcoin.
_5046|Platba nebyla uhrazena v plné výši.
_5047|Platba byla provedena po splatnosti.

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