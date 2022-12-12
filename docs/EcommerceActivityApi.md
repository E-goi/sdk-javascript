# egoisdk.EcommerceActivityApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importOrdersBulk**](EcommerceActivityApi.md#importOrdersBulk) | **POST** /lists/{list_id}/orders | Orders import bulk request



## importOrdersBulk

> AcceptedResponse importOrdersBulk(listId, importOrdersBulkBulkRequest)

Orders import bulk request

Creates new bulk orders syncronization &lt;/br&gt;      **DISCLAIMER:** stream limits applied. [view here](#section/Stream-Limits &#39;Stream Limits&#39;)

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceActivityApi();
let listId = 56; // Number | ID of the List
let importOrdersBulkBulkRequest = [new egoisdk.ImportOrdersBulkBulkRequest()]; // [ImportOrdersBulkBulkRequest] | Parameters for the Orders
apiInstance.importOrdersBulk(listId, importOrdersBulkBulkRequest, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 
 **importOrdersBulkBulkRequest** | [**[ImportOrdersBulkBulkRequest]**](ImportOrdersBulkBulkRequest.md)| Parameters for the Orders | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

