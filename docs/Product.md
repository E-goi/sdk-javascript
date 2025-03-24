# egoisdk.Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **[String]** | Array of product categories, using the character &#39;&gt;&#39; as delimiter for the breadcrumb                                 syntax | [optional] 
**relatedProducts** | **[String]** | Related products, array of &#39;product_identifier&#39; | [optional] 
**customAttributes** | [**[ProductCustomAttributes]**](ProductCustomAttributes.md) | Custom attributes | [optional] 
**productIdentifier** | **String** | The ID of the product in your store | [optional] 
**catalogId** | **Number** |  | [optional] [readonly] 
**name** | **String** | Name of the product | [optional] 
**description** | **String** | Description of the product | [optional] 
**sku** | **String** | Stock Keeping Unit | [optional] 
**upc** | **String** | Universal Product Code | [optional] 
**ean** | **String** | European Article Numbering | [optional] 
**gtin** | **String** | Global Trade Item Number | [optional] 
**mpn** | **String** | Manufacturer Part Number | [optional] 
**link** | **String** | Link for the product | [optional] 
**imageLink** | **String** | Link for the product image | [optional] 
**price** | **Number** | Price of the product | [optional] [default to 0]
**salePrice** | **Number** | Sale price of the product | [optional] [default to 0]
**brand** | **String** | Brand of the product | [optional] 


