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
    root.egoiSdk.FieldOption = factory(root.egoiSdk.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The FieldOption model module.
   * @module egoiSdk/FieldOption
   * @version 1.1.1RC1
   */

  /**
   * Constructs a new <code>FieldOption</code>.
   * Field option schema
   * @alias module:egoiSdk/FieldOption
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>FieldOption</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/FieldOption} obj Optional instance to populate.
   * @return {module:egoiSdk/FieldOption} The populated <code>FieldOption</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('option_id')) {
        obj['option_id'] = ApiClient.convertToType(data['option_id'], 'Number');
      }
      if (data.hasOwnProperty('en')) {
        obj['en'] = ApiClient.convertToType(data['en'], 'String');
      }
      if (data.hasOwnProperty('pt')) {
        obj['pt'] = ApiClient.convertToType(data['pt'], 'String');
      }
      if (data.hasOwnProperty('br')) {
        obj['br'] = ApiClient.convertToType(data['br'], 'String');
      }
      if (data.hasOwnProperty('es')) {
        obj['es'] = ApiClient.convertToType(data['es'], 'String');
      }
      if (data.hasOwnProperty('de')) {
        obj['de'] = ApiClient.convertToType(data['de'], 'String');
      }
      if (data.hasOwnProperty('hu')) {
        obj['hu'] = ApiClient.convertToType(data['hu'], 'String');
      }
      if (data.hasOwnProperty('fr')) {
        obj['fr'] = ApiClient.convertToType(data['fr'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} option_id
   */
  exports.prototype['option_id'] = undefined;
  /**
   * English option value
   * @member {String} en
   */
  exports.prototype['en'] = undefined;
  /**
   * Portuguese option value
   * @member {String} pt
   */
  exports.prototype['pt'] = undefined;
  /**
   * Brazilian portuguese option value
   * @member {String} br
   */
  exports.prototype['br'] = undefined;
  /**
   * Spanish option value
   * @member {String} es
   */
  exports.prototype['es'] = undefined;
  /**
   * German option value
   * @member {String} de
   */
  exports.prototype['de'] = undefined;
  /**
   * Hungarian option value
   * @member {String} hu
   */
  exports.prototype['hu'] = undefined;
  /**
   * French option value
   * @member {String} fr
   */
  exports.prototype['fr'] = undefined;


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getOptionId = function() {
    return this['option_id'];
  }

  /**
   * @param {Number} optionId
   */
  exports.prototype.setOptionId = function(optionId) {
    this['option_id'] = optionId;
  }


  /**
   * Returns English option value
   * @return {String}
   */
  exports.prototype.getEn = function() {
    return this['en'];
  }

  /**
   * Sets English option value
   * @param {String} en English option value
   */
  exports.prototype.setEn = function(en) {
    this['en'] = en;
  }


  /**
   * Returns Portuguese option value
   * @return {String}
   */
  exports.prototype.getPt = function() {
    return this['pt'];
  }

  /**
   * Sets Portuguese option value
   * @param {String} pt Portuguese option value
   */
  exports.prototype.setPt = function(pt) {
    this['pt'] = pt;
  }


  /**
   * Returns Brazilian portuguese option value
   * @return {String}
   */
  exports.prototype.getBr = function() {
    return this['br'];
  }

  /**
   * Sets Brazilian portuguese option value
   * @param {String} br Brazilian portuguese option value
   */
  exports.prototype.setBr = function(br) {
    this['br'] = br;
  }


  /**
   * Returns Spanish option value
   * @return {String}
   */
  exports.prototype.getEs = function() {
    return this['es'];
  }

  /**
   * Sets Spanish option value
   * @param {String} es Spanish option value
   */
  exports.prototype.setEs = function(es) {
    this['es'] = es;
  }


  /**
   * Returns German option value
   * @return {String}
   */
  exports.prototype.getDe = function() {
    return this['de'];
  }

  /**
   * Sets German option value
   * @param {String} de German option value
   */
  exports.prototype.setDe = function(de) {
    this['de'] = de;
  }


  /**
   * Returns Hungarian option value
   * @return {String}
   */
  exports.prototype.getHu = function() {
    return this['hu'];
  }

  /**
   * Sets Hungarian option value
   * @param {String} hu Hungarian option value
   */
  exports.prototype.setHu = function(hu) {
    this['hu'] = hu;
  }


  /**
   * Returns French option value
   * @return {String}
   */
  exports.prototype.getFr = function() {
    return this['fr'];
  }

  /**
   * Sets French option value
   * @param {String} fr French option value
   */
  exports.prototype.setFr = function(fr) {
    this['fr'] = fr;
  }



  return exports;
}));


