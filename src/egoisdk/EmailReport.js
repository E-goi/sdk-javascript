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
import EmailReportAllOf from './EmailReportAllOf';
import EmailReportByDate from './EmailReportByDate';
import EmailReportByDateDateInner from './EmailReportByDateDateInner';
import EmailReportByDomain from './EmailReportByDomain';
import EmailReportByDomainDomainInner from './EmailReportByDomainDomainInner';
import EmailReportByHour from './EmailReportByHour';
import EmailReportByHourHourInner from './EmailReportByHourHourInner';
import EmailReportByLocation from './EmailReportByLocation';
import EmailReportByLocationLocationInner from './EmailReportByLocationLocationInner';
import EmailReportByReader from './EmailReportByReader';
import EmailReportByReaderReaderInner from './EmailReportByReaderReaderInner';
import EmailReportByUrl from './EmailReportByUrl';
import EmailReportByUrlUrlInner from './EmailReportByUrlUrlInner';
import EmailReportByWeekday from './EmailReportByWeekday';
import EmailReportByWeekdayWeekdayInner from './EmailReportByWeekdayWeekdayInner';
import EmailReportOverall from './EmailReportOverall';
import EmailReportOverallOverall from './EmailReportOverallOverall';

/**
 * The EmailReport model module.
 * @module egoisdk/EmailReport
 * @version 1.1.6RC1
 */
class EmailReport {
    /**
     * Constructs a new <code>EmailReport</code>.
     * Email report schema
     * @alias module:egoisdk/EmailReport
     * @implements module:egoisdk/EmailReportAllOf
     * @implements module:egoisdk/EmailReportOverall
     * @implements module:egoisdk/EmailReportByDate
     * @implements module:egoisdk/EmailReportByWeekday
     * @implements module:egoisdk/EmailReportByHour
     * @implements module:egoisdk/EmailReportByLocation
     * @implements module:egoisdk/EmailReportByDomain
     * @implements module:egoisdk/EmailReportByUrl
     * @implements module:egoisdk/EmailReportByReader
     */
    constructor() { 
        EmailReportAllOf.initialize(this);EmailReportOverall.initialize(this);EmailReportByDate.initialize(this);EmailReportByWeekday.initialize(this);EmailReportByHour.initialize(this);EmailReportByLocation.initialize(this);EmailReportByDomain.initialize(this);EmailReportByUrl.initialize(this);EmailReportByReader.initialize(this);
        EmailReport.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailReport</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/EmailReport} obj Optional instance to populate.
     * @return {module:egoisdk/EmailReport} The populated <code>EmailReport</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailReport();
            EmailReportAllOf.constructFromObject(data, obj);
            EmailReportOverall.constructFromObject(data, obj);
            EmailReportByDate.constructFromObject(data, obj);
            EmailReportByWeekday.constructFromObject(data, obj);
            EmailReportByHour.constructFromObject(data, obj);
            EmailReportByLocation.constructFromObject(data, obj);
            EmailReportByDomain.constructFromObject(data, obj);
            EmailReportByUrl.constructFromObject(data, obj);
            EmailReportByReader.constructFromObject(data, obj);

