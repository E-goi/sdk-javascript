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
import CampaignEmailBaseContent from './CampaignEmailBaseContent';
import CampaignEmailContentTemplateAllOf from './CampaignEmailContentTemplateAllOf';

/**
 * The CampaignEmailContentTemplate model module.
 * @module egoisdk/CampaignEmailContentTemplate
 * @version 1.1.2RC1
 */
class CampaignEmailContentTemplate {
    /**
     * Constructs a new <code>CampaignEmailContentTemplate</code>.
     * @alias module:egoisdk/CampaignEmailContentTemplate
     * @implements module:egoisdk/CampaignEmailContentTemplateAllOf
     * @implements module:egoisdk/CampaignEmailBaseContent
     * @param type {module:egoisdk/CampaignEmailContentTemplate.TypeEnum} 
     * @param templateId {Number} ID of the template for this campaign (Email builder templates are not allowed)
     */
    constructor(type, templateId) { 
        CampaignEmailContentTemplateAllOf.initialize(this);CampaignEmailBaseContent.initialize(this);
        CampaignEmailContentTemplate.initialize(this, type, templateId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, templateId) { 
        obj['type'] = type;
        obj['template_id'] = templateId;
    }

    /**
     * Constructs a <code>CampaignEmailContentTemplate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/CampaignEmailContentTemplate} obj Optional instance to populate.
     * @return {module:egoisdk/CampaignEmailContentTemplate} The populated <code>CampaignEmailContentTemplate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CampaignEmailContentTemplate();
            CampaignEmailContentTemplateAllOf.constructFromObject(data, obj);
            CampaignEmailBaseContent.constructFromObject(data, obj);

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('template_id')) {
                obj['template_id'] = ApiClient.convertToType(data['template_id'], 'Number');
            }
            if (data.hasOwnProperty('plain_text')) {
                obj['plain_text'] = ApiClient.convertToType(data['plain_text'], 'String');
            }
            if (data.hasOwnProperty('snippet')) {
                obj['snippet'] = ApiClient.convertToType(data['snippet'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CampaignEmailContentTemplate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CampaignEmailContentTemplate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CampaignEmailContentTemplate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['plain_text'] && !(typeof data['plain_text'] === 'string' || data['plain_text'] instanceof String)) {
            throw new Error("Expected the field `plain_text` to be a primitive type in the JSON string but got " + data['plain_text']);
        }
        // ensure the json data is a string
        if (data['snippet'] && !(typeof data['snippet'] === 'string' || data['snippet'] instanceof String)) {
            throw new Error("Expected the field `snippet` to be a primitive type in the JSON string but got " + data['snippet']);
        }

        return true;
    }

/**
     * @return {module:egoisdk/CampaignEmailContentTemplate.TypeEnum}
     */
    getType() {
        return this.type;
    }

    /**
     * @param {module:egoisdk/CampaignEmailContentTemplate.TypeEnum} type
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns ID of the template for this campaign (Email builder templates are not allowed)
     * @return {Number}
     */
    getTemplateId() {
        return this.template_id;
    }

    /**
     * Sets ID of the template for this campaign (Email builder templates are not allowed)
     * @param {Number} templateId ID of the template for this campaign (Email builder templates are not allowed)
     */
    setTemplateId(templateId) {
        this['template_id'] = templateId;
    }
/**
     * Returns Plain text for the campaign
     * @return {String}
     */
    getPlainText() {
        return this.plain_text;
    }

    /**
     * Sets Plain text for the campaign
     * @param {String} plainText Plain text for the campaign
     */
    setPlainText(plainText) {
        this['plain_text'] = plainText;
    }
/**
     * Returns Snippet text for the campaign
     * @return {String}
     */
    getSnippet() {
        return this.snippet;
    }

    /**
     * Sets Snippet text for the campaign
     * @param {String} snippet Snippet text for the campaign
     */
    setSnippet(snippet) {
        this['snippet'] = snippet;
    }

}

CampaignEmailContentTemplate.RequiredProperties = ["type", "template_id"];

/**
 * @member {module:egoisdk/CampaignEmailContentTemplate.TypeEnum} type
 */
CampaignEmailContentTemplate.prototype['type'] = undefined;

/**
 * ID of the template for this campaign (Email builder templates are not allowed)
 * @member {Number} template_id
 */
CampaignEmailContentTemplate.prototype['template_id'] = undefined;

/**
 * Plain text for the campaign
 * @member {String} plain_text
 */
CampaignEmailContentTemplate.prototype['plain_text'] = undefined;

/**
 * Snippet text for the campaign
 * @member {String} snippet
 */
CampaignEmailContentTemplate.prototype['snippet'] = undefined;


// Implement CampaignEmailContentTemplateAllOf interface:
/**
 * @member {module:egoisdk/CampaignEmailContentTemplateAllOf.TypeEnum} type
 */
CampaignEmailContentTemplateAllOf.prototype['type'] = undefined;
/**
 * ID of the template for this campaign (Email builder templates are not allowed)
 * @member {Number} template_id
 */
CampaignEmailContentTemplateAllOf.prototype['template_id'] = undefined;
// Implement CampaignEmailBaseContent interface:
/**
 * Plain text for the campaign
 * @member {String} plain_text
 */
CampaignEmailBaseContent.prototype['plain_text'] = undefined;
/**
 * Snippet text for the campaign
 * @member {String} snippet
 */
CampaignEmailBaseContent.prototype['snippet'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
CampaignEmailContentTemplate['TypeEnum'] = {

    /**
     * value: "template"
     * @const
     */
    "template": "template"
};



export default CampaignEmailContentTemplate;

