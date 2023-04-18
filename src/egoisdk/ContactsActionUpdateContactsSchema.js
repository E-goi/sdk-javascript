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
import UpdateByContact from './UpdateByContact';
import UpdateBySegment from './UpdateBySegment';
import UpdateForAll from './UpdateForAll';

/**
 * The ContactsActionUpdateContactsSchema model module.
 * @module egoisdk/ContactsActionUpdateContactsSchema
 * @version 1.1.3RC1
 */
class ContactsActionUpdateContactsSchema {
    /**
     * Constructs a new <code>ContactsActionUpdateContactsSchema</code>.
     * Updates contacts request schema
     * @alias module:egoisdk/ContactsActionUpdateContactsSchema
     * @param {(module:egoisdk/UpdateByContact|module:egoisdk/UpdateBySegment|module:egoisdk/UpdateForAll)} instance The actual instance to initialize ContactsActionUpdateContactsSchema.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "UpdateByContact") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                UpdateByContact.validateJSON(instance); // throw an exception if no match
                // create UpdateByContact from JS object
                this.actualInstance = UpdateByContact.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UpdateByContact
            errorMessages.push("Failed to construct UpdateByContact: " + err)
        }

        try {
            if (typeof instance === "UpdateBySegment") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                UpdateBySegment.validateJSON(instance); // throw an exception if no match
                // create UpdateBySegment from JS object
                this.actualInstance = UpdateBySegment.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UpdateBySegment
            errorMessages.push("Failed to construct UpdateBySegment: " + err)
        }

        try {
            if (typeof instance === "UpdateForAll") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                UpdateForAll.validateJSON(instance); // throw an exception if no match
                // create UpdateForAll from JS object
                this.actualInstance = UpdateForAll.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into UpdateForAll
            errorMessages.push("Failed to construct UpdateForAll: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `ContactsActionUpdateContactsSchema` with oneOf schemas UpdateByContact, UpdateBySegment, UpdateForAll. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `ContactsActionUpdateContactsSchema` with oneOf schemas UpdateByContact, UpdateBySegment, UpdateForAll. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>ContactsActionUpdateContactsSchema</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ContactsActionUpdateContactsSchema} obj Optional instance to populate.
     * @return {module:egoisdk/ContactsActionUpdateContactsSchema} The populated <code>ContactsActionUpdateContactsSchema</code> instance.
     */
    static constructFromObject(data, obj) {
        return new ContactsActionUpdateContactsSchema(data);
    }

    /**
     * Gets the actaul instance, which can be <code>UpdateByContact</code>, <code>UpdateBySegment</code>, <code>UpdateForAll</code>.
     * @return {(module:egoisdk/UpdateByContact|module:egoisdk/UpdateBySegment|module:egoisdk/UpdateForAll)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actaul instance, which can be <code>UpdateByContact</code>, <code>UpdateBySegment</code>, <code>UpdateForAll</code>.
     * @param {(module:egoisdk/UpdateByContact|module:egoisdk/UpdateBySegment|module:egoisdk/UpdateForAll)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = ContactsActionUpdateContactsSchema.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual intance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of ContactsActionUpdateContactsSchema from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:egoisdk/ContactsActionUpdateContactsSchema} An instance of ContactsActionUpdateContactsSchema.
     */
    static fromJSON = function(json_string){
        return ContactsActionUpdateContactsSchema.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Updates the contacts in the whole list (excluding removed contacts)
 * @member {module:egoisdk/ContactsActionUpdateContactsSchema.TypeEnum} type
 */
ContactsActionUpdateContactsSchema.prototype['type'] = undefined;

/**
 * Array of contact IDs to update
 * @member {Array.<String>} contacts
 */
ContactsActionUpdateContactsSchema.prototype['contacts'] = undefined;

/**
 * Segment ID to update channel field
 * @member {String} segment_id
 */
ContactsActionUpdateContactsSchema.prototype['segment_id'] = undefined;


ContactsActionUpdateContactsSchema.OneOf = ["UpdateByContact", "UpdateBySegment", "UpdateForAll"];

export default ContactsActionUpdateContactsSchema;

