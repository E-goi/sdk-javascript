# egoisdk.SavedSegmentAllOf1SegmentFilterSegmentFilterArray

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**segmentField** | **String** | Field internal name (retrieve fields using GET: /lists/{list_id}/fields) | [optional] 
**segmentOperator** | **String** | Segment operator used for comparison. When using a range of dates split them                                             using the following format: date1||date2 | [optional] 
**segmentValue** | **String** | Segment search value | [optional] 



## Enum: SegmentOperatorEnum


* `equal_to` (value: `"equal_to"`)

* `not_equal_to` (value: `"not_equal_to"`)

* `greater_or_equal_to` (value: `"greater_or_equal_to"`)

* `greater_than` (value: `"greater_than"`)

* `less_or_equal_to` (value: `"less_or_equal_to"`)

* `less_than` (value: `"less_than"`)

* `contains` (value: `"contains"`)

* `does_not_contain` (value: `"does_not_contain"`)

* `begins_with` (value: `"begins_with"`)

* `ends_with` (value: `"ends_with"`)

* `date_range` (value: `"date_range"`)




