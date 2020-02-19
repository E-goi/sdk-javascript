# egoiSdk.PushApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendPush**](PushApi.md#actionSendPush) | **POST** /campaigns/push/{campaign_hash}/actions/send | Send push message
[**createPushCampaign**](PushApi.md#createPushCampaign) | **POST** /campaigns/push | Create new push campaign
[**patchPushCampaign**](PushApi.md#patchPushCampaign) | **PATCH** /campaigns/push/{campaign_hash} | Update a specific push campaign


<a name="actionSendPush"></a>
# **actionSendPush**
> AcceptedResponse actionSendPush(campaignHash, campaignPushSendRequest)

Send push message

Deploys and sends a push message

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.PushApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var campaignPushSendRequest = new egoiSdk.CampaignPushSendRequest(); // CampaignPushSendRequest | Parameters for the 'send push' action
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionSendPush(campaignHash, campaignPushSendRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **campaignPushSendRequest** | [**CampaignPushSendRequest**](CampaignPushSendRequest.md)| Parameters for the &#39;send push&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createPushCampaign"></a>
# **createPushCampaign**
> HashcodeCampaign createPushCampaign(pushCampaignPostRequest)

Create new push campaign

Create a new push campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.PushApi();
var pushCampaignPostRequest = new egoiSdk.PushCampaignPostRequest(); // PushCampaignPostRequest | Parameters for the push campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPushCampaign(pushCampaignPostRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pushCampaignPostRequest** | [**PushCampaignPostRequest**](PushCampaignPostRequest.md)| Parameters for the push campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchPushCampaign"></a>
# **patchPushCampaign**
> HashcodeCampaign patchPushCampaign(campaignHash, pushCampaignPatchRequest)

Update a specific push campaign

Update push campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.PushApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var pushCampaignPatchRequest = new egoiSdk.PushCampaignPatchRequest(); // PushCampaignPatchRequest | Parameters for the push campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchPushCampaign(campaignHash, pushCampaignPatchRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **pushCampaignPatchRequest** | [**PushCampaignPatchRequest**](PushCampaignPatchRequest.md)| Parameters for the push campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

