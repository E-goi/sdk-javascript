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
 * The ContactStatsEmailStats model module.
 * @module egoisdk/ContactStatsEmailStats
 * @version 1.1.6RC1
 */
class ContactStatsEmailStats {
    /**
     * Constructs a new <code>ContactStatsEmailStats</code>.
     * Email stats of the contact
     * @alias module:egoisdk/ContactStatsEmailStats
     */
    constructor() { 
        
        ContactStatsEmailStats.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactStatsEmailStats</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ContactStatsEmailStats} obj Optional instance to populate.
     * @return {module:egoisdk/ContactStatsEmailStats} The populated <code>ContactStatsEmailStats</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactStatsEmailStats();

            if (data.hasOwnProperty('sent')) {
                obj['sent'] = ApiClient.convertToType(data['sent'], 'Number');
            }
            if (data.hasOwnProperty('opens')) {
                obj['opens'] = ApiClient.convertToType(data['opens'], 'Number');
            }
            if (data.hasOwnProperty('clicks')) {
                obj['clicks'] = ApiClient.convertToType(data['clicks'], 'Number');
            }
            if (data.hasOwnProperty('soft_bounces')) {
                obj['soft_bounces'] = ApiClient.convertToType(data['soft_bounces'], 'Number');
            }
            if (data.hasOwnProperty('hard_bounces')) {
                obj['hard_bounces'] = ApiClient.convertToType(data['hard_bounces'], 'Number');
            }
            if (data.hasOwnProperty('forwards')) {
                obj['forwards'] = ApiClient.convertToType(data['forwards'], 'Number');
            }
            if (data.hasOwnProperty('conversions')) {
                obj['conversions'] = ApiClient.convertToType(data['conversions'], 'Number');
            }
            if (data.hasOwnProperty('social_actions')) {
                obj['social_actions'] = ApiClient.convertToType(data['social_actions'], 'Number');
            }
            if (data.hasOwnProperty('last_send_date')) {
                obj['last_send_date'] = ApiClient.convertToType(data['last_send_date'], 'Date');
            }
            if (data.hasOwnProperty('last_open_date')) {
                obj['last_open_date'] = ApiClient.convertToType(data['last_open_date'], 'Date');
            }
            if (data.hasOwnProperty('last_click_date')) {
                obj['last_click_date'] = ApiClient.convertToType(data['last_click_date'], 'Date');
            }
            if (data.hasOwnProperty('last_open_country')) {
                obj['last_open_country'] = ApiClient.convertToType(data['last_open_country'], 'String');
            }
            if (data.hasOwnProperty('last_open_region')) {
                obj['last_open_region'] = ApiClient.convertToType(data['last_open_region'], 'String');
            }
            if (data.hasOwnProperty('last_open_city')) {
                obj['last_open_city'] = ApiClient.convertToType(data['last_open_city'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactStatsEmailStats</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactStatsEmailStats</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['last_open_country'] && !(typeof data['last_open_country'] === 'string' || data['last_open_country'] instanceof String)) {
            throw new Error("Expected the field `last_open_country` to be a primitive type in the JSON string but got " + data['last_open_country']);
        }
        // ensure the json data is a string
        if (data['last_open_region'] && !(typeof data['last_open_region'] === 'string' || data['last_open_region'] instanceof String)) {
            throw new Error("Expected the field `last_open_region` to be a primitive type in the JSON string but got " + data['last_open_region']);
        }
        // ensure the json data is a string
        if (data['last_open_city'] && !(typeof data['last_open_city'] === 'string' || data['last_open_city'] instanceof String)) {
            throw new Error("Expected the field `last_open_city` to be a primitive type in the JSON string but got " + data['last_open_city']);
        }

        return true;
    }

/**
     * Returns Emails sent to the contact
     * @return {Number}
     */
    getSent() {
        return this.sent;
    }

    /**
     * Sets Emails sent to the contact
     * @param {Number} sent Emails sent to the contact
     */
    setSent(sent) {
        this['sent'] = sent;
    }
/**
     * Returns Emails opened by the contact
     * @return {Number}
     */
    getOpens() {
        return this.opens;
    }

    /**
     * Sets Emails opened by the contact
     * @param {Number} opens Emails opened by the contact
     */
    setOpens(opens) {
        this['opens'] = opens;
    }
/**
     * Returns Total number of clicks made by the contact
     * @return {Number}
     */
    getClicks() {
        return this.clicks;
    }

    /**
     * Sets Total number of clicks made by the contact
     * @param {Number} clicks Total number of clicks made by the contact
     */
    setClicks(clicks) {
        this['clicks'] = clicks;
    }
/**
     * Returns Soft bounces for the contact
     * @return {Number}
     */
    getSoftBounces() {
        return this.soft_bounces;
    }

    /**
     * Sets Soft bounces for the contact
     * @param {Number} softBounces Soft bounces for the contact
     */
    setSoftBounces(softBounces) {
        this['soft_bounces'] = softBounces;
    }
/**
     * Returns Hard bounces for the contact
     * @return {Number}
     */
    getHardBounces() {
        return this.hard_bounces;
    }

    /**
     * Sets Hard bounces for the contact
     * @param {Number} hardBounces Hard bounces for the contact
     */
    setHardBounces(hardBounces) {
        this['hard_bounces'] = hardBounces;
    }
/**
     * Returns Emails forwarded by the contact
     * @return {Number}
     */
    getForwards() {
        return this.forwards;
    }

    /**
     * Sets Emails forwarded by the contact
     * @param {Number} forwards Emails forwarded by the contact
     */
    setForwards(forwards) {
        this['forwards'] = forwards;
    }
/**
     * Returns Total of conversions
     * @return {Number}
     */
    getConversions() {
        return this.conversions;
    }

    /**
     * Sets Total of conversions
     * @param {Number} conversions Total of conversions
     */
    setConversions(conversions) {
        this['conversions'] = conversions;
    }
/**
     * Returns Total of social actions for the contact
     * @return {Number}
     */
    getSocialActions() {
        return this.social_actions;
    }

    /**
     * Sets Total of social actions for the contact
     * @param {Number} socialActions Total of social actions for the contact
     */
    setSocialActions(socialActions) {
        this['social_actions'] = socialActions;
    }
/**
     * Returns Date of the last email sent to the contact
     * @return {Date}
     */
    getLastSendDate() {
        return this.last_send_date;
    }

    /**
     * Sets Date of the last email sent to the contact
     * @param {Date} lastSendDate Date of the last email sent to the contact
     */
    setLastSendDate(lastSendDate) {
        this['last_send_date'] = lastSendDate;
    }
/**
     * Returns Date of the last email open of the contact
     * @return {Date}
     */
    getLastOpenDate() {
        return this.last_open_date;
    }

    /**
     * Sets Date of the last email open of the contact
     * @param {Date} lastOpenDate Date of the last email open of the contact
     */
    setLastOpenDate(lastOpenDate) {
        this['last_open_date'] = lastOpenDate;
    }
/**
     * Returns Date of the last email click of the contact
     * @return {Date}
     */
    getLastClickDate() {
        return this.last_click_date;
    }

    /**
     * Sets Date of the last email click of the contact
     * @param {Date} lastClickDate Date of the last email click of the contact
     */
    setLastClickDate(lastClickDate) {
        this['last_click_date'] = lastClickDate;
    }
/**
     * Returns Country where the last email for that contact was opened
     * @return {String}
     */
    getLastOpenCountry() {
        return this.last_open_country;
    }

    /**
     * Sets Country where the last email for that contact was opened
     * @param {String} lastOpenCountry Country where the last email for that contact was opened
     */
    setLastOpenCountry(lastOpenCountry) {
        this['last_open_country'] = lastOpenCountry;
    }
/**
     * Returns Region where the last email for that contact was opened
     * @return {String}
     */
    getLastOpenRegion() {
        return this.last_open_region;
    }

    /**
     * Sets Region where the last email for that contact was opened
     * @param {String} lastOpenRegion Region where the last email for that contact was opened
     */
    setLastOpenRegion(lastOpenRegion) {
        this['last_open_region'] = lastOpenRegion;
    }
/**
     * Returns City where the last email for that contact was opened
     * @return {String}
     */
    getLastOpenCity() {
        return this.last_open_city;
    }

    /**
     * Sets City where the last email for that contact was opened
     * @param {String} lastOpenCity City where the last email for that contact was opened
     */
    setLastOpenCity(lastOpenCity) {
        this['last_open_city'] = lastOpenCity;
    }

}



/**
 * Emails sent to the contact
 * @member {Number} sent
 */
ContactStatsEmailStats.prototype['sent'] = undefined;

/**
 * Emails opened by the contact
 * @member {Number} opens
 */
ContactStatsEmailStats.prototype['opens'] = undefined;

/**
 * Total number of clicks made by the contact
 * @member {Number} clicks
 */
ContactStatsEmailStats.prototype['clicks'] = undefined;

/**
 * Soft bounces for the contact
 * @member {Number} soft_bounces
 */
ContactStatsEmailStats.prototype['soft_bounces'] = undefined;

/**
 * Hard bounces for the contact
 * @member {Number} hard_bounces
 */
ContactStatsEmailStats.prototype['hard_bounces'] = undefined;

/**
 * Emails forwarded by the contact
 * @member {Number} forwards
 */
ContactStatsEmailStats.prototype['forwards'] = undefined;

/**
 * Total of conversions
 * @member {Number} conversions
 */
ContactStatsEmailStats.prototype['conversions'] = undefined;

/**
 * Total of social actions for the contact
 * @member {Number} social_actions
 */
ContactStatsEmailStats.prototype['social_actions'] = undefined;

/**
 * Date of the last email sent to the contact
 * @member {Date} last_send_date
 */
ContactStatsEmailStats.prototype['last_send_date'] = undefined;

/**
 * Date of the last email open of the contact
 * @member {Date} last_open_date
 */
ContactStatsEmailStats.prototype['last_open_date'] = undefined;

/**
 * Date of the last email click of the contact
 * @member {Date} last_click_date
 */
ContactStatsEmailStats.prototype['last_click_date'] = undefined;

/**
 * Country where the last email for that contact was opened
 * @member {String} last_open_country
 */
ContactStatsEmailStats.prototype['last_open_country'] = undefined;

/**
 * Region where the last email for that contact was opened
 * @member {String} last_open_region
 */
ContactStatsEmailStats.prototype['last_open_region'] = undefined;

/**
 * City where the last email for that contact was opened
 * @member {String} last_open_city
 */
ContactStatsEmailStats.prototype['last_open_city'] = undefined;






export default ContactStatsEmailStats;

