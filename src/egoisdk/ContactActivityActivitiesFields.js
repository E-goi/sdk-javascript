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

/**
 * The ContactActivityActivitiesFields model module.
 * @module egoisdk/ContactActivityActivitiesFields
 * @version 1.1.6RC1
 */
class ContactActivityActivitiesFields {
    /**
     * Constructs a new <code>ContactActivityActivitiesFields</code>.
     * List of contacts activities to include in the report
     * @alias module:egoisdk/ContactActivityActivitiesFields
     * @param opens {Boolean} True to include opens, false otherwise
     * @param clicks {Boolean} True to include clicks, false otherwise
     * @param recommends {Boolean} True to include recommends, false otherwise
     * @param conversion {Boolean} True to include convertions, false otherwise
     * @param emailSend {Boolean} True to include email sends, false otherwise
     * @param smsSend {Boolean} True to include sms sends, false otherwise
     * @param smsReport {Boolean} True to include sms report, false otherwise
     * @param voiceSend {Boolean} True to include voice sends, false otherwise
     * @param voiceReport {Boolean} True to include voice report, false otherwise
     * @param invitationSend {Boolean} True to include invitation sends, false otherwise
     * @param invitationOpen {Boolean} True to include invitation opens, false otherwise
     * @param unsubscribe {Boolean} True to include unsubscriptions, false otherwise
     * @param emailSoftBounce {Boolean} True to include email soft bounces, false otherwise
     * @param emailHardBounce {Boolean} True to include email hard bounces, false otherwise
     * @param subscription {Boolean} True to include subscriptions, false otherwise
     * @param resubscription {Boolean} True to include re-subscriptions, false otherwise
     * @param unsubscribeReason {Boolean} True to include unsubscription reason, false otherwise
     * @param facebookLike {Boolean} True to include facebook likes, false otherwise
     * @param socialShare {Boolean} True to include social shares, false otherwise
     * @param unsubscribeManual {Boolean} True to include manual unsubscriptions, false otherwise
     * @param doubleOptin {Boolean} True to include double optins, false otherwise
     * @param emailSpamComplaint {Boolean} True to include spam complaints, false otherwise
     * @param emailFieldDisable {Boolean} True to include email field disable, false otherwise
     * @param cellphoneFieldDisable {Boolean} True to include cellphone field disable, false otherwise
     * @param phoneFieldDisable {Boolean} True to include phone field disable, false otherwise
     * @param unsubscribeApi {Boolean} True to include api unsubscriptions, false otherwise
     * @param emailFieldEnable {Boolean} True to include email field enable, false otherwise
     * @param cellphoneFieldEnable {Boolean} True to include cellphone field enable, false otherwise
     * @param phoneFieldEnable {Boolean} True to include phone field enable, false otherwise
     * @param editSubscription {Boolean} True to include edit subscriptions, false otherwise
     * @param automationEvent {Boolean} True to include automation events, false otherwise
     * @param pushSend {Boolean} True to include push events, false otherwise
     * @param pushDelivered {Boolean} True to include push delivered, false otherwise
     * @param pushError {Boolean} True to include push error, false otherwise
     * @param pushReceived {Boolean} True to include push received, false otherwise
     * @param pushOpen {Boolean} True to include push open, false otherwise
     * @param pushCanceled {Boolean} True to include push canceled, false otherwise
     * @param pushUnsubscription {Boolean} True to include push unsubscriptions, false otherwise
     * @param replyToEmail {Boolean} True to include reply to email, false otherwise
     * @param webPushSend {Boolean} True to include web push send, false otherwise
     * @param webPushDelivered {Boolean} True to include web push delivered, false otherwise
     * @param webPushOpen {Boolean} True to include web push open, false otherwise
     * @param webPushBounce {Boolean} True to include web push bounces, false otherwise
     * @param webPushClick {Boolean} True to include web push clicks, false otherwise
     * @param webPushSubscription {Boolean} True to include web push subscriptions, false otherwise
     * @param webPushUnsubscription {Boolean} True to include web push unsubscriptions, false otherwise
     * @param forgetSubscription {Boolean} True to include forget subscriptions, false otherwise
     * @param changeConsent {Boolean} True to include consent change, false otherwise
     * @param doubleOptinResend {Boolean} True to include optin resends, false otherwise
     * @param doubleOptedit {Boolean} True to include double optedit, false otherwise
     */
    constructor(opens, clicks, recommends, conversion, emailSend, smsSend, smsReport, voiceSend, voiceReport, invitationSend, invitationOpen, unsubscribe, emailSoftBounce, emailHardBounce, subscription, resubscription, unsubscribeReason, facebookLike, socialShare, unsubscribeManual, doubleOptin, emailSpamComplaint, emailFieldDisable, cellphoneFieldDisable, phoneFieldDisable, unsubscribeApi, emailFieldEnable, cellphoneFieldEnable, phoneFieldEnable, editSubscription, automationEvent, pushSend, pushDelivered, pushError, pushReceived, pushOpen, pushCanceled, pushUnsubscription, replyToEmail, webPushSend, webPushDelivered, webPushOpen, webPushBounce, webPushClick, webPushSubscription, webPushUnsubscription, forgetSubscription, changeConsent, doubleOptinResend, doubleOptedit) { 
        
        ContactActivityActivitiesFields.initialize(this, opens, clicks, recommends, conversion, emailSend, smsSend, smsReport, voiceSend, voiceReport, invitationSend, invitationOpen, unsubscribe, emailSoftBounce, emailHardBounce, subscription, resubscription, unsubscribeReason, facebookLike, socialShare, unsubscribeManual, doubleOptin, emailSpamComplaint, emailFieldDisable, cellphoneFieldDisable, phoneFieldDisable, unsubscribeApi, emailFieldEnable, cellphoneFieldEnable, phoneFieldEnable, editSubscription, automationEvent, pushSend, pushDelivered, pushError, pushReceived, pushOpen, pushCanceled, pushUnsubscription, replyToEmail, webPushSend, webPushDelivered, webPushOpen, webPushBounce, webPushClick, webPushSubscription, webPushUnsubscription, forgetSubscription, changeConsent, doubleOptinResend, doubleOptedit);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, opens, clicks, recommends, conversion, emailSend, smsSend, smsReport, voiceSend, voiceReport, invitationSend, invitationOpen, unsubscribe, emailSoftBounce, emailHardBounce, subscription, resubscription, unsubscribeReason, facebookLike, socialShare, unsubscribeManual, doubleOptin, emailSpamComplaint, emailFieldDisable, cellphoneFieldDisable, phoneFieldDisable, unsubscribeApi, emailFieldEnable, cellphoneFieldEnable, phoneFieldEnable, editSubscription, automationEvent, pushSend, pushDelivered, pushError, pushReceived, pushOpen, pushCanceled, pushUnsubscription, replyToEmail, webPushSend, webPushDelivered, webPushOpen, webPushBounce, webPushClick, webPushSubscription, webPushUnsubscription, forgetSubscription, changeConsent, doubleOptinResend, doubleOptedit) { 
        obj['opens'] = opens;
        obj['clicks'] = clicks;
        obj['recommends'] = recommends;
        obj['conversion'] = conversion;
        obj['email_send'] = emailSend;
        obj['sms_send'] = smsSend;
        obj['sms_report'] = smsReport;
        obj['voice_send'] = voiceSend;
        obj['voice_report'] = voiceReport;
        obj['invitation_send'] = invitationSend;
        obj['invitation_open'] = invitationOpen;
        obj['unsubscribe'] = unsubscribe;
        obj['email_soft_bounce'] = emailSoftBounce;
        obj['email_hard_bounce'] = emailHardBounce;
        obj['subscription'] = subscription;
        obj['resubscription'] = resubscription;
        obj['unsubscribe_reason'] = unsubscribeReason;
        obj['facebook_like'] = facebookLike;
        obj['social_share'] = socialShare;
        obj['unsubscribe_manual'] = unsubscribeManual;
        obj['double_optin'] = doubleOptin;
        obj['email_spam_complaint'] = emailSpamComplaint;
        obj['email_field_disable'] = emailFieldDisable;
        obj['cellphone_field_disable'] = cellphoneFieldDisable;
        obj['phone_field_disable'] = phoneFieldDisable;
        obj['unsubscribe_api'] = unsubscribeApi;
        obj['email_field_enable'] = emailFieldEnable;
        obj['cellphone_field_enable'] = cellphoneFieldEnable;
        obj['phone_field_enable'] = phoneFieldEnable;
        obj['edit_subscription'] = editSubscription;
        obj['automation_event'] = automationEvent;
        obj['push_send'] = pushSend;
        obj['push_delivered'] = pushDelivered;
        obj['push_error'] = pushError;
        obj['push_received'] = pushReceived;
        obj['push_open'] = pushOpen;
        obj['push_canceled'] = pushCanceled;
        obj['push_unsubscription'] = pushUnsubscription;
        obj['reply_to_email'] = replyToEmail;
        obj['web_push_send'] = webPushSend;
        obj['web_push_delivered'] = webPushDelivered;
        obj['web_push_open'] = webPushOpen;
        obj['web_push_bounce'] = webPushBounce;
        obj['web_push_click'] = webPushClick;
        obj['web_push_subscription'] = webPushSubscription;
        obj['web_push_unsubscription'] = webPushUnsubscription;
        obj['forget_subscription'] = forgetSubscription;
        obj['change_consent'] = changeConsent;
        obj['double_optin_resend'] = doubleOptinResend;
        obj['double_optedit'] = doubleOptedit;
    }