            if (data.hasOwnProperty('campaign_hash')) {
                obj['campaign_hash'] = ApiClient.convertToType(data['campaign_hash'], 'String');
            }
            if (data.hasOwnProperty('overall')) {
                obj['overall'] = EmailReportOverallOverall.constructFromObject(data['overall']);
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], [EmailReportByDateDateInner]);
            }
            if (data.hasOwnProperty('weekday')) {
                obj['weekday'] = ApiClient.convertToType(data['weekday'], [EmailReportByWeekdayWeekdayInner]);
            }
            if (data.hasOwnProperty('hour')) {
                obj['hour'] = ApiClient.convertToType(data['hour'], [EmailReportByHourHourInner]);
            }
            if (data.hasOwnProperty('location')) {
                obj['location'] = ApiClient.convertToType(data['location'], [EmailReportByLocationLocationInner]);
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], [EmailReportByDomainDomainInner]);
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], [EmailReportByUrlUrlInner]);
            }
            if (data.hasOwnProperty('reader')) {
                obj['reader'] = ApiClient.convertToType(data['reader'], [EmailReportByReaderReaderInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailReport</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailReport</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['campaign_hash'] && !(typeof data['campaign_hash'] === 'string' || data['campaign_hash'] instanceof String)) {
            throw new Error("Expected the field `campaign_hash` to be a primitive type in the JSON string but got " + data['campaign_hash']);
        }
        // validate the optional field `overall`
        if (data['overall']) { // data not null
          EmailReportOverallOverall.validateJSON(data['overall']);
        }
        if (data['date']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['date'])) {
                throw new Error("Expected the field `date` to be an array in the JSON data but got " + data['date']);
            }
            // validate the optional field `date` (array)
            for (const item of data['date']) {
                EmailReportByDateDateInner.validateJsonObject(item);
            };
        }
        if (data['weekday']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['weekday'])) {
                throw new Error("Expected the field `weekday` to be an array in the JSON data but got " + data['weekday']);
            }
            // validate the optional field `weekday` (array)
            for (const item of data['weekday']) {
                EmailReportByWeekdayWeekdayInner.validateJsonObject(item);
            };
        }
        if (data['hour']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['hour'])) {
                throw new Error("Expected the field `hour` to be an array in the JSON data but got " + data['hour']);
            }
            // validate the optional field `hour` (array)
            for (const item of data['hour']) {
                EmailReportByHourHourInner.validateJsonObject(item);
            };
        }
        if (data['location']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['location'])) {
                throw new Error("Expected the field `location` to be an array in the JSON data but got " + data['location']);
            }
            // validate the optional field `location` (array)
            for (const item of data['location']) {
                EmailReportByLocationLocationInner.validateJsonObject(item);
            };
        }
        if (data['domain']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['domain'])) {
                throw new Error("Expected the field `domain` to be an array in the JSON data but got " + data['domain']);
            }
            // validate the optional field `domain` (array)
            for (const item of data['domain']) {
                EmailReportByDomainDomainInner.validateJsonObject(item);
            };
        }
        if (data['url']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['url'])) {
                throw new Error("Expected the field `url` to be an array in the JSON data but got " + data['url']);
            }
            // validate the optional field `url` (array)
            for (const item of data['url']) {
                EmailReportByUrlUrlInner.validateJsonObject(item);
            };
        }
        if (data['reader']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reader'])) {
                throw new Error("Expected the field `reader` to be an array in the JSON data but got " + data['reader']);
            }
            // validate the optional field `reader` (array)
            for (const item of data['reader']) {
                EmailReportByReaderReaderInner.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * @return {String}
     */
    getCampaignHash() {
        return this.campaign_hash;
    }

    /**
     * @param {String} campaignHash
     */
    setCampaignHash(campaignHash) {
        this['campaign_hash'] = campaignHash;
    }
/**
     * @return {module:egoisdk/EmailReportOverallOverall}
     */
    getOverall() {
        return this.overall;
    }

    /**
     * @param {module:egoisdk/EmailReportOverallOverall} overall
     */
    setOverall(overall) {
        this['overall'] = overall;
    }
/**
     * Returns Email stats grouped by date
     * @return {Array.<module:egoisdk/EmailReportByDateDateInner>}
     */
    getDate() {
        return this.date;
    }

    /**
     * Sets Email stats grouped by date
     * @param {Array.<module:egoisdk/EmailReportByDateDateInner>} date Email stats grouped by date
     */
    setDate(date) {
        this['date'] = date;
    }
/**
     * Returns Email stats grouped by date
     * @return {Array.<module:egoisdk/EmailReportByWeekdayWeekdayInner>}
     */
    getWeekday() {
        return this.weekday;
    }

    /**
     * Sets Email stats grouped by date
     * @param {Array.<module:egoisdk/EmailReportByWeekdayWeekdayInner>} weekday Email stats grouped by date
     */
    setWeekday(weekday) {
        this['weekday'] = weekday;
    }
/**
     * Returns Email stats grouped by hour
     * @return {Array.<module:egoisdk/EmailReportByHourHourInner>}
     */
    getHour() {
        return this.hour;
    }

    /**
     * Sets Email stats grouped by hour
     * @param {Array.<module:egoisdk/EmailReportByHourHourInner>} hour Email stats grouped by hour
     */
    setHour(hour) {
        this['hour'] = hour;
    }
/**
     * Returns Email stats grouped by Location
     * @return {Array.<module:egoisdk/EmailReportByLocationLocationInner>}
     */
    getLocation() {
        return this.location;
    }

    /**
     * Sets Email stats grouped by Location
     * @param {Array.<module:egoisdk/EmailReportByLocationLocationInner>} location Email stats grouped by Location
     */
    setLocation(location) {
        this['location'] = location;
    }
/**
     * Returns Email stats grouped by Domain
     * @return {Array.<module:egoisdk/EmailReportByDomainDomainInner>}
     */
    getDomain() {
        return this.domain;
    }

    /**
     * Sets Email stats grouped by Domain
     * @param {Array.<module:egoisdk/EmailReportByDomainDomainInner>} domain Email stats grouped by Domain
     */
    setDomain(domain) {
        this['domain'] = domain;
    }
/**
     * Returns Email stats grouped by Domain
     * @return {Array.<module:egoisdk/EmailReportByUrlUrlInner>}
     */
    getUrl() {
        return this.url;
    }

    /**
     * Sets Email stats grouped by Domain
     * @param {Array.<module:egoisdk/EmailReportByUrlUrlInner>} url Email stats grouped by Domain
     */
    setUrl(url) {
        this['url'] = url;
    }
/**
     * Returns Email stats grouped by Reader
     * @return {Array.<module:egoisdk/EmailReportByReaderReaderInner>}
     */
    getReader() {
        return this.reader;
    }

    /**
     * Sets Email stats grouped by Reader
     * @param {Array.<module:egoisdk/EmailReportByReaderReaderInner>} reader Email stats grouped by Reader
     */
    setReader(reader) {
        this['reader'] = reader;
    }

}



