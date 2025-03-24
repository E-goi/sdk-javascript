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
import BadRequest from '../egoisdk/BadRequest';
import ComplexField from '../egoisdk/ComplexField';
import DeleteFieldsConflict from '../egoisdk/DeleteFieldsConflict';
import Field from '../egoisdk/Field';
import FieldOption from '../egoisdk/FieldOption';
import FieldOptionPost from '../egoisdk/FieldOptionPost';
import FieldOptionsCollection from '../egoisdk/FieldOptionsCollection';
import Forbidden from '../egoisdk/Forbidden';
import InternalServerError from '../egoisdk/InternalServerError';
import NotFound from '../egoisdk/NotFound';
import PatchRequestBaseField from '../egoisdk/PatchRequestBaseField';
import PatchRequestField from '../egoisdk/PatchRequestField';
import RequestTimeout from '../egoisdk/RequestTimeout';
import ServiceUnavailable from '../egoisdk/ServiceUnavailable';
import TooManyRequests from '../egoisdk/TooManyRequests';
import Unauthorized from '../egoisdk/Unauthorized';
import UnprocessableEntity from '../egoisdk/UnprocessableEntity';

/**
* Fields service.
* @module egoiApi/FieldsApi
* @version 1.1.6RC1
*/
export default class FieldsApi {

