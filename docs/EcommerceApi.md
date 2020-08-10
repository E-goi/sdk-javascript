# egoiSdk.EcommerceApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCatalog**](EcommerceApi.md#createCatalog) | **POST** /catalogs | Create new catalog
[**createProduct**](EcommerceApi.md#createProduct) | **POST** /catalogs/{catalog_id}/products | Create new product
[**deleteCatalog**](EcommerceApi.md#deleteCatalog) | **DELETE** /catalogs/{catalog_id} | Remove catalog
[**deleteProduct**](EcommerceApi.md#deleteProduct) | **DELETE** /catalogs/{catalog_id}/products/{product_identifier} | Remove product
[**getAllCatalogs**](EcommerceApi.md#getAllCatalogs) | **GET** /catalogs | Get all catalogs
[**getAllProducts**](EcommerceApi.md#getAllProducts) | **GET** /catalogs/{catalog_id}/products | Get all products
[**getProduct**](EcommerceApi.md#getProduct) | **GET** /catalogs/{catalog_id}/products/{product_identifier} | Get product
[**importOrdersBulk**](EcommerceApi.md#importOrdersBulk) | **POST** /lists/{list_id}/orders | Orders import bulk request
[**importProducts**](EcommerceApi.md#importProducts) | **POST** /catalogs/{catalog_id}/products/actions/import | Import products
[**updateProduct**](EcommerceApi.md#updateProduct) | **PATCH** /catalogs/{catalog_id}/products/{product_identifier} | Update product


<a name="createCatalog"></a>
# **createCatalog**
> Catalog createCatalog(catalogPostRequest)

Create new catalog

Creates a new catalog

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var catalogPostRequest = new egoiSdk.CatalogPostRequest(); // CatalogPostRequest | Parameters for the Catalog
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCatalog(catalogPostRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogPostRequest** | [**CatalogPostRequest**](CatalogPostRequest.md)| Parameters for the Catalog | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProduct"></a>
# **createProduct**
> Product createProduct(catalogId, productPostRequest)

Create new product

Creates a new product

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var catalogId = 56; // Number | ID of the Catalog
var productPostRequest = new egoiSdk.ProductPostRequest(); // ProductPostRequest | Parameters for the Product
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProduct(catalogId, productPostRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **Number**| ID of the Catalog | 
 **productPostRequest** | [**ProductPostRequest**](ProductPostRequest.md)| Parameters for the Product | 

### Return type

[**Product**](Product.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCatalog"></a>
# **deleteCatalog**
> deleteCatalog(catalogId)

Remove catalog

Remove catalog information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var catalogId = 56; // Number | ID of the Catalog
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteCatalog(catalogId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **Number**| ID of the Catalog | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteProduct"></a>
# **deleteProduct**
> deleteProduct(catalogId, productIdentifier)

Remove product

Remove product information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var catalogId = 56; // Number | ID of the Catalog
var productIdentifier = "productIdentifier_example"; // String | ID of the Product
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProduct(catalogId, productIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| ID of the Product | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllCatalogs"></a>
# **getAllCatalogs**
> CatalogCollection getAllCatalogs()

Get all catalogs

Returns all catalogs

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCatalogs(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**CatalogCollection**](CatalogCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAllProducts"></a>
# **getAllProducts**
> ProductCollection getAllProducts(catalogId, opts)

Get all products

Returns all products for the given catalog

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var catalogId = 56; // Number | ID of the Catalog
var opts = {
  'productIdentifier': "productIdentifier_example", // String | Product ID in your store
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
apiInstance.getAllProducts(catalogId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| Product ID in your store | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]

### Return type

[**ProductCollection**](ProductCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getProduct"></a>
# **getProduct**
> Product getProduct(catalogId, productIdentifier)

Get product

Returns product information given its ID

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var catalogId = 56; // Number | ID of the Catalog
var productIdentifier = "productIdentifier_example"; // String | ID of the Product
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProduct(catalogId, productIdentifier, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| ID of the Product | 

### Return type

[**Product**](Product.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="importOrdersBulk"></a>
# **importOrdersBulk**
> AcceptedResponse importOrdersBulk(listId, importOrdersBulkBulkRequest)

Orders import bulk request

Creates new bulk orders syncronization

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var listId = 56; // Number | ID of the List
var importOrdersBulkBulkRequest = [new egoiSdk.ImportOrdersBulkBulkRequest()]; // [ImportOrdersBulkBulkRequest] | Parameters for the Orders
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importOrdersBulk(listId, importOrdersBulkBulkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listId** | **Number**| ID of the List | 
 **importOrdersBulkBulkRequest** | [**[ImportOrdersBulkBulkRequest]**](Array.md)| Parameters for the Orders | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="importProducts"></a>
# **importProducts**
> AcceptedResponse importProducts(catalogId, productBulkRequest)

Import products

Imports a collection of products&lt;/br&gt;      **DISCLAIMER:** stream limits applied. [view here](#section/Stream-Limits &#39;Stream Limits&#39;)

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var catalogId = 56; // Number | ID of the Catalog
var productBulkRequest = new egoiSdk.ProductBulkRequest(); // ProductBulkRequest | Parameters for the Product
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.importProducts(catalogId, productBulkRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **Number**| ID of the Catalog | 
 **productBulkRequest** | [**ProductBulkRequest**](ProductBulkRequest.md)| Parameters for the Product | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProduct"></a>
# **updateProduct**
> Product updateProduct(catalogId, productIdentifier, productPatchRequest)

Update product

Updates a product

### Example
```javascript
var egoiSdk = require('egoiSdk');
var defaultClient = egoiSdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new egoiSdk.EcommerceApi();
var catalogId = 56; // Number | ID of the Catalog
var productIdentifier = "productIdentifier_example"; // String | ID of the Product
var productPatchRequest = new egoiSdk.ProductPatchRequest(); // ProductPatchRequest | Parameters for the product
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProduct(catalogId, productIdentifier, productPatchRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| ID of the Product | 
 **productPatchRequest** | [**ProductPatchRequest**](ProductPatchRequest.md)| Parameters for the product | 

### Return type

[**Product**](Product.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

