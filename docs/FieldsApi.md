# egoiSdk.FieldsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExtraField**](FieldsApi.md#createExtraField) | **POST** /lists/{list_id}/fields/extra | Create extra field
[**createFieldOption**](FieldsApi.md#createFieldOption) | **POST** /lists/{list_id}/fields/extra/{field_id}/options | Create new field option
[**deleteExtraField**](FieldsApi.md#deleteExtraField) | **DELETE** /lists/{list_id}/fields/extra/{field_id} | Remove extra field
[**deleteFieldOption**](FieldsApi.md#deleteFieldOption) | **DELETE** /lists/{list_id}/fields/extra/{field_id}/options/{option_id} | Deletes an option
[**getAllFieldOptions**](FieldsApi.md#getAllFieldOptions) | **GET** /lists/{list_id}/fields/extra/{field_id}/options | Get all field options
[**getAllFields**](FieldsApi.md#getAllFields) | **GET** /lists/{list_id}/fields | Get all fields
[**patchBaseField**](FieldsApi.md#patchBaseField) | **PATCH** /lists/{list_id}/fields/base/{field_id} | Update base field
[**patchExtraField**](FieldsApi.md#patchExtraField) | **PATCH** /lists/{list_id}/fields/extra/{field_id} | Update extra field
[**updateFieldOption**](FieldsApi.md#updateFieldOption) | **PATCH** /lists/{list_id}/fields/extra/{field_id}/options/{option_id} | Update field option


<a name="createExtraField"></a>
# **createExtraField**
> Field createExtraField(listId, field)

Create extra field

Creates an extra field

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var field = new egoiSdk.Field(); // Field | Parameters for the extra field
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createExtraField(listId, field, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **field** | [**Field**](Field.md)| Parameters for the extra field | 

### Return type

[**Field**](Field.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createFieldOption"></a>
# **createFieldOption**
> FieldOption createFieldOption(listId, fieldId, fieldOption)

Create new field option

Creates a field option

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var fieldId = 56; // Number | ID of the Field
var fieldOption = new egoiSdk.FieldOption(); // FieldOption | Parameters for the field option
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createFieldOption(listId, fieldId, fieldOption, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **fieldId** | **Number**| ID of the Field | 
 **fieldOption** | [**FieldOption**](FieldOption.md)| Parameters for the field option | 

### Return type

[**FieldOption**](FieldOption.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteExtraField"></a>
# **deleteExtraField**
> deleteExtraField(listId, fieldId)

Remove extra field

Removes an extra field given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var fieldId = 56; // Number | ID of the Field
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteExtraField(listId, fieldId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **fieldId** | **Number**| ID of the Field | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteFieldOption"></a>
# **deleteFieldOption**
> deleteFieldOption(listId, fieldId, optionId)

Deletes an option

Deletes an option of a list of values field

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var fieldId = 56; // Number | ID of the Field
var optionId = 56; // Number | ID of the field option
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFieldOption(listId, fieldId, optionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **fieldId** | **Number**| ID of the Field | 
 **optionId** | **Number**| ID of the field option | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllFieldOptions"></a>
# **getAllFieldOptions**
> FieldOptionsCollection getAllFieldOptions(listId, fieldId)

Get all field options

Returns all options of a given field

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var fieldId = 56; // Number | ID of the Field
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllFieldOptions(listId, fieldId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **fieldId** | **Number**| ID of the Field | 

### Return type

[**FieldOptionsCollection**](FieldOptionsCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllFields"></a>
# **getAllFields**
> FieldCollection getAllFields(listId, opts)

Get all fields

Returns all fields

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var opts = {
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
apiInstance.getAllFields(listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]

### Return type

[**FieldCollection**](FieldCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchBaseField"></a>
# **patchBaseField**
> Field patchBaseField(listId, fieldId, patchRequestBaseField)

Update base field

Updates a base field

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var fieldId = "fieldId_example"; // String | ID of the base field
var patchRequestBaseField = new egoiSdk.PatchRequestBaseField(); // PatchRequestBaseField | Parameters for the extra field
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchBaseField(listId, fieldId, patchRequestBaseField, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **fieldId** | **String**| ID of the base field | 
 **patchRequestBaseField** | [**PatchRequestBaseField**](PatchRequestBaseField.md)| Parameters for the extra field | 

### Return type

[**Field**](Field.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="patchExtraField"></a>
# **patchExtraField**
> Field patchExtraField(listId, fieldId, patchRequestField)

Update extra field

Updates an extra field

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var fieldId = 56; // Number | ID of the Field
var patchRequestField = new egoiSdk.PatchRequestField(); // PatchRequestField | Parameters for the extra field
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchExtraField(listId, fieldId, patchRequestField, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **fieldId** | **Number**| ID of the Field | 
 **patchRequestField** | [**PatchRequestField**](PatchRequestField.md)| Parameters for the extra field | 

### Return type

[**Field**](Field.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFieldOption"></a>
# **updateFieldOption**
> FieldOption updateFieldOption(listId, fieldId, optionId, fieldOption)

Update field option

Updates a field option

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.FieldsApi();
var listId = 56; // Number | ID of the List
var fieldId = 56; // Number | ID of the Field
var optionId = 56; // Number | ID of the field option
var fieldOption = new egoiSdk.FieldOption(); // FieldOption | Parameters for the field option
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateFieldOption(listId, fieldId, optionId, fieldOption, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **fieldId** | **Number**| ID of the Field | 
 **optionId** | **Number**| ID of the field option | 
 **fieldOption** | [**FieldOption**](FieldOption.md)| Parameters for the field option | 

### Return type

[**FieldOption**](FieldOption.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