    /**
     * Constructs a <code>ContactActivityActivitiesFields</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ContactActivityActivitiesFields} obj Optional instance to populate.
     * @return {module:egoisdk/ContactActivityActivitiesFields} The populated <code>ContactActivityActivitiesFields</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContactActivityActivitiesFields();

            if (data.hasOwnProperty('opens')) {
                obj['opens'] = ApiClient.convertToType(data['opens'], 'Boolean');
            }
            if (data.hasOwnProperty('clicks')) {
                obj['clicks'] = ApiClient.convertToType(data['clicks'], 'Boolean');
            }
            if (data.hasOwnProperty('recommends')) {
                obj['recommends'] = ApiClient.convertToType(data['recommends'], 'Boolean');
            }
            if (data.hasOwnProperty('conversion')) {
                obj['conversion'] = ApiClient.convertToType(data['conversion'], 'Boolean');
            }
            if (data.hasOwnProperty('email_send')) {
                obj['email_send'] = ApiClient.convertToType(data['email_send'], 'Boolean');
            }
            if (data.hasOwnProperty('sms_send')) {
                obj['sms_send'] = ApiClient.convertToType(data['sms_send'], 'Boolean');
            }
            if (data.hasOwnProperty('sms_report')) {
                obj['sms_report'] = ApiClient.convertToType(data['sms_report'], 'Boolean');
            }
            if (data.hasOwnProperty('voice_send')) {
                obj['voice_send'] = ApiClient.convertToType(data['voice_send'], 'Boolean');
            }
            if (data.hasOwnProperty('voice_report')) {
                obj['voice_report'] = ApiClient.convertToType(data['voice_report'], 'Boolean');
            }
            if (data.hasOwnProperty('invitation_send')) {
                obj['invitation_send'] = ApiClient.convertToType(data['invitation_send'], 'Boolean');
            }
            if (data.hasOwnProperty('invitation_open')) {
                obj['invitation_open'] = ApiClient.convertToType(data['invitation_open'], 'Boolean');
            }
            if (data.hasOwnProperty('unsubscribe')) {
                obj['unsubscribe'] = ApiClient.convertToType(data['unsubscribe'], 'Boolean');
            }
            if (data.hasOwnProperty('email_soft_bounce')) {
                obj['email_soft_bounce'] = ApiClient.convertToType(data['email_soft_bounce'], 'Boolean');
            }
            if (data.hasOwnProperty('email_hard_bounce')) {
                obj['email_hard_bounce'] = ApiClient.convertToType(data['email_hard_bounce'], 'Boolean');
            }
            if (data.hasOwnProperty('subscription')) {
                obj['subscription'] = ApiClient.convertToType(data['subscription'], 'Boolean');
            }
            if (data.hasOwnProperty('resubscription')) {
                obj['resubscription'] = ApiClient.convertToType(data['resubscription'], 'Boolean');
            }
            if (data.hasOwnProperty('unsubscribe_reason')) {
                obj['unsubscribe_reason'] = ApiClient.convertToType(data['unsubscribe_reason'], 'Boolean');
            }
            if (data.hasOwnProperty('facebook_like')) {
                obj['facebook_like'] = ApiClient.convertToType(data['facebook_like'], 'Boolean');
            }
            if (data.hasOwnProperty('social_share')) {
                obj['social_share'] = ApiClient.convertToType(data['social_share'], 'Boolean');
            }
            if (data.hasOwnProperty('unsubscribe_manual')) {
                obj['unsubscribe_manual'] = ApiClient.convertToType(data['unsubscribe_manual'], 'Boolean');
            }
            if (data.hasOwnProperty('double_optin')) {
                obj['double_optin'] = ApiClient.convertToType(data['double_optin'], 'Boolean');
            }
            if (data.hasOwnProperty('email_spam_complaint')) {
                obj['email_spam_complaint'] = ApiClient.convertToType(data['email_spam_complaint'], 'Boolean');
            }
            if (data.hasOwnProperty('email_field_disable')) {
                obj['email_field_disable'] = ApiClient.convertToType(data['email_field_disable'], 'Boolean');
            }
            if (data.hasOwnProperty('cellphone_field_disable')) {
                obj['cellphone_field_disable'] = ApiClient.convertToType(data['cellphone_field_disable'], 'Boolean');
            }
            if (data.hasOwnProperty('phone_field_disable')) {
                obj['phone_field_disable'] = ApiClient.convertToType(data['phone_field_disable'], 'Boolean');
            }
            if (data.hasOwnProperty('unsubscribe_api')) {
                obj['unsubscribe_api'] = ApiClient.convertToType(data['unsubscribe_api'], 'Boolean');
            }
            if (data.hasOwnProperty('email_field_enable')) {
                obj['email_field_enable'] = ApiClient.convertToType(data['email_field_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('cellphone_field_enable')) {
                obj['cellphone_field_enable'] = ApiClient.convertToType(data['cellphone_field_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('phone_field_enable')) {
                obj['phone_field_enable'] = ApiClient.convertToType(data['phone_field_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('edit_subscription')) {
                obj['edit_subscription'] = ApiClient.convertToType(data['edit_subscription'], 'Boolean');
            }
            if (data.hasOwnProperty('automation_event')) {
                obj['automation_event'] = ApiClient.convertToType(data['automation_event'], 'Boolean');
            }
            if (data.hasOwnProperty('push_send')) {
                obj['push_send'] = ApiClient.convertToType(data['push_send'], 'Boolean');
            }
            if (data.hasOwnProperty('push_delivered')) {
                obj['push_delivered'] = ApiClient.convertToType(data['push_delivered'], 'Boolean');
            }
            if (data.hasOwnProperty('push_error')) {
                obj['push_error'] = ApiClient.convertToType(data['push_error'], 'Boolean');
            }
            if (data.hasOwnProperty('push_received')) {
                obj['push_received'] = ApiClient.convertToType(data['push_received'], 'Boolean');
            }
            if (data.hasOwnProperty('push_open')) {
                obj['push_open'] = ApiClient.convertToType(data['push_open'], 'Boolean');
            }
            if (data.hasOwnProperty('push_canceled')) {
                obj['push_canceled'] = ApiClient.convertToType(data['push_canceled'], 'Boolean');
            }
            if (data.hasOwnProperty('push_unsubscription')) {
                obj['push_unsubscription'] = ApiClient.convertToType(data['push_unsubscription'], 'Boolean');
            }
            if (data.hasOwnProperty('reply_to_email')) {
                obj['reply_to_email'] = ApiClient.convertToType(data['reply_to_email'], 'Boolean');
            }
            if (data.hasOwnProperty('web_push_send')) {
                obj['web_push_send'] = ApiClient.convertToType(data['web_push_send'], 'Boolean');
            }
            if (data.hasOwnProperty('web_push_delivered')) {
                obj['web_push_delivered'] = ApiClient.convertToType(data['web_push_delivered'], 'Boolean');
            }
            if (data.hasOwnProperty('web_push_open')) {
                obj['web_push_open'] = ApiClient.convertToType(data['web_push_open'], 'Boolean');
            }
            if (data.hasOwnProperty('web_push_bounce')) {
                obj['web_push_bounce'] = ApiClient.convertToType(data['web_push_bounce'], 'Boolean');
            }
            if (data.hasOwnProperty('web_push_click')) {
                obj['web_push_click'] = ApiClient.convertToType(data['web_push_click'], 'Boolean');
            }
            if (data.hasOwnProperty('web_push_subscription')) {
                obj['web_push_subscription'] = ApiClient.convertToType(data['web_push_subscription'], 'Boolean');
            }
            if (data.hasOwnProperty('web_push_unsubscription')) {
                obj['web_push_unsubscription'] = ApiClient.convertToType(data['web_push_unsubscription'], 'Boolean');
            }
            if (data.hasOwnProperty('forget_subscription')) {
                obj['forget_subscription'] = ApiClient.convertToType(data['forget_subscription'], 'Boolean');
            }
            if (data.hasOwnProperty('change_consent')) {
                obj['change_consent'] = ApiClient.convertToType(data['change_consent'], 'Boolean');
            }
            if (data.hasOwnProperty('double_optin_resend')) {
                obj['double_optin_resend'] = ApiClient.convertToType(data['double_optin_resend'], 'Boolean');
            }
            if (data.hasOwnProperty('double_optedit')) {
                obj['double_optedit'] = ApiClient.convertToType(data['double_optedit'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ContactActivityActivitiesFields</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContactActivityActivitiesFields</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ContactActivityActivitiesFields.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns True to include opens, false otherwise
     * @return {Boolean}
     */
    getOpens() {
        return this.opens;
    }

