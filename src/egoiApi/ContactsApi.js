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
import ActivateContactsRequest from '../egoisdk/ActivateContactsRequest';
import ActivityCollection from '../egoisdk/ActivityCollection';
import AttachTagRequest from '../egoisdk/AttachTagRequest';
import BadRequest from '../egoisdk/BadRequest';
import ComplexContact from '../egoisdk/ComplexContact';
import Conflict from '../egoisdk/Conflict';
import ContactBaseExtraPost from '../egoisdk/ContactBaseExtraPost';
import ContactBaseStatusExtraNoRemoved from '../egoisdk/ContactBaseStatusExtraNoRemoved';
import ContactCollection from '../egoisdk/ContactCollection';
import ContactExportRequest from '../egoisdk/ContactExportRequest';
import ContactFieldIdBaseExtraPost from '../egoisdk/ContactFieldIdBaseExtraPost';
import ContactForgetRequest from '../egoisdk/ContactForgetRequest';
import CreateContactResponse from '../egoisdk/CreateContactResponse';
import DeactivateContactsRequest from '../egoisdk/DeactivateContactsRequest';
import DetachTagRequest from '../egoisdk/DetachTagRequest';
import Forbidden from '../egoisdk/Forbidden';
import GetAllContactsExtraFieldIdParameter from '../egoisdk/GetAllContactsExtraFieldIdParameter';
import ImportBulkFileRequest from '../egoisdk/ImportBulkFileRequest';
import InternalServerError from '../egoisdk/InternalServerError';
import NotFound from '../egoisdk/NotFound';
import PostContactsConflict from '../egoisdk/PostContactsConflict';
import RemoveRequest from '../egoisdk/RemoveRequest';
import RemoveResponse from '../egoisdk/RemoveResponse';
import RequestEntityTooLarge from '../egoisdk/RequestEntityTooLarge';
import RequestTimeout from '../egoisdk/RequestTimeout';
import SearchContacts200Response from '../egoisdk/SearchContacts200Response';
import ServiceUnavailable from '../egoisdk/ServiceUnavailable';
import StartAutomationRequest from '../egoisdk/StartAutomationRequest';
import StartAutomationResponse from '../egoisdk/StartAutomationResponse';
import TooManyRequests from '../egoisdk/TooManyRequests';
import Unauthorized from '../egoisdk/Unauthorized';
import UnprocessableEntity from '../egoisdk/UnprocessableEntity';
import UpdateContactsRequest from '../egoisdk/UpdateContactsRequest';

/**
* Contacts service.
* @module egoiApi/ContactsApi
* @version 1.1.6RC1
*/
export default class ContactsApi {

