# egoisdk.CampaignVoiceScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduleDate** | **Date** | The date and time | [optional] 
**listId** | **Number** |  | 
**destinationField** | **String** | Destination field of this campaign | 
**uniqueContactsOnly** | **Boolean** | True to send the campaign only to unique contacts | [optional] [default to false]
**segments** | [**OSegmentsActionSend**](OSegmentsActionSend.md) |  | 
**notify** | **[Number]** | Array of IDs of the users to notify | [optional] 
**limitContacts** | [**OLimitContactsActionSend**](OLimitContactsActionSend.md) |  | [optional] 
**limitHour** | [**LimitHourActionSendLimitHour**](LimitHourActionSendLimitHour.md) |  | [optional] 
**limitSpeed** | **Number** | Speed limit to send the campaign | [optional] 



## Enum: DestinationFieldEnum


* `phone` (value: `"phone"`)

* `cellphone` (value: `"cellphone"`)

* `phone_failsafe_cellphone` (value: `"phone_failsafe_cellphone"`)

* `cellphone_failsafe_phone` (value: `"cellphone_failsafe_phone"`)

* `cellphone_phone` (value: `"cellphone_phone"`)




