# egoiSdk.ReportsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSMSReport**](ReportsApi.md#getSMSReport) | **GET** /reports/sms/{campaign_hash} | Get sms report
[**getVoiceReport**](ReportsApi.md#getVoiceReport) | **GET** /reports/voice/{campaign_hash} | Get voice report
[**getWebPushReport**](ReportsApi.md#getWebPushReport) | **GET** /reports/web-push/{campaign_hash} | Get webpush report


<a name="getSMSReport"></a>
# **getSMSReport**
> PhoneReport getSMSReport(campaignHash, opts)

Get sms report

Returns sms report given the campaign hash

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ReportsApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var opts = {
  'networks': true // Boolean | True to show network stats
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSMSReport(campaignHash, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **networks** | **Boolean**| True to show network stats | [optional] [default to true]

### Return type

[**PhoneReport**](PhoneReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVoiceReport"></a>
# **getVoiceReport**
> PhoneReport getVoiceReport(campaignHash, opts)

Get voice report

Returns voice report given the campaign hash

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ReportsApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var opts = {
  'networks': true // Boolean | True to show network stats
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVoiceReport(campaignHash, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **networks** | **Boolean**| True to show network stats | [optional] [default to true]

### Return type

[**PhoneReport**](PhoneReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getWebPushReport"></a>
# **getWebPushReport**
> WebPushReport getWebPushReport(campaignHash, opts)

Get webpush report

Returns webpush report given the campaign hash

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ReportsApi();
var campaignHash = "campaignHash_example"; // String | ID of the Campaign
var opts = {
  'devices': true, // Boolean | True to show device stats
  'operatingSystems': true, // Boolean | True to show operating systems stats
  'browsers': true, // Boolean | True to show browser stats
  'url': true // Boolean | True to show url stats
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getWebPushReport(campaignHash, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignHash** | **String**| ID of the Campaign | 
 **devices** | **Boolean**| True to show device stats | [optional] [default to true]
 **operatingSystems** | **Boolean**| True to show operating systems stats | [optional] [default to true]
 **browsers** | **Boolean**| True to show browser stats | [optional] [default to true]
 **url** | **Boolean**| True to show url stats | [optional] [default to true]

### Return type

[**WebPushReport**](WebPushReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

