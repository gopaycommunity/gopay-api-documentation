---
title: GoPay REST API
locale: cs
toc_footers:
  - <a href='http://www.gopay.cz'>www.gopay.cz</a>
  - <a href='http://www.platebnibrana.cz'>www.platebnibrana.cz</a>
  - <a href='http://help.gopay.com'>help.gopay.com</a>

search: true
---

# Dokumentace GoPay REST API

> API ENDPOINT
>     
> testovací prostředí - https://gw.sandbox.gopay.com/api  
> provozní prostředí - https://gate.gopay.cz/api   
>  
> DOSTUPNÉ METODY  
>  
> [/oauth2/token](#přístupový-token)  
> [/payments/payment](#založení-platby)  
> [/payments/payment/{id}](#stav-platby)  
> [/payments/payment/{id}/refund](#refundace-platby-(storno))  
> [/payments/payment/{id}/create-recurrence](#opakování-platby-(na-vyžádání))   
> [/payments/payment/{id}/void-recurrence](#zrušení-opakování-platby)  
> [/payments/payment/{id}/void-authorization](#zrušení-předautorizace-platby)  
> [/payments/payment/{id}/capture](#stržení-předautorizované-platby)  

GoPay REST API je dostupné v testovacím prostředí na adrese ```https://gw.sandbox.gopay.com/api```.    

Provozní API se nachází na adrese ```https://gate.gopay.cz/api```. 
  
Pro veškerou příchozí i odchozí komunikaci s API je použito kódování UTF-8.  
  
Detailní popis jednotlivých kroků nutných pro provedení standardní integrace naleznete v [centru nápovědy](https://help.gopay.com/cs/s/i4).
