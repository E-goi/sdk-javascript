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
import CellphoneSender from '../egoisdk/CellphoneSender';
import CellphoneSenderCollection from '../egoisdk/CellphoneSenderCollection';
import CellphoneSenderPost from '../egoisdk/CellphoneSenderPost';
import Conflict from '../egoisdk/Conflict';
import EmailSender from '../egoisdk/EmailSender';
import EmailSenderCollection from '../egoisdk/EmailSenderCollection';
import EmailSenderPost from '../egoisdk/EmailSenderPost';
import EmailSenderPutRequest from '../egoisdk/EmailSenderPutRequest';
import Forbidden from '../egoisdk/Forbidden';
import InternalServerError from '../egoisdk/InternalServerError';
import NotFound from '../egoisdk/NotFound';
import PhoneSender from '../egoisdk/PhoneSender';
import PhoneSenderCollection from '../egoisdk/PhoneSenderCollection';
import PhoneSenderPost from '../egoisdk/PhoneSenderPost';
import RequestTimeout from '../egoisdk/RequestTimeout';
import ServiceUnavailable from '../egoisdk/ServiceUnavailable';
import TooManyRequests from '../egoisdk/TooManyRequests';
import Unauthorized from '../egoisdk/Unauthorized';
import UnprocessableEntity from '../egoisdk/UnprocessableEntity';

/**
* Senders service.
* @module egoiApi/SendersApi
* @version 1.1.6RC1
*/
export default class SendersApi {

