# egoisdk.GoalInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Goal type | [optional] 
**multipleConversion** | **Boolean** | Goal is multiple conversion | [optional] 
**rule** | **String** | Goal rule | [optional] 
**condition** | **String** | Goal condition | [optional] 
**pattern** | **String** | Goal pattern | [optional] 
**caseSensitive** | **Boolean** | Goal pattern case sensitive | [optional] 
**minutes** | **Number** | Goal trigger time in minutes | [optional] 



## Enum: TypeEnum


* `time` (value: `"time"`)





## Enum: RuleEnum


* `url` (value: `"url"`)

* `title` (value: `"title"`)

* `download` (value: `"download"`)

* `external_url` (value: `"external_url"`)





## Enum: ConditionEnum


* `contains` (value: `"contains"`)

* `exactly` (value: `"exactly"`)

* `regex` (value: `"regex"`)




