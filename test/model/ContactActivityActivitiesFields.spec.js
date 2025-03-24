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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.egoisdk);
  }
}(this, function(expect, egoisdk) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new egoisdk.ContactActivityActivitiesFields();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ContactActivityActivitiesFields', function() {
    it('should create an instance of ContactActivityActivitiesFields', function() {
      // uncomment below and update the code to test ContactActivityActivitiesFields
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be.a(egoisdk.ContactActivityActivitiesFields);
    });

    it('should have the property opens (base name: "opens")', function() {
      // uncomment below and update the code to test the property opens
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property clicks (base name: "clicks")', function() {
      // uncomment below and update the code to test the property clicks
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property recommends (base name: "recommends")', function() {
      // uncomment below and update the code to test the property recommends
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property conversion (base name: "conversion")', function() {
      // uncomment below and update the code to test the property conversion
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property emailSend (base name: "email_send")', function() {
      // uncomment below and update the code to test the property emailSend
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property smsSend (base name: "sms_send")', function() {
      // uncomment below and update the code to test the property smsSend
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property smsReport (base name: "sms_report")', function() {
      // uncomment below and update the code to test the property smsReport
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property voiceSend (base name: "voice_send")', function() {
      // uncomment below and update the code to test the property voiceSend
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property voiceReport (base name: "voice_report")', function() {
      // uncomment below and update the code to test the property voiceReport
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property invitationSend (base name: "invitation_send")', function() {
      // uncomment below and update the code to test the property invitationSend
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property invitationOpen (base name: "invitation_open")', function() {
      // uncomment below and update the code to test the property invitationOpen
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribe (base name: "unsubscribe")', function() {
      // uncomment below and update the code to test the property unsubscribe
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property emailSoftBounce (base name: "email_soft_bounce")', function() {
      // uncomment below and update the code to test the property emailSoftBounce
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property emailHardBounce (base name: "email_hard_bounce")', function() {
      // uncomment below and update the code to test the property emailHardBounce
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property subscription (base name: "subscription")', function() {
      // uncomment below and update the code to test the property subscription
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property resubscription (base name: "resubscription")', function() {
      // uncomment below and update the code to test the property resubscription
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribeReason (base name: "unsubscribe_reason")', function() {
      // uncomment below and update the code to test the property unsubscribeReason
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property facebookLike (base name: "facebook_like")', function() {
      // uncomment below and update the code to test the property facebookLike
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property socialShare (base name: "social_share")', function() {
      // uncomment below and update the code to test the property socialShare
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribeManual (base name: "unsubscribe_manual")', function() {
      // uncomment below and update the code to test the property unsubscribeManual
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property doubleOptin (base name: "double_optin")', function() {
      // uncomment below and update the code to test the property doubleOptin
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property emailSpamComplaint (base name: "email_spam_complaint")', function() {
      // uncomment below and update the code to test the property emailSpamComplaint
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property emailFieldDisable (base name: "email_field_disable")', function() {
      // uncomment below and update the code to test the property emailFieldDisable
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property cellphoneFieldDisable (base name: "cellphone_field_disable")', function() {
      // uncomment below and update the code to test the property cellphoneFieldDisable
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property phoneFieldDisable (base name: "phone_field_disable")', function() {
      // uncomment below and update the code to test the property phoneFieldDisable
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property unsubscribeApi (base name: "unsubscribe_api")', function() {
      // uncomment below and update the code to test the property unsubscribeApi
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property emailFieldEnable (base name: "email_field_enable")', function() {
      // uncomment below and update the code to test the property emailFieldEnable
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property cellphoneFieldEnable (base name: "cellphone_field_enable")', function() {
      // uncomment below and update the code to test the property cellphoneFieldEnable
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property phoneFieldEnable (base name: "phone_field_enable")', function() {
      // uncomment below and update the code to test the property phoneFieldEnable
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property editSubscription (base name: "edit_subscription")', function() {
      // uncomment below and update the code to test the property editSubscription
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property automationEvent (base name: "automation_event")', function() {
      // uncomment below and update the code to test the property automationEvent
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property pushSend (base name: "push_send")', function() {
      // uncomment below and update the code to test the property pushSend
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property pushDelivered (base name: "push_delivered")', function() {
      // uncomment below and update the code to test the property pushDelivered
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property pushError (base name: "push_error")', function() {
      // uncomment below and update the code to test the property pushError
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property pushReceived (base name: "push_received")', function() {
      // uncomment below and update the code to test the property pushReceived
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property pushOpen (base name: "push_open")', function() {
      // uncomment below and update the code to test the property pushOpen
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property pushCanceled (base name: "push_canceled")', function() {
      // uncomment below and update the code to test the property pushCanceled
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property pushUnsubscription (base name: "push_unsubscription")', function() {
      // uncomment below and update the code to test the property pushUnsubscription
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property replyToEmail (base name: "reply_to_email")', function() {
      // uncomment below and update the code to test the property replyToEmail
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property webPushSend (base name: "web_push_send")', function() {
      // uncomment below and update the code to test the property webPushSend
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property webPushDelivered (base name: "web_push_delivered")', function() {
      // uncomment below and update the code to test the property webPushDelivered
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property webPushOpen (base name: "web_push_open")', function() {
      // uncomment below and update the code to test the property webPushOpen
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property webPushBounce (base name: "web_push_bounce")', function() {
      // uncomment below and update the code to test the property webPushBounce
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property webPushClick (base name: "web_push_click")', function() {
      // uncomment below and update the code to test the property webPushClick
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property webPushSubscription (base name: "web_push_subscription")', function() {
      // uncomment below and update the code to test the property webPushSubscription
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property webPushUnsubscription (base name: "web_push_unsubscription")', function() {
      // uncomment below and update the code to test the property webPushUnsubscription
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property forgetSubscription (base name: "forget_subscription")', function() {
      // uncomment below and update the code to test the property forgetSubscription
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property changeConsent (base name: "change_consent")', function() {
      // uncomment below and update the code to test the property changeConsent
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property doubleOptinResend (base name: "double_optin_resend")', function() {
      // uncomment below and update the code to test the property doubleOptinResend
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

    it('should have the property doubleOptedit (base name: "double_optedit")', function() {
      // uncomment below and update the code to test the property doubleOptedit
      //var instance = new egoisdk.ContactActivityActivitiesFields();
      //expect(instance).to.be();
    });

  });

}));
