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
    root.egoiSdk.ImportOrdersBulkBulkRequest = factory(root.egoiSdk.ApiClient, root.egoiSdk.ImportOrdersBulkBulkRequestItems);
  }
}(this, function(ApiClient, ImportOrdersBulkBulkRequestItems) {
  'use strict';



  /**
   * The ImportOrdersBulkBulkRequest model module.
   * @module egoiSdk/ImportOrdersBulkBulkRequest
   * @version 1.1.1RC1
   */

  /**
   * Constructs a new <code>ImportOrdersBulkBulkRequest</code>.
   * Order data
   * @alias module:egoiSdk/ImportOrdersBulkBulkRequest
   * @class
   * @param orderId {String} Ecommerce order id
   * @param revenue {Number} Ecommerce order revenue
   * @param storeUrl {String} Ecommerce store url
   * @param _date {Date} Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
   * @param items {Array.<module:egoiSdk/ImportOrdersBulkBulkRequestItems>} Array of ordered products
   */
  var exports = function(orderId, revenue, storeUrl, _date, items) {
    var _this = this;

    _this['order_id'] = orderId;
    _this['revenue'] = revenue;
    _this['store_url'] = storeUrl;
    _this['date'] = _date;
    _this['items'] = items;
  };

  /**
   * Constructs a <code>ImportOrdersBulkBulkRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ImportOrdersBulkBulkRequest} obj Optional instance to populate.
   * @return {module:egoiSdk/ImportOrdersBulkBulkRequest} The populated <code>ImportOrdersBulkBulkRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('order_id')) {
        obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
      }
      if (data.hasOwnProperty('contact_id')) {
        obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
      }
      if (data.hasOwnProperty('revenue')) {
        obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
      }
      if (data.hasOwnProperty('store_url')) {
        obj['store_url'] = ApiClient.convertToType(data['store_url'], 'String');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [ImportOrdersBulkBulkRequestItems]);
      }
    }
    return obj;
  }

  /**
   * Ecommerce order id
   * @member {String} order_id
   */
  exports.prototype['order_id'] = undefined;
  /**
   * Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid)
   * @member {String} contact_id
   */
  exports.prototype['contact_id'] = undefined;
  /**
   * Ecommerce order revenue
   * @member {Number} revenue
   */
  exports.prototype['revenue'] = undefined;
  /**
   * Ecommerce store url
   * @member {String} store_url
   */
  exports.prototype['store_url'] = undefined;
  /**
   * Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * Array of ordered products
   * @member {Array.<module:egoiSdk/ImportOrdersBulkBulkRequestItems>} items
   */
  exports.prototype['items'] = undefined;


  /**
   * Returns Ecommerce order id
   * @return {String}
   */
  exports.prototype.getOrderId = function() {
    return this['order_id'];
  }

  /**
   * Sets Ecommerce order id
   * @param {String} orderId Ecommerce order id
   */
  exports.prototype.setOrderId = function(orderId) {
    this['order_id'] = orderId;
  }


  /**
   * Returns Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid)
   * @return {String}
   */
  exports.prototype.getContactId = function() {
    return this['contact_id'];
  }

  /**
   * Sets Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid)
   * @param {String} contactId Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid)
   */
  exports.prototype.setContactId = function(contactId) {
    this['contact_id'] = contactId;
  }


  /**
   * Returns Ecommerce order revenue
   * minimum: 0
   * @return {Number}
   */
  exports.prototype.getRevenue = function() {
    return this['revenue'];
  }

  /**
   * Sets Ecommerce order revenue
   * @param {Number} revenue Ecommerce order revenue
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
   * Returns Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
   * @return {Date}
   */
  exports.prototype.getDate = function() {
    return this['date'];
  }

  /**
   * Sets Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
   * @param {Date} _date Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
   */
  exports.prototype.setDate = function(_date) {
    this['date'] = _date;
  }


  /**
   * Returns Array of ordered products
   * @return {Array.<module:egoiSdk/ImportOrdersBulkBulkRequestItems>}
   */
  exports.prototype.getItems = function() {
    return this['items'];
  }

  /**
   * Sets Array of ordered products
   * @param {Array.<module:egoiSdk/ImportOrdersBulkBulkRequestItems>} items Array of ordered products
   */
  exports.prototype.setItems = function(items) {
    this['items'] = items;
  }



  return exports;
}));


