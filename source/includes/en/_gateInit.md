## Inline option

>Form to initiate the inline payment gateway

```html
<form action="https://gw.sandbox.gopay.com/gw/v3/dfgvmwTKK5hrJx2aGG8ZnFyBJhAvF"
  method="post" id="gopay-payment-button">
  <button name="pay" type="submit">Pay</button>
  <script type="text/javascript" src="https://gw.sandbox.gopay.com/gp-gw/js/embed.js"></script>
</form>
```
Inline payment gateway is initiated directly above the point of sale, there is no redirection. 

URL (action) form set according to ```gw_url``` from [creation of the payment](creation-payment). 


Form parameter|Description|Required
------------------|-----|--------
action|gw_url of created payment|YES
method|HTTP method|YES
id|Form ID|YES| Always sets on gopay-payment-button

<aside class='notice'>
  For further information about all steps needed to make base payment check our  <a href="https://help.gopay.com/en/s/ey">help center</a>
</aside>

## Redirect option

>Form to redirect to "redirect" the payment gateway

```html
<form action="https://gw.sandbox.gopay.com/gw/v3/dfgvmwTKK5hrJx2aGG8ZnFyBJhAvF"
  method="post">
  <button name="pay" type="submit">Pay</button>
</form>
```

The payment gateway can also be operated in the option with redirection. You can use the form below 
or redirect to the URL obtained during [creation of the payment](creation-payment) ```gw_url```.


Form parameter|Description|Required
-----------------|-----|--------
action|gw_url of created payment|YES
method|HTTP method|YES