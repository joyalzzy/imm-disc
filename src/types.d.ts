export interface IMMResponse {
    totalcount: number
    properties: Property[]
  }
  
  export interface Property {
    _rel_brandtenants_details: RelBrandtenantsDetail[]
    dealExisted: boolean
    listingTypePages: ListingTypePages
    entityname: string
    "jcr:title": string
    acceptseCapitavoucher?: string
    foodTypes?: string[]
    acceptsCapita3Eats?: string
    _rel_deals: any
    acceptsCapitacard?: string
    "cq:tags"?: string[]
    shortdescription?: string
    thumbnail: string
    _rel_tenants_details: RelTenantsDetail[]
    entityType: string
    firstPublished: any
    pagePath: string
    storeVibe: string[]
    _rel_properties_details: RelPropertiesDetail2[]
    acceptsCapitavoucher: string
    acceptsDbsInstantEarn?: string
    marketingcategory: string[]
    chopelink?: string
    storeStatus?: string
  }
  
  export interface RelBrandtenantsDetail {
    entityname: string
    "jcr:title": string
    currentpath: string
  }
  
  export interface ListingTypePages {}
  
  export interface RelTenantsDetail {
    entityname: string
    _rel_properties_details: RelPropertiesDetail[]
    "jcr:title": string
    currentpath: string
  }
  
  export interface RelPropertiesDetail {
    entityname: string
    "jcr:title": string
    currentpath: string
  }
  
  export interface RelPropertiesDetail2 {
    entityname: string
    "jcr:title": string
    currentpath: string
  }
  
