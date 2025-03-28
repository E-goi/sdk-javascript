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
import ComplexFieldAllOf from './ComplexFieldAllOf';
import Field from './Field';
import FieldOption from './FieldOption';

/**
 * The ComplexField model module.
 * @module egoisdk/ComplexField
 * @version 1.1.6RC1
 */
class ComplexField {
    /**
     * Constructs a new <code>ComplexField</code>.
     * Complex field schema
     * @alias module:egoisdk/ComplexField
     * @implements module:egoisdk/ComplexFieldAllOf
     * @implements module:egoisdk/Field
     * @param name {String} Name of the field
     * @param format {module:egoisdk/ComplexField.FormatEnum} Field format
     */
    constructor(name, format) { 
        ComplexFieldAllOf.initialize(this);Field.initialize(this, name, format);
        ComplexField.initialize(this, name, format);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, format) { 
        obj['name'] = name;
        obj['format'] = format;
    }

    /**
     * Constructs a <code>ComplexField</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ComplexField} obj Optional instance to populate.
     * @return {module:egoisdk/ComplexField} The populated <code>ComplexField</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComplexField();
            ComplexFieldAllOf.constructFromObject(data, obj);
            Field.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], [FieldOption]);
            }
            if (data.hasOwnProperty('field_id')) {
                obj['field_id'] = ApiClient.convertToType(data['field_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('unique')) {
                obj['unique'] = ApiClient.convertToType(data['unique'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ComplexField</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ComplexField</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ComplexField.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        if (data['options']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['options'])) {
                throw new Error("Expected the field `options` to be an array in the JSON data but got " + data['options']);
            }
            // validate the optional field `options` (array)
            for (const item of data['options']) {
                FieldOption.validateJsonObject(item);
            };
        }
        // ensure the json data is a string
        if (data['field_id'] && !(typeof data['field_id'] === 'string' || data['field_id'] instanceof String)) {
            throw new Error("Expected the field `field_id` to be a primitive type in the JSON string but got " + data['field_id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }

        return true;
    }

/**
     * Returns Field type
     * @return {module:egoisdk/ComplexField.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets Field type
     * @param {module:egoisdk/ComplexField.TypeEnum} type Field type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Lists of options (only for fields of type 'options')
     * @return {Array.<module:egoisdk/FieldOption>}
     */
    getOptions() {
        return this.options;
    }

    /**
     * Sets Lists of options (only for fields of type 'options')
     * @param {Array.<module:egoisdk/FieldOption>} options Lists of options (only for fields of type 'options')
     */
    setOptions(options) {
        this['options'] = options;
    }
/**
     * Returns Field ID
     * @return {String}
     */
    getFieldId() {
        return this.field_id;
    }

    /**
     * Sets Field ID
     * @param {String} fieldId Field ID
     */
    setFieldId(fieldId) {
        this['field_id'] = fieldId;
    }
/**
     * Returns Name of the field
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the field
     * @param {String} name Name of the field
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Field format
     * @return {module:egoisdk/ComplexField.FormatEnum}
     */
    getFormat() {
        return this.format;
    }

    /**
     * Sets Field format
     * @param {module:egoisdk/ComplexField.FormatEnum} format Field format
     */
    setFormat(format) {
        this['format'] = format;
    }
/**
     * Returns True if the field is unique, false otherwise
     * @return {Boolean}
     */
    getUnique() {
        return this.unique;
    }

    /**
     * Sets True if the field is unique, false otherwise
     * @param {Boolean} unique True if the field is unique, false otherwise
     */
    setUnique(unique) {
        this['unique'] = unique;
    }

}

ComplexField.RequiredProperties = ["name", "format"];

/**
 * Field type
 * @member {module:egoisdk/ComplexField.TypeEnum} type
 */
ComplexField.prototype['type'] = undefined;

/**
 * Lists of options (only for fields of type 'options')
 * @member {Array.<module:egoisdk/FieldOption>} options
 */
ComplexField.prototype['options'] = undefined;

/**
 * Field ID
 * @member {String} field_id
 */
ComplexField.prototype['field_id'] = undefined;

/**
 * Name of the field
 * @member {String} name
 */
ComplexField.prototype['name'] = undefined;

/**
 * Field format
 * @member {module:egoisdk/ComplexField.FormatEnum} format
 */
ComplexField.prototype['format'] = undefined;

/**
 * True if the field is unique, false otherwise
 * @member {Boolean} unique
 */
ComplexField.prototype['unique'] = undefined;


// Implement ComplexFieldAllOf interface:
/**
 * Field type
 * @member {module:egoisdk/ComplexFieldAllOf.TypeEnum} type
 */
ComplexFieldAllOf.prototype['type'] = undefined;
/**
 * Lists of options (only for fields of type 'options')
 * @member {Array.<module:egoisdk/FieldOption>} options
 */
ComplexFieldAllOf.prototype['options'] = undefined;
// Implement Field interface:
/**
 * Field ID
 * @member {String} field_id
 */
Field.prototype['field_id'] = undefined;
/**
 * Name of the field
 * @member {String} name
 */
Field.prototype['name'] = undefined;
/**
 * Field format
 * @member {module:egoisdk/Field.FormatEnum} format
 */
Field.prototype['format'] = undefined;
/**
 * True if the field is unique, false otherwise
 * @member {Boolean} unique
 */
Field.prototype['unique'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ComplexField['TypeEnum'] = {

    /**
     * value: "base"
     * @const
     */
    "base": "base",

    /**
     * value: "extra"
     * @const
     */
    "extra": "extra"
};


/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
ComplexField['FormatEnum'] = {

    /**
     * value: "date"
     * @const
     */
    "date": "date",

    /**
     * value: "text"
     * @const
     */
    "text": "text",

    /**
     * value: "cellphone"
     * @const
     */
    "cellphone": "cellphone",

    /**
     * value: "phone"
     * @const
     */
    "phone": "phone",

    /**
     * value: "number"
     * @const
     */
    "number": "number",

    /**
     * value: "email"
     * @const
     */
    "email": "email",

    /**
     * value: "options"
     * @const
     */
    "options": "options"
};



export default ComplexField;

