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
import AbstractSendVoiceAllOf from './AbstractSendVoiceAllOf';
import AbstractSendVoiceAllOf1 from './AbstractSendVoiceAllOf1';
import LimitContactsActionSend from './LimitContactsActionSend';
import LimitHourActionSend from './LimitHourActionSend';
import LimitHourActionSendLimitHour from './LimitHourActionSendLimitHour';
import LimitSpeedActionSend from './LimitSpeedActionSend';
import NotifyUserIdArrayActionSend from './NotifyUserIdArrayActionSend';
import OLimitContactsActionSend from './OLimitContactsActionSend';
import OSegmentsActionSend from './OSegmentsActionSend';
import SegmentsActionSend from './SegmentsActionSend';
import SendSmartSmsAllOf from './SendSmartSmsAllOf';

/**
 * The AbstractSendVoice model module.
 * @module egoisdk/AbstractSendVoice
 * @version 1.1.6RC1
 */
class AbstractSendVoice {
    /**
     * Constructs a new <code>AbstractSendVoice</code>.
     * Campaign voice abstract schema
     * @alias module:egoisdk/AbstractSendVoice
     * @implements module:egoisdk/SendSmartSmsAllOf
     * @implements module:egoisdk/AbstractSendVoiceAllOf
     * @implements module:egoisdk/AbstractSendVoiceAllOf1
     * @implements module:egoisdk/SegmentsActionSend
     * @implements module:egoisdk/NotifyUserIdArrayActionSend
     * @implements module:egoisdk/LimitContactsActionSend
     * @implements module:egoisdk/LimitHourActionSend
     * @implements module:egoisdk/LimitSpeedActionSend
     * @param listId {Number} 
     * @param destinationField {module:egoisdk/AbstractSendVoice.DestinationFieldEnum} Destination field of this campaign
     * @param segments {module:egoisdk/OSegmentsActionSend} 
     */
    constructor(listId, destinationField, segments) { 
        SendSmartSmsAllOf.initialize(this);AbstractSendVoiceAllOf.initialize(this);AbstractSendVoiceAllOf1.initialize(this);SegmentsActionSend.initialize(this);NotifyUserIdArrayActionSend.initialize(this);LimitContactsActionSend.initialize(this);LimitHourActionSend.initialize(this);LimitSpeedActionSend.initialize(this);
        AbstractSendVoice.initialize(this, listId, destinationField, segments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, listId, destinationField, segments) { 
        obj['list_id'] = listId;
        obj['destination_field'] = destinationField;
        obj['segments'] = segments;
    }

    /**
     * Constructs a <code>AbstractSendVoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/AbstractSendVoice} obj Optional instance to populate.
     * @return {module:egoisdk/AbstractSendVoice} The populated <code>AbstractSendVoice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AbstractSendVoice();
            SendSmartSmsAllOf.constructFromObject(data, obj);
            AbstractSendVoiceAllOf.constructFromObject(data, obj);
            AbstractSendVoiceAllOf1.constructFromObject(data, obj);
            SegmentsActionSend.constructFromObject(data, obj);
            NotifyUserIdArrayActionSend.constructFromObject(data, obj);
            LimitContactsActionSend.constructFromObject(data, obj);
            LimitHourActionSend.constructFromObject(data, obj);
            LimitSpeedActionSend.constructFromObject(data, obj);

            if (data.hasOwnProperty('list_id')) {
                obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
            }
            if (data.hasOwnProperty('destination_field')) {
                obj['destination_field'] = ApiClient.convertToType(data['destination_field'], 'String');
            }
            if (data.hasOwnProperty('unique_contacts_only')) {
                obj['unique_contacts_only'] = ApiClient.convertToType(data['unique_contacts_only'], 'Boolean');
            }
            if (data.hasOwnProperty('segments')) {
                obj['segments'] = OSegmentsActionSend.constructFromObject(data['segments']);
            }
            if (data.hasOwnProperty('notify')) {
                obj['notify'] = ApiClient.convertToType(data['notify'], ['Number']);
            }
            if (data.hasOwnProperty('limit_contacts')) {
                obj['limit_contacts'] = OLimitContactsActionSend.constructFromObject(data['limit_contacts']);
            }
            if (data.hasOwnProperty('limit_hour')) {
                obj['limit_hour'] = LimitHourActionSendLimitHour.constructFromObject(data['limit_hour']);
            }
            if (data.hasOwnProperty('limit_speed')) {
                obj['limit_speed'] = ApiClient.convertToType(data['limit_speed'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AbstractSendVoice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AbstractSendVoice</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AbstractSendVoice.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['destination_field'] && !(typeof data['destination_field'] === 'string' || data['destination_field'] instanceof String)) {
            throw new Error("Expected the field `destination_field` to be a primitive type in the JSON string but got " + data['destination_field']);
        }
        // validate the optional field `segments`
        if (data['segments']) { // data not null
          OSegmentsActionSend.validateJSON(data['segments']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['notify'])) {
            throw new Error("Expected the field `notify` to be an array in the JSON data but got " + data['notify']);
        }
        // validate the optional field `limit_contacts`
        if (data['limit_contacts']) { // data not null
          OLimitContactsActionSend.validateJSON(data['limit_contacts']);
        }
        // validate the optional field `limit_hour`
        if (data['limit_hour']) { // data not null
          LimitHourActionSendLimitHour.validateJSON(data['limit_hour']);
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
     * Returns Destination field of this campaign
     * @return {module:egoisdk/AbstractSendVoice.DestinationFieldEnum}
     */
    getDestinationField() {
        return this.destination_field;
    }

    /**
     * Sets Destination field of this campaign
     * @param {module:egoisdk/AbstractSendVoice.DestinationFieldEnum} destinationField Destination field of this campaign
     */
    setDestinationField(destinationField) {
        this['destination_field'] = destinationField;
    }
/**
     * Returns True to send the campaign only to unique contacts
     * @return {Boolean}
     */
    getUniqueContactsOnly() {
        return this.unique_contacts_only;
    }

    /**
     * Sets True to send the campaign only to unique contacts
     * @param {Boolean} uniqueContactsOnly True to send the campaign only to unique contacts
     */
    setUniqueContactsOnly(uniqueContactsOnly) {
        this['unique_contacts_only'] = uniqueContactsOnly;
    }
/**
     * @return {module:egoisdk/OSegmentsActionSend}
     */
    getSegments() {
        return this.segments;
    }

    /**
     * @param {module:egoisdk/OSegmentsActionSend} segments
     */
    setSegments(segments) {
        this['segments'] = segments;
    }
/**
     * Returns Array of IDs of the users to notify
     * @return {Array.<Number>}
     */
    getNotify() {
        return this.notify;
    }

    /**
     * Sets Array of IDs of the users to notify
     * @param {Array.<Number>} notify Array of IDs of the users to notify
     */
    setNotify(notify) {
        this['notify'] = notify;
    }
/**
     * @return {module:egoisdk/OLimitContactsActionSend}
     */
    getLimitContacts() {
        return this.limit_contacts;
    }

    /**
     * @param {module:egoisdk/OLimitContactsActionSend} limitContacts
     */
    setLimitContacts(limitContacts) {
        this['limit_contacts'] = limitContacts;
    }
/**
     * @return {module:egoisdk/LimitHourActionSendLimitHour}
     */
    getLimitHour() {
        return this.limit_hour;
    }

    /**
     * @param {module:egoisdk/LimitHourActionSendLimitHour} limitHour
     */
    setLimitHour(limitHour) {
        this['limit_hour'] = limitHour;
    }
/**
     * Returns Speed limit to send the campaign
     * minimum: 1
     * maximum: 10
     * @return {Number}
     */
    getLimitSpeed() {
        return this.limit_speed;
    }

    /**
     * Sets Speed limit to send the campaign
     * @param {Number} limitSpeed Speed limit to send the campaign
     */
    setLimitSpeed(limitSpeed) {
        this['limit_speed'] = limitSpeed;
    }

}

AbstractSendVoice.RequiredProperties = ["list_id", "destination_field", "segments"];

/**
 * @member {Number} list_id
 */
AbstractSendVoice.prototype['list_id'] = undefined;

/**
 * Destination field of this campaign
 * @member {module:egoisdk/AbstractSendVoice.DestinationFieldEnum} destination_field
 */
AbstractSendVoice.prototype['destination_field'] = undefined;

/**
 * True to send the campaign only to unique contacts
 * @member {Boolean} unique_contacts_only
 * @default false
 */
AbstractSendVoice.prototype['unique_contacts_only'] = false;

/**
 * @member {module:egoisdk/OSegmentsActionSend} segments
 */
AbstractSendVoice.prototype['segments'] = undefined;

/**
 * Array of IDs of the users to notify
 * @member {Array.<Number>} notify
 */
AbstractSendVoice.prototype['notify'] = undefined;

/**
 * @member {module:egoisdk/OLimitContactsActionSend} limit_contacts
 */
AbstractSendVoice.prototype['limit_contacts'] = undefined;

/**
 * @member {module:egoisdk/LimitHourActionSendLimitHour} limit_hour
 */
AbstractSendVoice.prototype['limit_hour'] = undefined;

/**
 * Speed limit to send the campaign
 * @member {Number} limit_speed
 */
AbstractSendVoice.prototype['limit_speed'] = undefined;


// Implement SendSmartSmsAllOf interface:
/**
 * @member {Number} list_id
 */
SendSmartSmsAllOf.prototype['list_id'] = undefined;
// Implement AbstractSendVoiceAllOf interface:
/**
 * Destination field of this campaign
 * @member {module:egoisdk/AbstractSendVoiceAllOf.DestinationFieldEnum} destination_field
 */
AbstractSendVoiceAllOf.prototype['destination_field'] = undefined;
// Implement AbstractSendVoiceAllOf1 interface:
/**
 * True to send the campaign only to unique contacts
 * @member {Boolean} unique_contacts_only
 * @default false
 */
AbstractSendVoiceAllOf1.prototype['unique_contacts_only'] = false;
// Implement SegmentsActionSend interface:
/**
 * @member {module:egoisdk/OSegmentsActionSend} segments
 */
SegmentsActionSend.prototype['segments'] = undefined;
// Implement NotifyUserIdArrayActionSend interface:
/**
 * Array of IDs of the users to notify
 * @member {Array.<Number>} notify
 */
NotifyUserIdArrayActionSend.prototype['notify'] = undefined;
// Implement LimitContactsActionSend interface:
/**
 * @member {module:egoisdk/OLimitContactsActionSend} limit_contacts
 */
LimitContactsActionSend.prototype['limit_contacts'] = undefined;
// Implement LimitHourActionSend interface:
/**
 * @member {module:egoisdk/LimitHourActionSendLimitHour} limit_hour
 */
LimitHourActionSend.prototype['limit_hour'] = undefined;
// Implement LimitSpeedActionSend interface:
/**
 * Speed limit to send the campaign
 * @member {Number} limit_speed
 */
LimitSpeedActionSend.prototype['limit_speed'] = undefined;



/**
 * Allowed values for the <code>destination_field</code> property.
 * @enum {String}
 * @readonly
 */
AbstractSendVoice['DestinationFieldEnum'] = {

    /**
     * value: "phone"
     * @const
     */
    "phone": "phone",

    /**
     * value: "cellphone"
     * @const
     */
    "cellphone": "cellphone",

    /**
     * value: "phone_failsafe_cellphone"
     * @const
     */
    "phone_failsafe_cellphone": "phone_failsafe_cellphone",

    /**
     * value: "cellphone_failsafe_phone"
     * @const
     */
    "cellphone_failsafe_phone": "cellphone_failsafe_phone",

    /**
     * value: "cellphone_phone"
     * @const
     */
    "cellphone_phone": "cellphone_phone"
};



export default AbstractSendVoice;

