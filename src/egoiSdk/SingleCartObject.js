/**
 * APIv3 (New)
 *  # Introduction This is our new version of API. We invite you to start using it and give us your feedback # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.   The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.   BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication   We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:  #!/bin/bash  curl -X GET 'https://api.egoiapp.com/my-account' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:  #!/bin/bash  curl -X POST 'http://api.egoiapp.com/tags' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>' \\  -H 'Content-Type: application/json' \\  -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * <a href='https://github.com/E-goi/sdk-java'>Java</a>  * <a href='https://github.com/E-goi/sdk-php'>PHP</a>  * <a href='https://github.com/E-goi/sdk-python'>Python</a>  * <a href='https://github.com/E-goi/sdk-ruby'>Ruby</a>  * <a href='https://github.com/E-goi/sdk-javascript'>Javascript</a>  * <a href='https://github.com/E-goi/sdk-csharp'>C#</a>  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you'll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation's requests, it's advised the request's division in batches that have each one less than 20MB.  # Timeouts Timeouts set a maximum waiting time on a request's response. Our API, sets a default timeout for each request and when breached, you'll receive an HTTP **408 (Request Timeout)** error code. You should take into consideration that response times can vary widely based on the complexity of the request, amount of data being analyzed, and the load on the system and workspace at the time of the query. When dealing with such errors, you should first attempt to reduce the complexity and amount of data under analysis, and only then, if problems are still occurring ask for support.  For all these reasons, the default timeout for each request is **10 Seconds** and any request that creates or modifies data (**POST**, **PATCH** and **PUT**) will have a timeout of **60 Seconds**. Specific timeouts may exist for specific requests, these can be found in the request's documentation.  <security-definitions/>
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'egoiSdk/ImportOrdersBulkBulkRequestItems'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ImportOrdersBulkBulkRequestItems'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.SingleCartObject = factory(root.egoiSdk.ApiClient, root.egoiSdk.ImportOrdersBulkBulkRequestItems);
  }
}(this, function(ApiClient, ImportOrdersBulkBulkRequestItems) {
  'use strict';



  /**
   * The SingleCartObject model module.
   * @module egoiSdk/SingleCartObject
   * @version 1.1.1RC1
   */

  /**
   * Constructs a new <code>SingleCartObject</code>.
   * Single Cart data
   * @alias module:egoiSdk/SingleCartObject
   * @class
   * @param revenue {Number} Ecommerce cart revenue
   * @param storeUrl {String} Ecommerce store url
   * @param items {Array.<module:egoiSdk/ImportOrdersBulkBulkRequestItems>} Array of cart's products
   */
  var exports = function(revenue, storeUrl, items) {
    var _this = this;

    _this['revenue'] = revenue;
    _this['store_url'] = storeUrl;
    _this['items'] = items;
  };

  /**
   * Constructs a <code>SingleCartObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/SingleCartObject} obj Optional instance to populate.
   * @return {module:egoiSdk/SingleCartObject} The populated <code>SingleCartObject</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('revenue')) {
        obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
      }
      if (data.hasOwnProperty('store_url')) {
        obj['store_url'] = ApiClient.convertToType(data['store_url'], 'String');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [ImportOrdersBulkBulkRequestItems]);
      }
    }
    return obj;
  }

  /**
   * Ecommerce cart revenue
   * @member {Number} revenue
   */
  exports.prototype['revenue'] = undefined;
  /**
   * Ecommerce store url
   * @member {String} store_url
   */
  exports.prototype['store_url'] = undefined;
  /**
   * Array of cart's products
   * @member {Array.<module:egoiSdk/ImportOrdersBulkBulkRequestItems>} items
   */
  exports.prototype['items'] = undefined;


  /**
   * Returns Ecommerce cart revenue
   * minimum: 0
   * @return {Number}
   */
  exports.prototype.getRevenue = function() {
    return this['revenue'];
  }

  /**
   * Sets Ecommerce cart revenue
   * @param {Number} revenue Ecommerce cart revenue
   */
  exports.prototype.setRevenue = function(revenue) {
    this['revenue'] = revenue;
  }


  /**
   * Returns Ecommerce store url
   * @return {String}
   */
  exports.prototype.getStoreUrl = function() {
    return this['store_url'];
  }

  /**
   * Sets Ecommerce store url
   * @param {String} storeUrl Ecommerce store url
   */
  exports.prototype.setStoreUrl = function(storeUrl) {
    this['store_url'] = storeUrl;
  }


  /**
   * Returns Array of cart's products
   * @return {Array.<module:egoiSdk/ImportOrdersBulkBulkRequestItems>}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * Sets Array of cart's products
   * @param {Array.<module:egoiSdk/ImportOrdersBulkBulkRequestItems>} items Array of cart's products
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }



  return exports;
}));


