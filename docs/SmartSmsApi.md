# egoisdk.SmartSmsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendSmartSms**](SmartSmsApi.md#actionSendSmartSms) | **POST** /campaigns/smart-sms/{campaign_hash}/actions/send | Send smart sms message
[**createSmartSmsCampaign**](SmartSmsApi.md#createSmartSmsCampaign) | **POST** /campaigns/smart-sms | Create new smart sms campaign
[**patchSmartSmsCampaign**](SmartSmsApi.md#patchSmartSmsCampaign) | **PATCH** /campaigns/smart-sms/{campaign_hash} | Update a specific smart sms campaign



## actionSendSmartSms

> AcceptedResponse actionSendSmartSms(campaignHash, campaignSmsSendRequest)

Send smart sms message

Deploys and sends a smart sms message

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.SmartSmsApi();
let campaignHash = "campaignHash_example"; // String | Hash of the Campaign
let campaignSmsSendRequest = new egoisdk.CampaignSmsSendRequest(); // CampaignSmsSendRequest | Parameters for the 'send sms' action
apiInstance.actionSendSmartSms(campaignHash, campaignSmsSendRequest, (error, data, response) => {
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
 **campaignHash** | **String**| Hash of the Campaign | 
 **campaignSmsSendRequest** | [**CampaignSmsSendRequest**](CampaignSmsSendRequest.md)| Parameters for the &#39;send sms&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createSmartSmsCampaign

> HashcodeCampaign createSmartSmsCampaign(smartSmsCampaign)

Create new smart sms campaign

Creates a new smart sms campaign.                         **DISCLAIMER:** A URL will be added at the end of your SMS

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.SmartSmsApi();
let smartSmsCampaign = new egoisdk.SmartSmsCampaign(); // SmartSmsCampaign | Parameters for the Smart Sms Campaign
apiInstance.createSmartSmsCampaign(smartSmsCampaign, (error, data, response) => {
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
 **smartSmsCampaign** | [**SmartSmsCampaign**](SmartSmsCampaign.md)| Parameters for the Smart Sms Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchSmartSmsCampaign

> HashcodeCampaign patchSmartSmsCampaign(campaignHash, smartSmsCampaignPatchRequest)

Update a specific smart sms campaign

Update smart sms campaign

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.SmartSmsApi();
let campaignHash = "campaignHash_example"; // String | Hash of the Campaign
let smartSmsCampaignPatchRequest = new egoisdk.SmartSmsCampaignPatchRequest(); // SmartSmsCampaignPatchRequest | Parameters for the Smart Sms Campaign
apiInstance.patchSmartSmsCampaign(campaignHash, smartSmsCampaignPatchRequest, (error, data, response) => {
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
 **campaignHash** | **String**| Hash of the Campaign | 
 **smartSmsCampaignPatchRequest** | [**SmartSmsCampaignPatchRequest**](SmartSmsCampaignPatchRequest.md)| Parameters for the Smart Sms Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