    /**
     * Sets True to include opens, false otherwise
     * @param {Boolean} opens True to include opens, false otherwise
     */
    setOpens(opens) {
        this['opens'] = opens;
    }
/**
     * Returns True to include clicks, false otherwise
     * @return {Boolean}
     */
    getClicks() {
        return this.clicks;
    }

    /**
     * Sets True to include clicks, false otherwise
     * @param {Boolean} clicks True to include clicks, false otherwise
     */
    setClicks(clicks) {
        this['clicks'] = clicks;
    }
/**
     * Returns True to include recommends, false otherwise
     * @return {Boolean}
     */
    getRecommends() {
        return this.recommends;
    }

    /**
     * Sets True to include recommends, false otherwise
     * @param {Boolean} recommends True to include recommends, false otherwise
     */
    setRecommends(recommends) {
        this['recommends'] = recommends;
    }
/**
     * Returns True to include convertions, false otherwise
     * @return {Boolean}
     */
    getConversion() {
        return this.conversion;
    }

    /**
     * Sets True to include convertions, false otherwise
     * @param {Boolean} conversion True to include convertions, false otherwise
     */
    setConversion(conversion) {
        this['conversion'] = conversion;
    }
/**
     * Returns True to include email sends, false otherwise
     * @return {Boolean}
     */
    getEmailSend() {
        return this.email_send;
    }

