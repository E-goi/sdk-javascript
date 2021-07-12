# egoiSdk.ContactsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**actionActivateContacts**](ContactsApi.md#actionActivateContacts) | **POST** /lists/{list_id}/contacts/actions/activate | Activate contacts
[**actionAttachTag**](ContactsApi.md#actionAttachTag) | **POST** /lists/{list_id}/contacts/actions/attach-tag | Attach tag to contact
[**actionDeactivateContacts**](ContactsApi.md#actionDeactivateContacts) | **POST** /lists/{list_id}/contacts/actions/deactivate | Deactivate contacts
[**actionDetachTag**](ContactsApi.md#actionDetachTag) | **POST** /lists/{list_id}/contacts/actions/detach-tag | Detach tag to contact
[**actionExportContacts**](ContactsApi.md#actionExportContacts) | **POST** /lists/{list_id}/contacts/actions/export | Exports a list of contacts
[**actionForgetContacts**](ContactsApi.md#actionForgetContacts) | **POST** /lists/{list_id}/contacts/actions/forget | Forget contacts
[**actionImportBulk**](ContactsApi.md#actionImportBulk) | **POST** /lists/{list_id}/contacts/actions/import-bulk | Import collection of contacts
[**actionStartAutomation**](ContactsApi.md#actionStartAutomation) | **POST** /lists/{list_id}/contacts/actions/start-automation | Start automation
[**actionUnsubscribeContact**](ContactsApi.md#actionUnsubscribeContact) | **POST** /lists/{list_id}/contacts/actions/unsubscribe | Unsubscribes contacts
[**createContact**](ContactsApi.md#createContact) | **POST** /lists/{list_id}/contacts | Create new contact
[**getAllContactActivities**](ContactsApi.md#getAllContactActivities) | **GET** /lists/{list_id}/contacts/{contact_id}/activities | Get all contact activities
[**getAllContacts**](ContactsApi.md#getAllContacts) | **GET** /lists/{list_id}/contacts | Get all contacts
[**getAllContactsBySegment**](ContactsApi.md#getAllContactsBySegment) | **GET** /lists/{list_id}/contacts/segment/{segment_id} | Get all contacts by Segment Id
[**getContact**](ContactsApi.md#getContact) | **GET** /lists/{list_id}/contacts/{contact_id} | Get contact
[**patchContact**](ContactsApi.md#patchContact) | **PATCH** /lists/{list_id}/contacts/{contact_id} | Update a specific contact
[**searchContacts**](ContactsApi.md#searchContacts) | **GET** /contacts/search | Search contact


<a name="actionActivateContacts"></a>
# **actionActivateContacts**
> AcceptedResponse actionActivateContacts(listId, activateContactsRequest)

Activate contacts

Activates a collection of contacts (does not apply to removed contacts)

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var activateContactsRequest = new egoiSdk.ActivateContactsRequest(); // ActivateContactsRequest | Parameters for the request
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionActivateContacts(listId, activateContactsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **activateContactsRequest** | [**ActivateContactsRequest**](ActivateContactsRequest.md)| Parameters for the request | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionAttachTag"></a>
# **actionAttachTag**
> AttachTagResponse actionAttachTag(listId, attachTagRequest)

Attach tag to contact

Attaches a tag to the provided contacts. &lt;br&gt;***Note:***&lt;br&gt; If you provide the array of **contacts** there will be a maximum limit of 1000 contacts in the payload, but if you provide a **segment_id** instead of     the array of contacts you will get an asynchronous response with the status code 202

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var attachTagRequest = new egoiSdk.AttachTagRequest(); // AttachTagRequest | Parameters for the Tag
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionAttachTag(listId, attachTagRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **attachTagRequest** | [**AttachTagRequest**](AttachTagRequest.md)| Parameters for the Tag | 

### Return type

[**AttachTagResponse**](AttachTagResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionDeactivateContacts"></a>
# **actionDeactivateContacts**
> AcceptedResponse actionDeactivateContacts(listId, deactivateContactsRequest)

Deactivate contacts

Deactivates a collection of contacts (does not apply to removed contacts)

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var deactivateContactsRequest = new egoiSdk.DeactivateContactsRequest(); // DeactivateContactsRequest | Parameters for the request
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionDeactivateContacts(listId, deactivateContactsRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **deactivateContactsRequest** | [**DeactivateContactsRequest**](DeactivateContactsRequest.md)| Parameters for the request | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionDetachTag"></a>
# **actionDetachTag**
> AttachTagResponse actionDetachTag(listId, attachTagRequest)

Detach tag to contact

Detach a tag to the provided contacts

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var attachTagRequest = new egoiSdk.AttachTagRequest(); // AttachTagRequest | Parameters for the Tag
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionDetachTag(listId, attachTagRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **attachTagRequest** | [**AttachTagRequest**](AttachTagRequest.md)| Parameters for the Tag | 

### Return type

[**AttachTagResponse**](AttachTagResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionExportContacts"></a>
# **actionExportContacts**
> AcceptedResponse actionExportContacts(listId, contactExportRequest)

Exports a list of contacts

Exports a list of contacts to the desired callback url

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var contactExportRequest = new egoiSdk.ContactExportRequest(); // ContactExportRequest | Parameters for export
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionExportContacts(listId, contactExportRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **contactExportRequest** | [**ContactExportRequest**](ContactExportRequest.md)| Parameters for export | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionForgetContacts"></a>
# **actionForgetContacts**
> AcceptedResponse actionForgetContacts(listId, contactForgetRequest)

Forget contacts

Forgets a list of contacts to the desired callback url

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var contactForgetRequest = new egoiSdk.ContactForgetRequest(); // ContactForgetRequest | Parameters for the action
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionForgetContacts(listId, contactForgetRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **contactForgetRequest** | [**ContactForgetRequest**](ContactForgetRequest.md)| Parameters for the action | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionImportBulk"></a>
# **actionImportBulk**
> AcceptedResponse actionImportBulk(listId, importBulkRequest)

Import collection of contacts

Imports a collection of contacts &lt;/br&gt;      **DISCLAIMER:** stream limits applied. [view here](#section/Stream-Limits &#39;Stream Limits&#39;)&lt;br&gt; ***Note:*** minimum of 2 contacts to use this method. [use Create new contact method instead](#operation/createContact &#39;Create new contact&#39;)

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var importBulkRequest = new egoiSdk.ImportBulkRequest(); // ImportBulkRequest | Parameters for the bulk import
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionImportBulk(listId, importBulkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **importBulkRequest** | [**ImportBulkRequest**](ImportBulkRequest.md)| Parameters for the bulk import | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionStartAutomation"></a>
# **actionStartAutomation**
> StartAutomationResponse actionStartAutomation(listId, startAutomationRequest)

Start automation

Start automation to the provided contacts

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var startAutomationRequest = new egoiSdk.StartAutomationRequest(); // StartAutomationRequest | Parameters for the operation to start automation
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionStartAutomation(listId, startAutomationRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **startAutomationRequest** | [**StartAutomationRequest**](StartAutomationRequest.md)| Parameters for the operation to start automation | 

### Return type

[**StartAutomationResponse**](StartAutomationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="actionUnsubscribeContact"></a>
# **actionUnsubscribeContact**
> RemoveResponse actionUnsubscribeContact(listId, removeRequest)

Unsubscribes contacts

Unsubscribes contacts

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var removeRequest = new egoiSdk.RemoveRequest(); // RemoveRequest | Parameters for the contact to unsubscribe
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.actionUnsubscribeContact(listId, removeRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **removeRequest** | [**RemoveRequest**](RemoveRequest.md)| Parameters for the contact to unsubscribe | 

### Return type

[**RemoveResponse**](RemoveResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createContact"></a>
# **createContact**
> CreateContactResponse createContact(listId, contactBaseExtra)

Create new contact

Create a new contact

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the list where the contact belongs
var contactBaseExtra = new egoiSdk.ContactBaseExtra(); // ContactBaseExtra | Parameters for the Contact
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createContact(listId, contactBaseExtra, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the list where the contact belongs | 
 **contactBaseExtra** | [**ContactBaseExtra**](ContactBaseExtra.md)| Parameters for the Contact | 

### Return type

[**CreateContactResponse**](CreateContactResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllContactActivities"></a>
# **getAllContactActivities**
> ActivityCollection getAllContactActivities(contactId, listId, opts)

Get all contact activities

Returns all contact activities

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var contactId = "contactId_example"; // String | ID of the Contact
var listId = 56; // Number | ID of the List
var opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'dateMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Start date
  'dateMax': new Date("2013-10-20T19:20:30+01:00") // Date | End date
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllContactActivities(contactId, listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| ID of the Contact | 
 **listId** | **Number**| ID of the List | 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **dateMin** | **Date**| Start date | [optional] 
 **dateMax** | **Date**| End date | [optional] 

### Return type

[**ActivityCollection**](ActivityCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllContacts"></a>
# **getAllContacts**
> ContactCollection getAllContacts(listId, opts)

Get all contacts

Returns all contacts

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'firstName': "firstName_example", // String | First name of the contacts to return
  'lastName': "lastName_example", // String | Last name of the contacts to return
  'email': "email_example", // String | Email of the contacts to return
  'emailStatus': true, // Boolean | EmailStatus of the contacts to return
  'cellphone': "cellphone_example", // String | Cellphone of the contacts to return
  'cellphoneStatus': true, // Boolean | CellphoneStatus of the contacts to return
  'phone': "phone_example", // String | Phone of the contacts to return
  'phoneStatus': true, // Boolean | PhoneStatus of the contacts to return
  'birthDate': null, // Date | Birth date of the contacts to return
  'language': "language_example", // String | Language date of the contacts to return
  'extraFieldId': ["null"] // [String] | Extra field of contacts, extra_field_id[field_id]=value
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllContacts(listId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **firstName** | **String**| First name of the contacts to return | [optional] 
 **lastName** | **String**| Last name of the contacts to return | [optional] 
 **email** | **String**| Email of the contacts to return | [optional] 
 **emailStatus** | **Boolean**| EmailStatus of the contacts to return | [optional] 
 **cellphone** | **String**| Cellphone of the contacts to return | [optional] 
 **cellphoneStatus** | **Boolean**| CellphoneStatus of the contacts to return | [optional] 
 **phone** | **String**| Phone of the contacts to return | [optional] 
 **phoneStatus** | **Boolean**| PhoneStatus of the contacts to return | [optional] 
 **birthDate** | [**Date**](.md)| Birth date of the contacts to return | [optional] 
 **language** | **String**| Language date of the contacts to return | [optional] 
 **extraFieldId** | [**[String]**](String.md)| Extra field of contacts, extra_field_id[field_id]&#x3D;value | [optional] 

### Return type

[**ContactCollection**](ContactCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllContactsBySegment"></a>
# **getAllContactsBySegment**
> ContactCollection getAllContactsBySegment(listId, segmentId, opts)

Get all contacts by Segment Id

Returns all contacts filtered by Segment Id

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var listId = 56; // Number | ID of the List
var segmentId = "segmentId_example"; // String | ID of the Segment
var opts = {
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'showRemoved': true // Boolean | Show removed contacts
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllContactsBySegment(listId, segmentId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **segmentId** | **String**| ID of the Segment | 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **showRemoved** | **Boolean**| Show removed contacts | [optional] 

### Return type

[**ContactCollection**](ContactCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getContact"></a>
# **getContact**
> ComplexContact getContact(contactId, listId)

Get contact

Returns contact information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var contactId = "contactId_example"; // String | ID of the Contact
var listId = 56; // Number | ID of the List
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContact(contactId, listId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| ID of the Contact | 
 **listId** | **Number**| ID of the List | 

### Return type

[**ComplexContact**](ComplexContact.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="patchContact"></a>
# **patchContact**
> CreateContactResponse patchContact(contactId, listId, contactBaseStatusExtra)

Update a specific contact

Update contact

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var contactId = "contactId_example"; // String | ID of the Contact
var listId = 56; // Number | ID of the List
var contactBaseStatusExtra = new egoiSdk.ContactBaseStatusExtra(); // ContactBaseStatusExtra | Parameters for the contact
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.patchContact(contactId, listId, contactBaseStatusExtra, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| ID of the Contact | 
 **listId** | **Number**| ID of the List | 
 **contactBaseStatusExtra** | [**ContactBaseStatusExtra**](ContactBaseStatusExtra.md)| Parameters for the contact | 

### Return type

[**CreateContactResponse**](CreateContactResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="searchContacts"></a>
# **searchContacts**
> InlineResponse200 searchContacts(contact, opts)

Search contact

Searches a contact across all lists and returns a collection of contacts found

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.ContactsApi();
var contact = "contact_example"; // String | Contact to search
var opts = {
  'type': "'email'" // String | Type of contact to search (defaults to 'email')
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchContacts(contact, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | **String**| Contact to search | 
 **type** | **String**| Type of contact to search (defaults to &#39;email&#39;) | [optional] [default to &#39;email&#39;]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

