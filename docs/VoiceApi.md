# egoisdk.VoiceApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendVoice**](VoiceApi.md#actionSendVoice) | **POST** /campaigns/voice/{campaign_hash}/actions/send | Send voice message
[**createVoiceCampaign**](VoiceApi.md#createVoiceCampaign) | **POST** /campaigns/voice | Create new voice campaign
[**patchVoiceCampaign**](VoiceApi.md#patchVoiceCampaign) | **PATCH** /campaigns/voice/{campaign_hash} | Update a specific voice campaign



## actionSendVoice

> AcceptedResponse actionSendVoice(campaignHash, campaignVoiceSendRequest)

Send voice message

Deploys and sends an voice message

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.VoiceApi();
let campaignHash = "campaignHash_example"; // String | Hash of the Campaign
let campaignVoiceSendRequest = {"schedule_date":"2019-04-01 12:30:23","list_id":1,"segments":{"type":"none"},"notify":[0],"destination_field":"cellphone","unique_contacts_only":true,"limit_contacts":{"type":"percent","value":10},"limit_hour":{"hour_start":"01:00","hour_end":"04:00"},"limit_speed":1}; // CampaignVoiceSendRequest | Parameters for the 'send voice' action
apiInstance.actionSendVoice(campaignHash, campaignVoiceSendRequest, (error, data, response) => {
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
 **campaignVoiceSendRequest** | [**CampaignVoiceSendRequest**](CampaignVoiceSendRequest.md)| Parameters for the &#39;send voice&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createVoiceCampaign

> CampaignHash createVoiceCampaign(voiceCampaign)

Create new voice campaign

Create a new voice campaign

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.VoiceApi();
let voiceCampaign = new egoisdk.VoiceCampaign(); // VoiceCampaign | Parameters for the Voice Campaign
apiInstance.createVoiceCampaign(voiceCampaign, (error, data, response) => {
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
 **voiceCampaign** | [**VoiceCampaign**](VoiceCampaign.md)| Parameters for the Voice Campaign | 

### Return type

[**CampaignHash**](CampaignHash.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## patchVoiceCampaign

> PatchVoiceCampaign200Response patchVoiceCampaign(campaignHash, voicePatchCampaign)

Update a specific voice campaign

Update a voice campaign

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.VoiceApi();
let campaignHash = "campaignHash_example"; // String | Hash of the Campaign
let voicePatchCampaign = new egoisdk.VoicePatchCampaign(); // VoicePatchCampaign | Parameters for the Voice Campaign
apiInstance.patchVoiceCampaign(campaignHash, voicePatchCampaign, (error, data, response) => {
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
 **voicePatchCampaign** | [**VoicePatchCampaign**](VoicePatchCampaign.md)| Parameters for the Voice Campaign | 

### Return type

[**PatchVoiceCampaign200Response**](PatchVoiceCampaign200Response.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

