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

/**
 * The AutomationAllOf model module.
 * @module egoisdk/AutomationAllOf
 * @version 1.1.6RC1
 */
class AutomationAllOf {
    /**
     * Constructs a new <code>AutomationAllOf</code>.
     * @alias module:egoisdk/AutomationAllOf
     */
    constructor() { 
        
        AutomationAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AutomationAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/AutomationAllOf} obj Optional instance to populate.
     * @return {module:egoisdk/AutomationAllOf} The populated <code>AutomationAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AutomationAllOf();

            if (data.hasOwnProperty('automation_id')) {
                obj['automation_id'] = ApiClient.convertToType(data['automation_id'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('list_id')) {
                obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('created_by')) {
                obj['created_by'] = ApiClient.convertToType(data['created_by'], 'Number');
            }
            if (data.hasOwnProperty('allow_multiple_contacts')) {
                obj['allow_multiple_contacts'] = ApiClient.convertToType(data['allow_multiple_contacts'], 'Boolean');
            }
            if (data.hasOwnProperty('contact_limit')) {
                obj['contact_limit'] = ApiClient.convertToType(data['contact_limit'], 'Number');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'Date');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AutomationAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AutomationAllOf</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `created`
        if (data['created']) { // data not null
          Date.validateJSON(data['created']);
        }
        // validate the optional field `updated`
        if (data['updated']) { // data not null
          Date.validateJSON(data['updated']);
        }

        return true;
    }

/**
     * minimum: 1
     * @return {Number}
     */
    getAutomationId() {
        return this.automation_id;
    }

    /**
     * @param {Number} automationId
     */
    setAutomationId(automationId) {
        this['automation_id'] = automationId;
    }
/**
     * Returns Automation title
     * @return {String}
     */
    getTitle() {
        return this.title;
    }

    /**
     * Sets Automation title
     * @param {String} title Automation title
     */
    setTitle(title) {
        this['title'] = title;
    }
/**
     * minimum: 1
     * @return {Number}
     */
    getListId() {
        return this.list_id;
    }

    /**
     * @param {Number} listId
     */
    setListId(listId) {
        this['list_id'] = listId;
    }
/**
     * Returns Automation status
     * @return {module:egoisdk/AutomationAllOf.StatusEnum}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets Automation status
     * @param {module:egoisdk/AutomationAllOf.StatusEnum} status Automation status
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * minimum: 1
     * @return {Number}
     */
    getCreatedBy() {
        return this.created_by;
    }

    /**
     * @param {Number} createdBy
     */
    setCreatedBy(createdBy) {
        this['created_by'] = createdBy;
    }
/**
     * Returns True if the automation allows multiple contacts, false otherwise
     * @return {Boolean}
     */
    getAllowMultipleContacts() {
        return this.allow_multiple_contacts;
    }

    /**
     * Sets True if the automation allows multiple contacts, false otherwise
     * @param {Boolean} allowMultipleContacts True if the automation allows multiple contacts, false otherwise
     */
    setAllowMultipleContacts(allowMultipleContacts) {
        this['allow_multiple_contacts'] = allowMultipleContacts;
    }
/**
     * Returns Contact limit for the automation. Contact limit value (value '0' is returned if contact                                 limit is not enabled)
     * minimum: 0
     * @return {Number}
     */
    getContactLimit() {
        return this.contact_limit;
    }

    /**
     * Sets Contact limit for the automation. Contact limit value (value '0' is returned if contact                                 limit is not enabled)
     * @param {Number} contactLimit Contact limit for the automation. Contact limit value (value '0' is returned if contact                                 limit is not enabled)
     */
    setContactLimit(contactLimit) {
        this['contact_limit'] = contactLimit;
    }
/**
     * @return {Date}
     */
    getCreated() {
        return this.created;
    }

    /**
     * @param {Date} created
     */
    setCreated(created) {
        this['created'] = created;
    }
/**
     * @return {Date}
     */
    getUpdated() {
        return this.updated;
    }

    /**
     * @param {Date} updated
     */
    setUpdated(updated) {
        this['updated'] = updated;
    }

}



/**
 * @member {Number} automation_id
 */
AutomationAllOf.prototype['automation_id'] = undefined;

/**
 * Automation title
 * @member {String} title
 */
AutomationAllOf.prototype['title'] = undefined;

/**
 * @member {Number} list_id
 */
AutomationAllOf.prototype['list_id'] = undefined;

/**
 * Automation status
 * @member {module:egoisdk/AutomationAllOf.StatusEnum} status
 */
AutomationAllOf.prototype['status'] = undefined;

/**
 * @member {Number} created_by
 */
AutomationAllOf.prototype['created_by'] = undefined;

/**
 * True if the automation allows multiple contacts, false otherwise
 * @member {Boolean} allow_multiple_contacts
 * @default true
 */
AutomationAllOf.prototype['allow_multiple_contacts'] = true;

/**
 * Contact limit for the automation. Contact limit value (value '0' is returned if contact                                 limit is not enabled)
 * @member {Number} contact_limit
 */
AutomationAllOf.prototype['contact_limit'] = undefined;

/**
 * @member {Date} created
 */
AutomationAllOf.prototype['created'] = undefined;

/**
 * @member {Date} updated
 */
AutomationAllOf.prototype['updated'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
AutomationAllOf['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};



export default AutomationAllOf;

