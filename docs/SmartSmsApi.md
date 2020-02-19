# egoiSdk.SmartSmsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendSmartSms**](SmartSmsApi.md#actionSendSmartSms) | **POST** /campaigns/smart-sms/{campaign_hash}/actions/send | Send smart sms message
[**createSmartSmsCampaign**](SmartSmsApi.md#createSmartSmsCampaign) | **POST** /campaigns/smart-sms | Create new smart sms campaign
[**patchSmartSmsCampaign**](SmartSmsApi.md#patchSmartSmsCampaign) | **PATCH** /campaigns/smart-sms/{campaign_hash} | Update a specific smart sms campaign


<a name="actionSendSmartSms"></a>
# **actionSendSmartSms**
> AcceptedResponse actionSendSmartSms(campaignHash, campaignSmsSendRequest)

Send smart sms message

Deploys and sends a smart sms message

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.SmartSmsApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var campaignSmsSendRequest = new egoiSdk.CampaignSmsSendRequest(); // CampaignSmsSendRequest | Parameters for the 'send sms' action
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionSendSmartSms(campaignHash, campaignSmsSendRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **campaignSmsSendRequest** | [**CampaignSmsSendRequest**](CampaignSmsSendRequest.md)| Parameters for the &#39;send sms&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createSmartSmsCampaign"></a>
# **createSmartSmsCampaign**
> HashcodeCampaign createSmartSmsCampaign(smartSmsCampaign)

Create new smart sms campaign

Creates a new smart sms campaign.                         **DISCLAIMER:** A URL will be added at the end of your SMS

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.SmartSmsApi();
var smartSmsCampaign = new egoiSdk.SmartSmsCampaign(); // SmartSmsCampaign | Parameters for the Smart Sms Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSmartSmsCampaign(smartSmsCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartSmsCampaign** | [**SmartSmsCampaign**](SmartSmsCampaign.md)| Parameters for the Smart Sms Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchSmartSmsCampaign"></a>
# **patchSmartSmsCampaign**
> HashcodeCampaign patchSmartSmsCampaign(campaignHash, smartSmsCampaignPatchRequest)

Update a specific smart sms campaign

Update smart sms campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.SmartSmsApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var smartSmsCampaignPatchRequest = new egoiSdk.SmartSmsCampaignPatchRequest(); // SmartSmsCampaignPatchRequest | Parameters for the Smart Sms Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchSmartSmsCampaign(campaignHash, smartSmsCampaignPatchRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **smartSmsCampaignPatchRequest** | [**SmartSmsCampaignPatchRequest**](SmartSmsCampaignPatchRequest.md)| Parameters for the Smart Sms Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

