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
import ImportOrdersBulkBulkRequestItems from './ImportOrdersBulkBulkRequestItems';

/**
 * The ImportOrdersBulkBulkRequest model module.
 * @module egoisdk/ImportOrdersBulkBulkRequest
 * @version 1.1.6RC1
 */
class ImportOrdersBulkBulkRequest {
    /**
     * Constructs a new <code>ImportOrdersBulkBulkRequest</code>.
     * Order data
     * @alias module:egoisdk/ImportOrdersBulkBulkRequest
     * @param orderId {String} Ecommerce order id
     * @param revenue {Number} Ecommerce order revenue
     * @param storeUrl {String} Ecommerce store url
     * @param date {Date} Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
     * @param items {Array.<module:egoisdk/ImportOrdersBulkBulkRequestItems>} Array of ordered products
     */
    constructor(orderId, revenue, storeUrl, date, items) { 
        
        ImportOrdersBulkBulkRequest.initialize(this, orderId, revenue, storeUrl, date, items);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, orderId, revenue, storeUrl, date, items) { 
        obj['order_id'] = orderId;
        obj['revenue'] = revenue;
        obj['store_url'] = storeUrl;
        obj['date'] = date;
        obj['items'] = items;
    }

    /**
     * Constructs a <code>ImportOrdersBulkBulkRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ImportOrdersBulkBulkRequest} obj Optional instance to populate.
     * @return {module:egoisdk/ImportOrdersBulkBulkRequest} The populated <code>ImportOrdersBulkBulkRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportOrdersBulkBulkRequest();

            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('revenue')) {
                obj['revenue'] = ApiClient.convertToType(data['revenue'], 'Number');
            }
            if (data.hasOwnProperty('store_url')) {
                obj['store_url'] = ApiClient.convertToType(data['store_url'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ImportOrdersBulkBulkRequestItems]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ImportOrdersBulkBulkRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ImportOrdersBulkBulkRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ImportOrdersBulkBulkRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['order_id'] && !(typeof data['order_id'] === 'string' || data['order_id'] instanceof String)) {
            throw new Error("Expected the field `order_id` to be a primitive type in the JSON string but got " + data['order_id']);
        }
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['store_url'] && !(typeof data['store_url'] === 'string' || data['store_url'] instanceof String)) {
            throw new Error("Expected the field `store_url` to be a primitive type in the JSON string but got " + data['store_url']);
        }
        // validate the optional field `date`
        if (data['date']) { // data not null
          Date.validateJSON(data['date']);
        }
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                ImportOrdersBulkBulkRequestItems.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * Returns Ecommerce order id
     * @return {String}
     */
    getOrderId() {
        return this.order_id;
    }

    /**
     * Sets Ecommerce order id
     * @param {String} orderId Ecommerce order id
     */
    setOrderId(orderId) {
        this['order_id'] = orderId;
    }
/**
     * Returns Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid)
     * @return {String}
     */
    getContactId() {
        return this.contact_id;
    }

    /**
     * Sets Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid)
     * @param {String} contactId Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid)
     */
    setContactId(contactId) {
        this['contact_id'] = contactId;
    }
/**
     * Returns Ecommerce order revenue
     * minimum: 0
     * @return {Number}
     */
    getRevenue() {
        return this.revenue;
    }

    /**
     * Sets Ecommerce order revenue
     * @param {Number} revenue Ecommerce order revenue
     */
    setRevenue(revenue) {
        this['revenue'] = revenue;
    }
/**
     * Returns Ecommerce store url
     * @return {String}
     */
    getStoreUrl() {
        return this.store_url;
    }

    /**
     * Sets Ecommerce store url
     * @param {String} storeUrl Ecommerce store url
     */
    setStoreUrl(storeUrl) {
        this['store_url'] = storeUrl;
    }
/**
     * Returns Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
     * @return {Date}
     */
    getDate() {
        return this.date;
    }

    /**
     * Sets Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
     * @param {Date} date Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
     */
    setDate(date) {
        this['date'] = date;
    }
/**
     * Returns Array of ordered products
     * @return {Array.<module:egoisdk/ImportOrdersBulkBulkRequestItems>}
     */
    getItems() {
        return this.items;
    }

    /**
     * Sets Array of ordered products
     * @param {Array.<module:egoisdk/ImportOrdersBulkBulkRequestItems>} items Array of ordered products
     */
    setItems(items) {
        this['items'] = items;
    }

}

ImportOrdersBulkBulkRequest.RequiredProperties = ["order_id", "revenue", "store_url", "date", "items"];

/**
 * Ecommerce order id
 * @member {String} order_id
 */
ImportOrdersBulkBulkRequest.prototype['order_id'] = undefined;

/**
 * Contact ID is any non-empty unique string identifying the user (such as an email address or e-goi uid)
 * @member {String} contact_id
 */
ImportOrdersBulkBulkRequest.prototype['contact_id'] = undefined;

/**
 * Ecommerce order revenue
 * @member {Number} revenue
 */
ImportOrdersBulkBulkRequest.prototype['revenue'] = undefined;

/**
 * Ecommerce store url
 * @member {String} store_url
 */
ImportOrdersBulkBulkRequest.prototype['store_url'] = undefined;

/**
 * Ecommerce order date (For technical reasons, all orders synchronized will have the date of synchronization.)
 * @member {Date} date
 */
ImportOrdersBulkBulkRequest.prototype['date'] = undefined;

/**
 * Array of ordered products
 * @member {Array.<module:egoisdk/ImportOrdersBulkBulkRequestItems>} items
 */
ImportOrdersBulkBulkRequest.prototype['items'] = undefined;






export default ImportOrdersBulkBulkRequest;

