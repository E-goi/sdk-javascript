# egoisdk.Form

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formId** | **Number** |  | [optional] [readonly] 
**internalTitle** | **String** | Internal title of the form | [optional] [default to &#39;$request.body#/title&#39;]
**title** | **String** | Title of the form | 
**language** | [**Language**](Language.md) |  | [optional] 
**listId** | **Number** |  | [optional] 
**_default** | **Boolean** | True if this is the default form in the list, false otherwise | [optional] 
**owner** | **Number** |  | [optional] 
**status** | **String** | Status of the form | [optional] [readonly] 
**created** | **Date** | The date and time | [optional] 
**updated** | **Date** | The date and time | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `unpublished` (value: `"unpublished"`)

* `cloned` (value: `"cloned"`)

* `deleted` (value: `"deleted"`)




