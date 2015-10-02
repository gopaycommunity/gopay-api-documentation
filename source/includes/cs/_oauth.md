# OAuth

GoPay REST API používá pro autorizaci přístupu k API principu [OAuth2.0](http://tools.ietf.org/html/rfc6749), 
konkrétně metodu klientské autentizace viz [http://tools.ietf.org/html/rfc6749#section-4.4](http://tools.ietf.org/html/rfc6749#section-4.4)

## Přístupový token

Základním prvkem veškeré komunikace přes REST API je přístupový token, který je vytvořen na základě předávaných přístupových údajů ve formě ```<Client ID>```:```<Client Secret>```.
 Token je předáván jako autorizační parametr v hlavičce HTTP dotazu prostřednictvím ```Authorization: Bearer <Access-Token>```. Získaný přístupový token je předáván pro každý další požadavek na API.   
 Životnost tokenu je vždy omezena na 30 minut. Po jeho vypršení je nutné vytvořit nový přístupový token.
<aside class="notice">
  Pokud ještě nemáte Client ID a Client Secret, kontaktujte nás na integrace@gopay.cz.
</aside>

###Request

```POST /api/oauth2/token```

> Request

```shell
curl -v https://gw.sandbox.gopay.com/api/oauth2/token \
-X "POST" \
-H "Accept: application/json" \
-H "Content-Type: application/x-www-form-urlencoded" \
-u "<Client ID>:<Client Secret>" \
-d "grant_type=client_credentials&scope=payment-create"
```

```php
<?php
$ch = curl_init();

$data = array(
           'grant_type' => 'client_credentials',
           'scope' => 'payment-create'
       );

$data_send = http_build_query($data);

curl_setopt($ch, CURLOPT_URL, "https://gw.sandbox.gopay.com/api/oauth2/token");
curl_setopt($ch, CURLOPT_HTTPHEADER,
  array('Accept: application/json',
        'Content-Type: application/x-www-form-urlencoded'));
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERPWD, $clientID.":".$clientSecret); 
//nutno doplnit client id a client secret ziskane pri zahajini integrace
curl_setopt($ch, CURLOPT_POSTFIELDS, $data_send);

$result = curl_exec($ch);
?>
```

###Hlavička požadavku
Název parametru|Popis parametru|Povinný
---------------|---------------|-------
Accept|application/json|ANO
Content-Type|application/x-www-form-urlencoded|ANO
Authorization|[HTTP basic authentication](http://cs.wikipedia.org/wiki/Basic_access_authentication) pomocí níž předáváte ```<Client ID>```:```<Client Secret>```|ANO

###Tělo požadavku

Název parametru|Popis parametru|Povinný
---------------|---------------|-------
[scope](#scope)|Definuje kategorii funkcionalit které může daná akce obsluhovat|ANO
grant_type|client_credentials|ANO

> Response

```json
{
  "token_type":"bearer",
  "access_token":"AAAnu3YnAHRk298EsmyttFQMcbCcvmwTKK5hrJx2aGG8ZnFyBJhAvFWNmbWVSD7p",
  "expires_in":1800,
}
```


###Response

Název parametru|Popis parametru|Povinný
---------------|---------------|-------
token_type|bearer|ANO
access_token|Přístupový token|ANO
expires_in|Čas expirace tokenu v sekundách|ANO

<aside class="notice">
Přístupový token pro scope payment-create je určen výhradně k založení platby. Další funkcionality,
jako např. dotaz na stav, refundace platby musí být doprovázeny tokenem, který je určen pro
obsluhování operací s platbami (scope payment-all).
</aside>