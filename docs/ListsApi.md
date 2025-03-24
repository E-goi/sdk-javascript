# egoisdk.ListsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createList**](ListsApi.md#createList) | **POST** /lists | Create new list
[**deleteList**](ListsApi.md#deleteList) | **DELETE** /lists/{list_id} | Remove list
[**getAllLists**](ListsApi.md#getAllLists) | **GET** /lists | Get all lists
[**getList**](ListsApi.md#getList) | **GET** /lists/{list_id} | Get list
[**updateList**](ListsApi.md#updateList) | **PATCH** /lists/{list_id} | Update a specific list



## createList

> Array createList(postRequestList)

Create new list

Create a new list

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ListsApi();
let postRequestList = new egoisdk.PostRequestList(); // PostRequestList | Parameters for the List
apiInstance.createList(postRequestList, (error, data, response) => {
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
 **postRequestList** | [**PostRequestList**](PostRequestList.md)| Parameters for the List | 

### Return type

**Array**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteList

> deleteList(listId)

Remove list

Remove list information given its ID

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ListsApi();
let listId = 56; // Number | ID of the List
apiInstance.deleteList(listId, (error, data, response) => {
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
 **listId** | **Number**| ID of the List | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllLists

> ListCollection getAllLists(opts)

Get all lists

Returns all lists

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ListsApi();
let opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'list_id'", // String | Reference attribute to order lists
  'internalName': "internalName_example", // String | Internal name of the list
  'publicName': "publicName_example", // String | Public name of the list
  'createdMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Created initial date
  'createdMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Created finish
  'updatedMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated initial
  'updatedMax': new Date("2013-10-20T19:20:30+01:00") // Date | Updated finish
};
apiInstance.getAllLists(opts, (error, data, response) => {
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
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order lists | [optional] [default to &#39;list_id&#39;]
 **internalName** | **String**| Internal name of the list | [optional] 
 **publicName** | **String**| Public name of the list | [optional] 
 **createdMin** | **Date**| Created initial date | [optional] 
 **createdMax** | **Date**| Created finish | [optional] 
 **updatedMin** | **Date**| Updated initial | [optional] 
 **updatedMax** | **Date**| Updated finish | [optional] 

### Return type

[**ListCollection**](ListCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getList

> ComplexList getList(listId)

Get list

Returns list information given its ID

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ListsApi();
let listId = 56; // Number | ID of the List
apiInstance.getList(listId, (error, data, response) => {
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

### Return type

[**ComplexList**](ComplexList.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateList

> Array updateList(listId, patchRequestList)

Update a specific list

Update a list

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ListsApi();
let listId = 56; // Number | ID of the List
let patchRequestList = new egoisdk.PatchRequestList(); // PatchRequestList | Parameters for the List
apiInstance.updateList(listId, patchRequestList, (error, data, response) => {
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
 **patchRequestList** | [**PatchRequestList**](PatchRequestList.md)| Parameters for the List | 

### Return type

**Array**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

