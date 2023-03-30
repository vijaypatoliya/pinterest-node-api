// Type definitions for pinterest-node-api

declare class BaseClient {

}

declare class AdAccounts extends BaseClient {
  list(params: any): Promise<any>;
  create(params: any): Promise<any>;
  get(params: any): Promise<any>;
  getAnalytics(params: any): Promise<any>;
  getReport(params: any): Promise<any>;
  createReport(params: any): Promise<any>;
  getTargetedAnalytics(params: any): Promise<any>;
}

declare class AdGroups extends BaseClient {
  getTargetedAnalytics(ad_account_id: string): Promise<any>;
  list(ad_account_id: string): Promise<any>;
  create(id: string, params: any): Promise<any>;
  update(ad_account_id: string, params: any): Promise<any>;
  get(ad_account_id: string, ad_group_id: string): Promise<any>;
  getAnalytics(ad_account_id: string): Promise<any>;
  getBidFloors(ad_account_id: string): Promise<any>;
}

declare class Ads extends BaseClient {
  getTargetedAnalytics(ad_account_id: string): Promise<any>;
  list(ad_account_id: string): Promise<any>;
  create(ad_account_id: string, body: any): Promise<any>;
  update(params: any): Promise<any>;
  get(ad_account_id: string, ads_id: string): Promise<any>;
  getAnalytics(ad_account_id: string): Promise<any>;
  createPreview(ad_account_id: string, body: any): Promise<any>;
}

declare class AudienceInsights extends BaseClient {
  get(ad_account_id: string): Promise<any>;
}

declare class Audiences extends BaseClient {
  get(ad_account_id: string, audience_id: string): Promise<any>;
  list(ad_account_id: any): Promise<any>;
  create(ad_account_id: string, payload: any): Promise<any>;
  update(ad_account_id: string, audience_id: string, payload: any): Promise<any>;
}

declare class Boards extends BaseClient {
  list(params: any): Promise<any>;
  create(params: any): Promise<any>;
  get(params: string): Promise<any>;
  update(board_id: string, params: any): Promise<any>;
  delete(params: string): Promise<any>;
  getSections(params: string): Promise<any>;
  createSection(params: any): Promise<any>;
  getSectionPins(params: string): Promise<any>;
  updateSection(board_id: string, section_id: string, params: any): Promise<any>;
  deleteSection(board_id: string, section_id: string): Promise<any>;
  getPins(board_id: string): Promise<any>;
}

declare class Bulk extends BaseClient {
  get(ad_account_id: string, payload: any): Promise<any>;
  upsert(ad_account_id: string, payload: any): Promise<any>;
  download(ad_account_id: string, bulk_request_id: string): Promise<any>;
}

declare class Campaigns extends BaseClient {
  list(ad_account_id: string): Promise<any>;
  create(ad_account_id: string, params: any): Promise<any>;
  update(ad_account_id: string): Promise<any>;
  get(ad_account_id: string, campaign_id: string): Promise<any>;
  getAnalytics(ad_account_id: string): Promise<any>;
  getTargetedAnalytics(ad_account_id: string): Promise<any>;
}

declare class Catalogs extends BaseClient {
  getFeeds(): Promise<any>;
  getFeed(feed_id: string): Promise<any>;
  createFeed(payload: any): Promise<any>;
  updateFeed(feed_id: string, payload: any): Promise<any>;
  deleteFeed(feed_id: string): Promise<any>;
  getFeedProcessingResults(feed_id: string): Promise<any>;
  getFeedProcessingResultIssues(processing_result_id: string): Promise<any>;
  getItems(): Promise<any>;
  getItemsBatch(batch_id: string): Promise<any>;
  operateItemBatch(params: string): Promise<any>;
  getFilteredProducts(params: string): Promise<any>;
  getProductGroup(product_group_id: string): Promise<any>;
  deleteProductGroup(product_group_id: string): Promise<any>;
  updateProductGroup(product_group_id: string, payload: any): Promise<any>;
  getProducts(product_group_id: string): Promise<any>;
  getProductCount(product_group_id: string): Promise<any>;
  getProductGroups(): Promise<any>;
  createProductGroup(payload: any): Promise<any>;
}

declare class ConversionEvents extends BaseClient {
  send(ad_account_id: string, payload: any): Promise<any>;
}

declare class ConversionTags extends BaseClient {
  list(ad_account_id: string): Promise<any>;
  create(payload: string): Promise<any>;
  getPageVisit(ad_account_id: string): Promise<any>;
  get(ad_account_id: string, conversion_tag_id: string): Promise<any>;
  getOcpmEligible(ad_account_id: string): Promise<any>;
}

declare class CustomerLists extends BaseClient {
  get(ad_account_id: string, customer_list_id: string): Promise<any>;
  list(ad_account_id: string): Promise<any>;
  create(ad_account_id: string, payload: any): Promise<any>;
  update(ad_account_id: string, customer_list_id: string, payload: any): Promise<any>;
}

declare class Keywords extends BaseClient {
  get(ad_account_id: string): Promise<any>;
  create(ad_account_id: string): Promise<any>;
  getCountryKeywordMetrics(ad_account_id: string): Promise<any>;
}

declare class Media extends BaseClient {
  list(): Promise<any>;
  register(payload: any): Promise<any>;
  get(media_id: string): Promise<any>;
}

declare class OAuth extends BaseClient {
  createAccessToken(payload: any): Promise<any>;
}

declare class OrderLines extends BaseClient {
  list(ad_account_id: string): Promise<any>;
  get(ad_account_id: string, order_line_id: string): Promise<any>;
}

declare class Pins extends BaseClient {

  create(payload: any): Promise<any>;
  get(pin_id: string): Promise<any>;
  list(query: any): Promise<any>;
  delete(pin_id: string): Promise<any>;
  save(pin_id: string, payload: any): Promise<any>;
  getAnalytics(params: string): Promise<any>;

}

declare class ProductGroupPromotions extends BaseClient {

  getAnalytics(ad_account_id: string): Promise<any>;
  create(ad_account_id: string, payload: any): Promise<any>;
  update(ad_account_id: string, payload: string): Promise<any>;
  list(ad_account_id: string): Promise<any>;
  get(ad_account_id: string, product_group_promotion_id: string): Promise<any>;

}

declare class Resources extends BaseClient {

  getAdAccountCountries(): Promise<any>;
  getAvailableMetrics(): Promise<any>;
  getMetricsReadyState(): Promise<any>;
  getInterest(interest_id: string): Promise<any>;
  getTargetingOptions(targeting_type: string): Promise<any>;

}

declare class TermsOfService extends BaseClient {

  get(ad_account_id: string): Promise<any>;

}

declare class Terms extends BaseClient {

  getSuggested(): Promise<any>;
  getRelated(): Promise<any>;

}

declare class UserAccount extends BaseClient {

  get(): Promise<any>;
  getAnalytics(): Promise<any>;
  getTopPinsAnalytics(): Promise<any>;
  getTopVideoPinsAnalytics(): Promise<any>;

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
  ad_accounts: AdAccounts;

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
