/**
 * APIv3 (New)
 *  # Introduction This is our new version of API. We invite you to start using it and give us your feedback # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.  The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.      BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication  We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:     #!/bin/bash     curl -X GET 'https://api.egoiapp.com/my-account' \\     -H 'accept: application/json' \\     -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:     #!/bin/bash     curl -X POST 'http://api.egoiapp.com/tags' \\     -H 'accept: application/json' \\     -H 'Apikey: <YOUR_APY_KEY>' \\     -H 'Content-Type: application/json' \\     -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * <a href='https://github.com/E-goi/sdk-java'>Java</a>  * <a href='https://github.com/E-goi/sdk-php'>PHP</a>  * <a href='https://github.com/E-goi/sdk-python'>Python</a>  * <a href='https://github.com/E-goi/sdk-ruby'>Ruby</a>  * <a href='https://github.com/E-goi/sdk-javascript'>Javascript</a>  * <a href='https://github.com/E-goi/sdk-csharp'>C#</a>  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you'll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation's requests, it's advised the request's division in batches that have each one less than 20MB.  # Timeouts Timeouts set a maximum waiting time on a request's response. Our API, sets a default timeout for each request and when breached, you'll receive an HTTP **408 (Request Timeout)** error code. You should take into consideration that response times can vary widely based on the complexity of the request, amount of data being analyzed, and the load on the system and workspace at the time of the query. When dealing with such errors, you should first attempt to reduce the complexity and amount of data under analysis, and only then, if problems are still occurring ask for support.  For all these reasons, the default timeout for each request is **10 Seconds** and any request that creates or modifies data (**POST**, **PATCH** and **PUT**) will have a timeout of **60 Seconds**. Specific timeouts may exist for specific requests, these can be found in the request's documentation.  # Callbacks A callback is an asynchronous API request that originates from the API server and is sent to the client in response to a previous request sent by that client.  The API will make a **POST** request to the address defined in the URL with the information regarding the event of interest and share data related to that event.  <a href='/usecases/callbacks/' target='_blank'>[Go to callbacks documentation]</a>  ***Note:*** Only http or https protocols are supported in the Url parameter.  <security-definitions/>
 *
 * The version of the OpenAPI document: 3.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ContactExtraFieldCellphoneBulk model module.
 * @module egoisdk/ContactExtraFieldCellphoneBulk
 * @version 1.1.3RC1
 */
class ContactExtraFieldCellphoneBulk {
    /**
     * Constructs a new <code>ContactExtraFieldCellphoneBulk</code>.
     * @alias module:egoisdk/ContactExtraFieldCellphoneBulk
     */
    constructor() { 
        
        ContactExtraFieldCellphoneBulk.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactExtraFieldCellphoneBulk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ContactExtraFieldCellphoneBulk} obj Optional instance to populate.
     * @return {module:egoisdk/ContactExtraFieldCellphoneBulk} The populated <code>ContactExtraFieldCellphoneBulk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactExtraFieldCellphoneBulk();

            if (data.hasOwnProperty('field_id')) {
                obj['field_id'] = ApiClient.convertToType(data['field_id'], 'Number');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactExtraFieldCellphoneBulk</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactExtraFieldCellphoneBulk</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['format'] && !(typeof data['format'] === 'string' || data['format'] instanceof String)) {
            throw new Error("Expected the field `format` to be a primitive type in the JSON string but got " + data['format']);
        }
        // ensure the json data is a string
        if (data['value'] && !(typeof data['value'] === 'string' || data['value'] instanceof String)) {
            throw new Error("Expected the field `value` to be a primitive type in the JSON string but got " + data['value']);
        }

        return true;
    }

/**
     * minimum: 1
     * @return {Number}
     */
    getFieldId() {
        return this.field_id;
    }

    /**
     * @param {Number} fieldId
     */
    setFieldId(fieldId) {
        this['field_id'] = fieldId;
    }
/**
     * Returns Extra field format
     * @return {module:egoisdk/ContactExtraFieldCellphoneBulk.FormatEnum}
     */
    getFormat() {
        return this.format;
    }

    /**
     * Sets Extra field format
     * @param {module:egoisdk/ContactExtraFieldCellphoneBulk.FormatEnum} format Extra field format
     */
    setFormat(format) {
        this['format'] = format;
    }
/**
     * Returns Extra field value
     * @return {String}
     */
    getValue() {
        return this.value;
    }

    /**
     * Sets Extra field value
     * @param {String} value Extra field value
     */
    setValue(value) {
        this['value'] = value;
    }

}



/**
 * @member {Number} field_id
 */
ContactExtraFieldCellphoneBulk.prototype['field_id'] = undefined;

/**
 * Extra field format
 * @member {module:egoisdk/ContactExtraFieldCellphoneBulk.FormatEnum} format
 */
ContactExtraFieldCellphoneBulk.prototype['format'] = undefined;

/**
 * Extra field value
 * @member {String} value
 */
ContactExtraFieldCellphoneBulk.prototype['value'] = undefined;





/**
 * Allowed values for the <code>format</code> property.
 * @enum {String}
 * @readonly
 */
ContactExtraFieldCellphoneBulk['FormatEnum'] = {

    /**
     * value: "cellphone"
     * @const
     */
    "cellphone": "cellphone"
};



export default ContactExtraFieldCellphoneBulk;

