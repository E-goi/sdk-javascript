# egoiSdk.VoiceApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionSendVoice**](VoiceApi.md#actionSendVoice) | **POST** /campaigns/voice/{campaign_hash}/actions/send | Send voice message
[**createVoiceCampaign**](VoiceApi.md#createVoiceCampaign) | **POST** /campaigns/voice | Create new voice campaign
[**patchVoiceCampaign**](VoiceApi.md#patchVoiceCampaign) | **PATCH** /campaigns/voice/{campaign_hash} | Update a specific voice campaign


<a name="actionSendVoice"></a>
# **actionSendVoice**
> AcceptedResponse actionSendVoice(campaignHash, campaignVoiceSendRequest)

Send voice message

Deploys and sends an voice message

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.VoiceApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var campaignVoiceSendRequest = {"schedule_date":"2019-04-01 12:30:23","list_id":1,"segments":{"type":"none"},"notify":[0],"destination_field":"cellphone","limit_contacts":{"type":"percent","value":10},"limit_hour":{"hour_start":"01:00","hour_end":"04:00"},"limit_speed":1}; // CampaignVoiceSendRequest | Parameters for the 'send voice' action
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionSendVoice(campaignHash, campaignVoiceSendRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **campaignVoiceSendRequest** | [**CampaignVoiceSendRequest**](CampaignVoiceSendRequest.md)| Parameters for the &#39;send voice&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createVoiceCampaign"></a>
# **createVoiceCampaign**
> CampaignHash createVoiceCampaign(voiceCampaign)

Create new voice campaign

Create a new voice campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.VoiceApi();
var voiceCampaign = new egoiSdk.VoiceCampaign(); // VoiceCampaign | Parameters for the Voice Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createVoiceCampaign(voiceCampaign, callback);
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

<a name="patchVoiceCampaign"></a>
# **patchVoiceCampaign**
> CampaignHash patchVoiceCampaign(campaignHash, voicePatchCampaign)

Update a specific voice campaign

Update a voice campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.VoiceApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var voicePatchCampaign = new egoiSdk.VoicePatchCampaign(); // VoicePatchCampaign | Parameters for the Voice Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchVoiceCampaign(campaignHash, voicePatchCampaign, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **voicePatchCampaign** | [**VoicePatchCampaign**](VoicePatchCampaign.md)| Parameters for the Voice Campaign | 

### Return type

[**CampaignHash**](CampaignHash.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

