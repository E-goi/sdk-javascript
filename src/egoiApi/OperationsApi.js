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
    define(['ApiClient', 'egoiSdk/Forbidden', 'egoiSdk/InternalServerError', 'egoiSdk/OperationActionRequest', 'egoiSdk/OperationActionResponse', 'egoiSdk/OperationsCollection', 'egoiSdk/RequestTimeout', 'egoiSdk/ServiceUnavailable', 'egoiSdk/TooManyRequests', 'egoiSdk/Unauthorized', 'egoiSdk/UnprocessableEntity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../egoiSdk/Forbidden'), require('../egoiSdk/InternalServerError'), require('../egoiSdk/OperationActionRequest'), require('../egoiSdk/OperationActionResponse'), require('../egoiSdk/OperationsCollection'), require('../egoiSdk/RequestTimeout'), require('../egoiSdk/ServiceUnavailable'), require('../egoiSdk/TooManyRequests'), require('../egoiSdk/Unauthorized'), require('../egoiSdk/UnprocessableEntity'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.OperationsApi = factory(root.egoiSdk.ApiClient, root.egoiSdk.Forbidden, root.egoiSdk.InternalServerError, root.egoiSdk.OperationActionRequest, root.egoiSdk.OperationActionResponse, root.egoiSdk.OperationsCollection, root.egoiSdk.RequestTimeout, root.egoiSdk.ServiceUnavailable, root.egoiSdk.TooManyRequests, root.egoiSdk.Unauthorized, root.egoiSdk.UnprocessableEntity);
  }
}(this, function(ApiClient, Forbidden, InternalServerError, OperationActionRequest, OperationActionResponse, OperationsCollection, RequestTimeout, ServiceUnavailable, TooManyRequests, Unauthorized, UnprocessableEntity) {
  'use strict';

  /**
   * Operations service.
   * @module egoiApi/OperationsApi
   * @version 1.1.1RC1
   */

  /**
   * Constructs a new OperationsApi. 
   * @alias module:egoiApi/OperationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the actionApproveOperation operation.
     * @callback module:egoiApi/OperationsApi~actionApproveOperationCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/OperationActionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve operation
     * Approves an operation
     * @param {module:egoiSdk/OperationActionRequest} operationActionRequest Parameters for the request
     * @param {module:egoiApi/OperationsApi~actionApproveOperationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/OperationActionResponse}
     */
    this.actionApproveOperation = function(operationActionRequest, callback) {
      var postBody = operationActionRequest;

      // verify the required parameter 'operationActionRequest' is set
      if (operationActionRequest === undefined || operationActionRequest === null) {
        throw new Error("Missing the required parameter 'operationActionRequest' when calling actionApproveOperation");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OperationActionResponse;

      return this.apiClient.callApi(
        '/operations/actions/approve', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the actionCancelOperation operation.
     * @callback module:egoiApi/OperationsApi~actionCancelOperationCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/OperationActionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Cancel operation
     * Cancels an operation
     * @param {module:egoiSdk/OperationActionRequest} operationActionRequest Parameters for the request
     * @param {module:egoiApi/OperationsApi~actionCancelOperationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/OperationActionResponse}
     */
    this.actionCancelOperation = function(operationActionRequest, callback) {
      var postBody = operationActionRequest;

      // verify the required parameter 'operationActionRequest' is set
      if (operationActionRequest === undefined || operationActionRequest === null) {
        throw new Error("Missing the required parameter 'operationActionRequest' when calling actionCancelOperation");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OperationActionResponse;

      return this.apiClient.callApi(
        '/operations/actions/cancel', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the actionPauseOperation operation.
     * @callback module:egoiApi/OperationsApi~actionPauseOperationCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/OperationActionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause operation
     * Pauses an operation
     * @param {module:egoiSdk/OperationActionRequest} operationActionRequest Parameters for the request
     * @param {module:egoiApi/OperationsApi~actionPauseOperationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/OperationActionResponse}
     */
    this.actionPauseOperation = function(operationActionRequest, callback) {
      var postBody = operationActionRequest;

      // verify the required parameter 'operationActionRequest' is set
      if (operationActionRequest === undefined || operationActionRequest === null) {
        throw new Error("Missing the required parameter 'operationActionRequest' when calling actionPauseOperation");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OperationActionResponse;

      return this.apiClient.callApi(
        '/operations/actions/pause', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the actionResumeOperation operation.
     * @callback module:egoiApi/OperationsApi~actionResumeOperationCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/OperationActionResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resume operation
     * Resumes an operation
     * @param {module:egoiSdk/OperationActionRequest} operationActionRequest Parameters for the request
     * @param {module:egoiApi/OperationsApi~actionResumeOperationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/OperationActionResponse}
     */
    this.actionResumeOperation = function(operationActionRequest, callback) {
      var postBody = operationActionRequest;

      // verify the required parameter 'operationActionRequest' is set
      if (operationActionRequest === undefined || operationActionRequest === null) {
        throw new Error("Missing the required parameter 'operationActionRequest' when calling actionResumeOperation");
      }


      var pathParams = {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = OperationActionResponse;

      return this.apiClient.callApi(
        '/operations/actions/resume', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllOperations operation.
     * @callback module:egoiApi/OperationsApi~getAllOperationsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoiSdk/OperationsCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all queued operations
     * Returns all operations in queue
     * @param {Object} opts Optional parameters
     * @param {module:egoiSdk/String} opts.type Operation type
     * @param {module:egoiSdk/String} opts.status Operation state
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoiSdk/String} opts.order Type of order (default to &#39;desc&#39;)
     * @param {module:egoiSdk/String} opts.orderBy Reference attribute to order operations
     * @param {module:egoiApi/OperationsApi~getAllOperationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoiSdk/OperationsCollection}
     */
    this.getAllOperations = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'type': opts['type'],
        'status': opts['status'],
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
      var returnType = OperationsCollection;

      return this.apiClient.callApi(
        '/operations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
