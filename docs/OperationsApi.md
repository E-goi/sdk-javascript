# egoiSdk.OperationsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionApproveOperation**](OperationsApi.md#actionApproveOperation) | **POST** /operations/actions/approve | Approve operation
[**actionCancelOperation**](OperationsApi.md#actionCancelOperation) | **POST** /operations/actions/cancel | Cancel operation
[**actionPauseOperation**](OperationsApi.md#actionPauseOperation) | **POST** /operations/actions/pause | Pause operation
[**actionResumeOperation**](OperationsApi.md#actionResumeOperation) | **POST** /operations/actions/resume | Resume operation
[**getAllOperations**](OperationsApi.md#getAllOperations) | **GET** /operations | Get all queued operations


<a name="actionApproveOperation"></a>
# **actionApproveOperation**
> OperationActionResponse actionApproveOperation(operationActionRequest)

Approve operation

Approves an operation

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.OperationsApi();
var operationActionRequest = new egoiSdk.OperationActionRequest(); // OperationActionRequest | Parameters for the request
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionApproveOperation(operationActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationActionRequest** | [**OperationActionRequest**](OperationActionRequest.md)| Parameters for the request | 

### Return type

[**OperationActionResponse**](OperationActionResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionCancelOperation"></a>
# **actionCancelOperation**
> OperationActionResponse actionCancelOperation(operationActionRequest)

Cancel operation

Cancels an operation

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.OperationsApi();
var operationActionRequest = new egoiSdk.OperationActionRequest(); // OperationActionRequest | Parameters for the request
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionCancelOperation(operationActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationActionRequest** | [**OperationActionRequest**](OperationActionRequest.md)| Parameters for the request | 

### Return type

[**OperationActionResponse**](OperationActionResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionPauseOperation"></a>
# **actionPauseOperation**
> OperationActionResponse actionPauseOperation(operationActionRequest)

Pause operation

Pauses an operation

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.OperationsApi();
var operationActionRequest = new egoiSdk.OperationActionRequest(); // OperationActionRequest | Parameters for the request
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionPauseOperation(operationActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationActionRequest** | [**OperationActionRequest**](OperationActionRequest.md)| Parameters for the request | 

### Return type

[**OperationActionResponse**](OperationActionResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionResumeOperation"></a>
# **actionResumeOperation**
> OperationActionResponse actionResumeOperation(operationActionRequest)

Resume operation

Resumes an operation

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.OperationsApi();
var operationActionRequest = new egoiSdk.OperationActionRequest(); // OperationActionRequest | Parameters for the request
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionResumeOperation(operationActionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **operationActionRequest** | [**OperationActionRequest**](OperationActionRequest.md)| Parameters for the request | 

### Return type

[**OperationActionResponse**](OperationActionResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllOperations"></a>
# **getAllOperations**
> OperationsCollection getAllOperations(opts)

Get all queued operations

Returns all operations in queue

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.OperationsApi();
var opts = {
  'type': "type_example", // String | Operation type
  'status': "status_example", // String | Operation state
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "orderBy_example" // String | Reference attribute to order operations
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllOperations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| Operation type | [optional] 
 **status** | **String**| Operation state | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order operations | [optional] 

### Return type

[**OperationsCollection**](OperationsCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

