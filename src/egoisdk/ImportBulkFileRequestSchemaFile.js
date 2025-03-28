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
import ContactBulkFile from './ContactBulkFile';
import ContactFieldMappingFileBulkSchema from './ContactFieldMappingFileBulkSchema';

/**
 * The ImportBulkFileRequestSchemaFile model module.
 * @module egoisdk/ImportBulkFileRequestSchemaFile
 * @version 1.1.6RC1
 */
class ImportBulkFileRequestSchemaFile {
    /**
     * Constructs a new <code>ImportBulkFileRequestSchemaFile</code>.
     * File to import
     * @alias module:egoisdk/ImportBulkFileRequestSchemaFile
     * @implements module:egoisdk/ContactBulkFile
     * @param url {String} Url from wich we will download the csv file:  *       Note: Only 'http' or 'https' protocols are supported
     * @param fieldMapping {Array.<module:egoisdk/ContactFieldMappingFileBulkSchema>} Contact Import File Field Mapping
     */
    constructor(url, fieldMapping) { 
        ContactBulkFile.initialize(this, url, fieldMapping);
        ImportBulkFileRequestSchemaFile.initialize(this, url, fieldMapping);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, url, fieldMapping) { 
        obj['url'] = url;
        obj['field_mapping'] = fieldMapping;
    }

    /**
     * Constructs a <code>ImportBulkFileRequestSchemaFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ImportBulkFileRequestSchemaFile} obj Optional instance to populate.
     * @return {module:egoisdk/ImportBulkFileRequestSchemaFile} The populated <code>ImportBulkFileRequestSchemaFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportBulkFileRequestSchemaFile();
            ContactBulkFile.constructFromObject(data, obj);

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('field_mapping')) {
                obj['field_mapping'] = ApiClient.convertToType(data['field_mapping'], [ContactFieldMappingFileBulkSchema]);
            }
            if (data.hasOwnProperty('separator')) {
                obj['separator'] = ApiClient.convertToType(data['separator'], 'String');
            }
            if (data.hasOwnProperty('delimiter')) {
                obj['delimiter'] = ApiClient.convertToType(data['delimiter'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImportBulkFileRequestSchemaFile</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImportBulkFileRequestSchemaFile</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ImportBulkFileRequestSchemaFile.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }
        if (data['field_mapping']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['field_mapping'])) {
                throw new Error("Expected the field `field_mapping` to be an array in the JSON data but got " + data['field_mapping']);
            }
            // validate the optional field `field_mapping` (array)
            for (const item of data['field_mapping']) {
                ContactFieldMappingFileBulkSchema.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['separator'] && !(typeof data['separator'] === 'string' || data['separator'] instanceof String)) {
            throw new Error("Expected the field `separator` to be a primitive type in the JSON string but got " + data['separator']);
        }
        // ensure the json data is a string
        if (data['delimiter'] && !(typeof data['delimiter'] === 'string' || data['delimiter'] instanceof String)) {
            throw new Error("Expected the field `delimiter` to be a primitive type in the JSON string but got " + data['delimiter']);
        }

        return true;
    }

/**
     * Returns Url from wich we will download the csv file:  *       Note: Only 'http' or 'https' protocols are supported
     * @return {String}
     */
    getUrl() {
        return this.url;
    }

    /**
     * Sets Url from wich we will download the csv file:  *       Note: Only 'http' or 'https' protocols are supported
     * @param {String} url Url from wich we will download the csv file:  *       Note: Only 'http' or 'https' protocols are supported
     */
    setUrl(url) {
        this['url'] = url;
    }
/**
     * Returns Contact Import File Field Mapping
     * @return {Array.<module:egoisdk/ContactFieldMappingFileBulkSchema>}
     */
    getFieldMapping() {
        return this.field_mapping;
    }

    /**
     * Sets Contact Import File Field Mapping
     * @param {Array.<module:egoisdk/ContactFieldMappingFileBulkSchema>} fieldMapping Contact Import File Field Mapping
     */
    setFieldMapping(fieldMapping) {
        this['field_mapping'] = fieldMapping;
    }
/**
     * Returns Csv column separator (defaults to \")
     * @return {String}
     */
    getSeparator() {
        return this.separator;
    }

    /**
     * Sets Csv column separator (defaults to \")
     * @param {String} separator Csv column separator (defaults to \")
     */
    setSeparator(separator) {
        this['separator'] = separator;
    }
/**
     * Returns Csv column delimiter (defaults to ,)
     * @return {String}
     */
    getDelimiter() {
        return this.delimiter;
    }

    /**
     * Sets Csv column delimiter (defaults to ,)
     * @param {String} delimiter Csv column delimiter (defaults to ,)
     */
    setDelimiter(delimiter) {
        this['delimiter'] = delimiter;
    }

}

ImportBulkFileRequestSchemaFile.RequiredProperties = ["url", "field_mapping"];

/**
 * Url from wich we will download the csv file:  *       Note: Only 'http' or 'https' protocols are supported
 * @member {String} url
 */
ImportBulkFileRequestSchemaFile.prototype['url'] = undefined;

/**
 * Contact Import File Field Mapping
 * @member {Array.<module:egoisdk/ContactFieldMappingFileBulkSchema>} field_mapping
 */
ImportBulkFileRequestSchemaFile.prototype['field_mapping'] = undefined;

/**
 * Csv column separator (defaults to \")
 * @member {String} separator
 */
ImportBulkFileRequestSchemaFile.prototype['separator'] = undefined;

/**
 * Csv column delimiter (defaults to ,)
 * @member {String} delimiter
 */
ImportBulkFileRequestSchemaFile.prototype['delimiter'] = undefined;


// Implement ContactBulkFile interface:
/**
 * Url from wich we will download the csv file:  *       Note: Only 'http' or 'https' protocols are supported
 * @member {String} url
 */
ContactBulkFile.prototype['url'] = undefined;
/**
 * Contact Import File Field Mapping
 * @member {Array.<module:egoisdk/ContactFieldMappingFileBulkSchema>} field_mapping
 */
ContactBulkFile.prototype['field_mapping'] = undefined;
/**
 * Csv column separator (defaults to \")
 * @member {String} separator
 */
ContactBulkFile.prototype['separator'] = undefined;
/**
 * Csv column delimiter (defaults to ,)
 * @member {String} delimiter
 */
ContactBulkFile.prototype['delimiter'] = undefined;




export default ImportBulkFileRequestSchemaFile;

