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
 * The EmailClicksByUrlCampaignFields model module.
 * @module egoisdk/EmailClicksByUrlCampaignFields
 * @version 1.1.6RC1
 */
class EmailClicksByUrlCampaignFields {
    /**
     * Constructs a new <code>EmailClicksByUrlCampaignFields</code>.
     * Campaign fields to include in the report
     * @alias module:egoisdk/EmailClicksByUrlCampaignFields
     * @param internalName {Boolean} True to include the internal name of the campaign, false otherwise
     * @param campaignHash {Boolean} True to include the hash of the campaign, false otherwise
     * @param url {Boolean} True to include the URL of the campaign, false otherwise
     */
    constructor(internalName, campaignHash, url) { 
        
        EmailClicksByUrlCampaignFields.initialize(this, internalName, campaignHash, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, internalName, campaignHash, url) { 
        obj['internal_name'] = internalName;
        obj['campaign_hash'] = campaignHash;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>EmailClicksByUrlCampaignFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/EmailClicksByUrlCampaignFields} obj Optional instance to populate.
     * @return {module:egoisdk/EmailClicksByUrlCampaignFields} The populated <code>EmailClicksByUrlCampaignFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailClicksByUrlCampaignFields();

            if (data.hasOwnProperty('internal_name')) {
                obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'Boolean');
            }
            if (data.hasOwnProperty('campaign_hash')) {
                obj['campaign_hash'] = ApiClient.convertToType(data['campaign_hash'], 'Boolean');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'Boolean');
            }
            if (data.hasOwnProperty('send_date')) {
                obj['send_date'] = ApiClient.convertToType(data['send_date'], 'Boolean');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'Boolean');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Boolean');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'Boolean');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'Boolean');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'Boolean');
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = ApiClient.convertToType(data['program'], 'Boolean');
            }
            if (data.hasOwnProperty('os')) {
                obj['os'] = ApiClient.convertToType(data['os'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailClicksByUrlCampaignFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailClicksByUrlCampaignFields</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailClicksByUrlCampaignFields.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns True to include the internal name of the campaign, false otherwise
     * @return {Boolean}
     */
    getInternalName() {
        return this.internal_name;
    }

    /**
     * Sets True to include the internal name of the campaign, false otherwise
     * @param {Boolean} internalName True to include the internal name of the campaign, false otherwise
     */
    setInternalName(internalName) {
        this['internal_name'] = internalName;
    }
/**
     * Returns True to include the hash of the campaign, false otherwise
     * @return {Boolean}
     */
    getCampaignHash() {
        return this.campaign_hash;
    }

    /**
     * Sets True to include the hash of the campaign, false otherwise
     * @param {Boolean} campaignHash True to include the hash of the campaign, false otherwise
     */
    setCampaignHash(campaignHash) {
        this['campaign_hash'] = campaignHash;
    }
/**
     * Returns True to include the URL of the campaign, false otherwise
     * @return {Boolean}
     */
    getUrl() {
        return this.url;
    }

    /**
     * Sets True to include the URL of the campaign, false otherwise
     * @param {Boolean} url True to include the URL of the campaign, false otherwise
     */
    setUrl(url) {
        this['url'] = url;
    }
/**
     * Returns True to include the send date of the campaign, false otherwise
     * @return {Boolean}
     */
    getSendDate() {
        return this.send_date;
    }

    /**
     * Sets True to include the send date of the campaign, false otherwise
     * @param {Boolean} sendDate True to include the send date of the campaign, false otherwise
     */
    setSendDate(sendDate) {
        this['send_date'] = sendDate;
    }
/**
     * Returns True to include the group of the campaign, false otherwise
     * @return {Boolean}
     */
    getGroup() {
        return this.group;
    }

    /**
     * Sets True to include the group of the campaign, false otherwise
     * @param {Boolean} group True to include the group of the campaign, false otherwise
     */
    setGroup(group) {
        this['group'] = group;
    }
/**
     * Returns True to include the channel of the campaign, false otherwise
     * @return {Boolean}
     */
    getChannel() {
        return this.channel;
    }

    /**
     * Sets True to include the channel of the campaign, false otherwise
     * @param {Boolean} channel True to include the channel of the campaign, false otherwise
     */
    setChannel(channel) {
        this['channel'] = channel;
    }
/**
     * Returns True to include the type of the campaign, false otherwise
     * @return {Boolean}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets True to include the type of the campaign, false otherwise
     * @param {Boolean} type True to include the type of the campaign, false otherwise
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns True to include city information, false otherwise (deprecated)
     * @return {Boolean}
     */
    getCity() {
        return this.city;
    }

    /**
     * Sets True to include city information, false otherwise (deprecated)
     * @param {Boolean} city True to include city information, false otherwise (deprecated)
     */
    setCity(city) {
        this['city'] = city;
    }
/**
     * Returns True to include country information, false otherwise (deprecated)
     * @return {Boolean}
     */
    getCountry() {
        return this.country;
    }

    /**
     * Sets True to include country information, false otherwise (deprecated)
     * @param {Boolean} country True to include country information, false otherwise (deprecated)
     */
    setCountry(country) {
        this['country'] = country;
    }
/**
     * Returns True to include region information, false otherwise (deprecated)
     * @return {Boolean}
     */
    getRegion() {
        return this.region;
    }

    /**
     * Sets True to include region information, false otherwise (deprecated)
     * @param {Boolean} region True to include region information, false otherwise (deprecated)
     */
    setRegion(region) {
        this['region'] = region;
    }
/**
     * Returns True to include device program information, false otherwise (deprecated)
     * @return {Boolean}
     */
    getProgram() {
        return this.program;
    }

    /**
     * Sets True to include device program information, false otherwise (deprecated)
     * @param {Boolean} program True to include device program information, false otherwise (deprecated)
     */
    setProgram(program) {
        this['program'] = program;
    }
/**
     * Returns True to include operating system information, false otherwise (deprecated)
     * @return {Boolean}
     */
    getOs() {
        return this.os;
    }

    /**
     * Sets True to include operating system information, false otherwise (deprecated)
     * @param {Boolean} os True to include operating system information, false otherwise (deprecated)
     */
    setOs(os) {
        this['os'] = os;
    }

}

EmailClicksByUrlCampaignFields.RequiredProperties = ["internal_name", "campaign_hash", "url"];

/**
 * True to include the internal name of the campaign, false otherwise
 * @member {Boolean} internal_name
 */
EmailClicksByUrlCampaignFields.prototype['internal_name'] = undefined;

/**
 * True to include the hash of the campaign, false otherwise
 * @member {Boolean} campaign_hash
 */
EmailClicksByUrlCampaignFields.prototype['campaign_hash'] = undefined;

/**
 * True to include the URL of the campaign, false otherwise
 * @member {Boolean} url
 */
EmailClicksByUrlCampaignFields.prototype['url'] = undefined;

/**
 * True to include the send date of the campaign, false otherwise
 * @member {Boolean} send_date
 */
EmailClicksByUrlCampaignFields.prototype['send_date'] = undefined;

/**
 * True to include the group of the campaign, false otherwise
 * @member {Boolean} group
 */
EmailClicksByUrlCampaignFields.prototype['group'] = undefined;

/**
 * True to include the channel of the campaign, false otherwise
 * @member {Boolean} channel
 */
EmailClicksByUrlCampaignFields.prototype['channel'] = undefined;

/**
 * True to include the type of the campaign, false otherwise
 * @member {Boolean} type
 */
EmailClicksByUrlCampaignFields.prototype['type'] = undefined;

/**
 * True to include city information, false otherwise (deprecated)
 * @member {Boolean} city
 */
EmailClicksByUrlCampaignFields.prototype['city'] = undefined;

/**
 * True to include country information, false otherwise (deprecated)
 * @member {Boolean} country
 */
EmailClicksByUrlCampaignFields.prototype['country'] = undefined;

/**
 * True to include region information, false otherwise (deprecated)
 * @member {Boolean} region
 */
EmailClicksByUrlCampaignFields.prototype['region'] = undefined;

/**
 * True to include device program information, false otherwise (deprecated)
 * @member {Boolean} program
 */
EmailClicksByUrlCampaignFields.prototype['program'] = undefined;

/**
 * True to include operating system information, false otherwise (deprecated)
 * @member {Boolean} os
 */
EmailClicksByUrlCampaignFields.prototype['os'] = undefined;






export default EmailClicksByUrlCampaignFields;

