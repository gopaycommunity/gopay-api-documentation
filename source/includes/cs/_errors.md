# Chyby

##HTTP result kódy
HTTP kód|Význam kódu
----------------|-----------
200|Volání proběhlo úspěšně
403|Neautorizovaný přístup
409|Validační chyby
500|Volání skončilo chybou
404|Neexistující služba

## Návratové chyby

> Příklad chybové odpovědi - field specific

```json
{"date_issued":1390336022001,
"errors":[
	{"scope":"F","field":"email","message":"E-mail jiz existuje.","error_code":112,"error_name":"NOT_UNIQUE"},
	{"scope":"F","field":"mobile_phone","message":"Mobilni telefon jiz existuje.","error_code":112,"error_name":"NOT_UNIQUE"}
]}
```

> Příklad chybové odpovědi - global

```json
{"scope":"G","field":null,"error_code":500,"error_name":null,"message":null,"description":null}
```

Detail chyby je popsán v body odpovědi jako application/json data následující struktury.

Parametr|Popis parametru
--------|---------------
date issued|timestamp okamžiku chyby
[errors](#errors)|list chybových zpráv

###errors

Parametr|Popis parametru
--------|---------------
scope|F - field specific, G - global
field|Uvedeno pouze v případě validační chyby spojené s fieldem
message|Lokalizovaný message. Lokalizace založená na ```Accept-Language``` v hlavičce. Deafultně je nastaveno na ```en-US```, dále je možné použít českou lokalizaci pomocí hlavičky ```Accept-Language: cs```.
description|Technický popis chyby
error_code|Číselné označení typu chyby
error_name|Kódové označení typu chyby

##Číselník chyb

###Global
Kód|popis
---|-----
100|Systémová chyba
110|Povinný
111|Chybný formát
112|Již existuje
113|Nelze změnit
114|Nelze smazat
115|Nejednoznačné
116|Neplatný požadavek

###Authentication, authorization
Kód|popis
---|-----
200|Neoprávněný přístup
201|Způsob přidělení práv není podporován
202|Chybné přístupové údaje
203|Přístup přes PIN byl deaktivován

###Payment
Kód|popis
---|-----
350|Stržení platby selhalo
351|Stržení platby provedeno
352|Zrušení přeautorizace selhalo
353|Zrušení předautorizace provedeno
340|Provedení opakované platby selhalo
341|Provedení opakované platby není podporováno
342|Opakování platby zastaveno
343|Překročen časový limit počtu provedení opakované platby
330|Platbu nelze vrátit
331|Platbu nelze vrátit
332|Chybná částka
333|Nedostatek peněz na účtu
301|Platbu nelze vytvořit
302|Platbu nelze provést
303|Platba v chybném stavu
304|Platba nebyla nalezena
305|E-shop byl deaktivován
321|Příjemce nemůže přijmout platbu

