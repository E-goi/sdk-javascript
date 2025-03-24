# egoisdk.ContactBaseWithStatusFieldsSchemaBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactId** | **String** |  | [optional] [readonly] 
**status** | **String** | Status of the contact | [optional] [default to &#39;active&#39;]
**consent** | **String** | Contact consent | [optional] 
**firstName** | **String** | First name of the contact | [optional] 
**lastName** | **String** | Last name of the contact | [optional] 
**birthDate** | **Date** | Birth date of the contact | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**email** | **String** | Email of the contact | [optional] 
**emailStatus** | **String** | Email channel status | [optional] 
**cellphone** | **String** | Cellphone of the contact (country code followed by phone number, split by &#39;-&#39;) | [optional] 
**cellphoneStatus** | **String** | Cellphone channel status | [optional] 
**phone** | **String** | Phone of the contact (country code followed by phone number, split by &#39;-&#39;) | [optional] 
**phoneStatus** | **String** | Phone channel status | [optional] 
**pushTokenAndroid** | [**[ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner]**](ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner.md) | Android push token of the contact | [optional] 
**pushTokenIos** | [**[ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner]**](ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner.md) | IOS push token of the contact | [optional] 



## Enum: StatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)

* `removed` (value: `"removed"`)

* `unconfirmed` (value: `"unconfirmed"`)





## Enum: ConsentEnum


* `any` (value: `"any"`)

* `consent` (value: `"consent"`)

* `contract` (value: `"contract"`)

* `legitimate_interest` (value: `"legitimate_interest"`)

* `none` (value: `"none"`)

* `protect_vital_interests` (value: `"protect_vital_interests"`)

* `public_interests` (value: `"public_interests"`)

* `required_by_law` (value: `"required_by_law"`)

* `withdrawn` (value: `"withdrawn"`)





## Enum: EmailStatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)





## Enum: CellphoneStatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)





## Enum: PhoneStatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)




