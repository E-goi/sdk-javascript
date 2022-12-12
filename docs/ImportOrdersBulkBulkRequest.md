# egoisdk.ImportOrdersBulkBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **String** | Ecommerce order id | 
**contactId** | **String** | Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid) | [optional] 
**revenue** | **Number** | Ecommerce order revenue | 
**storeUrl** | **String** | Ecommerce store url | 
**date** | **Date** | Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.) | 
**items** | [**[ImportOrdersBulkBulkRequestItems]**](ImportOrdersBulkBulkRequestItems.md) | Array of ordered products | 


