/**
 * APIv3 (New)
 *  # Introduction This is our new version of API. We invite you to start using it and give us your feedback # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.  The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.      BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication  We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:     #!/bin/bash     curl -X GET 'https://api.egoiapp.com/my-account' \\     -H 'accept: application/json' \\     -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:     #!/bin/bash     curl -X POST 'http://api.egoiapp.com/tags' \\     -H 'accept: application/json' \\     -H 'Apikey: <YOUR_APY_KEY>' \\     -H 'Content-Type: application/json' \\     -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * <a href='https://github.com/E-goi/sdk-java'>Java</a>  * <a href='https://github.com/E-goi/sdk-php'>PHP</a>  * <a href='https://github.com/E-goi/sdk-python'>Python</a>  * <a href='https://github.com/E-goi/sdk-ruby'>Ruby</a>  * <a href='https://github.com/E-goi/sdk-javascript'>Javascript</a>  * <a href='https://github.com/E-goi/sdk-csharp'>C#</a>  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you'll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation's requests, it's advised the request's division in batches that have each one less than 20MB.  # Timeouts Timeouts set a maximum waiting time on a request's response. Our API, sets a default timeout for each request and when breached, you'll receive an HTTP **408 (Request Timeout)** error code. You should take into consideration that response times can vary widely based on the complexity of the request, amount of data being analyzed, and the load on the system and workspace at the time of the query. When dealing with such errors, you should first attempt to reduce the complexity and amount of data under analysis, and only then, if problems are still occurring ask for support.  For all these reasons, the default timeout for each request is **10 Seconds** and any request that creates or modifies data (**POST**, **PATCH** and **PUT**) will have a timeout of **60 Seconds**. Specific timeouts may exist for specific requests, these can be found in the request's documentation.  # Callbacks A callback is an asynchronous API request that originates from the API server and is sent to the client in response to a previous request sent by that client.  The API will make a **POST** request to the address defined in the URL with the information regarding the event of interest and share data related to that event.  ***Note:*** Only http or https protocols are supported in the Url parameter.  <security-definitions/>
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
 * The EmailClicksByUrlCampaignFields model module.
 * @module egoisdk/EmailClicksByUrlCampaignFields
 * @version 1.1.2RC1
 */
class EmailClicksByUrlCampaignFields {
    /**
     * Constructs a new <code>EmailClicksByUrlCampaignFields</code>.
     * Campaign fields to include in the report
     * @alias module:egoisdk/EmailClicksByUrlCampaignFields
     * @param internalName {Boolean} True to include the internal name of the campaign, false otherwise
     * @param campaignHash {Boolean} True to include the hash of the campaign, false otherwise
     * @param url {Boolean} True to include the URL of the campaign, false otherwise
     * @param city {Boolean} True to include city information, false otherwise
     * @param country {Boolean} True to include country information, false otherwise
     * @param region {Boolean} True to include region information, false otherwise
     * @param program {Boolean} True to include device program information, false otherwise
     * @param os {Boolean} True to include operating system information, false otherwise
     */
    constructor(internalName, campaignHash, url, city, country, region, program, os) { 
        
        EmailClicksByUrlCampaignFields.initialize(this, internalName, campaignHash, url, city, country, region, program, os);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, internalName, campaignHash, url, city, country, region, program, os) { 
        obj['internal_name'] = internalName;
        obj['campaign_hash'] = campaignHash;
        obj['url'] = url;
        obj['city'] = city;
        obj['country'] = country;
        obj['region'] = region;
        obj['program'] = program;
        obj['os'] = os;
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
     * Returns True to include city information, false otherwise
     * @return {Boolean}
     */
    getCity() {
        return this.city;
    }

    /**
     * Sets True to include city information, false otherwise
     * @param {Boolean} city True to include city information, false otherwise
     */
    setCity(city) {
        this['city'] = city;
    }
/**
     * Returns True to include country information, false otherwise
     * @return {Boolean}
     */
    getCountry() {
        return this.country;
    }

    /**
     * Sets True to include country information, false otherwise
     * @param {Boolean} country True to include country information, false otherwise
     */
    setCountry(country) {
        this['country'] = country;
    }
/**
     * Returns True to include region information, false otherwise
     * @return {Boolean}
     */
    getRegion() {
        return this.region;
    }

    /**
     * Sets True to include region information, false otherwise
     * @param {Boolean} region True to include region information, false otherwise
     */
    setRegion(region) {
        this['region'] = region;
    }
/**
     * Returns True to include device program information, false otherwise
     * @return {Boolean}
     */
    getProgram() {
        return this.program;
    }

    /**
     * Sets True to include device program information, false otherwise
     * @param {Boolean} program True to include device program information, false otherwise
     */
    setProgram(program) {
        this['program'] = program;
    }
/**
     * Returns True to include operating system information, false otherwise
     * @return {Boolean}
     */
    getOs() {
        return this.os;
    }

    /**
     * Sets True to include operating system information, false otherwise
     * @param {Boolean} os True to include operating system information, false otherwise
     */
    setOs(os) {
        this['os'] = os;
    }

}

EmailClicksByUrlCampaignFields.RequiredProperties = ["internal_name", "campaign_hash", "url", "city", "country", "region", "program", "os"];

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
 * True to include city information, false otherwise
 * @member {Boolean} city
 */
EmailClicksByUrlCampaignFields.prototype['city'] = undefined;

/**
 * True to include country information, false otherwise
 * @member {Boolean} country
 */
EmailClicksByUrlCampaignFields.prototype['country'] = undefined;

/**
 * True to include region information, false otherwise
 * @member {Boolean} region
 */
EmailClicksByUrlCampaignFields.prototype['region'] = undefined;

/**
 * True to include device program information, false otherwise
 * @member {Boolean} program
 */
EmailClicksByUrlCampaignFields.prototype['program'] = undefined;

/**
 * True to include operating system information, false otherwise
 * @member {Boolean} os
 */
EmailClicksByUrlCampaignFields.prototype['os'] = undefined;






export default EmailClicksByUrlCampaignFields;

