# egoisdk.EcommerceApi

All URIs are relative to *https://api.egoiapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCart**](EcommerceApi.md#createCart) | **POST** /{domain}/carts | Create cart
[**createCatalog**](EcommerceApi.md#createCatalog) | **POST** /catalogs | Create new catalog
[**createOrder**](EcommerceApi.md#createOrder) | **POST** /{domain}/orders | Create order
[**createProduct**](EcommerceApi.md#createProduct) | **POST** /catalogs/{catalog_id}/products | Create new product
[**deleteCatalog**](EcommerceApi.md#deleteCatalog) | **DELETE** /catalogs/{catalog_id} | Remove catalog
[**deleteProduct**](EcommerceApi.md#deleteProduct) | **DELETE** /catalogs/{catalog_id}/products/{product_identifier} | Remove product
[**getAllCatalogs**](EcommerceApi.md#getAllCatalogs) | **GET** /catalogs | Get all catalogs
[**getAllProducts**](EcommerceApi.md#getAllProducts) | **GET** /catalogs/{catalog_id}/products | Get all products
[**getProduct**](EcommerceApi.md#getProduct) | **GET** /catalogs/{catalog_id}/products/{product_identifier} | Get product
[**importProducts**](EcommerceApi.md#importProducts) | **POST** /catalogs/{catalog_id}/products/actions/import | Import products
[**updateProduct**](EcommerceApi.md#updateProduct) | **PATCH** /catalogs/{catalog_id}/products/{product_identifier} | Update product



## createCart

> AcceptedResponse createCart(domain, cart)

Create cart

Creates a new cart. If ***contact_id*** is specified, order will be atached to the contact, if the contact propreties are specified, we&#39;ll create the user, if its already in your list it will get the correct contact (**make sure you are sending atleast all configured list&#39;s unique fields**). This same logic is also applied to the **product_identifier**.

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let domain = "domain_example"; // String | Domain
let cart = new egoisdk.Cart(); // Cart | Parameters for the Carts
apiInstance.createCart(domain, cart, (error, data, response) => {
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
 **cart** | [**Cart**](Cart.md)| Parameters for the Carts | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCatalog

> Catalog createCatalog(catalogPostRequest)

Create new catalog

Creates a new catalog

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let catalogPostRequest = new egoisdk.CatalogPostRequest(); // CatalogPostRequest | Parameters for the Catalog
apiInstance.createCatalog(catalogPostRequest, (error, data, response) => {
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
 **catalogPostRequest** | [**CatalogPostRequest**](CatalogPostRequest.md)| Parameters for the Catalog | 

### Return type

[**Catalog**](Catalog.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createOrder

> AcceptedResponse createOrder(domain, createOrder)

Create order

Creates a new order. If **contact_id** is specified, order will be atached to the contact, if the contact propreties are specified, we&#39;ll create the user, if its already in your list it will get the correct contact (***make sure you are sending atleast all configured list&#39;s unique fields***). This same logic is also applied to the **product_identifier**.

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let domain = "domain_example"; // String | Domain
let createOrder = new egoisdk.CreateOrder(); // CreateOrder | Parameters for the Orders
apiInstance.createOrder(domain, createOrder, (error, data, response) => {
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
 **createOrder** | [**CreateOrder**](CreateOrder.md)| Parameters for the Orders | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProduct

> Product createProduct(catalogId, productPostRequest)

Create new product

Creates a new product

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productPostRequest = new egoisdk.ProductPostRequest(); // ProductPostRequest | Parameters for the Product
apiInstance.createProduct(catalogId, productPostRequest, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productPostRequest** | [**ProductPostRequest**](ProductPostRequest.md)| Parameters for the Product | 

### Return type

[**Product**](Product.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteCatalog

> deleteCatalog(catalogId)

Remove catalog

Remove catalog information given its ID

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
apiInstance.deleteCatalog(catalogId, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## deleteProduct

> deleteProduct(catalogId, productIdentifier)

Remove product

Remove product information given its ID

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productIdentifier = "productIdentifier_example"; // String | ID of the Product
apiInstance.deleteProduct(catalogId, productIdentifier, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| ID of the Product | 

### Return type

null (empty response body)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllCatalogs

> CatalogCollection getAllCatalogs()

Get all catalogs

Returns all catalogs

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
apiInstance.getAllCatalogs((error, data, response) => {
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

[**CatalogCollection**](CatalogCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllProducts

> ProductCollection getAllProducts(catalogId, opts)

Get all products

Returns all products for the given catalog

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let opts = {
  'productIdentifier': "productIdentifier_example", // String | Filter by product ID in your store
  'name': "name_example", // String | Filter by name of the product
  'description': "description_example", // String | Filter by description of the product
  'sku': "sku_example", // String | Filter by Stock Keeping Unit
  'upc': "upc_example", // String | Filter by Universal Product Code
  'ean': "ean_example", // String | Filter by European Article Numbering
  'gtin': "gtin_example", // String | Filter by Global Trade Item Number
  'mpn': "mpn_example", // String | Filter by Manufacturer Part Number
  'price': 3.4, // Number | Filter by price of the product
  'salePrice': 3.4, // Number | Filter by sale price of the product
  'brand': "brand_example", // String | Filter by brand of the product
  'customAttributes': {key: null}, // GetAllProductsCustomAttributesParameter | Filter by custom attributes of products<div><span class='sc-cJSrbW cWGDGi'> Example: </span> <span class='sc-uJMKN cTkJKI'> 'custom_attributes[alias]=value' </span></div>
  'offset': 56, // Number | Element offset (starting at zero for the first element)
  'limit': 10 // Number | Number of items to return
};
apiInstance.getAllProducts(catalogId, opts, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| Filter by product ID in your store | [optional] 
 **name** | **String**| Filter by name of the product | [optional] 
 **description** | **String**| Filter by description of the product | [optional] 
 **sku** | **String**| Filter by Stock Keeping Unit | [optional] 
 **upc** | **String**| Filter by Universal Product Code | [optional] 
 **ean** | **String**| Filter by European Article Numbering | [optional] 
 **gtin** | **String**| Filter by Global Trade Item Number | [optional] 
 **mpn** | **String**| Filter by Manufacturer Part Number | [optional] 
 **price** | **Number**| Filter by price of the product | [optional] 
 **salePrice** | **Number**| Filter by sale price of the product | [optional] 
 **brand** | **String**| Filter by brand of the product | [optional] 
 **customAttributes** | [**GetAllProductsCustomAttributesParameter**](.md)| Filter by custom attributes of products&lt;div&gt;&lt;span class&#x3D;&#39;sc-cJSrbW cWGDGi&#39;&gt; Example: &lt;/span&gt; &lt;span class&#x3D;&#39;sc-uJMKN cTkJKI&#39;&gt; &#39;custom_attributes[alias]&#x3D;value&#39; &lt;/span&gt;&lt;/div&gt; | [optional] 
 **offset** | **Number**| Element offset (starting at zero for the first element) | [optional] 
 **limit** | **Number**| Number of items to return | [optional] [default to 10]

### Return type

[**ProductCollection**](ProductCollection.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProduct

> Product getProduct(catalogId, productIdentifier)

Get product

Returns product information given its ID

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productIdentifier = "productIdentifier_example"; // String | ID of the Product
apiInstance.getProduct(catalogId, productIdentifier, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productIdentifier** | **String**| ID of the Product | 

### Return type

[**Product**](Product.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## importProducts

> AcceptedResponse importProducts(catalogId, productBulkRequest)

Import products

Imports a collection of products&lt;/br&gt;      **DISCLAIMER:** stream limits applied. [view here](#section/Stream-Limits &#39;Stream Limits&#39;)

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productBulkRequest = new egoisdk.ProductBulkRequest(); // ProductBulkRequest | Parameters for the Product
apiInstance.importProducts(catalogId, productBulkRequest, (error, data, response) => {
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
 **catalogId** | **Number**| ID of the Catalog | 
 **productBulkRequest** | [**ProductBulkRequest**](ProductBulkRequest.md)| Parameters for the Product | 

### Return type

[**AcceptedResponse**](AcceptedResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProduct

> Product updateProduct(catalogId, productIdentifier, productPatchRequest)

Update product

Updates a product

### Example

```javascript
import egoisdk from 'egoisdk';
let defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
let Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

let apiInstance = new egoisdk.EcommerceApi();
let catalogId = 56; // Number | ID of the Catalog
let productIdentifier = "productIdentifier_example"; // String | ID of the Product
let productPatchRequest = new egoisdk.ProductPatchRequest(); // ProductPatchRequest | Parameters for the product
apiInstance.updateProduct(catalogId, productIdentifier, productPatchRequest, (error, data, response) => {
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

