// Type definitions for pinterest-node-api

declare class BaseClient {

}

declare class AdAccount extends BaseClient {
  getAll(params: any): Promise<any>;
  create(params: any): Promise<any>;
  get(params: any): Promise<any>;
  getAnalytics(params: any): Promise<any>;
  getReport(params: any): Promise<any>;
  createReport(params: any): Promise<any>;
  getTargetedAnalytics(params: any): Promise<any>;
}

declare class AdGroups extends BaseClient {
  getTargetedAnalytics(params: any): Promise<any>;
  getAll(params: any): Promise<any>;
  create(params: any): Promise<any>;
  update(params: any): Promise<any>;
  get(params: any): Promise<any>;
  getAnalytics(params: any): Promise<any>;
  getBidFloors(params: any): Promise<any>;
}

declare class Ads extends BaseClient {
  getTargetedAnalytics(params: any): Promise<any>;
  getAll(params: any): Promise<any>;
  create(params: any): Promise<any>;
  update(params: any): Promise<any>;
  get(params: any): Promise<any>;
  getAnalytics(params: any): Promise<any>;
  createPreview(params: any): Promise<any>;
}

declare class AudienceInsights extends BaseClient {
  get(params: any): Promise<any>;
}

declare class Audiences extends BaseClient {
  get(params: any): Promise<any>;
  getAll(params: any): Promise<any>;
  create(params: any): Promise<any>;
  update(params: any): Promise<any>;
}

declare class Boards extends BaseClient {
  getAll(params: string): Promise<any>;
  create(params: any): Promise<any>;
  get(params: string): Promise<any>;
  update(params: string): Promise<any>;
  delete(params: string): Promise<any>;
  getAllSections(params: string): Promise<any>;
  createSection(params: any): Promise<any>;
  getSectionPins(params: string): Promise<any>;
  updateSection(params: string): Promise<any>;
  deleteSection(params: string): Promise<any>;
  getPins(params: string): Promise<any>;
}

declare class Bulk extends BaseClient {
  get(params: string): Promise<any>;
  upsert(params: any): Promise<any>;
  download(params: string): Promise<any>;
}

declare class Campaigns extends BaseClient {
  getAll(params: string): Promise<any>;
  create(params: any): Promise<any>;
  update(params: string): Promise<any>;
  get(params: string): Promise<any>;
  getAnalytics(params: string): Promise<any>;
  getTargetedAnalytics(params: string): Promise<any>;
}

declare class Catalogs extends BaseClient {
  getFeeds(params: string): Promise<any>;
  getFeed(params: string): Promise<any>;
  createFeed(params: any): Promise<any>;
  updateFeed(params: string): Promise<any>;
  deleteFeed(params: string): Promise<any>;
  getFeedProcessingResults(params: string): Promise<any>;
  getFeedProcessingResultIssues(params: string): Promise<any>;
  getItems(params: string): Promise<any>;
  getItemsBatch(params: string): Promise<any>;
  operateItemBatch(params: string): Promise<any>;
  getFilteredProducts(params: string): Promise<any>;
  getProductGroup(params: string): Promise<any>;
  deleteProductGroup(params: string): Promise<any>;
  updateProductGroup(params: string): Promise<any>;
  getProducts(params: string): Promise<any>;
  getProductCount(params: string): Promise<any>;
  getProductGroups(params: string): Promise<any>;
  createProductGroup(params: string): Promise<any>;
}

declare class ConversionEvents extends BaseClient {
  send(params: string): Promise<any>;
}

declare class ConversionTags extends BaseClient {
  getAll(params: string): Promise<any>;
  create(params: string): Promise<any>;
  getPageVisit(params: string): Promise<any>;
  get(params: string): Promise<any>;
  getOcpmEligible(params: string): Promise<any>;
}

declare class CustomerLists extends BaseClient {
  get(params: any): Promise<any>;
  getAll(params: any): Promise<any>;
  create(params: any): Promise<any>;
  update(params: any): Promise<any>;
}

declare class Keywords extends BaseClient {
  get(params: any): Promise<any>;
  create(params: any): Promise<any>;
  getCountryKeywordMetrics(params: any): Promise<any>;
}

declare class Media extends BaseClient {
  getAll(params: any): Promise<any>;
  register(params: any): Promise<any>;
  get(params: any): Promise<any>;
}

declare class OAuth extends BaseClient {
  createAccessToken(params: any): Promise<any>;
}

declare class OrderLines extends BaseClient {
  getAll(params: any): Promise<any>;
  get(params: any): Promise<any>;
}

declare class Pins extends BaseClient {

  create(params: any): Promise<any>;
  get(params: string): Promise<any>;
  delete(params: string): Promise<any>;
  save(params: string): Promise<any>;
  getAnalytics(params: string): Promise<any>;

}

declare class ProductGroupPromotions extends BaseClient {

  getAnalytics(params: string): Promise<any>;
  create(params: any): Promise<any>;
  update(params: string): Promise<any>;
  getAll(params: string): Promise<any>;
  get(params: string): Promise<any>;

}

declare class Resources extends BaseClient {

  getAdAccountCountries(params: string): Promise<any>;
  getAvailableMetrics(params: any): Promise<any>;
  getMetricsReadyState(params: any): Promise<any>;
  getInterest(params: any): Promise<any>;
  getTargetingOptions(params: string): Promise<any>;

}

declare class TermsOfService extends BaseClient {

  get(params: string): Promise<any>;

}

declare class Terms extends BaseClient {

  getSuggested(params: string): Promise<any>;
  getRelated(params: string): Promise<any>;

}

declare class UserAccount extends BaseClient {

  get(params: any): Promise<any>;
  getAnalytics(params: any): Promise<any>;
  getTopPinsAnalytics(params: any): Promise<any>;
  getTopVideoPinsAnalytics(params: any): Promise<any>;

}

declare class pinterestNodeClient {

  constructor()

  constructor(accessToken: string);

  setHost(host?: string, port?: string, protocol?: string): void;

  setUserToken(userToken: string): void;

  ads: Ads;
  pins: Pins;
  bulk: Bulk;

  media: Media;
  terms: Terms;
  oauth: OAuth;

  boards: Boards;

  keywords: Keywords;
  catalogs: Catalogs;
  ad_groups: AdGroups;

  campaigns: Campaigns;
  audiences: Audiences;
  resources: Resources;
  ad_account: AdAccount;

  order_lines: OrderLines;
  user_account: UserAccount;

  customer_lists: CustomerLists;
  conversion_tags: ConversionTags;
  terms_of_service: TermsOfService;

  audience_insights: AudienceInsights;
  conversion_events: ConversionEvents;

  product_group_promotions: ProductGroupPromotions;
}

declare namespace pinterestNodeClient {

}
export = pinterestNodeClient;