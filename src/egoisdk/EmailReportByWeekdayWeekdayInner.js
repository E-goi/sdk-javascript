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
 * The EmailReportByWeekdayWeekdayInner model module.
 * @module egoisdk/EmailReportByWeekdayWeekdayInner
 * @version 1.1.6RC1
 */
class EmailReportByWeekdayWeekdayInner {
    /**
     * Constructs a new <code>EmailReportByWeekdayWeekdayInner</code>.
     * @alias module:egoisdk/EmailReportByWeekdayWeekdayInner
     */
    constructor() { 
        
        EmailReportByWeekdayWeekdayInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailReportByWeekdayWeekdayInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/EmailReportByWeekdayWeekdayInner} obj Optional instance to populate.
     * @return {module:egoisdk/EmailReportByWeekdayWeekdayInner} The populated <code>EmailReportByWeekdayWeekdayInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailReportByWeekdayWeekdayInner();

            if (data.hasOwnProperty('weekday')) {
                obj['weekday'] = ApiClient.convertToType(data['weekday'], 'String');
            }
            if (data.hasOwnProperty('sends')) {
                obj['sends'] = ApiClient.convertToType(data['sends'], 'Number');
            }
            if (data.hasOwnProperty('opens')) {
                obj['opens'] = ApiClient.convertToType(data['opens'], 'Number');
            }
            if (data.hasOwnProperty('clicks')) {
                obj['clicks'] = ApiClient.convertToType(data['clicks'], 'Number');
            }
            if (data.hasOwnProperty('hard_bounces')) {
                obj['hard_bounces'] = ApiClient.convertToType(data['hard_bounces'], 'Number');
            }
            if (data.hasOwnProperty('soft_bounces')) {
                obj['soft_bounces'] = ApiClient.convertToType(data['soft_bounces'], 'Number');
            }
            if (data.hasOwnProperty('complaints')) {
                obj['complaints'] = ApiClient.convertToType(data['complaints'], 'Number');
            }
            if (data.hasOwnProperty('unsubscriptions')) {
                obj['unsubscriptions'] = ApiClient.convertToType(data['unsubscriptions'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailReportByWeekdayWeekdayInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailReportByWeekdayWeekdayInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['weekday'] && !(typeof data['weekday'] === 'string' || data['weekday'] instanceof String)) {
            throw new Error("Expected the field `weekday` to be a primitive type in the JSON string but got " + data['weekday']);
        }

        return true;
    }

/**
     * Returns Numeric representation of the day of the week (0 for sunday)
     * @return {String}
     */
    getWeekday() {
        return this.weekday;
    }

    /**
     * Sets Numeric representation of the day of the week (0 for sunday)
     * @param {String} weekday Numeric representation of the day of the week (0 for sunday)
     */
    setWeekday(weekday) {
        this['weekday'] = weekday;
    }
/**
     * Returns Total number of sent messages
     * minimum: 0
     * @return {Number}
     */
    getSends() {
        return this.sends;
    }

    /**
     * Sets Total number of sent messages
     * @param {Number} sends Total number of sent messages
     */
    setSends(sends) {
        this['sends'] = sends;
    }
/**
     * Returns Total number of open messages
     * minimum: 0
     * @return {Number}
     */
    getOpens() {
        return this.opens;
    }

    /**
     * Sets Total number of open messages
     * @param {Number} opens Total number of open messages
     */
    setOpens(opens) {
        this['opens'] = opens;
    }
/**
     * Returns Total number of clicks in message
     * minimum: 0
     * @return {Number}
     */
    getClicks() {
        return this.clicks;
    }

    /**
     * Sets Total number of clicks in message
     * @param {Number} clicks Total number of clicks in message
     */
    setClicks(clicks) {
        this['clicks'] = clicks;
    }
/**
     * Returns Total number of hard bounces
     * minimum: 0
     * @return {Number}
     */
    getHardBounces() {
        return this.hard_bounces;
    }

    /**
     * Sets Total number of hard bounces
     * @param {Number} hardBounces Total number of hard bounces
     */
    setHardBounces(hardBounces) {
        this['hard_bounces'] = hardBounces;
    }
/**
     * Returns Total number of soft bounces
     * minimum: 0
     * @return {Number}
     */
    getSoftBounces() {
        return this.soft_bounces;
    }

    /**
     * Sets Total number of soft bounces
     * @param {Number} softBounces Total number of soft bounces
     */
    setSoftBounces(softBounces) {
        this['soft_bounces'] = softBounces;
    }
/**
     * Returns Total number of complaints
     * minimum: 0
     * @return {Number}
     */
    getComplaints() {
        return this.complaints;
    }

    /**
     * Sets Total number of complaints
     * @param {Number} complaints Total number of complaints
     */
    setComplaints(complaints) {
        this['complaints'] = complaints;
    }
/**
     * Returns Total number of unsubscriptions
     * minimum: 0
     * @return {Number}
     */
    getUnsubscriptions() {
        return this.unsubscriptions;
    }

    /**
     * Sets Total number of unsubscriptions
     * @param {Number} unsubscriptions Total number of unsubscriptions
     */
    setUnsubscriptions(unsubscriptions) {
        this['unsubscriptions'] = unsubscriptions;
    }

}



/**
 * Numeric representation of the day of the week (0 for sunday)
 * @member {String} weekday
 */
EmailReportByWeekdayWeekdayInner.prototype['weekday'] = undefined;

/**
 * Total number of sent messages
 * @member {Number} sends
 */
EmailReportByWeekdayWeekdayInner.prototype['sends'] = undefined;

/**
 * Total number of open messages
 * @member {Number} opens
 */
EmailReportByWeekdayWeekdayInner.prototype['opens'] = undefined;

/**
 * Total number of clicks in message
 * @member {Number} clicks
 */
EmailReportByWeekdayWeekdayInner.prototype['clicks'] = undefined;

/**
 * Total number of hard bounces
 * @member {Number} hard_bounces
 */
EmailReportByWeekdayWeekdayInner.prototype['hard_bounces'] = undefined;

/**
 * Total number of soft bounces
 * @member {Number} soft_bounces
 */
EmailReportByWeekdayWeekdayInner.prototype['soft_bounces'] = undefined;

/**
 * Total number of complaints
 * @member {Number} complaints
 */
EmailReportByWeekdayWeekdayInner.prototype['complaints'] = undefined;

/**
 * Total number of unsubscriptions
 * @member {Number} unsubscriptions
 */
EmailReportByWeekdayWeekdayInner.prototype['unsubscriptions'] = undefined;






export default EmailReportByWeekdayWeekdayInner;

