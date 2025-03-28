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
import AdvancedReportsCollection from '../egoisdk/AdvancedReportsCollection';
import AdvancedReportsModelsCollection from '../egoisdk/AdvancedReportsModelsCollection';
import BadRequest from '../egoisdk/BadRequest';
import Forbidden from '../egoisdk/Forbidden';
import GenerateByModelReport from '../egoisdk/GenerateByModelReport';
import GenerateContactActivityReport from '../egoisdk/GenerateContactActivityReport';
import GenerateEmailBouncesReport from '../egoisdk/GenerateEmailBouncesReport';
import GenerateEmailClicksByContactReport from '../egoisdk/GenerateEmailClicksByContactReport';
import GenerateEmailClicksByUrlReport from '../egoisdk/GenerateEmailClicksByUrlReport';
import GenerateEmailEventsReport from '../egoisdk/GenerateEmailEventsReport';
import GenerateEmailUnsubscriptionsReport from '../egoisdk/GenerateEmailUnsubscriptionsReport';
import GenerateFormAnswersReport from '../egoisdk/GenerateFormAnswersReport';
import GenerateSendsReport from '../egoisdk/GenerateSendsReport';
import GenerateSmsBouncesReport from '../egoisdk/GenerateSmsBouncesReport';
import GenerateSmsEventsReport from '../egoisdk/GenerateSmsEventsReport';
import GenerateSubscriptionsReport from '../egoisdk/GenerateSubscriptionsReport';
import GenerateUnsubscriptionsReport from '../egoisdk/GenerateUnsubscriptionsReport';
import InternalServerError from '../egoisdk/InternalServerError';
import RequestTimeout from '../egoisdk/RequestTimeout';
import ServiceUnavailable from '../egoisdk/ServiceUnavailable';
import TooManyRequests from '../egoisdk/TooManyRequests';
import Unauthorized from '../egoisdk/Unauthorized';
import UnprocessableEntity from '../egoisdk/UnprocessableEntity';

/**
* AdvancedReports service.
* @module egoiApi/AdvancedReportsApi
* @version 1.1.6RC1
*/
export default class AdvancedReportsApi {