    /**
     * Sets True to include email sends, false otherwise
     * @param {Boolean} emailSend True to include email sends, false otherwise
     */
    setEmailSend(emailSend) {
        this['email_send'] = emailSend;
    }
/**
     * Returns True to include sms sends, false otherwise
     * @return {Boolean}
     */
    getSmsSend() {
        return this.sms_send;
    }

    /**
     * Sets True to include sms sends, false otherwise
     * @param {Boolean} smsSend True to include sms sends, false otherwise
     */
    setSmsSend(smsSend) {
        this['sms_send'] = smsSend;
    }
/**
     * Returns True to include sms report, false otherwise
     * @return {Boolean}
     */
    getSmsReport() {
        return this.sms_report;
    }

    /**
     * Sets True to include sms report, false otherwise
     * @param {Boolean} smsReport True to include sms report, false otherwise
     */
    setSmsReport(smsReport) {
        this['sms_report'] = smsReport;
    }
/**
     * Returns True to include voice sends, false otherwise
     * @return {Boolean}
     */
    getVoiceSend() {
        return this.voice_send;
    }

    /**
     * Sets True to include voice sends, false otherwise
     * @param {Boolean} voiceSend True to include voice sends, false otherwise
     */
    setVoiceSend(voiceSend) {
        this['voice_send'] = voiceSend;
    }
/**
     * Returns True to include voice report, false otherwise
     * @return {Boolean}
     */
    getVoiceReport() {
        return this.voice_report;
    }

    /**
     * Sets True to include voice report, false otherwise
     * @param {Boolean} voiceReport True to include voice report, false otherwise
     */
    setVoiceReport(voiceReport) {
        this['voice_report'] = voiceReport;
    }
/**
     * Returns True to include invitation sends, false otherwise
     * @return {Boolean}
     */
    getInvitationSend() {
        return this.invitation_send;
    }

    /**
     * Sets True to include invitation sends, false otherwise
     * @param {Boolean} invitationSend True to include invitation sends, false otherwise
     */
    setInvitationSend(invitationSend) {
        this['invitation_send'] = invitationSend;
    }
/**
     * Returns True to include invitation opens, false otherwise
     * @return {Boolean}
     */
    getInvitationOpen() {
        return this.invitation_open;
    }

    /**
     * Sets True to include invitation opens, false otherwise
     * @param {Boolean} invitationOpen True to include invitation opens, false otherwise
     */
    setInvitationOpen(invitationOpen) {
        this['invitation_open'] = invitationOpen;
    }
/**
     * Returns True to include unsubscriptions, false otherwise
     * @return {Boolean}
     */
    getUnsubscribe() {
        return this.unsubscribe;
    }

    /**
     * Sets True to include unsubscriptions, false otherwise
     * @param {Boolean} unsubscribe True to include unsubscriptions, false otherwise
     */
    setUnsubscribe(unsubscribe) {
        this['unsubscribe'] = unsubscribe;
    }
/**
     * Returns True to include email soft bounces, false otherwise
     * @return {Boolean}
     */
    getEmailSoftBounce() {
        return this.email_soft_bounce;
    }

    /**
     * Sets True to include email soft bounces, false otherwise
     * @param {Boolean} emailSoftBounce True to include email soft bounces, false otherwise
     */
    setEmailSoftBounce(emailSoftBounce) {
        this['email_soft_bounce'] = emailSoftBounce;
    }
/**
     * Returns True to include email hard bounces, false otherwise
     * @return {Boolean}
     */
    getEmailHardBounce() {
        return this.email_hard_bounce;
    }

    /**
     * Sets True to include email hard bounces, false otherwise
     * @param {Boolean} emailHardBounce True to include email hard bounces, false otherwise
     */
    setEmailHardBounce(emailHardBounce) {
        this['email_hard_bounce'] = emailHardBounce;
    }
/**
     * Returns True to include subscriptions, false otherwise
     * @return {Boolean}
     */
    getSubscription() {
        return this.subscription;
    }

    /**
     * Sets True to include subscriptions, false otherwise
     * @param {Boolean} subscription True to include subscriptions, false otherwise
     */
    setSubscription(subscription) {
        this['subscription'] = subscription;
    }
/**
     * Returns True to include re-subscriptions, false otherwise
     * @return {Boolean}
     */
    getResubscription() {
        return this.resubscription;
    }

