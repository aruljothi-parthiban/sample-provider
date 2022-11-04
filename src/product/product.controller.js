const Product = require("./product");
const ProductRepository = require("./product.repository");

const repository = new ProductRepository();

exports.create = async (req, res) => {
    const data = req.body
    const product = new Product(data.id, data.type, data.name, data.version, data.price, data.description, data.sku);
    product ? res.send(product) : res.status(400).send({message: "invalid product"})
};
exports.getAll = async (req, res) => {
    res.send(await repository.fetchAll())
};
exports.getById = async (req, res) => {
    const product = await repository.getById(req.params.id);
    product ? res.send(product) : res.status(404).send({message: "Product not found"})
};

exports.getProductByCode = async(req, res) => {
    res.send({
        "availableForPickup": true,
        "averageRating": 0,
        "badges": [
            "string"
        ],
        "baseProduct": "string",
        "breadcrumbData": [
            {
                "name": "string",
                "url": "string"
            }
        ],
        "canonicalURL": "string",
        "categories": [
            {
                "code": "string",
                "image": {
                    "altText": "string",
                    "angleOrCrop": "string",
                    "assetID": "string",
                    "assetName": "string",
                    "assetType": "string",
                    "code": "string",
                    "damCreateDate": "2022-11-04T06:21:53.874Z",
                    "format": "string",
                    "galleryIndex": 0,
                    "imageSpinIndicator": true,
                    "imageType": "PRIMARY",
                    "isListingThumbnailImage": true,
                    "isPrimary": true,
                    "language": "string",
                    "mediaType": "string",
                    "order": "string",
                    "packageView": "string",
                    "productImageType": "string",
                    "url": "string",
                    "videoImageThumbnailDAMPath": "string",
                    "videoImageThumbnailURL": "string",
                    "videoPlatform": "string",
                    "videoShortDescription": "string",
                    "videoTitle": "string",
                    "videoType": "string"
                },
                "lowStockThreshold": 0,
                "name": "string",
                "url": "string"
            }
        ],
        "categoryName": "string",
        "classifications": [
            {
                "code": "string",
                "features": [
                    {
                        "code": "string",
                        "comparable": true,
                        "description": "string",
                        "featureUnit": {
                            "name": "string",
                            "symbol": "string",
                            "unitType": "string"
                        },
                        "featureValues": [
                            {
                                "value": "string"
                            }
                        ],
                        "name": "string",
                        "position": 0,
                        "range": true,
                        "type": "string",
                        "visibility": true
                    }
                ],
                "name": "string"
            }
        ],
        "code": "string",
        "configurable": true,
        "configuratorType": "string",
        "corporateStatus": "string",
        "ctcPrice": {
            "baseCoreCharges": 0,
            "baseEcoFees": 0,
            "ctcPriceType": "string",
            "ctcRebate": {
                "endDate": "string",
                "greyCopyMessage": "string",
                "instant": "string",
                "isPercentUsed": true,
                "iumap": "string",
                "iumapDiscount": 0,
                "message": "string",
                "nonIumapDiscount": 0,
                "pdfLink": "string",
                "percentDiscountValue": 0,
                "postTaxRebateAmount": 0,
                "postTaxRebateIncluded": true,
                "preTaxRebateAmount": 0,
                "preTaxRebateIncluded": true,
                "priceAfterRebate": 0,
                "quantityPer": 0,
                "startDate": "string",
                "tooltipHeader": "string",
                "tooltipMessage": "string",
                "value": 0
            },
            "currencyIso": "string",
            "currentUnitPrice": 0,
            "ecoFees": 0,
            "formattedValue": "string",
            "isIncludeInPriceRange": true,
            "maxQuantity": 0,
            "minQuantity": 0,
            "originalPrice": 0,
            "priceType": "BUY",
            "promoMessage": "string",
            "saveStory": "string",
            "totalEcoFees": 0,
            "value": 0
        },
        "description": "string",
        "divisionName": "string",
        "dwoEndDate": "2022-11-04T06:21:53.874Z",
        "featureBullets": [
            {
                "description": "string"
            }
        ],
        "feeMessages": [
            {
                "categoryCode": "string",
                "feeDisclaimerMessage": "string",
                "feeTitle": "string",
                "feeValue": "string",
                "tooltipHeader": "string",
                "tooltipMessage": "string",
                "type": "string"
            }
        ],
        "fineLineName": "string",
        "fitmentTypeCode": "string",
        "formattedCode": "string",
        "futureStocks": [
            {
                "date": "2022-11-04T06:21:53.874Z",
                "formattedDate": "string",
                "stock": {
                    "isValueRounded": true,
                    "stockLevel": 0,
                    "stockLevelStatus": "string"
                }
            }
        ],
        "goodBetterBestRanking": "string",
        "hotDealThreshold": 0,
        "hreflangLinkData": [
            {
                "href": "string",
                "hreflang": "string"
            }
        ],
        "images": [
            {
                "altText": "string",
                "angleOrCrop": "string",
                "assetID": "string",
                "assetName": "string",
                "assetType": "string",
                "code": "string",
                "damCreateDate": "2022-11-04T06:21:53.874Z",
                "format": "string",
                "galleryIndex": 0,
                "imageSpinIndicator": true,
                "imageType": "PRIMARY",
                "isListingThumbnailImage": true,
                "isPrimary": true,
                "language": "string",
                "mediaType": "string",
                "order": "string",
                "packageView": "string",
                "productImageType": "string",
                "url": "string",
                "videoImageThumbnailDAMPath": "string",
                "videoImageThumbnailURL": "string",
                "videoPlatform": "string",
                "videoShortDescription": "string",
                "videoTitle": "string",
                "videoType": "string"
            }
        ],
        "installationEligible": true,
        "isBestSeller": true,
        "isBulk": true,
        "isEligibleForExpressDelivery": true,
        "isExclusive": true,
        "isLimitedPDP": true,
        "isOnlineOnly": true,
        "isPerfectGiftBadge": true,
        "isServiceProduct": true,
        "isTestedForLife": true,
        "isVehicleRequired": true,
        "limitedTimeThreshold": 0,
        "lobname": "string",
        "lowStockThreshold": 0,
        "loyaltyEndDate": "2022-11-04T06:21:53.874Z",
        "loyaltyOfferRule": "string",
        "loyaltyStartDate": "2022-11-04T06:21:53.874Z",
        "manufacturer": "string",
        "maxOrderQuantity": 0,
        "medias": [
            {
                "altText": "string",
                "angleOrCrop": "string",
                "assetID": "string",
                "assetName": "string",
                "assetType": "string",
                "code": "string",
                "damCreateDate": "2022-11-04T06:21:53.874Z",
                "format": "string",
                "galleryIndex": 0,
                "imageSpinIndicator": true,
                "imageType": "PRIMARY",
                "isListingThumbnailImage": true,
                "isPrimary": true,
                "language": "string",
                "mediaType": "string",
                "order": "string",
                "packageView": "string",
                "productImageType": "string",
                "url": "string",
                "videoImageThumbnailDAMPath": "string",
                "videoImageThumbnailURL": "string",
                "videoPlatform": "string",
                "videoShortDescription": "string",
                "videoTitle": "string",
                "videoType": "string"
            }
        ],
        "metaRobot": "string",
        "multidimensional": true,
        "name": "string",
        "numberOfReviews": 0,
        "potentialPromotions": [
            {
                "code": "string",
                "couldFireMessages": [
                    "string"
                ],
                "description": "string",
                "enabled": true,
                "endDate": "2022-11-04T06:21:53.874Z",
                "firedMessages": [
                    "string"
                ],
                "priority": 0,
                "productBanner": {
                    "altText": "string",
                    "angleOrCrop": "string",
                    "assetID": "string",
                    "assetName": "string",
                    "assetType": "string",
                    "code": "string",
                    "damCreateDate": "2022-11-04T06:21:53.874Z",
                    "format": "string",
                    "galleryIndex": 0,
                    "imageSpinIndicator": true,
                    "imageType": "PRIMARY",
                    "isListingThumbnailImage": true,
                    "isPrimary": true,
                    "language": "string",
                    "mediaType": "string",
                    "order": "string",
                    "packageView": "string",
                    "productImageType": "string",
                    "url": "string",
                    "videoImageThumbnailDAMPath": "string",
                    "videoImageThumbnailURL": "string",
                    "videoPlatform": "string",
                    "videoShortDescription": "string",
                    "videoTitle": "string",
                    "videoType": "string"
                },
                "promotionGroup": "string",
                "promotionType": "string",
                "restrictions": [
                    {
                        "description": "string",
                        "restrictionType": "string"
                    }
                ],
                "startDate": "2022-11-04T06:21:53.874Z",
                "title": "string"
            }
        ],
        "price": {
            "currencyIso": "string",
            "formattedValue": "string",
            "maxQuantity": 0,
            "minQuantity": 0,
            "priceType": "BUY",
            "value": 0
        },
        "priceRange": {
            "maxPrice": {
                "baseCoreCharges": 0,
                "baseEcoFees": 0,
                "ctcPriceType": "string",
                "ctcRebate": {
                    "endDate": "string",
                    "greyCopyMessage": "string",
                    "instant": "string",
                    "isPercentUsed": true,
                    "iumap": "string",
                    "iumapDiscount": 0,
                    "message": "string",
                    "nonIumapDiscount": 0,
                    "pdfLink": "string",
                    "percentDiscountValue": 0,
                    "postTaxRebateAmount": 0,
                    "postTaxRebateIncluded": true,
                    "preTaxRebateAmount": 0,
                    "preTaxRebateIncluded": true,
                    "priceAfterRebate": 0,
                    "quantityPer": 0,
                    "startDate": "string",
                    "tooltipHeader": "string",
                    "tooltipMessage": "string",
                    "value": 0
                },
                "currencyIso": "string",
                "currentUnitPrice": 0,
                "ecoFees": 0,
                "formattedValue": "string",
                "isIncludeInPriceRange": true,
                "maxQuantity": 0,
                "minQuantity": 0,
                "originalPrice": 0,
                "priceType": "BUY",
                "promoMessage": "string",
                "saveStory": "string",
                "totalEcoFees": 0,
                "value": 0
            },
            "minPrice": {
                "baseCoreCharges": 0,
                "baseEcoFees": 0,
                "ctcPriceType": "string",
                "ctcRebate": {
                    "endDate": "string",
                    "greyCopyMessage": "string",
                    "instant": "string",
                    "isPercentUsed": true,
                    "iumap": "string",
                    "iumapDiscount": 0,
                    "message": "string",
                    "nonIumapDiscount": 0,
                    "pdfLink": "string",
                    "percentDiscountValue": 0,
                    "postTaxRebateAmount": 0,
                    "postTaxRebateIncluded": true,
                    "preTaxRebateAmount": 0,
                    "preTaxRebateIncluded": true,
                    "priceAfterRebate": 0,
                    "quantityPer": 0,
                    "startDate": "string",
                    "tooltipHeader": "string",
                    "tooltipMessage": "string",
                    "value": 0
                },
                "currencyIso": "string",
                "currentUnitPrice": 0,
                "ecoFees": 0,
                "formattedValue": "string",
                "isIncludeInPriceRange": true,
                "maxQuantity": 0,
                "minQuantity": 0,
                "originalPrice": 0,
                "priceType": "BUY",
                "promoMessage": "string",
                "saveStory": "string",
                "totalEcoFees": 0,
                "value": 0
            }
        },
        "priceRanges": [
            {
                "priceRange": {
                    "maxPrice": {
                        "baseCoreCharges": 0,
                        "baseEcoFees": 0,
                        "ctcPriceType": "string",
                        "ctcRebate": {
                            "endDate": "string",
                            "greyCopyMessage": "string",
                            "instant": "string",
                            "isPercentUsed": true,
                            "iumap": "string",
                            "iumapDiscount": 0,
                            "message": "string",
                            "nonIumapDiscount": 0,
                            "pdfLink": "string",
                            "percentDiscountValue": 0,
                            "postTaxRebateAmount": 0,
                            "postTaxRebateIncluded": true,
                            "preTaxRebateAmount": 0,
                            "preTaxRebateIncluded": true,
                            "priceAfterRebate": 0,
                            "quantityPer": 0,
                            "startDate": "string",
                            "tooltipHeader": "string",
                            "tooltipMessage": "string",
                            "value": 0
                        },
                        "currencyIso": "string",
                        "currentUnitPrice": 0,
                        "ecoFees": 0,
                        "formattedValue": "string",
                        "isIncludeInPriceRange": true,
                        "maxQuantity": 0,
                        "minQuantity": 0,
                        "originalPrice": 0,
                        "priceType": "BUY",
                        "promoMessage": "string",
                        "saveStory": "string",
                        "totalEcoFees": 0,
                        "value": 0
                    },
                    "minPrice": {
                        "baseCoreCharges": 0,
                        "baseEcoFees": 0,
                        "ctcPriceType": "string",
                        "ctcRebate": {
                            "endDate": "string",
                            "greyCopyMessage": "string",
                            "instant": "string",
                            "isPercentUsed": true,
                            "iumap": "string",
                            "iumapDiscount": 0,
                            "message": "string",
                            "nonIumapDiscount": 0,
                            "pdfLink": "string",
                            "percentDiscountValue": 0,
                            "postTaxRebateAmount": 0,
                            "postTaxRebateIncluded": true,
                            "preTaxRebateAmount": 0,
                            "preTaxRebateIncluded": true,
                            "priceAfterRebate": 0,
                            "quantityPer": 0,
                            "startDate": "string",
                            "tooltipHeader": "string",
                            "tooltipMessage": "string",
                            "value": 0
                        },
                        "currencyIso": "string",
                        "currentUnitPrice": 0,
                        "ecoFees": 0,
                        "formattedValue": "string",
                        "isIncludeInPriceRange": true,
                        "maxQuantity": 0,
                        "minQuantity": 0,
                        "originalPrice": 0,
                        "priceType": "BUY",
                        "promoMessage": "string",
                        "saveStory": "string",
                        "totalEcoFees": 0,
                        "value": 0
                    }
                },
                "priceType": "string"
            }
        ],
        "primaryCategoryPath": "string",
        "primarySellingBanner": "string",
        "productBrand": "string",
        "productManualLink": [
            "string"
        ],
        "productPrices": [
            {
                "baseCoreCharges": 0,
                "baseEcoFees": 0,
                "ctcPriceType": "string",
                "ctcRebate": {
                    "endDate": "string",
                    "greyCopyMessage": "string",
                    "instant": "string",
                    "isPercentUsed": true,
                    "iumap": "string",
                    "iumapDiscount": 0,
                    "message": "string",
                    "nonIumapDiscount": 0,
                    "pdfLink": "string",
                    "percentDiscountValue": 0,
                    "postTaxRebateAmount": 0,
                    "postTaxRebateIncluded": true,
                    "preTaxRebateAmount": 0,
                    "preTaxRebateIncluded": true,
                    "priceAfterRebate": 0,
                    "quantityPer": 0,
                    "startDate": "string",
                    "tooltipHeader": "string",
                    "tooltipMessage": "string",
                    "value": 0
                },
                "currencyIso": "string",
                "currentUnitPrice": 0,
                "ecoFees": 0,
                "formattedValue": "string",
                "isIncludeInPriceRange": true,
                "maxQuantity": 0,
                "minQuantity": 0,
                "originalPrice": 0,
                "priceType": "BUY",
                "promoMessage": "string",
                "saveStory": "string",
                "totalEcoFees": 0,
                "value": 0
            }
        ],
        "productStatus": "string",
        "productWheelTypeCode": "string",
        "purchasable": true,
        "rating": {
            "averageRating": 0,
            "numberOfReviews": 0
        },
        "repairOrderRequired": true,
        "reviews": [
            {
                "alias": "string",
                "comment": "string",
                "date": "2022-11-04T06:21:53.875Z",
                "headline": "string",
                "id": "string",
                "principal": {
                    "currency": {
                        "active": true,
                        "isocode": "string",
                        "name": "string",
                        "symbol": "string"
                    },
                    "customerId": "string",
                    "deactivationDate": "2022-11-04T06:21:53.875Z",
                    "defaultAddress": {
                        "cellphone": "string",
                        "companyName": "string",
                        "country": {
                            "isocode": "string",
                            "name": "string"
                        },
                        "defaultAddress": true,
                        "district": "string",
                        "email": "string",
                        "fax": "string",
                        "firstName": "string",
                        "formattedAddress": "string",
                        "id": "string",
                        "lastName": "string",
                        "line1": "string",
                        "line2": "string",
                        "phone": "string",
                        "phone2": "string",
                        "postalCode": "string",
                        "region": {
                            "countryIso": "string",
                            "isocode": "string",
                            "isocodeShort": "string",
                            "name": "string"
                        },
                        "shippingAddress": true,
                        "title": "string",
                        "titleCode": "string",
                        "town": "string",
                        "visibleInAddressBook": true
                    },
                    "displayUid": "string",
                    "firstName": "string",
                    "language": {
                        "active": true,
                        "isocode": "string",
                        "name": "string",
                        "nativeName": "string"
                    },
                    "lastName": "string",
                    "name": "string",
                    "title": "string",
                    "titleCode": "string",
                    "uid": "string"
                },
                "rating": 0
            }
        ],
        "serviceInstallationMessage": "string",
        "sizeGuide": [
            {
                "altText": "string",
                "angleOrCrop": "string",
                "assetID": "string",
                "assetName": "string",
                "assetType": "string",
                "code": "string",
                "damCreateDate": "2022-11-04T06:21:53.875Z",
                "format": "string",
                "galleryIndex": 0,
                "imageSpinIndicator": true,
                "imageType": "PRIMARY",
                "isListingThumbnailImage": true,
                "isPrimary": true,
                "language": "string",
                "mediaType": "string",
                "order": "string",
                "packageView": "string",
                "productImageType": "string",
                "url": "string",
                "videoImageThumbnailDAMPath": "string",
                "videoImageThumbnailURL": "string",
                "videoPlatform": "string",
                "videoShortDescription": "string",
                "videoTitle": "string",
                "videoType": "string"
            }
        ],
        "specifications": [
            {
                "code": "string",
                "features": [
                    {
                        "code": "string",
                        "comparable": true,
                        "description": "string",
                        "featureUnit": {
                            "name": "string",
                            "symbol": "string",
                            "unitType": "string"
                        },
                        "featureValues": [
                            {
                                "value": "string"
                            }
                        ],
                        "name": "string",
                        "position": 0,
                        "range": true,
                        "type": "string",
                        "visibility": true
                    }
                ],
                "name": "string"
            }
        ],
        "status": "string",
        "stock": {
            "isValueRounded": true,
            "stockLevel": 0,
            "stockLevelStatus": "string"
        },
        "subCategoryName": "string",
        "summary": "string",
        "tags": [
            "string"
        ],
        "tireRoadRatings": [
            {
                "ratingId": "string",
                "value": "string"
            }
        ],
        "url": "string",
        "variantType": "string",
        "volumePrices": [
            {
                "currencyIso": "string",
                "formattedValue": "string",
                "maxQuantity": 0,
                "minQuantity": 0,
                "priceType": "BUY",
                "value": 0
            }
        ],
        "volumePricesFlag": true,
        "warranty": {
            "additionalWarrantyMessage": "string",
            "warrantyMessage": "string",
            "warrantyType": "string"
        }
    });
}

exports.repository = repository;