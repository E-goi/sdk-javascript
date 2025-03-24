![E-goi](https://www.e-goi.com/wp-content/themes/egoi2019/imgs/svg/logo-egoi.svg)

Almost anything you can do in E-goi, you can do with our API.

The API describes each available method. Learn about parameters, errors, and how to format your requests. That means you can easily call on E-goi actions for your integration.
**API** Full documentation at https://developers.e-goi.com/api/v3/

If you find a bug or something worth fixing, create an issue.

### Changelog
#### 1.1.6RC1
## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install egoisdk --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your egoisdk from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/e-goi/sdk-javascript
then install it via:

```shell
    npm install e-goi/sdk-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

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
var egoisdk = require('egoisdk');

var defaultClient = egoisdk.ApiClient.instance;
// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new egoisdk.AdvancedReportsApi()
var generateByModelReport = new egoisdk.GenerateByModelReport(); // {GenerateByModelReport} Parameters for the report by model Id
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.generateByModelReport(generateByModelReport, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.egoiapp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*egoisdk.AdvancedReportsApi* | [**generateByModelReport**](docs/AdvancedReportsApi.md#generateByModelReport) | **POST** /reports/advanced/model | Generate report by model
*egoisdk.AdvancedReportsApi* | [**generateContactActivityReport**](docs/AdvancedReportsApi.md#generateContactActivityReport) | **POST** /reports/advanced/contact-activity | Generate contact activity report
*egoisdk.AdvancedReportsApi* | [**generateEmailBouncesReport**](docs/AdvancedReportsApi.md#generateEmailBouncesReport) | **POST** /reports/advanced/email-bounces | Generate email bounces report
*egoisdk.AdvancedReportsApi* | [**generateEmailClicksByContactReport**](docs/AdvancedReportsApi.md#generateEmailClicksByContactReport) | **POST** /reports/advanced/email-clicks-by-contact | Generate email clicks by contact report
*egoisdk.AdvancedReportsApi* | [**generateEmailClicksByUrlReport**](docs/AdvancedReportsApi.md#generateEmailClicksByUrlReport) | **POST** /reports/advanced/email-clicks-by-url | Generate email clicks by URL report
*egoisdk.AdvancedReportsApi* | [**generateEmailEventsReport**](docs/AdvancedReportsApi.md#generateEmailEventsReport) | **POST** /reports/advanced/email-events | Generate email events report
*egoisdk.AdvancedReportsApi* | [**generateEmailUnsubscriptionsReport**](docs/AdvancedReportsApi.md#generateEmailUnsubscriptionsReport) | **POST** /reports/advanced/email-unsubscriptions | Generate email unsubscriptions report
*egoisdk.AdvancedReportsApi* | [**generateFormAnswersReport**](docs/AdvancedReportsApi.md#generateFormAnswersReport) | **POST** /reports/advanced/form-answers | Generate form answers report
*egoisdk.AdvancedReportsApi* | [**generateSendsReport**](docs/AdvancedReportsApi.md#generateSendsReport) | **POST** /reports/advanced/sends | Generate sends report
*egoisdk.AdvancedReportsApi* | [**generateSmsBouncesReport**](docs/AdvancedReportsApi.md#generateSmsBouncesReport) | **POST** /reports/advanced/sms-bounces | Generate SMS bounces report
*egoisdk.AdvancedReportsApi* | [**generateSmsEventsReport**](docs/AdvancedReportsApi.md#generateSmsEventsReport) | **POST** /reports/advanced/sms-events | Generate SMS events report
*egoisdk.AdvancedReportsApi* | [**generateSubscriptionsReport**](docs/AdvancedReportsApi.md#generateSubscriptionsReport) | **POST** /reports/advanced/subscriptions | Generate subscriptions report
*egoisdk.AdvancedReportsApi* | [**generateUnsubscriptionsReport**](docs/AdvancedReportsApi.md#generateUnsubscriptionsReport) | **POST** /reports/advanced/unsubscriptions | Generate unsubscriptions report
*egoisdk.AdvancedReportsApi* | [**getAllAdvancedReports**](docs/AdvancedReportsApi.md#getAllAdvancedReports) | **GET** /reports/advanced | Get all advanced reports
*egoisdk.AdvancedReportsApi* | [**getAllAdvancedReportsModels**](docs/AdvancedReportsApi.md#getAllAdvancedReportsModels) | **GET** /reports/advanced/models | Get all advanced reports models
*egoisdk.AutomationsApi* | [**deleteAutomation**](docs/AutomationsApi.md#deleteAutomation) | **DELETE** /automations/{automation_id} | Remove automation
*egoisdk.AutomationsApi* | [**getAllActions**](docs/AutomationsApi.md#getAllActions) | **GET** /automations/{automation_id}/actions | Get all actions from given automation
*egoisdk.AutomationsApi* | [**getAllAutomations**](docs/AutomationsApi.md#getAllAutomations) | **GET** /automations | Get all automations
*egoisdk.CNamesApi* | [**createCName**](docs/CNamesApi.md#createCName) | **POST** /cnames | Create cname
*egoisdk.CNamesApi* | [**getAllCNames**](docs/CNamesApi.md#getAllCNames) | **GET** /cnames | Get All CNames
*egoisdk.CampaignGroupsApi* | [**createCampaignGroup**](docs/CampaignGroupsApi.md#createCampaignGroup) | **POST** /campaign-groups | Create new campaign group
*egoisdk.CampaignGroupsApi* | [**deleteCampaignGroup**](docs/CampaignGroupsApi.md#deleteCampaignGroup) | **DELETE** /campaign-groups/{group_id} | Remove Campaign Group
*egoisdk.CampaignGroupsApi* | [**getAllCampaignGroups**](docs/CampaignGroupsApi.md#getAllCampaignGroups) | **GET** /campaign-groups | Get all campaign groups
*egoisdk.CampaignGroupsApi* | [**updateCampaignGroup**](docs/CampaignGroupsApi.md#updateCampaignGroup) | **PUT** /campaign-groups/{group_id} | Update a specific campaign group
*egoisdk.CampaignsApi* | [**deleteCampaigns**](docs/CampaignsApi.md#deleteCampaigns) | **DELETE** /campaigns/{campaign_hash} | Remove Campaign
*egoisdk.CampaignsApi* | [**getAllCampaigns**](docs/CampaignsApi.md#getAllCampaigns) | **GET** /campaigns | Get all Campaigns
*egoisdk.ConnectedSitesApi* | [**createConnectedSites**](docs/ConnectedSitesApi.md#createConnectedSites) | **POST** /connectedsites | Creates a Connected Site
*egoisdk.ConnectedSitesApi* | [**deleteConnectedSites**](docs/ConnectedSitesApi.md#deleteConnectedSites) | **DELETE** /connectedsites/{domain} | Deletes a Connected Site
*egoisdk.ConnectedSitesApi* | [**getAllConnectedSites**](docs/ConnectedSitesApi.md#getAllConnectedSites) | **GET** /connectedsites | Get all Connected Sites
*egoisdk.ConnectedSitesApi* | [**getConnectedSites**](docs/ConnectedSitesApi.md#getConnectedSites) | **GET** /connectedsites/{domain} | Get a Connected Site
*egoisdk.ContactsApi* | [**actionActivateContacts**](docs/ContactsApi.md#actionActivateContacts) | **POST** /lists/{list_id}/contacts/actions/activate | Activate contacts
*egoisdk.ContactsApi* | [**actionAttachTag**](docs/ContactsApi.md#actionAttachTag) | **POST** /lists/{list_id}/contacts/actions/attach-tag | Attach tag to contact
*egoisdk.ContactsApi* | [**actionDeactivateContacts**](docs/ContactsApi.md#actionDeactivateContacts) | **POST** /lists/{list_id}/contacts/actions/deactivate | Deactivate contacts
*egoisdk.ContactsApi* | [**actionDetachTag**](docs/ContactsApi.md#actionDetachTag) | **POST** /lists/{list_id}/contacts/actions/detach-tag | Detach tag to contact
*egoisdk.ContactsApi* | [**actionExportContacts**](docs/ContactsApi.md#actionExportContacts) | **POST** /lists/{list_id}/contacts/actions/export | Exports a list of contacts
*egoisdk.ContactsApi* | [**actionForgetContacts**](docs/ContactsApi.md#actionForgetContacts) | **POST** /lists/{list_id}/contacts/actions/forget | Forget contacts
*egoisdk.ContactsApi* | [**actionImportBulk**](docs/ContactsApi.md#actionImportBulk) | **POST** /lists/{list_id}/contacts/actions/import-bulk | Import collection of contacts
*egoisdk.ContactsApi* | [**actionStartAutomation**](docs/ContactsApi.md#actionStartAutomation) | **POST** /lists/{list_id}/contacts/actions/start-automation | Start automation
*egoisdk.ContactsApi* | [**actionUnsubscribeContact**](docs/ContactsApi.md#actionUnsubscribeContact) | **POST** /lists/{list_id}/contacts/actions/unsubscribe | Unsubscribes contacts
*egoisdk.ContactsApi* | [**actionUpdateContacts**](docs/ContactsApi.md#actionUpdateContacts) | **POST** /lists/{list_id}/contacts/actions/update | Updates contacts
*egoisdk.ContactsApi* | [**createContact**](docs/ContactsApi.md#createContact) | **POST** /lists/{list_id}/contacts | Create new contact
*egoisdk.ContactsApi* | [**getAllContactActivities**](docs/ContactsApi.md#getAllContactActivities) | **GET** /lists/{list_id}/contacts/{contact_id}/activities | Get all contact activities
*egoisdk.ContactsApi* | [**getAllContacts**](docs/ContactsApi.md#getAllContacts) | **GET** /lists/{list_id}/contacts | Get all contacts
*egoisdk.ContactsApi* | [**getAllContactsBySegment**](docs/ContactsApi.md#getAllContactsBySegment) | **GET** /lists/{list_id}/contacts/segment/{segment_id} | Get all contacts by Segment Id
*egoisdk.ContactsApi* | [**getContact**](docs/ContactsApi.md#getContact) | **GET** /lists/{list_id}/contacts/{contact_id} | Get contact
*egoisdk.ContactsApi* | [**patchContact**](docs/ContactsApi.md#patchContact) | **PATCH** /lists/{list_id}/contacts/{contact_id} | Update a specific contact
*egoisdk.ContactsApi* | [**searchContacts**](docs/ContactsApi.md#searchContacts) | **GET** /contacts/search | Search contact
*egoisdk.ContactsApi* | [**updateContactByField**](docs/ContactsApi.md#updateContactByField) | **POST** /lists/{list_id}/contacts/by-field | Updates a contact by field
*egoisdk.EcommerceApi* | [**createCart**](docs/EcommerceApi.md#createCart) | **POST** /{domain}/carts | Create cart
*egoisdk.EcommerceApi* | [**createCatalog**](docs/EcommerceApi.md#createCatalog) | **POST** /catalogs | Create new catalog
*egoisdk.EcommerceApi* | [**createOrder**](docs/EcommerceApi.md#createOrder) | **POST** /{domain}/orders | Create order
*egoisdk.EcommerceApi* | [**createProduct**](docs/EcommerceApi.md#createProduct) | **POST** /catalogs/{catalog_id}/products | Create new product
*egoisdk.EcommerceApi* | [**deleteCatalog**](docs/EcommerceApi.md#deleteCatalog) | **DELETE** /catalogs/{catalog_id} | Remove catalog
*egoisdk.EcommerceApi* | [**deleteProduct**](docs/EcommerceApi.md#deleteProduct) | **DELETE** /catalogs/{catalog_id}/products/{product_identifier} | Remove product
*egoisdk.EcommerceApi* | [**getAllCatalogs**](docs/EcommerceApi.md#getAllCatalogs) | **GET** /catalogs | Get all catalogs
*egoisdk.EcommerceApi* | [**getAllProducts**](docs/EcommerceApi.md#getAllProducts) | **GET** /catalogs/{catalog_id}/products | Get all products
*egoisdk.EcommerceApi* | [**getProduct**](docs/EcommerceApi.md#getProduct) | **GET** /catalogs/{catalog_id}/products/{product_identifier} | Get product
*egoisdk.EcommerceApi* | [**importOrdersBulk**](docs/EcommerceApi.md#importOrdersBulk) | **POST** /lists/{list_id}/orders | Orders import bulk request
*egoisdk.EcommerceApi* | [**importProducts**](docs/EcommerceApi.md#importProducts) | **POST** /catalogs/{catalog_id}/products/actions/import | Import products
*egoisdk.EcommerceApi* | [**updateProduct**](docs/EcommerceApi.md#updateProduct) | **PATCH** /catalogs/{catalog_id}/products/{product_identifier} | Update product
*egoisdk.EmailApi* | [**actionEnableEmailRss**](docs/EmailApi.md#actionEnableEmailRss) | **POST** /campaigns/email/rss/{campaign_hash}/actions/enable | Enables a rss email campaign
*egoisdk.EmailApi* | [**actionSendEmail**](docs/EmailApi.md#actionSendEmail) | **POST** /campaigns/email/{campaign_hash}/actions/send | Send email message
*egoisdk.EmailApi* | [**createEmailCampaign**](docs/EmailApi.md#createEmailCampaign) | **POST** /campaigns/email | Create new email campaign
*egoisdk.EmailApi* | [**createEmailRssCampaign**](docs/EmailApi.md#createEmailRssCampaign) | **POST** /campaigns/email/rss | Create new email rss campaign
*egoisdk.EmailApi* | [**patchEmailCampaign**](docs/EmailApi.md#patchEmailCampaign) | **PATCH** /campaigns/email/{campaign_hash} | Update a specific email campaign
*egoisdk.FieldsApi* | [**createExtraField**](docs/FieldsApi.md#createExtraField) | **POST** /lists/{list_id}/fields/extra | Create extra field
*egoisdk.FieldsApi* | [**createFieldOption**](docs/FieldsApi.md#createFieldOption) | **POST** /lists/{list_id}/fields/extra/{field_id}/options | Create new field option
*egoisdk.FieldsApi* | [**deleteExtraField**](docs/FieldsApi.md#deleteExtraField) | **DELETE** /lists/{list_id}/fields/extra/{field_id} | Remove extra field
*egoisdk.FieldsApi* | [**deleteFieldOption**](docs/FieldsApi.md#deleteFieldOption) | **DELETE** /lists/{list_id}/fields/extra/{field_id}/options/{option_id} | Deletes an option
*egoisdk.FieldsApi* | [**getAllFieldOptions**](docs/FieldsApi.md#getAllFieldOptions) | **GET** /lists/{list_id}/fields/extra/{field_id}/options | Get all field options
*egoisdk.FieldsApi* | [**getAllFields**](docs/FieldsApi.md#getAllFields) | **GET** /lists/{list_id}/fields | Get all fields
*egoisdk.FieldsApi* | [**patchBaseField**](docs/FieldsApi.md#patchBaseField) | **PATCH** /lists/{list_id}/fields/base/{field_id} | Update base field
*egoisdk.FieldsApi* | [**patchExtraField**](docs/FieldsApi.md#patchExtraField) | **PATCH** /lists/{list_id}/fields/extra/{field_id} | Update extra field
*egoisdk.FieldsApi* | [**updateFieldOption**](docs/FieldsApi.md#updateFieldOption) | **PATCH** /lists/{list_id}/fields/extra/{field_id}/options/{option_id} | Update field option
*egoisdk.ListsApi* | [**createList**](docs/ListsApi.md#createList) | **POST** /lists | Create new list
*egoisdk.ListsApi* | [**deleteList**](docs/ListsApi.md#deleteList) | **DELETE** /lists/{list_id} | Remove list
*egoisdk.ListsApi* | [**getAllLists**](docs/ListsApi.md#getAllLists) | **GET** /lists | Get all lists
*egoisdk.ListsApi* | [**getList**](docs/ListsApi.md#getList) | **GET** /lists/{list_id} | Get list
*egoisdk.ListsApi* | [**updateList**](docs/ListsApi.md#updateList) | **PATCH** /lists/{list_id} | Update a specific list
*egoisdk.MyAccountApi* | [**enableTe**](docs/MyAccountApi.md#enableTe) | **POST** /my-account/actions/enable-te | Enable Track&amp;Engage
*egoisdk.MyAccountApi* | [**enableTransactional**](docs/MyAccountApi.md#enableTransactional) | **POST** /my-account/actions/enable-transactional | Enable Transactional
*egoisdk.MyAccountApi* | [**getMyAccount**](docs/MyAccountApi.md#getMyAccount) | **GET** /my-account | Get My Account Info
*egoisdk.OperationsApi* | [**actionApproveOperation**](docs/OperationsApi.md#actionApproveOperation) | **POST** /operations/actions/approve | Approve operation
*egoisdk.OperationsApi* | [**actionCancelOperation**](docs/OperationsApi.md#actionCancelOperation) | **POST** /operations/actions/cancel | Cancel operation
*egoisdk.OperationsApi* | [**actionPauseOperation**](docs/OperationsApi.md#actionPauseOperation) | **POST** /operations/actions/pause | Pause operation
*egoisdk.OperationsApi* | [**actionResumeOperation**](docs/OperationsApi.md#actionResumeOperation) | **POST** /operations/actions/resume | Resume operation
*egoisdk.OperationsApi* | [**getAllOperations**](docs/OperationsApi.md#getAllOperations) | **GET** /operations | Get all queued operations
*egoisdk.PingApi* | [**ping**](docs/PingApi.md#ping) | **POST** /ping | Pings the API
*egoisdk.PushApi* | [**actionSendPush**](docs/PushApi.md#actionSendPush) | **POST** /campaigns/push/{campaign_hash}/actions/send | Send push message
*egoisdk.PushApi* | [**createPushCampaign**](docs/PushApi.md#createPushCampaign) | **POST** /campaigns/push | Create new push campaign
*egoisdk.PushApi* | [**getPushApp**](docs/PushApi.md#getPushApp) | **GET** /push/apps/{app_id} | Get a Push application from E-goi
*egoisdk.PushApi* | [**getPushApps**](docs/PushApi.md#getPushApps) | **GET** /push/apps | Get all Push applications from E-goi
*egoisdk.PushApi* | [**patchPushCampaign**](docs/PushApi.md#patchPushCampaign) | **PATCH** /campaigns/push/{campaign_hash} | Update a specific push campaign
*egoisdk.PushApi* | [**registerPushEvent**](docs/PushApi.md#registerPushEvent) | **POST** /push/apps/{app_id}/event | Registers an event from the push notification.
*egoisdk.PushApi* | [**registerPushToken**](docs/PushApi.md#registerPushToken) | **POST** /push/apps/{app_id}/token | Registers a Firebase token
*egoisdk.ReportsApi* | [**getEmailReport**](docs/ReportsApi.md#getEmailReport) | **GET** /reports/email/{campaign_hash} | Get email report
*egoisdk.ReportsApi* | [**getPushReport**](docs/ReportsApi.md#getPushReport) | **GET** /reports/push/{campaign_hash} | Get push report
*egoisdk.ReportsApi* | [**getSMSReport**](docs/ReportsApi.md#getSMSReport) | **GET** /reports/sms/{campaign_hash} | Get sms report
*egoisdk.ReportsApi* | [**getVoiceReport**](docs/ReportsApi.md#getVoiceReport) | **GET** /reports/voice/{campaign_hash} | Get voice report
*egoisdk.ReportsApi* | [**getWebPushReport**](docs/ReportsApi.md#getWebPushReport) | **GET** /reports/web-push/{campaign_hash} | Get webpush report
*egoisdk.SegmentsApi* | [**deleteSegment**](docs/SegmentsApi.md#deleteSegment) | **DELETE** /lists/{list_id}/segments/{segment_id} | Remove segment
*egoisdk.SegmentsApi* | [**getAllSegments**](docs/SegmentsApi.md#getAllSegments) | **GET** /lists/{list_id}/segments | Get all segments
*egoisdk.SendersApi* | [**createCellphoneSender**](docs/SendersApi.md#createCellphoneSender) | **POST** /senders/cellphone | Create cellphone sender
*egoisdk.SendersApi* | [**createEmailSender**](docs/SendersApi.md#createEmailSender) | **POST** /senders/email | Create email sender
*egoisdk.SendersApi* | [**createPhoneSender**](docs/SendersApi.md#createPhoneSender) | **POST** /senders/phone | Create phone sender
*egoisdk.SendersApi* | [**deleteCellphoneSender**](docs/SendersApi.md#deleteCellphoneSender) | **DELETE** /senders/cellphone/{sender_id} | Remove cellphone sender
*egoisdk.SendersApi* | [**deleteEmailSender**](docs/SendersApi.md#deleteEmailSender) | **DELETE** /senders/email/{sender_id} | Remove email sender
*egoisdk.SendersApi* | [**deletePhoneSender**](docs/SendersApi.md#deletePhoneSender) | **DELETE** /senders/phone/{sender_id} | Remove phone sender
*egoisdk.SendersApi* | [**getAllCellphoneSenders**](docs/SendersApi.md#getAllCellphoneSenders) | **GET** /senders/cellphone | Get all cellphone senders
*egoisdk.SendersApi* | [**getAllEmailSenders**](docs/SendersApi.md#getAllEmailSenders) | **GET** /senders/email | Get all email senders
*egoisdk.SendersApi* | [**getAllPhoneSenders**](docs/SendersApi.md#getAllPhoneSenders) | **GET** /senders/phone | Get all phone senders
*egoisdk.SendersApi* | [**putEmailSender**](docs/SendersApi.md#putEmailSender) | **PUT** /senders/email/{sender_id} | Update email sender
*egoisdk.SmartSmsApi* | [**actionSendSmartSms**](docs/SmartSmsApi.md#actionSendSmartSms) | **POST** /campaigns/smart-sms/{campaign_hash}/actions/send | Send smart sms message
*egoisdk.SmartSmsApi* | [**createSmartSmsCampaign**](docs/SmartSmsApi.md#createSmartSmsCampaign) | **POST** /campaigns/smart-sms | Create new smart sms campaign
*egoisdk.SmartSmsApi* | [**patchSmartSmsCampaign**](docs/SmartSmsApi.md#patchSmartSmsCampaign) | **PATCH** /campaigns/smart-sms/{campaign_hash} | Update a specific smart sms campaign
*egoisdk.SmsApi* | [**actionSendSms**](docs/SmsApi.md#actionSendSms) | **POST** /campaigns/sms/{campaign_hash}/actions/send | Send sms message
*egoisdk.SmsApi* | [**createSmsCampaign**](docs/SmsApi.md#createSmsCampaign) | **POST** /campaigns/sms | Create new sms campaign
*egoisdk.SmsApi* | [**patchSmsCampaign**](docs/SmsApi.md#patchSmsCampaign) | **PATCH** /campaigns/sms/{campaign_hash} | Update a specific sms campaign
*egoisdk.SuppressionListApi* | [**createSuppressionList**](docs/SuppressionListApi.md#createSuppressionList) | **POST** /suppression-list | Add to suppression list
*egoisdk.SuppressionListApi* | [**deleteSuppressionList**](docs/SuppressionListApi.md#deleteSuppressionList) | **DELETE** /suppression-list/{suppression_id} | Delete from suppression list
*egoisdk.SuppressionListApi* | [**getAllSuppressionList**](docs/SuppressionListApi.md#getAllSuppressionList) | **GET** /suppression-list | Get the suppression list
*egoisdk.TagsApi* | [**createTag**](docs/TagsApi.md#createTag) | **POST** /tags | Create new tag
*egoisdk.TagsApi* | [**deleteTag**](docs/TagsApi.md#deleteTag) | **DELETE** /tags/{tag_id} | Remove tag
*egoisdk.TagsApi* | [**getAllTags**](docs/TagsApi.md#getAllTags) | **GET** /tags | Get all tags
*egoisdk.TagsApi* | [**updateTag**](docs/TagsApi.md#updateTag) | **PUT** /tags/{tag_id} | Update a specific tag
*egoisdk.TrackEngageApi* | [**getAllDomains**](docs/TrackEngageApi.md#getAllDomains) | **GET** /trackengage/domains | Get all domains
*egoisdk.TrackEngageApi* | [**getAllGoals**](docs/TrackEngageApi.md#getAllGoals) | **GET** /trackengage/goals | Get all goals
*egoisdk.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /users/{user_id} | Remove user
*egoisdk.UsersApi* | [**getAllUsers**](docs/UsersApi.md#getAllUsers) | **GET** /users | Get all users
*egoisdk.UtilitiesApi* | [**getAllCountries**](docs/UtilitiesApi.md#getAllCountries) | **GET** /utilities/countries | Get all countries
*egoisdk.VoiceApi* | [**actionSendVoice**](docs/VoiceApi.md#actionSendVoice) | **POST** /campaigns/voice/{campaign_hash}/actions/send | Send voice message
*egoisdk.VoiceApi* | [**createVoiceCampaign**](docs/VoiceApi.md#createVoiceCampaign) | **POST** /campaigns/voice | Create new voice campaign
*egoisdk.VoiceApi* | [**patchVoiceCampaign**](docs/VoiceApi.md#patchVoiceCampaign) | **PATCH** /campaigns/voice/{campaign_hash} | Update a specific voice campaign
*egoisdk.WebHooksApi* | [**createWebhook**](docs/WebHooksApi.md#createWebhook) | **POST** /webhooks | Create new webhook
*egoisdk.WebHooksApi* | [**deleteWebhook**](docs/WebHooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhook_id} | Remove webhook
*egoisdk.WebHooksApi* | [**getAllWebhooks**](docs/WebHooksApi.md#getAllWebhooks) | **GET** /webhooks | Get all webhooks
*egoisdk.WebpushApi* | [**actionEnableWebPushRss**](docs/WebpushApi.md#actionEnableWebPushRss) | **POST** /campaigns/webpush/rss/{campaign_hash}/actions/enable | Enable a rss webpush campaign
*egoisdk.WebpushApi* | [**actionSendWebPush**](docs/WebpushApi.md#actionSendWebPush) | **POST** /campaigns/web-push/{campaign_hash}/actions/send | Send webpush message
*egoisdk.WebpushApi* | [**createWebPushCampaign**](docs/WebpushApi.md#createWebPushCampaign) | **POST** /campaigns/web-push | Create new webpush campaign
*egoisdk.WebpushApi* | [**createWebPushRssCampaign**](docs/WebpushApi.md#createWebPushRssCampaign) | **POST** /campaigns/webpush/rss | Create new webpush rss campaign
*egoisdk.WebpushApi* | [**createWebpushSite**](docs/WebpushApi.md#createWebpushSite) | **POST** /webpush/sites | Creates a webpush site
*egoisdk.WebpushApi* | [**getAllWebPushSites**](docs/WebpushApi.md#getAllWebPushSites) | **GET** /webpush/sites | Get all webpush sites
*egoisdk.WebpushApi* | [**patchWebPushCampaign**](docs/WebpushApi.md#patchWebPushCampaign) | **PATCH** /campaigns/web-push/{campaign_hash} | Update a specific webpush campaign


## Documentation for Models

 - [egoisdk.AbstractCampaignSendRequest](docs/AbstractCampaignSendRequest.md)
 - [egoisdk.AbstractCampaignSendRequestSegments](docs/AbstractCampaignSendRequestSegments.md)
 - [egoisdk.AbstractCampaignTemplate](docs/AbstractCampaignTemplate.md)
 - [egoisdk.AbstractCellphoneSender](docs/AbstractCellphoneSender.md)
 - [egoisdk.AbstractCellphoneSenderAllOf](docs/AbstractCellphoneSenderAllOf.md)
 - [egoisdk.AbstractSegment](docs/AbstractSegment.md)
 - [egoisdk.AbstractSendEmail](docs/AbstractSendEmail.md)
 - [egoisdk.AbstractSendVoice](docs/AbstractSendVoice.md)
 - [egoisdk.AbstractSendVoiceAllOf](docs/AbstractSendVoiceAllOf.md)
 - [egoisdk.AbstractSendVoiceAllOf1](docs/AbstractSendVoiceAllOf1.md)
 - [egoisdk.AbstractSuppresionList](docs/AbstractSuppresionList.md)
 - [egoisdk.AcceptedResponse](docs/AcceptedResponse.md)
 - [egoisdk.ActivateContactsAll](docs/ActivateContactsAll.md)
 - [egoisdk.ActivateContactsMany](docs/ActivateContactsMany.md)
 - [egoisdk.ActivateContactsRequest](docs/ActivateContactsRequest.md)
 - [egoisdk.ActivityCollection](docs/ActivityCollection.md)
 - [egoisdk.AdvancedReport](docs/AdvancedReport.md)
 - [egoisdk.AdvancedReportCampaignsObject](docs/AdvancedReportCampaignsObject.md)
 - [egoisdk.AdvancedReportContactActivityColumns](docs/AdvancedReportContactActivityColumns.md)
 - [egoisdk.AdvancedReportContactActivityOptions](docs/AdvancedReportContactActivityOptions.md)
 - [egoisdk.AdvancedReportEmailBouncesColumns](docs/AdvancedReportEmailBouncesColumns.md)
 - [egoisdk.AdvancedReportEmailBouncesOptions](docs/AdvancedReportEmailBouncesOptions.md)
 - [egoisdk.AdvancedReportEmailClicksByContactColumns](docs/AdvancedReportEmailClicksByContactColumns.md)
 - [egoisdk.AdvancedReportEmailClicksByContactOptions](docs/AdvancedReportEmailClicksByContactOptions.md)
 - [egoisdk.AdvancedReportEmailClicksByUrlColumns](docs/AdvancedReportEmailClicksByUrlColumns.md)
 - [egoisdk.AdvancedReportEmailClicksByUrlOptions](docs/AdvancedReportEmailClicksByUrlOptions.md)
 - [egoisdk.AdvancedReportEmailEventsColumns](docs/AdvancedReportEmailEventsColumns.md)
 - [egoisdk.AdvancedReportEmailEventsOptions](docs/AdvancedReportEmailEventsOptions.md)
 - [egoisdk.AdvancedReportEmailUnsubscriptionsColumns](docs/AdvancedReportEmailUnsubscriptionsColumns.md)
 - [egoisdk.AdvancedReportEmailUnsubscriptionsOptions](docs/AdvancedReportEmailUnsubscriptionsOptions.md)
 - [egoisdk.AdvancedReportFormsInner](docs/AdvancedReportFormsInner.md)
 - [egoisdk.AdvancedReportListExtraFieldsInner](docs/AdvancedReportListExtraFieldsInner.md)
 - [egoisdk.AdvancedReportModels](docs/AdvancedReportModels.md)
 - [egoisdk.AdvancedReportRange](docs/AdvancedReportRange.md)
 - [egoisdk.AdvancedReportSendsColumns](docs/AdvancedReportSendsColumns.md)
 - [egoisdk.AdvancedReportSendsOptions](docs/AdvancedReportSendsOptions.md)
 - [egoisdk.AdvancedReportSmsBouncesColumns](docs/AdvancedReportSmsBouncesColumns.md)
 - [egoisdk.AdvancedReportSmsBouncesOptions](docs/AdvancedReportSmsBouncesOptions.md)
 - [egoisdk.AdvancedReportSmsEventsColumns](docs/AdvancedReportSmsEventsColumns.md)
 - [egoisdk.AdvancedReportSmsEventsOptions](docs/AdvancedReportSmsEventsOptions.md)
 - [egoisdk.AdvancedReportSubscriptionsColumns](docs/AdvancedReportSubscriptionsColumns.md)
 - [egoisdk.AdvancedReportSubscriptionsOptions](docs/AdvancedReportSubscriptionsOptions.md)
 - [egoisdk.AdvancedReportUnsubscriptionsColumns](docs/AdvancedReportUnsubscriptionsColumns.md)
 - [egoisdk.AdvancedReportUnsubscriptionsOptions](docs/AdvancedReportUnsubscriptionsOptions.md)
 - [egoisdk.AdvancedReportsCollection](docs/AdvancedReportsCollection.md)
 - [egoisdk.AdvancedReportsModelsCollection](docs/AdvancedReportsModelsCollection.md)
 - [egoisdk.AlphanumericCellphoneSender](docs/AlphanumericCellphoneSender.md)
 - [egoisdk.AlphanumericCellphoneSenderPost](docs/AlphanumericCellphoneSenderPost.md)
 - [egoisdk.AlphanumericCellphoneSenderPostAllOf](docs/AlphanumericCellphoneSenderPostAllOf.md)
 - [egoisdk.AppStructure](docs/AppStructure.md)
 - [egoisdk.AppStructureList](docs/AppStructureList.md)
 - [egoisdk.AttachByContacts](docs/AttachByContacts.md)
 - [egoisdk.AttachByFieldId](docs/AttachByFieldId.md)
 - [egoisdk.AttachBySegment](docs/AttachBySegment.md)
 - [egoisdk.AttachTagRequest](docs/AttachTagRequest.md)
 - [egoisdk.AttachTagResponse](docs/AttachTagResponse.md)
 - [egoisdk.AutomaticSegment](docs/AutomaticSegment.md)
 - [egoisdk.AutomaticSegmentAllOf](docs/AutomaticSegmentAllOf.md)
 - [egoisdk.Automation](docs/Automation.md)
 - [egoisdk.AutomationActions](docs/AutomationActions.md)
 - [egoisdk.AutomationActionsAllOf](docs/AutomationActionsAllOf.md)
 - [egoisdk.AutomationActionsCollection](docs/AutomationActionsCollection.md)
 - [egoisdk.AutomationAllOf](docs/AutomationAllOf.md)
 - [egoisdk.AutomationCollection](docs/AutomationCollection.md)
 - [egoisdk.AutomationPost](docs/AutomationPost.md)
 - [egoisdk.AutomationPostAllOf](docs/AutomationPostAllOf.md)
 - [egoisdk.BadRequest](docs/BadRequest.md)
 - [egoisdk.BalanceInfo](docs/BalanceInfo.md)
 - [egoisdk.BalanceInfoBalanceInfo](docs/BalanceInfoBalanceInfo.md)
 - [egoisdk.BaseConflict](docs/BaseConflict.md)
 - [egoisdk.BasicProduct](docs/BasicProduct.md)
 - [egoisdk.BasicSender](docs/BasicSender.md)
 - [egoisdk.BillingInfo](docs/BillingInfo.md)
 - [egoisdk.BillingInfoAllOf](docs/BillingInfoAllOf.md)
 - [egoisdk.BillingInfoAllOfBillingInfo](docs/BillingInfoAllOfBillingInfo.md)
 - [egoisdk.BillingInfoAllOfBillingInfoCountry](docs/BillingInfoAllOfBillingInfoCountry.md)
 - [egoisdk.BulkActionResponse](docs/BulkActionResponse.md)
 - [egoisdk.CName](docs/CName.md)
 - [egoisdk.CNamePost](docs/CNamePost.md)
 - [egoisdk.CNamesCollection](docs/CNamesCollection.md)
 - [egoisdk.Campaign](docs/Campaign.md)
 - [egoisdk.CampaignEmailBaseContent](docs/CampaignEmailBaseContent.md)
 - [egoisdk.CampaignEmailContent](docs/CampaignEmailContent.md)
 - [egoisdk.CampaignEmailContentFile](docs/CampaignEmailContentFile.md)
 - [egoisdk.CampaignEmailContentFileAllOf](docs/CampaignEmailContentFileAllOf.md)
 - [egoisdk.CampaignEmailContentHtml](docs/CampaignEmailContentHtml.md)
 - [egoisdk.CampaignEmailContentHtmlAllOf](docs/CampaignEmailContentHtmlAllOf.md)
 - [egoisdk.CampaignEmailContentHtmlPatch](docs/CampaignEmailContentHtmlPatch.md)
 - [egoisdk.CampaignEmailContentHtmlPatchAllOf](docs/CampaignEmailContentHtmlPatchAllOf.md)
 - [egoisdk.CampaignEmailContentTemplate](docs/CampaignEmailContentTemplate.md)
 - [egoisdk.CampaignEmailContentTemplateAllOf](docs/CampaignEmailContentTemplateAllOf.md)
 - [egoisdk.CampaignEmailContentWebPage](docs/CampaignEmailContentWebPage.md)
 - [egoisdk.CampaignEmailContentWebPageAllOf](docs/CampaignEmailContentWebPageAllOf.md)
 - [egoisdk.CampaignEmailRssContent](docs/CampaignEmailRssContent.md)
 - [egoisdk.CampaignEmailRssContentHtml](docs/CampaignEmailRssContentHtml.md)
 - [egoisdk.CampaignEmailRssContentHtmlAllOf](docs/CampaignEmailRssContentHtmlAllOf.md)
 - [egoisdk.CampaignEmailScheduleRequest](docs/CampaignEmailScheduleRequest.md)
 - [egoisdk.CampaignEmailScheduleRequestAllOf](docs/CampaignEmailScheduleRequestAllOf.md)
 - [egoisdk.CampaignEmailSendNowRequest](docs/CampaignEmailSendNowRequest.md)
 - [egoisdk.CampaignEmailSendRequest](docs/CampaignEmailSendRequest.md)
 - [egoisdk.CampaignGroup](docs/CampaignGroup.md)
 - [egoisdk.CampaignGroupAllOf](docs/CampaignGroupAllOf.md)
 - [egoisdk.CampaignGroupCollection](docs/CampaignGroupCollection.md)
 - [egoisdk.CampaignGroupPost](docs/CampaignGroupPost.md)
 - [egoisdk.CampaignGroupPostAllOf](docs/CampaignGroupPostAllOf.md)
 - [egoisdk.CampaignHash](docs/CampaignHash.md)
 - [egoisdk.CampaignPushContent](docs/CampaignPushContent.md)
 - [egoisdk.CampaignPushContentTemplate](docs/CampaignPushContentTemplate.md)
 - [egoisdk.CampaignPushContentText](docs/CampaignPushContentText.md)
 - [egoisdk.CampaignPushScheduleRequest](docs/CampaignPushScheduleRequest.md)
 - [egoisdk.CampaignPushSendRequest](docs/CampaignPushSendRequest.md)
 - [egoisdk.CampaignScheduleDate](docs/CampaignScheduleDate.md)
 - [egoisdk.CampaignSentLast30Days](docs/CampaignSentLast30Days.md)
 - [egoisdk.CampaignSentLast30DaysErrors](docs/CampaignSentLast30DaysErrors.md)
 - [egoisdk.CampaignSmartSmsHtml](docs/CampaignSmartSmsHtml.md)
 - [egoisdk.CampaignSmartSmsImport](docs/CampaignSmartSmsImport.md)
 - [egoisdk.CampaignSmartSmsOptions](docs/CampaignSmartSmsOptions.md)
 - [egoisdk.CampaignSmartSmsPageContent](docs/CampaignSmartSmsPageContent.md)
 - [egoisdk.CampaignSmartSmsRedirect](docs/CampaignSmartSmsRedirect.md)
 - [egoisdk.CampaignSmartSmsScheduleRequest](docs/CampaignSmartSmsScheduleRequest.md)
 - [egoisdk.CampaignSmartSmsSendRequest](docs/CampaignSmartSmsSendRequest.md)
 - [egoisdk.CampaignSmsContent](docs/CampaignSmsContent.md)
 - [egoisdk.CampaignSmsContentTemplate](docs/CampaignSmsContentTemplate.md)
 - [egoisdk.CampaignSmsContentText](docs/CampaignSmsContentText.md)
 - [egoisdk.CampaignSmsOptions](docs/CampaignSmsOptions.md)
 - [egoisdk.CampaignSmsScheduleRequest](docs/CampaignSmsScheduleRequest.md)
 - [egoisdk.CampaignSmsSendRequest](docs/CampaignSmsSendRequest.md)
 - [egoisdk.CampaignVoiceScheduleRequest](docs/CampaignVoiceScheduleRequest.md)
 - [egoisdk.CampaignVoiceSendRequest](docs/CampaignVoiceSendRequest.md)
 - [egoisdk.CampaignWebPushScheduleRequest](docs/CampaignWebPushScheduleRequest.md)
 - [egoisdk.CampaignWebPushSendRequest](docs/CampaignWebPushSendRequest.md)
 - [egoisdk.CampaignsCollection](docs/CampaignsCollection.md)
 - [egoisdk.Cart](docs/Cart.md)
 - [egoisdk.CartPatchRequest](docs/CartPatchRequest.md)
 - [egoisdk.Catalog](docs/Catalog.md)
 - [egoisdk.CatalogCollection](docs/CatalogCollection.md)
 - [egoisdk.CatalogPost](docs/CatalogPost.md)
 - [egoisdk.CatalogPostRequest](docs/CatalogPostRequest.md)
 - [egoisdk.CellphoneSender](docs/CellphoneSender.md)
 - [egoisdk.CellphoneSenderCollection](docs/CellphoneSenderCollection.md)
 - [egoisdk.CellphoneSenderPost](docs/CellphoneSenderPost.md)
 - [egoisdk.ClientAlreadyEnabled](docs/ClientAlreadyEnabled.md)
 - [egoisdk.ClientAlreadyEnabledErrors](docs/ClientAlreadyEnabledErrors.md)
 - [egoisdk.ClientIsBeingEnabled](docs/ClientIsBeingEnabled.md)
 - [egoisdk.ClientIsBeingEnabledErrors](docs/ClientIsBeingEnabledErrors.md)
 - [egoisdk.CnameExists](docs/CnameExists.md)
 - [egoisdk.CnameExistsErrors](docs/CnameExistsErrors.md)
 - [egoisdk.ComplexContact](docs/ComplexContact.md)
 - [egoisdk.ComplexField](docs/ComplexField.md)
 - [egoisdk.ComplexFieldAllOf](docs/ComplexFieldAllOf.md)
 - [egoisdk.ComplexList](docs/ComplexList.md)
 - [egoisdk.ComplexListAllOf](docs/ComplexListAllOf.md)
 - [egoisdk.ComplexListAllOfStats](docs/ComplexListAllOfStats.md)
 - [egoisdk.ComplexUser](docs/ComplexUser.md)
 - [egoisdk.ComplexUserAllOf](docs/ComplexUserAllOf.md)
 - [egoisdk.ComplexUserPost](docs/ComplexUserPost.md)
 - [egoisdk.Conflict](docs/Conflict.md)
 - [egoisdk.ConflictAllOf](docs/ConflictAllOf.md)
 - [egoisdk.ConnectedSitesDomain](docs/ConnectedSitesDomain.md)
 - [egoisdk.ConnectedSitesDomainDetail](docs/ConnectedSitesDomainDetail.md)
 - [egoisdk.ConnectedSitesEmbedForm](docs/ConnectedSitesEmbedForm.md)
 - [egoisdk.ConnectedSitesGeneralProductAppDetail](docs/ConnectedSitesGeneralProductAppDetail.md)
 - [egoisdk.ConnectedSitesGeneralProductAppDetailGlobal](docs/ConnectedSitesGeneralProductAppDetailGlobal.md)
 - [egoisdk.ConnectedSitesGeneralProductFormDetail](docs/ConnectedSitesGeneralProductFormDetail.md)
 - [egoisdk.ConnectedSitesGeneralProductFormDetailGlobal](docs/ConnectedSitesGeneralProductFormDetailGlobal.md)
 - [egoisdk.ConnectedSitesGeneralProductTEDetailGlobal](docs/ConnectedSitesGeneralProductTEDetailGlobal.md)
 - [egoisdk.ConnectedSitesProductEmbedFormDetail](docs/ConnectedSitesProductEmbedFormDetail.md)
 - [egoisdk.ConnectedSitesProducts](docs/ConnectedSitesProducts.md)
 - [egoisdk.Contact](docs/Contact.md)
 - [egoisdk.Contact1](docs/Contact1.md)
 - [egoisdk.Contact2](docs/Contact2.md)
 - [egoisdk.ContactActivity](docs/ContactActivity.md)
 - [egoisdk.ContactActivityAbstractActionsWithAutomations](docs/ContactActivityAbstractActionsWithAutomations.md)
 - [egoisdk.ContactActivityAbstractActionsWithCampaign](docs/ContactActivityAbstractActionsWithCampaign.md)
 - [egoisdk.ContactActivityAbstractActionsWithData](docs/ContactActivityAbstractActionsWithData.md)
 - [egoisdk.ContactActivityAbstractActionsWithTags](docs/ContactActivityAbstractActionsWithTags.md)
 - [egoisdk.ContactActivityActivitiesFields](docs/ContactActivityActivitiesFields.md)
 - [egoisdk.ContactActivityClick](docs/ContactActivityClick.md)
 - [egoisdk.ContactActivityClickAllOf](docs/ContactActivityClickAllOf.md)
 - [egoisdk.ContactActivityClickAllOfActionData](docs/ContactActivityClickAllOfActionData.md)
 - [egoisdk.ContactAdvertisingPost](docs/ContactAdvertisingPost.md)
 - [egoisdk.ContactAdvertisingPostSchema](docs/ContactAdvertisingPostSchema.md)
 - [egoisdk.ContactAdvertisingPostSchemaAdvertising](docs/ContactAdvertisingPostSchemaAdvertising.md)
 - [egoisdk.ContactAutomationsActivity](docs/ContactAutomationsActivity.md)
 - [egoisdk.ContactAutomationsActivityAllOf](docs/ContactAutomationsActivityAllOf.md)
 - [egoisdk.ContactAutomationsActivityAllOfActionData](docs/ContactAutomationsActivityAllOfActionData.md)
 - [egoisdk.ContactBaseExtra](docs/ContactBaseExtra.md)
 - [egoisdk.ContactBaseExtraBulk](docs/ContactBaseExtraBulk.md)
 - [egoisdk.ContactBaseExtraFull](docs/ContactBaseExtraFull.md)
 - [egoisdk.ContactBaseExtraPost](docs/ContactBaseExtraPost.md)
 - [egoisdk.ContactBaseFieldsBulkSchema](docs/ContactBaseFieldsBulkSchema.md)
 - [egoisdk.ContactBaseFieldsBulkSchemaBase](docs/ContactBaseFieldsBulkSchemaBase.md)
 - [egoisdk.ContactBaseFieldsPostSchema](docs/ContactBaseFieldsPostSchema.md)
 - [egoisdk.ContactBaseFieldsPostSchemaBase](docs/ContactBaseFieldsPostSchemaBase.md)
 - [egoisdk.ContactBaseFieldsSchema](docs/ContactBaseFieldsSchema.md)
 - [egoisdk.ContactBaseFieldsSchemaBase](docs/ContactBaseFieldsSchemaBase.md)
 - [egoisdk.ContactBaseFieldsWithIdSchema](docs/ContactBaseFieldsWithIdSchema.md)
 - [egoisdk.ContactBaseFieldsWithIdSchemaBase](docs/ContactBaseFieldsWithIdSchemaBase.md)
 - [egoisdk.ContactBaseStatusExtra](docs/ContactBaseStatusExtra.md)
 - [egoisdk.ContactBaseStatusExtraBulk](docs/ContactBaseStatusExtraBulk.md)
 - [egoisdk.ContactBaseStatusExtraNoRemoved](docs/ContactBaseStatusExtraNoRemoved.md)
 - [egoisdk.ContactBaseWithStatusFieldsBulkSchema](docs/ContactBaseWithStatusFieldsBulkSchema.md)
 - [egoisdk.ContactBaseWithStatusFieldsBulkSchemaBase](docs/ContactBaseWithStatusFieldsBulkSchemaBase.md)
 - [egoisdk.ContactBaseWithStatusFieldsNoTokensSchema](docs/ContactBaseWithStatusFieldsNoTokensSchema.md)
 - [egoisdk.ContactBaseWithStatusFieldsNoTokensSchemaBase](docs/ContactBaseWithStatusFieldsNoTokensSchemaBase.md)
 - [egoisdk.ContactBaseWithStatusFieldsSchema](docs/ContactBaseWithStatusFieldsSchema.md)
 - [egoisdk.ContactBaseWithStatusFieldsSchemaBase](docs/ContactBaseWithStatusFieldsSchemaBase.md)
 - [egoisdk.ContactBaseWithStatusNoRemovedFieldsSchema](docs/ContactBaseWithStatusNoRemovedFieldsSchema.md)
 - [egoisdk.ContactBaseWithStatusNoRemovedFieldsSchemaBase](docs/ContactBaseWithStatusNoRemovedFieldsSchemaBase.md)
 - [egoisdk.ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner](docs/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner.md)
 - [egoisdk.ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner](docs/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner.md)
 - [egoisdk.ContactBulk](docs/ContactBulk.md)
 - [egoisdk.ContactBulkFile](docs/ContactBulkFile.md)
 - [egoisdk.ContactBulkFileAllOf](docs/ContactBulkFileAllOf.md)
 - [egoisdk.ContactBulkFileAllOf1](docs/ContactBulkFileAllOf1.md)
 - [egoisdk.ContactBulkFileAllOf2](docs/ContactBulkFileAllOf2.md)
 - [egoisdk.ContactBulkFileAllOf3](docs/ContactBulkFileAllOf3.md)
 - [egoisdk.ContactByFieldFieldsPostSchema](docs/ContactByFieldFieldsPostSchema.md)
 - [egoisdk.ContactByFieldFieldsPostSchemaCompareField](docs/ContactByFieldFieldsPostSchemaCompareField.md)
 - [egoisdk.ContactCampaignActivity](docs/ContactCampaignActivity.md)
 - [egoisdk.ContactCampaignActivityAllOf](docs/ContactCampaignActivityAllOf.md)
 - [egoisdk.ContactCampaignActivityAllOfActionData](docs/ContactCampaignActivityAllOfActionData.md)
 - [egoisdk.ContactCollection](docs/ContactCollection.md)
 - [egoisdk.ContactCompareFieldPost](docs/ContactCompareFieldPost.md)
 - [egoisdk.ContactExportRequest](docs/ContactExportRequest.md)
 - [egoisdk.ContactExtraFieldCellphone](docs/ContactExtraFieldCellphone.md)
 - [egoisdk.ContactExtraFieldCellphoneBulk](docs/ContactExtraFieldCellphoneBulk.md)
 - [egoisdk.ContactExtraFieldDate](docs/ContactExtraFieldDate.md)
 - [egoisdk.ContactExtraFieldEmail](docs/ContactExtraFieldEmail.md)
 - [egoisdk.ContactExtraFieldEmailBulk](docs/ContactExtraFieldEmailBulk.md)
 - [egoisdk.ContactExtraFieldNumber](docs/ContactExtraFieldNumber.md)
 - [egoisdk.ContactExtraFieldOptions](docs/ContactExtraFieldOptions.md)
 - [egoisdk.ContactExtraFieldPhone](docs/ContactExtraFieldPhone.md)
 - [egoisdk.ContactExtraFieldPhoneBulk](docs/ContactExtraFieldPhoneBulk.md)
 - [egoisdk.ContactExtraFieldText](docs/ContactExtraFieldText.md)
 - [egoisdk.ContactExtraFields](docs/ContactExtraFields.md)
 - [egoisdk.ContactExtraFieldsBulk](docs/ContactExtraFieldsBulk.md)
 - [egoisdk.ContactExtraFieldsBulkSchema](docs/ContactExtraFieldsBulkSchema.md)
 - [egoisdk.ContactExtraFieldsSchema](docs/ContactExtraFieldsSchema.md)
 - [egoisdk.ContactFieldIdBaseExtraPost](docs/ContactFieldIdBaseExtraPost.md)
 - [egoisdk.ContactFieldMappingFileBulkSchema](docs/ContactFieldMappingFileBulkSchema.md)
 - [egoisdk.ContactForgetRequest](docs/ContactForgetRequest.md)
 - [egoisdk.ContactInsideBase](docs/ContactInsideBase.md)
 - [egoisdk.ContactInsideBaseBulk](docs/ContactInsideBaseBulk.md)
 - [egoisdk.ContactInsideBasePost](docs/ContactInsideBasePost.md)
 - [egoisdk.ContactInsideBaseWithId](docs/ContactInsideBaseWithId.md)
 - [egoisdk.ContactOtherActivity](docs/ContactOtherActivity.md)
 - [egoisdk.ContactReferrerPost](docs/ContactReferrerPost.md)
 - [egoisdk.ContactReferrerPostSchema](docs/ContactReferrerPostSchema.md)
 - [egoisdk.ContactReferrerPostSchemaReferrer](docs/ContactReferrerPostSchemaReferrer.md)
 - [egoisdk.ContactSearchResponse](docs/ContactSearchResponse.md)
 - [egoisdk.ContactStats](docs/ContactStats.md)
 - [egoisdk.ContactStatsEmailStats](docs/ContactStatsEmailStats.md)
 - [egoisdk.ContactStatsPushStats](docs/ContactStatsPushStats.md)
 - [egoisdk.ContactStatsSmsStats](docs/ContactStatsSmsStats.md)
 - [egoisdk.ContactStatsTrafficStats](docs/ContactStatsTrafficStats.md)
 - [egoisdk.ContactStatsTrafficStatsAdvertising](docs/ContactStatsTrafficStatsAdvertising.md)
 - [egoisdk.ContactStatsTrafficStatsReferrer](docs/ContactStatsTrafficStatsReferrer.md)
 - [egoisdk.ContactStatsTrafficStatsUtm](docs/ContactStatsTrafficStatsUtm.md)
 - [egoisdk.ContactStatsVoiceStats](docs/ContactStatsVoiceStats.md)
 - [egoisdk.ContactStatsWebpushStats](docs/ContactStatsWebpushStats.md)
 - [egoisdk.ContactStatusFieldsBulkSchema](docs/ContactStatusFieldsBulkSchema.md)
 - [egoisdk.ContactStatusFieldsSchema](docs/ContactStatusFieldsSchema.md)
 - [egoisdk.ContactTagActivity](docs/ContactTagActivity.md)
 - [egoisdk.ContactTagActivityAllOf](docs/ContactTagActivityAllOf.md)
 - [egoisdk.ContactTagActivityAllOfActionData](docs/ContactTagActivityAllOfActionData.md)
 - [egoisdk.ContactTags](docs/ContactTags.md)
 - [egoisdk.ContactTagsBulk](docs/ContactTagsBulk.md)
 - [egoisdk.ContactUtmPost](docs/ContactUtmPost.md)
 - [egoisdk.ContactUtmPostSchema](docs/ContactUtmPostSchema.md)
 - [egoisdk.ContactUtmPostSchemaUtm](docs/ContactUtmPostSchemaUtm.md)
 - [egoisdk.ContactUtmReferrerAdvertisingPost](docs/ContactUtmReferrerAdvertisingPost.md)
 - [egoisdk.ContactsActionUpdateContactsSchema](docs/ContactsActionUpdateContactsSchema.md)
 - [egoisdk.ContentVoice](docs/ContentVoice.md)
 - [egoisdk.ContentVoiceAudio](docs/ContentVoiceAudio.md)
 - [egoisdk.ContentVoicePatch](docs/ContentVoicePatch.md)
 - [egoisdk.ContentVoiceTemplate](docs/ContentVoiceTemplate.md)
 - [egoisdk.Country](docs/Country.md)
 - [egoisdk.CountryCollection](docs/CountryCollection.md)
 - [egoisdk.CreateCartResponse](docs/CreateCartResponse.md)
 - [egoisdk.CreateContactResponse](docs/CreateContactResponse.md)
 - [egoisdk.CreateOrder](docs/CreateOrder.md)
 - [egoisdk.CreateOrderResponse](docs/CreateOrderResponse.md)
 - [egoisdk.CreateSuppressionListRequest](docs/CreateSuppressionListRequest.md)
 - [egoisdk.DeactivateContactsAll](docs/DeactivateContactsAll.md)
 - [egoisdk.DeactivateContactsMany](docs/DeactivateContactsMany.md)
 - [egoisdk.DeactivateContactsRequest](docs/DeactivateContactsRequest.md)
 - [egoisdk.DeleteCampaignsConflict](docs/DeleteCampaignsConflict.md)
 - [egoisdk.DeleteFieldsConflict](docs/DeleteFieldsConflict.md)
 - [egoisdk.DeleteListsConflict](docs/DeleteListsConflict.md)
 - [egoisdk.DeleteListsConflictsErrors](docs/DeleteListsConflictsErrors.md)
 - [egoisdk.DeleteSegmentsConflict](docs/DeleteSegmentsConflict.md)
 - [egoisdk.DeleteSegmentsConflictsErrors](docs/DeleteSegmentsConflictsErrors.md)
 - [egoisdk.DeleteSuppressionListConflictsErrors](docs/DeleteSuppressionListConflictsErrors.md)
 - [egoisdk.DetachByContacts](docs/DetachByContacts.md)
 - [egoisdk.DetachByFieldId](docs/DetachByFieldId.md)
 - [egoisdk.DetachBySegment](docs/DetachBySegment.md)
 - [egoisdk.DetachTagRequest](docs/DetachTagRequest.md)
 - [egoisdk.Domain](docs/Domain.md)
 - [egoisdk.DomainAlreadyDefined](docs/DomainAlreadyDefined.md)
 - [egoisdk.DomainAlreadyDefinedErrors](docs/DomainAlreadyDefinedErrors.md)
 - [egoisdk.DomainCollection](docs/DomainCollection.md)
 - [egoisdk.DomainListRequired](docs/DomainListRequired.md)
 - [egoisdk.DomainListRequiredErrors](docs/DomainListRequiredErrors.md)
 - [egoisdk.EmailBouncesCampaignFields](docs/EmailBouncesCampaignFields.md)
 - [egoisdk.EmailBouncesListStatsFields](docs/EmailBouncesListStatsFields.md)
 - [egoisdk.EmailCampaignCreate](docs/EmailCampaignCreate.md)
 - [egoisdk.EmailCampaignPatch](docs/EmailCampaignPatch.md)
 - [egoisdk.EmailCampaignTemplate](docs/EmailCampaignTemplate.md)
 - [egoisdk.EmailCampaignTemplateAllOf](docs/EmailCampaignTemplateAllOf.md)
 - [egoisdk.EmailCampaignTemplateAllOfReplyToData](docs/EmailCampaignTemplateAllOfReplyToData.md)
 - [egoisdk.EmailCampaignTemplateAllOfSenderData](docs/EmailCampaignTemplateAllOfSenderData.md)
 - [egoisdk.EmailClicksByContactCampaignFields](docs/EmailClicksByContactCampaignFields.md)
 - [egoisdk.EmailClicksByContactListStatsFields](docs/EmailClicksByContactListStatsFields.md)
 - [egoisdk.EmailClicksByUrlCampaignFields](docs/EmailClicksByUrlCampaignFields.md)
 - [egoisdk.EmailClicksByUrlListStatsFields](docs/EmailClicksByUrlListStatsFields.md)
 - [egoisdk.EmailEventsCampaignFields](docs/EmailEventsCampaignFields.md)
 - [egoisdk.EmailEventsListStatsFields](docs/EmailEventsListStatsFields.md)
 - [egoisdk.EmailReport](docs/EmailReport.md)
 - [egoisdk.EmailReportAllOf](docs/EmailReportAllOf.md)
 - [egoisdk.EmailReportByDate](docs/EmailReportByDate.md)
 - [egoisdk.EmailReportByDateDateInner](docs/EmailReportByDateDateInner.md)
 - [egoisdk.EmailReportByDomain](docs/EmailReportByDomain.md)
 - [egoisdk.EmailReportByDomainDomainInner](docs/EmailReportByDomainDomainInner.md)
 - [egoisdk.EmailReportByEcommerce](docs/EmailReportByEcommerce.md)
 - [egoisdk.EmailReportByEcommerceEcommerce](docs/EmailReportByEcommerceEcommerce.md)
 - [egoisdk.EmailReportByHour](docs/EmailReportByHour.md)
 - [egoisdk.EmailReportByHourHourInner](docs/EmailReportByHourHourInner.md)
 - [egoisdk.EmailReportByLocation](docs/EmailReportByLocation.md)
 - [egoisdk.EmailReportByLocationLocationInner](docs/EmailReportByLocationLocationInner.md)
 - [egoisdk.EmailReportByReader](docs/EmailReportByReader.md)
 - [egoisdk.EmailReportByReaderReaderInner](docs/EmailReportByReaderReaderInner.md)
 - [egoisdk.EmailReportByUrl](docs/EmailReportByUrl.md)
 - [egoisdk.EmailReportByUrlUrlInner](docs/EmailReportByUrlUrlInner.md)
 - [egoisdk.EmailReportByWeekday](docs/EmailReportByWeekday.md)
 - [egoisdk.EmailReportByWeekdayWeekdayInner](docs/EmailReportByWeekdayWeekdayInner.md)
 - [egoisdk.EmailReportOverall](docs/EmailReportOverall.md)
 - [egoisdk.EmailReportOverallOverall](docs/EmailReportOverallOverall.md)
 - [egoisdk.EmailRssCampaignCreate](docs/EmailRssCampaignCreate.md)
 - [egoisdk.EmailSendSegment](docs/EmailSendSegment.md)
 - [egoisdk.EmailSender](docs/EmailSender.md)
 - [egoisdk.EmailSenderAllOf](docs/EmailSenderAllOf.md)
 - [egoisdk.EmailSenderCollection](docs/EmailSenderCollection.md)
 - [egoisdk.EmailSenderPost](docs/EmailSenderPost.md)
 - [egoisdk.EmailSenderPutRequest](docs/EmailSenderPutRequest.md)
 - [egoisdk.EmailUnsubscriptionsCampaignFields](docs/EmailUnsubscriptionsCampaignFields.md)
 - [egoisdk.EmailUnsubscriptionsListStatsFields](docs/EmailUnsubscriptionsListStatsFields.md)
 - [egoisdk.EnableTeConflict](docs/EnableTeConflict.md)
 - [egoisdk.EnableTeConflictsErrors](docs/EnableTeConflictsErrors.md)
 - [egoisdk.EnableTeRequest](docs/EnableTeRequest.md)
 - [egoisdk.EnableTransactionalConflict](docs/EnableTransactionalConflict.md)
 - [egoisdk.EnableTransactionalConflictsErrors](docs/EnableTransactionalConflictsErrors.md)
 - [egoisdk.ExportContactsWebhookData](docs/ExportContactsWebhookData.md)
 - [egoisdk.ExportReportWebhookData](docs/ExportReportWebhookData.md)
 - [egoisdk.Field](docs/Field.md)
 - [egoisdk.FieldInUse](docs/FieldInUse.md)
 - [egoisdk.FieldInUseErrors](docs/FieldInUseErrors.md)
 - [egoisdk.FieldInUseErrorsFieldInUseData](docs/FieldInUseErrorsFieldInUseData.md)
 - [egoisdk.FieldOption](docs/FieldOption.md)
 - [egoisdk.FieldOptionPost](docs/FieldOptionPost.md)
 - [egoisdk.FieldOptionsCollection](docs/FieldOptionsCollection.md)
 - [egoisdk.Forbidden](docs/Forbidden.md)
 - [egoisdk.Form](docs/Form.md)
 - [egoisdk.GeneralInfo](docs/GeneralInfo.md)
 - [egoisdk.GeneralInfoAllOf](docs/GeneralInfoAllOf.md)
 - [egoisdk.GeneralInfoAllOfGeneralInfo](docs/GeneralInfoAllOfGeneralInfo.md)
 - [egoisdk.GenerateByModelReport](docs/GenerateByModelReport.md)
 - [egoisdk.GenerateContactActivityReport](docs/GenerateContactActivityReport.md)
 - [egoisdk.GenerateEmailBouncesReport](docs/GenerateEmailBouncesReport.md)
 - [egoisdk.GenerateEmailClicksByContactReport](docs/GenerateEmailClicksByContactReport.md)
 - [egoisdk.GenerateEmailClicksByUrlReport](docs/GenerateEmailClicksByUrlReport.md)
 - [egoisdk.GenerateEmailEventsReport](docs/GenerateEmailEventsReport.md)
 - [egoisdk.GenerateEmailUnsubscriptionsReport](docs/GenerateEmailUnsubscriptionsReport.md)
 - [egoisdk.GenerateFormAnswersReport](docs/GenerateFormAnswersReport.md)
 - [egoisdk.GenerateSendsReport](docs/GenerateSendsReport.md)
 - [egoisdk.GenerateSmsBouncesReport](docs/GenerateSmsBouncesReport.md)
 - [egoisdk.GenerateSmsEventsReport](docs/GenerateSmsEventsReport.md)
 - [egoisdk.GenerateSubscriptionsReport](docs/GenerateSubscriptionsReport.md)
 - [egoisdk.GenerateUnsubscriptionsReport](docs/GenerateUnsubscriptionsReport.md)
 - [egoisdk.GetAllContactsExtraFieldIdParameter](docs/GetAllContactsExtraFieldIdParameter.md)
 - [egoisdk.GetAllProductsCustomAttributesParameter](docs/GetAllProductsCustomAttributesParameter.md)
 - [egoisdk.Goal](docs/Goal.md)
 - [egoisdk.GoalAutommaticInfo](docs/GoalAutommaticInfo.md)
 - [egoisdk.GoalCollection](docs/GoalCollection.md)
 - [egoisdk.GoalInfo](docs/GoalInfo.md)
 - [egoisdk.GoalManualInfo](docs/GoalManualInfo.md)
 - [egoisdk.GoalTimeInfo](docs/GoalTimeInfo.md)
 - [egoisdk.HasAutomations](docs/HasAutomations.md)
 - [egoisdk.HasAutomationsErrors](docs/HasAutomationsErrors.md)
 - [egoisdk.HasCampaignsLastThirtyDays](docs/HasCampaignsLastThirtyDays.md)
 - [egoisdk.HasCampaignsLastThirtyDaysErrors](docs/HasCampaignsLastThirtyDaysErrors.md)
 - [egoisdk.HasPushApp](docs/HasPushApp.md)
 - [egoisdk.HasPushAppErrors](docs/HasPushAppErrors.md)
 - [egoisdk.HasQueuedCampaigns](docs/HasQueuedCampaigns.md)
 - [egoisdk.HasQueuedCampaignsErrors](docs/HasQueuedCampaignsErrors.md)
 - [egoisdk.HasQueuedOperations](docs/HasQueuedOperations.md)
 - [egoisdk.HasQueuedOperationsErrors](docs/HasQueuedOperationsErrors.md)
 - [egoisdk.HasWebPushSite](docs/HasWebPushSite.md)
 - [egoisdk.HasWebPushSiteErrors](docs/HasWebPushSiteErrors.md)
 - [egoisdk.HashcodeCampaign](docs/HashcodeCampaign.md)
 - [egoisdk.HeaderFooter](docs/HeaderFooter.md)
 - [egoisdk.HeaderFooterFooterLinks](docs/HeaderFooterFooterLinks.md)
 - [egoisdk.HeaderFooterHeaderLinks](docs/HeaderFooterHeaderLinks.md)
 - [egoisdk.HeaderFooterTemplate](docs/HeaderFooterTemplate.md)
 - [egoisdk.ImportBulkFileRequest](docs/ImportBulkFileRequest.md)
 - [egoisdk.ImportBulkFileRequestSchema](docs/ImportBulkFileRequestSchema.md)
 - [egoisdk.ImportBulkFileRequestSchemaFile](docs/ImportBulkFileRequestSchemaFile.md)
 - [egoisdk.ImportBulkRequest](docs/ImportBulkRequest.md)
 - [egoisdk.ImportContactsWebhookData](docs/ImportContactsWebhookData.md)
 - [egoisdk.ImportOrdersBulkBulkRequest](docs/ImportOrdersBulkBulkRequest.md)
 - [egoisdk.ImportOrdersBulkBulkRequestItems](docs/ImportOrdersBulkBulkRequestItems.md)
 - [egoisdk.InternalServerError](docs/InternalServerError.md)
 - [egoisdk.InvalidSegmentType](docs/InvalidSegmentType.md)
 - [egoisdk.InvalidSegmentTypeErrors](docs/InvalidSegmentTypeErrors.md)
 - [egoisdk.Language](docs/Language.md)
 - [egoisdk.LimitContactsActionSend](docs/LimitContactsActionSend.md)
 - [egoisdk.LimitContactsPercentActionSend](docs/LimitContactsPercentActionSend.md)
 - [egoisdk.LimitContactsValueActionSend](docs/LimitContactsValueActionSend.md)
 - [egoisdk.LimitHourActionSend](docs/LimitHourActionSend.md)
 - [egoisdk.LimitHourActionSendLimitHour](docs/LimitHourActionSendLimitHour.md)
 - [egoisdk.LimitSpeedActionSend](docs/LimitSpeedActionSend.md)
 - [egoisdk.List](docs/List.md)
 - [egoisdk.ListCollection](docs/ListCollection.md)
 - [egoisdk.ListCollection1](docs/ListCollection1.md)
 - [egoisdk.ListLimitReached](docs/ListLimitReached.md)
 - [egoisdk.ListLimitReachedErrors](docs/ListLimitReachedErrors.md)
 - [egoisdk.MessageWebPush](docs/MessageWebPush.md)
 - [egoisdk.MessageWebPushPost](docs/MessageWebPushPost.md)
 - [egoisdk.MessageWebPushRss](docs/MessageWebPushRss.md)
 - [egoisdk.ModuleInfo](docs/ModuleInfo.md)
 - [egoisdk.ModuleInfoModuleInfo](docs/ModuleInfoModuleInfo.md)
 - [egoisdk.ModuleInfoModuleInfoTe](docs/ModuleInfoModuleInfoTe.md)
 - [egoisdk.MyAccount](docs/MyAccount.md)
 - [egoisdk.NameAlreadyExists](docs/NameAlreadyExists.md)
 - [egoisdk.NameAlreadyExistsErrors](docs/NameAlreadyExistsErrors.md)
 - [egoisdk.NotFound](docs/NotFound.md)
 - [egoisdk.NotifyUserIdArrayActionSend](docs/NotifyUserIdArrayActionSend.md)
 - [egoisdk.Now](docs/Now.md)
 - [egoisdk.NumericCellphoneSender](docs/NumericCellphoneSender.md)
 - [egoisdk.NumericCellphoneSenderPost](docs/NumericCellphoneSenderPost.md)
 - [egoisdk.NumericCellphoneSenderPostAllOf](docs/NumericCellphoneSenderPostAllOf.md)
 - [egoisdk.OLimitContactsActionSend](docs/OLimitContactsActionSend.md)
 - [egoisdk.OSegmentsActionSend](docs/OSegmentsActionSend.md)
 - [egoisdk.OSegmentsWithoutContactActionSend](docs/OSegmentsWithoutContactActionSend.md)
 - [egoisdk.Operation](docs/Operation.md)
 - [egoisdk.OperationActionRequest](docs/OperationActionRequest.md)
 - [egoisdk.OperationActionResponse](docs/OperationActionResponse.md)
 - [egoisdk.OperationActionResponseError](docs/OperationActionResponseError.md)
 - [egoisdk.OperationOperationData](docs/OperationOperationData.md)
 - [egoisdk.OperationsCollection](docs/OperationsCollection.md)
 - [egoisdk.Order](docs/Order.md)
 - [egoisdk.OrderPatchRequest](docs/OrderPatchRequest.md)
 - [egoisdk.Overall](docs/Overall.md)
 - [egoisdk.OverallOverall](docs/OverallOverall.md)
 - [egoisdk.PatchRequestBaseField](docs/PatchRequestBaseField.md)
 - [egoisdk.PatchRequestField](docs/PatchRequestField.md)
 - [egoisdk.PatchRequestList](docs/PatchRequestList.md)
 - [egoisdk.PatchVoiceCampaign200Response](docs/PatchVoiceCampaign200Response.md)
 - [egoisdk.PayloadTooLarge](docs/PayloadTooLarge.md)
 - [egoisdk.PhoneCampaignTemplate](docs/PhoneCampaignTemplate.md)
 - [egoisdk.PhoneCampaignTemplateAllOf](docs/PhoneCampaignTemplateAllOf.md)
 - [egoisdk.PhoneReport](docs/PhoneReport.md)
 - [egoisdk.PhoneReportAllOf](docs/PhoneReportAllOf.md)
 - [egoisdk.PhoneReportAllOfNetworks](docs/PhoneReportAllOfNetworks.md)
 - [egoisdk.PhoneSender](docs/PhoneSender.md)
 - [egoisdk.PhoneSenderAllOf](docs/PhoneSenderAllOf.md)
 - [egoisdk.PhoneSenderCollection](docs/PhoneSenderCollection.md)
 - [egoisdk.PhoneSenderPost](docs/PhoneSenderPost.md)
 - [egoisdk.Ping](docs/Ping.md)
 - [egoisdk.PlanInfo](docs/PlanInfo.md)
 - [egoisdk.PlanInfoPlanInfo](docs/PlanInfoPlanInfo.md)
 - [egoisdk.PostCNameConflict](docs/PostCNameConflict.md)
 - [egoisdk.PostContactsConflict](docs/PostContactsConflict.md)
 - [egoisdk.PostListsConflict](docs/PostListsConflict.md)
 - [egoisdk.PostProductsConflict](docs/PostProductsConflict.md)
 - [egoisdk.PostRequestList](docs/PostRequestList.md)
 - [egoisdk.PostWebpushSiteConflict](docs/PostWebpushSiteConflict.md)
 - [egoisdk.Product](docs/Product.md)
 - [egoisdk.ProductAllOf](docs/ProductAllOf.md)
 - [egoisdk.ProductAlreadyExists](docs/ProductAlreadyExists.md)
 - [egoisdk.ProductAlreadyExistsErrors](docs/ProductAlreadyExistsErrors.md)
 - [egoisdk.ProductBulkRequest](docs/ProductBulkRequest.md)
 - [egoisdk.ProductCollection](docs/ProductCollection.md)
 - [egoisdk.ProductCustomAttributes](docs/ProductCustomAttributes.md)
 - [egoisdk.ProductPatchRequest](docs/ProductPatchRequest.md)
 - [egoisdk.ProductPostRequest](docs/ProductPostRequest.md)
 - [egoisdk.PushCampaignPatchRequest](docs/PushCampaignPatchRequest.md)
 - [egoisdk.PushCampaignPatchRequestContent](docs/PushCampaignPatchRequestContent.md)
 - [egoisdk.PushCampaignPatchRequestGeoOptions](docs/PushCampaignPatchRequestGeoOptions.md)
 - [egoisdk.PushCampaignPostRequest](docs/PushCampaignPostRequest.md)
 - [egoisdk.PushCampaignPostRequestActions](docs/PushCampaignPostRequestActions.md)
 - [egoisdk.PushCampaignPostRequestGeoOptions](docs/PushCampaignPostRequestGeoOptions.md)
 - [egoisdk.PushCampaignPostRequestNotificationOptions](docs/PushCampaignPostRequestNotificationOptions.md)
 - [egoisdk.PushEvent](docs/PushEvent.md)
 - [egoisdk.PushNotificationSoundSchema](docs/PushNotificationSoundSchema.md)
 - [egoisdk.PushNotificationSoundSchemaDefault](docs/PushNotificationSoundSchemaDefault.md)
 - [egoisdk.PushNotificationSoundSchemaNone](docs/PushNotificationSoundSchemaNone.md)
 - [egoisdk.PushNotificationSoundSchemaUrl](docs/PushNotificationSoundSchemaUrl.md)
 - [egoisdk.PushReport](docs/PushReport.md)
 - [egoisdk.PushReportOperatingSystemsInner](docs/PushReportOperatingSystemsInner.md)
 - [egoisdk.PushReportOperatingSystemsInnerAllOf](docs/PushReportOperatingSystemsInnerAllOf.md)
 - [egoisdk.PushResponse](docs/PushResponse.md)
 - [egoisdk.PushStats](docs/PushStats.md)
 - [egoisdk.PushToken](docs/PushToken.md)
 - [egoisdk.PushTokenTwoStepsData](docs/PushTokenTwoStepsData.md)
 - [egoisdk.RemoveRequest](docs/RemoveRequest.md)
 - [egoisdk.RemoveResponse](docs/RemoveResponse.md)
 - [egoisdk.RemoveResponseErrors](docs/RemoveResponseErrors.md)
 - [egoisdk.ReportCampaignsAll](docs/ReportCampaignsAll.md)
 - [egoisdk.ReportCampaignsGroup](docs/ReportCampaignsGroup.md)
 - [egoisdk.ReportCampaignsLast](docs/ReportCampaignsLast.md)
 - [egoisdk.ReportCampaignsSpecific](docs/ReportCampaignsSpecific.md)
 - [egoisdk.RequestEntityTooLarge](docs/RequestEntityTooLarge.md)
 - [egoisdk.RequestItemsUnsubscribe](docs/RequestItemsUnsubscribe.md)
 - [egoisdk.RequestItemsUnsubscribeAllOf](docs/RequestItemsUnsubscribeAllOf.md)
 - [egoisdk.RequestTimeout](docs/RequestTimeout.md)
 - [egoisdk.SavedSegment](docs/SavedSegment.md)
 - [egoisdk.SavedSegmentAllOf](docs/SavedSegmentAllOf.md)
 - [egoisdk.SavedSegmentAllOf1](docs/SavedSegmentAllOf1.md)
 - [egoisdk.SavedSegmentAllOf1SegmentFilter](docs/SavedSegmentAllOf1SegmentFilter.md)
 - [egoisdk.SavedSegmentAllOf1SegmentFilterSegmentFilterArray](docs/SavedSegmentAllOf1SegmentFilterSegmentFilterArray.md)
 - [egoisdk.SearchContacts200Response](docs/SearchContacts200Response.md)
 - [egoisdk.Segment](docs/Segment.md)
 - [egoisdk.SegmentCollection](docs/SegmentCollection.md)
 - [egoisdk.SegmentsActionSend](docs/SegmentsActionSend.md)
 - [egoisdk.SegmentsWithoutContactActionSend](docs/SegmentsWithoutContactActionSend.md)
 - [egoisdk.SendContact](docs/SendContact.md)
 - [egoisdk.SendContactCellphone](docs/SendContactCellphone.md)
 - [egoisdk.SendEmailContact](docs/SendEmailContact.md)
 - [egoisdk.SendNone](docs/SendNone.md)
 - [egoisdk.SendPush](docs/SendPush.md)
 - [egoisdk.SendPushAllOf](docs/SendPushAllOf.md)
 - [egoisdk.SendSegment](docs/SendSegment.md)
 - [egoisdk.SendSmartSms](docs/SendSmartSms.md)
 - [egoisdk.SendSmartSmsAllOf](docs/SendSmartSmsAllOf.md)
 - [egoisdk.SendSmartSmsAllOf1](docs/SendSmartSmsAllOf1.md)
 - [egoisdk.SendSmartSmsAllOf2](docs/SendSmartSmsAllOf2.md)
 - [egoisdk.SendSms](docs/SendSms.md)
 - [egoisdk.SendSmsAllOf](docs/SendSmsAllOf.md)
 - [egoisdk.SendSmsAllOf1](docs/SendSmsAllOf1.md)
 - [egoisdk.SendWebPush](docs/SendWebPush.md)
 - [egoisdk.SendWebPushAllOf](docs/SendWebPushAllOf.md)
 - [egoisdk.SendsCampaignFields](docs/SendsCampaignFields.md)
 - [egoisdk.ServiceUnavailable](docs/ServiceUnavailable.md)
 - [egoisdk.SingleCartObject](docs/SingleCartObject.md)
 - [egoisdk.SingleOrderObject](docs/SingleOrderObject.md)
 - [egoisdk.SmartSmsCampaign](docs/SmartSmsCampaign.md)
 - [egoisdk.SmartSmsCampaignCampaignContent](docs/SmartSmsCampaignCampaignContent.md)
 - [egoisdk.SmartSmsCampaignPatchRequest](docs/SmartSmsCampaignPatchRequest.md)
 - [egoisdk.SmartSmsCampaignPatchRequestCampaignContent](docs/SmartSmsCampaignPatchRequestCampaignContent.md)
 - [egoisdk.SmartSmsCampaignPatchRequestPageContent](docs/SmartSmsCampaignPatchRequestPageContent.md)
 - [egoisdk.SmartSmsSegmentsActionSend](docs/SmartSmsSegmentsActionSend.md)
 - [egoisdk.SmsBouncesCampaignFields](docs/SmsBouncesCampaignFields.md)
 - [egoisdk.SmsBouncesListStatsFields](docs/SmsBouncesListStatsFields.md)
 - [egoisdk.SmsCampaign](docs/SmsCampaign.md)
 - [egoisdk.SmsCampaignPatchRequest](docs/SmsCampaignPatchRequest.md)
 - [egoisdk.SmsCampaignPatchRequestContent](docs/SmsCampaignPatchRequestContent.md)
 - [egoisdk.SmsCampaignTemplate](docs/SmsCampaignTemplate.md)
 - [egoisdk.SmsCampaignTemplateAllOf](docs/SmsCampaignTemplateAllOf.md)
 - [egoisdk.SmsEventsCampaignFields](docs/SmsEventsCampaignFields.md)
 - [egoisdk.SmsEventsListStatsFields](docs/SmsEventsListStatsFields.md)
 - [egoisdk.SmsSegmentsActionSend](docs/SmsSegmentsActionSend.md)
 - [egoisdk.StartAutomationRequest](docs/StartAutomationRequest.md)
 - [egoisdk.StartAutomationResponse](docs/StartAutomationResponse.md)
 - [egoisdk.SubscriptionsListStatsFields](docs/SubscriptionsListStatsFields.md)
 - [egoisdk.SuppressionList](docs/SuppressionList.md)
 - [egoisdk.SuppressionListItems](docs/SuppressionListItems.md)
 - [egoisdk.SuppressionTypeCellphone](docs/SuppressionTypeCellphone.md)
 - [egoisdk.SuppressionTypeCellphoneAllOf](docs/SuppressionTypeCellphoneAllOf.md)
 - [egoisdk.SuppressionTypeCellphoneAllOf1](docs/SuppressionTypeCellphoneAllOf1.md)
 - [egoisdk.SuppressionTypeEmail](docs/SuppressionTypeEmail.md)
 - [egoisdk.SuppressionTypeEmailAllOf](docs/SuppressionTypeEmailAllOf.md)
 - [egoisdk.SuppressionTypeEmailAllOf1](docs/SuppressionTypeEmailAllOf1.md)
 - [egoisdk.SuppressionTypeEmailDomain](docs/SuppressionTypeEmailDomain.md)
 - [egoisdk.SuppressionTypeEmailDomainAllOf](docs/SuppressionTypeEmailDomainAllOf.md)
 - [egoisdk.SuppressionTypeEmailDomainAllOf1](docs/SuppressionTypeEmailDomainAllOf1.md)
 - [egoisdk.SuppressionTypePhone](docs/SuppressionTypePhone.md)
 - [egoisdk.SuppressionTypePhoneAllOf](docs/SuppressionTypePhoneAllOf.md)
 - [egoisdk.SuppressionTypePhoneAllOf1](docs/SuppressionTypePhoneAllOf1.md)
 - [egoisdk.SuppressionTypeUserEmail](docs/SuppressionTypeUserEmail.md)
 - [egoisdk.SuppressionTypeUserEmailAllOf](docs/SuppressionTypeUserEmailAllOf.md)
 - [egoisdk.SuppressionTypeUserEmailAllOf1](docs/SuppressionTypeUserEmailAllOf1.md)
 - [egoisdk.Tag](docs/Tag.md)
 - [egoisdk.TagCollection](docs/TagCollection.md)
 - [egoisdk.TagCollection1](docs/TagCollection1.md)
 - [egoisdk.TagRequest](docs/TagRequest.md)
 - [egoisdk.TagSegment](docs/TagSegment.md)
 - [egoisdk.TagSegmentAllOf](docs/TagSegmentAllOf.md)
 - [egoisdk.TeResponse](docs/TeResponse.md)
 - [egoisdk.TeResponseAllOf](docs/TeResponseAllOf.md)
 - [egoisdk.TooManyRequests](docs/TooManyRequests.md)
 - [egoisdk.Unauthorized](docs/Unauthorized.md)
 - [egoisdk.UniqueFieldInUse](docs/UniqueFieldInUse.md)
 - [egoisdk.UniqueFieldInUseErrors](docs/UniqueFieldInUseErrors.md)
 - [egoisdk.UnprocessableEntity](docs/UnprocessableEntity.md)
 - [egoisdk.UnremovableEntry](docs/UnremovableEntry.md)
 - [egoisdk.UnremovableEntryErrors](docs/UnremovableEntryErrors.md)
 - [egoisdk.UnsubscriptionObject](docs/UnsubscriptionObject.md)
 - [egoisdk.UnsubscriptionsListStatsFields](docs/UnsubscriptionsListStatsFields.md)
 - [egoisdk.UpdateByContact](docs/UpdateByContact.md)
 - [egoisdk.UpdateBySegment](docs/UpdateBySegment.md)
 - [egoisdk.UpdateContactsRequest](docs/UpdateContactsRequest.md)
 - [egoisdk.UpdateForAll](docs/UpdateForAll.md)
 - [egoisdk.UsedInAutomations](docs/UsedInAutomations.md)
 - [egoisdk.UsedInAutomationsErrors](docs/UsedInAutomationsErrors.md)
 - [egoisdk.UsedInRecurringMessages](docs/UsedInRecurringMessages.md)
 - [egoisdk.UsedInRecurringMessagesErrors](docs/UsedInRecurringMessagesErrors.md)
 - [egoisdk.User](docs/User.md)
 - [egoisdk.UserAllOf](docs/UserAllOf.md)
 - [egoisdk.UserCollection](docs/UserCollection.md)
 - [egoisdk.UserPost](docs/UserPost.md)
 - [egoisdk.UserPostAllOf](docs/UserPostAllOf.md)
 - [egoisdk.UserPostRequest](docs/UserPostRequest.md)
 - [egoisdk.UserPostRequestAllOf](docs/UserPostRequestAllOf.md)
 - [egoisdk.VoiceCampaign](docs/VoiceCampaign.md)
 - [egoisdk.VoiceCampaignAllOf](docs/VoiceCampaignAllOf.md)
 - [egoisdk.VoiceCampaignTemplate](docs/VoiceCampaignTemplate.md)
 - [egoisdk.VoiceCampaignTemplateAllOf](docs/VoiceCampaignTemplateAllOf.md)
 - [egoisdk.VoicePatchCampaign](docs/VoicePatchCampaign.md)
 - [egoisdk.VoicePatchCampaignAllOf](docs/VoicePatchCampaignAllOf.md)
 - [egoisdk.WebPushCampaign](docs/WebPushCampaign.md)
 - [egoisdk.WebPushPatchCampaign](docs/WebPushPatchCampaign.md)
 - [egoisdk.WebPushReport](docs/WebPushReport.md)
 - [egoisdk.WebPushReportBrowsersInner](docs/WebPushReportBrowsersInner.md)
 - [egoisdk.WebPushReportBrowsersInnerVersionsInner](docs/WebPushReportBrowsersInnerVersionsInner.md)
 - [egoisdk.WebPushReportBrowsersInnerVersionsInnerAllOf](docs/WebPushReportBrowsersInnerVersionsInnerAllOf.md)
 - [egoisdk.WebPushReportDevicesInner](docs/WebPushReportDevicesInner.md)
 - [egoisdk.WebPushReportDevicesInnerAllOf](docs/WebPushReportDevicesInnerAllOf.md)
 - [egoisdk.WebPushReportOperatingSystemsInner](docs/WebPushReportOperatingSystemsInner.md)
 - [egoisdk.WebPushReportOperatingSystemsInnerVersionsInner](docs/WebPushReportOperatingSystemsInnerVersionsInner.md)
 - [egoisdk.WebPushReportOperatingSystemsInnerVersionsInnerAllOf](docs/WebPushReportOperatingSystemsInnerVersionsInnerAllOf.md)
 - [egoisdk.WebPushReportUrlInner](docs/WebPushReportUrlInner.md)
 - [egoisdk.WebPushReportUrlInnerAllOf](docs/WebPushReportUrlInnerAllOf.md)
 - [egoisdk.WebPushRssCampaign](docs/WebPushRssCampaign.md)
 - [egoisdk.WebPushSite](docs/WebPushSite.md)
 - [egoisdk.WebPushStats](docs/WebPushStats.md)
 - [egoisdk.Webhook](docs/Webhook.md)
 - [egoisdk.WebhookActionSchema](docs/WebhookActionSchema.md)
 - [egoisdk.WebpushActionsInner](docs/WebpushActionsInner.md)


## Documentation for Authorization



### Apikey


- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

