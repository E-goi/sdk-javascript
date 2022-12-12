# egoisdk.ReportsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getEmailReport**](ReportsApi.md#getEmailReport) | **GET** /reports/email/{campaign_hash} | Get email report
[**getSMSReport**](ReportsApi.md#getSMSReport) | **GET** /reports/sms/{campaign_hash} | Get sms report
[**getVoiceReport**](ReportsApi.md#getVoiceReport) | **GET** /reports/voice/{campaign_hash} | Get voice report
[**getWebPushReport**](ReportsApi.md#getWebPushReport) | **GET** /reports/web-push/{campaign_hash} | Get webpush report



## getEmailReport

> EmailReport getEmailReport(campaignHash, opts)

Get email report

Returns email report given the campaign hash

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ReportsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let opts = {
  'date': true, // Boolean | True to show date stats
  'weekday': true, // Boolean | True to show weekday stats
  'hour': true, // Boolean | True to show hour stats
  'location': true, // Boolean | True to show location stats
  'domain': true, // Boolean | True to show Domain stats
  'url': true, // Boolean | True to show Url stats
  'reader': true // Boolean | True to show Reader stats
};
apiInstance.getEmailReport(campaignHash, opts, (error, data, response) => {
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
 **campaignHash** | **String**| ID of the Campaign | 
 **date** | **Boolean**| True to show date stats | [optional] [default to true]
 **weekday** | **Boolean**| True to show weekday stats | [optional] [default to true]
 **hour** | **Boolean**| True to show hour stats | [optional] [default to true]
 **location** | **Boolean**| True to show location stats | [optional] [default to true]
 **domain** | **Boolean**| True to show Domain stats | [optional] [default to true]
 **url** | **Boolean**| True to show Url stats | [optional] [default to true]
 **reader** | **Boolean**| True to show Reader stats | [optional] [default to true]

### Return type

[**EmailReport**](EmailReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSMSReport

> PhoneReport getSMSReport(campaignHash, opts)

Get sms report

Returns sms report given the campaign hash

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ReportsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let opts = {
  'networks': true // Boolean | True to show network stats
};
apiInstance.getSMSReport(campaignHash, opts, (error, data, response) => {
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
 **campaignHash** | **String**| ID of the Campaign | 
 **networks** | **Boolean**| True to show network stats | [optional] [default to true]

### Return type

[**PhoneReport**](PhoneReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getVoiceReport

> PhoneReport getVoiceReport(campaignHash, opts)

Get voice report

Returns voice report given the campaign hash

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ReportsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let opts = {
  'networks': true // Boolean | True to show network stats
};
apiInstance.getVoiceReport(campaignHash, opts, (error, data, response) => {
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
 **campaignHash** | **String**| ID of the Campaign | 
 **networks** | **Boolean**| True to show network stats | [optional] [default to true]

### Return type

[**PhoneReport**](PhoneReport.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWebPushReport

> WebPushReport getWebPushReport(campaignHash, opts)

Get webpush report

Returns webpush report given the campaign hash

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ReportsApi();
let campaignHash = "campaignHash_example"; // String | ID of the Campaign
let opts = {
  'devices': true, // Boolean | True to show device stats
  'operatingSystems': true, // Boolean | True to show operating systems stats
  'browsers': true, // Boolean | True to show browser stats
  'url': true // Boolean | True to show url stats
};
apiInstance.getWebPushReport(campaignHash, opts, (error, data, response) => {
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