    /**
     * Sets True to include re-subscriptions, false otherwise
     * @param {Boolean} resubscription True to include re-subscriptions, false otherwise
     */
    setResubscription(resubscription) {
        this['resubscription'] = resubscription;
    }
/**
     * Returns True to include unsubscription reason, false otherwise
     * @return {Boolean}
     */
    getUnsubscribeReason() {
        return this.unsubscribe_reason;
    }

    /**
     * Sets True to include unsubscription reason, false otherwise
     * @param {Boolean} unsubscribeReason True to include unsubscription reason, false otherwise
     */
    setUnsubscribeReason(unsubscribeReason) {
        this['unsubscribe_reason'] = unsubscribeReason;
    }
/**
     * Returns True to include facebook likes, false otherwise
     * @return {Boolean}
     */
    getFacebookLike() {
        return this.facebook_like;
    }

    /**
     * Sets True to include facebook likes, false otherwise
     * @param {Boolean} facebookLike True to include facebook likes, false otherwise
     */
    setFacebookLike(facebookLike) {
        this['facebook_like'] = facebookLike;
    }
/**
     * Returns True to include social shares, false otherwise
     * @return {Boolean}
     */
    getSocialShare() {
        return this.social_share;
    }

    /**
     * Sets True to include social shares, false otherwise
     * @param {Boolean} socialShare True to include social shares, false otherwise
     */
    setSocialShare(socialShare) {
        this['social_share'] = socialShare;
    }
/**
     * Returns True to include manual unsubscriptions, false otherwise
     * @return {Boolean}
     */
    getUnsubscribeManual() {
        return this.unsubscribe_manual;
    }

    /**
     * Sets True to include manual unsubscriptions, false otherwise
     * @param {Boolean} unsubscribeManual True to include manual unsubscriptions, false otherwise
     */
    setUnsubscribeManual(unsubscribeManual) {
        this['unsubscribe_manual'] = unsubscribeManual;
    }
/**
     * Returns True to include double optins, false otherwise
     * @return {Boolean}
     */
    getDoubleOptin() {
        return this.double_optin;
    }

    /**
     * Sets True to include double optins, false otherwise
     * @param {Boolean} doubleOptin True to include double optins, false otherwise
     */
    setDoubleOptin(doubleOptin) {
        this['double_optin'] = doubleOptin;
    }
/**
     * Returns True to include spam complaints, false otherwise
     * @return {Boolean}
     */
    getEmailSpamComplaint() {
        return this.email_spam_complaint;
    }

    /**
     * Sets True to include spam complaints, false otherwise
     * @param {Boolean} emailSpamComplaint True to include spam complaints, false otherwise
     */
    setEmailSpamComplaint(emailSpamComplaint) {
        this['email_spam_complaint'] = emailSpamComplaint;
    }
/**
     * Returns True to include email field disable, false otherwise
     * @return {Boolean}
     */
    getEmailFieldDisable() {
        return this.email_field_disable;
    }

    /**
     * Sets True to include email field disable, false otherwise
     * @param {Boolean} emailFieldDisable True to include email field disable, false otherwise
     */
    setEmailFieldDisable(emailFieldDisable) {
        this['email_field_disable'] = emailFieldDisable;
    }
/**
     * Returns True to include cellphone field disable, false otherwise
     * @return {Boolean}
     */
    getCellphoneFieldDisable() {
        return this.cellphone_field_disable;
    }

    /**
     * Sets True to include cellphone field disable, false otherwise
     * @param {Boolean} cellphoneFieldDisable True to include cellphone field disable, false otherwise
     */
    setCellphoneFieldDisable(cellphoneFieldDisable) {
        this['cellphone_field_disable'] = cellphoneFieldDisable;
    }
/**
     * Returns True to include phone field disable, false otherwise
     * @return {Boolean}
     */
    getPhoneFieldDisable() {
        return this.phone_field_disable;
    }

    /**
     * Sets True to include phone field disable, false otherwise
     * @param {Boolean} phoneFieldDisable True to include phone field disable, false otherwise
     */
    setPhoneFieldDisable(phoneFieldDisable) {
        this['phone_field_disable'] = phoneFieldDisable;
    }
/**
     * Returns True to include api unsubscriptions, false otherwise
     * @return {Boolean}
     */
    getUnsubscribeApi() {
        return this.unsubscribe_api;
    }

    /**
     * Sets True to include api unsubscriptions, false otherwise
     * @param {Boolean} unsubscribeApi True to include api unsubscriptions, false otherwise
     */
    setUnsubscribeApi(unsubscribeApi) {
        this['unsubscribe_api'] = unsubscribeApi;
    }
/**
     * Returns True to include email field enable, false otherwise
     * @return {Boolean}
     */
    getEmailFieldEnable() {
        return this.email_field_enable;
    }

    /**
     * Sets True to include email field enable, false otherwise
     * @param {Boolean} emailFieldEnable True to include email field enable, false otherwise
     */
    setEmailFieldEnable(emailFieldEnable) {
        this['email_field_enable'] = emailFieldEnable;
    }
/**
     * Returns True to include cellphone field enable, false otherwise
     * @return {Boolean}
     */
    getCellphoneFieldEnable() {
        return this.cellphone_field_enable;
    }

    /**
     * Sets True to include cellphone field enable, false otherwise
     * @param {Boolean} cellphoneFieldEnable True to include cellphone field enable, false otherwise
     */
    setCellphoneFieldEnable(cellphoneFieldEnable) {
        this['cellphone_field_enable'] = cellphoneFieldEnable;
    }
/**
     * Returns True to include phone field enable, false otherwise
     * @return {Boolean}
     */
    getPhoneFieldEnable() {
        return this.phone_field_enable;
    }

    /**
     * Sets True to include phone field enable, false otherwise
     * @param {Boolean} phoneFieldEnable True to include phone field enable, false otherwise
     */
    setPhoneFieldEnable(phoneFieldEnable) {
        this['phone_field_enable'] = phoneFieldEnable;
    }
/**
     * Returns True to include edit subscriptions, false otherwise
     * @return {Boolean}
     */
    getEditSubscription() {
        return this.edit_subscription;
    }

