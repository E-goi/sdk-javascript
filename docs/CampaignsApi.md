# egoisdk.CampaignsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteCampaigns**](CampaignsApi.md#deleteCampaigns) | **DELETE** /campaigns/{campaign_hash} | Remove Campaign
[**getAllCampaigns**](CampaignsApi.md#getAllCampaigns) | **GET** /campaigns | Get all Campaigns



## deleteCampaigns

> deleteCampaigns(campaignHash)

Remove Campaign

Remove campaign information given its ID

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.CampaignsApi();
let campaignHash = "campaignHash_example"; // String | Hash of the Campaign
apiInstance.deleteCampaigns(campaignHash, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| Hash of the Campaign | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCampaigns

> CampaignsCollection getAllCampaigns(opts)

Get all Campaigns

Returns all campaigns

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.CampaignsApi();
let opts = {
  'channel': "channel_example", // String | Channel of the campaign
  'campaignHash': "campaignHash_example", // String | Hash of the campaign
  'listId': 56, // Number | ID of the list where the campaign belongs
  'status': "status_example", // String | Status of the campaign
  'internalName': "internalName_example", // String | Internal name of the campaign
  'createdBy': 56, // Number | ID of the user who created the campaign
  'groupId': 56, // Number | ID of the group where the campaign belongs
  'createdMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Created initial date
  'createdMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Created finish
  'updatedMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated initial
  'updatedMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated finish
  'startDateMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date initial
  'startDateMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date finish
  'endDateMin': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date initial
  'endDateMax': new Date("2013-10-20T19:20:30+01:00"), // Date | End Date finish
  'scheduleDateMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Schedule Date initial
  'scheduleDateMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Schedule Date finish
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 100, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'created'" // String | Reference attribute to order campaigns
};
apiInstance.getAllCampaigns(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel** | **String**| Channel of the campaign | [optional] 
 **campaignHash** | **String**| Hash of the campaign | [optional] 
 **listId** | **Number**| ID of the list where the campaign belongs | [optional] 
 **status** | **String**| Status of the campaign | [optional] 
 **internalName** | **String**| Internal name of the campaign | [optional] 
 **createdBy** | **Number**| ID of the user who created the campaign | [optional] 
 **groupId** | **Number**| ID of the group where the campaign belongs | [optional] 
 **createdMin** | **Date**| Created initial date | [optional] 
 **createdMax** | **Date**| Created finish | [optional] 
 **updatedMin** | **Date**| Updated initial | [optional] 
 **updatedMax** | **Date**| Updated finish | [optional] 
 **startDateMin** | **Date**| Start date initial | [optional] 
 **startDateMax** | **Date**| Start date finish | [optional] 
 **endDateMin** | **Date**| End Date initial | [optional] 
 **endDateMax** | **Date**| End Date finish | [optional] 
 **scheduleDateMin** | **Date**| Schedule Date initial | [optional] 
 **scheduleDateMax** | **Date**| Schedule Date finish | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 100]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order campaigns | [optional] [default to &#39;created&#39;]

### Return type

[**CampaignsCollection**](CampaignsCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

