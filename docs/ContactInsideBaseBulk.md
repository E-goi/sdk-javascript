# egoisdk.ContactInsideBaseBulk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contactId** | **String** |  | [optional] [readonly] 
**status** | **String** | Status of the contact | [optional] [default to &#39;active&#39;]
**consent** | **String** | Contact consent | [optional] [readonly] [default to &#39;consent&#39;]
**consentDate** | **Date** | Date and hour of the contact consent | [optional] [readonly] 
**subscriptionMethod** | **String** | Contact subscription method | [optional] [readonly] 
**subscriptionDate** | **Date** | Date and hour of the contact subscription | [optional] [readonly] 
**subscriptionForm** | **Number** | Contact subscription form | [optional] [readonly] 
**unsubscriptionMethod** | **String** | Contact unsubscription method | [optional] [readonly] 
**unsubscriptionReason** | **String** | Contact unsubscription reason | [optional] [readonly] 
**unsubscriptionObservation** | **String** | Contact unsubscription observation | [optional] [readonly] 
**unsubscriptionDate** | **Date** | Contact unsubscription date | [optional] [readonly] 
**changeDate** | **Date** | Last modification date of the contact | [optional] [readonly] 
**firstName** | **String** | First name of the contact | [optional] 
**lastName** | **String** | Last name of the contact | [optional] 
**birthDate** | **Date** | Birth date of the contact | [optional] 
**language** | [**Language**](Language.md) |  | [optional] 
**email** | **String** | Email of the contact | [optional] 
**emailStatus** | **String** | Email channel status | [optional] [readonly] [default to &#39;active&#39;]
**cellphone** | **String** | Cellphone of the contact | [optional] 
**cellphoneStatus** | **String** | Cellphone channel status | [optional] [readonly] [default to &#39;active&#39;]
**phone** | **String** | Phone of the contact | [optional] 
**phoneStatus** | **String** | Phone channel status | [optional] [readonly] [default to &#39;active&#39;]
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





## Enum: SubscriptionMethodEnum


* `manual` (value: `"manual"`)

* `form` (value: `"form"`)

* `imported` (value: `"imported"`)

* `referral` (value: `"referral"`)

* `api` (value: `"api"`)





## Enum: UnsubscriptionMethodEnum


* `manual` (value: `"manual"`)

* `form` (value: `"form"`)

* `unsubscribe_link` (value: `"unsubscribe_link"`)

* `bounce` (value: `"bounce"`)

* `api` (value: `"api"`)

* `empty` (value: `""`)





## Enum: UnsubscriptionReasonEnum


* `not_interested` (value: `"not_interested"`)

* `lack_of_time` (value: `"lack_of_time"`)

* `email_address_change` (value: `"email_address_change"`)

* `spam` (value: `"spam"`)

* `other` (value: `"other"`)

* `empty` (value: `""`)





## Enum: EmailStatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)





## Enum: CellphoneStatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)





## Enum: PhoneStatusEnum


* `active` (value: `"active"`)

* `inactive` (value: `"inactive"`)




