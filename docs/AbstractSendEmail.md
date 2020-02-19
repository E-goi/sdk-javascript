# egoiSdk.AbstractSendEmail

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listId** | **Number** |  | 
**segments** | [**EmailSendSegment**](EmailSendSegment.md) |  | 
**notify** | **[Number]** | Array of IDs of the users to notify | [optional] 
**destinationField** | **String** | Destination field of this campaign, which must be an email field (email or extra field id).                         If not sent, defaults to the general email field | [optional] 
**uniqueContactsOnly** | **Boolean** | True to send the campaign only to unique contacts | [optional] [default to false]


