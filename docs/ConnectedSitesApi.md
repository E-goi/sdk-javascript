# egoisdk.ConnectedSitesApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConnectedSites**](ConnectedSitesApi.md#createConnectedSites) | **POST** /connectedsites | Creates a Connected Site
[**deleteConnectedSites**](ConnectedSitesApi.md#deleteConnectedSites) | **DELETE** /connectedsites/{domain} | Deletes a Connected Site
[**getAllConnectedSites**](ConnectedSitesApi.md#getAllConnectedSites) | **GET** /connectedsites | Get all Connected Sites
[**getConnectedSites**](ConnectedSitesApi.md#getConnectedSites) | **GET** /connectedsites/{domain} | Get a Connected Site



## createConnectedSites

> ConnectedSitesDomainDetail createConnectedSites(connectedSitesDomain)

Creates a Connected Site

Creates a domain usable in Connected Sites

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ConnectedSitesApi();
let connectedSitesDomain = new egoisdk.ConnectedSitesDomain(); // ConnectedSitesDomain | Parameters for new Connected Site
apiInstance.createConnectedSites(connectedSitesDomain, (error, data, response) => {
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
 **connectedSitesDomain** | [**ConnectedSitesDomain**](ConnectedSitesDomain.md)| Parameters for new Connected Site | 

### Return type

[**ConnectedSitesDomainDetail**](ConnectedSitesDomainDetail.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConnectedSites

> deleteConnectedSites(domain)

Deletes a Connected Site

Deletes a domain from Connected Sites

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ConnectedSitesApi();
let domain = "domain_example"; // String | Domain
apiInstance.deleteConnectedSites(domain, (error, data, response) => {
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
 **domain** | **String**| Domain | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllConnectedSites

> DomainCollection getAllConnectedSites()

Get all Connected Sites

Returns all domains usable in Connected Sites

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ConnectedSitesApi();
apiInstance.getAllConnectedSites((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**DomainCollection**](DomainCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getConnectedSites

> ConnectedSitesDomainDetail getConnectedSites(domain)

Get a Connected Site

Returns domain info in Connected Sites

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.ConnectedSitesApi();
let domain = "domain_example"; // String | Domain
apiInstance.getConnectedSites(domain, (error, data, response) => {
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
 **domain** | **String**| Domain | 

### Return type

[**ConnectedSitesDomainDetail**](ConnectedSitesDomainDetail.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

