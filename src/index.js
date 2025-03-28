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


import ApiClient from './ApiClient';
import AbstractCampaignSendRequest from './egoisdk/AbstractCampaignSendRequest';
import AbstractCampaignSendRequestSegments from './egoisdk/AbstractCampaignSendRequestSegments';
import AbstractCampaignTemplate from './egoisdk/AbstractCampaignTemplate';
import AbstractCellphoneSender from './egoisdk/AbstractCellphoneSender';
import AbstractCellphoneSenderAllOf from './egoisdk/AbstractCellphoneSenderAllOf';
import AbstractSegment from './egoisdk/AbstractSegment';
import AbstractSendEmail from './egoisdk/AbstractSendEmail';
import AbstractSendVoice from './egoisdk/AbstractSendVoice';
import AbstractSendVoiceAllOf from './egoisdk/AbstractSendVoiceAllOf';
import AbstractSendVoiceAllOf1 from './egoisdk/AbstractSendVoiceAllOf1';
import AbstractSuppresionList from './egoisdk/AbstractSuppresionList';
import AcceptedResponse from './egoisdk/AcceptedResponse';
import ActivateContactsAll from './egoisdk/ActivateContactsAll';
import ActivateContactsMany from './egoisdk/ActivateContactsMany';
import ActivateContactsRequest from './egoisdk/ActivateContactsRequest';
import ActivityCollection from './egoisdk/ActivityCollection';
import AdvancedReport from './egoisdk/AdvancedReport';
import AdvancedReportCampaignsObject from './egoisdk/AdvancedReportCampaignsObject';
import AdvancedReportContactActivityColumns from './egoisdk/AdvancedReportContactActivityColumns';
import AdvancedReportContactActivityOptions from './egoisdk/AdvancedReportContactActivityOptions';
import AdvancedReportEmailBouncesColumns from './egoisdk/AdvancedReportEmailBouncesColumns';
import AdvancedReportEmailBouncesOptions from './egoisdk/AdvancedReportEmailBouncesOptions';
import AdvancedReportEmailClicksByContactColumns from './egoisdk/AdvancedReportEmailClicksByContactColumns';
import AdvancedReportEmailClicksByContactOptions from './egoisdk/AdvancedReportEmailClicksByContactOptions';
import AdvancedReportEmailClicksByUrlColumns from './egoisdk/AdvancedReportEmailClicksByUrlColumns';
import AdvancedReportEmailClicksByUrlOptions from './egoisdk/AdvancedReportEmailClicksByUrlOptions';
import AdvancedReportEmailEventsColumns from './egoisdk/AdvancedReportEmailEventsColumns';
import AdvancedReportEmailEventsOptions from './egoisdk/AdvancedReportEmailEventsOptions';
import AdvancedReportEmailUnsubscriptionsColumns from './egoisdk/AdvancedReportEmailUnsubscriptionsColumns';
import AdvancedReportEmailUnsubscriptionsOptions from './egoisdk/AdvancedReportEmailUnsubscriptionsOptions';
import AdvancedReportFormsInner from './egoisdk/AdvancedReportFormsInner';
import AdvancedReportListExtraFieldsInner from './egoisdk/AdvancedReportListExtraFieldsInner';
import AdvancedReportModels from './egoisdk/AdvancedReportModels';
import AdvancedReportRange from './egoisdk/AdvancedReportRange';
import AdvancedReportSendsColumns from './egoisdk/AdvancedReportSendsColumns';
import AdvancedReportSendsOptions from './egoisdk/AdvancedReportSendsOptions';
import AdvancedReportSmsBouncesColumns from './egoisdk/AdvancedReportSmsBouncesColumns';
import AdvancedReportSmsBouncesOptions from './egoisdk/AdvancedReportSmsBouncesOptions';
import AdvancedReportSmsEventsColumns from './egoisdk/AdvancedReportSmsEventsColumns';
import AdvancedReportSmsEventsOptions from './egoisdk/AdvancedReportSmsEventsOptions';
import AdvancedReportSubscriptionsColumns from './egoisdk/AdvancedReportSubscriptionsColumns';
import AdvancedReportSubscriptionsOptions from './egoisdk/AdvancedReportSubscriptionsOptions';
import AdvancedReportUnsubscriptionsColumns from './egoisdk/AdvancedReportUnsubscriptionsColumns';
import AdvancedReportUnsubscriptionsOptions from './egoisdk/AdvancedReportUnsubscriptionsOptions';
import AdvancedReportsCollection from './egoisdk/AdvancedReportsCollection';
import AdvancedReportsModelsCollection from './egoisdk/AdvancedReportsModelsCollection';
import AlphanumericCellphoneSender from './egoisdk/AlphanumericCellphoneSender';
import AlphanumericCellphoneSenderPost from './egoisdk/AlphanumericCellphoneSenderPost';
import AlphanumericCellphoneSenderPostAllOf from './egoisdk/AlphanumericCellphoneSenderPostAllOf';
import AppStructure from './egoisdk/AppStructure';
import AppStructureList from './egoisdk/AppStructureList';
import AttachByContacts from './egoisdk/AttachByContacts';
import AttachByFieldId from './egoisdk/AttachByFieldId';
import AttachBySegment from './egoisdk/AttachBySegment';
import AttachTagRequest from './egoisdk/AttachTagRequest';
import AttachTagResponse from './egoisdk/AttachTagResponse';
import AutomaticSegment from './egoisdk/AutomaticSegment';
import AutomaticSegmentAllOf from './egoisdk/AutomaticSegmentAllOf';
import Automation from './egoisdk/Automation';
import AutomationActions from './egoisdk/AutomationActions';
import AutomationActionsAllOf from './egoisdk/AutomationActionsAllOf';
import AutomationActionsCollection from './egoisdk/AutomationActionsCollection';
import AutomationAllOf from './egoisdk/AutomationAllOf';
import AutomationCollection from './egoisdk/AutomationCollection';
import AutomationPost from './egoisdk/AutomationPost';
import AutomationPostAllOf from './egoisdk/AutomationPostAllOf';
import BadRequest from './egoisdk/BadRequest';
import BalanceInfo from './egoisdk/BalanceInfo';
import BalanceInfoBalanceInfo from './egoisdk/BalanceInfoBalanceInfo';
import BaseConflict from './egoisdk/BaseConflict';
import BasicProduct from './egoisdk/BasicProduct';
import BasicSender from './egoisdk/BasicSender';
import BillingInfo from './egoisdk/BillingInfo';
import BillingInfoAllOf from './egoisdk/BillingInfoAllOf';
import BillingInfoAllOfBillingInfo from './egoisdk/BillingInfoAllOfBillingInfo';
import BillingInfoAllOfBillingInfoCountry from './egoisdk/BillingInfoAllOfBillingInfoCountry';
import BulkActionResponse from './egoisdk/BulkActionResponse';
import CName from './egoisdk/CName';
import CNamePost from './egoisdk/CNamePost';
import CNamesCollection from './egoisdk/CNamesCollection';
import Campaign from './egoisdk/Campaign';
import CampaignEmailBaseContent from './egoisdk/CampaignEmailBaseContent';
import CampaignEmailContent from './egoisdk/CampaignEmailContent';
import CampaignEmailContentFile from './egoisdk/CampaignEmailContentFile';
import CampaignEmailContentFileAllOf from './egoisdk/CampaignEmailContentFileAllOf';
import CampaignEmailContentHtml from './egoisdk/CampaignEmailContentHtml';
import CampaignEmailContentHtmlAllOf from './egoisdk/CampaignEmailContentHtmlAllOf';
import CampaignEmailContentHtmlPatch from './egoisdk/CampaignEmailContentHtmlPatch';
import CampaignEmailContentHtmlPatchAllOf from './egoisdk/CampaignEmailContentHtmlPatchAllOf';
import CampaignEmailContentTemplate from './egoisdk/CampaignEmailContentTemplate';
import CampaignEmailContentTemplateAllOf from './egoisdk/CampaignEmailContentTemplateAllOf';
import CampaignEmailContentWebPage from './egoisdk/CampaignEmailContentWebPage';
import CampaignEmailContentWebPageAllOf from './egoisdk/CampaignEmailContentWebPageAllOf';
import CampaignEmailRssContent from './egoisdk/CampaignEmailRssContent';
import CampaignEmailRssContentHtml from './egoisdk/CampaignEmailRssContentHtml';
import CampaignEmailRssContentHtmlAllOf from './egoisdk/CampaignEmailRssContentHtmlAllOf';
import CampaignEmailScheduleRequest from './egoisdk/CampaignEmailScheduleRequest';
import CampaignEmailScheduleRequestAllOf from './egoisdk/CampaignEmailScheduleRequestAllOf';
import CampaignEmailSendNowRequest from './egoisdk/CampaignEmailSendNowRequest';
import CampaignEmailSendRequest from './egoisdk/CampaignEmailSendRequest';
import CampaignGroup from './egoisdk/CampaignGroup';
import CampaignGroupAllOf from './egoisdk/CampaignGroupAllOf';
import CampaignGroupCollection from './egoisdk/CampaignGroupCollection';
import CampaignGroupPost from './egoisdk/CampaignGroupPost';
import CampaignGroupPostAllOf from './egoisdk/CampaignGroupPostAllOf';
import CampaignHash from './egoisdk/CampaignHash';
import CampaignPushContent from './egoisdk/CampaignPushContent';
import CampaignPushContentTemplate from './egoisdk/CampaignPushContentTemplate';
import CampaignPushContentText from './egoisdk/CampaignPushContentText';
import CampaignPushScheduleRequest from './egoisdk/CampaignPushScheduleRequest';
import CampaignPushSendRequest from './egoisdk/CampaignPushSendRequest';
import CampaignScheduleDate from './egoisdk/CampaignScheduleDate';
import CampaignSentLast30Days from './egoisdk/CampaignSentLast30Days';
import CampaignSentLast30DaysErrors from './egoisdk/CampaignSentLast30DaysErrors';
import CampaignSmartSmsHtml from './egoisdk/CampaignSmartSmsHtml';
import CampaignSmartSmsImport from './egoisdk/CampaignSmartSmsImport';
import CampaignSmartSmsOptions from './egoisdk/CampaignSmartSmsOptions';
import CampaignSmartSmsPageContent from './egoisdk/CampaignSmartSmsPageContent';
import CampaignSmartSmsRedirect from './egoisdk/CampaignSmartSmsRedirect';
import CampaignSmartSmsScheduleRequest from './egoisdk/CampaignSmartSmsScheduleRequest';
import CampaignSmartSmsSendRequest from './egoisdk/CampaignSmartSmsSendRequest';
import CampaignSmsContent from './egoisdk/CampaignSmsContent';
import CampaignSmsContentTemplate from './egoisdk/CampaignSmsContentTemplate';
import CampaignSmsContentText from './egoisdk/CampaignSmsContentText';
import CampaignSmsOptions from './egoisdk/CampaignSmsOptions';
import CampaignSmsScheduleRequest from './egoisdk/CampaignSmsScheduleRequest';
import CampaignSmsSendRequest from './egoisdk/CampaignSmsSendRequest';
import CampaignVoiceScheduleRequest from './egoisdk/CampaignVoiceScheduleRequest';
import CampaignVoiceSendRequest from './egoisdk/CampaignVoiceSendRequest';
import CampaignWebPushScheduleRequest from './egoisdk/CampaignWebPushScheduleRequest';
import CampaignWebPushSendRequest from './egoisdk/CampaignWebPushSendRequest';
import CampaignsCollection from './egoisdk/CampaignsCollection';
import Cart from './egoisdk/Cart';
import CartPatchRequest from './egoisdk/CartPatchRequest';
import Catalog from './egoisdk/Catalog';
import CatalogCollection from './egoisdk/CatalogCollection';
import CatalogPost from './egoisdk/CatalogPost';
import CatalogPostRequest from './egoisdk/CatalogPostRequest';
import CellphoneSender from './egoisdk/CellphoneSender';
import CellphoneSenderCollection from './egoisdk/CellphoneSenderCollection';
import CellphoneSenderPost from './egoisdk/CellphoneSenderPost';
import ClientAlreadyEnabled from './egoisdk/ClientAlreadyEnabled';
import ClientAlreadyEnabledErrors from './egoisdk/ClientAlreadyEnabledErrors';
import ClientIsBeingEnabled from './egoisdk/ClientIsBeingEnabled';
import ClientIsBeingEnabledErrors from './egoisdk/ClientIsBeingEnabledErrors';
import CnameExists from './egoisdk/CnameExists';
import CnameExistsErrors from './egoisdk/CnameExistsErrors';
import ComplexContact from './egoisdk/ComplexContact';
import ComplexField from './egoisdk/ComplexField';
import ComplexFieldAllOf from './egoisdk/ComplexFieldAllOf';
import ComplexList from './egoisdk/ComplexList';
import ComplexListAllOf from './egoisdk/ComplexListAllOf';
import ComplexListAllOfStats from './egoisdk/ComplexListAllOfStats';
import ComplexUser from './egoisdk/ComplexUser';
import ComplexUserAllOf from './egoisdk/ComplexUserAllOf';
import ComplexUserPost from './egoisdk/ComplexUserPost';
import Conflict from './egoisdk/Conflict';
import ConflictAllOf from './egoisdk/ConflictAllOf';
import ConnectedSitesDomain from './egoisdk/ConnectedSitesDomain';
import ConnectedSitesDomainDetail from './egoisdk/ConnectedSitesDomainDetail';
import ConnectedSitesEmbedForm from './egoisdk/ConnectedSitesEmbedForm';
import ConnectedSitesGeneralProductAppDetail from './egoisdk/ConnectedSitesGeneralProductAppDetail';
import ConnectedSitesGeneralProductAppDetailGlobal from './egoisdk/ConnectedSitesGeneralProductAppDetailGlobal';
import ConnectedSitesGeneralProductFormDetail from './egoisdk/ConnectedSitesGeneralProductFormDetail';
import ConnectedSitesGeneralProductFormDetailGlobal from './egoisdk/ConnectedSitesGeneralProductFormDetailGlobal';
import ConnectedSitesGeneralProductTEDetailGlobal from './egoisdk/ConnectedSitesGeneralProductTEDetailGlobal';
import ConnectedSitesProductEmbedFormDetail from './egoisdk/ConnectedSitesProductEmbedFormDetail';
import ConnectedSitesProducts from './egoisdk/ConnectedSitesProducts';
import Contact from './egoisdk/Contact';
import Contact1 from './egoisdk/Contact1';
import Contact2 from './egoisdk/Contact2';
import ContactActivity from './egoisdk/ContactActivity';
import ContactActivityAbstractActionsWithAutomations from './egoisdk/ContactActivityAbstractActionsWithAutomations';
import ContactActivityAbstractActionsWithCampaign from './egoisdk/ContactActivityAbstractActionsWithCampaign';
import ContactActivityAbstractActionsWithData from './egoisdk/ContactActivityAbstractActionsWithData';
import ContactActivityAbstractActionsWithTags from './egoisdk/ContactActivityAbstractActionsWithTags';
import ContactActivityActivitiesFields from './egoisdk/ContactActivityActivitiesFields';
import ContactActivityClick from './egoisdk/ContactActivityClick';
import ContactActivityClickAllOf from './egoisdk/ContactActivityClickAllOf';
import ContactActivityClickAllOfActionData from './egoisdk/ContactActivityClickAllOfActionData';
import ContactAdvertisingPost from './egoisdk/ContactAdvertisingPost';
import ContactAdvertisingPostSchema from './egoisdk/ContactAdvertisingPostSchema';
import ContactAdvertisingPostSchemaAdvertising from './egoisdk/ContactAdvertisingPostSchemaAdvertising';
import ContactAutomationsActivity from './egoisdk/ContactAutomationsActivity';
import ContactAutomationsActivityAllOf from './egoisdk/ContactAutomationsActivityAllOf';
import ContactAutomationsActivityAllOfActionData from './egoisdk/ContactAutomationsActivityAllOfActionData';
import ContactBaseExtra from './egoisdk/ContactBaseExtra';
import ContactBaseExtraBulk from './egoisdk/ContactBaseExtraBulk';
import ContactBaseExtraFull from './egoisdk/ContactBaseExtraFull';
import ContactBaseExtraPost from './egoisdk/ContactBaseExtraPost';
import ContactBaseFieldsBulkSchema from './egoisdk/ContactBaseFieldsBulkSchema';
import ContactBaseFieldsBulkSchemaBase from './egoisdk/ContactBaseFieldsBulkSchemaBase';
import ContactBaseFieldsPostSchema from './egoisdk/ContactBaseFieldsPostSchema';
import ContactBaseFieldsPostSchemaBase from './egoisdk/ContactBaseFieldsPostSchemaBase';
import ContactBaseFieldsSchema from './egoisdk/ContactBaseFieldsSchema';
import ContactBaseFieldsSchemaBase from './egoisdk/ContactBaseFieldsSchemaBase';
import ContactBaseFieldsWithIdSchema from './egoisdk/ContactBaseFieldsWithIdSchema';
import ContactBaseFieldsWithIdSchemaBase from './egoisdk/ContactBaseFieldsWithIdSchemaBase';
import ContactBaseStatusExtra from './egoisdk/ContactBaseStatusExtra';
import ContactBaseStatusExtraBulk from './egoisdk/ContactBaseStatusExtraBulk';
import ContactBaseStatusExtraNoRemoved from './egoisdk/ContactBaseStatusExtraNoRemoved';
import ContactBaseWithStatusFieldsBulkSchema from './egoisdk/ContactBaseWithStatusFieldsBulkSchema';
import ContactBaseWithStatusFieldsBulkSchemaBase from './egoisdk/ContactBaseWithStatusFieldsBulkSchemaBase';
import ContactBaseWithStatusFieldsNoTokensSchema from './egoisdk/ContactBaseWithStatusFieldsNoTokensSchema';
import ContactBaseWithStatusFieldsNoTokensSchemaBase from './egoisdk/ContactBaseWithStatusFieldsNoTokensSchemaBase';
import ContactBaseWithStatusFieldsSchema from './egoisdk/ContactBaseWithStatusFieldsSchema';
import ContactBaseWithStatusFieldsSchemaBase from './egoisdk/ContactBaseWithStatusFieldsSchemaBase';
import ContactBaseWithStatusNoRemovedFieldsSchema from './egoisdk/ContactBaseWithStatusNoRemovedFieldsSchema';
import ContactBaseWithStatusNoRemovedFieldsSchemaBase from './egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBase';
import ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner from './egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner';
import ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner from './egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner';
import ContactBulk from './egoisdk/ContactBulk';
import ContactBulkFile from './egoisdk/ContactBulkFile';
import ContactBulkFileAllOf from './egoisdk/ContactBulkFileAllOf';
import ContactBulkFileAllOf1 from './egoisdk/ContactBulkFileAllOf1';
import ContactBulkFileAllOf2 from './egoisdk/ContactBulkFileAllOf2';
import ContactBulkFileAllOf3 from './egoisdk/ContactBulkFileAllOf3';
import ContactByFieldFieldsPostSchema from './egoisdk/ContactByFieldFieldsPostSchema';
import ContactByFieldFieldsPostSchemaCompareField from './egoisdk/ContactByFieldFieldsPostSchemaCompareField';
import ContactCampaignActivity from './egoisdk/ContactCampaignActivity';
import ContactCampaignActivityAllOf from './egoisdk/ContactCampaignActivityAllOf';
import ContactCampaignActivityAllOfActionData from './egoisdk/ContactCampaignActivityAllOfActionData';
import ContactCollection from './egoisdk/ContactCollection';
import ContactCompareFieldPost from './egoisdk/ContactCompareFieldPost';
import ContactExportRequest from './egoisdk/ContactExportRequest';
import ContactExtraFieldCellphone from './egoisdk/ContactExtraFieldCellphone';
import ContactExtraFieldCellphoneBulk from './egoisdk/ContactExtraFieldCellphoneBulk';
import ContactExtraFieldDate from './egoisdk/ContactExtraFieldDate';
import ContactExtraFieldEmail from './egoisdk/ContactExtraFieldEmail';
import ContactExtraFieldEmailBulk from './egoisdk/ContactExtraFieldEmailBulk';
import ContactExtraFieldNumber from './egoisdk/ContactExtraFieldNumber';
import ContactExtraFieldOptions from './egoisdk/ContactExtraFieldOptions';
import ContactExtraFieldPhone from './egoisdk/ContactExtraFieldPhone';
import ContactExtraFieldPhoneBulk from './egoisdk/ContactExtraFieldPhoneBulk';
import ContactExtraFieldText from './egoisdk/ContactExtraFieldText';
import ContactExtraFields from './egoisdk/ContactExtraFields';
import ContactExtraFieldsBulk from './egoisdk/ContactExtraFieldsBulk';
import ContactExtraFieldsBulkSchema from './egoisdk/ContactExtraFieldsBulkSchema';
import ContactExtraFieldsSchema from './egoisdk/ContactExtraFieldsSchema';
import ContactFieldIdBaseExtraPost from './egoisdk/ContactFieldIdBaseExtraPost';
import ContactFieldMappingFileBulkSchema from './egoisdk/ContactFieldMappingFileBulkSchema';
import ContactForgetRequest from './egoisdk/ContactForgetRequest';
import ContactInsideBase from './egoisdk/ContactInsideBase';
import ContactInsideBaseBulk from './egoisdk/ContactInsideBaseBulk';
import ContactInsideBasePost from './egoisdk/ContactInsideBasePost';
import ContactInsideBaseWithId from './egoisdk/ContactInsideBaseWithId';
import ContactOtherActivity from './egoisdk/ContactOtherActivity';
import ContactReferrerPost from './egoisdk/ContactReferrerPost';
import ContactReferrerPostSchema from './egoisdk/ContactReferrerPostSchema';
import ContactReferrerPostSchemaReferrer from './egoisdk/ContactReferrerPostSchemaReferrer';
import ContactSearchResponse from './egoisdk/ContactSearchResponse';
import ContactStats from './egoisdk/ContactStats';
import ContactStatsEmailStats from './egoisdk/ContactStatsEmailStats';
import ContactStatsPushStats from './egoisdk/ContactStatsPushStats';
import ContactStatsSmsStats from './egoisdk/ContactStatsSmsStats';
import ContactStatsTrafficStats from './egoisdk/ContactStatsTrafficStats';
import ContactStatsTrafficStatsAdvertising from './egoisdk/ContactStatsTrafficStatsAdvertising';
import ContactStatsTrafficStatsReferrer from './egoisdk/ContactStatsTrafficStatsReferrer';
import ContactStatsTrafficStatsUtm from './egoisdk/ContactStatsTrafficStatsUtm';
import ContactStatsVoiceStats from './egoisdk/ContactStatsVoiceStats';
import ContactStatsWebpushStats from './egoisdk/ContactStatsWebpushStats';
import ContactStatusFieldsBulkSchema from './egoisdk/ContactStatusFieldsBulkSchema';
import ContactStatusFieldsSchema from './egoisdk/ContactStatusFieldsSchema';
import ContactTagActivity from './egoisdk/ContactTagActivity';
import ContactTagActivityAllOf from './egoisdk/ContactTagActivityAllOf';
import ContactTagActivityAllOfActionData from './egoisdk/ContactTagActivityAllOfActionData';
import ContactTags from './egoisdk/ContactTags';
import ContactTagsBulk from './egoisdk/ContactTagsBulk';
import ContactUtmPost from './egoisdk/ContactUtmPost';
import ContactUtmPostSchema from './egoisdk/ContactUtmPostSchema';
import ContactUtmPostSchemaUtm from './egoisdk/ContactUtmPostSchemaUtm';
import ContactUtmReferrerAdvertisingPost from './egoisdk/ContactUtmReferrerAdvertisingPost';
import ContactsActionUpdateContactsSchema from './egoisdk/ContactsActionUpdateContactsSchema';
import ContentVoice from './egoisdk/ContentVoice';
import ContentVoiceAudio from './egoisdk/ContentVoiceAudio';
import ContentVoicePatch from './egoisdk/ContentVoicePatch';
import ContentVoiceTemplate from './egoisdk/ContentVoiceTemplate';
import Country from './egoisdk/Country';
import CountryCollection from './egoisdk/CountryCollection';
import CreateCartResponse from './egoisdk/CreateCartResponse';
import CreateContactResponse from './egoisdk/CreateContactResponse';
import CreateOrder from './egoisdk/CreateOrder';
import CreateOrderResponse from './egoisdk/CreateOrderResponse';
import CreateSuppressionListRequest from './egoisdk/CreateSuppressionListRequest';
import DeactivateContactsAll from './egoisdk/DeactivateContactsAll';
import DeactivateContactsMany from './egoisdk/DeactivateContactsMany';
import DeactivateContactsRequest from './egoisdk/DeactivateContactsRequest';
import DeleteCampaignsConflict from './egoisdk/DeleteCampaignsConflict';
import DeleteFieldsConflict from './egoisdk/DeleteFieldsConflict';
import DeleteListsConflict from './egoisdk/DeleteListsConflict';
import DeleteListsConflictsErrors from './egoisdk/DeleteListsConflictsErrors';
import DeleteSegmentsConflict from './egoisdk/DeleteSegmentsConflict';
import DeleteSegmentsConflictsErrors from './egoisdk/DeleteSegmentsConflictsErrors';
import DeleteSuppressionListConflictsErrors from './egoisdk/DeleteSuppressionListConflictsErrors';
import DetachByContacts from './egoisdk/DetachByContacts';
import DetachByFieldId from './egoisdk/DetachByFieldId';
import DetachBySegment from './egoisdk/DetachBySegment';
import DetachTagRequest from './egoisdk/DetachTagRequest';
import Domain from './egoisdk/Domain';
import DomainAlreadyDefined from './egoisdk/DomainAlreadyDefined';
import DomainAlreadyDefinedErrors from './egoisdk/DomainAlreadyDefinedErrors';
import DomainCollection from './egoisdk/DomainCollection';
import DomainListRequired from './egoisdk/DomainListRequired';
import DomainListRequiredErrors from './egoisdk/DomainListRequiredErrors';
import EmailBouncesCampaignFields from './egoisdk/EmailBouncesCampaignFields';
import EmailBouncesListStatsFields from './egoisdk/EmailBouncesListStatsFields';
import EmailCampaignCreate from './egoisdk/EmailCampaignCreate';
import EmailCampaignPatch from './egoisdk/EmailCampaignPatch';
import EmailCampaignTemplate from './egoisdk/EmailCampaignTemplate';
import EmailCampaignTemplateAllOf from './egoisdk/EmailCampaignTemplateAllOf';
import EmailCampaignTemplateAllOfReplyToData from './egoisdk/EmailCampaignTemplateAllOfReplyToData';
import EmailCampaignTemplateAllOfSenderData from './egoisdk/EmailCampaignTemplateAllOfSenderData';
import EmailClicksByContactCampaignFields from './egoisdk/EmailClicksByContactCampaignFields';
import EmailClicksByContactListStatsFields from './egoisdk/EmailClicksByContactListStatsFields';
import EmailClicksByUrlCampaignFields from './egoisdk/EmailClicksByUrlCampaignFields';
import EmailClicksByUrlListStatsFields from './egoisdk/EmailClicksByUrlListStatsFields';
import EmailEventsCampaignFields from './egoisdk/EmailEventsCampaignFields';
import EmailEventsListStatsFields from './egoisdk/EmailEventsListStatsFields';
import EmailReport from './egoisdk/EmailReport';
import EmailReportAllOf from './egoisdk/EmailReportAllOf';
import EmailReportByDate from './egoisdk/EmailReportByDate';
import EmailReportByDateDateInner from './egoisdk/EmailReportByDateDateInner';
import EmailReportByDomain from './egoisdk/EmailReportByDomain';
import EmailReportByDomainDomainInner from './egoisdk/EmailReportByDomainDomainInner';
import EmailReportByEcommerce from './egoisdk/EmailReportByEcommerce';
import EmailReportByEcommerceEcommerce from './egoisdk/EmailReportByEcommerceEcommerce';
import EmailReportByHour from './egoisdk/EmailReportByHour';
import EmailReportByHourHourInner from './egoisdk/EmailReportByHourHourInner';
import EmailReportByLocation from './egoisdk/EmailReportByLocation';
import EmailReportByLocationLocationInner from './egoisdk/EmailReportByLocationLocationInner';
import EmailReportByReader from './egoisdk/EmailReportByReader';
import EmailReportByReaderReaderInner from './egoisdk/EmailReportByReaderReaderInner';
import EmailReportByUrl from './egoisdk/EmailReportByUrl';
import EmailReportByUrlUrlInner from './egoisdk/EmailReportByUrlUrlInner';
import EmailReportByWeekday from './egoisdk/EmailReportByWeekday';
import EmailReportByWeekdayWeekdayInner from './egoisdk/EmailReportByWeekdayWeekdayInner';
import EmailReportOverall from './egoisdk/EmailReportOverall';
import EmailReportOverallOverall from './egoisdk/EmailReportOverallOverall';
import EmailRssCampaignCreate from './egoisdk/EmailRssCampaignCreate';
import EmailSendSegment from './egoisdk/EmailSendSegment';
import EmailSender from './egoisdk/EmailSender';
import EmailSenderAllOf from './egoisdk/EmailSenderAllOf';
import EmailSenderCollection from './egoisdk/EmailSenderCollection';
import EmailSenderPost from './egoisdk/EmailSenderPost';
import EmailSenderPutRequest from './egoisdk/EmailSenderPutRequest';
import EmailUnsubscriptionsCampaignFields from './egoisdk/EmailUnsubscriptionsCampaignFields';
import EmailUnsubscriptionsListStatsFields from './egoisdk/EmailUnsubscriptionsListStatsFields';
import EnableTeConflict from './egoisdk/EnableTeConflict';
import EnableTeConflictsErrors from './egoisdk/EnableTeConflictsErrors';
import EnableTeRequest from './egoisdk/EnableTeRequest';
import EnableTransactionalConflict from './egoisdk/EnableTransactionalConflict';
import EnableTransactionalConflictsErrors from './egoisdk/EnableTransactionalConflictsErrors';
import ExportContactsWebhookData from './egoisdk/ExportContactsWebhookData';
import ExportReportWebhookData from './egoisdk/ExportReportWebhookData';
import Field from './egoisdk/Field';
import FieldInUse from './egoisdk/FieldInUse';
import FieldInUseErrors from './egoisdk/FieldInUseErrors';
import FieldInUseErrorsFieldInUseData from './egoisdk/FieldInUseErrorsFieldInUseData';
import FieldOption from './egoisdk/FieldOption';
import FieldOptionPost from './egoisdk/FieldOptionPost';
import FieldOptionsCollection from './egoisdk/FieldOptionsCollection';
import Forbidden from './egoisdk/Forbidden';
import Form from './egoisdk/Form';
import GeneralInfo from './egoisdk/GeneralInfo';
import GeneralInfoAllOf from './egoisdk/GeneralInfoAllOf';
import GeneralInfoAllOfGeneralInfo from './egoisdk/GeneralInfoAllOfGeneralInfo';
import GenerateByModelReport from './egoisdk/GenerateByModelReport';
import GenerateContactActivityReport from './egoisdk/GenerateContactActivityReport';
import GenerateEmailBouncesReport from './egoisdk/GenerateEmailBouncesReport';
import GenerateEmailClicksByContactReport from './egoisdk/GenerateEmailClicksByContactReport';
import GenerateEmailClicksByUrlReport from './egoisdk/GenerateEmailClicksByUrlReport';
import GenerateEmailEventsReport from './egoisdk/GenerateEmailEventsReport';
import GenerateEmailUnsubscriptionsReport from './egoisdk/GenerateEmailUnsubscriptionsReport';
import GenerateFormAnswersReport from './egoisdk/GenerateFormAnswersReport';
import GenerateSendsReport from './egoisdk/GenerateSendsReport';
import GenerateSmsBouncesReport from './egoisdk/GenerateSmsBouncesReport';
import GenerateSmsEventsReport from './egoisdk/GenerateSmsEventsReport';
import GenerateSubscriptionsReport from './egoisdk/GenerateSubscriptionsReport';
import GenerateUnsubscriptionsReport from './egoisdk/GenerateUnsubscriptionsReport';
import GetAllContactsExtraFieldIdParameter from './egoisdk/GetAllContactsExtraFieldIdParameter';
import GetAllProductsCustomAttributesParameter from './egoisdk/GetAllProductsCustomAttributesParameter';
import Goal from './egoisdk/Goal';
import GoalAutommaticInfo from './egoisdk/GoalAutommaticInfo';
import GoalCollection from './egoisdk/GoalCollection';
import GoalInfo from './egoisdk/GoalInfo';
import GoalManualInfo from './egoisdk/GoalManualInfo';
import GoalTimeInfo from './egoisdk/GoalTimeInfo';
import HasAutomations from './egoisdk/HasAutomations';
import HasAutomationsErrors from './egoisdk/HasAutomationsErrors';
import HasCampaignsLastThirtyDays from './egoisdk/HasCampaignsLastThirtyDays';
import HasCampaignsLastThirtyDaysErrors from './egoisdk/HasCampaignsLastThirtyDaysErrors';
import HasPushApp from './egoisdk/HasPushApp';
import HasPushAppErrors from './egoisdk/HasPushAppErrors';
import HasQueuedCampaigns from './egoisdk/HasQueuedCampaigns';
import HasQueuedCampaignsErrors from './egoisdk/HasQueuedCampaignsErrors';
import HasQueuedOperations from './egoisdk/HasQueuedOperations';
import HasQueuedOperationsErrors from './egoisdk/HasQueuedOperationsErrors';
import HasWebPushSite from './egoisdk/HasWebPushSite';
import HasWebPushSiteErrors from './egoisdk/HasWebPushSiteErrors';
import HashcodeCampaign from './egoisdk/HashcodeCampaign';
import HeaderFooter from './egoisdk/HeaderFooter';
import HeaderFooterFooterLinks from './egoisdk/HeaderFooterFooterLinks';
import HeaderFooterHeaderLinks from './egoisdk/HeaderFooterHeaderLinks';
import HeaderFooterTemplate from './egoisdk/HeaderFooterTemplate';
import ImportBulkFileRequest from './egoisdk/ImportBulkFileRequest';
import ImportBulkFileRequestSchema from './egoisdk/ImportBulkFileRequestSchema';
import ImportBulkFileRequestSchemaFile from './egoisdk/ImportBulkFileRequestSchemaFile';
import ImportBulkRequest from './egoisdk/ImportBulkRequest';
import ImportContactsWebhookData from './egoisdk/ImportContactsWebhookData';
import ImportOrdersBulkBulkRequest from './egoisdk/ImportOrdersBulkBulkRequest';
import ImportOrdersBulkBulkRequestItems from './egoisdk/ImportOrdersBulkBulkRequestItems';
import InternalServerError from './egoisdk/InternalServerError';
import InvalidSegmentType from './egoisdk/InvalidSegmentType';
import InvalidSegmentTypeErrors from './egoisdk/InvalidSegmentTypeErrors';
import Language from './egoisdk/Language';
import LimitContactsActionSend from './egoisdk/LimitContactsActionSend';
import LimitContactsPercentActionSend from './egoisdk/LimitContactsPercentActionSend';
import LimitContactsValueActionSend from './egoisdk/LimitContactsValueActionSend';
import LimitHourActionSend from './egoisdk/LimitHourActionSend';
import LimitHourActionSendLimitHour from './egoisdk/LimitHourActionSendLimitHour';
import LimitSpeedActionSend from './egoisdk/LimitSpeedActionSend';
import List from './egoisdk/List';
import ListCollection from './egoisdk/ListCollection';
import ListCollection1 from './egoisdk/ListCollection1';
import ListLimitReached from './egoisdk/ListLimitReached';
import ListLimitReachedErrors from './egoisdk/ListLimitReachedErrors';
import MessageWebPush from './egoisdk/MessageWebPush';
import MessageWebPushPost from './egoisdk/MessageWebPushPost';
import MessageWebPushRss from './egoisdk/MessageWebPushRss';
import ModuleInfo from './egoisdk/ModuleInfo';
import ModuleInfoModuleInfo from './egoisdk/ModuleInfoModuleInfo';
import ModuleInfoModuleInfoTe from './egoisdk/ModuleInfoModuleInfoTe';
import MyAccount from './egoisdk/MyAccount';
import NameAlreadyExists from './egoisdk/NameAlreadyExists';
import NameAlreadyExistsErrors from './egoisdk/NameAlreadyExistsErrors';
import NotFound from './egoisdk/NotFound';
import NotifyUserIdArrayActionSend from './egoisdk/NotifyUserIdArrayActionSend';
import Now from './egoisdk/Now';
import NumericCellphoneSender from './egoisdk/NumericCellphoneSender';
import NumericCellphoneSenderPost from './egoisdk/NumericCellphoneSenderPost';
import NumericCellphoneSenderPostAllOf from './egoisdk/NumericCellphoneSenderPostAllOf';
import OLimitContactsActionSend from './egoisdk/OLimitContactsActionSend';
import OSegmentsActionSend from './egoisdk/OSegmentsActionSend';
import OSegmentsWithoutContactActionSend from './egoisdk/OSegmentsWithoutContactActionSend';
import Operation from './egoisdk/Operation';
import OperationActionRequest from './egoisdk/OperationActionRequest';
import OperationActionResponse from './egoisdk/OperationActionResponse';
import OperationActionResponseError from './egoisdk/OperationActionResponseError';
import OperationOperationData from './egoisdk/OperationOperationData';
import OperationsCollection from './egoisdk/OperationsCollection';
import Order from './egoisdk/Order';
import OrderPatchRequest from './egoisdk/OrderPatchRequest';
import Overall from './egoisdk/Overall';
import OverallOverall from './egoisdk/OverallOverall';
import PatchRequestBaseField from './egoisdk/PatchRequestBaseField';
import PatchRequestField from './egoisdk/PatchRequestField';
import PatchRequestList from './egoisdk/PatchRequestList';
import PatchVoiceCampaign200Response from './egoisdk/PatchVoiceCampaign200Response';
import PayloadTooLarge from './egoisdk/PayloadTooLarge';
import PhoneCampaignTemplate from './egoisdk/PhoneCampaignTemplate';
import PhoneCampaignTemplateAllOf from './egoisdk/PhoneCampaignTemplateAllOf';
import PhoneReport from './egoisdk/PhoneReport';
import PhoneReportAllOf from './egoisdk/PhoneReportAllOf';
import PhoneReportAllOfNetworks from './egoisdk/PhoneReportAllOfNetworks';
import PhoneSender from './egoisdk/PhoneSender';
import PhoneSenderAllOf from './egoisdk/PhoneSenderAllOf';
import PhoneSenderCollection from './egoisdk/PhoneSenderCollection';
import PhoneSenderPost from './egoisdk/PhoneSenderPost';
import Ping from './egoisdk/Ping';
import PlanInfo from './egoisdk/PlanInfo';
import PlanInfoPlanInfo from './egoisdk/PlanInfoPlanInfo';
import PostCNameConflict from './egoisdk/PostCNameConflict';
import PostContactsConflict from './egoisdk/PostContactsConflict';
import PostListsConflict from './egoisdk/PostListsConflict';
import PostProductsConflict from './egoisdk/PostProductsConflict';
import PostRequestList from './egoisdk/PostRequestList';
import PostWebpushSiteConflict from './egoisdk/PostWebpushSiteConflict';
import Product from './egoisdk/Product';
import ProductAllOf from './egoisdk/ProductAllOf';
import ProductAlreadyExists from './egoisdk/ProductAlreadyExists';
import ProductAlreadyExistsErrors from './egoisdk/ProductAlreadyExistsErrors';
import ProductBulkRequest from './egoisdk/ProductBulkRequest';
import ProductCollection from './egoisdk/ProductCollection';
import ProductCustomAttributes from './egoisdk/ProductCustomAttributes';
import ProductPatchRequest from './egoisdk/ProductPatchRequest';
import ProductPostRequest from './egoisdk/ProductPostRequest';
import PushCampaignPatchRequest from './egoisdk/PushCampaignPatchRequest';
import PushCampaignPatchRequestContent from './egoisdk/PushCampaignPatchRequestContent';
import PushCampaignPatchRequestGeoOptions from './egoisdk/PushCampaignPatchRequestGeoOptions';
import PushCampaignPostRequest from './egoisdk/PushCampaignPostRequest';
import PushCampaignPostRequestActions from './egoisdk/PushCampaignPostRequestActions';
import PushCampaignPostRequestGeoOptions from './egoisdk/PushCampaignPostRequestGeoOptions';
import PushCampaignPostRequestNotificationOptions from './egoisdk/PushCampaignPostRequestNotificationOptions';
import PushEvent from './egoisdk/PushEvent';
import PushNotificationSoundSchema from './egoisdk/PushNotificationSoundSchema';
import PushNotificationSoundSchemaDefault from './egoisdk/PushNotificationSoundSchemaDefault';
import PushNotificationSoundSchemaNone from './egoisdk/PushNotificationSoundSchemaNone';
import PushNotificationSoundSchemaUrl from './egoisdk/PushNotificationSoundSchemaUrl';
import PushReport from './egoisdk/PushReport';
import PushReportOperatingSystemsInner from './egoisdk/PushReportOperatingSystemsInner';
import PushReportOperatingSystemsInnerAllOf from './egoisdk/PushReportOperatingSystemsInnerAllOf';
import PushResponse from './egoisdk/PushResponse';
import PushStats from './egoisdk/PushStats';
import PushToken from './egoisdk/PushToken';
import PushTokenTwoStepsData from './egoisdk/PushTokenTwoStepsData';
import RemoveRequest from './egoisdk/RemoveRequest';
import RemoveResponse from './egoisdk/RemoveResponse';
import RemoveResponseErrors from './egoisdk/RemoveResponseErrors';
import ReportCampaignsAll from './egoisdk/ReportCampaignsAll';
import ReportCampaignsGroup from './egoisdk/ReportCampaignsGroup';
import ReportCampaignsLast from './egoisdk/ReportCampaignsLast';
import ReportCampaignsSpecific from './egoisdk/ReportCampaignsSpecific';
import RequestEntityTooLarge from './egoisdk/RequestEntityTooLarge';
import RequestItemsUnsubscribe from './egoisdk/RequestItemsUnsubscribe';
import RequestItemsUnsubscribeAllOf from './egoisdk/RequestItemsUnsubscribeAllOf';
import RequestTimeout from './egoisdk/RequestTimeout';
import SavedSegment from './egoisdk/SavedSegment';
import SavedSegmentAllOf from './egoisdk/SavedSegmentAllOf';
import SavedSegmentAllOf1 from './egoisdk/SavedSegmentAllOf1';
import SavedSegmentAllOf1SegmentFilter from './egoisdk/SavedSegmentAllOf1SegmentFilter';
import SavedSegmentAllOf1SegmentFilterSegmentFilterArray from './egoisdk/SavedSegmentAllOf1SegmentFilterSegmentFilterArray';
import SearchContacts200Response from './egoisdk/SearchContacts200Response';
import Segment from './egoisdk/Segment';
import SegmentCollection from './egoisdk/SegmentCollection';
import SegmentsActionSend from './egoisdk/SegmentsActionSend';
import SegmentsWithoutContactActionSend from './egoisdk/SegmentsWithoutContactActionSend';
import SendContact from './egoisdk/SendContact';
import SendContactCellphone from './egoisdk/SendContactCellphone';
import SendEmailContact from './egoisdk/SendEmailContact';
import SendNone from './egoisdk/SendNone';
import SendPush from './egoisdk/SendPush';
import SendPushAllOf from './egoisdk/SendPushAllOf';
import SendSegment from './egoisdk/SendSegment';
import SendSmartSms from './egoisdk/SendSmartSms';
import SendSmartSmsAllOf from './egoisdk/SendSmartSmsAllOf';
import SendSmartSmsAllOf1 from './egoisdk/SendSmartSmsAllOf1';
import SendSmartSmsAllOf2 from './egoisdk/SendSmartSmsAllOf2';
import SendSms from './egoisdk/SendSms';
import SendSmsAllOf from './egoisdk/SendSmsAllOf';
import SendSmsAllOf1 from './egoisdk/SendSmsAllOf1';
import SendWebPush from './egoisdk/SendWebPush';
import SendWebPushAllOf from './egoisdk/SendWebPushAllOf';
import SendsCampaignFields from './egoisdk/SendsCampaignFields';
import ServiceUnavailable from './egoisdk/ServiceUnavailable';
import SingleCartObject from './egoisdk/SingleCartObject';
import SingleOrderObject from './egoisdk/SingleOrderObject';
import SmartSmsCampaign from './egoisdk/SmartSmsCampaign';
import SmartSmsCampaignCampaignContent from './egoisdk/SmartSmsCampaignCampaignContent';
import SmartSmsCampaignPatchRequest from './egoisdk/SmartSmsCampaignPatchRequest';
import SmartSmsCampaignPatchRequestCampaignContent from './egoisdk/SmartSmsCampaignPatchRequestCampaignContent';
import SmartSmsCampaignPatchRequestPageContent from './egoisdk/SmartSmsCampaignPatchRequestPageContent';
import SmartSmsSegmentsActionSend from './egoisdk/SmartSmsSegmentsActionSend';
import SmsBouncesCampaignFields from './egoisdk/SmsBouncesCampaignFields';
import SmsBouncesListStatsFields from './egoisdk/SmsBouncesListStatsFields';
import SmsCampaign from './egoisdk/SmsCampaign';
import SmsCampaignPatchRequest from './egoisdk/SmsCampaignPatchRequest';
import SmsCampaignPatchRequestContent from './egoisdk/SmsCampaignPatchRequestContent';
import SmsCampaignTemplate from './egoisdk/SmsCampaignTemplate';
import SmsCampaignTemplateAllOf from './egoisdk/SmsCampaignTemplateAllOf';
import SmsEventsCampaignFields from './egoisdk/SmsEventsCampaignFields';
import SmsEventsListStatsFields from './egoisdk/SmsEventsListStatsFields';
import SmsSegmentsActionSend from './egoisdk/SmsSegmentsActionSend';
import StartAutomationRequest from './egoisdk/StartAutomationRequest';
import StartAutomationResponse from './egoisdk/StartAutomationResponse';
import SubscriptionsListStatsFields from './egoisdk/SubscriptionsListStatsFields';
import SuppressionList from './egoisdk/SuppressionList';
import SuppressionListItems from './egoisdk/SuppressionListItems';
import SuppressionTypeCellphone from './egoisdk/SuppressionTypeCellphone';
import SuppressionTypeCellphoneAllOf from './egoisdk/SuppressionTypeCellphoneAllOf';
import SuppressionTypeCellphoneAllOf1 from './egoisdk/SuppressionTypeCellphoneAllOf1';
import SuppressionTypeEmail from './egoisdk/SuppressionTypeEmail';
import SuppressionTypeEmailAllOf from './egoisdk/SuppressionTypeEmailAllOf';
import SuppressionTypeEmailAllOf1 from './egoisdk/SuppressionTypeEmailAllOf1';
import SuppressionTypeEmailDomain from './egoisdk/SuppressionTypeEmailDomain';
import SuppressionTypeEmailDomainAllOf from './egoisdk/SuppressionTypeEmailDomainAllOf';
import SuppressionTypeEmailDomainAllOf1 from './egoisdk/SuppressionTypeEmailDomainAllOf1';
import SuppressionTypePhone from './egoisdk/SuppressionTypePhone';
import SuppressionTypePhoneAllOf from './egoisdk/SuppressionTypePhoneAllOf';
import SuppressionTypePhoneAllOf1 from './egoisdk/SuppressionTypePhoneAllOf1';
import SuppressionTypeUserEmail from './egoisdk/SuppressionTypeUserEmail';
import SuppressionTypeUserEmailAllOf from './egoisdk/SuppressionTypeUserEmailAllOf';
import SuppressionTypeUserEmailAllOf1 from './egoisdk/SuppressionTypeUserEmailAllOf1';
import Tag from './egoisdk/Tag';
import TagCollection from './egoisdk/TagCollection';
import TagCollection1 from './egoisdk/TagCollection1';
import TagRequest from './egoisdk/TagRequest';
import TagSegment from './egoisdk/TagSegment';
import TagSegmentAllOf from './egoisdk/TagSegmentAllOf';
import TeResponse from './egoisdk/TeResponse';
import TeResponseAllOf from './egoisdk/TeResponseAllOf';
import TooManyRequests from './egoisdk/TooManyRequests';
import Unauthorized from './egoisdk/Unauthorized';
import UniqueFieldInUse from './egoisdk/UniqueFieldInUse';
import UniqueFieldInUseErrors from './egoisdk/UniqueFieldInUseErrors';
import UnprocessableEntity from './egoisdk/UnprocessableEntity';
import UnremovableEntry from './egoisdk/UnremovableEntry';
import UnremovableEntryErrors from './egoisdk/UnremovableEntryErrors';
import UnsubscriptionObject from './egoisdk/UnsubscriptionObject';
import UnsubscriptionsListStatsFields from './egoisdk/UnsubscriptionsListStatsFields';
import UpdateByContact from './egoisdk/UpdateByContact';
import UpdateBySegment from './egoisdk/UpdateBySegment';
import UpdateContactsRequest from './egoisdk/UpdateContactsRequest';
import UpdateForAll from './egoisdk/UpdateForAll';
import UsedInAutomations from './egoisdk/UsedInAutomations';
import UsedInAutomationsErrors from './egoisdk/UsedInAutomationsErrors';
import UsedInRecurringMessages from './egoisdk/UsedInRecurringMessages';
import UsedInRecurringMessagesErrors from './egoisdk/UsedInRecurringMessagesErrors';
import User from './egoisdk/User';
import UserAllOf from './egoisdk/UserAllOf';
import UserCollection from './egoisdk/UserCollection';
import UserPost from './egoisdk/UserPost';
import UserPostAllOf from './egoisdk/UserPostAllOf';
import UserPostRequest from './egoisdk/UserPostRequest';
import UserPostRequestAllOf from './egoisdk/UserPostRequestAllOf';
import VoiceCampaign from './egoisdk/VoiceCampaign';
import VoiceCampaignAllOf from './egoisdk/VoiceCampaignAllOf';
import VoiceCampaignTemplate from './egoisdk/VoiceCampaignTemplate';
import VoiceCampaignTemplateAllOf from './egoisdk/VoiceCampaignTemplateAllOf';
import VoicePatchCampaign from './egoisdk/VoicePatchCampaign';
import VoicePatchCampaignAllOf from './egoisdk/VoicePatchCampaignAllOf';
import WebPushCampaign from './egoisdk/WebPushCampaign';
import WebPushPatchCampaign from './egoisdk/WebPushPatchCampaign';
import WebPushReport from './egoisdk/WebPushReport';
import WebPushReportBrowsersInner from './egoisdk/WebPushReportBrowsersInner';
import WebPushReportBrowsersInnerVersionsInner from './egoisdk/WebPushReportBrowsersInnerVersionsInner';
import WebPushReportBrowsersInnerVersionsInnerAllOf from './egoisdk/WebPushReportBrowsersInnerVersionsInnerAllOf';
import WebPushReportDevicesInner from './egoisdk/WebPushReportDevicesInner';
import WebPushReportDevicesInnerAllOf from './egoisdk/WebPushReportDevicesInnerAllOf';
import WebPushReportOperatingSystemsInner from './egoisdk/WebPushReportOperatingSystemsInner';
import WebPushReportOperatingSystemsInnerVersionsInner from './egoisdk/WebPushReportOperatingSystemsInnerVersionsInner';
import WebPushReportOperatingSystemsInnerVersionsInnerAllOf from './egoisdk/WebPushReportOperatingSystemsInnerVersionsInnerAllOf';
import WebPushReportUrlInner from './egoisdk/WebPushReportUrlInner';
import WebPushReportUrlInnerAllOf from './egoisdk/WebPushReportUrlInnerAllOf';
import WebPushRssCampaign from './egoisdk/WebPushRssCampaign';
import WebPushSite from './egoisdk/WebPushSite';
import WebPushStats from './egoisdk/WebPushStats';
import Webhook from './egoisdk/Webhook';
import WebhookActionSchema from './egoisdk/WebhookActionSchema';
import WebpushActionsInner from './egoisdk/WebpushActionsInner';
import AdvancedReportsApi from './egoiApi/AdvancedReportsApi';
import AutomationsApi from './egoiApi/AutomationsApi';
import CNamesApi from './egoiApi/CNamesApi';
import CampaignGroupsApi from './egoiApi/CampaignGroupsApi';
import CampaignsApi from './egoiApi/CampaignsApi';
import ConnectedSitesApi from './egoiApi/ConnectedSitesApi';
import ContactsApi from './egoiApi/ContactsApi';
import EcommerceApi from './egoiApi/EcommerceApi';
import EmailApi from './egoiApi/EmailApi';
import FieldsApi from './egoiApi/FieldsApi';
import ListsApi from './egoiApi/ListsApi';
import MyAccountApi from './egoiApi/MyAccountApi';
import OperationsApi from './egoiApi/OperationsApi';
import PingApi from './egoiApi/PingApi';
import PushApi from './egoiApi/PushApi';
import ReportsApi from './egoiApi/ReportsApi';
import SegmentsApi from './egoiApi/SegmentsApi';
import SendersApi from './egoiApi/SendersApi';
import SmartSmsApi from './egoiApi/SmartSmsApi';
import SmsApi from './egoiApi/SmsApi';
import SuppressionListApi from './egoiApi/SuppressionListApi';
import TagsApi from './egoiApi/TagsApi';
import TrackEngageApi from './egoiApi/TrackEngageApi';
import UsersApi from './egoiApi/UsersApi';
import UtilitiesApi from './egoiApi/UtilitiesApi';
import VoiceApi from './egoiApi/VoiceApi';
import WebHooksApi from './egoiApi/WebHooksApi';
import WebpushApi from './egoiApi/WebpushApi';


