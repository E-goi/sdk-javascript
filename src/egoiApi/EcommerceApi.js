/**
 * Marketing API
 *  # Introduction Welcome to the E-goi Marketing API! <br><br>This API enables you to integrate, automate, and manage all the marketing functionalities offered by E-goi. With it, you can interact with contact lists, send email campaigns, SMS, push notifications, and much more. <br><br>Our API is designed to simplify integration in a straightforward, efficient, and secure way, meeting the needs of developers and businesses looking to optimize their digital marketing operations. <br><br>Explore the documentation to discover all the possibilities and start creating integrations that drive your marketing results. # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.  The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.      BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Transport Layer Security (TLS) Transport Layer Security (TLS) is a widely used authentication and encryption protocol that establishes a secure communications channel for data-in-transit while ensuring that the client and server can validate one another.<br> Our API requires TLS 1.2 or TLS 1.3. We recommend <b>TLS 1.3</b>.<br><br> <b>TLS 1.3 ciphers</b> * TLS_AES_256_GCM_SHA384 (0x1302) ECDH x25519 (eq. 3072 bits RSA) FS * TLS_CHACHA20_POLY1305_SHA256 (0x1303) ECDH x25519 (eq. 3072 bits RSA) FS * TLS_AES_128_GCM_SHA256 (0x1301) ECDH x25519 (eq. 3072 bits RSA) FS  <b>TLS 1.2 ciphers</b> * TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030) ECDH x25519 (eq. 3072 bits RSA) FS * TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xc02f) ECDH x25519 (eq. 3072 bits RSA) FS * TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 (0x9f) DH 4096 bits FS * TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 (0x9e) DH 4096 bits FS  # Rate Limits Rate limits are used to control the amount of traffic that is allowed to flow between the client and the server.<br> This is done to prevent abuse and ensure that the API is available to all users.<br> The rate limits are applied to ensure the stability and security of our API and are based on the number of requests made in a given time period.<br> If the rate limit is exceeded, the API will return a 429 status code and the request will be rejected.<br> Each API response includes headers providing real-time rate limit information: * **X-RateLimit-Limit**: The maximum number of requests that the consumer is permitted to make in a given time period. * **X-RateLimit-Remaining**: The number of requests remaining in the current rate limit window. * **X-RateLimit-Reset**: The remaining time in seconds until the rate limit window resets.  # Account Limit The account limit is a rate limit that is applied to the account as a whole.<br> This limit is applied to all requests made by the account, regardless of the client making the request.<br> The account limit is applied to ensure that the account does not exceed the maximum number of requests allowed in a given time period. Each account has an overall usage limit per hour. If the account limit is exceeded, the API will return a 429 status code and the request will be rejected.<br> Each API response includes headers providing real-time rate limit information: * **X-Account-Limit**: The maximum number of requests that the account is permitted to make in a given time period. * **X-Account-Remaining**: The number of requests remaining in the current rate limit window. * **X-Account-Reset**: The remaining time in seconds until the rate limit window resets.   # Authentication  We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:     #!/bin/bash     curl -X GET 'https://api.egoiapp.com/my-account' \\     -H 'accept: application/json' \\     -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:     #!/bin/bash     curl -X POST 'http://api.egoiapp.com/tags' \\     -H 'accept: application/json' \\     -H 'Apikey: <YOUR_APY_KEY>' \\     -H 'Content-Type: application/json' \\     -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * <a href='https://github.com/E-goi/sdk-java'>Java</a>  * <a href='https://github.com/E-goi/sdk-php'>PHP</a>  * <a href='https://github.com/E-goi/sdk-python'>Python</a>  * <a href='https://github.com/E-goi/sdk-ruby'>Ruby</a>  * <a href='https://github.com/E-goi/sdk-javascript'>Javascript</a>  * <a href='https://github.com/E-goi/sdk-csharp'>C#</a>  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you'll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation's requests, it's advised the request's division in batches that have each one less than 20MB.  # Timeouts Timeouts set a maximum waiting time on a request's response. Our API, sets a default timeout for each request and when breached, you'll receive an HTTP **408 (Request Timeout)** error code. You should take into consideration that response times can vary widely based on the complexity of the request, amount of data being analyzed, and the load on the system and workspace at the time of the query. When dealing with such errors, you should first attempt to reduce the complexity and amount of data under analysis, and only then, if problems are still occurring ask for support.  For all these reasons, the default timeout for each request is **10 Seconds** and any request that creates or modifies data (**POST**, **PATCH** and **PUT**) will have a timeout of **60 Seconds**. Specific timeouts may exist for specific requests, these can be found in the request's documentation.  # Callbacks A callback is an asynchronous API request that originates from the API server and is sent to the client in response to a previous request sent by that client.  The API will make a **POST** request to the address defined in the URL with the information regarding the event of interest and share data related to that event.  <a href='/usecases/callbacks/' target='_blank'>[Go to callbacks documentation]</a>  ***Note:*** Only http or https protocols are supported in the Url parameter.  <security-definitions/>
 *
 * The version of the OpenAPI document: V3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AcceptedResponse from '../egoisdk/AcceptedResponse';
import BadRequest from '../egoisdk/BadRequest';
import Cart from '../egoisdk/Cart';
import Catalog from '../egoisdk/Catalog';
import CatalogCollection from '../egoisdk/CatalogCollection';
import CatalogPostRequest from '../egoisdk/CatalogPostRequest';
import CreateOrder from '../egoisdk/CreateOrder';
import Forbidden from '../egoisdk/Forbidden';
import GetAllProductsCustomAttributesParameter from '../egoisdk/GetAllProductsCustomAttributesParameter';
import ImportOrdersBulkBulkRequest from '../egoisdk/ImportOrdersBulkBulkRequest';
import InternalServerError from '../egoisdk/InternalServerError';
import NotFound from '../egoisdk/NotFound';
import PayloadTooLarge from '../egoisdk/PayloadTooLarge';
import PostProductsConflict from '../egoisdk/PostProductsConflict';
import Product from '../egoisdk/Product';
import ProductBulkRequest from '../egoisdk/ProductBulkRequest';
import ProductCollection from '../egoisdk/ProductCollection';
import ProductPatchRequest from '../egoisdk/ProductPatchRequest';
import ProductPostRequest from '../egoisdk/ProductPostRequest';
import RequestEntityTooLarge from '../egoisdk/RequestEntityTooLarge';
import RequestTimeout from '../egoisdk/RequestTimeout';
import ServiceUnavailable from '../egoisdk/ServiceUnavailable';
import TooManyRequests from '../egoisdk/TooManyRequests';
import Unauthorized from '../egoisdk/Unauthorized';
import UnprocessableEntity from '../egoisdk/UnprocessableEntity';

/**
* Ecommerce service.
* @module egoiApi/EcommerceApi
* @version 1.1.6RC1
*/
export default class EcommerceApi {

