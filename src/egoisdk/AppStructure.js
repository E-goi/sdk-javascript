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
import AppStructureList from './AppStructureList';

/**
 * The AppStructure model module.
 * @module egoisdk/AppStructure
 * @version 1.1.6RC1
 */
class AppStructure {
    /**
     * Constructs a new <code>AppStructure</code>.
     * Structure of an E-goi app.
     * @alias module:egoisdk/AppStructure
     */
    constructor() { 
        
        AppStructure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AppStructure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/AppStructure} obj Optional instance to populate.
     * @return {module:egoisdk/AppStructure} The populated <code>AppStructure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppStructure();

            if (data.hasOwnProperty('app_id')) {
                obj['app_id'] = ApiClient.convertToType(data['app_id'], 'String');
            }
            if (data.hasOwnProperty('list')) {
                obj['list'] = AppStructureList.constructFromObject(data['list']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('two_steps_config')) {
                obj['two_steps_config'] = ApiClient.convertToType(data['two_steps_config'], 'String');
            }
            if (data.hasOwnProperty('development')) {
                obj['development'] = ApiClient.convertToType(data['development'], 'Boolean');
            }
            if (data.hasOwnProperty('created')) {
                obj['created'] = ApiClient.convertToType(data['created'], 'String');
            }
            if (data.hasOwnProperty('updated')) {
                obj['updated'] = ApiClient.convertToType(data['updated'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AppStructure</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AppStructure</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['app_id'] && !(typeof data['app_id'] === 'string' || data['app_id'] instanceof String)) {
            throw new Error("Expected the field `app_id` to be a primitive type in the JSON string but got " + data['app_id']);
        }
        // validate the optional field `list`
        if (data['list']) { // data not null
          AppStructureList.validateJSON(data['list']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['two_steps_config'] && !(typeof data['two_steps_config'] === 'string' || data['two_steps_config'] instanceof String)) {
            throw new Error("Expected the field `two_steps_config` to be a primitive type in the JSON string but got " + data['two_steps_config']);
        }
        // ensure the json data is a string
        if (data['created'] && !(typeof data['created'] === 'string' || data['created'] instanceof String)) {
            throw new Error("Expected the field `created` to be a primitive type in the JSON string but got " + data['created']);
        }
        // ensure the json data is a string
        if (data['updated'] && !(typeof data['updated'] === 'string' || data['updated'] instanceof String)) {
            throw new Error("Expected the field `updated` to be a primitive type in the JSON string but got " + data['updated']);
        }

        return true;
    }

/**
     * Returns The ID of the app.
     * @return {String}
     */
    getAppId() {
        return this.app_id;
    }

    /**
     * Sets The ID of the app.
     * @param {String} appId The ID of the app.
     */
    setAppId(appId) {
        this['app_id'] = appId;
    }
/**
     * @return {module:egoisdk/AppStructureList}
     */
    getList() {
        return this.list;
    }

    /**
     * @param {module:egoisdk/AppStructureList} list
     */
    setList(list) {
        this['list'] = list;
    }
/**
     * Returns The name of the app.
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets The name of the app.
     * @param {String} name The name of the app.
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns The description of the app.
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * Sets The description of the app.
     * @param {String} description The description of the app.
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * Returns The column of the list used to map the token.
     * @return {String}
     */
    getTwoStepsConfig() {
        return this.two_steps_config;
    }

    /**
     * Sets The column of the list used to map the token.
     * @param {String} twoStepsConfig The column of the list used to map the token.
     */
    setTwoStepsConfig(twoStepsConfig) {
        this['two_steps_config'] = twoStepsConfig;
    }
/**
     * Returns Is app a development app.
     * @return {Boolean}
     */
    getDevelopment() {
        return this.development;
    }

    /**
     * Sets Is app a development app.
     * @param {Boolean} development Is app a development app.
     */
    setDevelopment(development) {
        this['development'] = development;
    }
/**
     * Returns When the app was created.
     * @return {String}
     */
    getCreated() {
        return this.created;
    }

    /**
     * Sets When the app was created.
     * @param {String} created When the app was created.
     */
    setCreated(created) {
        this['created'] = created;
    }
/**
     * Returns The last time the app was updated.
     * @return {String}
     */
    getUpdated() {
        return this.updated;
    }

    /**
     * Sets The last time the app was updated.
     * @param {String} updated The last time the app was updated.
     */
    setUpdated(updated) {
        this['updated'] = updated;
    }

}



/**
 * The ID of the app.
 * @member {String} app_id
 */
AppStructure.prototype['app_id'] = undefined;

/**
 * @member {module:egoisdk/AppStructureList} list
 */
AppStructure.prototype['list'] = undefined;

/**
 * The name of the app.
 * @member {String} name
 */
AppStructure.prototype['name'] = undefined;

/**
 * The description of the app.
 * @member {String} description
 */
AppStructure.prototype['description'] = undefined;

/**
 * The column of the list used to map the token.
 * @member {String} two_steps_config
 */
AppStructure.prototype['two_steps_config'] = undefined;

/**
 * Is app a development app.
 * @member {Boolean} development
 */
AppStructure.prototype['development'] = undefined;

/**
 * When the app was created.
 * @member {String} created
 */
AppStructure.prototype['created'] = undefined;

/**
 * The last time the app was updated.
 * @member {String} updated
 */
AppStructure.prototype['updated'] = undefined;






export default AppStructure;

