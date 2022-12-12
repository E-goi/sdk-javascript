# egoisdk.CampaignGroupsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaignGroup**](CampaignGroupsApi.md#createCampaignGroup) | **POST** /campaign-groups | Create new campaign group
[**deleteCampaignGroup**](CampaignGroupsApi.md#deleteCampaignGroup) | **DELETE** /campaign-groups/{group_id} | Remove Campaign Group
[**getAllCampaignGroups**](CampaignGroupsApi.md#getAllCampaignGroups) | **GET** /campaign-groups | Get all campaign groups
[**updateCampaignGroup**](CampaignGroupsApi.md#updateCampaignGroup) | **PUT** /campaign-groups/{group_id} | Update a specific campaign group



## createCampaignGroup

> CampaignGroup createCampaignGroup(campaignGroupPost)

Create new campaign group

Create a new campaign group

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.CampaignGroupsApi();
let campaignGroupPost = new egoisdk.CampaignGroupPost(); // CampaignGroupPost | Parameters for the Campaign Group
apiInstance.createCampaignGroup(campaignGroupPost, (error, data, response) => {
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
 **campaignGroupPost** | [**CampaignGroupPost**](CampaignGroupPost.md)| Parameters for the Campaign Group | 

### Return type

[**CampaignGroup**](CampaignGroup.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCampaignGroup

> deleteCampaignGroup(groupId)

Remove Campaign Group

Remove campaign group information given its ID

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.CampaignGroupsApi();
let groupId = 56; // Number | ID of the Campaign Group
apiInstance.deleteCampaignGroup(groupId, (error, data, response) => {
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
 **groupId** | **Number**| ID of the Campaign Group | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCampaignGroups

> CampaignGroupCollection getAllCampaignGroups(opts)

Get all campaign groups

Returns all campaign groups

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.CampaignGroupsApi();
let opts = {
  'groupId': 56, // Number | Reference attribute to campaign group id
  'name': "name_example", // String | Reference attribute to campaign group id
  'limit': 10, // Number | Number of items to return
  'offset': 56 // Number | Element offset (starting at zero for the first element)
};
apiInstance.getAllCampaignGroups(opts, (error, data, response) => {
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
 **groupId** | **Number**| Reference attribute to campaign group id | [optional] 
 **name** | **String**| Reference attribute to campaign group id | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 

### Return type

[**CampaignGroupCollection**](CampaignGroupCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateCampaignGroup

> CampaignGroup updateCampaignGroup(groupId, campaignGroupPost)

Update a specific campaign group

Update a campaign group

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.CampaignGroupsApi();
let groupId = 56; // Number | ID of the Campaign Group
let campaignGroupPost = new egoisdk.CampaignGroupPost(); // CampaignGroupPost | Parameters for the Campaign Group
apiInstance.updateCampaignGroup(groupId, campaignGroupPost, (error, data, response) => {
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
 **groupId** | **Number**| ID of the Campaign Group | 
 **campaignGroupPost** | [**CampaignGroupPost**](CampaignGroupPost.md)| Parameters for the Campaign Group | 

### Return type

[**CampaignGroup**](CampaignGroup.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

