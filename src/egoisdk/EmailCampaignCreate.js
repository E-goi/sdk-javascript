/**
 * APIv3 (New)
 *  # Introduction This is our new version of API. We invite you to start using it and give us your feedback # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.  The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.      BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication  We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:     #!/bin/bash     curl -X GET 'https://api.egoiapp.com/my-account' \\     -H 'accept: application/json' \\     -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:     #!/bin/bash     curl -X POST 'http://api.egoiapp.com/tags' \\     -H 'accept: application/json' \\     -H 'Apikey: <YOUR_APY_KEY>' \\     -H 'Content-Type: application/json' \\     -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * <a href='https://github.com/E-goi/sdk-java'>Java</a>  * <a href='https://github.com/E-goi/sdk-php'>PHP</a>  * <a href='https://github.com/E-goi/sdk-python'>Python</a>  * <a href='https://github.com/E-goi/sdk-ruby'>Ruby</a>  * <a href='https://github.com/E-goi/sdk-javascript'>Javascript</a>  * <a href='https://github.com/E-goi/sdk-csharp'>C#</a>  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you'll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation's requests, it's advised the request's division in batches that have each one less than 20MB.  # Timeouts Timeouts set a maximum waiting time on a request's response. Our API, sets a default timeout for each request and when breached, you'll receive an HTTP **408 (Request Timeout)** error code. You should take into consideration that response times can vary widely based on the complexity of the request, amount of data being analyzed, and the load on the system and workspace at the time of the query. When dealing with such errors, you should first attempt to reduce the complexity and amount of data under analysis, and only then, if problems are still occurring ask for support.  For all these reasons, the default timeout for each request is **10 Seconds** and any request that creates or modifies data (**POST**, **PATCH** and **PUT**) will have a timeout of **60 Seconds**. Specific timeouts may exist for specific requests, these can be found in the request's documentation.  # Callbacks A callback is an asynchronous API request that originates from the API server and is sent to the client in response to a previous request sent by that client.  The API will make a **POST** request to the address defined in the URL with the information regarding the event of interest and share data related to that event.  <a href='/usecases/callbacks/' target='_blank'>[Go to callbacks documentation]</a>  ***Note:*** Only http or https protocols are supported in the Url parameter.  <security-definitions/>
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
import CampaignEmailContent from './CampaignEmailContent';
import HeaderFooter from './HeaderFooter';

/**
 * The EmailCampaignCreate model module.
 * @module egoisdk/EmailCampaignCreate
 * @version 1.1.3RC1
 */