    /**
     * Sets True to include edit subscriptions, false otherwise
     * @param {Boolean} editSubscription True to include edit subscriptions, false otherwise
     */
    setEditSubscription(editSubscription) {
        this['edit_subscription'] = editSubscription;
    }
/**
     * Returns True to include automation events, false otherwise
     * @return {Boolean}
     */
    getAutomationEvent() {
        return this.automation_event;
    }

    /**
     * Sets True to include automation events, false otherwise
     * @param {Boolean} automationEvent True to include automation events, false otherwise
     */
    setAutomationEvent(automationEvent) {
        this['automation_event'] = automationEvent;
    }
/**
     * Returns True to include push events, false otherwise
     * @return {Boolean}
     */
    getPushSend() {
        return this.push_send;
    }

    /**
     * Sets True to include push events, false otherwise
     * @param {Boolean} pushSend True to include push events, false otherwise
     */
    setPushSend(pushSend) {
        this['push_send'] = pushSend;
    }
/**
     * Returns True to include push delivered, false otherwise
     * @return {Boolean}
     */
    getPushDelivered() {
        return this.push_delivered;
    }

    /**
     * Sets True to include push delivered, false otherwise
     * @param {Boolean} pushDelivered True to include push delivered, false otherwise
     */
    setPushDelivered(pushDelivered) {
        this['push_delivered'] = pushDelivered;
    }
/**
     * Returns True to include push error, false otherwise
     * @return {Boolean}
     */
    getPushError() {
        return this.push_error;
    }

    /**
     * Sets True to include push error, false otherwise
     * @param {Boolean} pushError True to include push error, false otherwise
     */
    setPushError(pushError) {
        this['push_error'] = pushError;
    }
/**
     * Returns True to include push received, false otherwise
     * @return {Boolean}
     */
    getPushReceived() {
        return this.push_received;
    }

    /**
     * Sets True to include push received, false otherwise
     * @param {Boolean} pushReceived True to include push received, false otherwise
     */
    setPushReceived(pushReceived) {
        this['push_received'] = pushReceived;
    }
/**
     * Returns True to include push open, false otherwise
     * @return {Boolean}
     */
    getPushOpen() {
        return this.push_open;
    }

    /**
     * Sets True to include push open, false otherwise
     * @param {Boolean} pushOpen True to include push open, false otherwise
     */
    setPushOpen(pushOpen) {
        this['push_open'] = pushOpen;
    }
/**
     * Returns True to include push canceled, false otherwise
     * @return {Boolean}
     */
    getPushCanceled() {
        return this.push_canceled;
    }

    /**
     * Sets True to include push canceled, false otherwise
     * @param {Boolean} pushCanceled True to include push canceled, false otherwise
     */
    setPushCanceled(pushCanceled) {
        this['push_canceled'] = pushCanceled;
    }
/**
     * Returns True to include push unsubscriptions, false otherwise
     * @return {Boolean}
     */
    getPushUnsubscription() {
        return this.push_unsubscription;
    }

    /**
     * Sets True to include push unsubscriptions, false otherwise
     * @param {Boolean} pushUnsubscription True to include push unsubscriptions, false otherwise
     */
    setPushUnsubscription(pushUnsubscription) {
        this['push_unsubscription'] = pushUnsubscription;
    }
/**
     * Returns True to include reply to email, false otherwise
     * @return {Boolean}
     */
    getReplyToEmail() {
        return this.reply_to_email;
    }

    /**
     * Sets True to include reply to email, false otherwise
     * @param {Boolean} replyToEmail True to include reply to email, false otherwise
     */
    setReplyToEmail(replyToEmail) {
        this['reply_to_email'] = replyToEmail;
    }
/**
     * Returns True to include web push send, false otherwise
     * @return {Boolean}
     */
    getWebPushSend() {
        return this.web_push_send;
    }

    /**
     * Sets True to include web push send, false otherwise
     * @param {Boolean} webPushSend True to include web push send, false otherwise
     */
    setWebPushSend(webPushSend) {
        this['web_push_send'] = webPushSend;
    }
/**
     * Returns True to include web push delivered, false otherwise
     * @return {Boolean}
     */
    getWebPushDelivered() {
        return this.web_push_delivered;
    }

    /**
     * Sets True to include web push delivered, false otherwise
     * @param {Boolean} webPushDelivered True to include web push delivered, false otherwise
     */
    setWebPushDelivered(webPushDelivered) {
        this['web_push_delivered'] = webPushDelivered;
    }
/**
     * Returns True to include web push open, false otherwise
     * @return {Boolean}
     */
    getWebPushOpen() {
        return this.web_push_open;
    }

    /**
     * Sets True to include web push open, false otherwise
     * @param {Boolean} webPushOpen True to include web push open, false otherwise
     */
    setWebPushOpen(webPushOpen) {
        this['web_push_open'] = webPushOpen;
    }
/**
     * Returns True to include web push bounces, false otherwise
     * @return {Boolean}
     */
    getWebPushBounce() {
        return this.web_push_bounce;
    }

    /**
     * Sets True to include web push bounces, false otherwise
     * @param {Boolean} webPushBounce True to include web push bounces, false otherwise
     */
    setWebPushBounce(webPushBounce) {
        this['web_push_bounce'] = webPushBounce;
    }
/**
     * Returns True to include web push clicks, false otherwise
     * @return {Boolean}
     */
    getWebPushClick() {
        return this.web_push_click;
    }

    /**
     * Sets True to include web push clicks, false otherwise
     * @param {Boolean} webPushClick True to include web push clicks, false otherwise
     */
    setWebPushClick(webPushClick) {
        this['web_push_click'] = webPushClick;
    }
/**
     * Returns True to include web push subscriptions, false otherwise
     * @return {Boolean}
     */
    getWebPushSubscription() {
        return this.web_push_subscription;
    }