    /**
    * Constructs a new FieldsApi. 
    * @alias module:egoiApi/FieldsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createExtraField operation.
     * @callback module:egoiApi/FieldsApi~createExtraFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/Field} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create extra field
     * Creates an extra field
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/Field} field Parameters for the extra field
     * @param {module:egoiApi/FieldsApi~createExtraFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/Field}
     */
    createExtraField(listId, field, callback) {
      let postBody = field;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling createExtraField");
      }
      // verify the required parameter 'field' is set
      if (field === undefined || field === null) {
        throw new Error("Missing the required parameter 'field' when calling createExtraField");
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
      let returnType = Field;
      return this.apiClient.callApi(
        '/lists/{list_id}/fields/extra', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createFieldOption operation.
     * @callback module:egoiApi/FieldsApi~createFieldOptionCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/FieldOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new field option
     * Creates a field option
     * @param {Number} listId ID of the List
     * @param {Number} fieldId ID of the Field
     * @param {module:egoisdk/FieldOptionPost} fieldOptionPost Parameters for the field option
     * @param {module:egoiApi/FieldsApi~createFieldOptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/FieldOption}
     */
    createFieldOption(listId, fieldId, fieldOptionPost, callback) {
      let postBody = fieldOptionPost;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling createFieldOption");
      }
      // verify the required parameter 'fieldId' is set
      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling createFieldOption");
      }
      // verify the required parameter 'fieldOptionPost' is set
      if (fieldOptionPost === undefined || fieldOptionPost === null) {
        throw new Error("Missing the required parameter 'fieldOptionPost' when calling createFieldOption");
      }

      let pathParams = {
        'list_id': listId,
        'field_id': fieldId
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
      let returnType = FieldOption;
      return this.apiClient.callApi(
        '/lists/{list_id}/fields/extra/{field_id}/options', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteExtraField operation.
     * @callback module:egoiApi/FieldsApi~deleteExtraFieldCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove extra field
     * Removes an extra field given its ID
     * @param {Number} listId ID of the List
     * @param {Number} fieldId ID of the Field
     * @param {module:egoiApi/FieldsApi~deleteExtraFieldCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteExtraField(listId, fieldId, callback) {
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling deleteExtraField");
      }
      // verify the required parameter 'fieldId' is set
      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling deleteExtraField");
      }

      let pathParams = {
        'list_id': listId,
        'field_id': fieldId
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
        '/lists/{list_id}/fields/extra/{field_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteFieldOption operation.
     * @callback module:egoiApi/FieldsApi~deleteFieldOptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes an option
     * Deletes an option of a list of values field
     * @param {Number} listId ID of the List
     * @param {Number} fieldId ID of the Field
     * @param {Number} optionId ID of the field option
     * @param {module:egoiApi/FieldsApi~deleteFieldOptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteFieldOption(listId, fieldId, optionId, callback) {
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling deleteFieldOption");
      }
      // verify the required parameter 'fieldId' is set
      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling deleteFieldOption");
      }
      // verify the required parameter 'optionId' is set
      if (optionId === undefined || optionId === null) {
        throw new Error("Missing the required parameter 'optionId' when calling deleteFieldOption");
      }

      let pathParams = {
        'list_id': listId,
        'field_id': fieldId,
        'option_id': optionId
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
        '/lists/{list_id}/fields/extra/{field_id}/options/{option_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllFieldOptions operation.
     * @callback module:egoiApi/FieldsApi~getAllFieldOptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/FieldOptionsCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all field options
     * Returns all options of a given field
     * @param {Number} listId ID of the List
     * @param {Number} fieldId ID of the Field
     * @param {module:egoiApi/FieldsApi~getAllFieldOptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/FieldOptionsCollection}
     */
    getAllFieldOptions(listId, fieldId, callback) {
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getAllFieldOptions");
      }
      // verify the required parameter 'fieldId' is set
      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling getAllFieldOptions");
      }

      let pathParams = {
        'list_id': listId,
        'field_id': fieldId
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
      let returnType = FieldOptionsCollection;
      return this.apiClient.callApi(
        '/lists/{list_id}/fields/extra/{field_id}/options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllFields operation.
     * @callback module:egoiApi/FieldsApi~getAllFieldsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:egoisdk/ComplexField>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all fields
     * Returns all fields
     * @param {Number} listId ID of the List
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoiApi/FieldsApi~getAllFieldsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:egoisdk/ComplexField>}
     */
    getAllFields(listId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getAllFields");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
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
      let returnType = [ComplexField];
      return this.apiClient.callApi(
        '/lists/{list_id}/fields', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchBaseField operation.
     * @callback module:egoiApi/FieldsApi~patchBaseFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/Field} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update base field
     * Updates a base field
     * @param {Number} listId ID of the List
     * @param {String} fieldId ID of the base field
     * @param {module:egoisdk/PatchRequestBaseField} patchRequestBaseField Parameters for the extra field
     * @param {module:egoiApi/FieldsApi~patchBaseFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/Field}
     */
    patchBaseField(listId, fieldId, patchRequestBaseField, callback) {
      let postBody = patchRequestBaseField;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling patchBaseField");
      }
      // verify the required parameter 'fieldId' is set
      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling patchBaseField");
      }
      // verify the required parameter 'patchRequestBaseField' is set
      if (patchRequestBaseField === undefined || patchRequestBaseField === null) {
        throw new Error("Missing the required parameter 'patchRequestBaseField' when calling patchBaseField");
      }

      let pathParams = {
        'list_id': listId,
        'field_id': fieldId
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
      let returnType = Field;
      return this.apiClient.callApi(
        '/lists/{list_id}/fields/base/{field_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchExtraField operation.
     * @callback module:egoiApi/FieldsApi~patchExtraFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/Field} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update extra field
     * Updates an extra field
     * @param {Number} listId ID of the List
     * @param {Number} fieldId ID of the Field
     * @param {module:egoisdk/PatchRequestField} patchRequestField Parameters for the extra field
     * @param {module:egoiApi/FieldsApi~patchExtraFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/Field}
     */
    patchExtraField(listId, fieldId, patchRequestField, callback) {
      let postBody = patchRequestField;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling patchExtraField");
      }
      // verify the required parameter 'fieldId' is set
      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling patchExtraField");
      }
      // verify the required parameter 'patchRequestField' is set
      if (patchRequestField === undefined || patchRequestField === null) {
        throw new Error("Missing the required parameter 'patchRequestField' when calling patchExtraField");
      }

      let pathParams = {
        'list_id': listId,
        'field_id': fieldId
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
      let returnType = Field;
      return this.apiClient.callApi(
        '/lists/{list_id}/fields/extra/{field_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFieldOption operation.
     * @callback module:egoiApi/FieldsApi~updateFieldOptionCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/FieldOption} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update field option
     * Updates a field option
     * @param {Number} listId ID of the List
     * @param {Number} fieldId ID of the Field
     * @param {Number} optionId ID of the field option
     * @param {module:egoisdk/FieldOptionPost} fieldOptionPost Parameters for the field option
     * @param {module:egoiApi/FieldsApi~updateFieldOptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/FieldOption}
     */
    updateFieldOption(listId, fieldId, optionId, fieldOptionPost, callback) {
      let postBody = fieldOptionPost;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling updateFieldOption");
      }
      // verify the required parameter 'fieldId' is set
      if (fieldId === undefined || fieldId === null) {
        throw new Error("Missing the required parameter 'fieldId' when calling updateFieldOption");
      }
      // verify the required parameter 'optionId' is set
      if (optionId === undefined || optionId === null) {
        throw new Error("Missing the required parameter 'optionId' when calling updateFieldOption");
      }
      // verify the required parameter 'fieldOptionPost' is set
      if (fieldOptionPost === undefined || fieldOptionPost === null) {
        throw new Error("Missing the required parameter 'fieldOptionPost' when calling updateFieldOption");
      }

      let pathParams = {
        'list_id': listId,
        'field_id': fieldId,
        'option_id': optionId
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
      let returnType = FieldOption;
      return this.apiClient.callApi(
        '/lists/{list_id}/fields/extra/{field_id}/options/{option_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
