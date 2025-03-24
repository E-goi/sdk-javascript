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
import ProductCustomAttributes from './ProductCustomAttributes';

/**
 * The ProductPatchRequest model module.
 * @module egoisdk/ProductPatchRequest
 * @version 1.1.6RC1
 */
class ProductPatchRequest {
    /**
     * Constructs a new <code>ProductPatchRequest</code>.
     * Product patch request schema
     * @alias module:egoisdk/ProductPatchRequest
     */
    constructor() { 
        
        ProductPatchRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductPatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:egoisdk/ProductPatchRequest} obj Optional instance to populate.
     * @return {module:egoisdk/ProductPatchRequest} The populated <code>ProductPatchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductPatchRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('ean')) {
                obj['ean'] = ApiClient.convertToType(data['ean'], 'String');
            }
            if (data.hasOwnProperty('gtin')) {
                obj['gtin'] = ApiClient.convertToType(data['gtin'], 'String');
            }
            if (data.hasOwnProperty('mpn')) {
                obj['mpn'] = ApiClient.convertToType(data['mpn'], 'String');
            }
            if (data.hasOwnProperty('link')) {
                obj['link'] = ApiClient.convertToType(data['link'], 'String');
            }
            if (data.hasOwnProperty('image_link')) {
                obj['image_link'] = ApiClient.convertToType(data['image_link'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('sale_price')) {
                obj['sale_price'] = ApiClient.convertToType(data['sale_price'], 'Number');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('categories')) {
                obj['categories'] = ApiClient.convertToType(data['categories'], ['String']);
            }
            if (data.hasOwnProperty('related_products')) {
                obj['related_products'] = ApiClient.convertToType(data['related_products'], ['String']);
            }
            if (data.hasOwnProperty('custom_attributes')) {
                obj['custom_attributes'] = ApiClient.convertToType(data['custom_attributes'], [ProductCustomAttributes]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductPatchRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductPatchRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        // ensure the json data is a string
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // ensure the json data is a string
        if (data['ean'] && !(typeof data['ean'] === 'string' || data['ean'] instanceof String)) {
            throw new Error("Expected the field `ean` to be a primitive type in the JSON string but got " + data['ean']);
        }
        // ensure the json data is a string
        if (data['gtin'] && !(typeof data['gtin'] === 'string' || data['gtin'] instanceof String)) {
            throw new Error("Expected the field `gtin` to be a primitive type in the JSON string but got " + data['gtin']);
        }
        // ensure the json data is a string
        if (data['mpn'] && !(typeof data['mpn'] === 'string' || data['mpn'] instanceof String)) {
            throw new Error("Expected the field `mpn` to be a primitive type in the JSON string but got " + data['mpn']);
        }
        // ensure the json data is a string
        if (data['link'] && !(typeof data['link'] === 'string' || data['link'] instanceof String)) {
            throw new Error("Expected the field `link` to be a primitive type in the JSON string but got " + data['link']);
        }
        // ensure the json data is a string
        if (data['image_link'] && !(typeof data['image_link'] === 'string' || data['image_link'] instanceof String)) {
            throw new Error("Expected the field `image_link` to be a primitive type in the JSON string but got " + data['image_link']);
        }
        // ensure the json data is a string
        if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
            throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['categories'])) {
            throw new Error("Expected the field `categories` to be an array in the JSON data but got " + data['categories']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['related_products'])) {
            throw new Error("Expected the field `related_products` to be an array in the JSON data but got " + data['related_products']);
        }
        if (data['custom_attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['custom_attributes'])) {
                throw new Error("Expected the field `custom_attributes` to be an array in the JSON data but got " + data['custom_attributes']);
            }
            // validate the optional field `custom_attributes` (array)
            for (const item of data['custom_attributes']) {
                ProductCustomAttributes.validateJsonObject(item);
            };
        }

        return true;
    }

/**
     * Returns Name of the product
     * @return {String}
     */
    getName() {
        return this.name;
    }

    /**
     * Sets Name of the product
     * @param {String} name Name of the product
     */
    setName(name) {
        this['name'] = name;
    }
/**
     * Returns Description of the product
     * @return {String}
     */
    getDescription() {
        return this.description;
    }

    /**
     * Sets Description of the product
     * @param {String} description Description of the product
     */
    setDescription(description) {
        this['description'] = description;
    }
/**
     * Returns Stock Keeping Unit
     * @return {String}
     */
    getSku() {
        return this.sku;
    }

    /**
     * Sets Stock Keeping Unit
     * @param {String} sku Stock Keeping Unit
     */
    setSku(sku) {
        this['sku'] = sku;
    }
/**
     * Returns Universal Product Code
     * @return {String}
     */
    getUpc() {
        return this.upc;
    }

    /**
     * Sets Universal Product Code
     * @param {String} upc Universal Product Code
     */
    setUpc(upc) {
        this['upc'] = upc;
    }
/**
     * Returns European Article Numbering
     * @return {String}
     */
    getEan() {
        return this.ean;
    }

    /**
     * Sets European Article Numbering
     * @param {String} ean European Article Numbering
     */
    setEan(ean) {
        this['ean'] = ean;
    }
/**
     * Returns Global Trade Item Number
     * @return {String}
     */
    getGtin() {
        return this.gtin;
    }

    /**
     * Sets Global Trade Item Number
     * @param {String} gtin Global Trade Item Number
     */
    setGtin(gtin) {
        this['gtin'] = gtin;
    }
/**
     * Returns Manufacturer Part Number
     * @return {String}
     */
    getMpn() {
        return this.mpn;
    }

    /**
     * Sets Manufacturer Part Number
     * @param {String} mpn Manufacturer Part Number
     */
    setMpn(mpn) {
        this['mpn'] = mpn;
    }
/**
     * Returns Link for the product
     * @return {String}
     */
    getLink() {
        return this.link;
    }

    /**
     * Sets Link for the product
     * @param {String} link Link for the product
     */
    setLink(link) {
        this['link'] = link;
    }
/**
     * Returns Link for the product image
     * @return {String}
     */
    getImageLink() {
        return this.image_link;
    }

    /**
     * Sets Link for the product image
     * @param {String} imageLink Link for the product image
     */
    setImageLink(imageLink) {
        this['image_link'] = imageLink;
    }
/**
     * Returns Price of the product
     * @return {Number}
     */
    getPrice() {
        return this.price;
    }

    /**
     * Sets Price of the product
     * @param {Number} price Price of the product
     */
    setPrice(price) {
        this['price'] = price;
    }
/**
     * Returns Sale price of the product
     * @return {Number}
     */
    getSalePrice() {
        return this.sale_price;
    }

    /**
     * Sets Sale price of the product
     * @param {Number} salePrice Sale price of the product
     */
    setSalePrice(salePrice) {
        this['sale_price'] = salePrice;
    }
/**
     * Returns Brand of the product
     * @return {String}
     */
    getBrand() {
        return this.brand;
    }

    /**
     * Sets Brand of the product
     * @param {String} brand Brand of the product
     */
    setBrand(brand) {
        this['brand'] = brand;
    }
/**
     * Returns Array of product categories, using the character '>' as delimiter for the breadcrumb                         syntax
     * @return {Array.<String>}
     */
    getCategories() {
        return this.categories;
    }

    /**
     * Sets Array of product categories, using the character '>' as delimiter for the breadcrumb                         syntax
     * @param {Array.<String>} categories Array of product categories, using the character '>' as delimiter for the breadcrumb                         syntax
     */
    setCategories(categories) {
        this['categories'] = categories;
    }
/**
     * Returns Related products, array of 'product_identifier'
     * @return {Array.<String>}
     */
    getRelatedProducts() {
        return this.related_products;
    }

    /**
     * Sets Related products, array of 'product_identifier'
     * @param {Array.<String>} relatedProducts Related products, array of 'product_identifier'
     */
    setRelatedProducts(relatedProducts) {
        this['related_products'] = relatedProducts;
    }
/**
     * Returns Custom attributes
     * @return {Array.<module:egoisdk/ProductCustomAttributes>}
     */
    getCustomAttributes() {
        return this.custom_attributes;
    }

    /**
     * Sets Custom attributes
     * @param {Array.<module:egoisdk/ProductCustomAttributes>} customAttributes Custom attributes
     */
    setCustomAttributes(customAttributes) {
        this['custom_attributes'] = customAttributes;
    }

}



