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
import AlphanumericCellphoneSender from './AlphanumericCellphoneSender';
import NumericCellphoneSender from './NumericCellphoneSender';

/**
 * The CellphoneSender model module.
 * @module egoisdk/CellphoneSender
 * @version 1.1.3RC1
 */
class CellphoneSender {
    /**
     * Constructs a new <code>CellphoneSender</code>.
     * Cellphone sender schema
     * @alias module:egoisdk/CellphoneSender
     * @param {(module:egoisdk/AlphanumericCellphoneSender|module:egoisdk/NumericCellphoneSender)} instance The actual instance to initialize CellphoneSender.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "AlphanumericCellphoneSender") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                AlphanumericCellphoneSender.validateJSON(instance); // throw an exception if no match
                // create AlphanumericCellphoneSender from JS object
                this.actualInstance = AlphanumericCellphoneSender.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into AlphanumericCellphoneSender
            errorMessages.push("Failed to construct AlphanumericCellphoneSender: " + err)
        }

        try {
            if (typeof instance === "NumericCellphoneSender") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                NumericCellphoneSender.validateJSON(instance); // throw an exception if no match
                // create NumericCellphoneSender from JS object
                this.actualInstance = NumericCellphoneSender.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into NumericCellphoneSender
            errorMessages.push("Failed to construct NumericCellphoneSender: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `CellphoneSender` with oneOf schemas AlphanumericCellphoneSender, NumericCellphoneSender. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `CellphoneSender` with oneOf schemas AlphanumericCellphoneSender, NumericCellphoneSender. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>CellphoneSender</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/CellphoneSender} obj Optional instance to populate.
     * @return {module:egoisdk/CellphoneSender} The populated <code>CellphoneSender</code> instance.
     */
    static constructFromObject(data, obj) {
        return new CellphoneSender(data);
    }

    /**
     * Gets the actaul instance, which can be <code>AlphanumericCellphoneSender</code>, <code>NumericCellphoneSender</code>.
     * @return {(module:egoisdk/AlphanumericCellphoneSender|module:egoisdk/NumericCellphoneSender)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actaul instance, which can be <code>AlphanumericCellphoneSender</code>, <code>NumericCellphoneSender</code>.
     * @param {(module:egoisdk/AlphanumericCellphoneSender|module:egoisdk/NumericCellphoneSender)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = CellphoneSender.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual intance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of CellphoneSender from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:egoisdk/CellphoneSender} An instance of CellphoneSender.
     */
    static fromJSON = function(json_string){
        return CellphoneSender.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * Sender cellphone (country code followed by phone number, split by '-')
 * @member {String} cellphone
 */
CellphoneSender.prototype['cellphone'] = undefined;

/**
 * Content of your sender file in base64
 * @member {Blob} file
 */
CellphoneSender.prototype['file'] = undefined;

/**
 * Sender code type
 * @member {module:egoisdk/CellphoneSender.TypeEnum} type
 */
CellphoneSender.prototype['type'] = undefined;

/**
 * @member {Number} sender_id
 */
CellphoneSender.prototype['sender_id'] = undefined;

/**
 * Status of the sender
 * @member {module:egoisdk/CellphoneSender.StatusEnum} status
 */
CellphoneSender.prototype['status'] = undefined;


CellphoneSender.OneOf = ["AlphanumericCellphoneSender", "NumericCellphoneSender"];

export default CellphoneSender;

