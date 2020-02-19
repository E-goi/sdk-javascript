# egoiSdk.SmsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendSms**](SmsApi.md#actionSendSms) | **POST** /campaigns/sms/{campaign_hash}/actions/send | Send sms message
[**createSmsCampaign**](SmsApi.md#createSmsCampaign) | **POST** /campaigns/sms | Create new sms campaign
[**patchSmsCampaign**](SmsApi.md#patchSmsCampaign) | **PATCH** /campaigns/sms/{campaign_hash} | Update a specific sms campaign


<a name="actionSendSms"></a>
# **actionSendSms**
> AcceptedResponse actionSendSms(campaignHash, campaignSmsSendRequest)

Send sms message

Deploys and sends an sms message

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.SmsApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var campaignSmsSendRequest = new egoiSdk.CampaignSmsSendRequest(); // CampaignSmsSendRequest | Parameters for the 'send sms' action
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionSendSms(campaignHash, campaignSmsSendRequest, callback);
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

<a name="createSmsCampaign"></a>
# **createSmsCampaign**
> HashcodeCampaign createSmsCampaign(smsCampaign)

Create new sms campaign

Create a new sms campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.SmsApi();
var smsCampaign = new egoiSdk.SmsCampaign(); // SmsCampaign | Parameters for the Sms Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSmsCampaign(smsCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smsCampaign** | [**SmsCampaign**](SmsCampaign.md)| Parameters for the Sms Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchSmsCampaign"></a>
# **patchSmsCampaign**
> HashcodeCampaign patchSmsCampaign(campaignHash, smsCampaignPatchRequest)

Update a specific sms campaign

Update sms campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.SmsApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var smsCampaignPatchRequest = new egoiSdk.SmsCampaignPatchRequest(); // SmsCampaignPatchRequest | Parameters for the Sms Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchSmsCampaign(campaignHash, smsCampaignPatchRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **smsCampaignPatchRequest** | [**SmsCampaignPatchRequest**](SmsCampaignPatchRequest.md)| Parameters for the Sms Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

