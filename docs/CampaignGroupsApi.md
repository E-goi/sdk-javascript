# egoiSdk.CampaignGroupsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCampaignGroup**](CampaignGroupsApi.md#createCampaignGroup) | **POST** /campaign-groups | Create new campaign group
[**deleteCampaignGroup**](CampaignGroupsApi.md#deleteCampaignGroup) | **DELETE** /campaign-groups/{group_id} | Remove Campaign Group
[**getAllCampaignGroups**](CampaignGroupsApi.md#getAllCampaignGroups) | **GET** /campaign-groups | Get all campaign groups
[**updateCampaignGroup**](CampaignGroupsApi.md#updateCampaignGroup) | **PUT** /campaign-groups/{group_id} | Update a specific campaign group


<a name="createCampaignGroup"></a>
# **createCampaignGroup**
> CampaignGroup createCampaignGroup(campaignGroup)

Create new campaign group

Create a new campaign group

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.CampaignGroupsApi();
var campaignGroup = new egoiSdk.CampaignGroup(); // CampaignGroup | Parameters for the Campaign Group
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCampaignGroup(campaignGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignGroup** | [**CampaignGroup**](CampaignGroup.md)| Parameters for the Campaign Group | 

### Return type

[**CampaignGroup**](CampaignGroup.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCampaignGroup"></a>
# **deleteCampaignGroup**
> deleteCampaignGroup(groupId)

Remove Campaign Group

Remove campaign group information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.CampaignGroupsApi();
var groupId = 56; // Number | ID of the Campaign Group
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCampaignGroup(groupId, callback);
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

<a name="getAllCampaignGroups"></a>
# **getAllCampaignGroups**
> CampaignGroupCollection getAllCampaignGroups(opts)

Get all campaign groups

Returns all campaign groups

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.CampaignGroupsApi();
var opts = {
  'groupId': 56, // Number | Reference attribute to campaign group id
  'name': "name_example", // String | Reference attribute to campaign group id
  'limit': 10, // Number | Number of items to return
  'offset': 56 // Number | Element offset (starting at zero for the first element)
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCampaignGroups(opts, callback);
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

<a name="updateCampaignGroup"></a>
# **updateCampaignGroup**
> CampaignGroup updateCampaignGroup(groupId, campaignGroup)

Update a specific campaign group

Update a campaign group

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.CampaignGroupsApi();
var groupId = 56; // Number | ID of the Campaign Group
var campaignGroup = new egoiSdk.CampaignGroup(); // CampaignGroup | Parameters for the Campaign Group
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCampaignGroup(groupId, campaignGroup, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Number**| ID of the Campaign Group | 
 **campaignGroup** | [**CampaignGroup**](CampaignGroup.md)| Parameters for the Campaign Group | 

### Return type

[**CampaignGroup**](CampaignGroup.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

