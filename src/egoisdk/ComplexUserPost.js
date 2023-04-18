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
import ComplexUserAllOf from './ComplexUserAllOf';
import Language from './Language';
import UserPost from './UserPost';

/**
 * The ComplexUserPost model module.
 * @module egoisdk/ComplexUserPost
 * @version 1.1.3RC1
 */
class ComplexUserPost {
    /**
     * Constructs a new <code>ComplexUserPost</code>.
     * Complex user schema
     * @alias module:egoisdk/ComplexUserPost
     * @implements module:egoisdk/ComplexUserAllOf
     * @implements module:egoisdk/UserPost
     */
    constructor() { 
        ComplexUserAllOf.initialize(this);UserPost.initialize(this);
        ComplexUserPost.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ComplexUserPost</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ComplexUserPost} obj Optional instance to populate.
     * @return {module:egoisdk/ComplexUserPost} The populated <code>ComplexUserPost</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComplexUserPost();
            ComplexUserAllOf.constructFromObject(data, obj);
            UserPost.constructFromObject(data, obj);

            if (data.hasOwnProperty('language')) {
                obj['language'] = Language.constructFromObject(data['language']);
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ComplexUserPost</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ComplexUserPost</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['gender'] && !(typeof data['gender'] === 'string' || data['gender'] instanceof String)) {
            throw new Error("Expected the field `gender` to be a primitive type in the JSON string but got " + data['gender']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
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
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }

        return true;
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
     * Returns User gender
     * @return {module:egoisdk/ComplexUserPost.GenderEnum}
     */
    getGender() {
        return this.gender;
    }

    /**
     * Sets User gender
     * @param {module:egoisdk/ComplexUserPost.GenderEnum} gender User gender
     */
    setGender(gender) {
        this['gender'] = gender;
    }
/**
     * Returns User login
     * @return {String}
     */
    getUsername() {
        return this.username;
    }

    /**
     * Sets User login
     * @param {String} username User login
     */
    setUsername(username) {
        this['username'] = username;
    }
/**
     * Returns First name of the user
     * @return {String}
     */
    getFirstName() {
        return this.first_name;
    }

    /**
     * Sets First name of the user
     * @param {String} firstName First name of the user
     */
    setFirstName(firstName) {
        this['first_name'] = firstName;
    }
/**
     * Returns Last name of the user
     * @return {String}
     */
    getLastName() {
        return this.last_name;
    }

    /**
     * Sets Last name of the user
     * @param {String} lastName Last name of the user
     */
    setLastName(lastName) {
        this['last_name'] = lastName;
    }
/**
     * Returns Email of the user
     * @return {String}
     */
    getEmail() {
        return this.email;
    }

    /**
     * Sets Email of the user
     * @param {String} email Email of the user
     */
    setEmail(email) {
        this['email'] = email;
    }
/**
     * Returns User's phone (may be cellphone or phone)
     * @return {String}
     */
    getPhone() {
        return this.phone;
    }

    /**
     * Sets User's phone (may be cellphone or phone)
     * @param {String} phone User's phone (may be cellphone or phone)
     */
    setPhone(phone) {
        this['phone'] = phone;
    }

}



/**
 * @member {module:egoisdk/Language} language
 */
ComplexUserPost.prototype['language'] = undefined;

/**
 * User gender
 * @member {module:egoisdk/ComplexUserPost.GenderEnum} gender
 */
ComplexUserPost.prototype['gender'] = undefined;

/**
 * User login
 * @member {String} username
 */
ComplexUserPost.prototype['username'] = undefined;

/**
 * First name of the user
 * @member {String} first_name
 */
ComplexUserPost.prototype['first_name'] = undefined;

/**
 * Last name of the user
 * @member {String} last_name
 */
ComplexUserPost.prototype['last_name'] = undefined;

/**
 * Email of the user
 * @member {String} email
 */
ComplexUserPost.prototype['email'] = undefined;

/**
 * User's phone (may be cellphone or phone)
 * @member {String} phone
 */
ComplexUserPost.prototype['phone'] = undefined;


// Implement ComplexUserAllOf interface:
/**
 * @member {module:egoisdk/Language} language
 */
ComplexUserAllOf.prototype['language'] = undefined;
/**
 * User gender
 * @member {module:egoisdk/ComplexUserAllOf.GenderEnum} gender
 */
ComplexUserAllOf.prototype['gender'] = undefined;
// Implement UserPost interface:
/**
 * User login
 * @member {String} username
 */
UserPost.prototype['username'] = undefined;
/**
 * First name of the user
 * @member {String} first_name
 */
UserPost.prototype['first_name'] = undefined;
/**
 * Last name of the user
 * @member {String} last_name
 */
UserPost.prototype['last_name'] = undefined;
/**
 * Email of the user
 * @member {String} email
 */
UserPost.prototype['email'] = undefined;
/**
 * User's phone (may be cellphone or phone)
 * @member {String} phone
 */
UserPost.prototype['phone'] = undefined;



/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
ComplexUserPost['GenderEnum'] = {

    /**
     * value: "male"
     * @const
     */
    "male": "male",

    /**
     * value: "female"
     * @const
     */
    "female": "female"
};



export default ComplexUserPost;