/**
 * @member {String} campaign_hash
 */
EmailReport.prototype['campaign_hash'] = undefined;

/**
 * @member {module:egoisdk/EmailReportOverallOverall} overall
 */
EmailReport.prototype['overall'] = undefined;

/**
 * Email stats grouped by date
 * @member {Array.<module:egoisdk/EmailReportByDateDateInner>} date
 */
EmailReport.prototype['date'] = undefined;

/**
 * Email stats grouped by date
 * @member {Array.<module:egoisdk/EmailReportByWeekdayWeekdayInner>} weekday
 */
EmailReport.prototype['weekday'] = undefined;

/**
 * Email stats grouped by hour
 * @member {Array.<module:egoisdk/EmailReportByHourHourInner>} hour
 */
EmailReport.prototype['hour'] = undefined;

/**
 * Email stats grouped by Location
 * @member {Array.<module:egoisdk/EmailReportByLocationLocationInner>} location
 */
EmailReport.prototype['location'] = undefined;

/**
 * Email stats grouped by Domain
 * @member {Array.<module:egoisdk/EmailReportByDomainDomainInner>} domain
 */
EmailReport.prototype['domain'] = undefined;

/**
 * Email stats grouped by Domain
 * @member {Array.<module:egoisdk/EmailReportByUrlUrlInner>} url
 */
EmailReport.prototype['url'] = undefined;

/**
 * Email stats grouped by Reader
 * @member {Array.<module:egoisdk/EmailReportByReaderReaderInner>} reader
 */
EmailReport.prototype['reader'] = undefined;


// Implement EmailReportAllOf interface:
/**
 * @member {String} campaign_hash
 */
EmailReportAllOf.prototype['campaign_hash'] = undefined;
// Implement EmailReportOverall interface:
/**
 * @member {module:egoisdk/EmailReportOverallOverall} overall
 */
EmailReportOverall.prototype['overall'] = undefined;
// Implement EmailReportByDate interface:
/**
 * Email stats grouped by date
 * @member {Array.<module:egoisdk/EmailReportByDateDateInner>} date
 */
EmailReportByDate.prototype['date'] = undefined;
// Implement EmailReportByWeekday interface:
/**
 * Email stats grouped by date
 * @member {Array.<module:egoisdk/EmailReportByWeekdayWeekdayInner>} weekday
 */
EmailReportByWeekday.prototype['weekday'] = undefined;
// Implement EmailReportByHour interface:
/**
 * Email stats grouped by hour
 * @member {Array.<module:egoisdk/EmailReportByHourHourInner>} hour
 */
EmailReportByHour.prototype['hour'] = undefined;
// Implement EmailReportByLocation interface:
/**
 * Email stats grouped by Location
 * @member {Array.<module:egoisdk/EmailReportByLocationLocationInner>} location
 */
EmailReportByLocation.prototype['location'] = undefined;
// Implement EmailReportByDomain interface:
/**
 * Email stats grouped by Domain
 * @member {Array.<module:egoisdk/EmailReportByDomainDomainInner>} domain
 */
EmailReportByDomain.prototype['domain'] = undefined;
// Implement EmailReportByUrl interface:
/**
 * Email stats grouped by Domain
 * @member {Array.<module:egoisdk/EmailReportByUrlUrlInner>} url
 */
EmailReportByUrl.prototype['url'] = undefined;
// Implement EmailReportByReader interface:
/**
 * Email stats grouped by Reader
 * @member {Array.<module:egoisdk/EmailReportByReaderReaderInner>} reader
 */
EmailReportByReader.prototype['reader'] = undefined;




export default EmailReport;

