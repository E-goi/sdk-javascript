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

/**
 * The ContactActivityAbstractActionsWithCampaign model module.
 * @module egoisdk/ContactActivityAbstractActionsWithCampaign
 * @version 1.1.3RC1
 */
class ContactActivityAbstractActionsWithCampaign {
    /**
     * Constructs a new <code>ContactActivityAbstractActionsWithCampaign</code>.
     * Campaign contact activity schema
     * @alias module:egoisdk/ContactActivityAbstractActionsWithCampaign
     */
    constructor() { 
        
        ContactActivityAbstractActionsWithCampaign.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactActivityAbstractActionsWithCampaign</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ContactActivityAbstractActionsWithCampaign} obj Optional instance to populate.
     * @return {module:egoisdk/ContactActivityAbstractActionsWithCampaign} The populated <code>ContactActivityAbstractActionsWithCampaign</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactActivityAbstractActionsWithCampaign();

            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('action_name')) {
                obj['action_name'] = ApiClient.convertToType(data['action_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactActivityAbstractActionsWithCampaign</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactActivityAbstractActionsWithCampaign</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['action_name'] && !(typeof data['action_name'] === 'string' || data['action_name'] instanceof String)) {
            throw new Error("Expected the field `action_name` to be a primitive type in the JSON string but got " + data['action_name']);
        }

        return true;
    }

/**
     * Returns The date and time
     * @return {Date}
     */
    getDate() {
        return this.date;
    }

    /**
     * Sets The date and time
     * @param {Date} date The date and time
     */
    setDate(date) {
        this['date'] = date;
    }
/**
     * Returns Action name
     * @return {module:egoisdk/ContactActivityAbstractActionsWithCampaign.ActionNameEnum}
     */
    getActionName() {
        return this.action_name;
    }

    /**
     * Sets Action name
     * @param {module:egoisdk/ContactActivityAbstractActionsWithCampaign.ActionNameEnum} actionName Action name
     */
    setActionName(actionName) {
        this['action_name'] = actionName;
    }

}



/**
 * The date and time
 * @member {Date} date
 */
ContactActivityAbstractActionsWithCampaign.prototype['date'] = undefined;

/**
 * Action name
 * @member {module:egoisdk/ContactActivityAbstractActionsWithCampaign.ActionNameEnum} action_name
 */
ContactActivityAbstractActionsWithCampaign.prototype['action_name'] = undefined;





/**
 * Allowed values for the <code>action_name</code> property.
 * @enum {String}
 * @readonly
 */
ContactActivityAbstractActionsWithCampaign['ActionNameEnum'] = {

    /**
     * value: "email_open"
     * @const
     */
    "email_open": "email_open",

    /**
     * value: "forward"
     * @const
     */
    "forward": "forward",

    /**
     * value: "email_send"
     * @const
     */
    "email_send": "email_send",

    /**
     * value: "sms_send"
     * @const
     */
    "sms_send": "sms_send",

    /**
     * value: "voice_send"
     * @const
     */
    "voice_send": "voice_send",

    /**
     * value: "sms_report"
     * @const
     */
    "sms_report": "sms_report",

    /**
     * value: "voice_report"
     * @const
     */
    "voice_report": "voice_report",

    /**
     * value: "invitation_send"
     * @const
     */
    "invitation_send": "invitation_send",

    /**
     * value: "invitation_open"
     * @const
     */
    "invitation_open": "invitation_open",

    /**
     * value: "email_soft_bounce"
     * @const
     */
    "email_soft_bounce": "email_soft_bounce",

    /**
     * value: "email_hard_bounce"
     * @const
     */
    "email_hard_bounce": "email_hard_bounce",

    /**
     * value: "double_optin"
     * @const
     */
    "double_optin": "double_optin",

    /**
     * value: "double_optin_resend"
     * @const
     */
    "double_optin_resend": "double_optin_resend",

    /**
     * value: "email_spam_complaint"
     * @const
     */
    "email_spam_complaint": "email_spam_complaint",

    /**
     * value: "double_optedit"
     * @const
     */
    "double_optedit": "double_optedit",

    /**
     * value: "push_send"
     * @const
     */
    "push_send": "push_send",

    /**
     * value: "push_open"
     * @const
     */
    "push_open": "push_open",

    /**
     * value: "push_received"
     * @const
     */
    "push_received": "push_received",

    /**
     * value: "push_error"
     * @const
     */
    "push_error": "push_error",

    /**
     * value: "push_canceled"
     * @const
     */
    "push_canceled": "push_canceled",

    /**
     * value: "reply_to_email"
     * @const
     */
    "reply_to_email": "reply_to_email",

    /**
     * value: "web_push_send"
     * @const
     */
    "web_push_send": "web_push_send",

    /**
     * value: "web_push_delivered"
     * @const
     */
    "web_push_delivered": "web_push_delivered",

    /**
     * value: "web_push_open"
     * @const
     */
    "web_push_open": "web_push_open",

    /**
     * value: "web_push_bounce"
     * @const
     */
    "web_push_bounce": "web_push_bounce",

    /**
     * value: "voice_menu_event"
     * @const
     */
    "voice_menu_event": "voice_menu_event",

    /**
     * value: "voice_redirect"
     * @const
     */
    "voice_redirect": "voice_redirect",

    /**
     * value: "push_delivered"
     * @const
     */
    "push_delivered": "push_delivered",

    /**
     * value: "smart_sms_send"
     * @const
     */
    "smart_sms_send": "smart_sms_send",

    /**
     * value: "smart_sms_open"
     * @const
     */
    "smart_sms_open": "smart_sms_open",

    /**
     * value: "smart_sms_report"
     * @const
     */
    "smart_sms_report": "smart_sms_report"
};



export default ContactActivityAbstractActionsWithCampaign;

