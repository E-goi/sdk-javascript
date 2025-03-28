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
import BillingInfoAllOfBillingInfoCountry from './BillingInfoAllOfBillingInfoCountry';

/**
 * The BillingInfoAllOfBillingInfo model module.
 * @module egoisdk/BillingInfoAllOfBillingInfo
 * @version 1.1.6RC1
 */
class BillingInfoAllOfBillingInfo {
    /**
     * Constructs a new <code>BillingInfoAllOfBillingInfo</code>.
     * Billing Info
     * @alias module:egoisdk/BillingInfoAllOfBillingInfo
     */
    constructor() { 
        
        BillingInfoAllOfBillingInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BillingInfoAllOfBillingInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/BillingInfoAllOfBillingInfo} obj Optional instance to populate.
     * @return {module:egoisdk/BillingInfoAllOfBillingInfo} The populated <code>BillingInfoAllOfBillingInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingInfoAllOfBillingInfo();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('company_legal_name')) {
                obj['company_legal_name'] = ApiClient.convertToType(data['company_legal_name'], 'String');
            }
            if (data.hasOwnProperty('vat_number')) {
                obj['vat_number'] = ApiClient.convertToType(data['vat_number'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = BillingInfoAllOfBillingInfoCountry.constructFromObject(data['country']);
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('zip_code')) {
                obj['zip_code'] = ApiClient.convertToType(data['zip_code'], 'String');
            }
            if (data.hasOwnProperty('invoice_comments')) {
                obj['invoice_comments'] = ApiClient.convertToType(data['invoice_comments'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingInfoAllOfBillingInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingInfoAllOfBillingInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['company_legal_name'] && !(typeof data['company_legal_name'] === 'string' || data['company_legal_name'] instanceof String)) {
            throw new Error("Expected the field `company_legal_name` to be a primitive type in the JSON string but got " + data['company_legal_name']);
        }
        // ensure the json data is a string
        if (data['vat_number'] && !(typeof data['vat_number'] === 'string' || data['vat_number'] instanceof String)) {
            throw new Error("Expected the field `vat_number` to be a primitive type in the JSON string but got " + data['vat_number']);
        }
        // validate the optional field `country`
        if (data['country']) { // data not null
          BillingInfoAllOfBillingInfoCountry.validateJSON(data['country']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['address1'] && !(typeof data['address1'] === 'string' || data['address1'] instanceof String)) {
            throw new Error("Expected the field `address1` to be a primitive type in the JSON string but got " + data['address1']);
        }
        // ensure the json data is a string
        if (data['address2'] && !(typeof data['address2'] === 'string' || data['address2'] instanceof String)) {
            throw new Error("Expected the field `address2` to be a primitive type in the JSON string but got " + data['address2']);
        }
        // ensure the json data is a string
        if (data['zip_code'] && !(typeof data['zip_code'] === 'string' || data['zip_code'] instanceof String)) {
            throw new Error("Expected the field `zip_code` to be a primitive type in the JSON string but got " + data['zip_code']);
        }
        // ensure the json data is a string
        if (data['invoice_comments'] && !(typeof data['invoice_comments'] === 'string' || data['invoice_comments'] instanceof String)) {
            throw new Error("Expected the field `invoice_comments` to be a primitive type in the JSON string but got " + data['invoice_comments']);
        }

        return true;
    }

/**
     * Returns Type billing
     * @return {module:egoisdk/BillingInfoAllOfBillingInfo.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets Type billing
     * @param {module:egoisdk/BillingInfoAllOfBillingInfo.TypeEnum} type Type billing
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Company legal name
     * @return {String}
     */
    getCompanyLegalName() {
        return this.company_legal_name;
    }

    /**
     * Sets Company legal name
     * @param {String} companyLegalName Company legal name
     */
    setCompanyLegalName(companyLegalName) {
        this['company_legal_name'] = companyLegalName;
    }
/**
     * Returns Vat number
     * @return {String}
     */
    getVatNumber() {
        return this.vat_number;
    }

    /**
     * Sets Vat number
     * @param {String} vatNumber Vat number
     */
    setVatNumber(vatNumber) {
        this['vat_number'] = vatNumber;
    }
/**
     * @return {module:egoisdk/BillingInfoAllOfBillingInfoCountry}
     */
    getCountry() {
        return this.country;
    }

    /**
     * @param {module:egoisdk/BillingInfoAllOfBillingInfoCountry} country
     */
    setCountry(country) {
        this['country'] = country;
    }
/**
     * Returns City
     * @return {String}
     */
    getCity() {
        return this.city;
    }

    /**
     * Sets City
     * @param {String} city City
     */
    setCity(city) {
        this['city'] = city;
    }
/**
     * Returns State
     * @return {String}
     */
    getState() {
        return this.state;
    }

    /**
     * Sets State
     * @param {String} state State
     */
    setState(state) {
        this['state'] = state;
    }
/**
     * Returns Address 1
     * @return {String}
     */
    getAddress1() {
        return this.address1;
    }

    /**
     * Sets Address 1
     * @param {String} address1 Address 1
     */
    setAddress1(address1) {
        this['address1'] = address1;
    }
/**
     * Returns Address 2
     * @return {String}
     */
    getAddress2() {
        return this.address2;
    }

    /**
     * Sets Address 2
     * @param {String} address2 Address 2
     */
    setAddress2(address2) {
        this['address2'] = address2;
    }
/**
     * Returns Zip Code
     * @return {String}
     */
    getZipCode() {
        return this.zip_code;
    }

    /**
     * Sets Zip Code
     * @param {String} zipCode Zip Code
     */
    setZipCode(zipCode) {
        this['zip_code'] = zipCode;
    }
/**
     * Returns Invoice Comments
     * @return {String}
     */
    getInvoiceComments() {
        return this.invoice_comments;
    }

    /**
     * Sets Invoice Comments
     * @param {String} invoiceComments Invoice Comments
     */
    setInvoiceComments(invoiceComments) {
        this['invoice_comments'] = invoiceComments;
    }

}



/**
 * Type billing
 * @member {module:egoisdk/BillingInfoAllOfBillingInfo.TypeEnum} type
 */
BillingInfoAllOfBillingInfo.prototype['type'] = undefined;

/**
 * Company legal name
 * @member {String} company_legal_name
 */
BillingInfoAllOfBillingInfo.prototype['company_legal_name'] = undefined;

/**
 * Vat number
 * @member {String} vat_number
 */
BillingInfoAllOfBillingInfo.prototype['vat_number'] = undefined;

/**
 * @member {module:egoisdk/BillingInfoAllOfBillingInfoCountry} country
 */
BillingInfoAllOfBillingInfo.prototype['country'] = undefined;

/**
 * City
 * @member {String} city
 */
BillingInfoAllOfBillingInfo.prototype['city'] = undefined;

/**
 * State
 * @member {String} state
 */
BillingInfoAllOfBillingInfo.prototype['state'] = undefined;

/**
 * Address 1
 * @member {String} address1
 */
BillingInfoAllOfBillingInfo.prototype['address1'] = undefined;

/**
 * Address 2
 * @member {String} address2
 */
BillingInfoAllOfBillingInfo.prototype['address2'] = undefined;

/**
 * Zip Code
 * @member {String} zip_code
 */
BillingInfoAllOfBillingInfo.prototype['zip_code'] = undefined;

/**
 * Invoice Comments
 * @member {String} invoice_comments
 */
BillingInfoAllOfBillingInfo.prototype['invoice_comments'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
BillingInfoAllOfBillingInfo['TypeEnum'] = {

    /**
     * value: "single_person"
     * @const
     */
    "single_person": "single_person",

    /**
     * value: "company"
     * @const
     */
    "company": "company"
};



export default BillingInfoAllOfBillingInfo;

