# egoiSdk.UsersApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{user_id} | Remove user
[**getAllUsers**](UsersApi.md#getAllUsers) | **GET** /users | Get all users


<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

Remove user

Remove user information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.UsersApi();
var userId = 56; // Number | ID of the User
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID of the User | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllUsers"></a>
# **getAllUsers**
> UserCollection getAllUsers(opts)

Get all users

Returns all users

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.UsersApi();
var opts = {
  'username': "username_example", // String | Reference attribute to username user
  'status': "status_example", // String | Status filter
  'createdMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Created initial date
  'createdMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Created finish
  'updatedMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated initial
  'updatedMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Updated finish
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'user_id'" // String | Reference attribute to order users
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **String**| Reference attribute to username user | [optional] 
 **status** | **String**| Status filter | [optional] 
 **createdMin** | **Date**| Created initial date | [optional] 
 **createdMax** | **Date**| Created finish | [optional] 
 **updatedMin** | **Date**| Updated initial | [optional] 
 **updatedMax** | **Date**| Updated finish | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order users | [optional] [default to &#39;user_id&#39;]

### Return type

[**UserCollection**](UserCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

