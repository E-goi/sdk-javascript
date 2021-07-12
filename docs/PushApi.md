# egoiSdk.PushApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendPush**](PushApi.md#actionSendPush) | **POST** /campaigns/push/{campaign_hash}/actions/send | Send push message
[**createPushCampaign**](PushApi.md#createPushCampaign) | **POST** /campaigns/push | Create new push campaign
[**getPushApp**](PushApi.md#getPushApp) | **GET** /push/apps/{app_id} | Get a Push application from E-goi
[**getPushApps**](PushApi.md#getPushApps) | **GET** /push/apps | Get all Push applications from E-goi
[**patchPushCampaign**](PushApi.md#patchPushCampaign) | **PATCH** /campaigns/push/{campaign_hash} | Update a specific push campaign
[**registerPushEvent**](PushApi.md#registerPushEvent) | **POST** /push/apps/{app_id}/event | Registers an event from the push notification.
[**registerPushToken**](PushApi.md#registerPushToken) | **POST** /push/apps/{app_id}/token | Registers a Firebase token


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

<a name="getPushApp"></a>
# **getPushApp**
> AppStructure getPushApp(appId)

Get a Push application from E-goi

Get a Push application from E-goi

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
var appId = "appId_example"; // String | ID of the E-goi push app.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPushApp(appId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| ID of the E-goi push app. | 

### Return type

[**AppStructure**](AppStructure.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPushApps"></a>
# **getPushApps**
> [AppStructure] getPushApps(opts)

Get all Push applications from E-goi

Get all Push applications from E-goi

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
var opts = {
  'listId': 56 // Number | ID of the list to search for.
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPushApps(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the list to search for. | [optional] 

### Return type

[**[AppStructure]**](AppStructure.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
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

<a name="registerPushEvent"></a>
# **registerPushEvent**
> PushResponse registerPushEvent(appId, pushEvent)

Registers an event from the push notification.

Registers an event from the push notification.

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
var appId = "appId_example"; // String | ID of the E-goi push app.
var pushEvent = new egoiSdk.PushEvent(); // PushEvent | Parameters for the event
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerPushEvent(appId, pushEvent, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| ID of the E-goi push app. | 
 **pushEvent** | [**PushEvent**](PushEvent.md)| Parameters for the event | 

### Return type

[**PushResponse**](PushResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerPushToken"></a>
# **registerPushToken**
> PushResponse registerPushToken(appId, pushToken)

Registers a Firebase token

Registers a Firebase token

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
var appId = "appId_example"; // String | ID of the E-goi push app.
var pushToken = new egoiSdk.PushToken(); // PushToken | Parameters for the token
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerPushToken(appId, pushToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **String**| ID of the E-goi push app. | 
 **pushToken** | [**PushToken**](PushToken.md)| Parameters for the token | 

### Return type

[**PushResponse**](PushResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

