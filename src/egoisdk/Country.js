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
 * The Country model module.
 * @module egoisdk/Country
 * @version 1.1.2RC1
 */
class Country {
    /**
     * Constructs a new <code>Country</code>.
     * Country schema
     * @alias module:egoisdk/Country
     */
    constructor() { 
        
        Country.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Country</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/Country} obj Optional instance to populate.
     * @return {module:egoisdk/Country} The populated <code>Country</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Country();

            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('iso_code')) {
                obj['iso_code'] = ApiClient.convertToType(data['iso_code'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Country</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Country</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['iso_code'] && !(typeof data['iso_code'] === 'string' || data['iso_code'] instanceof String)) {
            throw new Error("Expected the field `iso_code` to be a primitive type in the JSON string but got " + data['iso_code']);
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['country_code'] && !(typeof data['country_code'] === 'string' || data['country_code'] instanceof String)) {
            throw new Error("Expected the field `country_code` to be a primitive type in the JSON string but got " + data['country_code']);
        }

        return true;
    }

/**
     * minimum: 1
     * @return {Number}
     */
    getCountry() {
        return this.country;
    }

    /**
     * @param {Number} country
     */
    setCountry(country) {
        this['country'] = country;
    }
/**
     * Returns Name of the country
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the country
     * @param {String} name Name of the country
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns ISO code of the country
     * @return {String}
     */
    getIsoCode() {
        return this.iso_code;
    }

    /**
     * Sets ISO code of the country
     * @param {String} isoCode ISO code of the country
     */
    setIsoCode(isoCode) {
        this['iso_code'] = isoCode;
    }
/**
     * Returns Currency of the country
     * @return {String}
     */
    getCurrency() {
        return this.currency;
    }

    /**
     * Sets Currency of the country
     * @param {String} currency Currency of the country
     */
    setCurrency(currency) {
        this['currency'] = currency;
    }
/**
     * Returns Country code to be used in phone numbers
     * @return {String}
     */
    getCountryCode() {
        return this.country_code;
    }

    /**
     * Sets Country code to be used in phone numbers
     * @param {String} countryCode Country code to be used in phone numbers
     */
    setCountryCode(countryCode) {
        this['country_code'] = countryCode;
    }

}



/**
 * @member {Number} country
 */
Country.prototype['country'] = undefined;

/**
 * Name of the country
 * @member {String} name
 */
Country.prototype['name'] = undefined;

/**
 * ISO code of the country
 * @member {String} iso_code
 */
Country.prototype['iso_code'] = undefined;

/**
 * Currency of the country
 * @member {String} currency
 */
Country.prototype['currency'] = undefined;

/**
 * Country code to be used in phone numbers
 * @member {String} country_code
 */
Country.prototype['country_code'] = undefined;






export default Country;