    /**
     * Sets True to include web push subscriptions, false otherwise
     * @param {Boolean} webPushSubscription True to include web push subscriptions, false otherwise
     */
    setWebPushSubscription(webPushSubscription) {
        this['web_push_subscription'] = webPushSubscription;
    }
/**
     * Returns True to include web push unsubscriptions, false otherwise
     * @return {Boolean}
     */
    getWebPushUnsubscription() {
        return this.web_push_unsubscription;
    }

    /**
     * Sets True to include web push unsubscriptions, false otherwise
     * @param {Boolean} webPushUnsubscription True to include web push unsubscriptions, false otherwise
     */
    setWebPushUnsubscription(webPushUnsubscription) {
        this['web_push_unsubscription'] = webPushUnsubscription;
    }
/**
     * Returns True to include forget subscriptions, false otherwise
     * @return {Boolean}
     */
    getForgetSubscription() {
        return this.forget_subscription;
    }

    /**
     * Sets True to include forget subscriptions, false otherwise
     * @param {Boolean} forgetSubscription True to include forget subscriptions, false otherwise
     */
    setForgetSubscription(forgetSubscription) {
        this['forget_subscription'] = forgetSubscription;
    }
/**
     * Returns True to include consent change, false otherwise
     * @return {Boolean}
     */
    getChangeConsent() {
        return this.change_consent;
    }

    /**
     * Sets True to include consent change, false otherwise
     * @param {Boolean} changeConsent True to include consent change, false otherwise
     */
    setChangeConsent(changeConsent) {
        this['change_consent'] = changeConsent;
    }
/**
     * Returns True to include optin resends, false otherwise
     * @return {Boolean}
     */
    getDoubleOptinResend() {
        return this.double_optin_resend;
    }

    /**
     * Sets True to include optin resends, false otherwise
     * @param {Boolean} doubleOptinResend True to include optin resends, false otherwise
     */
    setDoubleOptinResend(doubleOptinResend) {
        this['double_optin_resend'] = doubleOptinResend;
    }
/**
     * Returns True to include double optedit, false otherwise
     * @return {Boolean}
     */
    getDoubleOptedit() {
        return this.double_optedit;
    }

    /**
     * Sets True to include double optedit, false otherwise
     * @param {Boolean} doubleOptedit True to include double optedit, false otherwise
     */
    setDoubleOptedit(doubleOptedit) {
        this['double_optedit'] = doubleOptedit;
    }

}

ContactActivityActivitiesFields.RequiredProperties = ["opens", "clicks", "recommends", "conversion", "email_send", "sms_send", "sms_report", "voice_send", "voice_report", "invitation_send", "invitation_open", "unsubscribe", "email_soft_bounce", "email_hard_bounce", "subscription", "resubscription", "unsubscribe_reason", "facebook_like", "social_share", "unsubscribe_manual", "double_optin", "email_spam_complaint", "email_field_disable", "cellphone_field_disable", "phone_field_disable", "unsubscribe_api", "email_field_enable", "cellphone_field_enable", "phone_field_enable", "edit_subscription", "automation_event", "push_send", "push_delivered", "push_error", "push_received", "push_open", "push_canceled", "push_unsubscription", "reply_to_email", "web_push_send", "web_push_delivered", "web_push_open", "web_push_bounce", "web_push_click", "web_push_subscription", "web_push_unsubscription", "forget_subscription", "change_consent", "double_optin_resend", "double_optedit"];

/**
 * True to include opens, false otherwise
 * @member {Boolean} opens
 */
ContactActivityActivitiesFields.prototype['opens'] = undefined;

/**
 * True to include clicks, false otherwise
 * @member {Boolean} clicks
 */
ContactActivityActivitiesFields.prototype['clicks'] = undefined;

/**
 * True to include recommends, false otherwise
 * @member {Boolean} recommends
 */
ContactActivityActivitiesFields.prototype['recommends'] = undefined;

/**
 * True to include convertions, false otherwise
 * @member {Boolean} conversion
 */
ContactActivityActivitiesFields.prototype['conversion'] = undefined;

/**
 * True to include email sends, false otherwise
 * @member {Boolean} email_send
 */
ContactActivityActivitiesFields.prototype['email_send'] = undefined;

/**
 * True to include sms sends, false otherwise
 * @member {Boolean} sms_send
 */
ContactActivityActivitiesFields.prototype['sms_send'] = undefined;

/**
 * True to include sms report, false otherwise
 * @member {Boolean} sms_report
 */
ContactActivityActivitiesFields.prototype['sms_report'] = undefined;

/**
 * True to include voice sends, false otherwise
 * @member {Boolean} voice_send
 */
ContactActivityActivitiesFields.prototype['voice_send'] = undefined;

/**
 * True to include voice report, false otherwise
 * @member {Boolean} voice_report
 */
ContactActivityActivitiesFields.prototype['voice_report'] = undefined;

/**
 * True to include invitation sends, false otherwise
 * @member {Boolean} invitation_send
 */
ContactActivityActivitiesFields.prototype['invitation_send'] = undefined;

/**
 * True to include invitation opens, false otherwise
 * @member {Boolean} invitation_open
 */
ContactActivityActivitiesFields.prototype['invitation_open'] = undefined;

/**
 * True to include unsubscriptions, false otherwise
 * @member {Boolean} unsubscribe
 */
ContactActivityActivitiesFields.prototype['unsubscribe'] = undefined;

/**
 * True to include email soft bounces, false otherwise
 * @member {Boolean} email_soft_bounce
 */
ContactActivityActivitiesFields.prototype['email_soft_bounce'] = undefined;

/**
 * True to include email hard bounces, false otherwise
 * @member {Boolean} email_hard_bounce
 */
ContactActivityActivitiesFields.prototype['email_hard_bounce'] = undefined;

/**
 * True to include subscriptions, false otherwise
 * @member {Boolean} subscription
 */
ContactActivityActivitiesFields.prototype['subscription'] = undefined;

/**
 * True to include re-subscriptions, false otherwise
 * @member {Boolean} resubscription
 */
ContactActivityActivitiesFields.prototype['resubscription'] = undefined;

/**
 * True to include unsubscription reason, false otherwise
 * @member {Boolean} unsubscribe_reason
 */
