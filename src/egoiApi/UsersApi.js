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
    define(['ApiClient', 'egoiSdk/Conflict', 'egoiSdk/Forbidden', 'egoiSdk/InternalServerError', 'egoiSdk/NotFound', 'egoiSdk/Unauthorized', 'egoiSdk/UnprocessableEntity', 'egoiSdk/UserCollection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../egoiSdk/Conflict'), require('../egoiSdk/Forbidden'), require('../egoiSdk/InternalServerError'), require('../egoiSdk/NotFound'), require('../egoiSdk/Unauthorized'), require('../egoiSdk/UnprocessableEntity'), require('../egoiSdk/UserCollection'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.UsersApi = factory(root.egoiSdk.ApiClient, root.egoiSdk.Conflict, root.egoiSdk.Forbidden, root.egoiSdk.InternalServerError, root.egoiSdk.NotFound, root.egoiSdk.Unauthorized, root.egoiSdk.UnprocessableEntity, root.egoiSdk.UserCollection);
  }
}(this, function(ApiClient, Conflict, Forbidden, InternalServerError, NotFound, Unauthorized, UnprocessableEntity, UserCollection) {
  'use strict';

  /**
   * Users service.
   * @module egoiApi/UsersApi
   * @version 1.0.0RC1
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:egoiApi/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteUser operation.
     * @callback module:egoiApi/UsersApi~deleteUserCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove user
     * Remove user information given its ID
     * @param {Number} userId ID of the User
     * @param {module:egoiApi/UsersApi~deleteUserCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUser = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deleteUser");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{user_id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllUsers operation.
     * @callback module:egoiApi/UsersApi~getAllUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/UserCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all users
     * Returns all users
     * @param {Object} opts Optional parameters
     * @param {String} opts.username Reference attribute to username user
     * @param {module:egoiSdk/String} opts.status Status filter
     * @param {Date} opts.createdMin Created initial date
     * @param {Date} opts.createdMax Created finish
     * @param {Date} opts.updatedMin Updated initial
     * @param {Date} opts.updatedMax Updated finish
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoiSdk/String} opts.order Type of order (default to &#39;desc&#39;)
     * @param {module:egoiSdk/String} opts.orderBy Reference attribute to order users (default to &#39;user_id&#39;)
     * @param {module:egoiApi/UsersApi~getAllUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/UserCollection}
     */
    this.getAllUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'username': opts['username'],
        'status': opts['status'],
        'created_min': opts['createdMin'],
        'created_max': opts['createdMax'],
        'updated_min': opts['updatedMin'],
        'updated_max': opts['updatedMax'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'order': opts['order'],
        'order_by': opts['orderBy'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UserCollection;

      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));