    /**
    * Constructs a new ContactsApi. 
    * @alias module:egoiApi/ContactsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the actionActivateContacts operation.
     * @callback module:egoiApi/ContactsApi~actionActivateContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate contacts
     * Activates a collection of contacts (does not apply to removed contacts)
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/ActivateContactsRequest} activateContactsRequest Parameters for the request
     * @param {module:egoiApi/ContactsApi~actionActivateContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionActivateContacts(listId, activateContactsRequest, callback) {
      let postBody = activateContactsRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionActivateContacts");
      }
      // verify the required parameter 'activateContactsRequest' is set
      if (activateContactsRequest === undefined || activateContactsRequest === null) {
        throw new Error("Missing the required parameter 'activateContactsRequest' when calling actionActivateContacts");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionAttachTag operation.
     * @callback module:egoiApi/ContactsApi~actionAttachTagCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach tag to contact
     * Attaches a tag to the provided contacts.
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/AttachTagRequest} attachTagRequest Parameters for the Tag
     * @param {module:egoiApi/ContactsApi~actionAttachTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionAttachTag(listId, attachTagRequest, callback) {
      let postBody = attachTagRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionAttachTag");
      }
      // verify the required parameter 'attachTagRequest' is set
      if (attachTagRequest === undefined || attachTagRequest === null) {
        throw new Error("Missing the required parameter 'attachTagRequest' when calling actionAttachTag");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/attach-tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionDeactivateContacts operation.
     * @callback module:egoiApi/ContactsApi~actionDeactivateContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deactivate contacts
     * Deactivates a collection of contacts (does not apply to removed contacts)
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/DeactivateContactsRequest} deactivateContactsRequest Parameters for the request
     * @param {module:egoiApi/ContactsApi~actionDeactivateContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionDeactivateContacts(listId, deactivateContactsRequest, callback) {
      let postBody = deactivateContactsRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionDeactivateContacts");
      }
      // verify the required parameter 'deactivateContactsRequest' is set
      if (deactivateContactsRequest === undefined || deactivateContactsRequest === null) {
        throw new Error("Missing the required parameter 'deactivateContactsRequest' when calling actionDeactivateContacts");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/deactivate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionDetachTag operation.
     * @callback module:egoiApi/ContactsApi~actionDetachTagCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Detach tag to contact
     * Detach a tag to the provided contacts
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/DetachTagRequest} detachTagRequest Parameters for the Tag
     * @param {module:egoiApi/ContactsApi~actionDetachTagCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionDetachTag(listId, detachTagRequest, callback) {
      let postBody = detachTagRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionDetachTag");
      }
      // verify the required parameter 'detachTagRequest' is set
      if (detachTagRequest === undefined || detachTagRequest === null) {
        throw new Error("Missing the required parameter 'detachTagRequest' when calling actionDetachTag");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/detach-tag', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionExportContacts operation.
     * @callback module:egoiApi/ContactsApi~actionExportContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Exports a list of contacts
     * Exports a list of contacts to the desired callback url
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/ContactExportRequest} contactExportRequest Parameters for export
     * @param {module:egoiApi/ContactsApi~actionExportContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionExportContacts(listId, contactExportRequest, callback) {
      let postBody = contactExportRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionExportContacts");
      }
      // verify the required parameter 'contactExportRequest' is set
      if (contactExportRequest === undefined || contactExportRequest === null) {
        throw new Error("Missing the required parameter 'contactExportRequest' when calling actionExportContacts");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/export', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionForgetContacts operation.
     * @callback module:egoiApi/ContactsApi~actionForgetContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forget contacts
     * Forgets a list of contacts
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/ContactForgetRequest} contactForgetRequest Parameters for the action
     * @param {module:egoiApi/ContactsApi~actionForgetContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionForgetContacts(listId, contactForgetRequest, callback) {
      let postBody = contactForgetRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionForgetContacts");
      }
      // verify the required parameter 'contactForgetRequest' is set
      if (contactForgetRequest === undefined || contactForgetRequest === null) {
        throw new Error("Missing the required parameter 'contactForgetRequest' when calling actionForgetContacts");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/forget', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionImportBulk operation.
     * @callback module:egoiApi/ContactsApi~actionImportBulkCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import collection of contacts
     * Imports a collection of contacts </br>      **DISCLAIMER:** stream limits applied. [view here](#section/Stream-Limits 'Stream Limits')<br> ***Notes:***<br>Minimum of 2 contacts to use this method. [Use Create new contact method instead](#operation/createContact 'Create new contact')<br>It defaults to ***Bulk object*** import.
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/ImportBulkFileRequest} importBulkFileRequest Parameters for the bulk import
     * @param {module:egoiApi/ContactsApi~actionImportBulkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionImportBulk(listId, importBulkFileRequest, callback) {
      let postBody = importBulkFileRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionImportBulk");
      }
      // verify the required parameter 'importBulkFileRequest' is set
      if (importBulkFileRequest === undefined || importBulkFileRequest === null) {
        throw new Error("Missing the required parameter 'importBulkFileRequest' when calling actionImportBulk");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/import-bulk', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionStartAutomation operation.
     * @callback module:egoiApi/ContactsApi~actionStartAutomationCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/StartAutomationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start automation
     * Start automation to the provided contacts
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/StartAutomationRequest} startAutomationRequest Parameters for the operation to start automation
     * @param {module:egoiApi/ContactsApi~actionStartAutomationCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/StartAutomationResponse}
     */
    actionStartAutomation(listId, startAutomationRequest, callback) {
      let postBody = startAutomationRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionStartAutomation");
      }
      // verify the required parameter 'startAutomationRequest' is set
      if (startAutomationRequest === undefined || startAutomationRequest === null) {
        throw new Error("Missing the required parameter 'startAutomationRequest' when calling actionStartAutomation");
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
      let returnType = StartAutomationResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/start-automation', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionUnsubscribeContact operation.
     * @callback module:egoiApi/ContactsApi~actionUnsubscribeContactCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/RemoveResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unsubscribes contacts
     * Unsubscribes contacts
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/RemoveRequest} removeRequest Parameters for the contact to unsubscribe
     * @param {module:egoiApi/ContactsApi~actionUnsubscribeContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/RemoveResponse}
     */
    actionUnsubscribeContact(listId, removeRequest, callback) {
      let postBody = removeRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionUnsubscribeContact");
      }
      // verify the required parameter 'removeRequest' is set
      if (removeRequest === undefined || removeRequest === null) {
        throw new Error("Missing the required parameter 'removeRequest' when calling actionUnsubscribeContact");
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
      let returnType = RemoveResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/unsubscribe', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the actionUpdateContacts operation.
     * @callback module:egoiApi/ContactsApi~actionUpdateContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/AcceptedResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates contacts
     * Updates a collection of contacts (does not apply to removed contacts).      Note that all contacts will be updated with the same values and the existance of unique fields in the payload will trigger a 409 Conflict response.
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/UpdateContactsRequest} updateContactsRequest Parameters for the request
     * @param {module:egoiApi/ContactsApi~actionUpdateContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/AcceptedResponse}
     */
    actionUpdateContacts(listId, updateContactsRequest, callback) {
      let postBody = updateContactsRequest;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling actionUpdateContacts");
      }
      // verify the required parameter 'updateContactsRequest' is set
      if (updateContactsRequest === undefined || updateContactsRequest === null) {
        throw new Error("Missing the required parameter 'updateContactsRequest' when calling actionUpdateContacts");
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
      let returnType = AcceptedResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/actions/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the createContact operation.
     * @callback module:egoiApi/ContactsApi~createContactCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/CreateContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create new contact
     * Create a new contact
     * @param {Number} listId ID of the list where the contact belongs
     * @param {module:egoisdk/ContactBaseExtraPost} contactBaseExtraPost Parameters for the Contact
     * @param {module:egoiApi/ContactsApi~createContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/CreateContactResponse}
     */
    createContact(listId, contactBaseExtraPost, callback) {
      let postBody = contactBaseExtraPost;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling createContact");
      }
      // verify the required parameter 'contactBaseExtraPost' is set
      if (contactBaseExtraPost === undefined || contactBaseExtraPost === null) {
        throw new Error("Missing the required parameter 'contactBaseExtraPost' when calling createContact");
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
      let returnType = CreateContactResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllContactActivities operation.
     * @callback module:egoiApi/ContactsApi~getAllContactActivitiesCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/ActivityCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all contact activities
     * Returns all contact activities
     * @param {String} contactId ID of the Contact
     * @param {Number} listId ID of the List
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {Date} opts.dateMin Start date
     * @param {Date} opts.dateMax End date
     * @param {module:egoisdk/String} opts.actionName Action data to return
     * @param {module:egoiApi/ContactsApi~getAllContactActivitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/ActivityCollection}
     */
    getAllContactActivities(contactId, listId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getAllContactActivities");
      }
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getAllContactActivities");
      }

      let pathParams = {
        'contact_id': contactId,
        'list_id': listId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'date_min': opts['dateMin'],
        'date_max': opts['dateMax'],
        'action_name': opts['actionName']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ActivityCollection;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/{contact_id}/activities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllContacts operation.
     * @callback module:egoiApi/ContactsApi~getAllContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/ContactCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all contacts
     * Returns all contacts
     * @param {Number} listId ID of the List
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {String} opts.firstName First name of the contacts to return
     * @param {String} opts.lastName Last name of the contacts to return
     * @param {String} opts.email Email of the contacts to return
     * @param {Boolean} opts.emailStatus EmailStatus of the contacts to return
     * @param {String} opts.cellphone Cellphone of the contacts to return
     * @param {Boolean} opts.cellphoneStatus CellphoneStatus of the contacts to return
     * @param {String} opts.phone Phone of the contacts to return
     * @param {Boolean} opts.phoneStatus PhoneStatus of the contacts to return
     * @param {Date} opts.birthDate Birth date of the contacts to return
     * @param {module:egoisdk/String} opts.language Language date of the contacts to return
     * @param {Object.<String, module:egoisdk/GetAllContactsExtraFieldIdParameter>} opts.extraFieldId Extra field of contacts<div><span class='sc-cJSrbW cWGDGi'> Example: </span> <span class='sc-uJMKN cTkJKI'> 'extra_field_id[field_id]=value' </span></div>
     * @param {module:egoiApi/ContactsApi~getAllContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/ContactCollection}
     */
    getAllContacts(listId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getAllContacts");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'first_name': opts['firstName'],
        'last_name': opts['lastName'],
        'email': opts['email'],
        'email_status': opts['emailStatus'],
        'cellphone': opts['cellphone'],
        'cellphone_status': opts['cellphoneStatus'],
        'phone': opts['phone'],
        'phone_status': opts['phoneStatus'],
        'birth_date': opts['birthDate'],
        'language': opts['language'],
        'extra_field_id': opts['extraFieldId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContactCollection;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllContactsBySegment operation.
     * @callback module:egoiApi/ContactsApi~getAllContactsBySegmentCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/ContactCollection} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all contacts by Segment Id
     * Returns all contacts filtered by Segment Id
     * @param {Number} listId ID of the List
     * @param {String} segmentId ID of the Segment
     * @param {Object} opts Optional parameters
     * @param {Number} opts.offset Element offset (starting at zero for the first element)
     * @param {Number} opts.limit Number of items to return (default to 10)
     * @param {Boolean} opts.showRemoved Show removed contacts (default to false)
     * @param {module:egoiApi/ContactsApi~getAllContactsBySegmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/ContactCollection}
     */
    getAllContactsBySegment(listId, segmentId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getAllContactsBySegment");
      }
      // verify the required parameter 'segmentId' is set
      if (segmentId === undefined || segmentId === null) {
        throw new Error("Missing the required parameter 'segmentId' when calling getAllContactsBySegment");
      }

      let pathParams = {
        'list_id': listId,
        'segment_id': segmentId
      };
      let queryParams = {
        'offset': opts['offset'],
        'limit': opts['limit'],
        'show_removed': opts['showRemoved']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = ContactCollection;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/segment/{segment_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getContact operation.
     * @callback module:egoiApi/ContactsApi~getContactCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/ComplexContact} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get contact
     * Returns contact information given its ID
     * @param {String} contactId ID of the Contact
     * @param {Number} listId ID of the List
     * @param {module:egoiApi/ContactsApi~getContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/ComplexContact}
     */
    getContact(contactId, listId, callback) {
      let postBody = null;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling getContact");
      }
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getContact");
      }

      let pathParams = {
        'contact_id': contactId,
        'list_id': listId
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
      let returnType = ComplexContact;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/{contact_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the patchContact operation.
     * @callback module:egoiApi/ContactsApi~patchContactCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/CreateContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific contact
     * Update contact
     * @param {String} contactId ID of the Contact
     * @param {Number} listId ID of the List
     * @param {module:egoisdk/ContactBaseStatusExtraNoRemoved} contactBaseStatusExtraNoRemoved Parameters for the contact
     * @param {module:egoiApi/ContactsApi~patchContactCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/CreateContactResponse}
     */
    patchContact(contactId, listId, contactBaseStatusExtraNoRemoved, callback) {
      let postBody = contactBaseStatusExtraNoRemoved;
      // verify the required parameter 'contactId' is set
      if (contactId === undefined || contactId === null) {
        throw new Error("Missing the required parameter 'contactId' when calling patchContact");
      }
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling patchContact");
      }
      // verify the required parameter 'contactBaseStatusExtraNoRemoved' is set
      if (contactBaseStatusExtraNoRemoved === undefined || contactBaseStatusExtraNoRemoved === null) {
        throw new Error("Missing the required parameter 'contactBaseStatusExtraNoRemoved' when calling patchContact");
      }

      let pathParams = {
        'contact_id': contactId,
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
      let returnType = CreateContactResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/{contact_id}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the searchContacts operation.
     * @callback module:egoiApi/ContactsApi~searchContactsCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/SearchContacts200Response} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search contact
     * Searches a contact across all lists and returns a collection of contacts found
     * @param {String} contact Contact to search
     * @param {Object} opts Optional parameters
     * @param {module:egoisdk/String} opts.type Type of contact to search (defaults to 'email') (default to 'email')
     * @param {module:egoiApi/ContactsApi~searchContactsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/SearchContacts200Response}
     */
    searchContacts(contact, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contact' is set
      if (contact === undefined || contact === null) {
        throw new Error("Missing the required parameter 'contact' when calling searchContacts");
      }

      let pathParams = {
      };
      let queryParams = {
        'type': opts['type'],
        'contact': contact
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Apikey'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = SearchContacts200Response;
      return this.apiClient.callApi(
        '/contacts/search', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updateContactByField operation.
     * @callback module:egoiApi/ContactsApi~updateContactByFieldCallback
     * @param {String} error Error message, if any.
     * @param {module:egoisdk/CreateContactResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates a contact by field
     * Updates a contact by field, wich must be unique in list
     * @param {Number} listId ID of the list where the contact belongs
     * @param {module:egoisdk/ContactFieldIdBaseExtraPost} contactFieldIdBaseExtraPost Parameters for the Contact Update by Field Id
     * @param {module:egoiApi/ContactsApi~updateContactByFieldCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:egoisdk/CreateContactResponse}
     */
    updateContactByField(listId, contactFieldIdBaseExtraPost, callback) {
      let postBody = contactFieldIdBaseExtraPost;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling updateContactByField");
      }
      // verify the required parameter 'contactFieldIdBaseExtraPost' is set
      if (contactFieldIdBaseExtraPost === undefined || contactFieldIdBaseExtraPost === null) {
        throw new Error("Missing the required parameter 'contactFieldIdBaseExtraPost' when calling updateContactByField");
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
      let returnType = CreateContactResponse;
      return this.apiClient.callApi(
        '/lists/{list_id}/contacts/by-field', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
