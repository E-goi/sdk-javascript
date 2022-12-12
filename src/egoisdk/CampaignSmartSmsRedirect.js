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
 * The CampaignSmartSmsRedirect model module.
 * @module egoisdk/CampaignSmartSmsRedirect
 * @version 1.1.2RC1
 */
class CampaignSmartSmsRedirect {
    /**
     * Constructs a new <code>CampaignSmartSmsRedirect</code>.
     * @alias module:egoisdk/CampaignSmartSmsRedirect
     * @param type {module:egoisdk/CampaignSmartSmsRedirect.TypeEnum} 
     * @param pageUrl {String} Smart SMS page URL
     */
    constructor(type, pageUrl) { 
        
        CampaignSmartSmsRedirect.initialize(this, type, pageUrl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, pageUrl) { 
        obj['type'] = type;
        obj['page_url'] = pageUrl;
    }

    /**
     * Constructs a <code>CampaignSmartSmsRedirect</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/CampaignSmartSmsRedirect} obj Optional instance to populate.
     * @return {module:egoisdk/CampaignSmartSmsRedirect} The populated <code>CampaignSmartSmsRedirect</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignSmartSmsRedirect();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('page_url')) {
                obj['page_url'] = ApiClient.convertToType(data['page_url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CampaignSmartSmsRedirect</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CampaignSmartSmsRedirect</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CampaignSmartSmsRedirect.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['page_url'] && !(typeof data['page_url'] === 'string' || data['page_url'] instanceof String)) {
            throw new Error("Expected the field `page_url` to be a primitive type in the JSON string but got " + data['page_url']);
        }

        return true;
    }

/**
     * @return {module:egoisdk/CampaignSmartSmsRedirect.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {module:egoisdk/CampaignSmartSmsRedirect.TypeEnum} type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns Smart SMS page URL
     * @return {String}
     */
    getPageUrl() {
        return this.page_url;
    }

    /**
     * Sets Smart SMS page URL
     * @param {String} pageUrl Smart SMS page URL
     */
    setPageUrl(pageUrl) {
        this['page_url'] = pageUrl;
    }

}

CampaignSmartSmsRedirect.RequiredProperties = ["type", "page_url"];

/**
 * @member {module:egoisdk/CampaignSmartSmsRedirect.TypeEnum} type
 */
CampaignSmartSmsRedirect.prototype['type'] = undefined;

/**
 * Smart SMS page URL
 * @member {String} page_url
 */
CampaignSmartSmsRedirect.prototype['page_url'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignSmartSmsRedirect['TypeEnum'] = {

    /**
     * value: "redirect"
     * @const
     */
    "redirect": "redirect"
};



export default CampaignSmartSmsRedirect;

