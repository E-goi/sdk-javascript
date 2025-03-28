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
import AbstractCampaignTemplate from './AbstractCampaignTemplate';
import EmailCampaignTemplateAllOf from './EmailCampaignTemplateAllOf';
import EmailCampaignTemplateAllOfReplyToData from './EmailCampaignTemplateAllOfReplyToData';
import EmailCampaignTemplateAllOfSenderData from './EmailCampaignTemplateAllOfSenderData';

/**
 * The EmailCampaignTemplate model module.
 * @module egoisdk/EmailCampaignTemplate
 * @version 1.1.6RC1
 */
class EmailCampaignTemplate {
    /**
     * Constructs a new <code>EmailCampaignTemplate</code>.
     * Email campaign template schema
     * @alias module:egoisdk/EmailCampaignTemplate
     * @implements module:egoisdk/EmailCampaignTemplateAllOf
     * @implements module:egoisdk/AbstractCampaignTemplate
     */
    constructor() { 
        EmailCampaignTemplateAllOf.initialize(this);AbstractCampaignTemplate.initialize(this);
        EmailCampaignTemplate.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailCampaignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/EmailCampaignTemplate} obj Optional instance to populate.
     * @return {module:egoisdk/EmailCampaignTemplate} The populated <code>EmailCampaignTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCampaignTemplate();
            EmailCampaignTemplateAllOf.constructFromObject(data, obj);
            AbstractCampaignTemplate.constructFromObject(data, obj);

