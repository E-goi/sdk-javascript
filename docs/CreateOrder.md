# egoisdk.CreateOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderTotal** | **Number** | Ecommerce cart total | [optional] 
**orderId** | **String** | Order ID is any non-empty unique string | 
**cartId** | **String** | Cart ID that originated this order | [optional] 
**orderDate** | **Date** | Date and hour of the order | [optional] 
**orderStatus** | **String** | Status of the order | [optional] [default to &#39;unknown&#39;]
**contact** | [**Contact1**](Contact1.md) |  | [optional] 
**products** | [**[OrderProduct]**](OrderProduct.md) | List of products | [optional] 



## Enum: OrderStatusEnum


* `created` (value: `"created"`)

* `pending` (value: `"pending"`)

* `canceled` (value: `"canceled"`)

* `completed` (value: `"completed"`)

* `unknown` (value: `"unknown"`)




