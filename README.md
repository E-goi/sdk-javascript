![E-goi](https://www.e-goi.com/wp-content/themes/egoi2019/imgs/svg/logo-egoi.svg)

Almost anything you can do in E-goi, you can do with our API.

The API describes each available method. Learn about parameters, errors, and how to format your requests. That means you can easily call on E-goi actions for your integration.
**API** Full documentation at https://developers.e-goi.com/api/v3/

If you find a bug or something worth fixing, create an issue.

### Changelog
#### 1.1.1RC1
## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install egoiSdk --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your egoiSdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('egoiSdk')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/E-goi/sdk-javascript
then install it via:

```shell
    npm install E-goi/sdk-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var egoiSdk = require('egoiSdk');

var defaultClient = egoiSdk.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new egoiSdk.AdvancedReportsApi()
var generateEmailBouncesReport = new egoiSdk.GenerateEmailBouncesReport(); // {GenerateEmailBouncesReport} Parameters for the email bounces report

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.generateEmailBouncesReport(generateEmailBouncesReport, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.egoiapp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*egoiSdk.AdvancedReportsApi* | [**generateEmailBouncesReport**](docs/AdvancedReportsApi.md#generateEmailBouncesReport) | **POST** /reports/advanced/email-bounces | Generate email bounces report
*egoiSdk.AdvancedReportsApi* | [**generateEmailClicksByContactReport**](docs/AdvancedReportsApi.md#generateEmailClicksByContactReport) | **POST** /reports/advanced/email-clicks-by-contact | Generate email clicks by contact report
*egoiSdk.AdvancedReportsApi* | [**generateEmailClicksByUrlReport**](docs/AdvancedReportsApi.md#generateEmailClicksByUrlReport) | **POST** /reports/advanced/email-clicks-by-url | Generate email clicks by URL report
*egoiSdk.AdvancedReportsApi* | [**generateEmailEventsReport**](docs/AdvancedReportsApi.md#generateEmailEventsReport) | **POST** /reports/advanced/email-events | Generate email events report
*egoiSdk.AdvancedReportsApi* | [**generateEmailSmsReport**](docs/AdvancedReportsApi.md#generateEmailSmsReport) | **POST** /reports/advanced/sms-bounces | Generate SMS bounces report
*egoiSdk.AdvancedReportsApi* | [**generateEmailUnsubscriptionsReport**](docs/AdvancedReportsApi.md#generateEmailUnsubscriptionsReport) | **POST** /reports/advanced/email-unsubscriptions | Generate email unsubscriptions report
*egoiSdk.AdvancedReportsApi* | [**generateFormAnswersReport**](docs/AdvancedReportsApi.md#generateFormAnswersReport) | **POST** /reports/advanced/form-answers | Generate form answers report
*egoiSdk.AdvancedReportsApi* | [**generateSendsReport**](docs/AdvancedReportsApi.md#generateSendsReport) | **POST** /reports/advanced/sends | Generate sends report
*egoiSdk.AdvancedReportsApi* | [**generateSmsEventsReport**](docs/AdvancedReportsApi.md#generateSmsEventsReport) | **POST** /reports/advanced/sms-events | Generate SMS events report
*egoiSdk.AdvancedReportsApi* | [**generateSubscriptionsReport**](docs/AdvancedReportsApi.md#generateSubscriptionsReport) | **POST** /reports/advanced/subscriptions | Generate subscriptions report
*egoiSdk.AdvancedReportsApi* | [**generateUnsubscriptionsReport**](docs/AdvancedReportsApi.md#generateUnsubscriptionsReport) | **POST** /reports/advanced/unsubscriptions | Generate unsubscriptions report
*egoiSdk.AdvancedReportsApi* | [**getAllAdvancedReports**](docs/AdvancedReportsApi.md#getAllAdvancedReports) | **GET** /reports/advanced | Get all advanced reports
*egoiSdk.AutomationsApi* | [**deleteAutomation**](docs/AutomationsApi.md#deleteAutomation) | **DELETE** /automations/{automation_id} | Remove automation
*egoiSdk.AutomationsApi* | [**getAllAutomations**](docs/AutomationsApi.md#getAllAutomations) | **GET** /automations | Get all automations
*egoiSdk.CNamesApi* | [**createCName**](docs/CNamesApi.md#createCName) | **POST** /cnames | Create cname
*egoiSdk.CNamesApi* | [**getAllCNames**](docs/CNamesApi.md#getAllCNames) | **GET** /cnames | Get All CNames
*egoiSdk.CampaignGroupsApi* | [**createCampaignGroup**](docs/CampaignGroupsApi.md#createCampaignGroup) | **POST** /campaign-groups | Create new campaign group
*egoiSdk.CampaignGroupsApi* | [**deleteCampaignGroup**](docs/CampaignGroupsApi.md#deleteCampaignGroup) | **DELETE** /campaign-groups/{group_id} | Remove Campaign Group
*egoiSdk.CampaignGroupsApi* | [**getAllCampaignGroups**](docs/CampaignGroupsApi.md#getAllCampaignGroups) | **GET** /campaign-groups | Get all campaign groups
*egoiSdk.CampaignGroupsApi* | [**updateCampaignGroup**](docs/CampaignGroupsApi.md#updateCampaignGroup) | **PUT** /campaign-groups/{group_id} | Update a specific campaign group
*egoiSdk.CampaignsApi* | [**deleteCampaigns**](docs/CampaignsApi.md#deleteCampaigns) | **DELETE** /campaigns/{campaign_hash} | Remove Campaign
*egoiSdk.CampaignsApi* | [**getAllCampaigns**](docs/CampaignsApi.md#getAllCampaigns) | **GET** /campaigns | Get all Campaigns
*egoiSdk.ContactsApi* | [**actionActivateContacts**](docs/ContactsApi.md#actionActivateContacts) | **POST** /lists/{list_id}/contacts/actions/activate | Activate contacts
*egoiSdk.ContactsApi* | [**actionAttachTag**](docs/ContactsApi.md#actionAttachTag) | **POST** /lists/{list_id}/contacts/actions/attach-tag | Attach tag to contact
*egoiSdk.ContactsApi* | [**actionDeactivateContacts**](docs/ContactsApi.md#actionDeactivateContacts) | **POST** /lists/{list_id}/contacts/actions/deactivate | Deactivate contacts
*egoiSdk.ContactsApi* | [**actionDetachTag**](docs/ContactsApi.md#actionDetachTag) | **POST** /lists/{list_id}/contacts/actions/detach-tag | Detach tag to contact
*egoiSdk.ContactsApi* | [**actionExportContacts**](docs/ContactsApi.md#actionExportContacts) | **POST** /lists/{list_id}/contacts/actions/export | Exports a list of contacts
*egoiSdk.ContactsApi* | [**actionForgetContacts**](docs/ContactsApi.md#actionForgetContacts) | **POST** /lists/{list_id}/contacts/actions/forget | Forget contacts
*egoiSdk.ContactsApi* | [**actionImportBulk**](docs/ContactsApi.md#actionImportBulk) | **POST** /lists/{list_id}/contacts/actions/import-bulk | Import collection of contacts
*egoiSdk.ContactsApi* | [**actionStartAutomation**](docs/ContactsApi.md#actionStartAutomation) | **POST** /lists/{list_id}/contacts/actions/start-automation | Start automation
*egoiSdk.ContactsApi* | [**actionUnsubscribeContact**](docs/ContactsApi.md#actionUnsubscribeContact) | **POST** /lists/{list_id}/contacts/actions/unsubscribe | Unsubscribes contacts
*egoiSdk.ContactsApi* | [**createContact**](docs/ContactsApi.md#createContact) | **POST** /lists/{list_id}/contacts | Create new contact
*egoiSdk.ContactsApi* | [**getAllContactActivities**](docs/ContactsApi.md#getAllContactActivities) | **GET** /lists/{list_id}/contacts/{contact_id}/activities | Get all contact activities
*egoiSdk.ContactsApi* | [**getAllContacts**](docs/ContactsApi.md#getAllContacts) | **GET** /lists/{list_id}/contacts | Get all contacts
*egoiSdk.ContactsApi* | [**getAllContactsBySegment**](docs/ContactsApi.md#getAllContactsBySegment) | **GET** /lists/{list_id}/contacts/segment/{segment_id} | Get all contacts by Segment Id
*egoiSdk.ContactsApi* | [**getContact**](docs/ContactsApi.md#getContact) | **GET** /lists/{list_id}/contacts/{contact_id} | Get contact
*egoiSdk.ContactsApi* | [**patchContact**](docs/ContactsApi.md#patchContact) | **PATCH** /lists/{list_id}/contacts/{contact_id} | Update a specific contact
*egoiSdk.ContactsApi* | [**searchContacts**](docs/ContactsApi.md#searchContacts) | **GET** /contacts/search | Search contact
*egoiSdk.EcommerceApi* | [**createCart**](docs/EcommerceApi.md#createCart) | **POST** /{domain}/carts | Create cart
*egoiSdk.EcommerceApi* | [**createCatalog**](docs/EcommerceApi.md#createCatalog) | **POST** /catalogs | Create new catalog
*egoiSdk.EcommerceApi* | [**createOrder**](docs/EcommerceApi.md#createOrder) | **POST** /{domain}/orders | Create order
*egoiSdk.EcommerceApi* | [**createProduct**](docs/EcommerceApi.md#createProduct) | **POST** /catalogs/{catalog_id}/products | Create new product
*egoiSdk.EcommerceApi* | [**deleteCatalog**](docs/EcommerceApi.md#deleteCatalog) | **DELETE** /catalogs/{catalog_id} | Remove catalog
*egoiSdk.EcommerceApi* | [**deleteProduct**](docs/EcommerceApi.md#deleteProduct) | **DELETE** /catalogs/{catalog_id}/products/{product_identifier} | Remove product
*egoiSdk.EcommerceApi* | [**getAllCatalogs**](docs/EcommerceApi.md#getAllCatalogs) | **GET** /catalogs | Get all catalogs
*egoiSdk.EcommerceApi* | [**getAllProducts**](docs/EcommerceApi.md#getAllProducts) | **GET** /catalogs/{catalog_id}/products | Get all products
*egoiSdk.EcommerceApi* | [**getProduct**](docs/EcommerceApi.md#getProduct) | **GET** /catalogs/{catalog_id}/products/{product_identifier} | Get product
*egoiSdk.EcommerceApi* | [**importProducts**](docs/EcommerceApi.md#importProducts) | **POST** /catalogs/{catalog_id}/products/actions/import | Import products
*egoiSdk.EcommerceApi* | [**updateProduct**](docs/EcommerceApi.md#updateProduct) | **PATCH** /catalogs/{catalog_id}/products/{product_identifier} | Update product
*egoiSdk.EcommerceActivityApi* | [**importOrdersBulk**](docs/EcommerceActivityApi.md#importOrdersBulk) | **POST** /lists/{list_id}/orders | Orders import bulk request
*egoiSdk.EmailApi* | [**actionEnableEmailRss**](docs/EmailApi.md#actionEnableEmailRss) | **POST** /campaigns/email/rss/{campaign_hash}/actions/enable | Enables a rss email campaign
*egoiSdk.EmailApi* | [**actionSendEmail**](docs/EmailApi.md#actionSendEmail) | **POST** /campaigns/email/{campaign_hash}/actions/send | Send email message
*egoiSdk.EmailApi* | [**createEmailCampaign**](docs/EmailApi.md#createEmailCampaign) | **POST** /campaigns/email | Create new email campaign
*egoiSdk.EmailApi* | [**createEmailRssCampaign**](docs/EmailApi.md#createEmailRssCampaign) | **POST** /campaigns/email/rss | Create new email rss campaign
*egoiSdk.EmailApi* | [**patchEmailCampaign**](docs/EmailApi.md#patchEmailCampaign) | **PATCH** /campaigns/email/{campaign_hash} | Update a specific email campaign
*egoiSdk.FieldsApi* | [**createExtraField**](docs/FieldsApi.md#createExtraField) | **POST** /lists/{list_id}/fields/extra | Create extra field
*egoiSdk.FieldsApi* | [**createFieldOption**](docs/FieldsApi.md#createFieldOption) | **POST** /lists/{list_id}/fields/extra/{field_id}/options | Create new field option
*egoiSdk.FieldsApi* | [**deleteExtraField**](docs/FieldsApi.md#deleteExtraField) | **DELETE** /lists/{list_id}/fields/extra/{field_id} | Remove extra field
*egoiSdk.FieldsApi* | [**deleteFieldOption**](docs/FieldsApi.md#deleteFieldOption) | **DELETE** /lists/{list_id}/fields/extra/{field_id}/options/{option_id} | Deletes an option
*egoiSdk.FieldsApi* | [**getAllFieldOptions**](docs/FieldsApi.md#getAllFieldOptions) | **GET** /lists/{list_id}/fields/extra/{field_id}/options | Get all field options
*egoiSdk.FieldsApi* | [**getAllFields**](docs/FieldsApi.md#getAllFields) | **GET** /lists/{list_id}/fields | Get all fields
*egoiSdk.FieldsApi* | [**patchBaseField**](docs/FieldsApi.md#patchBaseField) | **PATCH** /lists/{list_id}/fields/base/{field_id} | Update base field
*egoiSdk.FieldsApi* | [**patchExtraField**](docs/FieldsApi.md#patchExtraField) | **PATCH** /lists/{list_id}/fields/extra/{field_id} | Update extra field
*egoiSdk.FieldsApi* | [**updateFieldOption**](docs/FieldsApi.md#updateFieldOption) | **PATCH** /lists/{list_id}/fields/extra/{field_id}/options/{option_id} | Update field option
*egoiSdk.ListsApi* | [**createList**](docs/ListsApi.md#createList) | **POST** /lists | Create new list
*egoiSdk.ListsApi* | [**deleteList**](docs/ListsApi.md#deleteList) | **DELETE** /lists/{list_id} | Remove list
*egoiSdk.ListsApi* | [**getAllLists**](docs/ListsApi.md#getAllLists) | **GET** /lists | Get all lists
*egoiSdk.ListsApi* | [**updateList**](docs/ListsApi.md#updateList) | **PATCH** /lists/{list_id} | Update a specific list
*egoiSdk.MyAccountApi* | [**enableTe**](docs/MyAccountApi.md#enableTe) | **POST** /my-account/actions/enable-te | Enable Track&amp;Engage
*egoiSdk.MyAccountApi* | [**getMyAccount**](docs/MyAccountApi.md#getMyAccount) | **GET** /my-account | Get My Account Info
*egoiSdk.OperationsApi* | [**actionApproveOperation**](docs/OperationsApi.md#actionApproveOperation) | **POST** /operations/actions/approve | Approve operation
*egoiSdk.OperationsApi* | [**actionCancelOperation**](docs/OperationsApi.md#actionCancelOperation) | **POST** /operations/actions/cancel | Cancel operation
*egoiSdk.OperationsApi* | [**actionPauseOperation**](docs/OperationsApi.md#actionPauseOperation) | **POST** /operations/actions/pause | Pause operation
*egoiSdk.OperationsApi* | [**actionResumeOperation**](docs/OperationsApi.md#actionResumeOperation) | **POST** /operations/actions/resume | Resume operation
*egoiSdk.OperationsApi* | [**getAllOperations**](docs/OperationsApi.md#getAllOperations) | **GET** /operations | Get all queued operations
*egoiSdk.PingApi* | [**ping**](docs/PingApi.md#ping) | **POST** /ping | Pings the API
*egoiSdk.PushApi* | [**actionSendPush**](docs/PushApi.md#actionSendPush) | **POST** /campaigns/push/{campaign_hash}/actions/send | Send push message
*egoiSdk.PushApi* | [**createPushCampaign**](docs/PushApi.md#createPushCampaign) | **POST** /campaigns/push | Create new push campaign
*egoiSdk.PushApi* | [**getPushApp**](docs/PushApi.md#getPushApp) | **GET** /push/apps/{app_id} | Get a Push application from E-goi
*egoiSdk.PushApi* | [**getPushApps**](docs/PushApi.md#getPushApps) | **GET** /push/apps | Get all Push applications from E-goi
*egoiSdk.PushApi* | [**patchPushCampaign**](docs/PushApi.md#patchPushCampaign) | **PATCH** /campaigns/push/{campaign_hash} | Update a specific push campaign
*egoiSdk.PushApi* | [**registerPushEvent**](docs/PushApi.md#registerPushEvent) | **POST** /push/apps/{app_id}/event | Registers an event from the push notification.
*egoiSdk.PushApi* | [**registerPushToken**](docs/PushApi.md#registerPushToken) | **POST** /push/apps/{app_id}/token | Registers a Firebase token
*egoiSdk.ReportsApi* | [**getSMSReport**](docs/ReportsApi.md#getSMSReport) | **GET** /reports/sms/{campaign_hash} | Get sms report
*egoiSdk.ReportsApi* | [**getVoiceReport**](docs/ReportsApi.md#getVoiceReport) | **GET** /reports/voice/{campaign_hash} | Get voice report
*egoiSdk.ReportsApi* | [**getWebPushReport**](docs/ReportsApi.md#getWebPushReport) | **GET** /reports/web-push/{campaign_hash} | Get webpush report
*egoiSdk.SegmentsApi* | [**deleteSegment**](docs/SegmentsApi.md#deleteSegment) | **DELETE** /lists/{list_id}/segments/{segment_id} | Remove segment
*egoiSdk.SegmentsApi* | [**getAllSegments**](docs/SegmentsApi.md#getAllSegments) | **GET** /lists/{list_id}/segments | Get all segments
*egoiSdk.SendersApi* | [**createCellphoneSender**](docs/SendersApi.md#createCellphoneSender) | **POST** /senders/cellphone | Create cellphone sender
*egoiSdk.SendersApi* | [**createEmailSender**](docs/SendersApi.md#createEmailSender) | **POST** /senders/email | Create email sender
*egoiSdk.SendersApi* | [**createPhoneSender**](docs/SendersApi.md#createPhoneSender) | **POST** /senders/phone | Create phone sender
*egoiSdk.SendersApi* | [**deleteCellphoneSender**](docs/SendersApi.md#deleteCellphoneSender) | **DELETE** /senders/cellphone/{sender_id} | Remove cellphone sender
*egoiSdk.SendersApi* | [**deleteEmailSender**](docs/SendersApi.md#deleteEmailSender) | **DELETE** /senders/email/{sender_id} | Remove email sender
*egoiSdk.SendersApi* | [**deletePhoneSender**](docs/SendersApi.md#deletePhoneSender) | **DELETE** /senders/phone/{sender_id} | Remove phone sender
*egoiSdk.SendersApi* | [**getAllCellphoneSenders**](docs/SendersApi.md#getAllCellphoneSenders) | **GET** /senders/cellphone | Get all cellphone senders
*egoiSdk.SendersApi* | [**getAllEmailSenders**](docs/SendersApi.md#getAllEmailSenders) | **GET** /senders/email | Get all email senders
*egoiSdk.SendersApi* | [**getAllPhoneSenders**](docs/SendersApi.md#getAllPhoneSenders) | **GET** /senders/phone | Get all phone senders
*egoiSdk.SendersApi* | [**putEmailSender**](docs/SendersApi.md#putEmailSender) | **PUT** /senders/email/{sender_id} | Update email sender
*egoiSdk.SmartSmsApi* | [**actionSendSmartSms**](docs/SmartSmsApi.md#actionSendSmartSms) | **POST** /campaigns/smart-sms/{campaign_hash}/actions/send | Send smart sms message
*egoiSdk.SmartSmsApi* | [**createSmartSmsCampaign**](docs/SmartSmsApi.md#createSmartSmsCampaign) | **POST** /campaigns/smart-sms | Create new smart sms campaign
*egoiSdk.SmartSmsApi* | [**patchSmartSmsCampaign**](docs/SmartSmsApi.md#patchSmartSmsCampaign) | **PATCH** /campaigns/smart-sms/{campaign_hash} | Update a specific smart sms campaign
*egoiSdk.SmsApi* | [**actionSendSms**](docs/SmsApi.md#actionSendSms) | **POST** /campaigns/sms/{campaign_hash}/actions/send | Send sms message
*egoiSdk.SmsApi* | [**createSmsCampaign**](docs/SmsApi.md#createSmsCampaign) | **POST** /campaigns/sms | Create new sms campaign
*egoiSdk.SmsApi* | [**patchSmsCampaign**](docs/SmsApi.md#patchSmsCampaign) | **PATCH** /campaigns/sms/{campaign_hash} | Update a specific sms campaign
*egoiSdk.SuppressionListApi* | [**getAllSuppressionList**](docs/SuppressionListApi.md#getAllSuppressionList) | **GET** /suppression-list | Get the suppression list
*egoiSdk.TagsApi* | [**createTag**](docs/TagsApi.md#createTag) | **POST** /tags | Create new tag
*egoiSdk.TagsApi* | [**deleteTag**](docs/TagsApi.md#deleteTag) | **DELETE** /tags/{tag_id} | Remove tag
*egoiSdk.TagsApi* | [**getAllTags**](docs/TagsApi.md#getAllTags) | **GET** /tags | Get all tags
*egoiSdk.TagsApi* | [**updateTag**](docs/TagsApi.md#updateTag) | **PUT** /tags/{tag_id} | Update a specific tag
*egoiSdk.TrackEngageApi* | [**getAllDomains**](docs/TrackEngageApi.md#getAllDomains) | **GET** /trackengage/domains | Get all domains
*egoiSdk.TrackEngageApi* | [**getAllGoals**](docs/TrackEngageApi.md#getAllGoals) | **GET** /trackengage/goals | Get all goals
*egoiSdk.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /users/{user_id} | Remove user
*egoiSdk.UsersApi* | [**getAllUsers**](docs/UsersApi.md#getAllUsers) | **GET** /users | Get all users
*egoiSdk.UtilitiesApi* | [**getAllCountries**](docs/UtilitiesApi.md#getAllCountries) | **GET** /utilities/countries | Get all countries
*egoiSdk.VoiceApi* | [**actionSendVoice**](docs/VoiceApi.md#actionSendVoice) | **POST** /campaigns/voice/{campaign_hash}/actions/send | Send voice message
*egoiSdk.VoiceApi* | [**createVoiceCampaign**](docs/VoiceApi.md#createVoiceCampaign) | **POST** /campaigns/voice | Create new voice campaign
*egoiSdk.VoiceApi* | [**patchVoiceCampaign**](docs/VoiceApi.md#patchVoiceCampaign) | **PATCH** /campaigns/voice/{campaign_hash} | Update a specific voice campaign
*egoiSdk.WebHooksApi* | [**createWebhook**](docs/WebHooksApi.md#createWebhook) | **POST** /webhooks | Create new webhook
*egoiSdk.WebHooksApi* | [**deleteWebhook**](docs/WebHooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhook_id} | Remove webhook
*egoiSdk.WebHooksApi* | [**getAllWebhooks**](docs/WebHooksApi.md#getAllWebhooks) | **GET** /webhooks | Get all webhooks
*egoiSdk.WebpushApi* | [**actionEnableWebPushRss**](docs/WebpushApi.md#actionEnableWebPushRss) | **POST** /campaigns/webpush/rss/{campaign_hash}/actions/enable | Enable a rss webpush campaign
*egoiSdk.WebpushApi* | [**actionSendWebPush**](docs/WebpushApi.md#actionSendWebPush) | **POST** /campaigns/web-push/{campaign_hash}/actions/send | Send webpush message
*egoiSdk.WebpushApi* | [**createWebPushCampaign**](docs/WebpushApi.md#createWebPushCampaign) | **POST** /campaigns/web-push | Create new webpush campaign
*egoiSdk.WebpushApi* | [**createWebPushRssCampaign**](docs/WebpushApi.md#createWebPushRssCampaign) | **POST** /campaigns/webpush/rss | Create new webpush rss campaign
*egoiSdk.WebpushApi* | [**createWebpushSite**](docs/WebpushApi.md#createWebpushSite) | **POST** /webpush/sites | Creates a webpush site
*egoiSdk.WebpushApi* | [**getAllWebPushSites**](docs/WebpushApi.md#getAllWebPushSites) | **GET** /webpush/sites | Get all webpush sites
*egoiSdk.WebpushApi* | [**patchWebPushCampaign**](docs/WebpushApi.md#patchWebPushCampaign) | **PATCH** /campaigns/web-push/{campaign_hash} | Update a specific webpush campaign


## Documentation for Models

 - [egoiSdk.AbstractCampaignSendRequest](docs/AbstractCampaignSendRequest.md)
 - [egoiSdk.AbstractCampaignSendRequestSegments](docs/AbstractCampaignSendRequestSegments.md)
 - [egoiSdk.AbstractCampaignTemplate](docs/AbstractCampaignTemplate.md)
 - [egoiSdk.AbstractCellphoneSender](docs/AbstractCellphoneSender.md)
 - [egoiSdk.AbstractSegment](docs/AbstractSegment.md)
 - [egoiSdk.AbstractSendEmail](docs/AbstractSendEmail.md)
 - [egoiSdk.AbstractSendVoice](docs/AbstractSendVoice.md)
 - [egoiSdk.AcceptedResponse](docs/AcceptedResponse.md)
 - [egoiSdk.ActivateContactsAll](docs/ActivateContactsAll.md)
 - [egoiSdk.ActivateContactsMany](docs/ActivateContactsMany.md)
 - [egoiSdk.ActivateContactsRequest](docs/ActivateContactsRequest.md)
 - [egoiSdk.ActivityCollection](docs/ActivityCollection.md)
 - [egoiSdk.AdvancedReport](docs/AdvancedReport.md)
 - [egoiSdk.AdvancedReportCampaignsObject](docs/AdvancedReportCampaignsObject.md)
 - [egoiSdk.AdvancedReportEmailBouncesColumns](docs/AdvancedReportEmailBouncesColumns.md)
 - [egoiSdk.AdvancedReportEmailBouncesOptions](docs/AdvancedReportEmailBouncesOptions.md)
 - [egoiSdk.AdvancedReportEmailClicksByContactColumns](docs/AdvancedReportEmailClicksByContactColumns.md)
 - [egoiSdk.AdvancedReportEmailClicksByContactOptions](docs/AdvancedReportEmailClicksByContactOptions.md)
 - [egoiSdk.AdvancedReportEmailClicksByUrlColumns](docs/AdvancedReportEmailClicksByUrlColumns.md)
 - [egoiSdk.AdvancedReportEmailClicksByUrlOptions](docs/AdvancedReportEmailClicksByUrlOptions.md)
 - [egoiSdk.AdvancedReportEmailEventsColumns](docs/AdvancedReportEmailEventsColumns.md)
 - [egoiSdk.AdvancedReportEmailEventsOptions](docs/AdvancedReportEmailEventsOptions.md)
 - [egoiSdk.AdvancedReportEmailUnsubscriptionsColumns](docs/AdvancedReportEmailUnsubscriptionsColumns.md)
 - [egoiSdk.AdvancedReportEmailUnsubscriptionsOptions](docs/AdvancedReportEmailUnsubscriptionsOptions.md)
 - [egoiSdk.AdvancedReportRange](docs/AdvancedReportRange.md)
 - [egoiSdk.AdvancedReportSendsColumns](docs/AdvancedReportSendsColumns.md)
 - [egoiSdk.AdvancedReportSendsOptions](docs/AdvancedReportSendsOptions.md)
 - [egoiSdk.AdvancedReportSmsBouncesColumns](docs/AdvancedReportSmsBouncesColumns.md)
 - [egoiSdk.AdvancedReportSmsBouncesOptions](docs/AdvancedReportSmsBouncesOptions.md)
 - [egoiSdk.AdvancedReportSmsEventsColumns](docs/AdvancedReportSmsEventsColumns.md)
 - [egoiSdk.AdvancedReportSmsEventsOptions](docs/AdvancedReportSmsEventsOptions.md)
 - [egoiSdk.AdvancedReportSubscriptionsColumns](docs/AdvancedReportSubscriptionsColumns.md)
 - [egoiSdk.AdvancedReportSubscriptionsOptions](docs/AdvancedReportSubscriptionsOptions.md)
 - [egoiSdk.AdvancedReportUnsubscriptionsColumns](docs/AdvancedReportUnsubscriptionsColumns.md)
 - [egoiSdk.AdvancedReportUnsubscriptionsOptions](docs/AdvancedReportUnsubscriptionsOptions.md)
 - [egoiSdk.AdvancedReportsCollection](docs/AdvancedReportsCollection.md)
 - [egoiSdk.AlphanumericCellphoneSender](docs/AlphanumericCellphoneSender.md)
 - [egoiSdk.AppStructure](docs/AppStructure.md)
 - [egoiSdk.AppStructureList](docs/AppStructureList.md)
 - [egoiSdk.AttachTagRequest](docs/AttachTagRequest.md)
 - [egoiSdk.AttachTagResponse](docs/AttachTagResponse.md)
 - [egoiSdk.AutomaticSegment](docs/AutomaticSegment.md)
 - [egoiSdk.Automation](docs/Automation.md)
 - [egoiSdk.AutomationCollection](docs/AutomationCollection.md)
 - [egoiSdk.BadRequest](docs/BadRequest.md)
 - [egoiSdk.BalanceInfo](docs/BalanceInfo.md)
 - [egoiSdk.BalanceInfoBalanceInfo](docs/BalanceInfoBalanceInfo.md)
 - [egoiSdk.BaseConflict](docs/BaseConflict.md)
 - [egoiSdk.BasicProduct](docs/BasicProduct.md)
 - [egoiSdk.BasicSender](docs/BasicSender.md)
 - [egoiSdk.BillingInfo](docs/BillingInfo.md)
 - [egoiSdk.BulkActionResponse](docs/BulkActionResponse.md)
 - [egoiSdk.CName](docs/CName.md)
 - [egoiSdk.CNamesCollection](docs/CNamesCollection.md)
 - [egoiSdk.Campaign](docs/Campaign.md)
 - [egoiSdk.CampaignEmailBaseContent](docs/CampaignEmailBaseContent.md)
 - [egoiSdk.CampaignEmailContent](docs/CampaignEmailContent.md)
 - [egoiSdk.CampaignEmailContentFile](docs/CampaignEmailContentFile.md)
 - [egoiSdk.CampaignEmailContentHtml](docs/CampaignEmailContentHtml.md)
 - [egoiSdk.CampaignEmailContentHtmlPatch](docs/CampaignEmailContentHtmlPatch.md)
 - [egoiSdk.CampaignEmailContentTemplate](docs/CampaignEmailContentTemplate.md)
 - [egoiSdk.CampaignEmailContentWebPage](docs/CampaignEmailContentWebPage.md)
 - [egoiSdk.CampaignEmailRssContent](docs/CampaignEmailRssContent.md)
 - [egoiSdk.CampaignEmailRssContentHtml](docs/CampaignEmailRssContentHtml.md)
 - [egoiSdk.CampaignEmailScheduleRequest](docs/CampaignEmailScheduleRequest.md)
 - [egoiSdk.CampaignEmailSendNowRequest](docs/CampaignEmailSendNowRequest.md)
 - [egoiSdk.CampaignEmailSendRequest](docs/CampaignEmailSendRequest.md)
 - [egoiSdk.CampaignGroup](docs/CampaignGroup.md)
 - [egoiSdk.CampaignGroupCollection](docs/CampaignGroupCollection.md)
 - [egoiSdk.CampaignHash](docs/CampaignHash.md)
 - [egoiSdk.CampaignPushContent](docs/CampaignPushContent.md)
 - [egoiSdk.CampaignPushContentTemplate](docs/CampaignPushContentTemplate.md)
 - [egoiSdk.CampaignPushContentText](docs/CampaignPushContentText.md)
 - [egoiSdk.CampaignPushScheduleRequest](docs/CampaignPushScheduleRequest.md)
 - [egoiSdk.CampaignPushSendRequest](docs/CampaignPushSendRequest.md)
 - [egoiSdk.CampaignScheduleDate](docs/CampaignScheduleDate.md)
 - [egoiSdk.CampaignSentLast30Days](docs/CampaignSentLast30Days.md)
 - [egoiSdk.CampaignSentLast30DaysErrors](docs/CampaignSentLast30DaysErrors.md)
 - [egoiSdk.CampaignSmartSmsHtml](docs/CampaignSmartSmsHtml.md)
 - [egoiSdk.CampaignSmartSmsImport](docs/CampaignSmartSmsImport.md)
 - [egoiSdk.CampaignSmartSmsOptions](docs/CampaignSmartSmsOptions.md)
 - [egoiSdk.CampaignSmartSmsPageContent](docs/CampaignSmartSmsPageContent.md)
 - [egoiSdk.CampaignSmartSmsRedirect](docs/CampaignSmartSmsRedirect.md)
 - [egoiSdk.CampaignSmartSmsScheduleRequest](docs/CampaignSmartSmsScheduleRequest.md)
 - [egoiSdk.CampaignSmartSmsSendRequest](docs/CampaignSmartSmsSendRequest.md)
 - [egoiSdk.CampaignSmsContent](docs/CampaignSmsContent.md)
 - [egoiSdk.CampaignSmsContentTemplate](docs/CampaignSmsContentTemplate.md)
 - [egoiSdk.CampaignSmsContentText](docs/CampaignSmsContentText.md)
 - [egoiSdk.CampaignSmsOptions](docs/CampaignSmsOptions.md)
 - [egoiSdk.CampaignSmsScheduleRequest](docs/CampaignSmsScheduleRequest.md)
 - [egoiSdk.CampaignSmsSendRequest](docs/CampaignSmsSendRequest.md)
 - [egoiSdk.CampaignVoiceScheduleRequest](docs/CampaignVoiceScheduleRequest.md)
 - [egoiSdk.CampaignVoiceSendRequest](docs/CampaignVoiceSendRequest.md)
 - [egoiSdk.CampaignWebPushScheduleRequest](docs/CampaignWebPushScheduleRequest.md)
 - [egoiSdk.CampaignWebPushSendRequest](docs/CampaignWebPushSendRequest.md)
 - [egoiSdk.CampaignsCollection](docs/CampaignsCollection.md)
 - [egoiSdk.Cart](docs/Cart.md)
 - [egoiSdk.CartPatchRequest](docs/CartPatchRequest.md)
 - [egoiSdk.Catalog](docs/Catalog.md)
 - [egoiSdk.CatalogCollection](docs/CatalogCollection.md)
 - [egoiSdk.CatalogPostRequest](docs/CatalogPostRequest.md)
 - [egoiSdk.CellphoneSender](docs/CellphoneSender.md)
 - [egoiSdk.CellphoneSenderCollection](docs/CellphoneSenderCollection.md)
 - [egoiSdk.CnameExists](docs/CnameExists.md)
 - [egoiSdk.CnameExistsErrors](docs/CnameExistsErrors.md)
 - [egoiSdk.ComplexContact](docs/ComplexContact.md)
 - [egoiSdk.ComplexField](docs/ComplexField.md)
 - [egoiSdk.ComplexList](docs/ComplexList.md)
 - [egoiSdk.ComplexUser](docs/ComplexUser.md)
 - [egoiSdk.Conflict](docs/Conflict.md)
 - [egoiSdk.Contact](docs/Contact.md)
 - [egoiSdk.ContactActivity](docs/ContactActivity.md)
 - [egoiSdk.ContactActivityAbstractActionsWithData](docs/ContactActivityAbstractActionsWithData.md)
 - [egoiSdk.ContactActivityClick](docs/ContactActivityClick.md)
 - [egoiSdk.ContactBaseExtra](docs/ContactBaseExtra.md)
 - [egoiSdk.ContactBaseExtraBulk](docs/ContactBaseExtraBulk.md)
 - [egoiSdk.ContactBaseExtraFull](docs/ContactBaseExtraFull.md)
 - [egoiSdk.ContactBaseFieldsBulkSchema](docs/ContactBaseFieldsBulkSchema.md)
 - [egoiSdk.ContactBaseFieldsSchema](docs/ContactBaseFieldsSchema.md)
 - [egoiSdk.ContactBaseFieldsWithIdSchema](docs/ContactBaseFieldsWithIdSchema.md)
 - [egoiSdk.ContactBaseStatusExtra](docs/ContactBaseStatusExtra.md)
 - [egoiSdk.ContactBaseStatusExtraBulk](docs/ContactBaseStatusExtraBulk.md)
 - [egoiSdk.ContactBaseWithStatusFieldsBulkSchema](docs/ContactBaseWithStatusFieldsBulkSchema.md)
 - [egoiSdk.ContactBaseWithStatusFieldsSchema](docs/ContactBaseWithStatusFieldsSchema.md)
 - [egoiSdk.ContactBaseWithStatusFieldsSchemaBase](docs/ContactBaseWithStatusFieldsSchemaBase.md)
 - [egoiSdk.ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid](docs/ContactBaseWithStatusFieldsSchemaBasePushTokenAndroid.md)
 - [egoiSdk.ContactBaseWithStatusFieldsSchemaBasePushTokenIos](docs/ContactBaseWithStatusFieldsSchemaBasePushTokenIos.md)
 - [egoiSdk.ContactBulk](docs/ContactBulk.md)
 - [egoiSdk.ContactCollection](docs/ContactCollection.md)
 - [egoiSdk.ContactExportRequest](docs/ContactExportRequest.md)
 - [egoiSdk.ContactExtraFieldCellphone](docs/ContactExtraFieldCellphone.md)
 - [egoiSdk.ContactExtraFieldCellphoneBulk](docs/ContactExtraFieldCellphoneBulk.md)
 - [egoiSdk.ContactExtraFieldDate](docs/ContactExtraFieldDate.md)
 - [egoiSdk.ContactExtraFieldEmail](docs/ContactExtraFieldEmail.md)
 - [egoiSdk.ContactExtraFieldEmailBulk](docs/ContactExtraFieldEmailBulk.md)
 - [egoiSdk.ContactExtraFieldNumber](docs/ContactExtraFieldNumber.md)
 - [egoiSdk.ContactExtraFieldOptions](docs/ContactExtraFieldOptions.md)
 - [egoiSdk.ContactExtraFieldPhone](docs/ContactExtraFieldPhone.md)
 - [egoiSdk.ContactExtraFieldPhoneBulk](docs/ContactExtraFieldPhoneBulk.md)
 - [egoiSdk.ContactExtraFieldText](docs/ContactExtraFieldText.md)
 - [egoiSdk.ContactExtraFields](docs/ContactExtraFields.md)
 - [egoiSdk.ContactExtraFieldsBulk](docs/ContactExtraFieldsBulk.md)
 - [egoiSdk.ContactExtraFieldsBulkSchema](docs/ContactExtraFieldsBulkSchema.md)
 - [egoiSdk.ContactExtraFieldsSchema](docs/ContactExtraFieldsSchema.md)
 - [egoiSdk.ContactForgetRequest](docs/ContactForgetRequest.md)
 - [egoiSdk.ContactInsideBase](docs/ContactInsideBase.md)
 - [egoiSdk.ContactInsideBaseBulk](docs/ContactInsideBaseBulk.md)
 - [egoiSdk.ContactInsideBaseWithId](docs/ContactInsideBaseWithId.md)
 - [egoiSdk.ContactOtherActivity](docs/ContactOtherActivity.md)
 - [egoiSdk.ContactSearchResponse](docs/ContactSearchResponse.md)
 - [egoiSdk.ContactStatusFieldsBulkSchema](docs/ContactStatusFieldsBulkSchema.md)
 - [egoiSdk.ContactStatusFieldsSchema](docs/ContactStatusFieldsSchema.md)
 - [egoiSdk.ContactTags](docs/ContactTags.md)
 - [egoiSdk.ContactTagsBulk](docs/ContactTagsBulk.md)
 - [egoiSdk.ContentVoice](docs/ContentVoice.md)
 - [egoiSdk.ContentVoiceAudio](docs/ContentVoiceAudio.md)
 - [egoiSdk.ContentVoicePatch](docs/ContentVoicePatch.md)
 - [egoiSdk.ContentVoiceTemplate](docs/ContentVoiceTemplate.md)
 - [egoiSdk.Country](docs/Country.md)
 - [egoiSdk.CountryCollection](docs/CountryCollection.md)
 - [egoiSdk.CreateCartResponse](docs/CreateCartResponse.md)
 - [egoiSdk.CreateContactResponse](docs/CreateContactResponse.md)
 - [egoiSdk.CreateOrder](docs/CreateOrder.md)
 - [egoiSdk.CreateOrderResponse](docs/CreateOrderResponse.md)
 - [egoiSdk.DeactivateContactsAll](docs/DeactivateContactsAll.md)
 - [egoiSdk.DeactivateContactsMany](docs/DeactivateContactsMany.md)
 - [egoiSdk.DeactivateContactsRequest](docs/DeactivateContactsRequest.md)
 - [egoiSdk.DeleteCampaignsConflict](docs/DeleteCampaignsConflict.md)
 - [egoiSdk.DeleteFieldsConflict](docs/DeleteFieldsConflict.md)
 - [egoiSdk.DeleteListsConflict](docs/DeleteListsConflict.md)
 - [egoiSdk.DeleteListsConflictsErrors](docs/DeleteListsConflictsErrors.md)
 - [egoiSdk.DeleteSegmentsConflict](docs/DeleteSegmentsConflict.md)
 - [egoiSdk.DeleteSegmentsConflictsErrors](docs/DeleteSegmentsConflictsErrors.md)
 - [egoiSdk.Domain](docs/Domain.md)
 - [egoiSdk.DomainAlreadyDefined](docs/DomainAlreadyDefined.md)
 - [egoiSdk.DomainAlreadyDefinedErrors](docs/DomainAlreadyDefinedErrors.md)
 - [egoiSdk.DomainCollection](docs/DomainCollection.md)
 - [egoiSdk.DomainListRequired](docs/DomainListRequired.md)
 - [egoiSdk.DomainListRequiredErrors](docs/DomainListRequiredErrors.md)
 - [egoiSdk.EmailBouncesCampaignFields](docs/EmailBouncesCampaignFields.md)
 - [egoiSdk.EmailBouncesListStatsFields](docs/EmailBouncesListStatsFields.md)
 - [egoiSdk.EmailCampaignCreate](docs/EmailCampaignCreate.md)
 - [egoiSdk.EmailCampaignPatch](docs/EmailCampaignPatch.md)
 - [egoiSdk.EmailCampaignTemplate](docs/EmailCampaignTemplate.md)
 - [egoiSdk.EmailClicksByContactCampaignFields](docs/EmailClicksByContactCampaignFields.md)
 - [egoiSdk.EmailClicksByContactListStatsFields](docs/EmailClicksByContactListStatsFields.md)
 - [egoiSdk.EmailClicksByUrlCampaignFields](docs/EmailClicksByUrlCampaignFields.md)
 - [egoiSdk.EmailClicksByUrlListStatsFields](docs/EmailClicksByUrlListStatsFields.md)
 - [egoiSdk.EmailEventsCampaignFields](docs/EmailEventsCampaignFields.md)
 - [egoiSdk.EmailEventsListStatsFields](docs/EmailEventsListStatsFields.md)
 - [egoiSdk.EmailRssCampaignCreate](docs/EmailRssCampaignCreate.md)
 - [egoiSdk.EmailSendSegment](docs/EmailSendSegment.md)
 - [egoiSdk.EmailSender](docs/EmailSender.md)
 - [egoiSdk.EmailSenderCollection](docs/EmailSenderCollection.md)
 - [egoiSdk.EmailSenderPutRequest](docs/EmailSenderPutRequest.md)
 - [egoiSdk.EmailUnsubscriptionsCampaignFields](docs/EmailUnsubscriptionsCampaignFields.md)
 - [egoiSdk.EmailUnsubscriptionsListStatsFields](docs/EmailUnsubscriptionsListStatsFields.md)
 - [egoiSdk.EnableTeConflict](docs/EnableTeConflict.md)
 - [egoiSdk.EnableTeConflictsErrors](docs/EnableTeConflictsErrors.md)
 - [egoiSdk.ExportContactsWebhookData](docs/ExportContactsWebhookData.md)
 - [egoiSdk.Field](docs/Field.md)
 - [egoiSdk.FieldCollection](docs/FieldCollection.md)
 - [egoiSdk.FieldInUse](docs/FieldInUse.md)
 - [egoiSdk.FieldInUseErrors](docs/FieldInUseErrors.md)
 - [egoiSdk.FieldInUseErrorsFieldInUseData](docs/FieldInUseErrorsFieldInUseData.md)
 - [egoiSdk.FieldOption](docs/FieldOption.md)
 - [egoiSdk.FieldOptionsCollection](docs/FieldOptionsCollection.md)
 - [egoiSdk.Forbidden](docs/Forbidden.md)
 - [egoiSdk.Form](docs/Form.md)
 - [egoiSdk.GeneralInfo](docs/GeneralInfo.md)
 - [egoiSdk.GenerateEmailBouncesReport](docs/GenerateEmailBouncesReport.md)
 - [egoiSdk.GenerateEmailClicksByContactReport](docs/GenerateEmailClicksByContactReport.md)
 - [egoiSdk.GenerateEmailClicksByUrlReport](docs/GenerateEmailClicksByUrlReport.md)
 - [egoiSdk.GenerateEmailEventsReport](docs/GenerateEmailEventsReport.md)
 - [egoiSdk.GenerateEmailUnsubscriptionsReport](docs/GenerateEmailUnsubscriptionsReport.md)
 - [egoiSdk.GenerateFormAnswersReport](docs/GenerateFormAnswersReport.md)
 - [egoiSdk.GenerateSendsReport](docs/GenerateSendsReport.md)
 - [egoiSdk.GenerateSmsBouncesReport](docs/GenerateSmsBouncesReport.md)
 - [egoiSdk.GenerateSmsEventsReport](docs/GenerateSmsEventsReport.md)
 - [egoiSdk.GenerateSubscriptionsReport](docs/GenerateSubscriptionsReport.md)
 - [egoiSdk.GenerateUnsubscriptionsReport](docs/GenerateUnsubscriptionsReport.md)
 - [egoiSdk.Goal](docs/Goal.md)
 - [egoiSdk.GoalAutommaticInfo](docs/GoalAutommaticInfo.md)
 - [egoiSdk.GoalCollection](docs/GoalCollection.md)
 - [egoiSdk.GoalInfo](docs/GoalInfo.md)
 - [egoiSdk.GoalManualInfo](docs/GoalManualInfo.md)
 - [egoiSdk.GoalTimeInfo](docs/GoalTimeInfo.md)
 - [egoiSdk.HasAutomations](docs/HasAutomations.md)
 - [egoiSdk.HasAutomationsErrors](docs/HasAutomationsErrors.md)
 - [egoiSdk.HasCampaignsLastThirtyDays](docs/HasCampaignsLastThirtyDays.md)
 - [egoiSdk.HasCampaignsLastThirtyDaysErrors](docs/HasCampaignsLastThirtyDaysErrors.md)
 - [egoiSdk.HasPushApp](docs/HasPushApp.md)
 - [egoiSdk.HasPushAppErrors](docs/HasPushAppErrors.md)
 - [egoiSdk.HasQueuedCampaigns](docs/HasQueuedCampaigns.md)
 - [egoiSdk.HasQueuedCampaignsErrors](docs/HasQueuedCampaignsErrors.md)
 - [egoiSdk.HasQueuedOperations](docs/HasQueuedOperations.md)
 - [egoiSdk.HasQueuedOperationsErrors](docs/HasQueuedOperationsErrors.md)
 - [egoiSdk.HasWebPushSite](docs/HasWebPushSite.md)
 - [egoiSdk.HasWebPushSiteErrors](docs/HasWebPushSiteErrors.md)
 - [egoiSdk.HashcodeCampaign](docs/HashcodeCampaign.md)
 - [egoiSdk.HeaderFooter](docs/HeaderFooter.md)
 - [egoiSdk.HeaderFooterFooterLinks](docs/HeaderFooterFooterLinks.md)
 - [egoiSdk.HeaderFooterHeaderLinks](docs/HeaderFooterHeaderLinks.md)
 - [egoiSdk.HeaderFooterTemplate](docs/HeaderFooterTemplate.md)
 - [egoiSdk.ImportBulkRequest](docs/ImportBulkRequest.md)
 - [egoiSdk.ImportOrdersBulkBulkRequest](docs/ImportOrdersBulkBulkRequest.md)
 - [egoiSdk.ImportOrdersBulkBulkRequestItems](docs/ImportOrdersBulkBulkRequestItems.md)
 - [egoiSdk.InlineObject](docs/InlineObject.md)
 - [egoiSdk.InlineResponse200](docs/InlineResponse200.md)
 - [egoiSdk.InternalServerError](docs/InternalServerError.md)
 - [egoiSdk.InvalidSegmentType](docs/InvalidSegmentType.md)
 - [egoiSdk.InvalidSegmentTypeErrors](docs/InvalidSegmentTypeErrors.md)
 - [egoiSdk.Language](docs/Language.md)
 - [egoiSdk.LimitContactsActionSend](docs/LimitContactsActionSend.md)
 - [egoiSdk.LimitContactsPercentActionSend](docs/LimitContactsPercentActionSend.md)
 - [egoiSdk.LimitContactsValueActionSend](docs/LimitContactsValueActionSend.md)
 - [egoiSdk.LimitHourActionSend](docs/LimitHourActionSend.md)
 - [egoiSdk.LimitHourActionSendLimitHour](docs/LimitHourActionSendLimitHour.md)
 - [egoiSdk.LimitSpeedActionSend](docs/LimitSpeedActionSend.md)
 - [egoiSdk.List](docs/List.md)
 - [egoiSdk.ListCollection](docs/ListCollection.md)
 - [egoiSdk.ListCollection1](docs/ListCollection1.md)
 - [egoiSdk.ListLimitReached](docs/ListLimitReached.md)
 - [egoiSdk.ListLimitReachedErrors](docs/ListLimitReachedErrors.md)
 - [egoiSdk.MessageWebPush](docs/MessageWebPush.md)
 - [egoiSdk.MessageWebPushPost](docs/MessageWebPushPost.md)
 - [egoiSdk.MessageWebPushRss](docs/MessageWebPushRss.md)
 - [egoiSdk.ModuleInfo](docs/ModuleInfo.md)
 - [egoiSdk.ModuleInfoModuleInfo](docs/ModuleInfoModuleInfo.md)
 - [egoiSdk.ModuleInfoModuleInfoTe](docs/ModuleInfoModuleInfoTe.md)
 - [egoiSdk.MyAccount](docs/MyAccount.md)
 - [egoiSdk.NameAlreadyExists](docs/NameAlreadyExists.md)
 - [egoiSdk.NameAlreadyExistsErrors](docs/NameAlreadyExistsErrors.md)
 - [egoiSdk.NotFound](docs/NotFound.md)
 - [egoiSdk.NotifyUserIdArrayActionSend](docs/NotifyUserIdArrayActionSend.md)
 - [egoiSdk.Now](docs/Now.md)
 - [egoiSdk.NumericCellphoneSender](docs/NumericCellphoneSender.md)
 - [egoiSdk.OLimitContactsActionSend](docs/OLimitContactsActionSend.md)
 - [egoiSdk.OSegmentsActionSend](docs/OSegmentsActionSend.md)
 - [egoiSdk.OSegmentsWithoutContactActionSend](docs/OSegmentsWithoutContactActionSend.md)
 - [egoiSdk.Operation](docs/Operation.md)
 - [egoiSdk.OperationActionRequest](docs/OperationActionRequest.md)
 - [egoiSdk.OperationActionResponse](docs/OperationActionResponse.md)
 - [egoiSdk.OperationActionResponseError](docs/OperationActionResponseError.md)
 - [egoiSdk.OperationOperationData](docs/OperationOperationData.md)
 - [egoiSdk.OperationsCollection](docs/OperationsCollection.md)
 - [egoiSdk.Order](docs/Order.md)
 - [egoiSdk.OrderPatchRequest](docs/OrderPatchRequest.md)
 - [egoiSdk.Overall](docs/Overall.md)
 - [egoiSdk.OverallOverall](docs/OverallOverall.md)
 - [egoiSdk.PatchRequestBaseField](docs/PatchRequestBaseField.md)
 - [egoiSdk.PatchRequestField](docs/PatchRequestField.md)
 - [egoiSdk.PatchRequestList](docs/PatchRequestList.md)
 - [egoiSdk.PhoneCampaignTemplate](docs/PhoneCampaignTemplate.md)
 - [egoiSdk.PhoneReport](docs/PhoneReport.md)
 - [egoiSdk.PhoneSender](docs/PhoneSender.md)
 - [egoiSdk.PhoneSenderCollection](docs/PhoneSenderCollection.md)
 - [egoiSdk.Ping](docs/Ping.md)
 - [egoiSdk.PlanInfo](docs/PlanInfo.md)
 - [egoiSdk.PlanInfoPlanInfo](docs/PlanInfoPlanInfo.md)
 - [egoiSdk.PostCNameConflict](docs/PostCNameConflict.md)
 - [egoiSdk.PostContactsConflict](docs/PostContactsConflict.md)
 - [egoiSdk.PostListsConflict](docs/PostListsConflict.md)
 - [egoiSdk.PostProductsConflict](docs/PostProductsConflict.md)
 - [egoiSdk.PostRequestList](docs/PostRequestList.md)
 - [egoiSdk.PostWebpushSiteConflict](docs/PostWebpushSiteConflict.md)
 - [egoiSdk.Product](docs/Product.md)
 - [egoiSdk.ProductAlreadyExists](docs/ProductAlreadyExists.md)
 - [egoiSdk.ProductAlreadyExistsErrors](docs/ProductAlreadyExistsErrors.md)
 - [egoiSdk.ProductBulkRequest](docs/ProductBulkRequest.md)
 - [egoiSdk.ProductCollection](docs/ProductCollection.md)
 - [egoiSdk.ProductCustomAttributes](docs/ProductCustomAttributes.md)
 - [egoiSdk.ProductPatchRequest](docs/ProductPatchRequest.md)
 - [egoiSdk.ProductPatchRequestRelatedProducts](docs/ProductPatchRequestRelatedProducts.md)
 - [egoiSdk.ProductPostRequest](docs/ProductPostRequest.md)
 - [egoiSdk.PushCampaignPatchRequest](docs/PushCampaignPatchRequest.md)
 - [egoiSdk.PushCampaignPatchRequestContent](docs/PushCampaignPatchRequestContent.md)
 - [egoiSdk.PushCampaignPostRequest](docs/PushCampaignPostRequest.md)
 - [egoiSdk.PushCampaignPostRequestActions](docs/PushCampaignPostRequestActions.md)
 - [egoiSdk.PushCampaignPostRequestGeoOptions](docs/PushCampaignPostRequestGeoOptions.md)
 - [egoiSdk.PushCampaignPostRequestNotificationOptions](docs/PushCampaignPostRequestNotificationOptions.md)
 - [egoiSdk.PushEvent](docs/PushEvent.md)
 - [egoiSdk.PushNotificationSoundSchema](docs/PushNotificationSoundSchema.md)
 - [egoiSdk.PushNotificationSoundSchemaDefault](docs/PushNotificationSoundSchemaDefault.md)
 - [egoiSdk.PushNotificationSoundSchemaNone](docs/PushNotificationSoundSchemaNone.md)
 - [egoiSdk.PushNotificationSoundSchemaUrl](docs/PushNotificationSoundSchemaUrl.md)
 - [egoiSdk.PushReport](docs/PushReport.md)
 - [egoiSdk.PushResponse](docs/PushResponse.md)
 - [egoiSdk.PushToken](docs/PushToken.md)
 - [egoiSdk.PushTokenTwoStepsData](docs/PushTokenTwoStepsData.md)
 - [egoiSdk.PushVersions](docs/PushVersions.md)
 - [egoiSdk.PushVersionsVersions](docs/PushVersionsVersions.md)
 - [egoiSdk.RemoveRequest](docs/RemoveRequest.md)
 - [egoiSdk.RemoveResponse](docs/RemoveResponse.md)
 - [egoiSdk.RemoveResponseErrors](docs/RemoveResponseErrors.md)
 - [egoiSdk.ReportCampaignsAll](docs/ReportCampaignsAll.md)
 - [egoiSdk.ReportCampaignsGroup](docs/ReportCampaignsGroup.md)
 - [egoiSdk.ReportCampaignsLast](docs/ReportCampaignsLast.md)
 - [egoiSdk.ReportCampaignsSpecific](docs/ReportCampaignsSpecific.md)
 - [egoiSdk.RequestItemsUnsubscribe](docs/RequestItemsUnsubscribe.md)
 - [egoiSdk.RequestTimeout](docs/RequestTimeout.md)
 - [egoiSdk.SavedSegment](docs/SavedSegment.md)
 - [egoiSdk.Segment](docs/Segment.md)
 - [egoiSdk.SegmentCollection](docs/SegmentCollection.md)
 - [egoiSdk.SegmentsActionSend](docs/SegmentsActionSend.md)
 - [egoiSdk.SegmentsWithoutContactActionSend](docs/SegmentsWithoutContactActionSend.md)
 - [egoiSdk.SendContact](docs/SendContact.md)
 - [egoiSdk.SendContactCellphone](docs/SendContactCellphone.md)
 - [egoiSdk.SendEmailContact](docs/SendEmailContact.md)
 - [egoiSdk.SendNone](docs/SendNone.md)
 - [egoiSdk.SendPush](docs/SendPush.md)
 - [egoiSdk.SendSegment](docs/SendSegment.md)
 - [egoiSdk.SendSmartSms](docs/SendSmartSms.md)
 - [egoiSdk.SendSms](docs/SendSms.md)
 - [egoiSdk.SendWebPush](docs/SendWebPush.md)
 - [egoiSdk.SendsCampaignFields](docs/SendsCampaignFields.md)
 - [egoiSdk.ServiceUnavailable](docs/ServiceUnavailable.md)
 - [egoiSdk.SingleCartObject](docs/SingleCartObject.md)
 - [egoiSdk.SingleOrderObject](docs/SingleOrderObject.md)
 - [egoiSdk.SmartSmsCampaign](docs/SmartSmsCampaign.md)
 - [egoiSdk.SmartSmsCampaignCampaignContent](docs/SmartSmsCampaignCampaignContent.md)
 - [egoiSdk.SmartSmsCampaignPatchRequest](docs/SmartSmsCampaignPatchRequest.md)
 - [egoiSdk.SmartSmsCampaignPatchRequestCampaignContent](docs/SmartSmsCampaignPatchRequestCampaignContent.md)
 - [egoiSdk.SmartSmsCampaignPatchRequestPageContent](docs/SmartSmsCampaignPatchRequestPageContent.md)
 - [egoiSdk.SmartSmsSegmentsActionSend](docs/SmartSmsSegmentsActionSend.md)
 - [egoiSdk.SmsBouncesCampaignFields](docs/SmsBouncesCampaignFields.md)
 - [egoiSdk.SmsBouncesListStatsFields](docs/SmsBouncesListStatsFields.md)
 - [egoiSdk.SmsCampaign](docs/SmsCampaign.md)
 - [egoiSdk.SmsCampaignPatchRequest](docs/SmsCampaignPatchRequest.md)
 - [egoiSdk.SmsCampaignPatchRequestContent](docs/SmsCampaignPatchRequestContent.md)
 - [egoiSdk.SmsCampaignTemplate](docs/SmsCampaignTemplate.md)
 - [egoiSdk.SmsEventsCampaignFields](docs/SmsEventsCampaignFields.md)
 - [egoiSdk.SmsEventsListStatsFields](docs/SmsEventsListStatsFields.md)
 - [egoiSdk.SmsSegmentsActionSend](docs/SmsSegmentsActionSend.md)
 - [egoiSdk.StartAutomationRequest](docs/StartAutomationRequest.md)
 - [egoiSdk.StartAutomationResponse](docs/StartAutomationResponse.md)
 - [egoiSdk.SubscriptionsListStatsFields](docs/SubscriptionsListStatsFields.md)
 - [egoiSdk.SuppressionList](docs/SuppressionList.md)
 - [egoiSdk.SuppressionListItems](docs/SuppressionListItems.md)
 - [egoiSdk.Tag](docs/Tag.md)
 - [egoiSdk.TagCollection](docs/TagCollection.md)
 - [egoiSdk.TagCollection1](docs/TagCollection1.md)
 - [egoiSdk.TagRequest](docs/TagRequest.md)
 - [egoiSdk.TagSegment](docs/TagSegment.md)
 - [egoiSdk.TeResponse](docs/TeResponse.md)
 - [egoiSdk.TooManyRequests](docs/TooManyRequests.md)
 - [egoiSdk.Unauthorized](docs/Unauthorized.md)
 - [egoiSdk.UniqueFieldInUse](docs/UniqueFieldInUse.md)
 - [egoiSdk.UniqueFieldInUseErrors](docs/UniqueFieldInUseErrors.md)
 - [egoiSdk.UnprocessableEntity](docs/UnprocessableEntity.md)
 - [egoiSdk.UnsubscriptionObject](docs/UnsubscriptionObject.md)
 - [egoiSdk.UnsubscriptionsListStatsFields](docs/UnsubscriptionsListStatsFields.md)
 - [egoiSdk.UsedInAutomations](docs/UsedInAutomations.md)
 - [egoiSdk.UsedInAutomationsErrors](docs/UsedInAutomationsErrors.md)
 - [egoiSdk.UsedInRecurringMessages](docs/UsedInRecurringMessages.md)
 - [egoiSdk.UsedInRecurringMessagesErrors](docs/UsedInRecurringMessagesErrors.md)
 - [egoiSdk.User](docs/User.md)
 - [egoiSdk.UserCollection](docs/UserCollection.md)
 - [egoiSdk.UserPostRequest](docs/UserPostRequest.md)
 - [egoiSdk.VoiceCampaign](docs/VoiceCampaign.md)
 - [egoiSdk.VoiceCampaignTemplate](docs/VoiceCampaignTemplate.md)
 - [egoiSdk.VoicePatchCampaign](docs/VoicePatchCampaign.md)
 - [egoiSdk.WebPushCampaign](docs/WebPushCampaign.md)
 - [egoiSdk.WebPushPatchCampaign](docs/WebPushPatchCampaign.md)
 - [egoiSdk.WebPushReport](docs/WebPushReport.md)
 - [egoiSdk.WebPushReportBrowsers](docs/WebPushReportBrowsers.md)
 - [egoiSdk.WebPushReportOperatingSystems](docs/WebPushReportOperatingSystems.md)
 - [egoiSdk.WebPushRssCampaign](docs/WebPushRssCampaign.md)
 - [egoiSdk.WebPushSite](docs/WebPushSite.md)
 - [egoiSdk.WebPushStats](docs/WebPushStats.md)
 - [egoiSdk.Webhook](docs/Webhook.md)
 - [egoiSdk.WebhookActionSchema](docs/WebhookActionSchema.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

