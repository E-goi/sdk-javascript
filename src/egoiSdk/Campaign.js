/**
 * APIv3 (New)
 *  # Introduction This is our new version of API. We invite you to start using it and give us your feedback # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We've created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.   The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.   BaseURL = api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * <b>GET</b>: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * <b>POST</b>: The POST verb is most-often utilized to **create** new resources. * <b>PATCH</b>: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * <b>PUT</b>: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * <b>DELETE</b>: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Authentication   We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:  #!/bin/bash  curl -X GET 'https://api.egoiapp.com/my-account' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>'  Here you can see a curl Post example with authentication:  #!/bin/bash  curl -X POST 'http://api.egoiapp.com/tags' \\  -H 'accept: application/json' \\  -H 'Apikey: <YOUR_APY_KEY>' \\  -H 'Content-Type: application/json' \\  -d '{`name`:`Your custom tag`,`color`:`#FFFFFF`}'  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * <a href='https://github.com/E-goi/sdk-java'>Java</a>  * <a href='https://github.com/E-goi/sdk-php'>PHP</a>  * <a href='https://github.com/E-goi/sdk-python'>Python</a>  * <a href='https://github.com/E-goi/sdk-ruby'>Ruby</a>  * <a href='https://github.com/E-goi/sdk-javascript'>Javascript</a>  * <a href='https://github.com/E-goi/sdk-csharp'>C#</a>  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you'll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation's requests, it's advised the request's division in batches that have each one less than 20MB.  # Timeouts Timeouts set a maximum waiting time on a request's response. Our API, sets a default timeout for each request and when breached, you'll receive an HTTP **408 (Request Timeout)** error code. You should take into consideration that response times can vary widely based on the complexity of the request, amount of data being analyzed, and the load on the system and workspace at the time of the query. When dealing with such errors, you should first attempt to reduce the complexity and amount of data under analysis, and only then, if problems are still occurring ask for support.  For all these reasons, the default timeout for each request is **10 Seconds** and any request that creates or modifies data (**POST**, **PATCH** and **PUT**) will have a timeout of **60 Seconds**. Specific timeouts may exist for specific requests, these can be found in the request's documentation.  <security-definitions/>
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.3.4
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'egoiSdk/CampaignScheduleDate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CampaignScheduleDate'));
  } else {
    // Browser globals (root is window)
    if (!root.egoiSdk) {
      root.egoiSdk = {};
    }
    root.egoiSdk.Campaign = factory(root.egoiSdk.ApiClient, root.egoiSdk.CampaignScheduleDate);
  }
}(this, function(ApiClient, CampaignScheduleDate) {
  'use strict';



  /**
   * The Campaign model module.
   * @module egoiSdk/Campaign
   * @version 1.1.1RC1
   */

  /**
   * Constructs a new <code>Campaign</code>.
   * Campaign schema
   * @alias module:egoiSdk/Campaign
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:egoiSdk/Campaign} obj Optional instance to populate.
   * @return {module:egoiSdk/Campaign} The populated <code>Campaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('campaign_hash')) {
        obj['campaign_hash'] = ApiClient.convertToType(data['campaign_hash'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('thumbnail')) {
        obj['thumbnail'] = ApiClient.convertToType(data['thumbnail'], 'String');
      }
      if (data.hasOwnProperty('channel')) {
        obj['channel'] = ApiClient.convertToType(data['channel'], 'String');
      }
      if (data.hasOwnProperty('internal_name')) {
        obj['internal_name'] = ApiClient.convertToType(data['internal_name'], 'String');
      }
      if (data.hasOwnProperty('list_id')) {
        obj['list_id'] = ApiClient.convertToType(data['list_id'], 'Number');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('created_by')) {
        obj['created_by'] = ApiClient.convertToType(data['created_by'], 'Number');
      }
      if (data.hasOwnProperty('group_id')) {
        obj['group_id'] = ApiClient.convertToType(data['group_id'], 'Number');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('updated')) {
        obj['updated'] = ApiClient.convertToType(data['updated'], 'Date');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('end_date')) {
        obj['end_date'] = ApiClient.convertToType(data['end_date'], 'Date');
      }
      if (data.hasOwnProperty('schedule_date')) {
        obj['schedule_date'] = CampaignScheduleDate.constructFromObject(data['schedule_date']);
      }
    }
    return obj;
  }

  /**
   * @member {String} campaign_hash
   */
  exports.prototype['campaign_hash'] = undefined;
  /**
   * Status of the campaign
   * @member {module:egoiSdk/Campaign.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Thumbnail of the campaign
   * @member {String} thumbnail
   */
  exports.prototype['thumbnail'] = undefined;
  /**
   * Channel of the campaign
   * @member {module:egoiSdk/Campaign.ChannelEnum} channel
   */
  exports.prototype['channel'] = undefined;
  /**
   * Internal name of the campaign
   * @member {String} internal_name
   */
  exports.prototype['internal_name'] = undefined;
  /**
   * @member {Number} list_id
   */
  exports.prototype['list_id'] = undefined;
  /**
   * Subject of the campaign
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Number} created_by
   */
  exports.prototype['created_by'] = undefined;
  /**
   * @member {Number} group_id
   */
  exports.prototype['group_id'] = undefined;
  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {Date} updated
   */
  exports.prototype['updated'] = undefined;
  /**
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * @member {Date} end_date
   */
  exports.prototype['end_date'] = undefined;
  /**
   * @member {module:egoiSdk/CampaignScheduleDate} schedule_date
   */
  exports.prototype['schedule_date'] = undefined;


  /**
   * @return {String}
   */
  exports.prototype.getCampaignHash = function() {
    return this['campaign_hash'];
  }

  /**
   * @param {String} campaignHash
   */
  exports.prototype.setCampaignHash = function(campaignHash) {
    this['campaign_hash'] = campaignHash;
  }


  /**
   * Returns Status of the campaign
   * @return {module:egoiSdk/Campaign.StatusEnum}
   */
  exports.prototype.getStatus = function() {
    return this['status'];
  }

  /**
   * Sets Status of the campaign
   * @param {module:egoiSdk/Campaign.StatusEnum} status Status of the campaign
   */
  exports.prototype.setStatus = function(status) {
    this['status'] = status;
  }


  /**
   * Returns Thumbnail of the campaign
   * @return {String}
   */
  exports.prototype.getThumbnail = function() {
    return this['thumbnail'];
  }

  /**
   * Sets Thumbnail of the campaign
   * @param {String} thumbnail Thumbnail of the campaign
   */
  exports.prototype.setThumbnail = function(thumbnail) {
    this['thumbnail'] = thumbnail;
  }


  /**
   * Returns Channel of the campaign
   * @return {module:egoiSdk/Campaign.ChannelEnum}
   */
  exports.prototype.getChannel = function() {
    return this['channel'];
  }

  /**
   * Sets Channel of the campaign
   * @param {module:egoiSdk/Campaign.ChannelEnum} channel Channel of the campaign
   */
  exports.prototype.setChannel = function(channel) {
    this['channel'] = channel;
  }


  /**
   * Returns Internal name of the campaign
   * @return {String}
   */
  exports.prototype.getInternalName = function() {
    return this['internal_name'];
  }

  /**
   * Sets Internal name of the campaign
   * @param {String} internalName Internal name of the campaign
   */
  exports.prototype.setInternalName = function(internalName) {
    this['internal_name'] = internalName;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getListId = function() {
    return this['list_id'];
  }

  /**
   * @param {Number} listId
   */
  exports.prototype.setListId = function(listId) {
    this['list_id'] = listId;
  }


  /**
   * Returns Subject of the campaign
   * @return {String}
   */
  exports.prototype.getTitle = function() {
    return this['title'];
  }

  /**
   * Sets Subject of the campaign
   * @param {String} title Subject of the campaign
   */
  exports.prototype.setTitle = function(title) {
    this['title'] = title;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getCreatedBy = function() {
    return this['created_by'];
  }

  /**
   * @param {Number} createdBy
   */
  exports.prototype.setCreatedBy = function(createdBy) {
    this['created_by'] = createdBy;
  }


  /**
   * minimum: 1
   * @return {Number}
   */
  exports.prototype.getGroupId = function() {
    return this['group_id'];
  }

  /**
   * @param {Number} groupId
   */
  exports.prototype.setGroupId = function(groupId) {
    this['group_id'] = groupId;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getCreated = function() {
    return this['created'];
  }

  /**
   * @param {Date} created
   */
  exports.prototype.setCreated = function(created) {
    this['created'] = created;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getUpdated = function() {
    return this['updated'];
  }

  /**
   * @param {Date} updated
   */
  exports.prototype.setUpdated = function(updated) {
    this['updated'] = updated;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getStartDate = function() {
    return this['start_date'];
  }

  /**
   * @param {Date} startDate
   */
  exports.prototype.setStartDate = function(startDate) {
    this['start_date'] = startDate;
  }


  /**
   * @return {Date}
   */
  exports.prototype.getEndDate = function() {
    return this['end_date'];
  }

  /**
   * @param {Date} endDate
   */
  exports.prototype.setEndDate = function(endDate) {
    this['end_date'] = endDate;
  }


  /**
   * @return {module:egoiSdk/CampaignScheduleDate}
   */
  exports.prototype.getScheduleDate = function() {
    return this['schedule_date'];
  }

  /**
   * @param {module:egoiSdk/CampaignScheduleDate} scheduleDate
   */
  exports.prototype.setScheduleDate = function(scheduleDate) {
    this['schedule_date'] = scheduleDate;
  }


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "draft"
     * @const
     */
    "draft": "draft",
    /**
     * value: "canceled"
     * @const
     */
    "canceled": "canceled",
    /**
     * value: "queued"
     * @const
     */
    "queued": "queued",
    /**
     * value: "paused"
     * @const
     */
    "paused": "paused",
    /**
     * value: "sending"
     * @const
     */
    "sending": "sending",
    /**
     * value: "sent"
     * @const
     */
    "sent": "sent"  };

  /**
   * Allowed values for the <code>channel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ChannelEnum = {
    /**
     * value: "email"
     * @const
     */
    "email": "email",
    /**
     * value: "push"
     * @const
     */
    "push": "push",
    /**
     * value: "sms"
     * @const
     */
    "sms": "sms",
    /**
     * value: "smart_sms"
     * @const
     */
    "smart_sms": "smart_sms",
    /**
     * value: "voice"
     * @const
     */
    "voice": "voice",
    /**
     * value: "web_push"
     * @const
     */
    "web_push": "web_push"  };


  return exports;
}));


