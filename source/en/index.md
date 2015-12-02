---
title: GoPay REST API
locale: en
toc_footers:
  - <a href='http://www.gopay.cz'>www.gopay.cz</a>
  - <a href='http://www.platebnibrana.cz'>www.platebnibrana.cz</a>
  - <a href='http://help.gopay.com'>help.gopay.com</a>

search: true
---

# GoPay REST API documentation

> API ENDPOINT
>     
> test enviroment - https://gw.sandbox.gopay.com/api  
> production enviroment - https://gate.gopay.cz/api   
>  
> AVAILABLE METHODS  
>  
> [/oauth2/token](#access-token)  
> [/payments/payment](#establishment-of-payment)  
> [/payments/payment/{id}](#status-of-the-payment)  
> [/payments/payment/{id}/refund](#refund-of-the-payment-(cancelation))  
> [/payments/payment/{id}/create-recurrence](#cancellation-of-the-recurring-payment)   
> [/payments/payment/{id}/void-recurrence](#cancellation-of-the-recurring-payment)  
> [/payments/payment/{id}/void-authorization](#cancellation-of-the-pre-authorized-payment)  
> [/payments/payment/{id}/capture](#charge-of-pre-authorized-payment)  

GoPay REST API is avaliable in test mode at ```https://gw.sandbox.gopay.com/api```.    

Production enviroment is located at ```https://gate.gopay.cz/api```. 
  
All comunication with API is encoded in UTF-8.  
  
You can find integration details in our [help center](https://help.gopay.com/en/s/ey).
