/**
 * APIv3 (Beta)
 *  # Introduction Just a quick peek!!! This is our new version of API. Remember, it is not stable yet!!! But we invite you play with it and give us your feedback ;) # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.   The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.   BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication   We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:  #!/bin/bash  curl -X GET 'https://api.egoiapp.com/my-account' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:  #!/bin/bash  curl -X POST 'http://api.egoiapp.com/tags' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>' \\  -H 'Content-Type: application/json' \\  -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services. * <b><a href='https://github.com/E-goi/sdk-java'>Java</a></b> * <b><a href='https://github.com/E-goi/sdk-php'>PHP</a></b> * <b><a href='https://github.com/E-goi/sdk-python'>Python</a></b>  <security-definitions/>
 *
 * OpenAPI spec version: 3.0.0-beta
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
    define(['ApiClient', 'egoiSdk/Language'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Language'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.Form = factory(root.egoiSdk.ApiClient, root.egoiSdk.Language);
  }
}(this, function(ApiClient, Language) {
  'use strict';



  /**
   * The Form model module.
   * @module egoiSdk/Form
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new <code>Form</code>.
   * Form schema
   * @alias module:egoiSdk/Form
   * @class
   * @param title {String} Title of the form
   */
  var exports = function(title) {
    var _this = this;

    _this['title'] = title;
  };

  /**
   * Constructs a <code>Form</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/Form} obj Optional instance to populate.
   * @return {module:egoiSdk/Form} The populated <code>Form</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('form_id')) {
        obj['form_id'] = ApiClient.convertToType(data['form_id'], 'Number');
      }
      if (data.hasOwnProperty('internal_title')) {
        obj['internal_title'] = ApiClient.convertToType(data['internal_title'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = Language.constructFromObject(data['language']);
      }
      if (data.hasOwnProperty('list_id')) {
        obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
      if (data.hasOwnProperty('owner')) {
        obj['owner'] = ApiClient.convertToType(data['owner'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} form_id
   */
  exports.prototype['form_id'] = undefined;
  /**
   * Internal title of the form
   * @member {String} internal_title
   * @default '$request.body#/title'
   */
  exports.prototype['internal_title'] = '$request.body#/title';
  /**
   * Title of the form
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {module:egoiSdk/Language} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {Number} list_id
   */
  exports.prototype['list_id'] = undefined;
  /**
   * True if this is the default form in the list, false otherwise
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;
  /**
   * @member {Number} owner
   */
  exports.prototype['owner'] = undefined;
  /**
   * Status of the form
   * @member {module:egoiSdk/Form.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The date and time
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * The date and time
   * @member {Date} updated
   */
  exports.prototype['updated'] = undefined;


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getFormId = function() {
    return this['form_id'];
  }

  /**
   * @param {Number} formId
   */
  exports.prototype.setFormId = function(formId) {
    this['form_id'] = formId;
  }


  /**
   * Returns Internal title of the form
   * @return {String}
   */
  exports.prototype.getInternalTitle = function() {
    return this['internal_title'];
  }

  /**
   * Sets Internal title of the form
   * @param {String} internalTitle Internal title of the form
   */
  exports.prototype.setInternalTitle = function(internalTitle) {
    this['internal_title'] = internalTitle;
  }


  /**
   * Returns Title of the form
   * @return {String}
   */
  exports.prototype.getTitle = function() {
    return this['title'];
  }

  /**
   * Sets Title of the form
   * @param {String} title Title of the form
   */
  exports.prototype.setTitle = function(title) {
    this['title'] = title;
  }


  /**
   * @return {module:egoiSdk/Language}
   */
  exports.prototype.getLanguage = function() {
    return this['language'];
  }

  /**
   * @param {module:egoiSdk/Language} language
   */
  exports.prototype.setLanguage = function(language) {
    this['language'] = language;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getListId = function() {
    return this['list_id'];
  }

  /**
   * @param {Number} listId
   */
  exports.prototype.setListId = function(listId) {
    this['list_id'] = listId;
  }


  /**
   * Returns True if this is the default form in the list, false otherwise
   * @return {Boolean}
   */
  exports.prototype.getDefault = function() {
    return this['default'];
  }

  /**
   * Sets True if this is the default form in the list, false otherwise
   * @param {Boolean} _default True if this is the default form in the list, false otherwise
   */
  exports.prototype.setDefault = function(_default) {
    this['default'] = _default;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getOwner = function() {
    return this['owner'];
  }

  /**
   * @param {Number} owner
   */
  exports.prototype.setOwner = function(owner) {
    this['owner'] = owner;
  }


  /**
   * Returns Status of the form
   * @return {module:egoiSdk/Form.StatusEnum}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets Status of the form
   * @param {module:egoiSdk/Form.StatusEnum} status Status of the form
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
  }


  /**
   * Returns The date and time
   * @return {Date}
   */
  exports.prototype.getCreated = function() {
    return this['created'];
  }

  /**
   * Sets The date and time
   * @param {Date} created The date and time
   */
  exports.prototype.setCreated = function(created) {
    this['created'] = created;
  }


  /**
   * Returns The date and time
   * @return {Date}
   */
  exports.prototype.getUpdated = function() {
    return this['updated'];
  }

  /**
   * Sets The date and time
   * @param {Date} updated The date and time
   */
  exports.prototype.setUpdated = function(updated) {
    this['updated'] = updated;
  }


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "unpublished"
     * @const
     */
    "unpublished": "unpublished",
    /**
     * value: "cloned"
     * @const
     */
    "cloned": "cloned",
    /**
     * value: "deleted"
     * @const
     */
    "deleted": "deleted"  };


  return exports;
}));