ContactActivityActivitiesFields.prototype['unsubscribe_reason'] = undefined;

/**
 * True to include facebook likes, false otherwise
 * @member {Boolean} facebook_like
 */
ContactActivityActivitiesFields.prototype['facebook_like'] = undefined;

/**
 * True to include social shares, false otherwise
 * @member {Boolean} social_share
 */
ContactActivityActivitiesFields.prototype['social_share'] = undefined;

/**
 * True to include manual unsubscriptions, false otherwise
 * @member {Boolean} unsubscribe_manual
 */
ContactActivityActivitiesFields.prototype['unsubscribe_manual'] = undefined;

/**
 * True to include double optins, false otherwise
 * @member {Boolean} double_optin
 */
ContactActivityActivitiesFields.prototype['double_optin'] = undefined;

/**
 * True to include spam complaints, false otherwise
 * @member {Boolean} email_spam_complaint
 */
ContactActivityActivitiesFields.prototype['email_spam_complaint'] = undefined;

/**
 * True to include email field disable, false otherwise
 * @member {Boolean} email_field_disable
 */
ContactActivityActivitiesFields.prototype['email_field_disable'] = undefined;

/**
 * True to include cellphone field disable, false otherwise
 * @member {Boolean} cellphone_field_disable
 */
ContactActivityActivitiesFields.prototype['cellphone_field_disable'] = undefined;

/**
 * True to include phone field disable, false otherwise
 * @member {Boolean} phone_field_disable
 */
ContactActivityActivitiesFields.prototype['phone_field_disable'] = undefined;

/**
 * True to include api unsubscriptions, false otherwise
 * @member {Boolean} unsubscribe_api
 */
ContactActivityActivitiesFields.prototype['unsubscribe_api'] = undefined;

/**
 * True to include email field enable, false otherwise
 * @member {Boolean} email_field_enable
 */
ContactActivityActivitiesFields.prototype['email_field_enable'] = undefined;

/**
 * True to include cellphone field enable, false otherwise
 * @member {Boolean} cellphone_field_enable
 */
ContactActivityActivitiesFields.prototype['cellphone_field_enable'] = undefined;

/**
 * True to include phone field enable, false otherwise
 * @member {Boolean} phone_field_enable
 */
ContactActivityActivitiesFields.prototype['phone_field_enable'] = undefined;

/**
 * True to include edit subscriptions, false otherwise
 * @member {Boolean} edit_subscription
 */
ContactActivityActivitiesFields.prototype['edit_subscription'] = undefined;

/**
 * True to include automation events, false otherwise
 * @member {Boolean} automation_event
 */
ContactActivityActivitiesFields.prototype['automation_event'] = undefined;

/**
 * True to include push events, false otherwise
 * @member {Boolean} push_send
 */
ContactActivityActivitiesFields.prototype['push_send'] = undefined;

/**
 * True to include push delivered, false otherwise
 * @member {Boolean} push_delivered
 */
ContactActivityActivitiesFields.prototype['push_delivered'] = undefined;

/**
 * True to include push error, false otherwise
 * @member {Boolean} push_error
 */
ContactActivityActivitiesFields.prototype['push_error'] = undefined;

/**
 * True to include push received, false otherwise
 * @member {Boolean} push_received
 */
ContactActivityActivitiesFields.prototype['push_received'] = undefined;

/**
 * True to include push open, false otherwise
 * @member {Boolean} push_open
 */
ContactActivityActivitiesFields.prototype['push_open'] = undefined;

/**
 * True to include push canceled, false otherwise
 * @member {Boolean} push_canceled
 */
ContactActivityActivitiesFields.prototype['push_canceled'] = undefined;

/**
 * True to include push unsubscriptions, false otherwise
 * @member {Boolean} push_unsubscription
 */
ContactActivityActivitiesFields.prototype['push_unsubscription'] = undefined;

/**
 * True to include reply to email, false otherwise
 * @member {Boolean} reply_to_email
 */
ContactActivityActivitiesFields.prototype['reply_to_email'] = undefined;

/**
 * True to include web push send, false otherwise
 * @member {Boolean} web_push_send
 */
ContactActivityActivitiesFields.prototype['web_push_send'] = undefined;

/**
 * True to include web push delivered, false otherwise
 * @member {Boolean} web_push_delivered
 */
ContactActivityActivitiesFields.prototype['web_push_delivered'] = undefined;

/**
 * True to include web push open, false otherwise
 * @member {Boolean} web_push_open
 */
ContactActivityActivitiesFields.prototype['web_push_open'] = undefined;

/**
 * True to include web push bounces, false otherwise
 * @member {Boolean} web_push_bounce
 */
ContactActivityActivitiesFields.prototype['web_push_bounce'] = undefined;

/**
 * True to include web push clicks, false otherwise
 * @member {Boolean} web_push_click
 */
ContactActivityActivitiesFields.prototype['web_push_click'] = undefined;

/**
 * True to include web push subscriptions, false otherwise
 * @member {Boolean} web_push_subscription
 */
ContactActivityActivitiesFields.prototype['web_push_subscription'] = undefined;

/**
 * True to include web push unsubscriptions, false otherwise
 * @member {Boolean} web_push_unsubscription
 */
ContactActivityActivitiesFields.prototype['web_push_unsubscription'] = undefined;

/**
 * True to include forget subscriptions, false otherwise
 * @member {Boolean} forget_subscription
 */
ContactActivityActivitiesFields.prototype['forget_subscription'] = undefined;

/**
 * True to include consent change, false otherwise
 * @member {Boolean} change_consent
 */
ContactActivityActivitiesFields.prototype['change_consent'] = undefined;

/**
 * True to include optin resends, false otherwise
 * @member {Boolean} double_optin_resend
 */
ContactActivityActivitiesFields.prototype['double_optin_resend'] = undefined;

/**
 * True to include double optedit, false otherwise
 * @member {Boolean} double_optedit
 */
ContactActivityActivitiesFields.prototype['double_optedit'] = undefined;






export default ContactActivityActivitiesFields;

