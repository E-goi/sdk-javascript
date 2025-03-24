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
import AcceptedResponse from '../egoisdk/AcceptedResponse';
import AppStructure from '../egoisdk/AppStructure';
import BadRequest from '../egoisdk/BadRequest';
import CampaignPushSendRequest from '../egoisdk/CampaignPushSendRequest';
import Conflict from '../egoisdk/Conflict';
import Forbidden from '../egoisdk/Forbidden';
import HashcodeCampaign from '../egoisdk/HashcodeCampaign';
import InternalServerError from '../egoisdk/InternalServerError';
import NotFound from '../egoisdk/NotFound';
import PushCampaignPatchRequest from '../egoisdk/PushCampaignPatchRequest';
import PushCampaignPostRequest from '../egoisdk/PushCampaignPostRequest';
import PushEvent from '../egoisdk/PushEvent';
import PushResponse from '../egoisdk/PushResponse';
import PushToken from '../egoisdk/PushToken';
import RequestTimeout from '../egoisdk/RequestTimeout';
import ServiceUnavailable from '../egoisdk/ServiceUnavailable';
import TooManyRequests from '../egoisdk/TooManyRequests';
import Unauthorized from '../egoisdk/Unauthorized';
import UnprocessableEntity from '../egoisdk/UnprocessableEntity';

/**
* Push service.
* @module egoiApi/PushApi
* @version 1.1.6RC1
*/
export default class PushApi {

    /**
    * Constructs a new PushApi. 
    * @alias module:egoiApi/PushApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the actionSendPush operation.
     * @callback module:egoiApi/PushApi~actionSendPushCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send push message
     * Deploys and sends a push message
     * @param {String} campaignHash Hash of the Campaign
     * @param {module:egoisdk/CampaignPushSendRequest} campaignPushSendRequest Parameters for the 'send push' action
     * @param {module:egoiApi/PushApi~actionSendPushCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionSendPush(campaignHash, campaignPushSendRequest, callback) {
      let postBody = campaignPushSendRequest;
      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling actionSendPush");
      }
      // verify the required parameter 'campaignPushSendRequest' is set
      if (campaignPushSendRequest === undefined || campaignPushSendRequest === null) {
        throw new Error("Missing the required parameter 'campaignPushSendRequest' when calling actionSendPush");
      }

      let pathParams = {
        'campaign_hash': campaignHash
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/campaigns/push/{campaign_hash}/actions/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createPushCampaign operation.
     * @callback module:egoiApi/PushApi~createPushCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/HashcodeCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new push campaign
     * Create a new push campaign
     * @param {module:egoisdk/PushCampaignPostRequest} pushCampaignPostRequest Parameters for the push campaign
     * @param {module:egoiApi/PushApi~createPushCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/HashcodeCampaign}
     */
    createPushCampaign(pushCampaignPostRequest, callback) {
      let postBody = pushCampaignPostRequest;
      // verify the required parameter 'pushCampaignPostRequest' is set
      if (pushCampaignPostRequest === undefined || pushCampaignPostRequest === null) {
        throw new Error("Missing the required parameter 'pushCampaignPostRequest' when calling createPushCampaign");
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
      let returnType = HashcodeCampaign;
      return this.apiClient.callApi(
        '/campaigns/push', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPushApp operation.
     * @callback module:egoiApi/PushApi~getPushAppCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AppStructure} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a Push application from E-goi
     * Get a Push application from E-goi
     * @param {String} appId ID of the E-goi push app.
     * @param {module:egoiApi/PushApi~getPushAppCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AppStructure}
     */
    getPushApp(appId, callback) {
      let postBody = null;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling getPushApp");
      }

      let pathParams = {
        'app_id': appId
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
      let returnType = AppStructure;
      return this.apiClient.callApi(
        '/push/apps/{app_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getPushApps operation.
     * @callback module:egoiApi/PushApi~getPushAppsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:egoisdk/AppStructure>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all Push applications from E-goi
     * Get all Push applications from E-goi
     * @param {Object} opts Optional parameters
     * @param {Number} opts.listId ID of the list to search for.
     * @param {module:egoiApi/PushApi~getPushAppsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:egoisdk/AppStructure>}
     */
    getPushApps(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'list_id': opts['listId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [AppStructure];
      return this.apiClient.callApi(
        '/push/apps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchPushCampaign operation.
     * @callback module:egoiApi/PushApi~patchPushCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/HashcodeCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific push campaign
     * Update push campaign
     * @param {String} campaignHash Hash of the Campaign
     * @param {module:egoisdk/PushCampaignPatchRequest} pushCampaignPatchRequest Parameters for the push campaign
     * @param {module:egoiApi/PushApi~patchPushCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/HashcodeCampaign}
     */
    patchPushCampaign(campaignHash, pushCampaignPatchRequest, callback) {
      let postBody = pushCampaignPatchRequest;
      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling patchPushCampaign");
      }
      // verify the required parameter 'pushCampaignPatchRequest' is set
      if (pushCampaignPatchRequest === undefined || pushCampaignPatchRequest === null) {
        throw new Error("Missing the required parameter 'pushCampaignPatchRequest' when calling patchPushCampaign");
      }

      let pathParams = {
        'campaign_hash': campaignHash
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
      let returnType = HashcodeCampaign;
      return this.apiClient.callApi(
        '/campaigns/push/{campaign_hash}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerPushEvent operation.
     * @callback module:egoiApi/PushApi~registerPushEventCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/PushResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registers an event from the push notification.
     * Registers a Firebase token
     * @param {String} appId ID of the E-goi push app.
     * @param {module:egoisdk/PushEvent} pushEvent Parameters for the event
     * @param {module:egoiApi/PushApi~registerPushEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/PushResponse}
     */
    registerPushEvent(appId, pushEvent, callback) {
      let postBody = pushEvent;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling registerPushEvent");
      }
      // verify the required parameter 'pushEvent' is set
      if (pushEvent === undefined || pushEvent === null) {
        throw new Error("Missing the required parameter 'pushEvent' when calling registerPushEvent");
      }

      let pathParams = {
        'app_id': appId
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
      let returnType = PushResponse;
      return this.apiClient.callApi(
        '/push/apps/{app_id}/event', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the registerPushToken operation.
     * @callback module:egoiApi/PushApi~registerPushTokenCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/PushResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Registers a Firebase token
     * Registers a Firebase token
     * @param {String} appId ID of the E-goi push app.
     * @param {module:egoisdk/PushToken} pushToken Parameters for the token
     * @param {module:egoiApi/PushApi~registerPushTokenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/PushResponse}
     */
    registerPushToken(appId, pushToken, callback) {
      let postBody = pushToken;
      // verify the required parameter 'appId' is set
      if (appId === undefined || appId === null) {
        throw new Error("Missing the required parameter 'appId' when calling registerPushToken");
      }
      // verify the required parameter 'pushToken' is set
      if (pushToken === undefined || pushToken === null) {
        throw new Error("Missing the required parameter 'pushToken' when calling registerPushToken");
      }

      let pathParams = {
        'app_id': appId
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
      let returnType = PushResponse;
      return this.apiClient.callApi(
        '/push/apps/{app_id}/token', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