/**
 * Name of the product
 * @member {String} name
 */
ProductPatchRequest.prototype['name'] = undefined;

/**
 * Description of the product
 * @member {String} description
 */
ProductPatchRequest.prototype['description'] = undefined;

/**
 * Stock Keeping Unit
 * @member {String} sku
 */
ProductPatchRequest.prototype['sku'] = undefined;

/**
 * Universal Product Code
 * @member {String} upc
 */
ProductPatchRequest.prototype['upc'] = undefined;

/**
 * European Article Numbering
 * @member {String} ean
 */
ProductPatchRequest.prototype['ean'] = undefined;

/**
 * Global Trade Item Number
 * @member {String} gtin
 */
ProductPatchRequest.prototype['gtin'] = undefined;

/**
 * Manufacturer Part Number
 * @member {String} mpn
 */
ProductPatchRequest.prototype['mpn'] = undefined;

/**
 * Link for the product
 * @member {String} link
 */
ProductPatchRequest.prototype['link'] = undefined;

/**
 * Link for the product image
 * @member {String} image_link
 */
ProductPatchRequest.prototype['image_link'] = undefined;

/**
 * Price of the product
 * @member {Number} price
 * @default 0
 */
ProductPatchRequest.prototype['price'] = 0;

/**
 * Sale price of the product
 * @member {Number} sale_price
 * @default 0
 */
ProductPatchRequest.prototype['sale_price'] = 0;

/**
 * Brand of the product
 * @member {String} brand
 */
ProductPatchRequest.prototype['brand'] = undefined;

/**
 * Array of product categories, using the character '>' as delimiter for the breadcrumb                         syntax
 * @member {Array.<String>} categories
 */
ProductPatchRequest.prototype['categories'] = undefined;

/**
 * Related products, array of 'product_identifier'
 * @member {Array.<String>} related_products
 */
ProductPatchRequest.prototype['related_products'] = undefined;

/**
 * Custom attributes
 * @member {Array.<module:egoisdk/ProductCustomAttributes>} custom_attributes
 */
ProductPatchRequest.prototype['custom_attributes'] = undefined;






export default ProductPatchRequest;

