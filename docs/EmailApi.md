# egoiSdk.EmailApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionEnableEmailRss**](EmailApi.md#actionEnableEmailRss) | **POST** /campaigns/email/rss/{campaign_hash}/actions/enable | Enables a rss email campaign
[**actionSendEmail**](EmailApi.md#actionSendEmail) | **POST** /campaigns/email/{campaign_hash}/actions/send | Send email message
[**createEmailCampaign**](EmailApi.md#createEmailCampaign) | **POST** /campaigns/email | Create new email campaign
[**createEmailRssCampaign**](EmailApi.md#createEmailRssCampaign) | **POST** /campaigns/email/rss | Create new email rss campaign
[**patchEmailCampaign**](EmailApi.md#patchEmailCampaign) | **PATCH** /campaigns/email/{campaign_hash} | Update a specific email campaign


<a name="actionEnableEmailRss"></a>
# **actionEnableEmailRss**
> AcceptedResponse actionEnableEmailRss(campaignHash)

Enables a rss email campaign

Enables a rss email message

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EmailApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionEnableEmailRss(campaignHash, callback);
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

<a name="actionSendEmail"></a>
# **actionSendEmail**
> AcceptedResponse actionSendEmail(campaignHash, campaignEmailSendRequest)

Send email message

Deploys and sends an email message

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EmailApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var campaignEmailSendRequest = new egoiSdk.CampaignEmailSendRequest(); // CampaignEmailSendRequest | Parameters for the 'send email' action
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionSendEmail(campaignHash, campaignEmailSendRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **campaignEmailSendRequest** | [**CampaignEmailSendRequest**](CampaignEmailSendRequest.md)| Parameters for the &#39;send email&#39; action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEmailCampaign"></a>
# **createEmailCampaign**
> HashcodeCampaign createEmailCampaign(emailCampaignCreate)

Create new email campaign

Create a new email campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EmailApi();
var emailCampaignCreate = new egoiSdk.EmailCampaignCreate(); // EmailCampaignCreate | Parameters for the Email Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEmailCampaign(emailCampaignCreate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailCampaignCreate** | [**EmailCampaignCreate**](EmailCampaignCreate.md)| Parameters for the Email Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEmailRssCampaign"></a>
# **createEmailRssCampaign**
> HashcodeCampaign createEmailRssCampaign(emailRssCampaignCreate)

Create new email rss campaign

Create a new email rss campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EmailApi();
var emailRssCampaignCreate = new egoiSdk.EmailRssCampaignCreate(); // EmailRssCampaignCreate | Parameters for the Email Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEmailRssCampaign(emailRssCampaignCreate, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailRssCampaignCreate** | [**EmailRssCampaignCreate**](EmailRssCampaignCreate.md)| Parameters for the Email Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchEmailCampaign"></a>
# **patchEmailCampaign**
> HashcodeCampaign patchEmailCampaign(campaignHash, emailCampaignPatch)

Update a specific email campaign

Update email campaign

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EmailApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var emailCampaignPatch = new egoiSdk.EmailCampaignPatch(); // EmailCampaignPatch | Parameters for the Email Campaign
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchEmailCampaign(campaignHash, emailCampaignPatch, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **emailCampaignPatch** | [**EmailCampaignPatch**](EmailCampaignPatch.md)| Parameters for the Email Campaign | 

### Return type

[**HashcodeCampaign**](HashcodeCampaign.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