/**
*  # Introduction Welcome to the E-goi Marketing API! &lt;br&gt;&lt;br&gt;This API enables you to integrate, automate, and manage all the marketing functionalities offered by E-goi. With it, you can interact with contact lists, send email campaigns, SMS, push notifications, and much more. &lt;br&gt;&lt;br&gt;Our API is designed to simplify integration in a straightforward, efficient, and secure way, meeting the needs of developers and businesses looking to optimize their digital marketing operations. &lt;br&gt;&lt;br&gt;Explore the documentation to discover all the possibilities and start creating integrations that drive your marketing results. # Getting Started  E-goi can be integrated with many environments and programming languages via our REST API. We&#39;ve created a developer focused portal to give your organization a clear and quick overview of how to integrate with E-goi. The developer portal focuses on scenarios for integration and flow of events. We recommend familiarizing yourself with all of the content in the developer portal, before start using our rest API.  The E-goi  APIv3 is served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.  Request data is passed to the API by POSTing JSON objects to the API endpoints with the appropriate parameters.      BaseURL &#x3D; api.egoiapp.com  # RESTful Services This API supports 5 HTTP methods:  * &lt;b&gt;GET&lt;/b&gt;: The HTTP GET method is used to **read** (or retrieve) a representation of a resource. * &lt;b&gt;POST&lt;/b&gt;: The POST verb is most-often utilized to **create** new resources. * &lt;b&gt;PATCH&lt;/b&gt;: PATCH is used for **modify** capabilities. The PATCH request only needs to contain the changes to the resource, not the complete resource * &lt;b&gt;PUT&lt;/b&gt;: PUT is most-often utilized for **update** capabilities, PUT-ing to a known resource URI with the request body containing the newly-updated representation of the original resource. * &lt;b&gt;DELETE&lt;/b&gt;: DELETE is pretty easy to understand. It is used to **delete** a resource identified by a URI.  # Transport Layer Security (TLS) Transport Layer Security (TLS) is a widely used authentication and encryption protocol that establishes a secure communications channel for data-in-transit while ensuring that the client and server can validate one another.&lt;br&gt; Our API requires TLS 1.2 or TLS 1.3. We recommend &lt;b&gt;TLS 1.3&lt;/b&gt;.&lt;br&gt;&lt;br&gt; &lt;b&gt;TLS 1.3 ciphers&lt;/b&gt; * TLS_AES_256_GCM_SHA384 (0x1302) ECDH x25519 (eq. 3072 bits RSA) FS * TLS_CHACHA20_POLY1305_SHA256 (0x1303) ECDH x25519 (eq. 3072 bits RSA) FS * TLS_AES_128_GCM_SHA256 (0x1301) ECDH x25519 (eq. 3072 bits RSA) FS  &lt;b&gt;TLS 1.2 ciphers&lt;/b&gt; * TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 (0xc030) ECDH x25519 (eq. 3072 bits RSA) FS * TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 (0xc02f) ECDH x25519 (eq. 3072 bits RSA) FS * TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 (0x9f) DH 4096 bits FS * TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 (0x9e) DH 4096 bits FS  # Rate Limits Rate limits are used to control the amount of traffic that is allowed to flow between the client and the server.&lt;br&gt; This is done to prevent abuse and ensure that the API is available to all users.&lt;br&gt; The rate limits are applied to ensure the stability and security of our API and are based on the number of requests made in a given time period.&lt;br&gt; If the rate limit is exceeded, the API will return a 429 status code and the request will be rejected.&lt;br&gt; Each API response includes headers providing real-time rate limit information: * **X-RateLimit-Limit**: The maximum number of requests that the consumer is permitted to make in a given time period. * **X-RateLimit-Remaining**: The number of requests remaining in the current rate limit window. * **X-RateLimit-Reset**: The remaining time in seconds until the rate limit window resets.  # Account Limit The account limit is a rate limit that is applied to the account as a whole.&lt;br&gt; This limit is applied to all requests made by the account, regardless of the client making the request.&lt;br&gt; The account limit is applied to ensure that the account does not exceed the maximum number of requests allowed in a given time period. Each account has an overall usage limit per hour. If the account limit is exceeded, the API will return a 429 status code and the request will be rejected.&lt;br&gt; Each API response includes headers providing real-time rate limit information: * **X-Account-Limit**: The maximum number of requests that the account is permitted to make in a given time period. * **X-Account-Remaining**: The number of requests remaining in the current rate limit window. * **X-Account-Reset**: The remaining time in seconds until the rate limit window resets.   # Authentication  We use a custom authentication method, you will need a apikey that you can find in your account settings. Below you will see a curl example to get your account information:     #!/bin/bash     curl -X GET &#39;https://api.egoiapp.com/my-account&#39; \\     -H &#39;accept: application/json&#39; \\     -H &#39;Apikey: &lt;YOUR_APY_KEY&gt;&#39;  Here you can see a curl Post example with authentication:     #!/bin/bash     curl -X POST &#39;http://api.egoiapp.com/tags&#39; \\     -H &#39;accept: application/json&#39; \\     -H &#39;Apikey: &lt;YOUR_APY_KEY&gt;&#39; \\     -H &#39;Content-Type: application/json&#39; \\     -d &#39;{&#x60;name&#x60;:&#x60;Your custom tag&#x60;,&#x60;color&#x60;:&#x60;#FFFFFF&#x60;}&#39;  # SDK Get started quickly with E-goi with our integration tools. Our SDK is a modern open source library that makes it easy to integrate your application with E-goi services.  * &lt;a href&#x3D;&#39;https://github.com/E-goi/sdk-java&#39;&gt;Java&lt;/a&gt;  * &lt;a href&#x3D;&#39;https://github.com/E-goi/sdk-php&#39;&gt;PHP&lt;/a&gt;  * &lt;a href&#x3D;&#39;https://github.com/E-goi/sdk-python&#39;&gt;Python&lt;/a&gt;  * &lt;a href&#x3D;&#39;https://github.com/E-goi/sdk-ruby&#39;&gt;Ruby&lt;/a&gt;  * &lt;a href&#x3D;&#39;https://github.com/E-goi/sdk-javascript&#39;&gt;Javascript&lt;/a&gt;  * &lt;a href&#x3D;&#39;https://github.com/E-goi/sdk-csharp&#39;&gt;C#&lt;/a&gt;  # Stream Limits Stream limits are security mesures we have to make sure our API have a fair use policy, for this reason, any request that creates or modifies data (**POST**, **PATCH** and **PUT**) is limited to a maximum of **20MB** of content length. If you arrive to this limit in one of your request, you&#39;ll receive a HTTP code **413 (Request Entity Too Large)** and the request will be ignored. To avoid this error in importation&#39;s requests, it&#39;s advised the request&#39;s division in batches that have each one less than 20MB.  # Timeouts Timeouts set a maximum waiting time on a request&#39;s response. Our API, sets a default timeout for each request and when breached, you&#39;ll receive an HTTP **408 (Request Timeout)** error code. You should take into consideration that response times can vary widely based on the complexity of the request, amount of data being analyzed, and the load on the system and workspace at the time of the query. When dealing with such errors, you should first attempt to reduce the complexity and amount of data under analysis, and only then, if problems are still occurring ask for support.  For all these reasons, the default timeout for each request is **10 Seconds** and any request that creates or modifies data (**POST**, **PATCH** and **PUT**) will have a timeout of **60 Seconds**. Specific timeouts may exist for specific requests, these can be found in the request&#39;s documentation.  # Callbacks A callback is an asynchronous API request that originates from the API server and is sent to the client in response to a previous request sent by that client.  The API will make a **POST** request to the address defined in the URL with the information regarding the event of interest and share data related to that event.  &lt;a href&#x3D;&#39;/usecases/callbacks/&#39; target&#x3D;&#39;_blank&#39;&gt;[Go to callbacks documentation]&lt;/a&gt;  ***Note:*** Only http or https protocols are supported in the Url parameter.  &lt;security-definitions/&gt;.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var egoisdk = require('index'); // See note below*.
* var xxxSvc = new egoisdk.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new egoisdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new egoisdk.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new egoisdk.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.1.6RC1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AbstractCampaignSendRequest model constructor.
     * @property {module:egoisdk/AbstractCampaignSendRequest}
     */
    AbstractCampaignSendRequest,

    /**
     * The AbstractCampaignSendRequestSegments model constructor.
     * @property {module:egoisdk/AbstractCampaignSendRequestSegments}
     */
    AbstractCampaignSendRequestSegments,

    /**
     * The AbstractCampaignTemplate model constructor.
     * @property {module:egoisdk/AbstractCampaignTemplate}
     */
    AbstractCampaignTemplate,

    /**
     * The AbstractCellphoneSender model constructor.
     * @property {module:egoisdk/AbstractCellphoneSender}
     */
    AbstractCellphoneSender,

    /**
     * The AbstractCellphoneSenderAllOf model constructor.
     * @property {module:egoisdk/AbstractCellphoneSenderAllOf}
     */
    AbstractCellphoneSenderAllOf,

    /**
     * The AbstractSegment model constructor.
     * @property {module:egoisdk/AbstractSegment}
     */
    AbstractSegment,

    /**
     * The AbstractSendEmail model constructor.
     * @property {module:egoisdk/AbstractSendEmail}
     */
    AbstractSendEmail,

    /**
     * The AbstractSendVoice model constructor.
     * @property {module:egoisdk/AbstractSendVoice}
     */
    AbstractSendVoice,

    /**
     * The AbstractSendVoiceAllOf model constructor.
     * @property {module:egoisdk/AbstractSendVoiceAllOf}
     */
    AbstractSendVoiceAllOf,

    /**
     * The AbstractSendVoiceAllOf1 model constructor.
     * @property {module:egoisdk/AbstractSendVoiceAllOf1}
     */
    AbstractSendVoiceAllOf1,

    /**
     * The AbstractSuppresionList model constructor.
     * @property {module:egoisdk/AbstractSuppresionList}
     */
    AbstractSuppresionList,

    /**
     * The AcceptedResponse model constructor.
     * @property {module:egoisdk/AcceptedResponse}
     */
    AcceptedResponse,

    /**
     * The ActivateContactsAll model constructor.
     * @property {module:egoisdk/ActivateContactsAll}
     */
    ActivateContactsAll,

    /**
     * The ActivateContactsMany model constructor.
     * @property {module:egoisdk/ActivateContactsMany}
     */
    ActivateContactsMany,

    /**
     * The ActivateContactsRequest model constructor.
     * @property {module:egoisdk/ActivateContactsRequest}
     */
    ActivateContactsRequest,

    /**
     * The ActivityCollection model constructor.
     * @property {module:egoisdk/ActivityCollection}
     */
    ActivityCollection,

    /**
     * The AdvancedReport model constructor.
     * @property {module:egoisdk/AdvancedReport}
     */
    AdvancedReport,

    /**
     * The AdvancedReportCampaignsObject model constructor.
     * @property {module:egoisdk/AdvancedReportCampaignsObject}
     */
    AdvancedReportCampaignsObject,

    /**
     * The AdvancedReportContactActivityColumns model constructor.
     * @property {module:egoisdk/AdvancedReportContactActivityColumns}
     */
    AdvancedReportContactActivityColumns,

    /**
     * The AdvancedReportContactActivityOptions model constructor.
     * @property {module:egoisdk/AdvancedReportContactActivityOptions}
     */
    AdvancedReportContactActivityOptions,

    /**
     * The AdvancedReportEmailBouncesColumns model constructor.
     * @property {module:egoisdk/AdvancedReportEmailBouncesColumns}
     */
    AdvancedReportEmailBouncesColumns,

    /**
     * The AdvancedReportEmailBouncesOptions model constructor.
     * @property {module:egoisdk/AdvancedReportEmailBouncesOptions}
     */
    AdvancedReportEmailBouncesOptions,

    /**
     * The AdvancedReportEmailClicksByContactColumns model constructor.
     * @property {module:egoisdk/AdvancedReportEmailClicksByContactColumns}
     */
    AdvancedReportEmailClicksByContactColumns,

    /**
     * The AdvancedReportEmailClicksByContactOptions model constructor.
     * @property {module:egoisdk/AdvancedReportEmailClicksByContactOptions}
     */
    AdvancedReportEmailClicksByContactOptions,

    /**
     * The AdvancedReportEmailClicksByUrlColumns model constructor.
     * @property {module:egoisdk/AdvancedReportEmailClicksByUrlColumns}
     */
    AdvancedReportEmailClicksByUrlColumns,

    /**
     * The AdvancedReportEmailClicksByUrlOptions model constructor.
     * @property {module:egoisdk/AdvancedReportEmailClicksByUrlOptions}
     */
    AdvancedReportEmailClicksByUrlOptions,

    /**
     * The AdvancedReportEmailEventsColumns model constructor.
     * @property {module:egoisdk/AdvancedReportEmailEventsColumns}
     */
    AdvancedReportEmailEventsColumns,

    /**
     * The AdvancedReportEmailEventsOptions model constructor.
     * @property {module:egoisdk/AdvancedReportEmailEventsOptions}
     */
    AdvancedReportEmailEventsOptions,

    /**
     * The AdvancedReportEmailUnsubscriptionsColumns model constructor.
     * @property {module:egoisdk/AdvancedReportEmailUnsubscriptionsColumns}
     */
    AdvancedReportEmailUnsubscriptionsColumns,

    /**
     * The AdvancedReportEmailUnsubscriptionsOptions model constructor.
     * @property {module:egoisdk/AdvancedReportEmailUnsubscriptionsOptions}
     */
    AdvancedReportEmailUnsubscriptionsOptions,

    /**
     * The AdvancedReportFormsInner model constructor.
     * @property {module:egoisdk/AdvancedReportFormsInner}
     */
    AdvancedReportFormsInner,

    /**
     * The AdvancedReportListExtraFieldsInner model constructor.
     * @property {module:egoisdk/AdvancedReportListExtraFieldsInner}
     */
    AdvancedReportListExtraFieldsInner,

    /**
     * The AdvancedReportModels model constructor.
     * @property {module:egoisdk/AdvancedReportModels}
     */
    AdvancedReportModels,

    /**
     * The AdvancedReportRange model constructor.
     * @property {module:egoisdk/AdvancedReportRange}
     */
    AdvancedReportRange,

    /**
     * The AdvancedReportSendsColumns model constructor.
     * @property {module:egoisdk/AdvancedReportSendsColumns}
     */
    AdvancedReportSendsColumns,

    /**
     * The AdvancedReportSendsOptions model constructor.
     * @property {module:egoisdk/AdvancedReportSendsOptions}
     */
    AdvancedReportSendsOptions,

    /**
     * The AdvancedReportSmsBouncesColumns model constructor.
     * @property {module:egoisdk/AdvancedReportSmsBouncesColumns}
     */
    AdvancedReportSmsBouncesColumns,

    /**
     * The AdvancedReportSmsBouncesOptions model constructor.
     * @property {module:egoisdk/AdvancedReportSmsBouncesOptions}
     */
    AdvancedReportSmsBouncesOptions,

    /**
     * The AdvancedReportSmsEventsColumns model constructor.
     * @property {module:egoisdk/AdvancedReportSmsEventsColumns}
     */
    AdvancedReportSmsEventsColumns,

    /**
     * The AdvancedReportSmsEventsOptions model constructor.
     * @property {module:egoisdk/AdvancedReportSmsEventsOptions}
     */
    AdvancedReportSmsEventsOptions,

    /**
     * The AdvancedReportSubscriptionsColumns model constructor.
     * @property {module:egoisdk/AdvancedReportSubscriptionsColumns}
     */
    AdvancedReportSubscriptionsColumns,

    /**
     * The AdvancedReportSubscriptionsOptions model constructor.
     * @property {module:egoisdk/AdvancedReportSubscriptionsOptions}
     */
    AdvancedReportSubscriptionsOptions,

    /**
     * The AdvancedReportUnsubscriptionsColumns model constructor.
     * @property {module:egoisdk/AdvancedReportUnsubscriptionsColumns}
     */
    AdvancedReportUnsubscriptionsColumns,

    /**
     * The AdvancedReportUnsubscriptionsOptions model constructor.
     * @property {module:egoisdk/AdvancedReportUnsubscriptionsOptions}
     */
    AdvancedReportUnsubscriptionsOptions,

    /**
     * The AdvancedReportsCollection model constructor.
     * @property {module:egoisdk/AdvancedReportsCollection}
     */
    AdvancedReportsCollection,

    /**
     * The AdvancedReportsModelsCollection model constructor.
     * @property {module:egoisdk/AdvancedReportsModelsCollection}
     */
    AdvancedReportsModelsCollection,

    /**
     * The AlphanumericCellphoneSender model constructor.
     * @property {module:egoisdk/AlphanumericCellphoneSender}
     */
    AlphanumericCellphoneSender,

    /**
     * The AlphanumericCellphoneSenderPost model constructor.
     * @property {module:egoisdk/AlphanumericCellphoneSenderPost}
     */
    AlphanumericCellphoneSenderPost,

    /**
     * The AlphanumericCellphoneSenderPostAllOf model constructor.
     * @property {module:egoisdk/AlphanumericCellphoneSenderPostAllOf}
     */
    AlphanumericCellphoneSenderPostAllOf,

    /**
     * The AppStructure model constructor.
     * @property {module:egoisdk/AppStructure}
     */
    AppStructure,

    /**
     * The AppStructureList model constructor.
     * @property {module:egoisdk/AppStructureList}
     */
    AppStructureList,

    /**
     * The AttachByContacts model constructor.
     * @property {module:egoisdk/AttachByContacts}
     */
    AttachByContacts,

    /**
     * The AttachByFieldId model constructor.
     * @property {module:egoisdk/AttachByFieldId}
     */
    AttachByFieldId,

    /**
     * The AttachBySegment model constructor.
     * @property {module:egoisdk/AttachBySegment}
     */
    AttachBySegment,

    /**
     * The AttachTagRequest model constructor.
     * @property {module:egoisdk/AttachTagRequest}
     */
    AttachTagRequest,

    /**
     * The AttachTagResponse model constructor.
     * @property {module:egoisdk/AttachTagResponse}
     */
    AttachTagResponse,

    /**
     * The AutomaticSegment model constructor.
     * @property {module:egoisdk/AutomaticSegment}
     */
    AutomaticSegment,

    /**
     * The AutomaticSegmentAllOf model constructor.
     * @property {module:egoisdk/AutomaticSegmentAllOf}
     */
    AutomaticSegmentAllOf,

    /**
     * The Automation model constructor.
     * @property {module:egoisdk/Automation}
     */
    Automation,

    /**
     * The AutomationActions model constructor.
     * @property {module:egoisdk/AutomationActions}
     */
    AutomationActions,

    /**
     * The AutomationActionsAllOf model constructor.
     * @property {module:egoisdk/AutomationActionsAllOf}
     */
    AutomationActionsAllOf,

    /**
     * The AutomationActionsCollection model constructor.
     * @property {module:egoisdk/AutomationActionsCollection}
     */
    AutomationActionsCollection,

    /**
     * The AutomationAllOf model constructor.
     * @property {module:egoisdk/AutomationAllOf}
     */
    AutomationAllOf,

    /**
     * The AutomationCollection model constructor.
     * @property {module:egoisdk/AutomationCollection}
     */
    AutomationCollection,

    /**
     * The AutomationPost model constructor.
     * @property {module:egoisdk/AutomationPost}
     */
    AutomationPost,

    /**
     * The AutomationPostAllOf model constructor.
     * @property {module:egoisdk/AutomationPostAllOf}
     */
    AutomationPostAllOf,

    /**
     * The BadRequest model constructor.
     * @property {module:egoisdk/BadRequest}
     */
    BadRequest,

    /**
     * The BalanceInfo model constructor.
     * @property {module:egoisdk/BalanceInfo}
     */
    BalanceInfo,

    /**
     * The BalanceInfoBalanceInfo model constructor.
     * @property {module:egoisdk/BalanceInfoBalanceInfo}
     */
    BalanceInfoBalanceInfo,

    /**
     * The BaseConflict model constructor.
     * @property {module:egoisdk/BaseConflict}
     */
    BaseConflict,

    /**
     * The BasicProduct model constructor.
     * @property {module:egoisdk/BasicProduct}
     */
    BasicProduct,

    /**
     * The BasicSender model constructor.
     * @property {module:egoisdk/BasicSender}
     */
    BasicSender,

    /**
     * The BillingInfo model constructor.
     * @property {module:egoisdk/BillingInfo}
     */
    BillingInfo,

    /**
     * The BillingInfoAllOf model constructor.
     * @property {module:egoisdk/BillingInfoAllOf}
     */
    BillingInfoAllOf,

    /**
     * The BillingInfoAllOfBillingInfo model constructor.
     * @property {module:egoisdk/BillingInfoAllOfBillingInfo}
     */
    BillingInfoAllOfBillingInfo,

    /**
     * The BillingInfoAllOfBillingInfoCountry model constructor.
     * @property {module:egoisdk/BillingInfoAllOfBillingInfoCountry}
     */
    BillingInfoAllOfBillingInfoCountry,

    /**
     * The BulkActionResponse model constructor.
     * @property {module:egoisdk/BulkActionResponse}
     */
    BulkActionResponse,

    /**
     * The CName model constructor.
     * @property {module:egoisdk/CName}
     */
    CName,

    /**
     * The CNamePost model constructor.
     * @property {module:egoisdk/CNamePost}
     */
    CNamePost,

    /**
     * The CNamesCollection model constructor.
     * @property {module:egoisdk/CNamesCollection}
     */
    CNamesCollection,

    /**
     * The Campaign model constructor.
     * @property {module:egoisdk/Campaign}
     */
    Campaign,

    /**
     * The CampaignEmailBaseContent model constructor.
     * @property {module:egoisdk/CampaignEmailBaseContent}
     */
    CampaignEmailBaseContent,

    /**
     * The CampaignEmailContent model constructor.
     * @property {module:egoisdk/CampaignEmailContent}
     */
    CampaignEmailContent,

    /**
     * The CampaignEmailContentFile model constructor.
     * @property {module:egoisdk/CampaignEmailContentFile}
     */
    CampaignEmailContentFile,

    /**
     * The CampaignEmailContentFileAllOf model constructor.
     * @property {module:egoisdk/CampaignEmailContentFileAllOf}
     */
    CampaignEmailContentFileAllOf,

    /**
     * The CampaignEmailContentHtml model constructor.
     * @property {module:egoisdk/CampaignEmailContentHtml}
     */
    CampaignEmailContentHtml,

    /**
     * The CampaignEmailContentHtmlAllOf model constructor.
     * @property {module:egoisdk/CampaignEmailContentHtmlAllOf}
     */
    CampaignEmailContentHtmlAllOf,

    /**
     * The CampaignEmailContentHtmlPatch model constructor.
     * @property {module:egoisdk/CampaignEmailContentHtmlPatch}
     */
    CampaignEmailContentHtmlPatch,

    /**
     * The CampaignEmailContentHtmlPatchAllOf model constructor.
     * @property {module:egoisdk/CampaignEmailContentHtmlPatchAllOf}
     */
    CampaignEmailContentHtmlPatchAllOf,

    /**
     * The CampaignEmailContentTemplate model constructor.
     * @property {module:egoisdk/CampaignEmailContentTemplate}
     */
    CampaignEmailContentTemplate,

    /**
     * The CampaignEmailContentTemplateAllOf model constructor.
     * @property {module:egoisdk/CampaignEmailContentTemplateAllOf}
     */
    CampaignEmailContentTemplateAllOf,

    /**
     * The CampaignEmailContentWebPage model constructor.
     * @property {module:egoisdk/CampaignEmailContentWebPage}
     */
    CampaignEmailContentWebPage,

    /**
     * The CampaignEmailContentWebPageAllOf model constructor.
     * @property {module:egoisdk/CampaignEmailContentWebPageAllOf}
     */
    CampaignEmailContentWebPageAllOf,

    /**
     * The CampaignEmailRssContent model constructor.
     * @property {module:egoisdk/CampaignEmailRssContent}
     */
    CampaignEmailRssContent,

    /**
     * The CampaignEmailRssContentHtml model constructor.
     * @property {module:egoisdk/CampaignEmailRssContentHtml}
     */
    CampaignEmailRssContentHtml,

    /**
     * The CampaignEmailRssContentHtmlAllOf model constructor.
     * @property {module:egoisdk/CampaignEmailRssContentHtmlAllOf}
     */
    CampaignEmailRssContentHtmlAllOf,

    /**
     * The CampaignEmailScheduleRequest model constructor.
     * @property {module:egoisdk/CampaignEmailScheduleRequest}
     */
    CampaignEmailScheduleRequest,

    /**
     * The CampaignEmailScheduleRequestAllOf model constructor.
     * @property {module:egoisdk/CampaignEmailScheduleRequestAllOf}
     */
    CampaignEmailScheduleRequestAllOf,

    /**
     * The CampaignEmailSendNowRequest model constructor.
     * @property {module:egoisdk/CampaignEmailSendNowRequest}
     */
    CampaignEmailSendNowRequest,

    /**
     * The CampaignEmailSendRequest model constructor.
     * @property {module:egoisdk/CampaignEmailSendRequest}
     */
    CampaignEmailSendRequest,

    /**
     * The CampaignGroup model constructor.
     * @property {module:egoisdk/CampaignGroup}
     */
    CampaignGroup,

    /**
     * The CampaignGroupAllOf model constructor.
     * @property {module:egoisdk/CampaignGroupAllOf}
     */
    CampaignGroupAllOf,

    /**
     * The CampaignGroupCollection model constructor.
     * @property {module:egoisdk/CampaignGroupCollection}
     */
    CampaignGroupCollection,

    /**
     * The CampaignGroupPost model constructor.
     * @property {module:egoisdk/CampaignGroupPost}
     */
    CampaignGroupPost,

    /**
     * The CampaignGroupPostAllOf model constructor.
     * @property {module:egoisdk/CampaignGroupPostAllOf}
     */
    CampaignGroupPostAllOf,

    /**
     * The CampaignHash model constructor.
     * @property {module:egoisdk/CampaignHash}
     */
    CampaignHash,

    /**
     * The CampaignPushContent model constructor.
     * @property {module:egoisdk/CampaignPushContent}
     */
    CampaignPushContent,

    /**
     * The CampaignPushContentTemplate model constructor.
     * @property {module:egoisdk/CampaignPushContentTemplate}
     */
    CampaignPushContentTemplate,

    /**
     * The CampaignPushContentText model constructor.
     * @property {module:egoisdk/CampaignPushContentText}
     */
    CampaignPushContentText,

    /**
     * The CampaignPushScheduleRequest model constructor.
     * @property {module:egoisdk/CampaignPushScheduleRequest}
     */
    CampaignPushScheduleRequest,

    /**
     * The CampaignPushSendRequest model constructor.
     * @property {module:egoisdk/CampaignPushSendRequest}
     */
    CampaignPushSendRequest,

    /**
     * The CampaignScheduleDate model constructor.
     * @property {module:egoisdk/CampaignScheduleDate}
     */
    CampaignScheduleDate,

    /**
     * The CampaignSentLast30Days model constructor.
     * @property {module:egoisdk/CampaignSentLast30Days}
     */
    CampaignSentLast30Days,

    /**
     * The CampaignSentLast30DaysErrors model constructor.
     * @property {module:egoisdk/CampaignSentLast30DaysErrors}
     */
    CampaignSentLast30DaysErrors,

    /**
     * The CampaignSmartSmsHtml model constructor.
     * @property {module:egoisdk/CampaignSmartSmsHtml}
     */
    CampaignSmartSmsHtml,

    /**
     * The CampaignSmartSmsImport model constructor.
     * @property {module:egoisdk/CampaignSmartSmsImport}
     */
    CampaignSmartSmsImport,

    /**
     * The CampaignSmartSmsOptions model constructor.
     * @property {module:egoisdk/CampaignSmartSmsOptions}
     */
    CampaignSmartSmsOptions,

    /**
     * The CampaignSmartSmsPageContent model constructor.
     * @property {module:egoisdk/CampaignSmartSmsPageContent}
     */
    CampaignSmartSmsPageContent,

    /**
     * The CampaignSmartSmsRedirect model constructor.
     * @property {module:egoisdk/CampaignSmartSmsRedirect}
     */
    CampaignSmartSmsRedirect,

    /**
     * The CampaignSmartSmsScheduleRequest model constructor.
     * @property {module:egoisdk/CampaignSmartSmsScheduleRequest}
     */
    CampaignSmartSmsScheduleRequest,

    /**
     * The CampaignSmartSmsSendRequest model constructor.
     * @property {module:egoisdk/CampaignSmartSmsSendRequest}
     */
    CampaignSmartSmsSendRequest,

    /**
     * The CampaignSmsContent model constructor.
     * @property {module:egoisdk/CampaignSmsContent}
     */
    CampaignSmsContent,

    /**
     * The CampaignSmsContentTemplate model constructor.
     * @property {module:egoisdk/CampaignSmsContentTemplate}
     */
    CampaignSmsContentTemplate,

    /**
     * The CampaignSmsContentText model constructor.
     * @property {module:egoisdk/CampaignSmsContentText}
     */
    CampaignSmsContentText,

    /**
     * The CampaignSmsOptions model constructor.
     * @property {module:egoisdk/CampaignSmsOptions}
     */
    CampaignSmsOptions,

    /**
     * The CampaignSmsScheduleRequest model constructor.
     * @property {module:egoisdk/CampaignSmsScheduleRequest}
     */
    CampaignSmsScheduleRequest,

    /**
     * The CampaignSmsSendRequest model constructor.
     * @property {module:egoisdk/CampaignSmsSendRequest}
     */
    CampaignSmsSendRequest,

    /**
     * The CampaignVoiceScheduleRequest model constructor.
     * @property {module:egoisdk/CampaignVoiceScheduleRequest}
     */
    CampaignVoiceScheduleRequest,

    /**
     * The CampaignVoiceSendRequest model constructor.
     * @property {module:egoisdk/CampaignVoiceSendRequest}
     */
    CampaignVoiceSendRequest,

    /**
     * The CampaignWebPushScheduleRequest model constructor.
     * @property {module:egoisdk/CampaignWebPushScheduleRequest}
     */
    CampaignWebPushScheduleRequest,

    /**
     * The CampaignWebPushSendRequest model constructor.
     * @property {module:egoisdk/CampaignWebPushSendRequest}
     */
    CampaignWebPushSendRequest,

    /**
     * The CampaignsCollection model constructor.
     * @property {module:egoisdk/CampaignsCollection}
     */
    CampaignsCollection,

    /**
     * The Cart model constructor.
     * @property {module:egoisdk/Cart}
     */
    Cart,

    /**
     * The CartPatchRequest model constructor.
     * @property {module:egoisdk/CartPatchRequest}
     */
    CartPatchRequest,

    /**
     * The Catalog model constructor.
     * @property {module:egoisdk/Catalog}
     */
    Catalog,

    /**
     * The CatalogCollection model constructor.
     * @property {module:egoisdk/CatalogCollection}
     */
    CatalogCollection,

    /**
     * The CatalogPost model constructor.
     * @property {module:egoisdk/CatalogPost}
     */
    CatalogPost,

    /**
     * The CatalogPostRequest model constructor.
     * @property {module:egoisdk/CatalogPostRequest}
     */
    CatalogPostRequest,

    /**
     * The CellphoneSender model constructor.
     * @property {module:egoisdk/CellphoneSender}
     */
    CellphoneSender,

    /**
     * The CellphoneSenderCollection model constructor.
     * @property {module:egoisdk/CellphoneSenderCollection}
     */
    CellphoneSenderCollection,

    /**
     * The CellphoneSenderPost model constructor.
     * @property {module:egoisdk/CellphoneSenderPost}
     */
    CellphoneSenderPost,

    /**
     * The ClientAlreadyEnabled model constructor.
     * @property {module:egoisdk/ClientAlreadyEnabled}
     */
    ClientAlreadyEnabled,

    /**
     * The ClientAlreadyEnabledErrors model constructor.
     * @property {module:egoisdk/ClientAlreadyEnabledErrors}
     */
    ClientAlreadyEnabledErrors,

    /**
     * The ClientIsBeingEnabled model constructor.
     * @property {module:egoisdk/ClientIsBeingEnabled}
     */
    ClientIsBeingEnabled,

    /**
     * The ClientIsBeingEnabledErrors model constructor.
     * @property {module:egoisdk/ClientIsBeingEnabledErrors}
     */
    ClientIsBeingEnabledErrors,

    /**
     * The CnameExists model constructor.
     * @property {module:egoisdk/CnameExists}
     */
    CnameExists,

    /**
     * The CnameExistsErrors model constructor.
     * @property {module:egoisdk/CnameExistsErrors}
     */
    CnameExistsErrors,

    /**
     * The ComplexContact model constructor.
     * @property {module:egoisdk/ComplexContact}
     */
    ComplexContact,

    /**
     * The ComplexField model constructor.
     * @property {module:egoisdk/ComplexField}
     */
    ComplexField,

    /**
     * The ComplexFieldAllOf model constructor.
     * @property {module:egoisdk/ComplexFieldAllOf}
     */
    ComplexFieldAllOf,

    /**
     * The ComplexList model constructor.
     * @property {module:egoisdk/ComplexList}
     */
    ComplexList,

    /**
     * The ComplexListAllOf model constructor.
     * @property {module:egoisdk/ComplexListAllOf}
     */
    ComplexListAllOf,

    /**
     * The ComplexListAllOfStats model constructor.
     * @property {module:egoisdk/ComplexListAllOfStats}
     */
    ComplexListAllOfStats,

    /**
     * The ComplexUser model constructor.
     * @property {module:egoisdk/ComplexUser}
     */
    ComplexUser,

    /**
     * The ComplexUserAllOf model constructor.
     * @property {module:egoisdk/ComplexUserAllOf}
     */
    ComplexUserAllOf,

    /**
     * The ComplexUserPost model constructor.
     * @property {module:egoisdk/ComplexUserPost}
     */
    ComplexUserPost,

    /**
     * The Conflict model constructor.
     * @property {module:egoisdk/Conflict}
     */
    Conflict,

    /**
     * The ConflictAllOf model constructor.
     * @property {module:egoisdk/ConflictAllOf}
     */
    ConflictAllOf,

    /**
     * The ConnectedSitesDomain model constructor.
     * @property {module:egoisdk/ConnectedSitesDomain}
     */
    ConnectedSitesDomain,

    /**
     * The ConnectedSitesDomainDetail model constructor.
     * @property {module:egoisdk/ConnectedSitesDomainDetail}
     */
    ConnectedSitesDomainDetail,

    /**
     * The ConnectedSitesEmbedForm model constructor.
     * @property {module:egoisdk/ConnectedSitesEmbedForm}
     */
    ConnectedSitesEmbedForm,

    /**
     * The ConnectedSitesGeneralProductAppDetail model constructor.
     * @property {module:egoisdk/ConnectedSitesGeneralProductAppDetail}
     */
    ConnectedSitesGeneralProductAppDetail,

    /**
     * The ConnectedSitesGeneralProductAppDetailGlobal model constructor.
     * @property {module:egoisdk/ConnectedSitesGeneralProductAppDetailGlobal}
     */
    ConnectedSitesGeneralProductAppDetailGlobal,

    /**
     * The ConnectedSitesGeneralProductFormDetail model constructor.
     * @property {module:egoisdk/ConnectedSitesGeneralProductFormDetail}
     */
    ConnectedSitesGeneralProductFormDetail,

    /**
     * The ConnectedSitesGeneralProductFormDetailGlobal model constructor.
     * @property {module:egoisdk/ConnectedSitesGeneralProductFormDetailGlobal}
     */
    ConnectedSitesGeneralProductFormDetailGlobal,

    /**
     * The ConnectedSitesGeneralProductTEDetailGlobal model constructor.
     * @property {module:egoisdk/ConnectedSitesGeneralProductTEDetailGlobal}
     */
    ConnectedSitesGeneralProductTEDetailGlobal,

    /**
     * The ConnectedSitesProductEmbedFormDetail model constructor.
     * @property {module:egoisdk/ConnectedSitesProductEmbedFormDetail}
     */
    ConnectedSitesProductEmbedFormDetail,

    /**
     * The ConnectedSitesProducts model constructor.
     * @property {module:egoisdk/ConnectedSitesProducts}
     */
    ConnectedSitesProducts,

    /**
     * The Contact model constructor.
     * @property {module:egoisdk/Contact}
     */
    Contact,

    /**
     * The Contact1 model constructor.
     * @property {module:egoisdk/Contact1}
     */
    Contact1,

    /**
     * The Contact2 model constructor.
     * @property {module:egoisdk/Contact2}
     */
    Contact2,

    /**
     * The ContactActivity model constructor.
     * @property {module:egoisdk/ContactActivity}
     */
    ContactActivity,

    /**
     * The ContactActivityAbstractActionsWithAutomations model constructor.
     * @property {module:egoisdk/ContactActivityAbstractActionsWithAutomations}
     */
    ContactActivityAbstractActionsWithAutomations,

    /**
     * The ContactActivityAbstractActionsWithCampaign model constructor.
     * @property {module:egoisdk/ContactActivityAbstractActionsWithCampaign}
     */
    ContactActivityAbstractActionsWithCampaign,

    /**
     * The ContactActivityAbstractActionsWithData model constructor.
     * @property {module:egoisdk/ContactActivityAbstractActionsWithData}
     */
    ContactActivityAbstractActionsWithData,

    /**
     * The ContactActivityAbstractActionsWithTags model constructor.
     * @property {module:egoisdk/ContactActivityAbstractActionsWithTags}
     */
    ContactActivityAbstractActionsWithTags,

    /**
     * The ContactActivityActivitiesFields model constructor.
     * @property {module:egoisdk/ContactActivityActivitiesFields}
     */
    ContactActivityActivitiesFields,

    /**
     * The ContactActivityClick model constructor.
     * @property {module:egoisdk/ContactActivityClick}
     */
    ContactActivityClick,

    /**
     * The ContactActivityClickAllOf model constructor.
     * @property {module:egoisdk/ContactActivityClickAllOf}
     */
    ContactActivityClickAllOf,

    /**
     * The ContactActivityClickAllOfActionData model constructor.
     * @property {module:egoisdk/ContactActivityClickAllOfActionData}
     */
    ContactActivityClickAllOfActionData,

    /**
     * The ContactAdvertisingPost model constructor.
     * @property {module:egoisdk/ContactAdvertisingPost}
     */
    ContactAdvertisingPost,

    /**
     * The ContactAdvertisingPostSchema model constructor.
     * @property {module:egoisdk/ContactAdvertisingPostSchema}
     */
    ContactAdvertisingPostSchema,

    /**
     * The ContactAdvertisingPostSchemaAdvertising model constructor.
     * @property {module:egoisdk/ContactAdvertisingPostSchemaAdvertising}
     */
    ContactAdvertisingPostSchemaAdvertising,

    /**
     * The ContactAutomationsActivity model constructor.
     * @property {module:egoisdk/ContactAutomationsActivity}
     */
    ContactAutomationsActivity,

    /**
     * The ContactAutomationsActivityAllOf model constructor.
     * @property {module:egoisdk/ContactAutomationsActivityAllOf}
     */
    ContactAutomationsActivityAllOf,

    /**
     * The ContactAutomationsActivityAllOfActionData model constructor.
     * @property {module:egoisdk/ContactAutomationsActivityAllOfActionData}
     */
    ContactAutomationsActivityAllOfActionData,

    /**
     * The ContactBaseExtra model constructor.
     * @property {module:egoisdk/ContactBaseExtra}
     */
    ContactBaseExtra,

    /**
     * The ContactBaseExtraBulk model constructor.
     * @property {module:egoisdk/ContactBaseExtraBulk}
     */
    ContactBaseExtraBulk,

    /**
     * The ContactBaseExtraFull model constructor.
     * @property {module:egoisdk/ContactBaseExtraFull}
     */
    ContactBaseExtraFull,

    /**
     * The ContactBaseExtraPost model constructor.
     * @property {module:egoisdk/ContactBaseExtraPost}
     */
    ContactBaseExtraPost,

    /**
     * The ContactBaseFieldsBulkSchema model constructor.
     * @property {module:egoisdk/ContactBaseFieldsBulkSchema}
     */
    ContactBaseFieldsBulkSchema,

    /**
     * The ContactBaseFieldsBulkSchemaBase model constructor.
     * @property {module:egoisdk/ContactBaseFieldsBulkSchemaBase}
     */
    ContactBaseFieldsBulkSchemaBase,

    /**
     * The ContactBaseFieldsPostSchema model constructor.
     * @property {module:egoisdk/ContactBaseFieldsPostSchema}
     */
    ContactBaseFieldsPostSchema,

    /**
     * The ContactBaseFieldsPostSchemaBase model constructor.
     * @property {module:egoisdk/ContactBaseFieldsPostSchemaBase}
     */
    ContactBaseFieldsPostSchemaBase,

    /**
     * The ContactBaseFieldsSchema model constructor.
     * @property {module:egoisdk/ContactBaseFieldsSchema}
     */
    ContactBaseFieldsSchema,

    /**
     * The ContactBaseFieldsSchemaBase model constructor.
     * @property {module:egoisdk/ContactBaseFieldsSchemaBase}
     */
    ContactBaseFieldsSchemaBase,

    /**
     * The ContactBaseFieldsWithIdSchema model constructor.
     * @property {module:egoisdk/ContactBaseFieldsWithIdSchema}
     */
    ContactBaseFieldsWithIdSchema,

    /**
     * The ContactBaseFieldsWithIdSchemaBase model constructor.
     * @property {module:egoisdk/ContactBaseFieldsWithIdSchemaBase}
     */
    ContactBaseFieldsWithIdSchemaBase,

    /**
     * The ContactBaseStatusExtra model constructor.
     * @property {module:egoisdk/ContactBaseStatusExtra}
     */
    ContactBaseStatusExtra,

    /**
     * The ContactBaseStatusExtraBulk model constructor.
     * @property {module:egoisdk/ContactBaseStatusExtraBulk}
     */
    ContactBaseStatusExtraBulk,

    /**
     * The ContactBaseStatusExtraNoRemoved model constructor.
     * @property {module:egoisdk/ContactBaseStatusExtraNoRemoved}
     */
    ContactBaseStatusExtraNoRemoved,

    /**
     * The ContactBaseWithStatusFieldsBulkSchema model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusFieldsBulkSchema}
     */
    ContactBaseWithStatusFieldsBulkSchema,

    /**
     * The ContactBaseWithStatusFieldsBulkSchemaBase model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusFieldsBulkSchemaBase}
     */
    ContactBaseWithStatusFieldsBulkSchemaBase,

    /**
     * The ContactBaseWithStatusFieldsNoTokensSchema model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusFieldsNoTokensSchema}
     */
    ContactBaseWithStatusFieldsNoTokensSchema,

    /**
     * The ContactBaseWithStatusFieldsNoTokensSchemaBase model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusFieldsNoTokensSchemaBase}
     */
    ContactBaseWithStatusFieldsNoTokensSchemaBase,

    /**
     * The ContactBaseWithStatusFieldsSchema model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusFieldsSchema}
     */
    ContactBaseWithStatusFieldsSchema,

    /**
     * The ContactBaseWithStatusFieldsSchemaBase model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusFieldsSchemaBase}
     */
    ContactBaseWithStatusFieldsSchemaBase,

    /**
     * The ContactBaseWithStatusNoRemovedFieldsSchema model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchema}
     */
    ContactBaseWithStatusNoRemovedFieldsSchema,

    /**
     * The ContactBaseWithStatusNoRemovedFieldsSchemaBase model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBase}
     */
    ContactBaseWithStatusNoRemovedFieldsSchemaBase,

    /**
     * The ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner}
     */
    ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenAndroidInner,

    /**
     * The ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner model constructor.
     * @property {module:egoisdk/ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner}
     */
    ContactBaseWithStatusNoRemovedFieldsSchemaBasePushTokenIosInner,

    /**
     * The ContactBulk model constructor.
     * @property {module:egoisdk/ContactBulk}
     */
    ContactBulk,

    /**
     * The ContactBulkFile model constructor.
     * @property {module:egoisdk/ContactBulkFile}
     */
    ContactBulkFile,

    /**
     * The ContactBulkFileAllOf model constructor.
     * @property {module:egoisdk/ContactBulkFileAllOf}
     */
    ContactBulkFileAllOf,

    /**
     * The ContactBulkFileAllOf1 model constructor.
     * @property {module:egoisdk/ContactBulkFileAllOf1}
     */
    ContactBulkFileAllOf1,

    /**
     * The ContactBulkFileAllOf2 model constructor.
     * @property {module:egoisdk/ContactBulkFileAllOf2}
     */
    ContactBulkFileAllOf2,

    /**
     * The ContactBulkFileAllOf3 model constructor.
     * @property {module:egoisdk/ContactBulkFileAllOf3}
     */
    ContactBulkFileAllOf3,

    /**
     * The ContactByFieldFieldsPostSchema model constructor.
     * @property {module:egoisdk/ContactByFieldFieldsPostSchema}
     */
    ContactByFieldFieldsPostSchema,

    /**
     * The ContactByFieldFieldsPostSchemaCompareField model constructor.
     * @property {module:egoisdk/ContactByFieldFieldsPostSchemaCompareField}
     */
    ContactByFieldFieldsPostSchemaCompareField,

    /**
     * The ContactCampaignActivity model constructor.
     * @property {module:egoisdk/ContactCampaignActivity}
     */
    ContactCampaignActivity,

    /**
     * The ContactCampaignActivityAllOf model constructor.
     * @property {module:egoisdk/ContactCampaignActivityAllOf}
     */
    ContactCampaignActivityAllOf,

    /**
     * The ContactCampaignActivityAllOfActionData model constructor.
     * @property {module:egoisdk/ContactCampaignActivityAllOfActionData}
     */
    ContactCampaignActivityAllOfActionData,

    /**
     * The ContactCollection model constructor.
     * @property {module:egoisdk/ContactCollection}
     */
    ContactCollection,

    /**
     * The ContactCompareFieldPost model constructor.
     * @property {module:egoisdk/ContactCompareFieldPost}
     */
    ContactCompareFieldPost,

    /**
     * The ContactExportRequest model constructor.
     * @property {module:egoisdk/ContactExportRequest}
     */
    ContactExportRequest,

    /**
     * The ContactExtraFieldCellphone model constructor.
     * @property {module:egoisdk/ContactExtraFieldCellphone}
     */
    ContactExtraFieldCellphone,

    /**
     * The ContactExtraFieldCellphoneBulk model constructor.
     * @property {module:egoisdk/ContactExtraFieldCellphoneBulk}
     */
    ContactExtraFieldCellphoneBulk,

    /**
     * The ContactExtraFieldDate model constructor.
     * @property {module:egoisdk/ContactExtraFieldDate}
     */
    ContactExtraFieldDate,

    /**
     * The ContactExtraFieldEmail model constructor.
     * @property {module:egoisdk/ContactExtraFieldEmail}
     */
    ContactExtraFieldEmail,

    /**
     * The ContactExtraFieldEmailBulk model constructor.
     * @property {module:egoisdk/ContactExtraFieldEmailBulk}
     */
    ContactExtraFieldEmailBulk,

    /**
     * The ContactExtraFieldNumber model constructor.
     * @property {module:egoisdk/ContactExtraFieldNumber}
     */
    ContactExtraFieldNumber,

    /**
     * The ContactExtraFieldOptions model constructor.
     * @property {module:egoisdk/ContactExtraFieldOptions}
     */
    ContactExtraFieldOptions,

    /**
     * The ContactExtraFieldPhone model constructor.
     * @property {module:egoisdk/ContactExtraFieldPhone}
     */
    ContactExtraFieldPhone,

    /**
     * The ContactExtraFieldPhoneBulk model constructor.
     * @property {module:egoisdk/ContactExtraFieldPhoneBulk}
     */
    ContactExtraFieldPhoneBulk,

    /**
     * The ContactExtraFieldText model constructor.
     * @property {module:egoisdk/ContactExtraFieldText}
     */
    ContactExtraFieldText,

    /**
     * The ContactExtraFields model constructor.
     * @property {module:egoisdk/ContactExtraFields}
     */
    ContactExtraFields,

    /**
     * The ContactExtraFieldsBulk model constructor.
     * @property {module:egoisdk/ContactExtraFieldsBulk}
     */
    ContactExtraFieldsBulk,

    /**
     * The ContactExtraFieldsBulkSchema model constructor.
     * @property {module:egoisdk/ContactExtraFieldsBulkSchema}
     */
    ContactExtraFieldsBulkSchema,

    /**
     * The ContactExtraFieldsSchema model constructor.
     * @property {module:egoisdk/ContactExtraFieldsSchema}
     */
    ContactExtraFieldsSchema,

    /**
     * The ContactFieldIdBaseExtraPost model constructor.
     * @property {module:egoisdk/ContactFieldIdBaseExtraPost}
     */
    ContactFieldIdBaseExtraPost,

    /**
     * The ContactFieldMappingFileBulkSchema model constructor.
     * @property {module:egoisdk/ContactFieldMappingFileBulkSchema}
     */
    ContactFieldMappingFileBulkSchema,

    /**
     * The ContactForgetRequest model constructor.
     * @property {module:egoisdk/ContactForgetRequest}
     */
    ContactForgetRequest,

    /**
     * The ContactInsideBase model constructor.
     * @property {module:egoisdk/ContactInsideBase}
     */
    ContactInsideBase,

    /**
     * The ContactInsideBaseBulk model constructor.
     * @property {module:egoisdk/ContactInsideBaseBulk}
     */
    ContactInsideBaseBulk,

    /**
     * The ContactInsideBasePost model constructor.
     * @property {module:egoisdk/ContactInsideBasePost}
     */
    ContactInsideBasePost,

    /**
     * The ContactInsideBaseWithId model constructor.
     * @property {module:egoisdk/ContactInsideBaseWithId}
     */
    ContactInsideBaseWithId,

    /**
     * The ContactOtherActivity model constructor.
     * @property {module:egoisdk/ContactOtherActivity}
     */
    ContactOtherActivity,

    /**
     * The ContactReferrerPost model constructor.
     * @property {module:egoisdk/ContactReferrerPost}
     */
    ContactReferrerPost,

    /**
     * The ContactReferrerPostSchema model constructor.
     * @property {module:egoisdk/ContactReferrerPostSchema}
     */
    ContactReferrerPostSchema,

    /**
     * The ContactReferrerPostSchemaReferrer model constructor.
     * @property {module:egoisdk/ContactReferrerPostSchemaReferrer}
     */
    ContactReferrerPostSchemaReferrer,

    /**
     * The ContactSearchResponse model constructor.
     * @property {module:egoisdk/ContactSearchResponse}
     */
    ContactSearchResponse,

    /**
     * The ContactStats model constructor.
     * @property {module:egoisdk/ContactStats}
     */
    ContactStats,

    /**
     * The ContactStatsEmailStats model constructor.
     * @property {module:egoisdk/ContactStatsEmailStats}
     */
    ContactStatsEmailStats,

    /**
     * The ContactStatsPushStats model constructor.
     * @property {module:egoisdk/ContactStatsPushStats}
     */
    ContactStatsPushStats,

    /**
     * The ContactStatsSmsStats model constructor.
     * @property {module:egoisdk/ContactStatsSmsStats}
     */
    ContactStatsSmsStats,

    /**
     * The ContactStatsTrafficStats model constructor.
     * @property {module:egoisdk/ContactStatsTrafficStats}
     */
    ContactStatsTrafficStats,

    /**
     * The ContactStatsTrafficStatsAdvertising model constructor.
     * @property {module:egoisdk/ContactStatsTrafficStatsAdvertising}
     */
    ContactStatsTrafficStatsAdvertising,

    /**
     * The ContactStatsTrafficStatsReferrer model constructor.
     * @property {module:egoisdk/ContactStatsTrafficStatsReferrer}
     */
    ContactStatsTrafficStatsReferrer,

    /**
     * The ContactStatsTrafficStatsUtm model constructor.
     * @property {module:egoisdk/ContactStatsTrafficStatsUtm}
     */
    ContactStatsTrafficStatsUtm,

    /**
     * The ContactStatsVoiceStats model constructor.
     * @property {module:egoisdk/ContactStatsVoiceStats}
     */
    ContactStatsVoiceStats,

    /**
     * The ContactStatsWebpushStats model constructor.
     * @property {module:egoisdk/ContactStatsWebpushStats}
     */
    ContactStatsWebpushStats,

    /**
     * The ContactStatusFieldsBulkSchema model constructor.
     * @property {module:egoisdk/ContactStatusFieldsBulkSchema}
     */
    ContactStatusFieldsBulkSchema,

    /**
     * The ContactStatusFieldsSchema model constructor.
     * @property {module:egoisdk/ContactStatusFieldsSchema}
     */
    ContactStatusFieldsSchema,

    /**
     * The ContactTagActivity model constructor.
     * @property {module:egoisdk/ContactTagActivity}
     */
    ContactTagActivity,

    /**
     * The ContactTagActivityAllOf model constructor.
     * @property {module:egoisdk/ContactTagActivityAllOf}
     */
    ContactTagActivityAllOf,

    /**
     * The ContactTagActivityAllOfActionData model constructor.
     * @property {module:egoisdk/ContactTagActivityAllOfActionData}
     */
    ContactTagActivityAllOfActionData,

    /**
     * The ContactTags model constructor.
     * @property {module:egoisdk/ContactTags}
     */
    ContactTags,

    /**
     * The ContactTagsBulk model constructor.
     * @property {module:egoisdk/ContactTagsBulk}
     */
    ContactTagsBulk,

    /**
     * The ContactUtmPost model constructor.
     * @property {module:egoisdk/ContactUtmPost}
     */
    ContactUtmPost,

    /**
     * The ContactUtmPostSchema model constructor.
     * @property {module:egoisdk/ContactUtmPostSchema}
     */
    ContactUtmPostSchema,

    /**
     * The ContactUtmPostSchemaUtm model constructor.
     * @property {module:egoisdk/ContactUtmPostSchemaUtm}
     */
    ContactUtmPostSchemaUtm,

    /**
     * The ContactUtmReferrerAdvertisingPost model constructor.
     * @property {module:egoisdk/ContactUtmReferrerAdvertisingPost}
     */
    ContactUtmReferrerAdvertisingPost,

    /**
     * The ContactsActionUpdateContactsSchema model constructor.
     * @property {module:egoisdk/ContactsActionUpdateContactsSchema}
     */
    ContactsActionUpdateContactsSchema,

    /**
     * The ContentVoice model constructor.
     * @property {module:egoisdk/ContentVoice}
     */
    ContentVoice,

    /**
     * The ContentVoiceAudio model constructor.
     * @property {module:egoisdk/ContentVoiceAudio}
     */
    ContentVoiceAudio,

    /**
     * The ContentVoicePatch model constructor.
     * @property {module:egoisdk/ContentVoicePatch}
     */
    ContentVoicePatch,

    /**
     * The ContentVoiceTemplate model constructor.
     * @property {module:egoisdk/ContentVoiceTemplate}
     */
    ContentVoiceTemplate,

    /**
     * The Country model constructor.
     * @property {module:egoisdk/Country}
     */
    Country,

    /**
     * The CountryCollection model constructor.
     * @property {module:egoisdk/CountryCollection}
     */
    CountryCollection,

    /**
     * The CreateCartResponse model constructor.
     * @property {module:egoisdk/CreateCartResponse}
     */
    CreateCartResponse,

    /**
     * The CreateContactResponse model constructor.
     * @property {module:egoisdk/CreateContactResponse}
     */
    CreateContactResponse,

    /**
     * The CreateOrder model constructor.
     * @property {module:egoisdk/CreateOrder}
     */
    CreateOrder,

    /**
     * The CreateOrderResponse model constructor.
     * @property {module:egoisdk/CreateOrderResponse}
     */
    CreateOrderResponse,

    /**
     * The CreateSuppressionListRequest model constructor.
     * @property {module:egoisdk/CreateSuppressionListRequest}
     */
    CreateSuppressionListRequest,

    /**
     * The DeactivateContactsAll model constructor.
     * @property {module:egoisdk/DeactivateContactsAll}
     */
    DeactivateContactsAll,

    /**
     * The DeactivateContactsMany model constructor.
     * @property {module:egoisdk/DeactivateContactsMany}
     */
    DeactivateContactsMany,

    /**
     * The DeactivateContactsRequest model constructor.
     * @property {module:egoisdk/DeactivateContactsRequest}
     */
    DeactivateContactsRequest,

    /**
     * The DeleteCampaignsConflict model constructor.
     * @property {module:egoisdk/DeleteCampaignsConflict}
     */
    DeleteCampaignsConflict,

    /**
     * The DeleteFieldsConflict model constructor.
     * @property {module:egoisdk/DeleteFieldsConflict}
     */
    DeleteFieldsConflict,

    /**
     * The DeleteListsConflict model constructor.
     * @property {module:egoisdk/DeleteListsConflict}
     */
    DeleteListsConflict,

    /**
     * The DeleteListsConflictsErrors model constructor.
     * @property {module:egoisdk/DeleteListsConflictsErrors}
     */
    DeleteListsConflictsErrors,

    /**
     * The DeleteSegmentsConflict model constructor.
     * @property {module:egoisdk/DeleteSegmentsConflict}
     */
    DeleteSegmentsConflict,

    /**
     * The DeleteSegmentsConflictsErrors model constructor.
     * @property {module:egoisdk/DeleteSegmentsConflictsErrors}
     */
    DeleteSegmentsConflictsErrors,

    /**
     * The DeleteSuppressionListConflictsErrors model constructor.
     * @property {module:egoisdk/DeleteSuppressionListConflictsErrors}
     */
    DeleteSuppressionListConflictsErrors,

    /**
     * The DetachByContacts model constructor.
     * @property {module:egoisdk/DetachByContacts}
     */
    DetachByContacts,

    /**
     * The DetachByFieldId model constructor.
     * @property {module:egoisdk/DetachByFieldId}
     */
    DetachByFieldId,

    /**
     * The DetachBySegment model constructor.
     * @property {module:egoisdk/DetachBySegment}
     */
    DetachBySegment,

    /**
     * The DetachTagRequest model constructor.
     * @property {module:egoisdk/DetachTagRequest}
     */
    DetachTagRequest,

    /**
     * The Domain model constructor.
     * @property {module:egoisdk/Domain}
     */
    Domain,

    /**
     * The DomainAlreadyDefined model constructor.
     * @property {module:egoisdk/DomainAlreadyDefined}
     */
    DomainAlreadyDefined,

    /**
     * The DomainAlreadyDefinedErrors model constructor.
     * @property {module:egoisdk/DomainAlreadyDefinedErrors}
     */
    DomainAlreadyDefinedErrors,

    /**
     * The DomainCollection model constructor.
     * @property {module:egoisdk/DomainCollection}
     */
    DomainCollection,

    /**
     * The DomainListRequired model constructor.
     * @property {module:egoisdk/DomainListRequired}
     */
    DomainListRequired,

    /**
     * The DomainListRequiredErrors model constructor.
     * @property {module:egoisdk/DomainListRequiredErrors}
     */
    DomainListRequiredErrors,

    /**
     * The EmailBouncesCampaignFields model constructor.
     * @property {module:egoisdk/EmailBouncesCampaignFields}
     */
    EmailBouncesCampaignFields,

    /**
     * The EmailBouncesListStatsFields model constructor.
     * @property {module:egoisdk/EmailBouncesListStatsFields}
     */
    EmailBouncesListStatsFields,

    /**
     * The EmailCampaignCreate model constructor.
     * @property {module:egoisdk/EmailCampaignCreate}
     */
    EmailCampaignCreate,

    /**
     * The EmailCampaignPatch model constructor.
     * @property {module:egoisdk/EmailCampaignPatch}
     */
    EmailCampaignPatch,

    /**
     * The EmailCampaignTemplate model constructor.
     * @property {module:egoisdk/EmailCampaignTemplate}
     */
    EmailCampaignTemplate,

    /**
     * The EmailCampaignTemplateAllOf model constructor.
     * @property {module:egoisdk/EmailCampaignTemplateAllOf}
     */
    EmailCampaignTemplateAllOf,

    /**
     * The EmailCampaignTemplateAllOfReplyToData model constructor.
     * @property {module:egoisdk/EmailCampaignTemplateAllOfReplyToData}
     */
    EmailCampaignTemplateAllOfReplyToData,

    /**
     * The EmailCampaignTemplateAllOfSenderData model constructor.
     * @property {module:egoisdk/EmailCampaignTemplateAllOfSenderData}
     */
    EmailCampaignTemplateAllOfSenderData,

    /**
     * The EmailClicksByContactCampaignFields model constructor.
     * @property {module:egoisdk/EmailClicksByContactCampaignFields}
     */
    EmailClicksByContactCampaignFields,

    /**
     * The EmailClicksByContactListStatsFields model constructor.
     * @property {module:egoisdk/EmailClicksByContactListStatsFields}
     */
    EmailClicksByContactListStatsFields,

    /**
     * The EmailClicksByUrlCampaignFields model constructor.
     * @property {module:egoisdk/EmailClicksByUrlCampaignFields}
     */
    EmailClicksByUrlCampaignFields,

    /**
     * The EmailClicksByUrlListStatsFields model constructor.
     * @property {module:egoisdk/EmailClicksByUrlListStatsFields}
     */
    EmailClicksByUrlListStatsFields,

    /**
     * The EmailEventsCampaignFields model constructor.
     * @property {module:egoisdk/EmailEventsCampaignFields}
     */
    EmailEventsCampaignFields,

    /**
     * The EmailEventsListStatsFields model constructor.
     * @property {module:egoisdk/EmailEventsListStatsFields}
     */
    EmailEventsListStatsFields,

    /**
     * The EmailReport model constructor.
     * @property {module:egoisdk/EmailReport}
     */
    EmailReport,

    /**
     * The EmailReportAllOf model constructor.
     * @property {module:egoisdk/EmailReportAllOf}
     */
    EmailReportAllOf,

    /**
     * The EmailReportByDate model constructor.
     * @property {module:egoisdk/EmailReportByDate}
     */
    EmailReportByDate,

    /**
     * The EmailReportByDateDateInner model constructor.
     * @property {module:egoisdk/EmailReportByDateDateInner}
     */
    EmailReportByDateDateInner,

    /**
     * The EmailReportByDomain model constructor.
     * @property {module:egoisdk/EmailReportByDomain}
     */
    EmailReportByDomain,

    /**
     * The EmailReportByDomainDomainInner model constructor.
     * @property {module:egoisdk/EmailReportByDomainDomainInner}
     */
    EmailReportByDomainDomainInner,

    /**
     * The EmailReportByEcommerce model constructor.
     * @property {module:egoisdk/EmailReportByEcommerce}
     */
    EmailReportByEcommerce,

    /**
     * The EmailReportByEcommerceEcommerce model constructor.
     * @property {module:egoisdk/EmailReportByEcommerceEcommerce}
     */
    EmailReportByEcommerceEcommerce,

    /**
     * The EmailReportByHour model constructor.
     * @property {module:egoisdk/EmailReportByHour}
     */
    EmailReportByHour,

    /**
     * The EmailReportByHourHourInner model constructor.
     * @property {module:egoisdk/EmailReportByHourHourInner}
     */
    EmailReportByHourHourInner,

    /**
     * The EmailReportByLocation model constructor.
     * @property {module:egoisdk/EmailReportByLocation}
     */
    EmailReportByLocation,

    /**
     * The EmailReportByLocationLocationInner model constructor.
     * @property {module:egoisdk/EmailReportByLocationLocationInner}
     */
    EmailReportByLocationLocationInner,

    /**
     * The EmailReportByReader model constructor.
     * @property {module:egoisdk/EmailReportByReader}
     */
    EmailReportByReader,

    /**
     * The EmailReportByReaderReaderInner model constructor.
     * @property {module:egoisdk/EmailReportByReaderReaderInner}
     */
    EmailReportByReaderReaderInner,

    /**
     * The EmailReportByUrl model constructor.
     * @property {module:egoisdk/EmailReportByUrl}
     */
    EmailReportByUrl,

    /**
     * The EmailReportByUrlUrlInner model constructor.
     * @property {module:egoisdk/EmailReportByUrlUrlInner}
     */
    EmailReportByUrlUrlInner,

    /**
     * The EmailReportByWeekday model constructor.
     * @property {module:egoisdk/EmailReportByWeekday}
     */
    EmailReportByWeekday,

    /**
     * The EmailReportByWeekdayWeekdayInner model constructor.
     * @property {module:egoisdk/EmailReportByWeekdayWeekdayInner}
     */
    EmailReportByWeekdayWeekdayInner,

    /**
     * The EmailReportOverall model constructor.
     * @property {module:egoisdk/EmailReportOverall}
     */
    EmailReportOverall,

    /**
     * The EmailReportOverallOverall model constructor.
     * @property {module:egoisdk/EmailReportOverallOverall}
     */
    EmailReportOverallOverall,

    /**
     * The EmailRssCampaignCreate model constructor.
     * @property {module:egoisdk/EmailRssCampaignCreate}
     */
    EmailRssCampaignCreate,

    /**
     * The EmailSendSegment model constructor.
     * @property {module:egoisdk/EmailSendSegment}
     */
    EmailSendSegment,

    /**
     * The EmailSender model constructor.
     * @property {module:egoisdk/EmailSender}
     */
    EmailSender,

    /**
     * The EmailSenderAllOf model constructor.
     * @property {module:egoisdk/EmailSenderAllOf}
     */
    EmailSenderAllOf,

    /**
     * The EmailSenderCollection model constructor.
     * @property {module:egoisdk/EmailSenderCollection}
     */
    EmailSenderCollection,

    /**
     * The EmailSenderPost model constructor.
     * @property {module:egoisdk/EmailSenderPost}
     */
    EmailSenderPost,

    /**
     * The EmailSenderPutRequest model constructor.
     * @property {module:egoisdk/EmailSenderPutRequest}
     */
    EmailSenderPutRequest,

    /**
     * The EmailUnsubscriptionsCampaignFields model constructor.
     * @property {module:egoisdk/EmailUnsubscriptionsCampaignFields}
     */
    EmailUnsubscriptionsCampaignFields,

    /**
     * The EmailUnsubscriptionsListStatsFields model constructor.
     * @property {module:egoisdk/EmailUnsubscriptionsListStatsFields}
     */
    EmailUnsubscriptionsListStatsFields,

    /**
     * The EnableTeConflict model constructor.
     * @property {module:egoisdk/EnableTeConflict}
     */
    EnableTeConflict,

    /**
     * The EnableTeConflictsErrors model constructor.
     * @property {module:egoisdk/EnableTeConflictsErrors}
     */
    EnableTeConflictsErrors,

    /**
     * The EnableTeRequest model constructor.
     * @property {module:egoisdk/EnableTeRequest}
     */
    EnableTeRequest,

    /**
     * The EnableTransactionalConflict model constructor.
     * @property {module:egoisdk/EnableTransactionalConflict}
     */
    EnableTransactionalConflict,

    /**
     * The EnableTransactionalConflictsErrors model constructor.
     * @property {module:egoisdk/EnableTransactionalConflictsErrors}
     */
    EnableTransactionalConflictsErrors,

    /**
     * The ExportContactsWebhookData model constructor.
     * @property {module:egoisdk/ExportContactsWebhookData}
     */
    ExportContactsWebhookData,

    /**
     * The ExportReportWebhookData model constructor.
     * @property {module:egoisdk/ExportReportWebhookData}
     */
    ExportReportWebhookData,

    /**
     * The Field model constructor.
     * @property {module:egoisdk/Field}
     */
    Field,

    /**
     * The FieldInUse model constructor.
     * @property {module:egoisdk/FieldInUse}
     */
    FieldInUse,

    /**
     * The FieldInUseErrors model constructor.
     * @property {module:egoisdk/FieldInUseErrors}
     */
    FieldInUseErrors,

    /**
     * The FieldInUseErrorsFieldInUseData model constructor.
     * @property {module:egoisdk/FieldInUseErrorsFieldInUseData}
     */
    FieldInUseErrorsFieldInUseData,

    /**
     * The FieldOption model constructor.
     * @property {module:egoisdk/FieldOption}
     */
    FieldOption,

    /**
     * The FieldOptionPost model constructor.
     * @property {module:egoisdk/FieldOptionPost}
     */
    FieldOptionPost,

    /**
     * The FieldOptionsCollection model constructor.
     * @property {module:egoisdk/FieldOptionsCollection}
     */
    FieldOptionsCollection,

    /**
     * The Forbidden model constructor.
     * @property {module:egoisdk/Forbidden}
     */
    Forbidden,

    /**
     * The Form model constructor.
     * @property {module:egoisdk/Form}
     */
    Form,

    /**
     * The GeneralInfo model constructor.
     * @property {module:egoisdk/GeneralInfo}
     */
    GeneralInfo,

    /**
     * The GeneralInfoAllOf model constructor.
     * @property {module:egoisdk/GeneralInfoAllOf}
     */
    GeneralInfoAllOf,

    /**
     * The GeneralInfoAllOfGeneralInfo model constructor.
     * @property {module:egoisdk/GeneralInfoAllOfGeneralInfo}
     */
    GeneralInfoAllOfGeneralInfo,

    /**
     * The GenerateByModelReport model constructor.
     * @property {module:egoisdk/GenerateByModelReport}
     */
    GenerateByModelReport,

    /**
     * The GenerateContactActivityReport model constructor.
     * @property {module:egoisdk/GenerateContactActivityReport}
     */
    GenerateContactActivityReport,

    /**
     * The GenerateEmailBouncesReport model constructor.
     * @property {module:egoisdk/GenerateEmailBouncesReport}
     */
    GenerateEmailBouncesReport,

    /**
     * The GenerateEmailClicksByContactReport model constructor.
     * @property {module:egoisdk/GenerateEmailClicksByContactReport}
     */
    GenerateEmailClicksByContactReport,

    /**
     * The GenerateEmailClicksByUrlReport model constructor.
     * @property {module:egoisdk/GenerateEmailClicksByUrlReport}
     */
    GenerateEmailClicksByUrlReport,

    /**
     * The GenerateEmailEventsReport model constructor.
     * @property {module:egoisdk/GenerateEmailEventsReport}
     */
    GenerateEmailEventsReport,

    /**
     * The GenerateEmailUnsubscriptionsReport model constructor.
     * @property {module:egoisdk/GenerateEmailUnsubscriptionsReport}
     */
    GenerateEmailUnsubscriptionsReport,

    /**
     * The GenerateFormAnswersReport model constructor.
     * @property {module:egoisdk/GenerateFormAnswersReport}
     */
    GenerateFormAnswersReport,

    /**
     * The GenerateSendsReport model constructor.
     * @property {module:egoisdk/GenerateSendsReport}
     */
    GenerateSendsReport,

    /**
     * The GenerateSmsBouncesReport model constructor.
     * @property {module:egoisdk/GenerateSmsBouncesReport}
     */
    GenerateSmsBouncesReport,

    /**
     * The GenerateSmsEventsReport model constructor.
     * @property {module:egoisdk/GenerateSmsEventsReport}
     */
    GenerateSmsEventsReport,

    /**
     * The GenerateSubscriptionsReport model constructor.
     * @property {module:egoisdk/GenerateSubscriptionsReport}
     */
    GenerateSubscriptionsReport,

    /**
     * The GenerateUnsubscriptionsReport model constructor.
     * @property {module:egoisdk/GenerateUnsubscriptionsReport}
     */
    GenerateUnsubscriptionsReport,

    /**
     * The GetAllContactsExtraFieldIdParameter model constructor.
     * @property {module:egoisdk/GetAllContactsExtraFieldIdParameter}
     */
    GetAllContactsExtraFieldIdParameter,

    /**
     * The GetAllProductsCustomAttributesParameter model constructor.
     * @property {module:egoisdk/GetAllProductsCustomAttributesParameter}
     */
    GetAllProductsCustomAttributesParameter,

    /**
     * The Goal model constructor.
     * @property {module:egoisdk/Goal}
     */
    Goal,

    /**
     * The GoalAutommaticInfo model constructor.
     * @property {module:egoisdk/GoalAutommaticInfo}
     */
    GoalAutommaticInfo,

    /**
     * The GoalCollection model constructor.
     * @property {module:egoisdk/GoalCollection}
     */
    GoalCollection,

    /**
     * The GoalInfo model constructor.
     * @property {module:egoisdk/GoalInfo}
     */
    GoalInfo,

    /**
     * The GoalManualInfo model constructor.
     * @property {module:egoisdk/GoalManualInfo}
     */
    GoalManualInfo,

    /**
     * The GoalTimeInfo model constructor.
     * @property {module:egoisdk/GoalTimeInfo}
     */
    GoalTimeInfo,

    /**
     * The HasAutomations model constructor.
     * @property {module:egoisdk/HasAutomations}
     */
    HasAutomations,

    /**
     * The HasAutomationsErrors model constructor.
     * @property {module:egoisdk/HasAutomationsErrors}
     */
    HasAutomationsErrors,

    /**
     * The HasCampaignsLastThirtyDays model constructor.
     * @property {module:egoisdk/HasCampaignsLastThirtyDays}
     */
    HasCampaignsLastThirtyDays,

    /**
     * The HasCampaignsLastThirtyDaysErrors model constructor.
     * @property {module:egoisdk/HasCampaignsLastThirtyDaysErrors}
     */
    HasCampaignsLastThirtyDaysErrors,

    /**
     * The HasPushApp model constructor.
     * @property {module:egoisdk/HasPushApp}
     */
    HasPushApp,

    /**
     * The HasPushAppErrors model constructor.
     * @property {module:egoisdk/HasPushAppErrors}
     */
    HasPushAppErrors,

    /**
     * The HasQueuedCampaigns model constructor.
     * @property {module:egoisdk/HasQueuedCampaigns}
     */
    HasQueuedCampaigns,

    /**
     * The HasQueuedCampaignsErrors model constructor.
     * @property {module:egoisdk/HasQueuedCampaignsErrors}
     */
    HasQueuedCampaignsErrors,

    /**
     * The HasQueuedOperations model constructor.
     * @property {module:egoisdk/HasQueuedOperations}
     */
    HasQueuedOperations,

    /**
     * The HasQueuedOperationsErrors model constructor.
     * @property {module:egoisdk/HasQueuedOperationsErrors}
     */
    HasQueuedOperationsErrors,

    /**
     * The HasWebPushSite model constructor.
     * @property {module:egoisdk/HasWebPushSite}
     */
    HasWebPushSite,

    /**
     * The HasWebPushSiteErrors model constructor.
     * @property {module:egoisdk/HasWebPushSiteErrors}
     */
    HasWebPushSiteErrors,

    /**
     * The HashcodeCampaign model constructor.
     * @property {module:egoisdk/HashcodeCampaign}
     */
    HashcodeCampaign,

    /**
     * The HeaderFooter model constructor.
     * @property {module:egoisdk/HeaderFooter}
     */
    HeaderFooter,

    /**
     * The HeaderFooterFooterLinks model constructor.
     * @property {module:egoisdk/HeaderFooterFooterLinks}
     */
    HeaderFooterFooterLinks,

    /**
     * The HeaderFooterHeaderLinks model constructor.
     * @property {module:egoisdk/HeaderFooterHeaderLinks}
     */
    HeaderFooterHeaderLinks,

    /**
     * The HeaderFooterTemplate model constructor.
     * @property {module:egoisdk/HeaderFooterTemplate}
     */
    HeaderFooterTemplate,

    /**
     * The ImportBulkFileRequest model constructor.
     * @property {module:egoisdk/ImportBulkFileRequest}
     */
    ImportBulkFileRequest,

    /**
     * The ImportBulkFileRequestSchema model constructor.
     * @property {module:egoisdk/ImportBulkFileRequestSchema}
     */
    ImportBulkFileRequestSchema,

    /**
     * The ImportBulkFileRequestSchemaFile model constructor.
     * @property {module:egoisdk/ImportBulkFileRequestSchemaFile}
     */
    ImportBulkFileRequestSchemaFile,

    /**
     * The ImportBulkRequest model constructor.
     * @property {module:egoisdk/ImportBulkRequest}
     */
    ImportBulkRequest,

    /**
     * The ImportContactsWebhookData model constructor.
     * @property {module:egoisdk/ImportContactsWebhookData}
     */
    ImportContactsWebhookData,

    /**
     * The ImportOrdersBulkBulkRequest model constructor.
     * @property {module:egoisdk/ImportOrdersBulkBulkRequest}
     */
    ImportOrdersBulkBulkRequest,

    /**
     * The ImportOrdersBulkBulkRequestItems model constructor.
     * @property {module:egoisdk/ImportOrdersBulkBulkRequestItems}
     */
    ImportOrdersBulkBulkRequestItems,

    /**
     * The InternalServerError model constructor.
     * @property {module:egoisdk/InternalServerError}
     */
    InternalServerError,

    /**
     * The InvalidSegmentType model constructor.
     * @property {module:egoisdk/InvalidSegmentType}
     */
    InvalidSegmentType,

    /**
     * The InvalidSegmentTypeErrors model constructor.
     * @property {module:egoisdk/InvalidSegmentTypeErrors}
     */
    InvalidSegmentTypeErrors,

    /**
     * The Language model constructor.
     * @property {module:egoisdk/Language}
     */
    Language,

    /**
     * The LimitContactsActionSend model constructor.
     * @property {module:egoisdk/LimitContactsActionSend}
     */
    LimitContactsActionSend,

    /**
     * The LimitContactsPercentActionSend model constructor.
     * @property {module:egoisdk/LimitContactsPercentActionSend}
     */
    LimitContactsPercentActionSend,

    /**
     * The LimitContactsValueActionSend model constructor.
     * @property {module:egoisdk/LimitContactsValueActionSend}
     */
    LimitContactsValueActionSend,

    /**
     * The LimitHourActionSend model constructor.
     * @property {module:egoisdk/LimitHourActionSend}
     */
    LimitHourActionSend,

    /**
     * The LimitHourActionSendLimitHour model constructor.
     * @property {module:egoisdk/LimitHourActionSendLimitHour}
     */
    LimitHourActionSendLimitHour,

    /**
     * The LimitSpeedActionSend model constructor.
     * @property {module:egoisdk/LimitSpeedActionSend}
     */
    LimitSpeedActionSend,

    /**
     * The List model constructor.
     * @property {module:egoisdk/List}
     */
    List,

    /**
     * The ListCollection model constructor.
     * @property {module:egoisdk/ListCollection}
     */
    ListCollection,

    /**
     * The ListCollection1 model constructor.
     * @property {module:egoisdk/ListCollection1}
     */
    ListCollection1,

    /**
     * The ListLimitReached model constructor.
     * @property {module:egoisdk/ListLimitReached}
     */
    ListLimitReached,

    /**
     * The ListLimitReachedErrors model constructor.
     * @property {module:egoisdk/ListLimitReachedErrors}
     */
    ListLimitReachedErrors,

    /**
     * The MessageWebPush model constructor.
     * @property {module:egoisdk/MessageWebPush}
     */
    MessageWebPush,

    /**
     * The MessageWebPushPost model constructor.
     * @property {module:egoisdk/MessageWebPushPost}
     */
    MessageWebPushPost,

    /**
     * The MessageWebPushRss model constructor.
     * @property {module:egoisdk/MessageWebPushRss}
     */
    MessageWebPushRss,

    /**
     * The ModuleInfo model constructor.
     * @property {module:egoisdk/ModuleInfo}
     */
    ModuleInfo,

    /**
     * The ModuleInfoModuleInfo model constructor.
     * @property {module:egoisdk/ModuleInfoModuleInfo}
     */
    ModuleInfoModuleInfo,

    /**
     * The ModuleInfoModuleInfoTe model constructor.
     * @property {module:egoisdk/ModuleInfoModuleInfoTe}
     */
    ModuleInfoModuleInfoTe,

    /**
     * The MyAccount model constructor.
     * @property {module:egoisdk/MyAccount}
     */
    MyAccount,

    /**
     * The NameAlreadyExists model constructor.
     * @property {module:egoisdk/NameAlreadyExists}
     */
    NameAlreadyExists,

    /**
     * The NameAlreadyExistsErrors model constructor.
     * @property {module:egoisdk/NameAlreadyExistsErrors}
     */
    NameAlreadyExistsErrors,

    /**
     * The NotFound model constructor.
     * @property {module:egoisdk/NotFound}
     */
    NotFound,

    /**
     * The NotifyUserIdArrayActionSend model constructor.
     * @property {module:egoisdk/NotifyUserIdArrayActionSend}
     */
    NotifyUserIdArrayActionSend,

    /**
     * The Now model constructor.
     * @property {module:egoisdk/Now}
     */
    Now,

    /**
     * The NumericCellphoneSender model constructor.
     * @property {module:egoisdk/NumericCellphoneSender}
     */
    NumericCellphoneSender,

    /**
     * The NumericCellphoneSenderPost model constructor.
     * @property {module:egoisdk/NumericCellphoneSenderPost}
     */
    NumericCellphoneSenderPost,

    /**
     * The NumericCellphoneSenderPostAllOf model constructor.
     * @property {module:egoisdk/NumericCellphoneSenderPostAllOf}
     */
    NumericCellphoneSenderPostAllOf,

    /**
     * The OLimitContactsActionSend model constructor.
     * @property {module:egoisdk/OLimitContactsActionSend}
     */
    OLimitContactsActionSend,

    /**
     * The OSegmentsActionSend model constructor.
     * @property {module:egoisdk/OSegmentsActionSend}
     */
    OSegmentsActionSend,

    /**
     * The OSegmentsWithoutContactActionSend model constructor.
     * @property {module:egoisdk/OSegmentsWithoutContactActionSend}
     */
    OSegmentsWithoutContactActionSend,

    /**
     * The Operation model constructor.
     * @property {module:egoisdk/Operation}
     */
    Operation,

    /**
     * The OperationActionRequest model constructor.
     * @property {module:egoisdk/OperationActionRequest}
     */
    OperationActionRequest,

    /**
     * The OperationActionResponse model constructor.
     * @property {module:egoisdk/OperationActionResponse}
     */
    OperationActionResponse,

    /**
     * The OperationActionResponseError model constructor.
     * @property {module:egoisdk/OperationActionResponseError}
     */
    OperationActionResponseError,

    /**
     * The OperationOperationData model constructor.
     * @property {module:egoisdk/OperationOperationData}
     */
    OperationOperationData,

    /**
     * The OperationsCollection model constructor.
     * @property {module:egoisdk/OperationsCollection}
     */
    OperationsCollection,

    /**
     * The Order model constructor.
     * @property {module:egoisdk/Order}
     */
    Order,

    /**
     * The OrderPatchRequest model constructor.
     * @property {module:egoisdk/OrderPatchRequest}
     */
    OrderPatchRequest,

    /**
     * The Overall model constructor.
     * @property {module:egoisdk/Overall}
     */
    Overall,

    /**
     * The OverallOverall model constructor.
     * @property {module:egoisdk/OverallOverall}
     */
    OverallOverall,

    /**
     * The PatchRequestBaseField model constructor.
     * @property {module:egoisdk/PatchRequestBaseField}
     */
    PatchRequestBaseField,

    /**
     * The PatchRequestField model constructor.
     * @property {module:egoisdk/PatchRequestField}
     */
    PatchRequestField,

    /**
     * The PatchRequestList model constructor.
     * @property {module:egoisdk/PatchRequestList}
     */
    PatchRequestList,

    /**
     * The PatchVoiceCampaign200Response model constructor.
     * @property {module:egoisdk/PatchVoiceCampaign200Response}
     */
    PatchVoiceCampaign200Response,

    /**
     * The PayloadTooLarge model constructor.
     * @property {module:egoisdk/PayloadTooLarge}
     */
    PayloadTooLarge,

    /**
     * The PhoneCampaignTemplate model constructor.
     * @property {module:egoisdk/PhoneCampaignTemplate}
     */
    PhoneCampaignTemplate,

    /**
     * The PhoneCampaignTemplateAllOf model constructor.
     * @property {module:egoisdk/PhoneCampaignTemplateAllOf}
     */
    PhoneCampaignTemplateAllOf,

    /**
     * The PhoneReport model constructor.
     * @property {module:egoisdk/PhoneReport}
     */
    PhoneReport,

    /**
     * The PhoneReportAllOf model constructor.
     * @property {module:egoisdk/PhoneReportAllOf}
     */
    PhoneReportAllOf,

    /**
     * The PhoneReportAllOfNetworks model constructor.
     * @property {module:egoisdk/PhoneReportAllOfNetworks}
     */
    PhoneReportAllOfNetworks,

    /**
     * The PhoneSender model constructor.
     * @property {module:egoisdk/PhoneSender}
     */
    PhoneSender,

    /**
     * The PhoneSenderAllOf model constructor.
     * @property {module:egoisdk/PhoneSenderAllOf}
     */
    PhoneSenderAllOf,

    /**
     * The PhoneSenderCollection model constructor.
     * @property {module:egoisdk/PhoneSenderCollection}
     */
    PhoneSenderCollection,

    /**
     * The PhoneSenderPost model constructor.
     * @property {module:egoisdk/PhoneSenderPost}
     */
    PhoneSenderPost,

    /**
     * The Ping model constructor.
     * @property {module:egoisdk/Ping}
     */
    Ping,

    /**
     * The PlanInfo model constructor.
     * @property {module:egoisdk/PlanInfo}
     */
    PlanInfo,

    /**
     * The PlanInfoPlanInfo model constructor.
     * @property {module:egoisdk/PlanInfoPlanInfo}
     */
    PlanInfoPlanInfo,

    /**
     * The PostCNameConflict model constructor.
     * @property {module:egoisdk/PostCNameConflict}
     */
    PostCNameConflict,

    /**
     * The PostContactsConflict model constructor.
     * @property {module:egoisdk/PostContactsConflict}
     */
    PostContactsConflict,

    /**
     * The PostListsConflict model constructor.
     * @property {module:egoisdk/PostListsConflict}
     */
    PostListsConflict,

    /**
     * The PostProductsConflict model constructor.
     * @property {module:egoisdk/PostProductsConflict}
     */
    PostProductsConflict,

    /**
     * The PostRequestList model constructor.
     * @property {module:egoisdk/PostRequestList}
     */
    PostRequestList,

    /**
     * The PostWebpushSiteConflict model constructor.
     * @property {module:egoisdk/PostWebpushSiteConflict}
     */
    PostWebpushSiteConflict,

    /**
     * The Product model constructor.
     * @property {module:egoisdk/Product}
     */
    Product,

    /**
     * The ProductAllOf model constructor.
     * @property {module:egoisdk/ProductAllOf}
     */
    ProductAllOf,

    /**
     * The ProductAlreadyExists model constructor.
     * @property {module:egoisdk/ProductAlreadyExists}
     */
    ProductAlreadyExists,

    /**
     * The ProductAlreadyExistsErrors model constructor.
     * @property {module:egoisdk/ProductAlreadyExistsErrors}
     */
    ProductAlreadyExistsErrors,

    /**
     * The ProductBulkRequest model constructor.
     * @property {module:egoisdk/ProductBulkRequest}
     */
    ProductBulkRequest,

    /**
     * The ProductCollection model constructor.
     * @property {module:egoisdk/ProductCollection}
     */
    ProductCollection,

    /**
     * The ProductCustomAttributes model constructor.
     * @property {module:egoisdk/ProductCustomAttributes}
     */
    ProductCustomAttributes,

    /**
     * The ProductPatchRequest model constructor.
     * @property {module:egoisdk/ProductPatchRequest}
     */
    ProductPatchRequest,

    /**
     * The ProductPostRequest model constructor.
     * @property {module:egoisdk/ProductPostRequest}
     */
    ProductPostRequest,

    /**
     * The PushCampaignPatchRequest model constructor.
     * @property {module:egoisdk/PushCampaignPatchRequest}
     */
    PushCampaignPatchRequest,

    /**
     * The PushCampaignPatchRequestContent model constructor.
     * @property {module:egoisdk/PushCampaignPatchRequestContent}
     */
    PushCampaignPatchRequestContent,

    /**
     * The PushCampaignPatchRequestGeoOptions model constructor.
     * @property {module:egoisdk/PushCampaignPatchRequestGeoOptions}
     */
    PushCampaignPatchRequestGeoOptions,

    /**
     * The PushCampaignPostRequest model constructor.
     * @property {module:egoisdk/PushCampaignPostRequest}
     */
    PushCampaignPostRequest,

    /**
     * The PushCampaignPostRequestActions model constructor.
     * @property {module:egoisdk/PushCampaignPostRequestActions}
     */
    PushCampaignPostRequestActions,

    /**
     * The PushCampaignPostRequestGeoOptions model constructor.
     * @property {module:egoisdk/PushCampaignPostRequestGeoOptions}
     */
    PushCampaignPostRequestGeoOptions,

    /**
     * The PushCampaignPostRequestNotificationOptions model constructor.
     * @property {module:egoisdk/PushCampaignPostRequestNotificationOptions}
     */
    PushCampaignPostRequestNotificationOptions,

    /**
     * The PushEvent model constructor.
     * @property {module:egoisdk/PushEvent}
     */
    PushEvent,

    /**
     * The PushNotificationSoundSchema model constructor.
     * @property {module:egoisdk/PushNotificationSoundSchema}
     */
    PushNotificationSoundSchema,

    /**
     * The PushNotificationSoundSchemaDefault model constructor.
     * @property {module:egoisdk/PushNotificationSoundSchemaDefault}
     */
    PushNotificationSoundSchemaDefault,

    /**
     * The PushNotificationSoundSchemaNone model constructor.
     * @property {module:egoisdk/PushNotificationSoundSchemaNone}
     */
    PushNotificationSoundSchemaNone,

    /**
     * The PushNotificationSoundSchemaUrl model constructor.
     * @property {module:egoisdk/PushNotificationSoundSchemaUrl}
     */
    PushNotificationSoundSchemaUrl,

    /**
     * The PushReport model constructor.
     * @property {module:egoisdk/PushReport}
     */
    PushReport,

    /**
     * The PushReportOperatingSystemsInner model constructor.
     * @property {module:egoisdk/PushReportOperatingSystemsInner}
     */
    PushReportOperatingSystemsInner,

    /**
     * The PushReportOperatingSystemsInnerAllOf model constructor.
     * @property {module:egoisdk/PushReportOperatingSystemsInnerAllOf}
     */
    PushReportOperatingSystemsInnerAllOf,

    /**
     * The PushResponse model constructor.
     * @property {module:egoisdk/PushResponse}
     */
    PushResponse,

    /**
     * The PushStats model constructor.
     * @property {module:egoisdk/PushStats}
     */
    PushStats,

    /**
     * The PushToken model constructor.
     * @property {module:egoisdk/PushToken}
     */
    PushToken,

    /**
     * The PushTokenTwoStepsData model constructor.
     * @property {module:egoisdk/PushTokenTwoStepsData}
     */
    PushTokenTwoStepsData,

    /**
     * The RemoveRequest model constructor.
     * @property {module:egoisdk/RemoveRequest}
     */
    RemoveRequest,

    /**
     * The RemoveResponse model constructor.
     * @property {module:egoisdk/RemoveResponse}
     */
    RemoveResponse,

    /**
     * The RemoveResponseErrors model constructor.
     * @property {module:egoisdk/RemoveResponseErrors}
     */
    RemoveResponseErrors,

    /**
     * The ReportCampaignsAll model constructor.
     * @property {module:egoisdk/ReportCampaignsAll}
     */
    ReportCampaignsAll,

    /**
     * The ReportCampaignsGroup model constructor.
     * @property {module:egoisdk/ReportCampaignsGroup}
     */
    ReportCampaignsGroup,

    /**
     * The ReportCampaignsLast model constructor.
     * @property {module:egoisdk/ReportCampaignsLast}
     */
    ReportCampaignsLast,

    /**
     * The ReportCampaignsSpecific model constructor.
     * @property {module:egoisdk/ReportCampaignsSpecific}
     */
    ReportCampaignsSpecific,

    /**
     * The RequestEntityTooLarge model constructor.
     * @property {module:egoisdk/RequestEntityTooLarge}
     */
    RequestEntityTooLarge,

    /**
     * The RequestItemsUnsubscribe model constructor.
     * @property {module:egoisdk/RequestItemsUnsubscribe}
     */
    RequestItemsUnsubscribe,

    /**
     * The RequestItemsUnsubscribeAllOf model constructor.
     * @property {module:egoisdk/RequestItemsUnsubscribeAllOf}
     */
    RequestItemsUnsubscribeAllOf,

    /**
     * The RequestTimeout model constructor.
     * @property {module:egoisdk/RequestTimeout}
     */
    RequestTimeout,

    /**
     * The SavedSegment model constructor.
     * @property {module:egoisdk/SavedSegment}
     */
    SavedSegment,

    /**
     * The SavedSegmentAllOf model constructor.
     * @property {module:egoisdk/SavedSegmentAllOf}
     */
    SavedSegmentAllOf,

    /**
     * The SavedSegmentAllOf1 model constructor.
     * @property {module:egoisdk/SavedSegmentAllOf1}
     */
    SavedSegmentAllOf1,

    /**
     * The SavedSegmentAllOf1SegmentFilter model constructor.
     * @property {module:egoisdk/SavedSegmentAllOf1SegmentFilter}
     */
    SavedSegmentAllOf1SegmentFilter,

    /**
     * The SavedSegmentAllOf1SegmentFilterSegmentFilterArray model constructor.
     * @property {module:egoisdk/SavedSegmentAllOf1SegmentFilterSegmentFilterArray}
     */
    SavedSegmentAllOf1SegmentFilterSegmentFilterArray,

    /**
     * The SearchContacts200Response model constructor.
     * @property {module:egoisdk/SearchContacts200Response}
     */
    SearchContacts200Response,

    /**
     * The Segment model constructor.
     * @property {module:egoisdk/Segment}
     */
    Segment,

    /**
     * The SegmentCollection model constructor.
     * @property {module:egoisdk/SegmentCollection}
     */
    SegmentCollection,

    /**
     * The SegmentsActionSend model constructor.
     * @property {module:egoisdk/SegmentsActionSend}
     */
    SegmentsActionSend,

    /**
     * The SegmentsWithoutContactActionSend model constructor.
     * @property {module:egoisdk/SegmentsWithoutContactActionSend}
     */
    SegmentsWithoutContactActionSend,

    /**
     * The SendContact model constructor.
     * @property {module:egoisdk/SendContact}
     */
    SendContact,

    /**
     * The SendContactCellphone model constructor.
     * @property {module:egoisdk/SendContactCellphone}
     */
    SendContactCellphone,

    /**
     * The SendEmailContact model constructor.
     * @property {module:egoisdk/SendEmailContact}
     */
    SendEmailContact,

    /**
     * The SendNone model constructor.
     * @property {module:egoisdk/SendNone}
     */
    SendNone,

    /**
     * The SendPush model constructor.
     * @property {module:egoisdk/SendPush}
     */
    SendPush,

    /**
     * The SendPushAllOf model constructor.
     * @property {module:egoisdk/SendPushAllOf}
     */
    SendPushAllOf,

    /**
     * The SendSegment model constructor.
     * @property {module:egoisdk/SendSegment}
     */
    SendSegment,

    /**
     * The SendSmartSms model constructor.
     * @property {module:egoisdk/SendSmartSms}
     */
    SendSmartSms,

    /**
     * The SendSmartSmsAllOf model constructor.
     * @property {module:egoisdk/SendSmartSmsAllOf}
     */
    SendSmartSmsAllOf,

    /**
     * The SendSmartSmsAllOf1 model constructor.
     * @property {module:egoisdk/SendSmartSmsAllOf1}
     */
    SendSmartSmsAllOf1,

    /**
     * The SendSmartSmsAllOf2 model constructor.
     * @property {module:egoisdk/SendSmartSmsAllOf2}
     */
    SendSmartSmsAllOf2,

    /**
     * The SendSms model constructor.
     * @property {module:egoisdk/SendSms}
     */
    SendSms,

    /**
     * The SendSmsAllOf model constructor.
     * @property {module:egoisdk/SendSmsAllOf}
     */
    SendSmsAllOf,

    /**
     * The SendSmsAllOf1 model constructor.
     * @property {module:egoisdk/SendSmsAllOf1}
     */
    SendSmsAllOf1,

    /**
     * The SendWebPush model constructor.
     * @property {module:egoisdk/SendWebPush}
     */
    SendWebPush,

    /**
     * The SendWebPushAllOf model constructor.
     * @property {module:egoisdk/SendWebPushAllOf}
     */
    SendWebPushAllOf,

    /**
     * The SendsCampaignFields model constructor.
     * @property {module:egoisdk/SendsCampaignFields}
     */
    SendsCampaignFields,

    /**
     * The ServiceUnavailable model constructor.
     * @property {module:egoisdk/ServiceUnavailable}
     */
    ServiceUnavailable,

    /**
     * The SingleCartObject model constructor.
     * @property {module:egoisdk/SingleCartObject}
     */
    SingleCartObject,

    /**
     * The SingleOrderObject model constructor.
     * @property {module:egoisdk/SingleOrderObject}
     */
    SingleOrderObject,

    /**
     * The SmartSmsCampaign model constructor.
     * @property {module:egoisdk/SmartSmsCampaign}
     */
    SmartSmsCampaign,

    /**
     * The SmartSmsCampaignCampaignContent model constructor.
     * @property {module:egoisdk/SmartSmsCampaignCampaignContent}
     */
    SmartSmsCampaignCampaignContent,

    /**
     * The SmartSmsCampaignPatchRequest model constructor.
     * @property {module:egoisdk/SmartSmsCampaignPatchRequest}
     */
    SmartSmsCampaignPatchRequest,

    /**
     * The SmartSmsCampaignPatchRequestCampaignContent model constructor.
     * @property {module:egoisdk/SmartSmsCampaignPatchRequestCampaignContent}
     */
    SmartSmsCampaignPatchRequestCampaignContent,

    /**
     * The SmartSmsCampaignPatchRequestPageContent model constructor.
     * @property {module:egoisdk/SmartSmsCampaignPatchRequestPageContent}
     */
    SmartSmsCampaignPatchRequestPageContent,

    /**
     * The SmartSmsSegmentsActionSend model constructor.
     * @property {module:egoisdk/SmartSmsSegmentsActionSend}
     */
    SmartSmsSegmentsActionSend,

    /**
     * The SmsBouncesCampaignFields model constructor.
     * @property {module:egoisdk/SmsBouncesCampaignFields}
     */
    SmsBouncesCampaignFields,

    /**
     * The SmsBouncesListStatsFields model constructor.
     * @property {module:egoisdk/SmsBouncesListStatsFields}
     */
    SmsBouncesListStatsFields,

    /**
     * The SmsCampaign model constructor.
     * @property {module:egoisdk/SmsCampaign}
     */
    SmsCampaign,

    /**
     * The SmsCampaignPatchRequest model constructor.
     * @property {module:egoisdk/SmsCampaignPatchRequest}
     */
    SmsCampaignPatchRequest,

    /**
     * The SmsCampaignPatchRequestContent model constructor.
     * @property {module:egoisdk/SmsCampaignPatchRequestContent}
     */
    SmsCampaignPatchRequestContent,

    /**
     * The SmsCampaignTemplate model constructor.
     * @property {module:egoisdk/SmsCampaignTemplate}
     */
    SmsCampaignTemplate,

    /**
     * The SmsCampaignTemplateAllOf model constructor.
     * @property {module:egoisdk/SmsCampaignTemplateAllOf}
     */
    SmsCampaignTemplateAllOf,

    /**
     * The SmsEventsCampaignFields model constructor.
     * @property {module:egoisdk/SmsEventsCampaignFields}
     */
    SmsEventsCampaignFields,

    /**
     * The SmsEventsListStatsFields model constructor.
     * @property {module:egoisdk/SmsEventsListStatsFields}
     */
    SmsEventsListStatsFields,

    /**
     * The SmsSegmentsActionSend model constructor.
     * @property {module:egoisdk/SmsSegmentsActionSend}
     */
    SmsSegmentsActionSend,

    /**
     * The StartAutomationRequest model constructor.
     * @property {module:egoisdk/StartAutomationRequest}
     */
    StartAutomationRequest,

    /**
     * The StartAutomationResponse model constructor.
     * @property {module:egoisdk/StartAutomationResponse}
     */
    StartAutomationResponse,

    /**
     * The SubscriptionsListStatsFields model constructor.
     * @property {module:egoisdk/SubscriptionsListStatsFields}
     */
    SubscriptionsListStatsFields,

    /**
     * The SuppressionList model constructor.
     * @property {module:egoisdk/SuppressionList}
     */
    SuppressionList,

    /**
     * The SuppressionListItems model constructor.
     * @property {module:egoisdk/SuppressionListItems}
     */
    SuppressionListItems,

    /**
     * The SuppressionTypeCellphone model constructor.
     * @property {module:egoisdk/SuppressionTypeCellphone}
     */
    SuppressionTypeCellphone,

    /**
     * The SuppressionTypeCellphoneAllOf model constructor.
     * @property {module:egoisdk/SuppressionTypeCellphoneAllOf}
     */
    SuppressionTypeCellphoneAllOf,

    /**
     * The SuppressionTypeCellphoneAllOf1 model constructor.
     * @property {module:egoisdk/SuppressionTypeCellphoneAllOf1}
     */
    SuppressionTypeCellphoneAllOf1,

    /**
     * The SuppressionTypeEmail model constructor.
     * @property {module:egoisdk/SuppressionTypeEmail}
     */
    SuppressionTypeEmail,

    /**
     * The SuppressionTypeEmailAllOf model constructor.
     * @property {module:egoisdk/SuppressionTypeEmailAllOf}
     */
    SuppressionTypeEmailAllOf,

    /**
     * The SuppressionTypeEmailAllOf1 model constructor.
     * @property {module:egoisdk/SuppressionTypeEmailAllOf1}
     */
    SuppressionTypeEmailAllOf1,

    /**
     * The SuppressionTypeEmailDomain model constructor.
     * @property {module:egoisdk/SuppressionTypeEmailDomain}
     */
    SuppressionTypeEmailDomain,

    /**
     * The SuppressionTypeEmailDomainAllOf model constructor.
     * @property {module:egoisdk/SuppressionTypeEmailDomainAllOf}
     */
    SuppressionTypeEmailDomainAllOf,

    /**
     * The SuppressionTypeEmailDomainAllOf1 model constructor.
     * @property {module:egoisdk/SuppressionTypeEmailDomainAllOf1}
     */
    SuppressionTypeEmailDomainAllOf1,

    /**
     * The SuppressionTypePhone model constructor.
     * @property {module:egoisdk/SuppressionTypePhone}
     */
    SuppressionTypePhone,

    /**
     * The SuppressionTypePhoneAllOf model constructor.
     * @property {module:egoisdk/SuppressionTypePhoneAllOf}
     */
    SuppressionTypePhoneAllOf,

    /**
     * The SuppressionTypePhoneAllOf1 model constructor.
     * @property {module:egoisdk/SuppressionTypePhoneAllOf1}
     */
    SuppressionTypePhoneAllOf1,

    /**
     * The SuppressionTypeUserEmail model constructor.
     * @property {module:egoisdk/SuppressionTypeUserEmail}
     */
    SuppressionTypeUserEmail,

    /**
     * The SuppressionTypeUserEmailAllOf model constructor.
     * @property {module:egoisdk/SuppressionTypeUserEmailAllOf}
     */
    SuppressionTypeUserEmailAllOf,

    /**
     * The SuppressionTypeUserEmailAllOf1 model constructor.
     * @property {module:egoisdk/SuppressionTypeUserEmailAllOf1}
     */
    SuppressionTypeUserEmailAllOf1,

    /**
     * The Tag model constructor.
     * @property {module:egoisdk/Tag}
     */
    Tag,

    /**
     * The TagCollection model constructor.
     * @property {module:egoisdk/TagCollection}
     */
    TagCollection,

    /**
     * The TagCollection1 model constructor.
     * @property {module:egoisdk/TagCollection1}
     */
    TagCollection1,

    /**
     * The TagRequest model constructor.
     * @property {module:egoisdk/TagRequest}
     */
    TagRequest,

    /**
     * The TagSegment model constructor.
     * @property {module:egoisdk/TagSegment}
     */
    TagSegment,

    /**
     * The TagSegmentAllOf model constructor.
     * @property {module:egoisdk/TagSegmentAllOf}
     */
    TagSegmentAllOf,

    /**
     * The TeResponse model constructor.
     * @property {module:egoisdk/TeResponse}
     */
    TeResponse,

    /**
     * The TeResponseAllOf model constructor.
     * @property {module:egoisdk/TeResponseAllOf}
     */
    TeResponseAllOf,

    /**
     * The TooManyRequests model constructor.
     * @property {module:egoisdk/TooManyRequests}
     */
    TooManyRequests,

    /**
     * The Unauthorized model constructor.
     * @property {module:egoisdk/Unauthorized}
     */
    Unauthorized,

    /**
     * The UniqueFieldInUse model constructor.
     * @property {module:egoisdk/UniqueFieldInUse}
     */
    UniqueFieldInUse,

    /**
     * The UniqueFieldInUseErrors model constructor.
     * @property {module:egoisdk/UniqueFieldInUseErrors}
     */
    UniqueFieldInUseErrors,

    /**
     * The UnprocessableEntity model constructor.
     * @property {module:egoisdk/UnprocessableEntity}
     */
    UnprocessableEntity,

    /**
     * The UnremovableEntry model constructor.
     * @property {module:egoisdk/UnremovableEntry}
     */
    UnremovableEntry,

    /**
     * The UnremovableEntryErrors model constructor.
     * @property {module:egoisdk/UnremovableEntryErrors}
     */
    UnremovableEntryErrors,

    /**
     * The UnsubscriptionObject model constructor.
     * @property {module:egoisdk/UnsubscriptionObject}
     */
    UnsubscriptionObject,

    /**
     * The UnsubscriptionsListStatsFields model constructor.
     * @property {module:egoisdk/UnsubscriptionsListStatsFields}
     */
    UnsubscriptionsListStatsFields,

    /**
     * The UpdateByContact model constructor.
     * @property {module:egoisdk/UpdateByContact}
     */
    UpdateByContact,

    /**
     * The UpdateBySegment model constructor.
     * @property {module:egoisdk/UpdateBySegment}
     */
    UpdateBySegment,

    /**
     * The UpdateContactsRequest model constructor.
     * @property {module:egoisdk/UpdateContactsRequest}
     */
    UpdateContactsRequest,

    /**
     * The UpdateForAll model constructor.
     * @property {module:egoisdk/UpdateForAll}
     */
    UpdateForAll,

    /**
     * The UsedInAutomations model constructor.
     * @property {module:egoisdk/UsedInAutomations}
     */
    UsedInAutomations,

    /**
     * The UsedInAutomationsErrors model constructor.
     * @property {module:egoisdk/UsedInAutomationsErrors}
     */
    UsedInAutomationsErrors,

    /**
     * The UsedInRecurringMessages model constructor.
     * @property {module:egoisdk/UsedInRecurringMessages}
     */
    UsedInRecurringMessages,

    /**
     * The UsedInRecurringMessagesErrors model constructor.
     * @property {module:egoisdk/UsedInRecurringMessagesErrors}
     */
    UsedInRecurringMessagesErrors,

    /**
     * The User model constructor.
     * @property {module:egoisdk/User}
     */
    User,

    /**
     * The UserAllOf model constructor.
     * @property {module:egoisdk/UserAllOf}
     */
    UserAllOf,

    /**
     * The UserCollection model constructor.
     * @property {module:egoisdk/UserCollection}
     */
    UserCollection,

    /**
     * The UserPost model constructor.
     * @property {module:egoisdk/UserPost}
     */
    UserPost,

    /**
     * The UserPostAllOf model constructor.
     * @property {module:egoisdk/UserPostAllOf}
     */
    UserPostAllOf,

    /**
     * The UserPostRequest model constructor.
     * @property {module:egoisdk/UserPostRequest}
     */
    UserPostRequest,

    /**
     * The UserPostRequestAllOf model constructor.
     * @property {module:egoisdk/UserPostRequestAllOf}
     */
    UserPostRequestAllOf,

    /**
     * The VoiceCampaign model constructor.
     * @property {module:egoisdk/VoiceCampaign}
     */
    VoiceCampaign,

    /**
     * The VoiceCampaignAllOf model constructor.
     * @property {module:egoisdk/VoiceCampaignAllOf}
     */
    VoiceCampaignAllOf,

    /**
     * The VoiceCampaignTemplate model constructor.
     * @property {module:egoisdk/VoiceCampaignTemplate}
     */
    VoiceCampaignTemplate,

    /**
     * The VoiceCampaignTemplateAllOf model constructor.
     * @property {module:egoisdk/VoiceCampaignTemplateAllOf}
     */
    VoiceCampaignTemplateAllOf,

    /**
     * The VoicePatchCampaign model constructor.
     * @property {module:egoisdk/VoicePatchCampaign}
     */
    VoicePatchCampaign,

    /**
     * The VoicePatchCampaignAllOf model constructor.
     * @property {module:egoisdk/VoicePatchCampaignAllOf}
     */
    VoicePatchCampaignAllOf,

    /**
     * The WebPushCampaign model constructor.
     * @property {module:egoisdk/WebPushCampaign}
     */
    WebPushCampaign,

    /**
     * The WebPushPatchCampaign model constructor.
     * @property {module:egoisdk/WebPushPatchCampaign}
     */
    WebPushPatchCampaign,

    /**
     * The WebPushReport model constructor.
     * @property {module:egoisdk/WebPushReport}
     */
    WebPushReport,

    /**
     * The WebPushReportBrowsersInner model constructor.
     * @property {module:egoisdk/WebPushReportBrowsersInner}
     */
    WebPushReportBrowsersInner,

    /**
     * The WebPushReportBrowsersInnerVersionsInner model constructor.
     * @property {module:egoisdk/WebPushReportBrowsersInnerVersionsInner}
     */
    WebPushReportBrowsersInnerVersionsInner,

    /**
     * The WebPushReportBrowsersInnerVersionsInnerAllOf model constructor.
     * @property {module:egoisdk/WebPushReportBrowsersInnerVersionsInnerAllOf}
     */
    WebPushReportBrowsersInnerVersionsInnerAllOf,

    /**
     * The WebPushReportDevicesInner model constructor.
     * @property {module:egoisdk/WebPushReportDevicesInner}
     */
    WebPushReportDevicesInner,

    /**
     * The WebPushReportDevicesInnerAllOf model constructor.
     * @property {module:egoisdk/WebPushReportDevicesInnerAllOf}
     */
    WebPushReportDevicesInnerAllOf,

    /**
     * The WebPushReportOperatingSystemsInner model constructor.
     * @property {module:egoisdk/WebPushReportOperatingSystemsInner}
     */
    WebPushReportOperatingSystemsInner,

    /**
     * The WebPushReportOperatingSystemsInnerVersionsInner model constructor.
     * @property {module:egoisdk/WebPushReportOperatingSystemsInnerVersionsInner}
     */
    WebPushReportOperatingSystemsInnerVersionsInner,

    /**
     * The WebPushReportOperatingSystemsInnerVersionsInnerAllOf model constructor.
     * @property {module:egoisdk/WebPushReportOperatingSystemsInnerVersionsInnerAllOf}
     */
    WebPushReportOperatingSystemsInnerVersionsInnerAllOf,

    /**
     * The WebPushReportUrlInner model constructor.
     * @property {module:egoisdk/WebPushReportUrlInner}
     */
    WebPushReportUrlInner,

    /**
     * The WebPushReportUrlInnerAllOf model constructor.
     * @property {module:egoisdk/WebPushReportUrlInnerAllOf}
     */
    WebPushReportUrlInnerAllOf,

    /**
     * The WebPushRssCampaign model constructor.
     * @property {module:egoisdk/WebPushRssCampaign}
     */
    WebPushRssCampaign,

    /**
     * The WebPushSite model constructor.
     * @property {module:egoisdk/WebPushSite}
     */
    WebPushSite,

    /**
     * The WebPushStats model constructor.
     * @property {module:egoisdk/WebPushStats}
     */
    WebPushStats,

    /**
     * The Webhook model constructor.
     * @property {module:egoisdk/Webhook}
     */
    Webhook,

    /**
     * The WebhookActionSchema model constructor.
     * @property {module:egoisdk/WebhookActionSchema}
     */
    WebhookActionSchema,

    /**
     * The WebpushActionsInner model constructor.
     * @property {module:egoisdk/WebpushActionsInner}
     */
    WebpushActionsInner,

    /**
    * The AdvancedReportsApi service constructor.
    * @property {module:egoiApi/AdvancedReportsApi}
    */
    AdvancedReportsApi,

    /**
    * The AutomationsApi service constructor.
    * @property {module:egoiApi/AutomationsApi}
    */
    AutomationsApi,

    /**
    * The CNamesApi service constructor.
    * @property {module:egoiApi/CNamesApi}
    */
    CNamesApi,

    /**
    * The CampaignGroupsApi service constructor.
    * @property {module:egoiApi/CampaignGroupsApi}
    */
    CampaignGroupsApi,

    /**
    * The CampaignsApi service constructor.
    * @property {module:egoiApi/CampaignsApi}
    */
    CampaignsApi,

    /**
    * The ConnectedSitesApi service constructor.
    * @property {module:egoiApi/ConnectedSitesApi}
    */
    ConnectedSitesApi,

    /**
    * The ContactsApi service constructor.
    * @property {module:egoiApi/ContactsApi}
    */
    ContactsApi,

    /**
    * The EcommerceApi service constructor.
    * @property {module:egoiApi/EcommerceApi}
    */
    EcommerceApi,

    /**
    * The EmailApi service constructor.
    * @property {module:egoiApi/EmailApi}
    */
    EmailApi,

    /**
    * The FieldsApi service constructor.
    * @property {module:egoiApi/FieldsApi}
    */
    FieldsApi,

    /**
    * The ListsApi service constructor.
    * @property {module:egoiApi/ListsApi}
    */
    ListsApi,

    /**
    * The MyAccountApi service constructor.
    * @property {module:egoiApi/MyAccountApi}
    */
    MyAccountApi,

    /**
    * The OperationsApi service constructor.
    * @property {module:egoiApi/OperationsApi}
    */
    OperationsApi,

    /**
    * The PingApi service constructor.
    * @property {module:egoiApi/PingApi}
    */
    PingApi,

    /**
    * The PushApi service constructor.
    * @property {module:egoiApi/PushApi}
    */
    PushApi,

    /**
    * The ReportsApi service constructor.
    * @property {module:egoiApi/ReportsApi}
    */
    ReportsApi,

    /**
    * The SegmentsApi service constructor.
    * @property {module:egoiApi/SegmentsApi}
    */
    SegmentsApi,

    /**
    * The SendersApi service constructor.
    * @property {module:egoiApi/SendersApi}
    */
    SendersApi,

    /**
    * The SmartSmsApi service constructor.
    * @property {module:egoiApi/SmartSmsApi}
    */
    SmartSmsApi,

    /**
    * The SmsApi service constructor.
    * @property {module:egoiApi/SmsApi}
    */
    SmsApi,

    /**
    * The SuppressionListApi service constructor.
    * @property {module:egoiApi/SuppressionListApi}
    */
    SuppressionListApi,

    /**
    * The TagsApi service constructor.
    * @property {module:egoiApi/TagsApi}
    */
    TagsApi,

    /**
    * The TrackEngageApi service constructor.
    * @property {module:egoiApi/TrackEngageApi}
    */
    TrackEngageApi,

    /**
    * The UsersApi service constructor.
    * @property {module:egoiApi/UsersApi}
    */
    UsersApi,

    /**
    * The UtilitiesApi service constructor.
    * @property {module:egoiApi/UtilitiesApi}
    */
    UtilitiesApi,

    /**
    * The VoiceApi service constructor.
    * @property {module:egoiApi/VoiceApi}
    */
    VoiceApi,

    /**
    * The WebHooksApi service constructor.
    * @property {module:egoiApi/WebHooksApi}
    */
    WebHooksApi,

    /**
    * The WebpushApi service constructor.
    * @property {module:egoiApi/WebpushApi}
    */
    WebpushApi
};
