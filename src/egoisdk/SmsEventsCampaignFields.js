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
 * The SmsEventsCampaignFields model module.
 * @module egoisdk/SmsEventsCampaignFields
 * @version 1.1.3RC1
 */
class SmsEventsCampaignFields {
    /**
     * Constructs a new <code>SmsEventsCampaignFields</code>.
     * Campaign fields to include in the report
     * @alias module:egoisdk/SmsEventsCampaignFields
     * @param internalName {Boolean} True to include the internal name of the campaign, false otherwise
     * @param campaignHash {Boolean} True to include the hash of the campaign, false otherwise
     * @param sendDate {Boolean} True to include the send date of the campaign, false otherwise
     * @param group {Boolean} True to include the group of the campaign, false otherwise
     * @param sender {Boolean} True to include the sender of the campaign, false otherwise
     */
    constructor(internalName, campaignHash, sendDate, group, sender) { 
        
        SmsEventsCampaignFields.initialize(this, internalName, campaignHash, sendDate, group, sender);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, internalName, campaignHash, sendDate, group, sender) { 
        obj['internal_name'] = internalName;
        obj['campaign_hash'] = campaignHash;
        obj['send_date'] = sendDate;
        obj['group'] = group;
        obj['sender'] = sender;
    }

    /**
     * Constructs a <code>SmsEventsCampaignFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/SmsEventsCampaignFields} obj Optional instance to populate.
     * @return {module:egoisdk/SmsEventsCampaignFields} The populated <code>SmsEventsCampaignFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SmsEventsCampaignFields();

            if (data.hasOwnProperty('internal_name')) {
                obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'Boolean');
            }
            if (data.hasOwnProperty('campaign_hash')) {
                obj['campaign_hash'] = ApiClient.convertToType(data['campaign_hash'], 'Boolean');
            }
            if (data.hasOwnProperty('send_date')) {
                obj['send_date'] = ApiClient.convertToType(data['send_date'], 'Boolean');
            }
            if (data.hasOwnProperty('group')) {
                obj['group'] = ApiClient.convertToType(data['group'], 'Boolean');
            }
            if (data.hasOwnProperty('channel')) {
                obj['channel'] = ApiClient.convertToType(data['channel'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'Boolean');
            }
            if (data.hasOwnProperty('sender')) {
                obj['sender'] = ApiClient.convertToType(data['sender'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SmsEventsCampaignFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SmsEventsCampaignFields</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SmsEventsCampaignFields.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns True to include the internal name of the campaign, false otherwise
     * @return {Boolean}
     */
    getInternalName() {
        return this.internal_name;
    }

    /**
     * Sets True to include the internal name of the campaign, false otherwise
     * @param {Boolean} internalName True to include the internal name of the campaign, false otherwise
     */
    setInternalName(internalName) {
        this['internal_name'] = internalName;
    }
/**
     * Returns True to include the hash of the campaign, false otherwise
     * @return {Boolean}
     */
    getCampaignHash() {
        return this.campaign_hash;
    }

    /**
     * Sets True to include the hash of the campaign, false otherwise
     * @param {Boolean} campaignHash True to include the hash of the campaign, false otherwise
     */
    setCampaignHash(campaignHash) {
        this['campaign_hash'] = campaignHash;
    }
/**
     * Returns True to include the send date of the campaign, false otherwise
     * @return {Boolean}
     */
    getSendDate() {
        return this.send_date;
    }

    /**
     * Sets True to include the send date of the campaign, false otherwise
     * @param {Boolean} sendDate True to include the send date of the campaign, false otherwise
     */
    setSendDate(sendDate) {
        this['send_date'] = sendDate;
    }
/**
     * Returns True to include the group of the campaign, false otherwise
     * @return {Boolean}
     */
    getGroup() {
        return this.group;
    }

    /**
     * Sets True to include the group of the campaign, false otherwise
     * @param {Boolean} group True to include the group of the campaign, false otherwise
     */
    setGroup(group) {
        this['group'] = group;
    }
/**
     * Returns True to include the channel of the campaign, false otherwise
     * @return {Boolean}
     */
    getChannel() {
        return this.channel;
    }

    /**
     * Sets True to include the channel of the campaign, false otherwise
     * @param {Boolean} channel True to include the channel of the campaign, false otherwise
     */
    setChannel(channel) {
        this['channel'] = channel;
    }
/**
     * Returns True to include the type of the campaign, false otherwise
     * @return {Boolean}
     */
    getType() {
        return this.type;
    }

    /**
     * Sets True to include the type of the campaign, false otherwise
     * @param {Boolean} type True to include the type of the campaign, false otherwise
     */
    setType(type) {
        this['type'] = type;
    }
/**
     * Returns True to include the sender of the campaign, false otherwise
     * @return {Boolean}
     */
    getSender() {
        return this.sender;
    }

    /**
     * Sets True to include the sender of the campaign, false otherwise
     * @param {Boolean} sender True to include the sender of the campaign, false otherwise
     */
    setSender(sender) {
        this['sender'] = sender;
    }

}

SmsEventsCampaignFields.RequiredProperties = ["internal_name", "campaign_hash", "send_date", "group", "sender"];

/**
 * True to include the internal name of the campaign, false otherwise
 * @member {Boolean} internal_name
 */
SmsEventsCampaignFields.prototype['internal_name'] = undefined;

/**
 * True to include the hash of the campaign, false otherwise
 * @member {Boolean} campaign_hash
 */
SmsEventsCampaignFields.prototype['campaign_hash'] = undefined;

/**
 * True to include the send date of the campaign, false otherwise
 * @member {Boolean} send_date
 */
SmsEventsCampaignFields.prototype['send_date'] = undefined;

/**
 * True to include the group of the campaign, false otherwise
 * @member {Boolean} group
 */
SmsEventsCampaignFields.prototype['group'] = undefined;

/**
 * True to include the channel of the campaign, false otherwise
 * @member {Boolean} channel
 */
SmsEventsCampaignFields.prototype['channel'] = undefined;

/**
 * True to include the type of the campaign, false otherwise
 * @member {Boolean} type
 */
SmsEventsCampaignFields.prototype['type'] = undefined;

/**
 * True to include the sender of the campaign, false otherwise
 * @member {Boolean} sender
 */
SmsEventsCampaignFields.prototype['sender'] = undefined;






export default SmsEventsCampaignFields;