class EmailCampaignCreate {
    /**
     * Constructs a new <code>EmailCampaignCreate</code>.
     * Email campaign schema
     * @alias module:egoisdk/EmailCampaignCreate
     * @param listId {Number} 
     * @param internalName {String} Campaign internal name
     * @param content {module:egoisdk/CampaignEmailContent} 
     * @param senderId {Number} 
     */
    constructor(listId, internalName, content, senderId) { 
        
        EmailCampaignCreate.initialize(this, listId, internalName, content, senderId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, listId, internalName, content, senderId) { 
        obj['list_id'] = listId;
        obj['internal_name'] = internalName;
        obj['content'] = content;
        obj['sender_id'] = senderId;
    }

    /**
     * Constructs a <code>EmailCampaignCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/EmailCampaignCreate} obj Optional instance to populate.
     * @return {module:egoisdk/EmailCampaignCreate} The populated <code>EmailCampaignCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailCampaignCreate();

            if (data.hasOwnProperty('list_id')) {
                obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
            }
            if (data.hasOwnProperty('internal_name')) {
                obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'String');
            }
            if (data.hasOwnProperty('subject')) {
                obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
            }
            if (data.hasOwnProperty('content')) {
                obj['content'] = CampaignEmailContent.constructFromObject(data['content']);
            }
            if (data.hasOwnProperty('sender_id')) {
                obj['sender_id'] = ApiClient.convertToType(data['sender_id'], 'Number');
            }
            if (data.hasOwnProperty('reply_to')) {
                obj['reply_to'] = ApiClient.convertToType(data['reply_to'], 'Number');
            }
            if (data.hasOwnProperty('header_footer')) {
                obj['header_footer'] = HeaderFooter.constructFromObject(data['header_footer']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailCampaignCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailCampaignCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailCampaignCreate.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['internal_name'] && !(typeof data['internal_name'] === 'string' || data['internal_name'] instanceof String)) {
            throw new Error("Expected the field `internal_name` to be a primitive type in the JSON string but got " + data['internal_name']);
        }
        // ensure the json data is a string
        if (data['subject'] && !(typeof data['subject'] === 'string' || data['subject'] instanceof String)) {
            throw new Error("Expected the field `subject` to be a primitive type in the JSON string but got " + data['subject']);
        }
        // validate the optional field `content`
        if (data['content']) { // data not null
          CampaignEmailContent.validateJSON(data['content']);
        }
        // validate the optional field `header_footer`
        if (data['header_footer']) { // data not null
          HeaderFooter.validateJSON(data['header_footer']);
        }

        return true;
    }

/**
     * minimum: 1
     * @return {Number}
     */
    getListId() {
        return this.list_id;
    }

    /**
     * @param {Number} listId
     */
    setListId(listId) {
        this['list_id'] = listId;
    }
/**
     * Returns Campaign internal name
     * @return {String}
     */
    getInternalName() {
        return this.internal_name;
    }

    /**
     * Sets Campaign internal name
     * @param {String} internalName Campaign internal name
     */
    setInternalName(internalName) {
        this['internal_name'] = internalName;
    }
/**
     * Returns Campaign subject. If no value is sent, defaults to 'internal_name' property value
     * @return {String}
     */
    getSubject() {
        return this.subject;
    }

    /**
     * Sets Campaign subject. If no value is sent, defaults to 'internal_name' property value
     * @param {String} subject Campaign subject. If no value is sent, defaults to 'internal_name' property value
     */
    setSubject(subject) {
        this['subject'] = subject;
    }
/**
     * @return {module:egoisdk/CampaignEmailContent}
     */
    getContent() {
        return this.content;
    }

    /**
     * @param {module:egoisdk/CampaignEmailContent} content
     */
    setContent(content) {
        this['content'] = content;
    }
/**
     * minimum: 1
     * @return {Number}
     */
    getSenderId() {
        return this.sender_id;
    }

    /**
     * @param {Number} senderId
     */
    setSenderId(senderId) {
        this['sender_id'] = senderId;
    }
/**
     * minimum: 1
     * @return {Number}
     */
    getReplyTo() {
        return this.reply_to;
    }

    /**
     * @param {Number} replyTo
     */
    setReplyTo(replyTo) {
        this['reply_to'] = replyTo;
    }
/**
     * @return {module:egoisdk/HeaderFooter}
     */
    getHeaderFooter() {
        return this.header_footer;
    }

    /**
     * @param {module:egoisdk/HeaderFooter} headerFooter
     */
    setHeaderFooter(headerFooter) {
        this['header_footer'] = headerFooter;
    }

}

EmailCampaignCreate.RequiredProperties = ["list_id", "internal_name", "content", "sender_id"];

/**
 * @member {Number} list_id
 */
EmailCampaignCreate.prototype['list_id'] = undefined;

/**
 * Campaign internal name
 * @member {String} internal_name
 */
EmailCampaignCreate.prototype['internal_name'] = undefined;

/**
 * Campaign subject. If no value is sent, defaults to 'internal_name' property value
 * @member {String} subject
 */
EmailCampaignCreate.prototype['subject'] = undefined;

/**
 * @member {module:egoisdk/CampaignEmailContent} content
 */
EmailCampaignCreate.prototype['content'] = undefined;

/**
 * @member {Number} sender_id
 */
EmailCampaignCreate.prototype['sender_id'] = undefined;

/**
 * @member {Number} reply_to
 */
EmailCampaignCreate.prototype['reply_to'] = undefined;

/**
 * @member {module:egoisdk/HeaderFooter} header_footer
 */
EmailCampaignCreate.prototype['header_footer'] = undefined;






export default EmailCampaignCreate;

