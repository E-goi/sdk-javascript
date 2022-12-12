# egoisdk.CampaignSmartSmsScheduleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheduleDate** | **Date** | The date and time | [optional] 
**listId** | **Number** |  | 
**destinationField** | **String** | Smart SMS campaign destination field. Must be &#39;cellphone&#39; or the other field ID of type                                 cellphone | 
**segments** | [**SmartSmsSegmentsActionSend**](SmartSmsSegmentsActionSend.md) |  | 
**limitHour** | [**LimitHourActionSendLimitHour**](LimitHourActionSendLimitHour.md) |  | [optional] 
**notify** | **[Number]** | Array of IDs of the users to notify | [optional] 


