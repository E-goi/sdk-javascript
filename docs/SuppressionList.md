# egoisdk.SuppressionList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**value** | **String** | Suppressed value | [optional] 
**type** | **String** | Suppression type | [optional] 
**method** | **String** | Suppression method | [optional] 
**campaignHash** | **String** |  | [optional] [readonly] 
**created** | **Date** |  | [optional] [readonly] 



## Enum: TypeEnum


* `email` (value: `"email"`)

* `email_domain` (value: `"email_domain"`)

* `email_user` (value: `"email_user"`)

* `cellphone` (value: `"cellphone"`)

* `phone` (value: `"phone"`)





## Enum: MethodEnum


* `unsubscribe` (value: `"unsubscribe"`)

* `bounce` (value: `"bounce"`)

* `manual` (value: `"manual"`)

* `other` (value: `"other"`)

* `forgotten` (value: `"forgotten"`)




