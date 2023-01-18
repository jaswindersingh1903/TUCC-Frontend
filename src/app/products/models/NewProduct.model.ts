export interface Product {
    ProductName?:any;
    ProductSubTitle?: number;
    ProductCode?: string;
    DateEdited?: string;
    ActiveItem?: any;
    OutofStock?: any;

    //Show in Catalog / Product Listings
    Featured?: string;
    Description?: string;
    Description2?: string;
    ShortDescription?: string;
    Keywords?: string;

    MetaTitle?: string;
    MetaDescription?: string;
    AllowInvoice?: string;
    ThumbnailURL?: string;
    HeadingImageURL?: string;
    LargeImageURL?: string;	


    Inventory?: string;
    VisibilityStart?: string;
    VisibilityEnd?: string;	
    PurchasableStart?: string;	
    PurchasableEnd?: string;
    Prices?: string;
    
    ProductFinance?: string;
    ProductOwnerEmails?: string;
    RelatedProducts?: string;
    Categories?: string;
  }