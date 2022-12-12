# egoisdk.ContactExportRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **String** | File extension to export contacts | 
**callbackUrl** | **String** | Url to receive the webhook | [optional] 
**segments** | **[String]** | Array of segment IDs to filter contacts to export. ***Note:*** segments of type ***auto*** and                         ***tag*** are not yet supported but they are expected to be supported soon! | [optional] 
**fields** | **[String]** | Array of field IDs to be displayed in the exported file | [optional] 



## Enum: FormatEnum


* `csv` (value: `"csv"`)

* `xml` (value: `"xml"`)




