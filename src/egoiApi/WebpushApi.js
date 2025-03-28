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
import BadRequest from '../egoisdk/BadRequest';
import CampaignWebPushSendRequest from '../egoisdk/CampaignWebPushSendRequest';
import Conflict from '../egoisdk/Conflict';
import Forbidden from '../egoisdk/Forbidden';
import HashcodeCampaign from '../egoisdk/HashcodeCampaign';
import InternalServerError from '../egoisdk/InternalServerError';
import NotFound from '../egoisdk/NotFound';
import PatchVoiceCampaign200Response from '../egoisdk/PatchVoiceCampaign200Response';
import PostWebpushSiteConflict from '../egoisdk/PostWebpushSiteConflict';
import RequestTimeout from '../egoisdk/RequestTimeout';
import ServiceUnavailable from '../egoisdk/ServiceUnavailable';
import TagCollection1 from '../egoisdk/TagCollection1';
import TooManyRequests from '../egoisdk/TooManyRequests';
import Unauthorized from '../egoisdk/Unauthorized';
import UnprocessableEntity from '../egoisdk/UnprocessableEntity';
import WebPushCampaign from '../egoisdk/WebPushCampaign';
import WebPushPatchCampaign from '../egoisdk/WebPushPatchCampaign';
import WebPushRssCampaign from '../egoisdk/WebPushRssCampaign';
import WebPushSite from '../egoisdk/WebPushSite';

/**
* Webpush service.
* @module egoiApi/WebpushApi
* @version 1.1.6RC1
*/
export default class WebpushApi {

    /**
    * Constructs a new WebpushApi. 
    * @alias module:egoiApi/WebpushApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the actionEnableWebPushRss operation.
     * @callback module:egoiApi/WebpushApi~actionEnableWebPushRssCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable a rss webpush campaign
     * Enable rss webpush message
     * @param {String} campaignHash Hash of the Campaign
     * @param {module:egoiApi/WebpushApi~actionEnableWebPushRssCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionEnableWebPushRss(campaignHash, callback) {
      let postBody = null;
      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling actionEnableWebPushRss");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/campaigns/webpush/rss/{campaign_hash}/actions/enable', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionSendWebPush operation.
     * @callback module:egoiApi/WebpushApi~actionSendWebPushCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send webpush message
     * Deploys and sends a webpush message
     * @param {String} campaignHash Hash of the Campaign
     * @param {module:egoisdk/CampaignWebPushSendRequest} campaignWebPushSendRequest Parameters for the 'send web-push' action
     * @param {module:egoiApi/WebpushApi~actionSendWebPushCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionSendWebPush(campaignHash, campaignWebPushSendRequest, callback) {
      let postBody = campaignWebPushSendRequest;
      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling actionSendWebPush");
      }
      // verify the required parameter 'campaignWebPushSendRequest' is set
      if (campaignWebPushSendRequest === undefined || campaignWebPushSendRequest === null) {
        throw new Error("Missing the required parameter 'campaignWebPushSendRequest' when calling actionSendWebPush");
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
        '/campaigns/web-push/{campaign_hash}/actions/send', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createWebPushCampaign operation.
     * @callback module:egoiApi/WebpushApi~createWebPushCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/PatchVoiceCampaign200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new webpush campaign
     * Create a new webpush campaign
     * @param {module:egoisdk/WebPushCampaign} webPushCampaign Parameters for the webpush campaign
     * @param {module:egoiApi/WebpushApi~createWebPushCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/PatchVoiceCampaign200Response}
     */
    createWebPushCampaign(webPushCampaign, callback) {
      let postBody = webPushCampaign;
      // verify the required parameter 'webPushCampaign' is set
      if (webPushCampaign === undefined || webPushCampaign === null) {
        throw new Error("Missing the required parameter 'webPushCampaign' when calling createWebPushCampaign");
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
      let returnType = PatchVoiceCampaign200Response;
      return this.apiClient.callApi(
        '/campaigns/web-push', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createWebPushRssCampaign operation.
     * @callback module:egoiApi/WebpushApi~createWebPushRssCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/HashcodeCampaign} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new webpush rss campaign
     * Create a new webpush rss campaign
     * @param {module:egoisdk/WebPushRssCampaign} webPushRssCampaign Parameters for the WebPush Campaign
     * @param {module:egoiApi/WebpushApi~createWebPushRssCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/HashcodeCampaign}
     */
    createWebPushRssCampaign(webPushRssCampaign, callback) {
      let postBody = webPushRssCampaign;
      // verify the required parameter 'webPushRssCampaign' is set
      if (webPushRssCampaign === undefined || webPushRssCampaign === null) {
        throw new Error("Missing the required parameter 'webPushRssCampaign' when calling createWebPushRssCampaign");
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
        '/campaigns/webpush/rss', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createWebpushSite operation.
     * @callback module:egoiApi/WebpushApi~createWebpushSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/WebPushSite} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a webpush site
     * Create a new webpush site
     * @param {module:egoisdk/WebPushSite} webPushSite Parameters for the webpush site
     * @param {module:egoiApi/WebpushApi~createWebpushSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/WebPushSite}
     */
    createWebpushSite(webPushSite, callback) {
      let postBody = webPushSite;
      // verify the required parameter 'webPushSite' is set
      if (webPushSite === undefined || webPushSite === null) {
        throw new Error("Missing the required parameter 'webPushSite' when calling createWebpushSite");
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
      let returnType = WebPushSite;
      return this.apiClient.callApi(
        '/webpush/sites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllWebPushSites operation.
     * @callback module:egoiApi/WebpushApi~getAllWebPushSitesCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/TagCollection1} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all webpush sites
     * Returns all wepush's sites
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoisdk/String} opts.order Type of order (default to 'desc')
     * @param {module:egoisdk/String} opts.orderBy Reference attribute to order sites (default to 'list_id')
     * @param {Number} opts.listId Select sites referenced to a list
     * @param {module:egoiApi/WebpushApi~getAllWebPushSitesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/TagCollection1}
     */
    getAllWebPushSites(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'order': opts['order'],
        'order_by': opts['orderBy'],
        'list_id': opts['listId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TagCollection1;
      return this.apiClient.callApi(
        '/webpush/sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchWebPushCampaign operation.
     * @callback module:egoiApi/WebpushApi~patchWebPushCampaignCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/PatchVoiceCampaign200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific webpush campaign
     * Update a webpush campaign
     * @param {String} campaignHash Hash of the Campaign
     * @param {module:egoisdk/WebPushPatchCampaign} webPushPatchCampaign Parameters for the Webpush Campaign
     * @param {module:egoiApi/WebpushApi~patchWebPushCampaignCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/PatchVoiceCampaign200Response}
     */
    patchWebPushCampaign(campaignHash, webPushPatchCampaign, callback) {
      let postBody = webPushPatchCampaign;
      // verify the required parameter 'campaignHash' is set
      if (campaignHash === undefined || campaignHash === null) {
        throw new Error("Missing the required parameter 'campaignHash' when calling patchWebPushCampaign");
      }
      // verify the required parameter 'webPushPatchCampaign' is set
      if (webPushPatchCampaign === undefined || webPushPatchCampaign === null) {
        throw new Error("Missing the required parameter 'webPushPatchCampaign' when calling patchWebPushCampaign");
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
      let returnType = PatchVoiceCampaign200Response;
      return this.apiClient.callApi(
        '/campaigns/web-push/{campaign_hash}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
