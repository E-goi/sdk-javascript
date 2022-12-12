# egoisdk.Campaign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaignHash** | **String** |  | [optional] [readonly] 
**status** | **String** | Status of the campaign | [optional] 
**thumbnail** | **String** | Thumbnail of the campaign | [optional] 
**channel** | **String** | Channel of the campaign | [optional] 
**internalName** | **String** | Internal name of the campaign | [optional] 
**listId** | **Number** |  | [optional] [readonly] 
**title** | **String** | Subject of the campaign | [optional] 
**createdBy** | **Number** |  | [optional] [readonly] 
**groupId** | **Number** |  | [optional] [readonly] 
**created** | **Date** |  | [optional] 
**updated** | **Date** |  | [optional] 
**startDate** | **Date** |  | [optional] 
**endDate** | **Date** |  | [optional] 
**scheduleDate** | [**CampaignScheduleDate**](CampaignScheduleDate.md) |  | [optional] 



## Enum: StatusEnum


* `draft` (value: `"draft"`)

* `canceled` (value: `"canceled"`)

* `queued` (value: `"queued"`)

* `paused` (value: `"paused"`)

* `sending` (value: `"sending"`)

* `sent` (value: `"sent"`)





## Enum: ChannelEnum


* `email` (value: `"email"`)

* `push` (value: `"push"`)

* `sms` (value: `"sms"`)

* `smart_sms` (value: `"smart_sms"`)

* `voice` (value: `"voice"`)

* `web_push` (value: `"web_push"`)




