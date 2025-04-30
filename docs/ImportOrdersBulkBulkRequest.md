# egoisdk.ImportOrdersBulkBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **String** | Ecommerce order id | 
**orderStatus** | **String** | Status of the order | [optional] [default to &#39;unknown&#39;]
**contactId** | **String** | Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid) | 
**revenue** | **Number** | Ecommerce order revenue. Must be greater than 0. | 
**storeUrl** | **String** | Ecommerce store url | 
**date** | **Date** | Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.) | 
**items** | [**[ImportOrdersBulkBulkRequestItems]**](ImportOrdersBulkBulkRequestItems.md) | Array of ordered products | 



## Enum: OrderStatusEnum


* `created` (value: `"created"`)

* `pending` (value: `"pending"`)

* `canceled` (value: `"canceled"`)

* `completed` (value: `"completed"`)

* `unknown` (value: `"unknown"`)




