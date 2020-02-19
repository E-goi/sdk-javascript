# egoiSdk.TagsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTag**](TagsApi.md#createTag) | **POST** /tags | Create new tag
[**deleteTag**](TagsApi.md#deleteTag) | **DELETE** /tags/{tag_id} | Remove tag
[**getAllTags**](TagsApi.md#getAllTags) | **GET** /tags | Get all tags
[**updateTag**](TagsApi.md#updateTag) | **PUT** /tags/{tag_id} | Update a specific tag


<a name="createTag"></a>
# **createTag**
> Tag createTag(tagRequest)

Create new tag

Create a new tag

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.TagsApi();
var tagRequest = new egoiSdk.TagRequest(); // TagRequest | Parameters for the Tag
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTag(tagRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagRequest** | [**TagRequest**](TagRequest.md)| Parameters for the Tag | 

### Return type

[**Tag**](Tag.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTag"></a>
# **deleteTag**
> deleteTag(tagId)

Remove tag

Remove tag information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.TagsApi();
var tagId = 56; // Number | ID of the Tag
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTag(tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **Number**| ID of the Tag | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllTags"></a>
# **getAllTags**
> TagCollection getAllTags(opts)

Get all tags

Returns all tags

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.TagsApi();
var opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'tag_id'" // String | Reference attribute to order tags
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllTags(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order tags | [optional] [default to &#39;tag_id&#39;]

### Return type

[**TagCollection**](TagCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateTag"></a>
# **updateTag**
> Tag updateTag(tagId, tagRequest)

Update a specific tag

Update a tag

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.TagsApi();
var tagId = 56; // Number | ID of the Tag
var tagRequest = new egoiSdk.TagRequest(); // TagRequest | Parameters for the tag
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTag(tagId, tagRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **Number**| ID of the Tag | 
 **tagRequest** | [**TagRequest**](TagRequest.md)| Parameters for the tag | 

### Return type

[**Tag**](Tag.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

