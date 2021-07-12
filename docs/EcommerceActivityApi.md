# egoiSdk.EcommerceActivityApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importOrdersBulk**](EcommerceActivityApi.md#importOrdersBulk) | **POST** /lists/{list_id}/orders | Orders import bulk request


<a name="importOrdersBulk"></a>
# **importOrdersBulk**
> AcceptedResponse importOrdersBulk(listId, importOrdersBulkBulkRequest)

Orders import bulk request

Creates new bulk orders syncronization

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceActivityApi();
var listId = 56; // Number | ID of the List
var importOrdersBulkBulkRequest = [new egoiSdk.ImportOrdersBulkBulkRequest()]; // [ImportOrdersBulkBulkRequest] | Parameters for the Orders
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importOrdersBulk(listId, importOrdersBulkBulkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **importOrdersBulkBulkRequest** | [**[ImportOrdersBulkBulkRequest]**](Array.md)| Parameters for the Orders | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