    /**
    * Constructs a new AdvancedReportsApi. 
    * @alias module:egoiApi/AdvancedReportsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the generateByModelReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateByModelReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate report by model
     * Generates a new report by model Id
     * @param {module:egoisdk/GenerateByModelReport} generateByModelReport Parameters for the report by model Id
     * @param {module:egoiApi/AdvancedReportsApi~generateByModelReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateByModelReport(generateByModelReport, callback) {
      let postBody = generateByModelReport;
      // verify the required parameter 'generateByModelReport' is set
      if (generateByModelReport === undefined || generateByModelReport === null) {
        throw new Error("Missing the required parameter 'generateByModelReport' when calling generateByModelReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/model', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateContactActivityReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateContactActivityReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate contact activity report
     * Generates a new contact activity report
     * @param {module:egoisdk/GenerateContactActivityReport} generateContactActivityReport Parameters for the contact activity report
     * @param {module:egoiApi/AdvancedReportsApi~generateContactActivityReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateContactActivityReport(generateContactActivityReport, callback) {
      let postBody = generateContactActivityReport;
      // verify the required parameter 'generateContactActivityReport' is set
      if (generateContactActivityReport === undefined || generateContactActivityReport === null) {
        throw new Error("Missing the required parameter 'generateContactActivityReport' when calling generateContactActivityReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/contact-activity', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailBouncesReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailBouncesReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email bounces report
     * Generates a new email bounces report
     * @param {module:egoisdk/GenerateEmailBouncesReport} generateEmailBouncesReport Parameters for the email bounces report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailBouncesReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateEmailBouncesReport(generateEmailBouncesReport, callback) {
      let postBody = generateEmailBouncesReport;
      // verify the required parameter 'generateEmailBouncesReport' is set
      if (generateEmailBouncesReport === undefined || generateEmailBouncesReport === null) {
        throw new Error("Missing the required parameter 'generateEmailBouncesReport' when calling generateEmailBouncesReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-bounces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailClicksByContactReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailClicksByContactReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email clicks by contact report
     * Generates a new email clicks by contact report
     * @param {module:egoisdk/GenerateEmailClicksByContactReport} generateEmailClicksByContactReport Parameters for the email clicks by contact report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailClicksByContactReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateEmailClicksByContactReport(generateEmailClicksByContactReport, callback) {
      let postBody = generateEmailClicksByContactReport;
      // verify the required parameter 'generateEmailClicksByContactReport' is set
      if (generateEmailClicksByContactReport === undefined || generateEmailClicksByContactReport === null) {
        throw new Error("Missing the required parameter 'generateEmailClicksByContactReport' when calling generateEmailClicksByContactReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-clicks-by-contact', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailClicksByUrlReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailClicksByUrlReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email clicks by URL report
     * Generates a new email clicks by URL report
     * @param {module:egoisdk/GenerateEmailClicksByUrlReport} generateEmailClicksByUrlReport Parameters for the email clicks by URL report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailClicksByUrlReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateEmailClicksByUrlReport(generateEmailClicksByUrlReport, callback) {
      let postBody = generateEmailClicksByUrlReport;
      // verify the required parameter 'generateEmailClicksByUrlReport' is set
      if (generateEmailClicksByUrlReport === undefined || generateEmailClicksByUrlReport === null) {
        throw new Error("Missing the required parameter 'generateEmailClicksByUrlReport' when calling generateEmailClicksByUrlReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-clicks-by-url', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailEventsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailEventsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email events report
     * Generates a new email events report
     * @param {module:egoisdk/GenerateEmailEventsReport} generateEmailEventsReport Parameters for the email events report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailEventsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateEmailEventsReport(generateEmailEventsReport, callback) {
      let postBody = generateEmailEventsReport;
      // verify the required parameter 'generateEmailEventsReport' is set
      if (generateEmailEventsReport === undefined || generateEmailEventsReport === null) {
        throw new Error("Missing the required parameter 'generateEmailEventsReport' when calling generateEmailEventsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateEmailUnsubscriptionsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateEmailUnsubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate email unsubscriptions report
     * Generates a new email unsubscriptions report
     * @param {module:egoisdk/GenerateEmailUnsubscriptionsReport} generateEmailUnsubscriptionsReport Parameters for the email unsubscriptions report
     * @param {module:egoiApi/AdvancedReportsApi~generateEmailUnsubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateEmailUnsubscriptionsReport(generateEmailUnsubscriptionsReport, callback) {
      let postBody = generateEmailUnsubscriptionsReport;
      // verify the required parameter 'generateEmailUnsubscriptionsReport' is set
      if (generateEmailUnsubscriptionsReport === undefined || generateEmailUnsubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateEmailUnsubscriptionsReport' when calling generateEmailUnsubscriptionsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/email-unsubscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateFormAnswersReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateFormAnswersReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate form answers report
     * Generates a new form answers report
     * @param {module:egoisdk/GenerateFormAnswersReport} generateFormAnswersReport Parameters for the form answers report
     * @param {module:egoiApi/AdvancedReportsApi~generateFormAnswersReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateFormAnswersReport(generateFormAnswersReport, callback) {
      let postBody = generateFormAnswersReport;
      // verify the required parameter 'generateFormAnswersReport' is set
      if (generateFormAnswersReport === undefined || generateFormAnswersReport === null) {
        throw new Error("Missing the required parameter 'generateFormAnswersReport' when calling generateFormAnswersReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/form-answers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSendsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateSendsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate sends report
     * Generates a new sends report
     * @param {module:egoisdk/GenerateSendsReport} generateSendsReport Parameters for the sends report
     * @param {module:egoiApi/AdvancedReportsApi~generateSendsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateSendsReport(generateSendsReport, callback) {
      let postBody = generateSendsReport;
      // verify the required parameter 'generateSendsReport' is set
      if (generateSendsReport === undefined || generateSendsReport === null) {
        throw new Error("Missing the required parameter 'generateSendsReport' when calling generateSendsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/sends', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSmsBouncesReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateSmsBouncesReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate SMS bounces report
     * Generates a new SMS bounces report
     * @param {module:egoisdk/GenerateSmsBouncesReport} generateSmsBouncesReport Parameters for the SMS bounces report
     * @param {module:egoiApi/AdvancedReportsApi~generateSmsBouncesReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateSmsBouncesReport(generateSmsBouncesReport, callback) {
      let postBody = generateSmsBouncesReport;
      // verify the required parameter 'generateSmsBouncesReport' is set
      if (generateSmsBouncesReport === undefined || generateSmsBouncesReport === null) {
        throw new Error("Missing the required parameter 'generateSmsBouncesReport' when calling generateSmsBouncesReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/sms-bounces', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSmsEventsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateSmsEventsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate SMS events report
     * Generates a new SMS events report
     * @param {module:egoisdk/GenerateSmsEventsReport} generateSmsEventsReport Parameters for the SMS events report
     * @param {module:egoiApi/AdvancedReportsApi~generateSmsEventsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateSmsEventsReport(generateSmsEventsReport, callback) {
      let postBody = generateSmsEventsReport;
      // verify the required parameter 'generateSmsEventsReport' is set
      if (generateSmsEventsReport === undefined || generateSmsEventsReport === null) {
        throw new Error("Missing the required parameter 'generateSmsEventsReport' when calling generateSmsEventsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/sms-events', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateSubscriptionsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateSubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate subscriptions report
     * Generates a new subscriptions report
     * @param {module:egoisdk/GenerateSubscriptionsReport} generateSubscriptionsReport Parameters for the subscriptions report
     * @param {module:egoiApi/AdvancedReportsApi~generateSubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateSubscriptionsReport(generateSubscriptionsReport, callback) {
      let postBody = generateSubscriptionsReport;
      // verify the required parameter 'generateSubscriptionsReport' is set
      if (generateSubscriptionsReport === undefined || generateSubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateSubscriptionsReport' when calling generateSubscriptionsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the generateUnsubscriptionsReport operation.
     * @callback module:egoiApi/AdvancedReportsApi~generateUnsubscriptionsReportCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Generate unsubscriptions report
     * Generates a new unsubscriptions report
     * @param {module:egoisdk/GenerateUnsubscriptionsReport} generateUnsubscriptionsReport Parameters for the unsubscriptions report
     * @param {module:egoiApi/AdvancedReportsApi~generateUnsubscriptionsReportCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    generateUnsubscriptionsReport(generateUnsubscriptionsReport, callback) {
      let postBody = generateUnsubscriptionsReport;
      // verify the required parameter 'generateUnsubscriptionsReport' is set
      if (generateUnsubscriptionsReport === undefined || generateUnsubscriptionsReport === null) {
        throw new Error("Missing the required parameter 'generateUnsubscriptionsReport' when calling generateUnsubscriptionsReport");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/reports/advanced/unsubscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAdvancedReports operation.
     * @callback module:egoiApi/AdvancedReportsApi~getAllAdvancedReportsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AdvancedReportsCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all advanced reports
     * Returns all advanced reports
     * @param {Object} opts Optional parameters
     * @param {module:egoisdk/String} opts.status Advanced report status
     * @param {String} opts.title Advanced report title
     * @param {Date} opts.createdMin Created initial date
     * @param {Date} opts.createdMax Created finish
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoisdk/String} opts.order Type of order (default to 'desc')
     * @param {module:egoisdk/String} opts.orderBy Reference attribute to order the advanced reports (default to 'advanced_report_id')
     * @param {module:egoiApi/AdvancedReportsApi~getAllAdvancedReportsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AdvancedReportsCollection}
     */
    getAllAdvancedReports(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'status': opts['status'],
        'title': opts['title'],
        'created_min': opts['createdMin'],
        'created_max': opts['createdMax'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'order': opts['order'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AdvancedReportsCollection;
      return this.apiClient.callApi(
        '/reports/advanced', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAdvancedReportsModels operation.
     * @callback module:egoiApi/AdvancedReportsApi~getAllAdvancedReportsModelsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AdvancedReportsModelsCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all advanced reports models
     * Returns all advanced reports
     * @param {Object} opts Optional parameters
     * @param {String} opts.title Advanced report model title
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {module:egoisdk/String} opts.order Type of order (default to 'desc')
     * @param {module:egoisdk/String} opts.orderBy Reference attribute to order the advanced reports (default to 'model_id')
     * @param {module:egoiApi/AdvancedReportsApi~getAllAdvancedReportsModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AdvancedReportsModelsCollection}
     */
    getAllAdvancedReportsModels(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'title': opts['title'],
        'offset': opts['offset'],
        'limit': opts['limit'],
        'order': opts['order'],
        'order_by': opts['orderBy']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AdvancedReportsModelsCollection;
      return this.apiClient.callApi(
        '/reports/advanced/models', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
