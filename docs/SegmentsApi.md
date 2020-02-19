# egoiSdk.SegmentsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteSegment**](SegmentsApi.md#deleteSegment) | **DELETE** /lists/{list_id}/segments/{segment_id} | Remove segment
[**getAllSegments**](SegmentsApi.md#getAllSegments) | **GET** /lists/{list_id}/segments | Get all segments


<a name="deleteSegment"></a>
# **deleteSegment**
> deleteSegment(segmentId, listId)

Remove segment

Remove segment information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.SegmentsApi();
var segmentId = "segmentId_example"; // String | ID of the Segment
var listId = 56; // Number | ID of the List
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteSegment(segmentId, listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segmentId** | **String**| ID of the Segment | 
 **listId** | **Number**| ID of the List | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllSegments"></a>
# **getAllSegments**
> SegmentCollection getAllSegments(listId, opts)

Get all segments

Returns all segments

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.SegmentsApi();
var listId = 56; // Number | ID of the List
var opts = {
  'type': "type_example", // String | Type of segment
  'name': "name_example", // String | Segment name
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10 // Number | Number of items to return
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllSegments(listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **type** | **String**| Type of segment | [optional] 
 **name** | **String**| Segment name | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]

### Return type

[**SegmentCollection**](SegmentCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

