# egoiSdk.Operation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operationId** | **Number** |  | [optional] 
**operationData** | [**OperationOperationData**](OperationOperationData.md) |  | [optional] 
**type** | **String** | Type of operation | [optional] 
**status** | **String** | State of the operation | [optional] 
**createdBy** | **Number** |  | [optional] 
**created** | **Date** |  | [optional] 
**startDate** | **Date** |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `import_contacts` (value: `"import_contacts"`)

* `export_contacts` (value: `"export_contacts"`)

* `export_reports` (value: `"export_reports"`)

* `advanced_report` (value: `"advanced_report"`)

* `email` (value: `"email"`)

* `sms` (value: `"sms"`)

* `smart_sms` (value: `"smart_sms"`)

* `voice` (value: `"voice"`)

* `push` (value: `"push"`)

* `webpush` (value: `"webpush"`)

* `ads` (value: `"ads"`)

* `segment_generation` (value: `"segment_generation"`)

* `mass_operation` (value: `"mass_operation"`)

* `unify` (value: `"unify"`)




<a name="StatusEnum"></a>
## Enum: StatusEnum


* `queued` (value: `"queued"`)

* `processing` (value: `"processing"`)

* `executing` (value: `"executing"`)

* `paused` (value: `"paused"`)




