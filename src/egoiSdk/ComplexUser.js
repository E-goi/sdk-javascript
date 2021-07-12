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
    define(['ApiClient', 'egoiSdk/Language', 'egoiSdk/User'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Language'), require('./User'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.ComplexUser = factory(root.egoiSdk.ApiClient, root.egoiSdk.Language, root.egoiSdk.User);
  }
}(this, function(ApiClient, Language, User) {
  'use strict';



  /**
   * The ComplexUser model module.
   * @module egoiSdk/ComplexUser
   * @version 1.1.1RC1
   */

  /**
   * Constructs a new <code>ComplexUser</code>.
   * Complex user schema
   * @alias module:egoiSdk/ComplexUser
   * @class
   * @extends module:egoiSdk/User
   * @implements module:egoiSdk/User
   */
  var exports = function() {
    var _this = this;

    User.call(_this);
  };

  /**
   * Constructs a <code>ComplexUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/ComplexUser} obj Optional instance to populate.
   * @return {module:egoiSdk/ComplexUser} The populated <code>ComplexUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      User.constructFromObject(data, obj);
      if (data.hasOwnProperty('language')) {
        obj['language'] = Language.constructFromObject(data['language']);
      }
      if (data.hasOwnProperty('timezone')) {
        obj['timezone'] = ApiClient.convertToType(data['timezone'], 'String');
      }
      if (data.hasOwnProperty('show_removed_contacts')) {
        obj['show_removed_contacts'] = ApiClient.convertToType(data['show_removed_contacts'], 'Boolean');
      }
      if (data.hasOwnProperty('gender')) {
        obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(User.prototype);
  exports.prototype.constructor = exports;

  /**
   * @member {module:egoiSdk/Language} language
   */
  exports.prototype['language'] = undefined;
  /**
   * User timezone
   * @member {String} timezone
   */
  exports.prototype['timezone'] = undefined;
  /**
   * True if the user can see removed contacts, false otherwise
   * @member {Boolean} show_removed_contacts
   * @default true
   */
  exports.prototype['show_removed_contacts'] = true;
  /**
   * User gender
   * @member {module:egoiSdk/ComplexUser.GenderEnum} gender
   */
  exports.prototype['gender'] = undefined;

  // Implement User interface:
  /**
   * @member {} user_id
   */
exports.prototype['user_id'] = undefined;

  /**
   * User login
   * @member {} username
   */
exports.prototype['username'] = undefined;

  /**
   * True if user is admin, false otherwise
   * @member {} is_admin
   * @default false
   */
exports.prototype['is_admin'] = false;

  /**
   * First name of the user
   * @member {} first_name
   */
exports.prototype['first_name'] = undefined;

  /**
   * Last name of the user
   * @member {} last_name
   */
exports.prototype['last_name'] = undefined;

  /**
   * Email of the user
   * @member {} email
   */
exports.prototype['email'] = undefined;

  /**
   * User's phone (may be cellphone or phone)
   * @member {} phone
   */
exports.prototype['phone'] = undefined;

  /**
   * User's profile image
   * @member {} profile_image
   */
exports.prototype['profile_image'] = undefined;

  /**
   * User status
   * @member {} status
   */
exports.prototype['status'] = undefined;

  /**
   * The date and time
   * @member {} created
   */
exports.prototype['created'] = undefined;

  /**
   * The date and time
   * @member {} updated
   */
exports.prototype['updated'] = undefined;


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
   * Returns User timezone
   * @return {String}
   */
  exports.prototype.getTimezone = function() {
    return this['timezone'];
  }

  /**
   * Sets User timezone
   * @param {String} timezone User timezone
   */
  exports.prototype.setTimezone = function(timezone) {
    this['timezone'] = timezone;
  }


  /**
   * Returns True if the user can see removed contacts, false otherwise
   * @return {Boolean}
   */
  exports.prototype.getShowRemovedContacts = function() {
    return this['show_removed_contacts'];
  }

  /**
   * Sets True if the user can see removed contacts, false otherwise
   * @param {Boolean} showRemovedContacts True if the user can see removed contacts, false otherwise
   */
  exports.prototype.setShowRemovedContacts = function(showRemovedContacts) {
    this['show_removed_contacts'] = showRemovedContacts;
  }


  /**
   * Returns User gender
   * @return {module:egoiSdk/ComplexUser.GenderEnum}
   */
  exports.prototype.getGender = function() {
    return this['gender'];
  }

  /**
   * Sets User gender
   * @param {module:egoiSdk/ComplexUser.GenderEnum} gender User gender
   */
  exports.prototype.setGender = function(gender) {
    this['gender'] = gender;
  }


  /**
   * Allowed values for the <code>gender</code> property.
   * @enum {String}
   * @readonly
   */
  exports.GenderEnum = {
    /**
     * value: "male"
     * @const
     */
    "male": "male",
    /**
     * value: "female"
     * @const
     */
    "female": "female"  };


  return exports;
}));


