# egoiSdk.PingApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ping**](PingApi.md#ping) | **POST** /ping | Pings the API


<a name="ping"></a>
# **ping**
> Ping ping()

Pings the API

Checks if API is up and running

### Example
```javascript
var egoiSdk = require('egoiSdk');

var apiInstance = new egoiSdk.PingApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.ping(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Ping**](Ping.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

