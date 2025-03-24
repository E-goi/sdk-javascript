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
import ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner from './ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner';
import ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner from './ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner';
import ContactInsideBaseBulk from './ContactInsideBaseBulk';
import Language from './Language';

/**
 * The ContactBaseFieldsBulkSchemaBase model module.
 * @module egoisdk/ContactBaseFieldsBulkSchemaBase
 * @version 1.1.6RC1
 */
class ContactBaseFieldsBulkSchemaBase {
    /**
     * Constructs a new <code>ContactBaseFieldsBulkSchemaBase</code>.
     * Contact base fields
     * @alias module:egoisdk/ContactBaseFieldsBulkSchemaBase
     * @implements module:egoisdk/ContactInsideBaseBulk
     */
    constructor() { 
        ContactInsideBaseBulk.initialize(this);
        ContactBaseFieldsBulkSchemaBase.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContactBaseFieldsBulkSchemaBase</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase} obj Optional instance to populate.
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase} The populated <code>ContactBaseFieldsBulkSchemaBase</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactBaseFieldsBulkSchemaBase();
            ContactInsideBaseBulk.constructFromObject(data, obj);

            if (data.hasOwnProperty('contact_id')) {
                obj['contact_id'] = ApiClient.convertToType(data['contact_id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('consent')) {
                obj['consent'] = ApiClient.convertToType(data['consent'], 'String');
            }
            if (data.hasOwnProperty('consent_date')) {
                obj['consent_date'] = ApiClient.convertToType(data['consent_date'], 'Date');
            }
            if (data.hasOwnProperty('subscription_method')) {
                obj['subscription_method'] = ApiClient.convertToType(data['subscription_method'], 'String');
            }
            if (data.hasOwnProperty('subscription_date')) {
                obj['subscription_date'] = ApiClient.convertToType(data['subscription_date'], 'Date');
            }
            if (data.hasOwnProperty('subscription_form')) {
                obj['subscription_form'] = ApiClient.convertToType(data['subscription_form'], 'Number');
            }
            if (data.hasOwnProperty('unsubscription_method')) {
                obj['unsubscription_method'] = ApiClient.convertToType(data['unsubscription_method'], 'String');
            }
            if (data.hasOwnProperty('unsubscription_reason')) {
                obj['unsubscription_reason'] = ApiClient.convertToType(data['unsubscription_reason'], 'String');
            }
            if (data.hasOwnProperty('unsubscription_observation')) {
                obj['unsubscription_observation'] = ApiClient.convertToType(data['unsubscription_observation'], 'String');
            }
            if (data.hasOwnProperty('unsubscription_date')) {
                obj['unsubscription_date'] = ApiClient.convertToType(data['unsubscription_date'], 'Date');
            }
            if (data.hasOwnProperty('change_date')) {
                obj['change_date'] = ApiClient.convertToType(data['change_date'], 'Date');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('birth_date')) {
                obj['birth_date'] = ApiClient.convertToType(data['birth_date'], 'Date');
            }
            if (data.hasOwnProperty('language')) {
                obj['language'] = Language.constructFromObject(data['language']);
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('email_status')) {
                obj['email_status'] = ApiClient.convertToType(data['email_status'], 'String');
            }
            if (data.hasOwnProperty('cellphone')) {
                obj['cellphone'] = ApiClient.convertToType(data['cellphone'], 'String');
            }
            if (data.hasOwnProperty('cellphone_status')) {
                obj['cellphone_status'] = ApiClient.convertToType(data['cellphone_status'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('phone_status')) {
                obj['phone_status'] = ApiClient.convertToType(data['phone_status'], 'String');
            }
            if (data.hasOwnProperty('push_token_android')) {
                obj['push_token_android'] = ApiClient.convertToType(data['push_token_android'], [ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner]);
            }
            if (data.hasOwnProperty('push_token_ios')) {
                obj['push_token_ios'] = ApiClient.convertToType(data['push_token_ios'], [ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactBaseFieldsBulkSchemaBase</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactBaseFieldsBulkSchemaBase</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contact_id'] && !(typeof data['contact_id'] === 'string' || data['contact_id'] instanceof String)) {
            throw new Error("Expected the field `contact_id` to be a primitive type in the JSON string but got " + data['contact_id']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['consent'] && !(typeof data['consent'] === 'string' || data['consent'] instanceof String)) {
            throw new Error("Expected the field `consent` to be a primitive type in the JSON string but got " + data['consent']);
        }
        // ensure the json data is a string
        if (data['subscription_method'] && !(typeof data['subscription_method'] === 'string' || data['subscription_method'] instanceof String)) {
            throw new Error("Expected the field `subscription_method` to be a primitive type in the JSON string but got " + data['subscription_method']);
        }
        // ensure the json data is a string
        if (data['unsubscription_method'] && !(typeof data['unsubscription_method'] === 'string' || data['unsubscription_method'] instanceof String)) {
            throw new Error("Expected the field `unsubscription_method` to be a primitive type in the JSON string but got " + data['unsubscription_method']);
        }
        // ensure the json data is a string
        if (data['unsubscription_reason'] && !(typeof data['unsubscription_reason'] === 'string' || data['unsubscription_reason'] instanceof String)) {
            throw new Error("Expected the field `unsubscription_reason` to be a primitive type in the JSON string but got " + data['unsubscription_reason']);
        }
        // ensure the json data is a string
        if (data['unsubscription_observation'] && !(typeof data['unsubscription_observation'] === 'string' || data['unsubscription_observation'] instanceof String)) {
            throw new Error("Expected the field `unsubscription_observation` to be a primitive type in the JSON string but got " + data['unsubscription_observation']);
        }
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['email_status'] && !(typeof data['email_status'] === 'string' || data['email_status'] instanceof String)) {
            throw new Error("Expected the field `email_status` to be a primitive type in the JSON string but got " + data['email_status']);
        }
        // ensure the json data is a string
        if (data['cellphone'] && !(typeof data['cellphone'] === 'string' || data['cellphone'] instanceof String)) {
            throw new Error("Expected the field `cellphone` to be a primitive type in the JSON string but got " + data['cellphone']);
        }
        // ensure the json data is a string
        if (data['cellphone_status'] && !(typeof data['cellphone_status'] === 'string' || data['cellphone_status'] instanceof String)) {
            throw new Error("Expected the field `cellphone_status` to be a primitive type in the JSON string but got " + data['cellphone_status']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['phone_status'] && !(typeof data['phone_status'] === 'string' || data['phone_status'] instanceof String)) {
            throw new Error("Expected the field `phone_status` to be a primitive type in the JSON string but got " + data['phone_status']);
        }
        if (data['push_token_android']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['push_token_android'])) {
                throw new Error("Expected the field `push_token_android` to be an array in the JSON data but got " + data['push_token_android']);
            }
            // validate the optional field `push_token_android` (array)
            for (const item of data['push_token_android']) {
                ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner.validateJsonObject(item);
            };
        }
        if (data['push_token_ios']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['push_token_ios'])) {
                throw new Error("Expected the field `push_token_ios` to be an array in the JSON data but got " + data['push_token_ios']);
            }
            // validate the optional field `push_token_ios` (array)
            for (const item of data['push_token_ios']) {
                ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * @return {String}
     */
    getContactId() {
        return this.contact_id;
    }

    /**
     * @param {String} contactId
     */
    setContactId(contactId) {
        this['contact_id'] = contactId;
    }
/**
     * Returns Status of the contact
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase.StatusEnum}
     */
    getStatus() {
        return this.status;
    }

    /**
     * Sets Status of the contact
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase.StatusEnum} status Status of the contact
     */
    setStatus(status) {
        this['status'] = status;
    }
/**
     * Returns Contact consent
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase.ConsentEnum}
     */
    getConsent() {
        return this.consent;
    }

    /**
     * Sets Contact consent
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase.ConsentEnum} consent Contact consent
     */
    setConsent(consent) {
        this['consent'] = consent;
    }
/**
     * Returns Date and hour of the contact consent
     * @return {Date}
     */
    getConsentDate() {
        return this.consent_date;
    }

    /**
     * Sets Date and hour of the contact consent
     * @param {Date} consentDate Date and hour of the contact consent
     */
    setConsentDate(consentDate) {
        this['consent_date'] = consentDate;
    }
/**
     * Returns Contact subscription method
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase.SubscriptionMethodEnum}
     */
    getSubscriptionMethod() {
        return this.subscription_method;
    }

    /**
     * Sets Contact subscription method
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase.SubscriptionMethodEnum} subscriptionMethod Contact subscription method
     */
    setSubscriptionMethod(subscriptionMethod) {
        this['subscription_method'] = subscriptionMethod;
    }
/**
     * Returns Date and hour of the contact subscription
     * @return {Date}
     */
    getSubscriptionDate() {
        return this.subscription_date;
    }

    /**
     * Sets Date and hour of the contact subscription
     * @param {Date} subscriptionDate Date and hour of the contact subscription
     */
    setSubscriptionDate(subscriptionDate) {
        this['subscription_date'] = subscriptionDate;
    }
/**
     * Returns Contact subscription form
     * minimum: 0
     * @return {Number}
     */
    getSubscriptionForm() {
        return this.subscription_form;
    }

    /**
     * Sets Contact subscription form
     * @param {Number} subscriptionForm Contact subscription form
     */
    setSubscriptionForm(subscriptionForm) {
        this['subscription_form'] = subscriptionForm;
    }
/**
     * Returns Contact unsubscription method
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase.UnsubscriptionMethodEnum}
     */
    getUnsubscriptionMethod() {
        return this.unsubscription_method;
    }

    /**
     * Sets Contact unsubscription method
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase.UnsubscriptionMethodEnum} unsubscriptionMethod Contact unsubscription method
     */
    setUnsubscriptionMethod(unsubscriptionMethod) {
        this['unsubscription_method'] = unsubscriptionMethod;
    }
/**
     * Returns Contact unsubscription reason
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase.UnsubscriptionReasonEnum}
     */
    getUnsubscriptionReason() {
        return this.unsubscription_reason;
    }

    /**
     * Sets Contact unsubscription reason
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase.UnsubscriptionReasonEnum} unsubscriptionReason Contact unsubscription reason
     */
    setUnsubscriptionReason(unsubscriptionReason) {
        this['unsubscription_reason'] = unsubscriptionReason;
    }
/**
     * Returns Contact unsubscription observation
     * @return {String}
     */
    getUnsubscriptionObservation() {
        return this.unsubscription_observation;
    }

    /**
     * Sets Contact unsubscription observation
     * @param {String} unsubscriptionObservation Contact unsubscription observation
     */
    setUnsubscriptionObservation(unsubscriptionObservation) {
        this['unsubscription_observation'] = unsubscriptionObservation;
    }
/**
     * Returns Contact unsubscription date
     * @return {Date}
     */
    getUnsubscriptionDate() {
        return this.unsubscription_date;
    }

    /**
     * Sets Contact unsubscription date
     * @param {Date} unsubscriptionDate Contact unsubscription date
     */
    setUnsubscriptionDate(unsubscriptionDate) {
        this['unsubscription_date'] = unsubscriptionDate;
    }
/**
     * Returns Last modification date of the contact
     * @return {Date}
     */
    getChangeDate() {
        return this.change_date;
    }

    /**
     * Sets Last modification date of the contact
     * @param {Date} changeDate Last modification date of the contact
     */
    setChangeDate(changeDate) {
        this['change_date'] = changeDate;
    }
/**
     * Returns First name of the contact
     * @return {String}
     */
    getFirstName() {
        return this.first_name;
    }

    /**
     * Sets First name of the contact
     * @param {String} firstName First name of the contact
     */
    setFirstName(firstName) {
        this['first_name'] = firstName;
    }
/**
     * Returns Last name of the contact
     * @return {String}
     */
    getLastName() {
        return this.last_name;
    }

    /**
     * Sets Last name of the contact
     * @param {String} lastName Last name of the contact
     */
    setLastName(lastName) {
        this['last_name'] = lastName;
    }
/**
     * Returns Birth date of the contact
     * @return {Date}
     */
    getBirthDate() {
        return this.birth_date;
    }

    /**
     * Sets Birth date of the contact
     * @param {Date} birthDate Birth date of the contact
     */
    setBirthDate(birthDate) {
        this['birth_date'] = birthDate;
    }
/**
     * @return {module:egoisdk/Language}
     */
    getLanguage() {
        return this.language;
    }

    /**
     * @param {module:egoisdk/Language} language
     */
    setLanguage(language) {
        this['language'] = language;
    }
/**
     * Returns Email of the contact
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Email of the contact
     * @param {String} email Email of the contact
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * Returns Email channel status
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase.EmailStatusEnum}
     */
    getEmailStatus() {
        return this.email_status;
    }

    /**
     * Sets Email channel status
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase.EmailStatusEnum} emailStatus Email channel status
     */
    setEmailStatus(emailStatus) {
        this['email_status'] = emailStatus;
    }
/**
     * Returns Cellphone of the contact
     * @return {String}
     */
    getCellphone() {
        return this.cellphone;
    }

    /**
     * Sets Cellphone of the contact
     * @param {String} cellphone Cellphone of the contact
     */
    setCellphone(cellphone) {
        this['cellphone'] = cellphone;
    }
/**
     * Returns Cellphone channel status
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase.CellphoneStatusEnum}
     */
    getCellphoneStatus() {
        return this.cellphone_status;
    }

    /**
     * Sets Cellphone channel status
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase.CellphoneStatusEnum} cellphoneStatus Cellphone channel status
     */
    setCellphoneStatus(cellphoneStatus) {
        this['cellphone_status'] = cellphoneStatus;
    }
/**
     * Returns Phone of the contact
     * @return {String}
     */
    getPhone() {
        return this.phone;
    }

    /**
     * Sets Phone of the contact
     * @param {String} phone Phone of the contact
     */
    setPhone(phone) {
        this['phone'] = phone;
    }
/**
     * Returns Phone channel status
     * @return {module:egoisdk/ContactBaseFieldsBulkSchemaBase.PhoneStatusEnum}
     */
    getPhoneStatus() {
        return this.phone_status;
    }

    /**
     * Sets Phone channel status
     * @param {module:egoisdk/ContactBaseFieldsBulkSchemaBase.PhoneStatusEnum} phoneStatus Phone channel status
     */
    setPhoneStatus(phoneStatus) {
        this['phone_status'] = phoneStatus;
    }
/**
     * Returns Android push token of the contact
     * @return {Array.<module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner>}
     */
    getPushTokenAndroid() {
        return this.push_token_android;
    }

    /**
     * Sets Android push token of the contact
     * @param {Array.<module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner>} pushTokenAndroid Android push token of the contact
     */
    setPushTokenAndroid(pushTokenAndroid) {
        this['push_token_android'] = pushTokenAndroid;
    }
/**
     * Returns IOS push token of the contact
     * @return {Array.<module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner>}
     */
    getPushTokenIos() {
        return this.push_token_ios;
    }

    /**
     * Sets IOS push token of the contact
     * @param {Array.<module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner>} pushTokenIos IOS push token of the contact
     */
    setPushTokenIos(pushTokenIos) {
        this['push_token_ios'] = pushTokenIos;
    }

}



/**
 * @member {String} contact_id
 */
ContactBaseFieldsBulkSchemaBase.prototype['contact_id'] = undefined;

/**
 * Status of the contact
 * @member {module:egoisdk/ContactBaseFieldsBulkSchemaBase.StatusEnum} status
 * @default 'active'
 */
ContactBaseFieldsBulkSchemaBase.prototype['status'] = 'active';

/**
 * Contact consent
 * @member {module:egoisdk/ContactBaseFieldsBulkSchemaBase.ConsentEnum} consent
 * @default 'consent'
 */
ContactBaseFieldsBulkSchemaBase.prototype['consent'] = 'consent';

/**
 * Date and hour of the contact consent
 * @member {Date} consent_date
 */
ContactBaseFieldsBulkSchemaBase.prototype['consent_date'] = undefined;

/**
 * Contact subscription method
 * @member {module:egoisdk/ContactBaseFieldsBulkSchemaBase.SubscriptionMethodEnum} subscription_method
 */
ContactBaseFieldsBulkSchemaBase.prototype['subscription_method'] = undefined;

/**
 * Date and hour of the contact subscription
 * @member {Date} subscription_date
 */
ContactBaseFieldsBulkSchemaBase.prototype['subscription_date'] = undefined;

/**
 * Contact subscription form
 * @member {Number} subscription_form
 */
ContactBaseFieldsBulkSchemaBase.prototype['subscription_form'] = undefined;

/**
 * Contact unsubscription method
 * @member {module:egoisdk/ContactBaseFieldsBulkSchemaBase.UnsubscriptionMethodEnum} unsubscription_method
 */
ContactBaseFieldsBulkSchemaBase.prototype['unsubscription_method'] = undefined;

/**
 * Contact unsubscription reason
 * @member {module:egoisdk/ContactBaseFieldsBulkSchemaBase.UnsubscriptionReasonEnum} unsubscription_reason
 */
ContactBaseFieldsBulkSchemaBase.prototype['unsubscription_reason'] = undefined;

/**
 * Contact unsubscription observation
 * @member {String} unsubscription_observation
 */
ContactBaseFieldsBulkSchemaBase.prototype['unsubscription_observation'] = undefined;

/**
 * Contact unsubscription date
 * @member {Date} unsubscription_date
 */
ContactBaseFieldsBulkSchemaBase.prototype['unsubscription_date'] = undefined;

/**
 * Last modification date of the contact
 * @member {Date} change_date
 */
ContactBaseFieldsBulkSchemaBase.prototype['change_date'] = undefined;

/**
 * First name of the contact
 * @member {String} first_name
 */
ContactBaseFieldsBulkSchemaBase.prototype['first_name'] = undefined;

/**
 * Last name of the contact
 * @member {String} last_name
 */
ContactBaseFieldsBulkSchemaBase.prototype['last_name'] = undefined;

/**
 * Birth date of the contact
 * @member {Date} birth_date
 */
ContactBaseFieldsBulkSchemaBase.prototype['birth_date'] = undefined;

/**
 * @member {module:egoisdk/Language} language
 */
ContactBaseFieldsBulkSchemaBase.prototype['language'] = undefined;

/**
 * Email of the contact
 * @member {String} email
 */
ContactBaseFieldsBulkSchemaBase.prototype['email'] = undefined;

/**
 * Email channel status
 * @member {module:egoisdk/ContactBaseFieldsBulkSchemaBase.EmailStatusEnum} email_status
 * @default 'active'
 */
ContactBaseFieldsBulkSchemaBase.prototype['email_status'] = 'active';

/**
 * Cellphone of the contact
 * @member {String} cellphone
 */
ContactBaseFieldsBulkSchemaBase.prototype['cellphone'] = undefined;

/**
 * Cellphone channel status
 * @member {module:egoisdk/ContactBaseFieldsBulkSchemaBase.CellphoneStatusEnum} cellphone_status
 * @default 'active'
 */
ContactBaseFieldsBulkSchemaBase.prototype['cellphone_status'] = 'active';

/**
 * Phone of the contact
 * @member {String} phone
 */
ContactBaseFieldsBulkSchemaBase.prototype['phone'] = undefined;

/**
 * Phone channel status
 * @member {module:egoisdk/ContactBaseFieldsBulkSchemaBase.PhoneStatusEnum} phone_status
 * @default 'active'
 */
ContactBaseFieldsBulkSchemaBase.prototype['phone_status'] = 'active';

/**
 * Android push token of the contact
 * @member {Array.<module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner>} push_token_android
 */
ContactBaseFieldsBulkSchemaBase.prototype['push_token_android'] = undefined;

/**
 * IOS push token of the contact
 * @member {Array.<module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner>} push_token_ios
 */
ContactBaseFieldsBulkSchemaBase.prototype['push_token_ios'] = undefined;


// Implement ContactInsideBaseBulk interface:
/**
 * @member {String} contact_id
 */
ContactInsideBaseBulk.prototype['contact_id'] = undefined;
/**
 * Status of the contact
 * @member {module:egoisdk/ContactInsideBaseBulk.StatusEnum} status
 * @default 'active'
 */
ContactInsideBaseBulk.prototype['status'] = 'active';
/**
 * Contact consent
 * @member {module:egoisdk/ContactInsideBaseBulk.ConsentEnum} consent
 * @default 'consent'
 */
ContactInsideBaseBulk.prototype['consent'] = 'consent';
/**
 * Date and hour of the contact consent
 * @member {Date} consent_date
 */
ContactInsideBaseBulk.prototype['consent_date'] = undefined;
/**
 * Contact subscription method
 * @member {module:egoisdk/ContactInsideBaseBulk.SubscriptionMethodEnum} subscription_method
 */
ContactInsideBaseBulk.prototype['subscription_method'] = undefined;
/**
 * Date and hour of the contact subscription
 * @member {Date} subscription_date
 */
ContactInsideBaseBulk.prototype['subscription_date'] = undefined;
/**
 * Contact subscription form
 * @member {Number} subscription_form
 */
ContactInsideBaseBulk.prototype['subscription_form'] = undefined;
/**
 * Contact unsubscription method
 * @member {module:egoisdk/ContactInsideBaseBulk.UnsubscriptionMethodEnum} unsubscription_method
 */
ContactInsideBaseBulk.prototype['unsubscription_method'] = undefined;
/**
 * Contact unsubscription reason
 * @member {module:egoisdk/ContactInsideBaseBulk.UnsubscriptionReasonEnum} unsubscription_reason
 */
ContactInsideBaseBulk.prototype['unsubscription_reason'] = undefined;
/**
 * Contact unsubscription observation
 * @member {String} unsubscription_observation
 */
ContactInsideBaseBulk.prototype['unsubscription_observation'] = undefined;
/**
 * Contact unsubscription date
 * @member {Date} unsubscription_date
 */
ContactInsideBaseBulk.prototype['unsubscription_date'] = undefined;
/**
 * Last modification date of the contact
 * @member {Date} change_date
 */
ContactInsideBaseBulk.prototype['change_date'] = undefined;
/**
 * First name of the contact
 * @member {String} first_name
 */
ContactInsideBaseBulk.prototype['first_name'] = undefined;
/**
 * Last name of the contact
 * @member {String} last_name
 */
ContactInsideBaseBulk.prototype['last_name'] = undefined;
/**
 * Birth date of the contact
 * @member {Date} birth_date
 */
ContactInsideBaseBulk.prototype['birth_date'] = undefined;
/**
 * @member {module:egoisdk/Language} language
 */
ContactInsideBaseBulk.prototype['language'] = undefined;
/**
 * Email of the contact
 * @member {String} email
 */
ContactInsideBaseBulk.prototype['email'] = undefined;
/**
 * Email channel status
 * @member {module:egoisdk/ContactInsideBaseBulk.EmailStatusEnum} email_status
 * @default 'active'
 */
ContactInsideBaseBulk.prototype['email_status'] = 'active';
/**
 * Cellphone of the contact
 * @member {String} cellphone
 */
ContactInsideBaseBulk.prototype['cellphone'] = undefined;
/**
 * Cellphone channel status
 * @member {module:egoisdk/ContactInsideBaseBulk.CellphoneStatusEnum} cellphone_status
 * @default 'active'
 */
ContactInsideBaseBulk.prototype['cellphone_status'] = 'active';
/**
 * Phone of the contact
 * @member {String} phone
 */
ContactInsideBaseBulk.prototype['phone'] = undefined;
/**
 * Phone channel status
 * @member {module:egoisdk/ContactInsideBaseBulk.PhoneStatusEnum} phone_status
 * @default 'active'
 */
ContactInsideBaseBulk.prototype['phone_status'] = 'active';
/**
 * Android push token of the contact
 * @member {Array.<module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner>} push_token_android
 */
ContactInsideBaseBulk.prototype['push_token_android'] = undefined;
/**
 * IOS push token of the contact
 * @member {Array.<module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner>} push_token_ios
 */
ContactInsideBaseBulk.prototype['push_token_ios'] = undefined;



/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseFieldsBulkSchemaBase['StatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",

    /**
     * value: "removed"
     * @const
     */
    "removed": "removed",

    /**
     * value: "unconfirmed"
     * @const
     */
    "unconfirmed": "unconfirmed"
};


/**
 * Allowed values for the <code>consent</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseFieldsBulkSchemaBase['ConsentEnum'] = {

    /**
     * value: "any"
     * @const
     */
    "any": "any",

    /**
     * value: "consent"
     * @const
     */
    "consent": "consent",

    /**
     * value: "contract"
     * @const
     */
    "contract": "contract",

    /**
     * value: "legitimate_interest"
     * @const
     */
    "legitimate_interest": "legitimate_interest",

    /**
     * value: "none"
     * @const
     */
    "none": "none",

    /**
     * value: "protect_vital_interests"
     * @const
     */
    "protect_vital_interests": "protect_vital_interests",

    /**
     * value: "public_interests"
     * @const
     */
    "public_interests": "public_interests",

    /**
     * value: "required_by_law"
     * @const
     */
    "required_by_law": "required_by_law",

    /**
     * value: "withdrawn"
     * @const
     */
    "withdrawn": "withdrawn"
};


/**
 * Allowed values for the <code>subscription_method</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseFieldsBulkSchemaBase['SubscriptionMethodEnum'] = {

    /**
     * value: "manual"
     * @const
     */
    "manual": "manual",

    /**
     * value: "form"
     * @const
     */
    "form": "form",

    /**
     * value: "imported"
     * @const
     */
    "imported": "imported",

    /**
     * value: "referral"
     * @const
     */
    "referral": "referral",

    /**
     * value: "api"
     * @const
     */
    "api": "api"
};


/**
 * Allowed values for the <code>unsubscription_method</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseFieldsBulkSchemaBase['UnsubscriptionMethodEnum'] = {

    /**
     * value: "manual"
     * @const
     */
    "manual": "manual",

    /**
     * value: "form"
     * @const
     */
    "form": "form",

    /**
     * value: "unsubscribe_link"
     * @const
     */
    "unsubscribe_link": "unsubscribe_link",

    /**
     * value: "bounce"
     * @const
     */
    "bounce": "bounce",

    /**
     * value: "api"
     * @const
     */
    "api": "api",

    /**
     * value: ""
     * @const
     */
    "empty": ""
};


/**
 * Allowed values for the <code>unsubscription_reason</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseFieldsBulkSchemaBase['UnsubscriptionReasonEnum'] = {

    /**
     * value: "not_interested"
     * @const
     */
    "not_interested": "not_interested",

    /**
     * value: "lack_of_time"
     * @const
     */
    "lack_of_time": "lack_of_time",

    /**
     * value: "email_address_change"
     * @const
     */
    "email_address_change": "email_address_change",

    /**
     * value: "spam"
     * @const
     */
    "spam": "spam",

    /**
     * value: "other"
     * @const
     */
    "other": "other",

    /**
     * value: ""
     * @const
     */
    "empty": ""
};


/**
 * Allowed values for the <code>email_status</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseFieldsBulkSchemaBase['EmailStatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};


/**
 * Allowed values for the <code>cellphone_status</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseFieldsBulkSchemaBase['CellphoneStatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};


/**
 * Allowed values for the <code>phone_status</code> property.
 * @enum {String}
 * @readonly
 */
ContactBaseFieldsBulkSchemaBase['PhoneStatusEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive"
};



export default ContactBaseFieldsBulkSchemaBase;

