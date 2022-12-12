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
 * The EmailReportOverallOverall model module.
 * @module egoisdk/EmailReportOverallOverall
 * @version 1.1.2RC1
 */
class EmailReportOverallOverall {
    /**
     * Constructs a new <code>EmailReportOverallOverall</code>.
     * Overall message information
     * @alias module:egoisdk/EmailReportOverallOverall
     */
    constructor() { 
        
        EmailReportOverallOverall.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailReportOverallOverall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/EmailReportOverallOverall} obj Optional instance to populate.
     * @return {module:egoisdk/EmailReportOverallOverall} The populated <code>EmailReportOverallOverall</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailReportOverallOverall();

            if (data.hasOwnProperty('sends')) {
                obj['sends'] = ApiClient.convertToType(data['sends'], 'Number');
            }
            if (data.hasOwnProperty('opens')) {
                obj['opens'] = ApiClient.convertToType(data['opens'], 'Number');
            }
            if (data.hasOwnProperty('unique_opens')) {
                obj['unique_opens'] = ApiClient.convertToType(data['unique_opens'], 'Number');
            }
            if (data.hasOwnProperty('clicks')) {
                obj['clicks'] = ApiClient.convertToType(data['clicks'], 'Number');
            }
            if (data.hasOwnProperty('unique_clicks')) {
                obj['unique_clicks'] = ApiClient.convertToType(data['unique_clicks'], 'Number');
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
     * Validates the JSON data with respect to <code>EmailReportOverallOverall</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailReportOverallOverall</code>.
     */
    static validateJSON(data) {

        return true;
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
     * Returns Total number of unique open messages
     * minimum: 0
     * @return {Number}
     */
    getUniqueOpens() {
        return this.unique_opens;
    }

    /**
     * Sets Total number of unique open messages
     * @param {Number} uniqueOpens Total number of unique open messages
     */
    setUniqueOpens(uniqueOpens) {
        this['unique_opens'] = uniqueOpens;
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
     * Returns Total number of unique clicks in message
     * minimum: 0
     * @return {Number}
     */
    getUniqueClicks() {
        return this.unique_clicks;
    }

    /**
     * Sets Total number of unique clicks in message
     * @param {Number} uniqueClicks Total number of unique clicks in message
     */
    setUniqueClicks(uniqueClicks) {
        this['unique_clicks'] = uniqueClicks;
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
 * Total number of sent messages
 * @member {Number} sends
 */
EmailReportOverallOverall.prototype['sends'] = undefined;

/**
 * Total number of open messages
 * @member {Number} opens
 */
EmailReportOverallOverall.prototype['opens'] = undefined;

/**
 * Total number of unique open messages
 * @member {Number} unique_opens
 */
EmailReportOverallOverall.prototype['unique_opens'] = undefined;

/**
 * Total number of clicks in message
 * @member {Number} clicks
 */
EmailReportOverallOverall.prototype['clicks'] = undefined;

/**
 * Total number of unique clicks in message
 * @member {Number} unique_clicks
 */
EmailReportOverallOverall.prototype['unique_clicks'] = undefined;

/**
 * Total number of hard bounces
 * @member {Number} hard_bounces
 */
EmailReportOverallOverall.prototype['hard_bounces'] = undefined;

/**
 * Total number of soft bounces
 * @member {Number} soft_bounces
 */
EmailReportOverallOverall.prototype['soft_bounces'] = undefined;

/**
 * Total number of complaints
 * @member {Number} complaints
 */
EmailReportOverallOverall.prototype['complaints'] = undefined;

/**
 * Total number of unsubscriptions
 * @member {Number} unsubscriptions
 */
EmailReportOverallOverall.prototype['unsubscriptions'] = undefined;






export default EmailReportOverallOverall;

