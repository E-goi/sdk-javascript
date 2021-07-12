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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.ImportOrdersBulkBulkRequestItems = factory(root.egoiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ImportOrdersBulkBulkRequestItems model module.
   * @module egoiSdk/ImportOrdersBulkBulkRequestItems
   * @version 1.1.1RC1
   */

  /**
   * Constructs a new <code>ImportOrdersBulkBulkRequestItems</code>.
   * Ecommerce Order Items
   * @alias module:egoiSdk/ImportOrdersBulkBulkRequestItems
   * @class
   * @param id {String} Ecommerce order item id
   * @param name {String} Ecommerce order item name
   */
  var exports = function(id, name) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>ImportOrdersBulkBulkRequestItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ImportOrdersBulkBulkRequestItems} obj Optional instance to populate.
   * @return {module:egoiSdk/ImportOrdersBulkBulkRequestItems} The populated <code>ImportOrdersBulkBulkRequestItems</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = ApiClient.convertToType(data['price'], 'Number');
      }
      if (data.hasOwnProperty('quantity')) {
        obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Ecommerce order item id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Ecommerce order item name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Ecommerce order item category id (comma separated if more than one)
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * Ecommerce order item price
   * @member {Number} price
   */
  exports.prototype['price'] = undefined;
  /**
   * Ecommerce order item quantity
   * @member {Number} quantity
   */
  exports.prototype['quantity'] = undefined;


  /**
   * Returns Ecommerce order item id
   * @return {String}
   */
  exports.prototype.getId = function() {
    return this['id'];
  }

  /**
   * Sets Ecommerce order item id
   * @param {String} id Ecommerce order item id
   */
  exports.prototype.setId = function(id) {
    this['id'] = id;
  }


  /**
   * Returns Ecommerce order item name
   * @return {String}
   */
  exports.prototype.getName = function() {
    return this['name'];
  }

  /**
   * Sets Ecommerce order item name
   * @param {String} name Ecommerce order item name
   */
  exports.prototype.setName = function(name) {
    this['name'] = name;
  }


  /**
   * Returns Ecommerce order item category id (comma separated if more than one)
   * @return {String}
   */
  exports.prototype.getCategory = function() {
    return this['category'];
  }

  /**
   * Sets Ecommerce order item category id (comma separated if more than one)
   * @param {String} category Ecommerce order item category id (comma separated if more than one)
   */
  exports.prototype.setCategory = function(category) {
    this['category'] = category;
  }


  /**
   * Returns Ecommerce order item price
   * minimum: 0
   * @return {Number}
   */
  exports.prototype.getPrice = function() {
    return this['price'];
  }

  /**
   * Sets Ecommerce order item price
   * @param {Number} price Ecommerce order item price
   */
  exports.prototype.setPrice = function(price) {
    this['price'] = price;
  }


  /**
   * Returns Ecommerce order item quantity
   * minimum: 0
   * @return {Number}
   */
  exports.prototype.getQuantity = function() {
    return this['quantity'];
  }

  /**
   * Sets Ecommerce order item quantity
   * @param {Number} quantity Ecommerce order item quantity
   */
  exports.prototype.setQuantity = function(quantity) {
    this['quantity'] = quantity;
  }



  return exports;
}));


