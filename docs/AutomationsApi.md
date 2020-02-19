# egoiSdk.AutomationsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAutomation**](AutomationsApi.md#deleteAutomation) | **DELETE** /automations/{automation_id} | Remove automation
[**getAllAutomations**](AutomationsApi.md#getAllAutomations) | **GET** /automations | Get all automations


<a name="deleteAutomation"></a>
# **deleteAutomation**
> deleteAutomation(automationId)

Remove automation

Remove automation information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AutomationsApi();
var automationId = 56; // Number | ID of the Automation
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAutomation(automationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **Number**| ID of the Automation | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllAutomations"></a>
# **getAllAutomations**
> AutomationCollection getAllAutomations(opts)

Get all automations

Returns all automations

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AutomationsApi();
var opts = {
  'automationId': 56, // Number | Reference attribute to automation id
  'title': "title_example", // String | Reference attribute to title
  'createdBy': 56, // Number | Reference attribute to created by
  'listId': 56, // Number | ID of the list that owns the automation
  'status': "status_example", // String | Automation status
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'automation_id'" // String | Reference attribute to order automations
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllAutomations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **automationId** | **Number**| Reference attribute to automation id | [optional] 
 **title** | **String**| Reference attribute to title | [optional] 
 **createdBy** | **Number**| Reference attribute to created by | [optional] 
 **listId** | **Number**| ID of the list that owns the automation | [optional] 
 **status** | **String**| Automation status | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order automations | [optional] [default to &#39;automation_id&#39;]

### Return type

[**AutomationCollection**](AutomationCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