    /**
    * Constructs a new EcommerceApi. 
    * @alias module:egoiApi/EcommerceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCart operation.
     * @callback module:egoiApi/EcommerceApi~createCartCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create cart
     * Creates a new cart. If ***contact_id*** is specified, order will be atached to the contact, if the contact propreties are specified, we'll create the user, if its already in your list it will get the correct contact (**make sure you are sending atleast all configured list's unique fields**). This same logic is also applied to the **product_identifier**.
     * @param {String} domain Domain
     * @param {module:egoisdk/Cart} cart Parameters for the Carts
     * @param {module:egoiApi/EcommerceApi~createCartCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    createCart(domain, cart, callback) {
      let postBody = cart;
      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling createCart");
      }
      // verify the required parameter 'cart' is set
      if (cart === undefined || cart === null) {
        throw new Error("Missing the required parameter 'cart' when calling createCart");
      }

      let pathParams = {
        'domain': domain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/{domain}/carts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createCatalog operation.
     * @callback module:egoiApi/EcommerceApi~createCatalogCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/Catalog} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new catalog
     * Creates a new catalog
     * @param {module:egoisdk/CatalogPostRequest} catalogPostRequest Parameters for the Catalog
     * @param {module:egoiApi/EcommerceApi~createCatalogCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/Catalog}
     */
    createCatalog(catalogPostRequest, callback) {
      let postBody = catalogPostRequest;
      // verify the required parameter 'catalogPostRequest' is set
      if (catalogPostRequest === undefined || catalogPostRequest === null) {
        throw new Error("Missing the required parameter 'catalogPostRequest' when calling createCatalog");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Catalog;
      return this.apiClient.callApi(
        '/catalogs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createOrder operation.
     * @callback module:egoiApi/EcommerceApi~createOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create order
     * Creates a new order. If **contact_id** is specified, order will be atached to the contact, if the contact propreties are specified, we'll create the user, if its already in your list it will get the correct contact (***make sure you are sending atleast all configured list's unique fields***). This same logic is also applied to the **product_identifier**.
     * @param {String} domain Domain
     * @param {module:egoisdk/CreateOrder} createOrder Parameters for the Orders
     * @param {module:egoiApi/EcommerceApi~createOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    createOrder(domain, createOrder, callback) {
      let postBody = createOrder;
      // verify the required parameter 'domain' is set
      if (domain === undefined || domain === null) {
        throw new Error("Missing the required parameter 'domain' when calling createOrder");
      }
      // verify the required parameter 'createOrder' is set
      if (createOrder === undefined || createOrder === null) {
        throw new Error("Missing the required parameter 'createOrder' when calling createOrder");
      }

      let pathParams = {
        'domain': domain
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/{domain}/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createProduct operation.
     * @callback module:egoiApi/EcommerceApi~createProductCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new product
     * Creates a new product
     * @param {Number} catalogId ID of the Catalog
     * @param {module:egoisdk/ProductPostRequest} productPostRequest Parameters for the Product
     * @param {module:egoiApi/EcommerceApi~createProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/Product}
     */
    createProduct(catalogId, productPostRequest, callback) {
      let postBody = productPostRequest;
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling createProduct");
      }
      // verify the required parameter 'productPostRequest' is set
      if (productPostRequest === undefined || productPostRequest === null) {
        throw new Error("Missing the required parameter 'productPostRequest' when calling createProduct");
      }

      let pathParams = {
        'catalog_id': catalogId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Product;
      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCatalog operation.
     * @callback module:egoiApi/EcommerceApi~deleteCatalogCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove catalog
     * Remove catalog information given its ID
     * @param {Number} catalogId ID of the Catalog
     * @param {module:egoiApi/EcommerceApi~deleteCatalogCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCatalog(catalogId, callback) {
      let postBody = null;
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling deleteCatalog");
      }

      let pathParams = {
        'catalog_id': catalogId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/catalogs/{catalog_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProduct operation.
     * @callback module:egoiApi/EcommerceApi~deleteProductCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove product
     * Remove product information given its ID
     * @param {Number} catalogId ID of the Catalog
     * @param {String} productIdentifier ID of the Product
     * @param {module:egoiApi/EcommerceApi~deleteProductCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteProduct(catalogId, productIdentifier, callback) {
      let postBody = null;
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling deleteProduct");
      }
      // verify the required parameter 'productIdentifier' is set
      if (productIdentifier === undefined || productIdentifier === null) {
        throw new Error("Missing the required parameter 'productIdentifier' when calling deleteProduct");
      }

      let pathParams = {
        'catalog_id': catalogId,
        'product_identifier': productIdentifier
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products/{product_identifier}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCatalogs operation.
     * @callback module:egoiApi/EcommerceApi~getAllCatalogsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/CatalogCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all catalogs
     * Returns all catalogs
     * @param {module:egoiApi/EcommerceApi~getAllCatalogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/CatalogCollection}
     */
    getAllCatalogs(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CatalogCollection;
      return this.apiClient.callApi(
        '/catalogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllProducts operation.
     * @callback module:egoiApi/EcommerceApi~getAllProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/ProductCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all products
     * Returns all products for the given catalog
     * @param {Number} catalogId ID of the Catalog
     * @param {Object} opts Optional parameters
     * @param {String} opts.productIdentifier Filter by product ID in your store
     * @param {String} opts.name Filter by name of the product
     * @param {String} opts.description Filter by description of the product
     * @param {String} opts.sku Filter by Stock Keeping Unit
     * @param {String} opts.upc Filter by Universal Product Code
     * @param {String} opts.ean Filter by European Article Numbering
     * @param {String} opts.gtin Filter by Global Trade Item Number
     * @param {String} opts.mpn Filter by Manufacturer Part Number
     * @param {Number} opts.price Filter by price of the product
     * @param {Number} opts.salePrice Filter by sale price of the product
     * @param {String} opts.brand Filter by brand of the product
     * @param {Object.<String, module:egoisdk/GetAllProductsCustomAttributesParameter>} opts.customAttributes Filter by custom attributes of products<div><span class='sc-cJSrbW cWGDGi'> Example: </span> <span class='sc-uJMKN cTkJKI'> 'custom_attributes[alias]=value' </span></div>
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoiApi/EcommerceApi~getAllProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/ProductCollection}
     */
    getAllProducts(catalogId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling getAllProducts");
      }

      let pathParams = {
        'catalog_id': catalogId
      };
      let queryParams = {
        'product_identifier': opts['productIdentifier'],
        'name': opts['name'],
        'description': opts['description'],
        'sku': opts['sku'],
        'upc': opts['upc'],
        'ean': opts['ean'],
        'gtin': opts['gtin'],
        'mpn': opts['mpn'],
        'price': opts['price'],
        'sale_price': opts['salePrice'],
        'brand': opts['brand'],
        'custom_attributes': opts['customAttributes'],
        'offset': opts['offset'],
        'limit': opts['limit']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ProductCollection;
      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getProduct operation.
     * @callback module:egoiApi/EcommerceApi~getProductCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get product
     * Returns product information given its ID
     * @param {Number} catalogId ID of the Catalog
     * @param {String} productIdentifier ID of the Product
     * @param {module:egoiApi/EcommerceApi~getProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/Product}
     */
    getProduct(catalogId, productIdentifier, callback) {
      let postBody = null;
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling getProduct");
      }
      // verify the required parameter 'productIdentifier' is set
      if (productIdentifier === undefined || productIdentifier === null) {
        throw new Error("Missing the required parameter 'productIdentifier' when calling getProduct");
      }

      let pathParams = {
        'catalog_id': catalogId,
        'product_identifier': productIdentifier
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Product;
      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products/{product_identifier}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importOrdersBulk operation.
     * @callback module:egoiApi/EcommerceApi~importOrdersBulkCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Orders import bulk request
     * Creates new bulk orders syncronization </br>      **DISCLAIMER:** stream limits applied. [view here](#section/Stream-Limits 'Stream Limits')
     * @param {Number} listId ID of the List
     * @param {Array.<module:egoisdk/ImportOrdersBulkBulkRequest>} importOrdersBulkBulkRequest Parameters for the Orders
     * @param {module:egoiApi/EcommerceApi~importOrdersBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    importOrdersBulk(listId, importOrdersBulkBulkRequest, callback) {
      let postBody = importOrdersBulkBulkRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling importOrdersBulk");
      }
      // verify the required parameter 'importOrdersBulkBulkRequest' is set
      if (importOrdersBulkBulkRequest === undefined || importOrdersBulkBulkRequest === null) {
        throw new Error("Missing the required parameter 'importOrdersBulkBulkRequest' when calling importOrdersBulk");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/orders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the importProducts operation.
     * @callback module:egoiApi/EcommerceApi~importProductsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import products
     * Imports a collection of products</br>      **DISCLAIMER:** stream limits applied. [view here](#section/Stream-Limits 'Stream Limits')
     * @param {Number} catalogId ID of the Catalog
     * @param {module:egoisdk/ProductBulkRequest} productBulkRequest Parameters for the Product
     * @param {module:egoiApi/EcommerceApi~importProductsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    importProducts(catalogId, productBulkRequest, callback) {
      let postBody = productBulkRequest;
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling importProducts");
      }
      // verify the required parameter 'productBulkRequest' is set
      if (productBulkRequest === undefined || productBulkRequest === null) {
        throw new Error("Missing the required parameter 'productBulkRequest' when calling importProducts");
      }

      let pathParams = {
        'catalog_id': catalogId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products/actions/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProduct operation.
     * @callback module:egoiApi/EcommerceApi~updateProductCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/Product} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update product
     * Updates a product
     * @param {Number} catalogId ID of the Catalog
     * @param {String} productIdentifier ID of the Product
     * @param {module:egoisdk/ProductPatchRequest} productPatchRequest Parameters for the product
     * @param {module:egoiApi/EcommerceApi~updateProductCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/Product}
     */
    updateProduct(catalogId, productIdentifier, productPatchRequest, callback) {
      let postBody = productPatchRequest;
      // verify the required parameter 'catalogId' is set
      if (catalogId === undefined || catalogId === null) {
        throw new Error("Missing the required parameter 'catalogId' when calling updateProduct");
      }
      // verify the required parameter 'productIdentifier' is set
      if (productIdentifier === undefined || productIdentifier === null) {
        throw new Error("Missing the required parameter 'productIdentifier' when calling updateProduct");
      }
      // verify the required parameter 'productPatchRequest' is set
      if (productPatchRequest === undefined || productPatchRequest === null) {
        throw new Error("Missing the required parameter 'productPatchRequest' when calling updateProduct");
      }

      let pathParams = {
        'catalog_id': catalogId,
        'product_identifier': productIdentifier
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Product;
      return this.apiClient.callApi(
        '/catalogs/{catalog_id}/products/{product_identifier}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