            if (data.hasOwnProperty('sender_data')) {
                obj['sender_data'] = EmailCampaignTemplateAllOfSenderData.constructFromObject(data['sender_data']);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('message_html_version')) {
                obj['message_html_version'] = ApiClient.convertToType(data['message_html_version'], 'String');
            }
            if (data.hasOwnProperty('message_text_version')) {
                obj['message_text_version'] = ApiClient.convertToType(data['message_text_version'], 'String');
            }
            if (data.hasOwnProperty('reply_to_data')) {
                obj['reply_to_data'] = EmailCampaignTemplateAllOfReplyToData.constructFromObject(data['reply_to_data']);
            }
            if (data.hasOwnProperty('template_id')) {
                obj['template_id'] = ApiClient.convertToType(data['template_id'], 'Number');
            }
            if (data.hasOwnProperty('template_hash')) {
                obj['template_hash'] = ApiClient.convertToType(data['template_hash'], 'String');
            }
            if (data.hasOwnProperty('internal_name')) {
                obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'String');
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
     * Validates the JSON data with respect to <code>EmailCampaignTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailCampaignTemplate</code>.
     */
    static validateJSON(data) {
        // validate the optional field `sender_data`
        if (data['sender_data']) { // data not null
          EmailCampaignTemplateAllOfSenderData.validateJSON(data['sender_data']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['message_html_version'] && !(typeof data['message_html_version'] === 'string' || data['message_html_version'] instanceof String)) {
            throw new Error("Expected the field `message_html_version` to be a primitive type in the JSON string but got " + data['message_html_version']);
        }
        // ensure the json data is a string
        if (data['message_text_version'] && !(typeof data['message_text_version'] === 'string' || data['message_text_version'] instanceof String)) {
            throw new Error("Expected the field `message_text_version` to be a primitive type in the JSON string but got " + data['message_text_version']);
        }
        // validate the optional field `reply_to_data`
        if (data['reply_to_data']) { // data not null
          EmailCampaignTemplateAllOfReplyToData.validateJSON(data['reply_to_data']);
        }
        // ensure the json data is a string
        if (data['template_hash'] && !(typeof data['template_hash'] === 'string' || data['template_hash'] instanceof String)) {
            throw new Error("Expected the field `template_hash` to be a primitive type in the JSON string but got " + data['template_hash']);
        }
        // ensure the json data is a string
        if (data['internal_name'] && !(typeof data['internal_name'] === 'string' || data['internal_name'] instanceof String)) {
            throw new Error("Expected the field `internal_name` to be a primitive type in the JSON string but got " + data['internal_name']);
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
     * @return {module:egoisdk/EmailCampaignTemplateAllOfSenderData}
     */
    getSenderData() {
        return this.sender_data;
    }

    /**
     * @param {module:egoisdk/EmailCampaignTemplateAllOfSenderData} senderData
     */
    setSenderData(senderData) {
        this['sender_data'] = senderData;
    }
/**
     * Returns Template image
     * @return {String}
     */
    getImage() {
        return this.image;
    }

    /**
     * Sets Template image
     * @param {String} image Template image
     */
    setImage(image) {
        this['image'] = image;
    }
/**
     * Returns Html message
     * @return {String}
     */
    getMessageHtmlVersion() {
        return this.message_html_version;
    }

    /**
     * Sets Html message
     * @param {String} messageHtmlVersion Html message
     */
    setMessageHtmlVersion(messageHtmlVersion) {
        this['message_html_version'] = messageHtmlVersion;
    }
/**
     * Returns Text message
     * @return {String}
     */
    getMessageTextVersion() {
        return this.message_text_version;
    }

    /**
     * Sets Text message
     * @param {String} messageTextVersion Text message
     */
    setMessageTextVersion(messageTextVersion) {
        this['message_text_version'] = messageTextVersion;
    }
/**
     * @return {module:egoisdk/EmailCampaignTemplateAllOfReplyToData}
     */
    getReplyToData() {
        return this.reply_to_data;
    }

    /**
     * @param {module:egoisdk/EmailCampaignTemplateAllOfReplyToData} replyToData
     */
    setReplyToData(replyToData) {
        this['reply_to_data'] = replyToData;
    }
/**
     * minimum: 1
     * @return {Number}
     */
    getTemplateId() {
        return this.template_id;
    }

    /**
     * @param {Number} templateId
     */
    setTemplateId(templateId) {
        this['template_id'] = templateId;
    }
/**
     * @return {String}
     */
    getTemplateHash() {
        return this.template_hash;
    }

    /**
     * @param {String} templateHash
     */
    setTemplateHash(templateHash) {
        this['template_hash'] = templateHash;
    }
/**
     * Returns Campaign internal name
     * @return {String}
     */
    getInternalName() {
        return this.internal_name;
    }

    /**
     * Sets Campaign internal name
     * @param {String} internalName Campaign internal name
     */
    setInternalName(internalName) {
        this['internal_name'] = internalName;
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
 * @member {module:egoisdk/EmailCampaignTemplateAllOfSenderData} sender_data
 */
EmailCampaignTemplate.prototype['sender_data'] = undefined;

/**
 * Template image
 * @member {String} image
 */
EmailCampaignTemplate.prototype['image'] = undefined;

/**
 * Html message
 * @member {String} message_html_version
 */
EmailCampaignTemplate.prototype['message_html_version'] = undefined;

/**
 * Text message
 * @member {String} message_text_version
 */
EmailCampaignTemplate.prototype['message_text_version'] = undefined;

/**
 * @member {module:egoisdk/EmailCampaignTemplateAllOfReplyToData} reply_to_data
 */
EmailCampaignTemplate.prototype['reply_to_data'] = undefined;

/**
 * @member {Number} template_id
 */
EmailCampaignTemplate.prototype['template_id'] = undefined;

/**
 * @member {String} template_hash
 */
EmailCampaignTemplate.prototype['template_hash'] = undefined;

/**
 * Campaign internal name
 * @member {String} internal_name
 */
EmailCampaignTemplate.prototype['internal_name'] = undefined;

/**
 * @member {Date} created
 */
EmailCampaignTemplate.prototype['created'] = undefined;

/**
 * @member {Date} updated
 */
EmailCampaignTemplate.prototype['updated'] = undefined;


// Implement EmailCampaignTemplateAllOf interface:
/**
 * @member {module:egoisdk/EmailCampaignTemplateAllOfSenderData} sender_data
 */
EmailCampaignTemplateAllOf.prototype['sender_data'] = undefined;
/**
 * Template image
 * @member {String} image
 */
EmailCampaignTemplateAllOf.prototype['image'] = undefined;
/**
 * Html message
 * @member {String} message_html_version
 */
EmailCampaignTemplateAllOf.prototype['message_html_version'] = undefined;
/**
 * Text message
 * @member {String} message_text_version
 */
EmailCampaignTemplateAllOf.prototype['message_text_version'] = undefined;
/**
 * @member {module:egoisdk/EmailCampaignTemplateAllOfReplyToData} reply_to_data
 */
EmailCampaignTemplateAllOf.prototype['reply_to_data'] = undefined;
// Implement AbstractCampaignTemplate interface:
/**
 * @member {Number} template_id
 */
AbstractCampaignTemplate.prototype['template_id'] = undefined;
/**
 * @member {String} template_hash
 */
AbstractCampaignTemplate.prototype['template_hash'] = undefined;
/**
 * Campaign internal name
 * @member {String} internal_name
 */
AbstractCampaignTemplate.prototype['internal_name'] = undefined;
/**
 * @member {Date} created
 */
AbstractCampaignTemplate.prototype['created'] = undefined;
/**
 * @member {Date} updated
 */
AbstractCampaignTemplate.prototype['updated'] = undefined;




export default EmailCampaignTemplate;