    /**
    * Constructs a new SendersApi. 
    * @alias module:egoiApi/SendersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createCellphoneSender operation.
     * @callback module:egoiApi/SendersApi~createCellphoneSenderCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/CellphoneSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create cellphone sender
     * Creates a cellphone sender
     * @param {module:egoisdk/CellphoneSenderPost} cellphoneSenderPost Parameters for the sender
     * @param {module:egoiApi/SendersApi~createCellphoneSenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/CellphoneSender}
     */
    createCellphoneSender(cellphoneSenderPost, callback) {
      let postBody = cellphoneSenderPost;
      // verify the required parameter 'cellphoneSenderPost' is set
      if (cellphoneSenderPost === undefined || cellphoneSenderPost === null) {
        throw new Error("Missing the required parameter 'cellphoneSenderPost' when calling createCellphoneSender");
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
      let returnType = CellphoneSender;
      return this.apiClient.callApi(
        '/senders/cellphone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createEmailSender operation.
     * @callback module:egoiApi/SendersApi~createEmailSenderCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/EmailSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create email sender
     * Creates an email sender
     * @param {module:egoisdk/EmailSenderPost} emailSenderPost Parameters for the sender
     * @param {module:egoiApi/SendersApi~createEmailSenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/EmailSender}
     */
    createEmailSender(emailSenderPost, callback) {
      let postBody = emailSenderPost;
      // verify the required parameter 'emailSenderPost' is set
      if (emailSenderPost === undefined || emailSenderPost === null) {
        throw new Error("Missing the required parameter 'emailSenderPost' when calling createEmailSender");
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
      let returnType = EmailSender;
      return this.apiClient.callApi(
        '/senders/email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPhoneSender operation.
     * @callback module:egoiApi/SendersApi~createPhoneSenderCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/PhoneSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create phone sender
     * Creates a phone sender
     * @param {module:egoisdk/PhoneSenderPost} phoneSenderPost Parameters for the sender
     * @param {module:egoiApi/SendersApi~createPhoneSenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/PhoneSender}
     */
    createPhoneSender(phoneSenderPost, callback) {
      let postBody = phoneSenderPost;
      // verify the required parameter 'phoneSenderPost' is set
      if (phoneSenderPost === undefined || phoneSenderPost === null) {
        throw new Error("Missing the required parameter 'phoneSenderPost' when calling createPhoneSender");
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
      let returnType = PhoneSender;
      return this.apiClient.callApi(
        '/senders/phone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCellphoneSender operation.
     * @callback module:egoiApi/SendersApi~deleteCellphoneSenderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove cellphone sender
     * Remove sender information given its ID
     * @param {Number} senderId ID of the Sender
     * @param {module:egoiApi/SendersApi~deleteCellphoneSenderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteCellphoneSender(senderId, callback) {
      let postBody = null;
      // verify the required parameter 'senderId' is set
      if (senderId === undefined || senderId === null) {
        throw new Error("Missing the required parameter 'senderId' when calling deleteCellphoneSender");
      }

      let pathParams = {
        'sender_id': senderId
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
        '/senders/cellphone/{sender_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteEmailSender operation.
     * @callback module:egoiApi/SendersApi~deleteEmailSenderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove email sender
     * Remove sender information given its ID
     * @param {Number} senderId ID of the Sender
     * @param {module:egoiApi/SendersApi~deleteEmailSenderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteEmailSender(senderId, callback) {
      let postBody = null;
      // verify the required parameter 'senderId' is set
      if (senderId === undefined || senderId === null) {
        throw new Error("Missing the required parameter 'senderId' when calling deleteEmailSender");
      }

      let pathParams = {
        'sender_id': senderId
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
        '/senders/email/{sender_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePhoneSender operation.
     * @callback module:egoiApi/SendersApi~deletePhoneSenderCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove phone sender
     * Remove sender information given its ID
     * @param {Number} senderId ID of the Sender
     * @param {module:egoiApi/SendersApi~deletePhoneSenderCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePhoneSender(senderId, callback) {
      let postBody = null;
      // verify the required parameter 'senderId' is set
      if (senderId === undefined || senderId === null) {
        throw new Error("Missing the required parameter 'senderId' when calling deletePhoneSender");
      }

      let pathParams = {
        'sender_id': senderId
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
        '/senders/phone/{sender_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCellphoneSenders operation.
     * @callback module:egoiApi/SendersApi~getAllCellphoneSendersCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/CellphoneSenderCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all cellphone senders
     * Returns all cellphone senders
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoisdk/String} opts.status Status filter
     * @param {module:egoiApi/SendersApi~getAllCellphoneSendersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/CellphoneSenderCollection}
     */
    getAllCellphoneSenders(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CellphoneSenderCollection;
      return this.apiClient.callApi(
        '/senders/cellphone', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllEmailSenders operation.
     * @callback module:egoiApi/SendersApi~getAllEmailSendersCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/EmailSenderCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all email senders
     * Returns all email senders
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoisdk/String} opts.status Status filter
     * @param {module:egoiApi/SendersApi~getAllEmailSendersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/EmailSenderCollection}
     */
    getAllEmailSenders(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = EmailSenderCollection;
      return this.apiClient.callApi(
        '/senders/email', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllPhoneSenders operation.
     * @callback module:egoiApi/SendersApi~getAllPhoneSendersCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/PhoneSenderCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all phone senders
     * Returns all phone senders
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoisdk/String} opts.status Status filter
     * @param {module:egoiApi/SendersApi~getAllPhoneSendersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/PhoneSenderCollection}
     */
    getAllPhoneSenders(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = PhoneSenderCollection;
      return this.apiClient.callApi(
        '/senders/phone', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the putEmailSender operation.
     * @callback module:egoiApi/SendersApi~putEmailSenderCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/EmailSender} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update email sender
     * Updates an email sender
     * @param {Number} senderId ID of the Sender
     * @param {module:egoisdk/EmailSenderPutRequest} emailSenderPutRequest Parameters for the contact
     * @param {module:egoiApi/SendersApi~putEmailSenderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/EmailSender}
     */
    putEmailSender(senderId, emailSenderPutRequest, callback) {
      let postBody = emailSenderPutRequest;
      // verify the required parameter 'senderId' is set
      if (senderId === undefined || senderId === null) {
        throw new Error("Missing the required parameter 'senderId' when calling putEmailSender");
      }
      // verify the required parameter 'emailSenderPutRequest' is set
      if (emailSenderPutRequest === undefined || emailSenderPutRequest === null) {
        throw new Error("Missing the required parameter 'emailSenderPutRequest' when calling putEmailSender");
      }

      let pathParams = {
        'sender_id': senderId
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
      let returnType = EmailSender;
      return this.apiClient.callApi(
        '/senders/email/{sender_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
