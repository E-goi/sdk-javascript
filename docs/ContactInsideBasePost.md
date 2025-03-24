# egoisdk.ContactInsideBasePost

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactId** | **String** |  | [optional] [readonly] 
**status** | **String** | Status of the contact | [optional] [default to &#39;active&#39;]
**firstName** | **String** | First name of the contact | [optional] 
**lastName** | **String** | Last name of the contact | [optional] 
**birthDate** | **Date** | Birth date of the contact | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**email** | **String** | Email of the contact | [optional] 
**cellphone** | **String** | Cellphone of the contact (country code followed by phone number, split by &#39;-&#39;) | [optional] 
**phone** | **String** | Phone of the contact (country code followed by phone number, split by &#39;-&#39;) | [optional] 
**pushTokenAndroid** | [**[ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner]**](ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner.md) | Android push token of the contact | [optional] 
**pushTokenIos** | [**[ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner]**](ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner.md) | IOS push token of the contact | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `removed` (value: `"removed"`)

* `unconfirmed` (value: `"unconfirmed"`)




