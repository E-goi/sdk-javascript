# egoisdk.CellphoneSender

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cellphone** | **String** | Sender cellphone (country code followed by phone number, split by &#39;-&#39;) | 
**file** | **Blob** | Content of your sender file in base64 | 
**type** | **String** | Sender code type | 
**senderId** | **Number** |  | [readonly] 
**status** | **String** | Status of the sender | [optional] [readonly] 



## Enum: TypeEnum


* `alpha_numeric` (value: `"alpha_numeric"`)

* `numeric` (value: `"numeric"`)





## Enum: StatusEnum


* `active` (value: `"active"`)

* `moderation` (value: `"moderation"`)

* `rejected` (value: `"rejected"`)




