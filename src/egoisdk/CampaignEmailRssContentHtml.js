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
import CampaignEmailBaseContent from './CampaignEmailBaseContent';
import CampaignEmailRssContentHtmlAllOf from './CampaignEmailRssContentHtmlAllOf';

/**
 * The CampaignEmailRssContentHtml model module.
 * @module egoisdk/CampaignEmailRssContentHtml
 * @version 1.1.6RC1
 */
class CampaignEmailRssContentHtml {
    /**
     * Constructs a new <code>CampaignEmailRssContentHtml</code>.
     * @alias module:egoisdk/CampaignEmailRssContentHtml
     * @implements module:egoisdk/CampaignEmailRssContentHtmlAllOf
     * @implements module:egoisdk/CampaignEmailBaseContent
     * @param type {module:egoisdk/CampaignEmailRssContentHtml.TypeEnum} 
     * @param body {String} HTML code of the rss campaign
     */
    constructor(type, body) { 
        CampaignEmailRssContentHtmlAllOf.initialize(this);CampaignEmailBaseContent.initialize(this);
        CampaignEmailRssContentHtml.initialize(this, type, body);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, body) { 
        obj['type'] = type;
        obj['body'] = body;
    }

    /**
     * Constructs a <code>CampaignEmailRssContentHtml</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/CampaignEmailRssContentHtml} obj Optional instance to populate.
     * @return {module:egoisdk/CampaignEmailRssContentHtml} The populated <code>CampaignEmailRssContentHtml</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignEmailRssContentHtml();
            CampaignEmailRssContentHtmlAllOf.constructFromObject(data, obj);
            CampaignEmailBaseContent.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('body')) {
                obj['body'] = ApiClient.convertToType(data['body'], 'String');
            }
            if (data.hasOwnProperty('feed')) {
                obj['feed'] = ApiClient.convertToType(data['feed'], 'String');
            }
            if (data.hasOwnProperty('plain_text')) {
                obj['plain_text'] = ApiClient.convertToType(data['plain_text'], 'String');
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CampaignEmailRssContentHtml</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CampaignEmailRssContentHtml</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CampaignEmailRssContentHtml.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['body'] && !(typeof data['body'] === 'string' || data['body'] instanceof String)) {
            throw new Error("Expected the field `body` to be a primitive type in the JSON string but got " + data['body']);
        }
        // ensure the json data is a string
        if (data['feed'] && !(typeof data['feed'] === 'string' || data['feed'] instanceof String)) {
            throw new Error("Expected the field `feed` to be a primitive type in the JSON string but got " + data['feed']);
        }
        // ensure the json data is a string
        if (data['plain_text'] && !(typeof data['plain_text'] === 'string' || data['plain_text'] instanceof String)) {
            throw new Error("Expected the field `plain_text` to be a primitive type in the JSON string but got " + data['plain_text']);
        }
        // ensure the json data is a string
        if (data['snippet'] && !(typeof data['snippet'] === 'string' || data['snippet'] instanceof String)) {
            throw new Error("Expected the field `snippet` to be a primitive type in the JSON string but got " + data['snippet']);
        }

        return true;
    }

/**
     * @return {module:egoisdk/CampaignEmailRssContentHtml.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {module:egoisdk/CampaignEmailRssContentHtml.TypeEnum} type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns HTML code of the rss campaign
     * @return {String}
     */
    getBody() {
        return this.body;
    }

    /**
     * Sets HTML code of the rss campaign
     * @param {String} body HTML code of the rss campaign
     */
    setBody(body) {
        this['body'] = body;
    }
/**
     * Returns Valid url for a rss feed
     * @return {String}
     */
    getFeed() {
        return this.feed;
    }

    /**
     * Sets Valid url for a rss feed
     * @param {String} feed Valid url for a rss feed
     */
    setFeed(feed) {
        this['feed'] = feed;
    }
/**
     * Returns Plain text for the campaign
     * @return {String}
     */
    getPlainText() {
        return this.plain_text;
    }

    /**
     * Sets Plain text for the campaign
     * @param {String} plainText Plain text for the campaign
     */
    setPlainText(plainText) {
        this['plain_text'] = plainText;
    }
/**
     * Returns Snippet text for the campaign
     * @return {String}
     */
    getSnippet() {
        return this.snippet;
    }

    /**
     * Sets Snippet text for the campaign
     * @param {String} snippet Snippet text for the campaign
     */
    setSnippet(snippet) {
        this['snippet'] = snippet;
    }

}

CampaignEmailRssContentHtml.RequiredProperties = ["type", "body"];

/**
 * @member {module:egoisdk/CampaignEmailRssContentHtml.TypeEnum} type
 */
CampaignEmailRssContentHtml.prototype['type'] = undefined;

/**
 * HTML code of the rss campaign
 * @member {String} body
 */
CampaignEmailRssContentHtml.prototype['body'] = undefined;

/**
 * Valid url for a rss feed
 * @member {String} feed
 */
CampaignEmailRssContentHtml.prototype['feed'] = undefined;

/**
 * Plain text for the campaign
 * @member {String} plain_text
 */
CampaignEmailRssContentHtml.prototype['plain_text'] = undefined;

/**
 * Snippet text for the campaign
 * @member {String} snippet
 */
CampaignEmailRssContentHtml.prototype['snippet'] = undefined;


// Implement CampaignEmailRssContentHtmlAllOf interface:
/**
 * @member {module:egoisdk/CampaignEmailRssContentHtmlAllOf.TypeEnum} type
 */
CampaignEmailRssContentHtmlAllOf.prototype['type'] = undefined;
/**
 * HTML code of the rss campaign
 * @member {String} body
 */
CampaignEmailRssContentHtmlAllOf.prototype['body'] = undefined;
/**
 * Valid url for a rss feed
 * @member {String} feed
 */
CampaignEmailRssContentHtmlAllOf.prototype['feed'] = undefined;
// Implement CampaignEmailBaseContent interface:
/**
 * Plain text for the campaign
 * @member {String} plain_text
 */
CampaignEmailBaseContent.prototype['plain_text'] = undefined;
/**
 * Snippet text for the campaign
 * @member {String} snippet
 */
CampaignEmailBaseContent.prototype['snippet'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignEmailRssContentHtml['TypeEnum'] = {

    /**
     * value: "html"
     * @const
     */
    "html": "html"
};



export default CampaignEmailRssContentHtml;

