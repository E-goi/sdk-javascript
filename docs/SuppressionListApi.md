# egoisdk.SuppressionListApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSuppressionList**](SuppressionListApi.md#createSuppressionList) | **POST** /suppression-list | Add to suppression list
[**deleteSuppressionList**](SuppressionListApi.md#deleteSuppressionList) | **DELETE** /suppression-list/{suppression_id} | Delete from suppression list
[**getAllSuppressionList**](SuppressionListApi.md#getAllSuppressionList) | **GET** /suppression-list | Get the suppression list



## createSuppressionList

> AcceptedResponse createSuppressionList(createSuppressionListRequest)

Add to suppression list

Adds a collection of values to the suppression list

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.SuppressionListApi();
let createSuppressionListRequest = new egoisdk.CreateSuppressionListRequest(); // CreateSuppressionListRequest | Parameters for the request
apiInstance.createSuppressionList(createSuppressionListRequest, (error, data, response) => {
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
 **createSuppressionListRequest** | [**CreateSuppressionListRequest**](CreateSuppressionListRequest.md)| Parameters for the request | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteSuppressionList

> deleteSuppressionList(suppressionId)

Delete from suppression list

Deletes a suppression list value given its ID if it&#39;s creation method was ´manual´

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.SuppressionListApi();
let suppressionId = 56; // Number | ID of Suppression List
apiInstance.deleteSuppressionList(suppressionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **suppressionId** | **Number**| ID of Suppression List | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllSuppressionList

> SuppressionListItems getAllSuppressionList(opts)

Get the suppression list

Returns the suppression list

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.SuppressionListApi();
let opts = {
  'type': "type_example", // String | Suppression type
  'method': "method_example", // String | Suppression method
  'value': "value_example", // String | Reference attribute to value suppression list
  'campaignHash': "campaignHash_example", // String | Reference attribute to campaign id
  'createdMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Created initial date
  'createdMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Created finish
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'id'" // String | Reference attribute to order the suppression list
};
apiInstance.getAllSuppressionList(opts, (error, data, response) => {
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
 **type** | **String**| Suppression type | [optional] 
 **method** | **String**| Suppression method | [optional] 
 **value** | **String**| Reference attribute to value suppression list | [optional] 
 **campaignHash** | **String**| Reference attribute to campaign id | [optional] 
 **createdMin** | **Date**| Created initial date | [optional] 
 **createdMax** | **Date**| Created finish | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order the suppression list | [optional] [default to &#39;id&#39;]

### Return type

[**SuppressionListItems**](SuppressionListItems.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

