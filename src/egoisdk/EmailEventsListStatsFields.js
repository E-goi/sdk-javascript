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
 * The EmailEventsListStatsFields model module.
 * @module egoisdk/EmailEventsListStatsFields
 * @version 1.1.6RC1
 */
class EmailEventsListStatsFields {
    /**
     * Constructs a new <code>EmailEventsListStatsFields</code>.
     * List stats fields to include in the report
     * @alias module:egoisdk/EmailEventsListStatsFields
     * @param opens {Boolean} True to include opens, false otherwise
     * @param clicks {Boolean} True to include clicks, false otherwise
     * @param complaints {Boolean} True to include complaints, false otherwise
     * @param unsubscribes {Boolean} True to include unsubscriptions, false otherwise
     * @param bounces {Boolean} True to include bounces, false otherwise
     * @param forwards {Boolean} True to include forwards, false otherwise
     * @param forwardsConversion {Boolean} True to include converted forwards, false otherwise
     * @param fbLikes {Boolean} True to include facebook likes, false otherwise
     * @param fbShares {Boolean} True to include facebook shares, false otherwise
     * @param twShares {Boolean} True to include twitter shares, false otherwise
     * @param socialShares {Boolean} True to include social shares, false otherwise
     */
    constructor(opens, clicks, complaints, unsubscribes, bounces, forwards, forwardsConversion, fbLikes, fbShares, twShares, socialShares) { 
        
        EmailEventsListStatsFields.initialize(this, opens, clicks, complaints, unsubscribes, bounces, forwards, forwardsConversion, fbLikes, fbShares, twShares, socialShares);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, opens, clicks, complaints, unsubscribes, bounces, forwards, forwardsConversion, fbLikes, fbShares, twShares, socialShares) { 
        obj['opens'] = opens;
        obj['clicks'] = clicks;
        obj['complaints'] = complaints;
        obj['unsubscribes'] = unsubscribes;
        obj['bounces'] = bounces;
        obj['forwards'] = forwards;
        obj['forwards_conversion'] = forwardsConversion;
        obj['fb_likes'] = fbLikes;
        obj['fb_shares'] = fbShares;
        obj['tw_shares'] = twShares;
        obj['social_shares'] = socialShares;
    }

    /**
     * Constructs a <code>EmailEventsListStatsFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/EmailEventsListStatsFields} obj Optional instance to populate.
     * @return {module:egoisdk/EmailEventsListStatsFields} The populated <code>EmailEventsListStatsFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailEventsListStatsFields();

            if (data.hasOwnProperty('opens')) {
                obj['opens'] = ApiClient.convertToType(data['opens'], 'Boolean');
            }
            if (data.hasOwnProperty('clicks')) {
                obj['clicks'] = ApiClient.convertToType(data['clicks'], 'Boolean');
            }
            if (data.hasOwnProperty('complaints')) {
                obj['complaints'] = ApiClient.convertToType(data['complaints'], 'Boolean');
            }
            if (data.hasOwnProperty('unsubscribes')) {
                obj['unsubscribes'] = ApiClient.convertToType(data['unsubscribes'], 'Boolean');
            }
            if (data.hasOwnProperty('bounces')) {
                obj['bounces'] = ApiClient.convertToType(data['bounces'], 'Boolean');
            }
            if (data.hasOwnProperty('forwards')) {
                obj['forwards'] = ApiClient.convertToType(data['forwards'], 'Boolean');
            }
            if (data.hasOwnProperty('forwards_conversion')) {
                obj['forwards_conversion'] = ApiClient.convertToType(data['forwards_conversion'], 'Boolean');
            }
            if (data.hasOwnProperty('fb_likes')) {
                obj['fb_likes'] = ApiClient.convertToType(data['fb_likes'], 'Boolean');
            }
            if (data.hasOwnProperty('fb_shares')) {
                obj['fb_shares'] = ApiClient.convertToType(data['fb_shares'], 'Boolean');
            }
            if (data.hasOwnProperty('tw_shares')) {
                obj['tw_shares'] = ApiClient.convertToType(data['tw_shares'], 'Boolean');
            }
            if (data.hasOwnProperty('social_shares')) {
                obj['social_shares'] = ApiClient.convertToType(data['social_shares'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailEventsListStatsFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailEventsListStatsFields</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailEventsListStatsFields.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns True to include opens, false otherwise
     * @return {Boolean}
     */
    getOpens() {
        return this.opens;
    }

    /**
     * Sets True to include opens, false otherwise
     * @param {Boolean} opens True to include opens, false otherwise
     */
    setOpens(opens) {
        this['opens'] = opens;
    }
/**
     * Returns True to include clicks, false otherwise
     * @return {Boolean}
     */
    getClicks() {
        return this.clicks;
    }

    /**
     * Sets True to include clicks, false otherwise
     * @param {Boolean} clicks True to include clicks, false otherwise
     */
    setClicks(clicks) {
        this['clicks'] = clicks;
    }
/**
     * Returns True to include complaints, false otherwise
     * @return {Boolean}
     */
    getComplaints() {
        return this.complaints;
    }

