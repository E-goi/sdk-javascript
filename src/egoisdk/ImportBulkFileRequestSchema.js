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

import ApiClient from '../ApiClient';
import ImportBulkFileRequestSchemaFile from './ImportBulkFileRequestSchemaFile';

/**
 * The ImportBulkFileRequestSchema model module.
 * @module egoisdk/ImportBulkFileRequestSchema
 * @version 1.1.6RC1
 */
class ImportBulkFileRequestSchema {
    /**
     * Constructs a new <code>ImportBulkFileRequestSchema</code>.
     * Contact import bulk request schema
     * @alias module:egoisdk/ImportBulkFileRequestSchema
     * @param mode {module:egoisdk/ImportBulkFileRequestSchema.ModeEnum} Add new contacts only ('add'), add and replace existing ones ('update') or only replace existing ones ('update_only')
     * @param compareField {String} Field ID which will be mapped for comparison to prevent duplicates. Field must be set as unique in E-goi.
     * @param file {module:egoisdk/ImportBulkFileRequestSchemaFile} 
     */
    constructor(mode, compareField, file) { 
        
        ImportBulkFileRequestSchema.initialize(this, mode, compareField, file);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mode, compareField, file) { 
        obj['mode'] = mode;
        obj['compare_field'] = compareField;
        obj['file'] = file;
    }

    /**
     * Constructs a <code>ImportBulkFileRequestSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ImportBulkFileRequestSchema} obj Optional instance to populate.
     * @return {module:egoisdk/ImportBulkFileRequestSchema} The populated <code>ImportBulkFileRequestSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportBulkFileRequestSchema();

            if (data.hasOwnProperty('mode')) {
                obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
            }
            if (data.hasOwnProperty('compare_field')) {
                obj['compare_field'] = ApiClient.convertToType(data['compare_field'], 'String');
            }
            if (data.hasOwnProperty('file')) {
                obj['file'] = ImportBulkFileRequestSchemaFile.constructFromObject(data['file']);
            }
            if (data.hasOwnProperty('force_empty')) {
                obj['force_empty'] = ApiClient.convertToType(data['force_empty'], 'Boolean');
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], ['Number']);
            }
            if (data.hasOwnProperty('callback_url')) {
                obj['callback_url'] = ApiClient.convertToType(data['callback_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImportBulkFileRequestSchema</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImportBulkFileRequestSchema</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ImportBulkFileRequestSchema.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['mode'] && !(typeof data['mode'] === 'string' || data['mode'] instanceof String)) {
            throw new Error("Expected the field `mode` to be a primitive type in the JSON string but got " + data['mode']);
        }
        // ensure the json data is a string
        if (data['compare_field'] && !(typeof data['compare_field'] === 'string' || data['compare_field'] instanceof String)) {
            throw new Error("Expected the field `compare_field` to be a primitive type in the JSON string but got " + data['compare_field']);
        }
        // validate the optional field `file`
        if (data['file']) { // data not null
          ImportBulkFileRequestSchemaFile.validateJSON(data['file']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['notify'])) {
            throw new Error("Expected the field `notify` to be an array in the JSON data but got " + data['notify']);
        }
        // ensure the json data is a string
        if (data['callback_url'] && !(typeof data['callback_url'] === 'string' || data['callback_url'] instanceof String)) {
            throw new Error("Expected the field `callback_url` to be a primitive type in the JSON string but got " + data['callback_url']);
        }

        return true;
    }

/**
     * Returns Add new contacts only ('add'), add and replace existing ones ('update') or only replace existing ones ('update_only')
     * @return {module:egoisdk/ImportBulkFileRequestSchema.ModeEnum}
     */
    getMode() {
        return this.mode;
    }

    /**
     * Sets Add new contacts only ('add'), add and replace existing ones ('update') or only replace existing ones ('update_only')
     * @param {module:egoisdk/ImportBulkFileRequestSchema.ModeEnum} mode Add new contacts only ('add'), add and replace existing ones ('update') or only replace existing ones ('update_only')
     */
    setMode(mode) {
        this['mode'] = mode;
    }
/**
     * Returns Field ID which will be mapped for comparison to prevent duplicates. Field must be set as unique in E-goi.
     * @return {String}
     */
    getCompareField() {
        return this.compare_field;
    }

