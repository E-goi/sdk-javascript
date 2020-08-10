# egoiSdk.WebpushApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionEnableWebPushRss**](WebpushApi.md#actionEnableWebPushRss) | **POST** /campaigns/webpush/rss/{campaign_hash}/actions/enable | Enable a rss webpush campaign
[**actionSendWebPush**](WebpushApi.md#actionSendWebPush) | **POST** /campaigns/web-push/{campaign_hash}/actions/send | Send webpush message
[**createWebPushCampaign**](WebpushApi.md#createWebPushCampaign) | **POST** /campaigns/web-push | Create new webpush campaign
[**createWebPushRssCampaign**](WebpushApi.md#createWebPushRssCampaign) | **POST** /campaigns/webpush/rss | Create new webpush rss campaign
[**createWebpushSite**](WebpushApi.md#createWebpushSite) | **POST** /webpush/sites | Creates a webpush site
[**getAllWebPushSites**](WebpushApi.md#getAllWebPushSites) | **GET** /webpush/sites | Get all webpush sites
[**patchWebPushCampaign**](WebpushApi.md#patchWebPushCampaign) | **PATCH** /campaigns/web-push/{campaign_hash} | Update a specific webpush campaign


<a name="actionEnableWebPushRss"></a>
# **actionEnableWebPushRss**
> AcceptedResponse actionEnableWebPushRss(campaignHash)

Enable a rss webpush campaign

Enable rss webpush message

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.WebpushApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionEnableWebPushRss(campaignHash, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="actionSendWebPush"></a>
# **actionSendWebPush**
> AcceptedResponse actionSendWebPush(campaignHash, campaignWebPushSendRequest)

Send webpush message

Deploys and sends a webpush message

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.WebpushApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var campaignWebPushSendRequest = new egoiSdk.CampaignWebPushSendRequest(); // CampaignWebPushSendRequest | Parameters for the 'send web-push' action
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionSendWebPush(campaignHash, campaignWebPushSendRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **campaignWebPushSendRequest** | [**CampaignWebPushSendRequest**](CampaignWebPushSendRequest.md)| Parameters for the &#39;send web-push&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createWebPushCampaign"></a>
# **createWebPushCampaign**
> CampaignHash createWebPushCampaign(webPushCampaign)

Create new webpush campaign

Create a new webpush campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.WebpushApi();
var webPushCampaign = new egoiSdk.WebPushCampaign(); // WebPushCampaign | Parameters for the webpush campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWebPushCampaign(webPushCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webPushCampaign** | [**WebPushCampaign**](WebPushCampaign.md)| Parameters for the webpush campaign | 

### Return type

[**CampaignHash**](CampaignHash.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createWebPushRssCampaign"></a>
# **createWebPushRssCampaign**
> HashcodeCampaign createWebPushRssCampaign(webPushRssCampaign)

Create new webpush rss campaign

Create a new webpush rss campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.WebpushApi();
var webPushRssCampaign = new egoiSdk.WebPushRssCampaign(); // WebPushRssCampaign | Parameters for the WebPush Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWebPushRssCampaign(webPushRssCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webPushRssCampaign** | [**WebPushRssCampaign**](WebPushRssCampaign.md)| Parameters for the WebPush Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createWebpushSite"></a>
# **createWebpushSite**
> WebPushSite createWebpushSite(webPushSite)

Creates a webpush site

Create a new webpush site

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.WebpushApi();
var webPushSite = new egoiSdk.WebPushSite(); // WebPushSite | Parameters for the webpush site
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createWebpushSite(webPushSite, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webPushSite** | [**WebPushSite**](WebPushSite.md)| Parameters for the webpush site | 

### Return type

[**WebPushSite**](WebPushSite.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWebPushSites"></a>
# **getAllWebPushSites**
> TagCollection1 getAllWebPushSites(opts)

Get all webpush sites

Returns all wepush&#39;s sites

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.WebpushApi();
var opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'list_id'", // String | Reference attribute to order sites
  'listId': 56 // Number | Select sites referenced to a list
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWebPushSites(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order sites | [optional] [default to &#39;list_id&#39;]
 **listId** | **Number**| Select sites referenced to a list | [optional] 

### Return type

[**TagCollection1**](TagCollection1.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchWebPushCampaign"></a>
# **patchWebPushCampaign**
> CampaignHash patchWebPushCampaign(campaignHash, webPushPatchCampaign)

Update a specific webpush campaign

Update a webpush campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.WebpushApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var webPushPatchCampaign = new egoiSdk.WebPushPatchCampaign(); // WebPushPatchCampaign | Parameters for the Webpush Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchWebPushCampaign(campaignHash, webPushPatchCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **webPushPatchCampaign** | [**WebPushPatchCampaign**](WebPushPatchCampaign.md)| Parameters for the Webpush Campaign | 

### Return type

[**CampaignHash**](CampaignHash.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