    /**
     * Sets True to include complaints, false otherwise
     * @param {Boolean} complaints True to include complaints, false otherwise
     */
    setComplaints(complaints) {
        this['complaints'] = complaints;
    }
/**
     * Returns True to include unsubscriptions, false otherwise
     * @return {Boolean}
     */
    getUnsubscribes() {
        return this.unsubscribes;
    }

    /**
     * Sets True to include unsubscriptions, false otherwise
     * @param {Boolean} unsubscribes True to include unsubscriptions, false otherwise
     */
    setUnsubscribes(unsubscribes) {
        this['unsubscribes'] = unsubscribes;
    }
/**
     * Returns True to include bounces, false otherwise
     * @return {Boolean}
     */
    getBounces() {
        return this.bounces;
    }

    /**
     * Sets True to include bounces, false otherwise
     * @param {Boolean} bounces True to include bounces, false otherwise
     */
    setBounces(bounces) {
        this['bounces'] = bounces;
    }
/**
     * Returns True to include forwards, false otherwise
     * @return {Boolean}
     */
    getForwards() {
        return this.forwards;
    }

    /**
     * Sets True to include forwards, false otherwise
     * @param {Boolean} forwards True to include forwards, false otherwise
     */
    setForwards(forwards) {
        this['forwards'] = forwards;
    }
/**
     * Returns True to include converted forwards, false otherwise
     * @return {Boolean}
     */
    getForwardsConversion() {
        return this.forwards_conversion;
    }

    /**
     * Sets True to include converted forwards, false otherwise
     * @param {Boolean} forwardsConversion True to include converted forwards, false otherwise
     */
    setForwardsConversion(forwardsConversion) {
        this['forwards_conversion'] = forwardsConversion;
    }
/**
     * Returns True to include facebook likes, false otherwise
     * @return {Boolean}
     */
    getFbLikes() {
        return this.fb_likes;
    }

    /**
     * Sets True to include facebook likes, false otherwise
     * @param {Boolean} fbLikes True to include facebook likes, false otherwise
     */
    setFbLikes(fbLikes) {
        this['fb_likes'] = fbLikes;
    }
/**
     * Returns True to include facebook shares, false otherwise
     * @return {Boolean}
     */
    getFbShares() {
        return this.fb_shares;
    }

    /**
     * Sets True to include facebook shares, false otherwise
     * @param {Boolean} fbShares True to include facebook shares, false otherwise
     */
    setFbShares(fbShares) {
        this['fb_shares'] = fbShares;
    }
/**
     * Returns True to include twitter shares, false otherwise
     * @return {Boolean}
     */
    getTwShares() {
        return this.tw_shares;
    }

    /**
     * Sets True to include twitter shares, false otherwise
     * @param {Boolean} twShares True to include twitter shares, false otherwise
     */
    setTwShares(twShares) {
        this['tw_shares'] = twShares;
    }
/**
     * Returns True to include social shares, false otherwise
     * @return {Boolean}
     */
    getSocialShares() {
        return this.social_shares;
    }

    /**
     * Sets True to include social shares, false otherwise
     * @param {Boolean} socialShares True to include social shares, false otherwise
     */
    setSocialShares(socialShares) {
        this['social_shares'] = socialShares;
    }

}

EmailEventsListStatsFields.RequiredProperties = ["opens", "clicks", "complaints", "unsubscribes", "bounces", "forwards", "forwards_conversion", "fb_likes", "fb_shares", "tw_shares", "social_shares"];

/**
 * True to include opens, false otherwise
 * @member {Boolean} opens
 */
EmailEventsListStatsFields.prototype['opens'] = undefined;

/**
 * True to include clicks, false otherwise
 * @member {Boolean} clicks
 */
EmailEventsListStatsFields.prototype['clicks'] = undefined;

/**
 * True to include complaints, false otherwise
 * @member {Boolean} complaints
 */
EmailEventsListStatsFields.prototype['complaints'] = undefined;

/**
 * True to include unsubscriptions, false otherwise
 * @member {Boolean} unsubscribes
 */
EmailEventsListStatsFields.prototype['unsubscribes'] = undefined;

/**
 * True to include bounces, false otherwise
 * @member {Boolean} bounces
 */
EmailEventsListStatsFields.prototype['bounces'] = undefined;

/**
 * True to include forwards, false otherwise
 * @member {Boolean} forwards
 */
EmailEventsListStatsFields.prototype['forwards'] = undefined;

/**
 * True to include converted forwards, false otherwise
 * @member {Boolean} forwards_conversion
 */
EmailEventsListStatsFields.prototype['forwards_conversion'] = undefined;

/**
 * True to include facebook likes, false otherwise
 * @member {Boolean} fb_likes
 */
EmailEventsListStatsFields.prototype['fb_likes'] = undefined;

/**
 * True to include facebook shares, false otherwise
 * @member {Boolean} fb_shares
 */
EmailEventsListStatsFields.prototype['fb_shares'] = undefined;

/**
 * True to include twitter shares, false otherwise
 * @member {Boolean} tw_shares
 */
EmailEventsListStatsFields.prototype['tw_shares'] = undefined;

/**
 * True to include social shares, false otherwise
 * @member {Boolean} social_shares
 */
EmailEventsListStatsFields.prototype['social_shares'] = undefined;






export default EmailEventsListStatsFields;