    /**
     * Sets Field ID which will be mapped for comparison to prevent duplicates. Field must be set as unique in E-goi.
     * @param {String} compareField Field ID which will be mapped for comparison to prevent duplicates. Field must be set as unique in E-goi.
     */
    setCompareField(compareField) {
        this['compare_field'] = compareField;
    }
/**
     * @return {module:egoisdk/ImportBulkFileRequestSchemaFile}
     */
    getFile() {
        return this.file;
    }

    /**
     * @param {module:egoisdk/ImportBulkFileRequestSchemaFile} file
     */
    setFile(file) {
        this['file'] = file;
    }
/**
     * Returns If 'true' accepts empty values and erases those fields
     * @return {Boolean}
     */
    getForceEmpty() {
        return this.force_empty;
    }

    /**
     * Sets If 'true' accepts empty values and erases those fields
     * @param {Boolean} forceEmpty If 'true' accepts empty values and erases those fields
     */
    setForceEmpty(forceEmpty) {
        this['force_empty'] = forceEmpty;
    }
/**
     * Returns Array of IDs of the users to notify
     * @return {Array.<Number>}
     */
    getNotify() {
        return this.notify;
    }

    /**
     * Sets Array of IDs of the users to notify
     * @param {Array.<Number>} notify Array of IDs of the users to notify
     */
    setNotify(notify) {
        this['notify'] = notify;
    }
/**
     * Returns Url to receive the report <a href='/usecases/callbacks/#import-collection-of-contacts' target='_blank'>[Go to callback documentation]</a>
     * @return {String}
     */
    getCallbackUrl() {
        return this.callback_url;
    }

    /**
     * Sets Url to receive the report <a href='/usecases/callbacks/#import-collection-of-contacts' target='_blank'>[Go to callback documentation]</a>
     * @param {String} callbackUrl Url to receive the report <a href='/usecases/callbacks/#import-collection-of-contacts' target='_blank'>[Go to callback documentation]</a>
     */
    setCallbackUrl(callbackUrl) {
        this['callback_url'] = callbackUrl;
    }

}

ImportBulkFileRequestSchema.RequiredProperties = ["mode", "compare_field", "file"];

/**
 * Add new contacts only ('add'), add and replace existing ones ('update') or only replace existing ones ('update_only')
 * @member {module:egoisdk/ImportBulkFileRequestSchema.ModeEnum} mode
 */
ImportBulkFileRequestSchema.prototype['mode'] = undefined;

/**
 * Field ID which will be mapped for comparison to prevent duplicates. Field must be set as unique in E-goi.
 * @member {String} compare_field
 */
ImportBulkFileRequestSchema.prototype['compare_field'] = undefined;

/**
 * @member {module:egoisdk/ImportBulkFileRequestSchemaFile} file
 */
ImportBulkFileRequestSchema.prototype['file'] = undefined;

/**
 * If 'true' accepts empty values and erases those fields
 * @member {Boolean} force_empty
 * @default false
 */
ImportBulkFileRequestSchema.prototype['force_empty'] = false;

/**
 * Array of IDs of the users to notify
 * @member {Array.<Number>} notify
 */
ImportBulkFileRequestSchema.prototype['notify'] = undefined;

/**
 * Url to receive the report <a href='/usecases/callbacks/#import-collection-of-contacts' target='_blank'>[Go to callback documentation]</a>
 * @member {String} callback_url
 */
ImportBulkFileRequestSchema.prototype['callback_url'] = undefined;





/**
 * Allowed values for the <code>mode</code> property.
 * @enum {String}
 * @readonly
 */
ImportBulkFileRequestSchema['ModeEnum'] = {

    /**
     * value: "add"
     * @const
     */
    "add": "add",

    /**
     * value: "update"
     * @const
     */
    "update": "update",

    /**
     * value: "update_only"
     * @const
     */
    "update_only": "update_only"
};



export default ImportBulkFileRequestSchema;

