# egoiSdk.AdvancedReportsApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generateEmailBouncesReport**](AdvancedReportsApi.md#generateEmailBouncesReport) | **POST** /reports/advanced/email-bounces | Generate email bounces report
[**generateEmailClicksByContactReport**](AdvancedReportsApi.md#generateEmailClicksByContactReport) | **POST** /reports/advanced/email-clicks-by-contact | Generate email clicks by contact report
[**generateEmailClicksByUrlReport**](AdvancedReportsApi.md#generateEmailClicksByUrlReport) | **POST** /reports/advanced/email-clicks-by-url | Generate email clicks by URL report
[**generateEmailEventsReport**](AdvancedReportsApi.md#generateEmailEventsReport) | **POST** /reports/advanced/email-events | Generate email events report
[**generateEmailSmsReport**](AdvancedReportsApi.md#generateEmailSmsReport) | **POST** /reports/advanced/sms-bounces | Generate SMS bounces report
[**generateEmailUnsubscriptionsReport**](AdvancedReportsApi.md#generateEmailUnsubscriptionsReport) | **POST** /reports/advanced/email-unsubscriptions | Generate email unsubscriptions report
[**generateFormAnswersReport**](AdvancedReportsApi.md#generateFormAnswersReport) | **POST** /reports/advanced/form-answers | Generate form answers report
[**generateSendsReport**](AdvancedReportsApi.md#generateSendsReport) | **POST** /reports/advanced/sends | Generate sends report
[**generateSmsEventsReport**](AdvancedReportsApi.md#generateSmsEventsReport) | **POST** /reports/advanced/sms-events | Generate SMS events report
[**generateSubscriptionsReport**](AdvancedReportsApi.md#generateSubscriptionsReport) | **POST** /reports/advanced/subscriptions | Generate subscriptions report
[**generateUnsubscriptionsReport**](AdvancedReportsApi.md#generateUnsubscriptionsReport) | **POST** /reports/advanced/unsubscriptions | Generate unsubscriptions report
[**getAllAdvancedReports**](AdvancedReportsApi.md#getAllAdvancedReports) | **GET** /reports/advanced | Get all advanced reports


<a name="generateEmailBouncesReport"></a>
# **generateEmailBouncesReport**
> AcceptedResponse generateEmailBouncesReport(generateEmailBouncesReport)

Generate email bounces report

Generates a new email bounces report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateEmailBouncesReport = new egoiSdk.GenerateEmailBouncesReport(); // GenerateEmailBouncesReport | Parameters for the email bounces report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEmailBouncesReport(generateEmailBouncesReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEmailBouncesReport** | [**GenerateEmailBouncesReport**](GenerateEmailBouncesReport.md)| Parameters for the email bounces report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateEmailClicksByContactReport"></a>
# **generateEmailClicksByContactReport**
> AcceptedResponse generateEmailClicksByContactReport(generateEmailClicksByContactReport)

Generate email clicks by contact report

Generates a new email clicks by contact report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateEmailClicksByContactReport = new egoiSdk.GenerateEmailClicksByContactReport(); // GenerateEmailClicksByContactReport | Parameters for the email clicks by contact report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEmailClicksByContactReport(generateEmailClicksByContactReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEmailClicksByContactReport** | [**GenerateEmailClicksByContactReport**](GenerateEmailClicksByContactReport.md)| Parameters for the email clicks by contact report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateEmailClicksByUrlReport"></a>
# **generateEmailClicksByUrlReport**
> AcceptedResponse generateEmailClicksByUrlReport(generateEmailClicksByUrlReport)

Generate email clicks by URL report

Generates a new email clicks by URL report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateEmailClicksByUrlReport = new egoiSdk.GenerateEmailClicksByUrlReport(); // GenerateEmailClicksByUrlReport | Parameters for the email clicks by URL report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEmailClicksByUrlReport(generateEmailClicksByUrlReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEmailClicksByUrlReport** | [**GenerateEmailClicksByUrlReport**](GenerateEmailClicksByUrlReport.md)| Parameters for the email clicks by URL report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateEmailEventsReport"></a>
# **generateEmailEventsReport**
> AcceptedResponse generateEmailEventsReport(generateEmailEventsReport)

Generate email events report

Generates a new email events report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateEmailEventsReport = new egoiSdk.GenerateEmailEventsReport(); // GenerateEmailEventsReport | Parameters for the email events report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEmailEventsReport(generateEmailEventsReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEmailEventsReport** | [**GenerateEmailEventsReport**](GenerateEmailEventsReport.md)| Parameters for the email events report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateEmailSmsReport"></a>
# **generateEmailSmsReport**
> AcceptedResponse generateEmailSmsReport(generateSmsBouncesReport)

Generate SMS bounces report

Generates a new SMS bounces report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateSmsBouncesReport = new egoiSdk.GenerateSmsBouncesReport(); // GenerateSmsBouncesReport | Parameters for the SMS bounces report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEmailSmsReport(generateSmsBouncesReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateSmsBouncesReport** | [**GenerateSmsBouncesReport**](GenerateSmsBouncesReport.md)| Parameters for the SMS bounces report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateEmailUnsubscriptionsReport"></a>
# **generateEmailUnsubscriptionsReport**
> AcceptedResponse generateEmailUnsubscriptionsReport(generateEmailUnsubscriptionsReport)

Generate email unsubscriptions report

Generates a new email unsubscriptions report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateEmailUnsubscriptionsReport = new egoiSdk.GenerateEmailUnsubscriptionsReport(); // GenerateEmailUnsubscriptionsReport | Parameters for the email unsubscriptions report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateEmailUnsubscriptionsReport(generateEmailUnsubscriptionsReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateEmailUnsubscriptionsReport** | [**GenerateEmailUnsubscriptionsReport**](GenerateEmailUnsubscriptionsReport.md)| Parameters for the email unsubscriptions report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateFormAnswersReport"></a>
# **generateFormAnswersReport**
> AcceptedResponse generateFormAnswersReport(generateFormAnswersReport)

Generate form answers report

Generates a new form answers report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateFormAnswersReport = new egoiSdk.GenerateFormAnswersReport(); // GenerateFormAnswersReport | Parameters for the form answers report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateFormAnswersReport(generateFormAnswersReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateFormAnswersReport** | [**GenerateFormAnswersReport**](GenerateFormAnswersReport.md)| Parameters for the form answers report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateSendsReport"></a>
# **generateSendsReport**
> AcceptedResponse generateSendsReport(generateSendsReport)

Generate sends report

Generates a new sends report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateSendsReport = new egoiSdk.GenerateSendsReport(); // GenerateSendsReport | Parameters for the sends report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateSendsReport(generateSendsReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateSendsReport** | [**GenerateSendsReport**](GenerateSendsReport.md)| Parameters for the sends report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateSmsEventsReport"></a>
# **generateSmsEventsReport**
> AcceptedResponse generateSmsEventsReport(generateSmsEventsReport)

Generate SMS events report

Generates a new SMS events report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateSmsEventsReport = new egoiSdk.GenerateSmsEventsReport(); // GenerateSmsEventsReport | Parameters for the SMS events report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateSmsEventsReport(generateSmsEventsReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateSmsEventsReport** | [**GenerateSmsEventsReport**](GenerateSmsEventsReport.md)| Parameters for the SMS events report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateSubscriptionsReport"></a>
# **generateSubscriptionsReport**
> AcceptedResponse generateSubscriptionsReport(generateSubscriptionsReport)

Generate subscriptions report

Generates a new subscriptions report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateSubscriptionsReport = new egoiSdk.GenerateSubscriptionsReport(); // GenerateSubscriptionsReport | Parameters for the subscriptions report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateSubscriptionsReport(generateSubscriptionsReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateSubscriptionsReport** | [**GenerateSubscriptionsReport**](GenerateSubscriptionsReport.md)| Parameters for the subscriptions report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="generateUnsubscriptionsReport"></a>
# **generateUnsubscriptionsReport**
> AcceptedResponse generateUnsubscriptionsReport(generateUnsubscriptionsReport)

Generate unsubscriptions report

Generates a new unsubscriptions report

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var generateUnsubscriptionsReport = new egoiSdk.GenerateUnsubscriptionsReport(); // GenerateUnsubscriptionsReport | Parameters for the unsubscriptions report
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateUnsubscriptionsReport(generateUnsubscriptionsReport, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateUnsubscriptionsReport** | [**GenerateUnsubscriptionsReport**](GenerateUnsubscriptionsReport.md)| Parameters for the unsubscriptions report | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAdvancedReports"></a>
# **getAllAdvancedReports**
> AdvancedReportsCollection getAllAdvancedReports(opts)

Get all advanced reports

Returns all advanced reports

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.AdvancedReportsApi();
var opts = {
  'status': "status_example", // String | Advanced report status
  'title': "title_example", // String | Advanced report title
  'createdMin': new Date("2013-10-20T19:20:30+01:00"), // Date | Created initial date
  'createdMax': new Date("2013-10-20T19:20:30+01:00"), // Date | Created finish
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10, // Number | Number of items to return
  'order': "'desc'", // String | Type of order
  'orderBy': "'advanced_report_id'" // String | Reference attribute to order the advanced reports
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllAdvancedReports(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **status** | **String**| Advanced report status | [optional] 
 **title** | **String**| Advanced report title | [optional] 
 **createdMin** | **Date**| Created initial date | [optional] 
 **createdMax** | **Date**| Created finish | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]
 **order** | **String**| Type of order | [optional] [default to &#39;desc&#39;]
 **orderBy** | **String**| Reference attribute to order the advanced reports | [optional] [default to &#39;advanced_report_id&#39;]

### Return type

[**AdvancedReportsCollection**](AdvancedReportsCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

