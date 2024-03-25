export interface RootObject {
  author:     Author;
  categories: Category[];
  items:      Item[];
 }
 
 export interface Author {
  name: string,
  lastname: string
 }
 
 export interface Category {
  id:   string;
  name: string;
 }
 
 export interface Item {
  accepts_mercadopago:   boolean;
  attributes:            Attribute[];
  available_quantity:    number;
  buying_mode:           BuyingMode;
  catalog_listing:       boolean;
  catalog_product_id:    null | string;
  category_id:           CategoryID;
  condition:             Condition;
  currency_id:           CurrencyID;
  differential_pricing?: DifferentialPricing;
  discounts:             null;
  domain_id:             DomainID;
  id:                    string;
  installments:          Installments;
  inventory_id:          null;
  listing_type_id:       ListingTypeID;
  official_store_id:     number | null;
  official_store_name?:  OfficialStoreName;
  order_backend:         number;
  original_price:        number | null;
  permalink:             string;
  price:                 number;
  promotions:            any[];
  sale_price:            null;
  seller:                Seller;
  shipping:              Shipping;
  site_id:               SiteID;
  stop_time:             Date;
  thumbnail:             string;
  thumbnail_id:          string;
  title:                 string;
  use_thumbnail_id:      boolean;
  variation_filters?:    VariationFilter[];
  variations_data?:      { [key: string]: VariationsDatum };
  winner_item_id:        null;
 }
 
 export interface Attribute {
  attribute_group_id:   AttributeGroupID;
  attribute_group_name: AttributeGroupName;
  id:                   ID;
  name:                 Name;
  source:               number;
  value_id:             null | string;
  value_name:           null | string;
  value_struct:         null;
  value_type:           ValueType;
  values:               Value[];
 }
 
 export enum AttributeGroupID {
  Others = "OTHERS",
 }
 
 export enum AttributeGroupName {
  Otros = "Otros",
 }
 
 export enum ID {
  Brand = "BRAND",
  Gtin = "GTIN",
  ItemCondition = "ITEM_CONDITION",
  Line = "LINE",
  Model = "MODEL",
 }
 
 export enum Name {
  CondiciónDelÍtem = "Condición del ítem",
  CódigoUniversalDeProducto = "Código universal de producto",
  Línea = "Línea",
  Marca = "Marca",
  Modelo = "Modelo",
 }
 
 export enum ValueType {
  List = "list",
  String = "string",
 }
 
 export interface Value {
  id:     null | string;
  name:   null | string;
  source: number;
  struct: null;
 }
 
 export enum BuyingMode {
  BuyItNow = "buy_it_now",
 }
 
 export enum CategoryID {
  Mla3759 = "MLA3759",
  Mla416667 = "MLA416667",
  Mla416668 = "MLA416668",
 }
 
 export enum Condition {
  New = "new",
 }
 
 export enum CurrencyID {
  Ars = "ARS",
 }
 
 export interface DifferentialPricing {
  id: number;
 }
 
 export enum DomainID {
  MlaDrums = "MLA-DRUMS",
  MlaElectronicDrums = "MLA-ELECTRONIC_DRUMS",
  MlaMusicalInstruments = "MLA-MUSICAL_INSTRUMENTS",
 }
 
 export interface Installments {
  amount:      number;
  currency_id: CurrencyID;
  quantity:    number;
  rate:        number;
 }
 
 export enum ListingTypeID {
  GoldPro = "gold_pro",
  GoldSpecial = "gold_special",
 }
 
 export enum OfficialStoreName {
  InstrumentosParquer = "Instrumentos Parquer",
 }
 
 export interface Seller {
  id:       number;
  nickname: string;
 }
 
 export interface Shipping {
  benefits:      null;
  free_shipping: boolean;
  logistic_type: LogisticType;
  mode:          Mode;
  promise:       null;
  store_pick_up: boolean;
  tags:          Tag[];
 }
 
 export enum LogisticType {
  Custom = "custom",
  Default = "default",
  NotSpecified = "not_specified",
 }
 
 export enum Mode {
  Custom = "custom",
  Me1 = "me1",
  NotSpecified = "not_specified",
 }
 
 export enum Tag {
  OptionalMe1Chosen = "optional_me1_chosen",
 }
 
 export enum SiteID {
  Mla = "MLA",
 }
 
 export enum VariationFilter {
  Color = "COLOR",
 }
 
 export interface VariationsDatum {
  name:            string;
  pictures_qty:    number;
  ratio:           string;
  thumbnail:       string;
  user_product_id: string;
 }
 
 export interface GetItemByIDResult {
  author: Author;
  item:   ItemByID;
 }
 
 
 export interface ItemByID {
  categories:    Category[];
  condition:     string;
  description:   string;
  free_shipping: boolean;
  id:            string;
  picture:       Picture;
  price:         Price;
  sold_quantity: number;
  title:         string;
 }
 
 
 export interface Picture {
  id:         string;
  max_size:   string;
  quality:    string;
  secure_url: string;
  size:       string;
  url:        string;
 }
 
 export interface Price {
  amount:   number;
  currency: string;
  decimals: number;
 }
 