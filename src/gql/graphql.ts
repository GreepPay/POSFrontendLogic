/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A datetime string with format `Y-m-d H:i:s`, e.g. `2018-05-23 13:43:32`. */
  DateTime: any;
  /** Arbitrary data encoded in JavaScript Object Notation. See https://www.json.org. */
  JSON: any;
  /**
   * Loose type that allows any value. Be careful when passing in large `Int` or `Float` literals,
   * as they may not be parsed correctly on the server side. Use `String` literals if you are
   * dealing with really large numbers to be on the safe side.
   */
  Mixed: any;
  /** Can be used as an argument to upload files using https://github.com/jaydenseric/graphql-multipart-request-spec */
  Upload: any;
};

/** A blockchain account */
export type Account = {
  __typename?: 'Account';
  /** Account Type */
  account_type: Scalars['String'];
  /** Account Created At */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Account Status */
  status: Scalars['String'];
  /** Stellar Address */
  stellar_address: Scalars['String'];
  /** Account Updated At */
  updated_at?: Maybe<Scalars['DateTime']>;
  /** Unique UUID */
  uuid: Scalars['String'];
};

export type AddParticipantInput = {
  added_by: Scalars['Int'];
  conversation_id: Scalars['Int'];
  user_id: Scalars['Int'];
};

export type AdditionalIdInput = {
  image_links?: InputMaybe<ImageLinksInput>;
  number?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

/** Represents an Anchor Transaction in the Stellar network */
export type AnchorTransation = {
  __typename?: 'AnchorTransation';
  /** Transaction fee */
  amount_fee?: Maybe<Scalars['Float']>;
  /** Amount being sent */
  amount_in?: Maybe<Scalars['Float']>;
  /** Amount to be received */
  amount_out?: Maybe<Scalars['Float']>;
  /** Transaction completion timestamp */
  completed_at?: Maybe<Scalars['String']>;
  /** Deposit memo */
  deposit_memo?: Maybe<Scalars['String']>;
  /** Type of deposit memo */
  deposit_memo_type?: Maybe<Scalars['String']>;
  /** External transaction ID */
  external_transaction_id?: Maybe<Scalars['String']>;
  /** Source account */
  from: Scalars['String'];
  /** Unique identifier for the transaction */
  id: Scalars['String'];
  /** Type of transaction (e.g., withdrawal) */
  kind: Scalars['String'];
  /** Transaction message */
  message?: Maybe<Scalars['String']>;
  /** URL for more transaction information */
  more_info_url?: Maybe<Scalars['String']>;
  /** Whether the transaction was refunded */
  refunded: Scalars['Boolean'];
  /** Transaction start timestamp */
  started_at: Scalars['String'];
  /** Current status of the transaction */
  status: Scalars['String'];
  /** Estimated time for completion */
  status_eta?: Maybe<Scalars['String']>;
  /** Stellar transaction ID */
  stellar_transaction_id?: Maybe<Scalars['String']>;
  /** Destination account */
  to: Scalars['String'];
  /** Withdrawal anchor account */
  withdraw_anchor_account?: Maybe<Scalars['String']>;
  /** Withdrawal memo */
  withdraw_memo?: Maybe<Scalars['String']>;
  /** Type of withdrawal memo */
  withdraw_memo_type?: Maybe<Scalars['String']>;
};

export type AttributeInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: User;
};

export type BankAccountNameResponse = {
  __typename?: 'BankAccountNameResponse';
  account_name: Scalars['String'];
  account_number: Scalars['String'];
};

export type BillingInput = {
  gracePeriod: Scalars['Int'];
  interval: BillingInterval;
  trialDays: Scalars['Int'];
};

export enum BillingInterval {
  Annual = 'annual',
  Custom = 'custom',
  Monthly = 'monthly'
}

/** Business profile details. */
export type Business = {
  __typename?: 'Business';
  /** Business Address */
  address?: Maybe<Scalars['String']>;
  /** Authenticated User ID */
  auth_user_id: Scalars['Int'];
  /** Business banner URL. */
  banner?: Maybe<Scalars['String']>;
  /** Business name. */
  business_name?: Maybe<Scalars['String']>;
  /** Business Type */
  business_type?: Maybe<Scalars['String']>;
  /** Business category. */
  category?: Maybe<Scalars['String']>;
  /** Business city */
  city?: Maybe<Scalars['String']>;
  /** Business country */
  country?: Maybe<Scalars['String']>;
  /** When the business profile was created. */
  created_at: Scalars['DateTime'];
  /** Default Currency */
  default_currency?: Maybe<Scalars['String']>;
  /** Business description. */
  description?: Maybe<Scalars['String']>;
  /** Array of document URLs. */
  documents?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Unique identifier for the business. */
  id: Scalars['String'];
  /** Business location. */
  location?: Maybe<Scalars['String']>;
  /** Business logo URL. */
  logo?: Maybe<Scalars['String']>;
  /** Business passport document URL. */
  passport?: Maybe<Scalars['String']>;
  /** Business registration number. */
  registration_number?: Maybe<Scalars['String']>;
  /** Business resident permit document URL. */
  resident_permit?: Maybe<Scalars['String']>;
  /** Store locations for this business */
  storeLocations: Array<StoreLocation>;
  /** When the business profile was last updated. */
  updated_at: Scalars['DateTime'];
  /** Attached user */
  user?: Maybe<User>;
  /** The UUID of the business. */
  uuid: Scalars['String'];
  /** Attached wallet */
  wallet?: Maybe<Wallet>;
  /** Business website URL. */
  website?: Maybe<Scalars['String']>;
};

/** A category */
export type Category = {
  __typename?: 'Category';
  /** Category Created At */
  createdAt: Scalars['String'];
  /** Unique ID */
  id: Scalars['Int'];
  /** Category Name */
  name: Scalars['String'];
  /** Products */
  products: Array<Product>;
  /** Category Slug */
  slug: Scalars['String'];
  /** Category Updated At */
  updatedAt: Scalars['String'];
  /** UUID */
  uuid: Scalars['String'];
};

/** A conversation */
export type Conversation = {
  __typename?: 'Conversation';
  /** Conversation Created At */
  created_at: Scalars['String'];
  /** Entity Type */
  entity_type?: Maybe<Scalars['String']>;
  /** The attached exchange ad */
  exchangeAd?: Maybe<ExchangeAd>;
  /** Unique ID */
  id: Scalars['Int'];
  /** Messages */
  messages: Array<Message>;
  /** The metadata */
  metadata?: Maybe<Scalars['String']>;
  /** Conversation Name */
  name: Scalars['String'];
  /** Owner ID */
  owner_id: Scalars['Int'];
  /** Participants */
  participants: Array<Participant>;
  /** Stage */
  stage?: Maybe<Scalars['String']>;
  /** State */
  state: Scalars['String'];
  /** Conversation Type */
  type: Scalars['String'];
  /** Conversation Updated At */
  updated_at: Scalars['String'];
  /** UUID */
  uuid: Scalars['String'];
};

export type ConversationInput = {
  entity_type: Scalars['String'];
  entity_uuid: Scalars['String'];
  extras?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type CoordinatesInput = {
  lat: Scalars['Float'];
  lng: Scalars['Float'];
};

export type CountryInformation = {
  __typename?: 'CountryInformation';
  countryCode: Scalars['String'];
  idTypes?: Maybe<IdTypes>;
  imageRequirements?: Maybe<ImageRequirements>;
  methods?: Maybe<Array<Scalars['String']>>;
  methodsAvailable?: Maybe<MethodsAvailable>;
  requiredFields?: Maybe<RequiredFields>;
  supportedMethods?: Maybe<SupportedMethods>;
};

export type CreateProductInput = {
  businessId: Scalars['Int'];
  categoryIds: Array<Scalars['String']>;
  currency: Scalars['String'];
  description: Scalars['String'];
  digitalDetails?: InputMaybe<DigitalProductInput>;
  eventDetails?: InputMaybe<EventProductInput>;
  images?: InputMaybe<Array<ImageInput>>;
  inventoryCount?: InputMaybe<Scalars['Int']>;
  isBackorderAllowed?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  physicalDetails?: InputMaybe<PhysicalProductInput>;
  price: Scalars['Float'];
  sku: Scalars['String'];
  status: ProductStatus;
  stockThreshold?: InputMaybe<Scalars['Int']>;
  subscriptionDetails?: InputMaybe<SubscriptionProductInput>;
  tags: Array<Scalars['String']>;
  type: ProductType;
  variants?: InputMaybe<Array<ProductVariantInput>>;
};

/** A delivery */
export type Delivery = {
  __typename?: 'Delivery';
  /** Actual Delivery Date */
  actualDeliveryDate?: Maybe<Scalars['String']>;
  /** Delivery Created At */
  createdAt: Scalars['String'];
  /** Delivery Address */
  deliveryAddress: Scalars['String'];
  /** Delivery Attempts */
  deliveryAttempts: Scalars['String'];
  /** Estimated Delivery Date */
  estimatedDeliveryDate: Scalars['String'];
  /** Unique ID */
  id: Scalars['Int'];
  /** Metadata */
  metadata: Scalars['String'];
  /** Order */
  order: Order;
  /** Status */
  status: Scalars['String'];
  /** Tracking Number */
  trackingNumber: Scalars['String'];
  /** Tracking Updates */
  trackingUpdates: Scalars['String'];
  /** Delivery Updated At */
  updatedAt: Scalars['String'];
  /** UUID */
  uuid: Scalars['String'];
};

/** Destination Details */
export type Destination = {
  __typename?: 'Destination';
  /** Account Name */
  accountName: Scalars['String'];
  /** Account Number */
  accountNumber: Scalars['String'];
  /** Account Type */
  accountType: Scalars['String'];
  /** Network ID */
  networkId: Scalars['String'];
};

export type DigitalProductInput = {
  download: DownloadInput;
  fileInfo: FileInfoInput;
  license?: InputMaybe<LicenseInput>;
  type: Scalars['String'];
};

export type DimensionsInput = {
  height: Scalars['Float'];
  length: Scalars['Float'];
  width: Scalars['Float'];
};

export enum DocumentType {
  InternationalPassport = 'International_Passport',
  License = 'License',
  ResidentPermit = 'Resident_Permit',
  StudentId = 'Student_ID'
}

export type DownloadInput = {
  accessExpiration?: InputMaybe<Scalars['String']>;
  downloadLimit?: InputMaybe<Scalars['Int']>;
  url: Scalars['String'];
};

export type EventDetailsInput = {
  capacity?: InputMaybe<Scalars['Int']>;
  endDate: Scalars['String'];
  location?: InputMaybe<LocationInput>;
  onlineUrl?: InputMaybe<Scalars['String']>;
  registeredCount: Scalars['Int'];
  startDate: Scalars['String'];
  venueName?: InputMaybe<Scalars['String']>;
  waitlistEnabled: Scalars['Boolean'];
};

export type EventOverview = {
  __typename?: 'EventOverview';
  checkins: Scalars['Int'];
  revenue: Scalars['Float'];
  tickets_left: Scalars['Int'];
  tickets_sold: Scalars['Int'];
};

export type EventProductInput = {
  eventDetails: EventDetailsInput;
  eventType: EventType;
  type: Scalars['String'];
};

export enum EventType {
  Hybrid = 'hybrid',
  Offline = 'offline',
  Online = 'online'
}

/** A single Ad */
export type ExchangeAd = {
  __typename?: 'ExchangeAd';
  /** Address Details */
  address_details?: Maybe<Scalars['String']>;
  /** Business */
  business?: Maybe<Business>;
  /** Business ID */
  business_id?: Maybe<Scalars['String']>;
  /** Ad Created At */
  created_at: Scalars['DateTime'];
  /** From Currency */
  from_currency: Scalars['String'];
  /** Maximum Amount */
  max_amount: Scalars['Float'];
  /** Minimum Amount */
  min_amount: Scalars['Float'];
  /** Payout Address */
  payout_address?: Maybe<Scalars['String']>;
  /** Payout Banks */
  payout_banks?: Maybe<Scalars['String']>;
  /** Exchange Rate */
  rate: Scalars['Float'];
  /** Ad Status ('active', 'completed', 'cancelled') */
  status: Scalars['String'];
  /** To Currency */
  to_currency: Scalars['String'];
  /** Ad Updated At */
  updated_at: Scalars['DateTime'];
  /** Unique UUID */
  uuid: Scalars['String'];
};

/** A paginated list of ExchangeAd items. */
export type ExchangeAdPaginator = {
  __typename?: 'ExchangeAdPaginator';
  /** A list of ExchangeAd items. */
  data: Array<ExchangeAd>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A single Order */
export type ExchangeOrder = {
  __typename?: 'ExchangeOrder';
  /** The attached Ad */
  ad: ExchangeAd;
  /** Ad ID */
  ad_id: Scalars['Int'];
  /** Amount */
  amount: Scalars['Float'];
  /** Conversation UUID associated with this order */
  conversation_uuid?: Maybe<Scalars['String']>;
  /** Order Created At */
  created_at: Scalars['DateTime'];
  /** Expected Amount */
  expected_amount: Scalars['Float'];
  /** Expiration Time */
  expired_at: Scalars['DateTime'];
  /** ID */
  id: Scalars['Int'];
  /** Payment Amount */
  payment_amount: Scalars['String'];
  /** Payment Type */
  payment_type: Scalars['String'];
  /** Payout Option */
  payout_option: Scalars['String'];
  /** Pickup Location Address Line */
  pickup_location_address_line?: Maybe<Scalars['String']>;
  /** Pickup Location City */
  pickup_location_city?: Maybe<Scalars['String']>;
  /** Pickup Location Country */
  pickup_location_country?: Maybe<Scalars['String']>;
  /** Order Status ('pending', 'completed', 'cancelled', 'failed') */
  status: Scalars['String'];
  /** Order Updated At */
  updated_at: Scalars['DateTime'];
  /** The attached User */
  user: User;
  /** User ID */
  user_id: Scalars['Int'];
  /** Unique UUID */
  uuid: Scalars['String'];
};

/** A paginated list of ExchangeOrder items. */
export type ExchangeOrderPaginator = {
  __typename?: 'ExchangeOrderPaginator';
  /** A list of ExchangeOrder items. */
  data: Array<ExchangeOrder>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ExchangeRate = {
  __typename?: 'ExchangeRate';
  rates: Array<ExchangeRateItem>;
};

export type ExchangeRateItem = {
  __typename?: 'ExchangeRateItem';
  buy: Scalars['Float'];
  code: Scalars['String'];
  locale: Scalars['String'];
  rateId: Scalars['String'];
  sell: Scalars['Float'];
  updatedAt: Scalars['String'];
};

export type FileInfoInput = {
  format: Scalars['String'];
  size: Scalars['Float'];
};

export type FinancialSummaryInput = {
  from?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  type: Scalars['String'];
};

export type FinancialSummaryResponse = {
  __typename?: 'FinancialSummaryResponse';
  credit: Scalars['Float'];
  debit: Scalars['Float'];
};

export type FlutterwaveBank = {
  __typename?: 'FlutterwaveBank';
  code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  provider_type?: Maybe<Scalars['String']>;
};

export type FlutterwaveBankBranch = {
  __typename?: 'FlutterwaveBankBranch';
  bank_id: Scalars['Int'];
  bic: Scalars['String'];
  branch_code: Scalars['String'];
  branch_name: Scalars['String'];
  id: Scalars['Int'];
  swift_code: Scalars['String'];
};

export type GlobalExchangeRate = {
  __typename?: 'GlobalExchangeRate';
  /** Base Currency */
  base: Scalars['String'];
  /** Mid Rate */
  mid: Scalars['Float'];
  /** Target Currency */
  target: Scalars['String'];
  /** Timestamp */
  timestamp: Scalars['DateTime'];
  /** Unit */
  unit: Scalars['Int'];
};

export type IdTypes = {
  __typename?: 'IdTypes';
  IMAGE?: Maybe<Scalars['Mixed']>;
  NUMBER?: Maybe<Scalars['Mixed']>;
};

export type ImageInput = {
  rawValue?: InputMaybe<Scalars['Upload']>;
  url: Scalars['String'];
};

export type ImageLinksInput = {
  id_back_image?: InputMaybe<Scalars['String']>;
  id_front_image: Scalars['String'];
  selfie_image: Scalars['String'];
};

export type ImageRequirements = {
  __typename?: 'ImageRequirements';
  id_back_image?: Maybe<Scalars['String']>;
  id_front_image?: Maybe<Scalars['String']>;
  selfie_image?: Maybe<Scalars['String']>;
};

export type InteractiveWithdrawalResponse = {
  __typename?: 'InteractiveWithdrawalResponse';
  id: Scalars['String'];
  type: Scalars['String'];
  url: Scalars['String'];
};

export type InventoryInput = {
  isBackorderAllowed: Scalars['Boolean'];
  lowStockThreshold: Scalars['Int'];
  stock: Scalars['Int'];
};

export type LicenseInput = {
  key: Scalars['String'];
  type: LicenseType;
};

export enum LicenseType {
  Multi = 'multi',
  Perpetual = 'perpetual',
  Single = 'single'
}

export type LocationInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  coordinates?: InputMaybe<CoordinatesInput>;
  country: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

/** A message */
export type Message = {
  __typename?: 'Message';
  /** Message Content */
  content: Scalars['String'];
  /** Conversation */
  conversation: Conversation;
  /** Conversation ID */
  conversation_id: Scalars['Int'];
  /** Message Created At */
  createdAt: Scalars['String'];
  /** Unique ID */
  id: Scalars['Int'];
  /** The metadata */
  metadata?: Maybe<Scalars['String']>;
  /** Sender */
  participant?: Maybe<Participant>;
  /** Replied Message */
  replied_message?: Maybe<Message>;
  /** Sender User */
  sender?: Maybe<User>;
  /** Message State */
  state: Scalars['String'];
  /** Message Status */
  status: Scalars['String'];
  /** Message Updated At */
  updatedAt: Scalars['String'];
  /** Unique UUID */
  uuid: Scalars['String'];
};

export type MessageInput = {
  content: Scalars['String'];
  conversation_id: Scalars['Int'];
  metadata?: InputMaybe<Scalars['String']>;
  replied_message_id?: InputMaybe<Scalars['Int']>;
  sender_id: Scalars['Int'];
  type: Scalars['String'];
};

export type MethodsAvailable = {
  __typename?: 'MethodsAvailable';
  IMAGE?: Maybe<Scalars['Boolean']>;
  NUMBER?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Add a participant to a conversation */
  AddParticipant: Conversation;
  /** Confirm withdrawal */
  ConfirmWithdrawal?: Maybe<OffRamp>;
  /** Create a business profile */
  CreateBusinessProfile: Business;
  /** Create Crypto Transfer */
  CreateCrpytoTransfer: OffRamp;
  /** Create exchange ad */
  CreateExchangeAd: ExchangeAd;
  /** Create a message */
  CreateMessage: Message;
  /** Create a new P2P order */
  CreateP2pOrder: ExchangeOrder;
  /** Create a new P2P payment method */
  CreateP2pPaymentMethod: P2pPaymentMethod;
  /** Create Product */
  CreateProduct: Product;
  /** Create a saved account */
  CreateSavedAccount: UserBank;
  CreateStoreLocation: StoreLocation;
  /** Delete Product */
  DeleteProduct: Scalars['Boolean'];
  /** Delete User */
  DeleteUser: Scalars['Boolean'];
  /** Extract Anchor Transaction */
  ExtractAnchorTransaction: AnchorTransation;
  /** Initiate Conversasion */
  InitiateConversation: Conversation;
  /** Initiate interactive withdrawal */
  InitiateInteractiveWithdrawal: InteractiveWithdrawalResponse;
  /** Initiate wallet KYC */
  InitiateWalletKYC?: Maybe<Scalars['String']>;
  /** Initiate withdrawal */
  InitiateWithdrawal?: Maybe<OffRamp>;
  /** Mark specific notifications as read for the authenticated user. */
  MarkNotificationsAsRead?: Maybe<Scalars['Boolean']>;
  /** Redeem GRP tokens */
  RedeemGRPToken: Scalars['Boolean'];
  /** Release USDC for a P2P order (seller triggers fund release) */
  ReleaseP2pFunds: Scalars['Boolean'];
  /** Remove a saved account */
  RemoveSavedAccount: Scalars['Boolean'];
  /** Resend email OTP */
  ResendEmailOTP: Scalars['Boolean'];
  /** Reset password for user */
  ResetPassword: Scalars['Boolean'];
  /** Save a push notification token for the authenticated user. */
  SavePushNotificationToken?: Maybe<Scalars['Boolean']>;
  /** Scan In A Ticket */
  ScanInTicket: Scalars['Boolean'];
  /** send rest password OTP */
  SendResetPasswordOTP: Scalars['String'];
  /** Sign in a user */
  SignIn: AuthResponse;
  /** Sign out a user */
  SignOut: Scalars['Boolean'];
  /** Sign up a new user */
  SignUp: User;
  /** Soft delete message */
  SoftDeleteMessage: Scalars['Boolean'];
  /** Soft delete a P2P payment method by UUID */
  SoftDeleteP2pPaymentMethod: Scalars['Boolean'];
  /** Update a business profile */
  UpdateBusinessProfile: Business;
  /** Update exchange ad */
  UpdateExchangeAd: ExchangeAd;
  /** Update an existing P2P payment method by UUID */
  UpdateP2pPaymentMethod: P2pPaymentMethod;
  /** Update user password */
  UpdatePassword: Scalars['Boolean'];
  /** Update Product */
  UpdateProduct: Product;
  /** Update a user's profile with detailed information */
  UpdateProfile: Scalars['Boolean'];
  UpdateStoreLocation: StoreLocation;
  /** Upload any file and get the URL */
  UploadFile: Scalars['String'];
  /** Verify user identity with optional checks and provider selection */
  VerifyUserIdentity: Scalars['Boolean'];
  /** Verify user OTP */
  VerifyUserOTP: Scalars['Boolean'];
};


export type MutationAddParticipantArgs = {
  input: AddParticipantInput;
};


export type MutationConfirmWithdrawalArgs = {
  amount: Scalars['Float'];
  country_code: Scalars['String'];
  currency: Scalars['String'];
  metadata?: InputMaybe<Scalars['String']>;
  uuid: Scalars['String'];
};


export type MutationCreateBusinessProfileArgs = {
  address?: InputMaybe<Scalars['String']>;
  banner?: InputMaybe<Scalars['Upload']>;
  business_logo?: InputMaybe<Scalars['Upload']>;
  business_name: Scalars['String'];
  business_type: Scalars['String'];
  category?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default_currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<Scalars['Upload']>>;
  location: Scalars['String'];
  passport?: InputMaybe<Scalars['Upload']>;
  registration_number?: InputMaybe<Scalars['String']>;
  resident_permit?: InputMaybe<Scalars['Upload']>;
  website?: InputMaybe<Scalars['String']>;
};


export type MutationCreateCrpytoTransferArgs = {
  crypto: Scalars['String'];
  network: Scalars['String'];
};


export type MutationCreateExchangeAdArgs = {
  address_details: Scalars['String'];
  business_id: Scalars['String'];
  from_currency: Scalars['String'];
  max_amount: Scalars['Float'];
  min_amount: Scalars['Float'];
  payout_address: Scalars['String'];
  payout_banks?: InputMaybe<Scalars['String']>;
  rate: Scalars['Float'];
  to_currency: Scalars['String'];
};


export type MutationCreateMessageArgs = {
  input: MessageInput;
};


export type MutationCreateP2pOrderArgs = {
  amount: Scalars['Float'];
  city: Scalars['String'];
  conversation_uuid: Scalars['String'];
  country: Scalars['String'];
  delivery_address: Scalars['String'];
  exchange_ad_uuid: Scalars['String'];
  metadata?: InputMaybe<Scalars['String']>;
  payment_type: Scalars['String'];
  payout_option: Scalars['String'];
};


export type MutationCreateP2pPaymentMethodArgs = {
  account_name: Scalars['String'];
  account_number: Scalars['String'];
  bank_name: Scalars['String'];
  currency?: InputMaybe<Scalars['String']>;
  meta_data?: InputMaybe<Scalars['String']>;
};


export type MutationCreateProductArgs = {
  input: CreateProductInput;
};


export type MutationCreateSavedAccountArgs = {
  metadata: Scalars['String'];
  type: Scalars['String'];
  unique_id: Scalars['String'];
  uploads?: InputMaybe<Array<Scalars['Upload']>>;
};


export type MutationCreateStoreLocationArgs = {
  address: Scalars['String'];
  business_uuid: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  meta_data?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationDeleteProductArgs = {
  product_id: Scalars['Int'];
};


export type MutationExtractAnchorTransactionArgs = {
  transaction_id: Scalars['String'];
  withdrawal_currency: Scalars['String'];
};


export type MutationInitiateConversationArgs = {
  input: ConversationInput;
};


export type MutationInitiateInteractiveWithdrawalArgs = {
  amount: Scalars['Float'];
  withdrawal_currency: Scalars['String'];
};


export type MutationInitiateWalletKycArgs = {
  currency: Scalars['String'];
};


export type MutationInitiateWithdrawalArgs = {
  amount: Scalars['Float'];
  saved_account_uuid: Scalars['String'];
  withdrawal_currency: Scalars['String'];
};


export type MutationMarkNotificationsAsReadArgs = {
  notification_ids: Array<Scalars['Int']>;
};


export type MutationRedeemGrpTokenArgs = {
  grp_amount: Scalars['Float'];
};


export type MutationReleaseP2pFundsArgs = {
  amount: Scalars['Float'];
  metadata?: InputMaybe<Scalars['String']>;
  order_uuid: Scalars['String'];
};


export type MutationRemoveSavedAccountArgs = {
  saved_account_uuid: Scalars['String'];
};


export type MutationResendEmailOtpArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  new_password: Scalars['String'];
  otp_code: Scalars['String'];
  user_uuid: Scalars['String'];
};


export type MutationSavePushNotificationTokenArgs = {
  device_token: Scalars['String'];
  device_type: Scalars['String'];
};


export type MutationScanInTicketArgs = {
  ticket_uuid: Scalars['String'];
};


export type MutationSendResetPasswordOtpArgs = {
  email: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
  sso_id?: InputMaybe<Scalars['String']>;
};


export type MutationSignUpArgs = {
  business_category?: InputMaybe<Scalars['String']>;
  business_description?: InputMaybe<Scalars['String']>;
  business_logo?: InputMaybe<Scalars['Upload']>;
  business_name?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default_currency: Scalars['String'];
  documents?: InputMaybe<Array<Scalars['Upload']>>;
  email: Scalars['String'];
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  sso_id?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};


export type MutationSoftDeleteMessageArgs = {
  message_id: Scalars['Int'];
};


export type MutationSoftDeleteP2pPaymentMethodArgs = {
  p2p_payment_method_uuid: Scalars['String'];
};


export type MutationUpdateBusinessProfileArgs = {
  address?: InputMaybe<Scalars['String']>;
  banner?: InputMaybe<Scalars['Upload']>;
  business_logo?: InputMaybe<Scalars['Upload']>;
  business_name?: InputMaybe<Scalars['String']>;
  business_type?: InputMaybe<Scalars['String']>;
  business_uuid: Scalars['String'];
  category?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default_currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<Scalars['Upload']>>;
  location?: InputMaybe<Scalars['String']>;
  passport?: InputMaybe<Scalars['Upload']>;
  registration_number?: InputMaybe<Scalars['String']>;
  resident_permit?: InputMaybe<Scalars['Upload']>;
  website?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateExchangeAdArgs = {
  address_details?: InputMaybe<Scalars['String']>;
  exchange_ad_uuid: Scalars['String'];
  max_amount?: InputMaybe<Scalars['Float']>;
  min_amount?: InputMaybe<Scalars['Float']>;
  payout_address?: InputMaybe<Scalars['String']>;
  payout_banks?: InputMaybe<Scalars['String']>;
  rate?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateP2pPaymentMethodArgs = {
  account_name?: InputMaybe<Scalars['String']>;
  account_number?: InputMaybe<Scalars['String']>;
  bank_name?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
  meta_data?: InputMaybe<Scalars['String']>;
  p2p_payment_method_uuid: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  current_password: Scalars['String'];
  new_password: Scalars['String'];
};


export type MutationUpdateProductArgs = {
  input: UpdateProductInput;
};


export type MutationUpdateProfileArgs = {
  auth_passcode?: InputMaybe<Scalars['String']>;
  business_category?: InputMaybe<Scalars['String']>;
  business_description?: InputMaybe<Scalars['String']>;
  business_logo?: InputMaybe<Scalars['Upload']>;
  business_name?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default_currency?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<Scalars['Upload']>>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  phone_number?: InputMaybe<Scalars['String']>;
  profile_photo?: InputMaybe<Scalars['Upload']>;
  state?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateStoreLocationArgs = {
  address?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  meta_data?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  store_location_uuid: Scalars['String'];
};


export type MutationUploadFileArgs = {
  file: Scalars['Upload'];
};


export type MutationVerifyUserIdentityArgs = {
  additional_ids?: InputMaybe<Array<AdditionalIdInput>>;
  address?: InputMaybe<Scalars['String']>;
  checks: VerifyChecksInput;
  date_of_birth: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  full_name: Scalars['String'];
  id_country: Scalars['String'];
  id_number?: InputMaybe<Scalars['String']>;
  id_type: Scalars['String'];
  image_links?: InputMaybe<ImageLinksInput>;
  phone_number?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  user_uuid?: InputMaybe<Scalars['String']>;
};


export type MutationVerifyUserOtpArgs = {
  otp: Scalars['String'];
  user_uuid: Scalars['String'];
};

/** A notification on Greep */
export type Notification = {
  __typename?: 'Notification';
  /** User UUID to whom the notification belongs */
  auth_user_id: Scalars['String'];
  /** Notification Content */
  content: Scalars['String'];
  /** Notification Created At */
  created_at: Scalars['DateTime'];
  /** Delivery status of the notification */
  delivery_status: Scalars['String'];
  /** Email address if the notification is an email */
  email?: Maybe<Scalars['String']>;
  /** Unique ID */
  id: Scalars['Int'];
  /** Whether the notification has been read */
  is_read: Scalars['Boolean'];
  /** Notification Title */
  title: Scalars['String'];
  /** Notification Type: Email or Push */
  type: Scalars['String'];
  /** Notification Updated At */
  updated_at: Scalars['DateTime'];
};

/** A paginated list of Notification items. */
export type NotificationPaginator = {
  __typename?: 'NotificationPaginator';
  /** A list of Notification items. */
  data: Array<Notification>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Offramp Transaction */
export type OffRamp = {
  __typename?: 'OffRamp';
  /** Withdrawal Amount */
  amount: Scalars['String'];
  /** Offramp Created At */
  created_at: Scalars['String'];
  /** Currency of Withdrawal */
  currency: Scalars['String'];
  /** Withdrawal Description */
  description: Scalars['String'];
  /** Additional Data */
  extra_data?: Maybe<Scalars['String']>;
  /** Unique ID */
  id: Scalars['Int'];
  /** Payment Channel */
  payment_channel: Scalars['String'];
  /** Payment Reference */
  payment_reference: Scalars['String'];
  /** Additional ID Number (if applicable) */
  senderAdditionalIdNumber?: Maybe<Scalars['String']>;
  /** Additional ID Type (if applicable) */
  senderAdditionalIdType?: Maybe<Scalars['String']>;
  /** Sender's Address */
  senderAddress?: Maybe<Scalars['String']>;
  /** Sender's Business ID (if institution) */
  senderBusinessId?: Maybe<Scalars['String']>;
  /** Sender's Business Name (if institution) */
  senderBusinessName?: Maybe<Scalars['String']>;
  /** Sender's Country */
  senderCountry?: Maybe<Scalars['String']>;
  /** Sender's Date of Birth */
  senderDob?: Maybe<Scalars['String']>;
  /** Sender's Email Address */
  senderEmail?: Maybe<Scalars['String']>;
  /** Type of Sender's ID */
  senderIdType?: Maybe<Scalars['String']>;
  /** Sender's Full Name */
  senderName?: Maybe<Scalars['String']>;
  /** Sender's Phone Number */
  senderPhone?: Maybe<Scalars['String']>;
  /** Transaction State ('active' or 'archived') */
  state: Scalars['String'];
  /** Transaction Status */
  status: Scalars['String'];
  /** Offramp Updated At */
  updated_at: Scalars['String'];
  /** Unique UUID */
  uuid: Scalars['String'];
  /** Yellow card payment */
  yellow_card_payment?: Maybe<PaymentRequestResponse>;
};

/** An order */
export type Order = {
  __typename?: 'Order';
  /** Applied Discounts */
  appliedDiscounts?: Maybe<Scalars['String']>;
  /** Billing Address */
  billingAddress?: Maybe<Scalars['String']>;
  /** Order Created At */
  createdAt: Scalars['String'];
  /** Currency */
  currency: Scalars['String'];
  /** Customer ID */
  customerId: Scalars['Int'];
  /** Deliveries */
  deliveries: Array<Delivery>;
  /** Discount Amount */
  discountAmount: Scalars['Float'];
  /** Unique ID */
  id: Scalars['Int'];
  /** Items */
  items: Scalars['String'];
  /** Order Number */
  orderNumber: Scalars['String'];
  /** Payment Details */
  paymentDetails?: Maybe<Scalars['String']>;
  /** Payment Method */
  paymentMethod?: Maybe<Scalars['String']>;
  /** Payment Status */
  paymentStatus: Scalars['String'];
  /** Refund Details */
  refundDetails?: Maybe<Scalars['String']>;
  /** Sale */
  sale: Sale;
  /** Shipping Address */
  shippingAddress?: Maybe<Scalars['String']>;
  /** Status */
  status: Scalars['String'];
  /** Status History */
  statusHistory: Scalars['String'];
  /** Subtotal Amount */
  subtotalAmount: Scalars['Float'];
  /** Tax Amount */
  taxAmount: Scalars['Float'];
  /** Tax Details */
  taxDetails?: Maybe<Scalars['String']>;
  /** Total Amount */
  totalAmount: Scalars['Float'];
  /** Order Updated At */
  updatedAt: Scalars['String'];
  /** The attached user */
  user: User;
  /** UUID */
  uuid: Scalars['String'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** A paginated list of Order items. */
export type OrderPaginator = {
  __typename?: 'OrderPaginator';
  /** A list of Order items. */
  data: Array<Order>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A saved peer-to-peer (P2P) payment method for a user */
export type P2pPaymentMethod = {
  __typename?: 'P2pPaymentMethod';
  /** Full name of the account holder */
  account_name: Scalars['String'];
  /** Unique account identifier */
  account_number: Scalars['String'];
  /** Name of the bank or financial institution */
  bank_name: Scalars['String'];
  /** Timestamp when the payment method was created */
  created_at: Scalars['DateTime'];
  /** Currency code (e.g. NGN, USD) */
  currency?: Maybe<Scalars['String']>;
  /** Extra details as stringified JSON */
  meta_data?: Maybe<Scalars['String']>;
  /** Timestamp when the payment method was last updated */
  updated_at: Scalars['DateTime'];
  /** ID of the user who owns this payment method */
  user_id: Scalars['Int'];
  /** Public UUID for external reference */
  uuid: Scalars['String'];
};

/** A paginated list of P2pPaymentMethod items. */
export type P2pPaymentMethodPaginator = {
  __typename?: 'P2pPaymentMethodPaginator';
  /** A list of P2pPaymentMethod items. */
  data: Array<P2pPaymentMethod>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int'];
  /** Index of the current page. */
  currentPage: Scalars['Int'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int'];
  /** Number of items per page. */
  perPage: Scalars['Int'];
  /** Number of total available items. */
  total: Scalars['Int'];
};

/** A participant */
export type Participant = {
  __typename?: 'Participant';
  /** Conversation */
  conversation: Conversation;
  /** Participant Created At */
  created_at: Scalars['String'];
  /** Unique ID */
  id: Scalars['Int'];
  /** Messages */
  messages: Array<Message>;
  /** Participant State */
  state: Scalars['String'];
  /** Participant Updated At */
  updated_at: Scalars['String'];
  /** Attached user */
  user?: Maybe<User>;
  /** The user id */
  user_id: Scalars['Int'];
};

/** Payment Request Response */
export type PaymentRequestResponse = {
  __typename?: 'PaymentRequestResponse';
  /** Amount */
  amount: Scalars['Float'];
  /** Channel ID */
  channelId: Scalars['String'];
  /** Converted Amount */
  convertedAmount: Scalars['Float'];
  /** Country */
  country: Scalars['String'];
  /** Created At */
  createdAt: Scalars['String'];
  /** Currency */
  currency: Scalars['String'];
  /** Destination Information */
  destination: Destination;
  /** Expiration Time */
  expiresAt: Scalars['String'];
  /** Unique ID */
  id: Scalars['String'];
  /** Rate */
  rate: Scalars['Float'];
  /** Reason */
  reason: Scalars['String'];
  /** Sender Information */
  sender: Sender;
  /** Sequence ID */
  sequenceId: Scalars['String'];
  /** Status */
  status: Scalars['String'];
  /** Updated At */
  updatedAt: Scalars['String'];
};

export type PhysicalProductInput = {
  dimensions: DimensionsInput;
  inventory: InventoryInput;
  shippingClass: ShippingClass;
  type: Scalars['String'];
  weight: Scalars['Float'];
};

/** A single point transaction */
export type PointTransaction = {
  __typename?: 'PointTransaction';
  /** Transaction Amount */
  amount: Scalars['Float'];
  /** Charge ID */
  charge_id: Scalars['String'];
  /** Chargeable Type */
  chargeable_type: Scalars['String'];
  /** PointTransaction Created At */
  created_at: Scalars['DateTime'];
  /** Currency (default: 'USDC') */
  currency: Scalars['String'];
  /** Point Transaction Description */
  description: Scalars['String'];
  /** Credit or Debit: 'credit' or 'debit' */
  dr_or_cr: Scalars['String'];
  /** Extra Data (JSON string) */
  extra_data?: Maybe<Scalars['String']>;
  /** Point Balance */
  point_balance: Scalars['Float'];
  /** Point Transaction Reference */
  reference: Scalars['String'];
  /** State of the point transaction ('active' or 'archived') */
  state: Scalars['String'];
  /** Point Transaction Status ('default', 'pending', 'successful') */
  status: Scalars['String'];
  /** Point Transaction Updated At */
  updated_at: Scalars['DateTime'];
  /** User ID */
  user_id: Scalars['Int'];
  /** Unique UUID */
  uuid: Scalars['String'];
  /** Wallet ID */
  wallet_id: Scalars['Int'];
};

/** A paginated list of PointTransaction items. */
export type PointTransactionPaginator = {
  __typename?: 'PointTransactionPaginator';
  /** A list of PointTransaction items. */
  data: Array<PointTransaction>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A product */
export type Product = {
  __typename?: 'Product';
  /** Billing Interval */
  billingInterval?: Maybe<Scalars['String']>;
  /** Attached business */
  business: Business;
  /** Business ID */
  businessId: Scalars['Int'];
  /** Product Created At */
  createdAt: Scalars['String'];
  /** Currency */
  currency: Scalars['String'];
  /** Description */
  description: Scalars['String'];
  /** Dimensions */
  dimensions?: Maybe<Scalars['String']>;
  /** Download Limit */
  downloadLimit?: Maybe<Scalars['Int']>;
  /** Download URL */
  downloadUrl?: Maybe<Scalars['String']>;
  /** Event Capacity */
  eventCapacity?: Maybe<Scalars['Int']>;
  /** Event End Date */
  eventEndDate?: Maybe<Scalars['String']>;
  /** Event Location */
  eventLocation?: Maybe<Scalars['String']>;
  /** Event Online URL */
  eventOnlineUrl?: Maybe<Scalars['String']>;
  /** Event overviews */
  eventOveview?: Maybe<EventOverview>;
  /** Event Registered Count */
  eventRegisteredCount: Scalars['Int'];
  /** Event Start Date */
  eventStartDate?: Maybe<Scalars['String']>;
  /** Event Type */
  eventType?: Maybe<Scalars['String']>;
  /** Event Waitlist Enabled */
  eventWaitlistEnabled: Scalars['Boolean'];
  /** Features */
  features?: Maybe<Scalars['String']>;
  /** FileInfo */
  fileInfo?: Maybe<Scalars['String']>;
  /** Grace Period */
  gracePeriod?: Maybe<Scalars['Int']>;
  /** Unique ID */
  id: Scalars['Int'];
  /** Images */
  images: Scalars['String'];
  /** Inventory Count */
  inventoryCount?: Maybe<Scalars['Int']>;
  /** Is Backorder Allowed */
  isBackorderAllowed: Scalars['Boolean'];
  /** Is Visible */
  isVisible: Scalars['Boolean'];
  /** License */
  license?: Maybe<Scalars['String']>;
  /** Meta Description */
  metaDescription?: Maybe<Scalars['String']>;
  /** Meta Title */
  metaTitle?: Maybe<Scalars['String']>;
  /** Product Name */
  name: Scalars['String'];
  /** Price */
  price: Scalars['Float'];
  /** Renewal */
  renewal?: Maybe<Scalars['String']>;
  /** SKU */
  sku: Scalars['String'];
  /** Product Slug */
  slug: Scalars['String'];
  /** Status */
  status: Scalars['String'];
  /** Stock Threshold */
  stockThreshold?: Maybe<Scalars['Int']>;
  /** Tax Code */
  taxCode?: Maybe<Scalars['String']>;
  /** Trial Period Days */
  trialPeriodDays?: Maybe<Scalars['Int']>;
  /** Type */
  type: Scalars['String'];
  /** Product Updated At */
  updatedAt: Scalars['String'];
  /** UUID */
  uuid: Scalars['String'];
  /** Variants */
  variants: Scalars['String'];
  /** Venue Name */
  venueName?: Maybe<Scalars['String']>;
  /** Weight */
  weight?: Maybe<Scalars['Float']>;
};

/** A paginated list of Product items. */
export type ProductPaginator = {
  __typename?: 'ProductPaginator';
  /** A list of Product items. */
  data: Array<Product>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum ProductStatus {
  Active = 'active',
  Archived = 'archived',
  Discontinued = 'discontinued',
  Draft = 'draft'
}

export enum ProductType {
  Digital = 'digital',
  Event = 'event',
  Physical = 'physical',
  Subscription = 'subscription'
}

export type ProductVariantInput = {
  attributes: Array<AttributeInput>;
  id: Scalars['String'];
  images: Scalars['String'];
  inventory?: InputMaybe<Scalars['Int']>;
  priceAdjustment: Scalars['Float'];
  sku: Scalars['String'];
};

/** A user profile on Greep */
export type Profile = {
  __typename?: 'Profile';
  /** User UUID */
  auth_user_id: Scalars['String'];
  /** The attached customer */
  business?: Maybe<Business>;
  /** Profile Created At */
  created_at: Scalars['DateTime'];
  /** Default Currency */
  default_currency?: Maybe<Scalars['String']>;
  /** Profile Picture URL (optional) */
  profile_picture?: Maybe<Scalars['String']>;
  /** Profile Updated At */
  updated_at: Scalars['DateTime'];
  /** User Type: Business, Rider, or Customer */
  user_type: Scalars['String'];
  /** Verification Status */
  verification_status: Scalars['String'];
  /** All attached verifications */
  verifications: Array<Verification>;
};

export type Query = {
  __typename?: 'Query';
  /** Get the current application version */
  CurrentAppVersion: Scalars['String'];
  /** Get all business locations by business UUID */
  GetAllBusinessLocations: StoreLocationPaginator;
  /** Get the authenticated user */
  GetAuthUser?: Maybe<User>;
  /** Get bank account details */
  GetBankAccountDetails: Scalars['String'];
  /** Get back branches by bank ID */
  GetBankBranchesByBankId?: Maybe<Array<FlutterwaveBankBranch>>;
  /** Get banks by country */
  GetBanksByCountry: Array<FlutterwaveBank>;
  /** Get a conversation */
  GetConversation?: Maybe<Conversation>;
  /** Get country information for verification */
  GetCountryInformation: CountryInformation;
  /** Get event tickets */
  GetEventTickets: TicketPaginator;
  /** Get an exchange ads */
  GetExchangeAd?: Maybe<ExchangeAd>;
  /** Get Exchange Ads */
  GetExchangeAds: ExchangeAdPaginator;
  /** Get the current exchange rate between two currencies */
  GetExchangeRate: ExchangeRate;
  /** Get financial summary */
  GetFinancialSummary: FinancialSummaryResponse;
  /** Get the global exchange rate between two currencies */
  GetGlobalExchangeRate: GlobalExchangeRate;
  /** Get a paginated list of P2P payment methods for the authenticated user */
  GetMyP2pPaymentMethods: P2pPaymentMethodPaginator;
  /** Get a paginated list of notifications for the authenticated user */
  GetNotifications: NotificationPaginator;
  /** Get the currently supported off-ramp currencies */
  GetOffRampCurrencies: Array<SupportedCurrency>;
  /** Get single offramp */
  GetOfframp?: Maybe<OffRamp>;
  /** Get a order by UUID */
  GetOrder?: Maybe<Order>;
  /** Get many orders - paginated list of orders for the authenticated business */
  GetOrders: OrderPaginator;
  /** Get a single P2P order by UUID */
  GetP2pOrder?: Maybe<ExchangeOrder>;
  /** Get many P2P orders - paginated list of P2P orders for the authenticated user */
  GetP2pOrders: ExchangeOrderPaginator;
  /** Get a single P2P payment method by UUID */
  GetP2pPaymentMethod?: Maybe<P2pPaymentMethod>;
  /** Get many point transactions */
  GetPointTransactions: PointTransactionPaginator;
  /** Get a product by UUID */
  GetProduct?: Maybe<Product>;
  /** Get many products - paginated list of products for the authenticated business */
  GetProducts: ProductPaginator;
  /** Get Recommended Exchange Ads */
  GetRecommendedExchangeAds: ExchangeAdPaginator;
  /** Get a paginated list of saved accounts for the authenticated user */
  GetSavedAccounts: UserBankPaginator;
  /** Get a single point transaction by UUID */
  GetSinglePointTransaction?: Maybe<PointTransaction>;
  /** Get a single transaction by UUID */
  GetSingleTransaction?: Maybe<Transaction>;
  /** Get a single store location by UUID */
  GetStoreLocation?: Maybe<StoreLocation>;
  /** Get store locations */
  GetStoreLocations: StoreLocationPaginator;
  /** Get many transactions - paginated list of transactions for the authenticated user */
  GetTransactions: TransactionPaginator;
  /** Get transfer fees */
  GetTransferFees: Scalars['Float'];
  /** Get withdrawal info */
  GetWithdrawInfo: WithdrawInfo;
  /** Get yellow card networks */
  GetYellowCardNetwork: Array<YellowcardNetwork>;
  /** Resolve bank account name */
  ResolveBankAccountName?: Maybe<BankAccountNameResponse>;
};


export type QueryGetAllBusinessLocationsArgs = {
  business_uuid: Scalars['String'];
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBankAccountDetailsArgs = {
  accountNumber: Scalars['String'];
  networkId: Scalars['String'];
};


export type QueryGetBankBranchesByBankIdArgs = {
  bank_id: Scalars['Int'];
};


export type QueryGetBanksByCountryArgs = {
  country: Scalars['String'];
};


export type QueryGetConversationArgs = {
  uuid: Scalars['String'];
};


export type QueryGetCountryInformationArgs = {
  country_code: Scalars['String'];
};


export type QueryGetEventTicketsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetEventTicketsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  productId: Scalars['Int'];
  where?: InputMaybe<QueryGetEventTicketsWhereWhereConditions>;
};


export type QueryGetExchangeAdArgs = {
  uuid: Scalars['String'];
};


export type QueryGetExchangeAdsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetExchangeAdsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetExchangeAdsWhereWhereConditions>;
};


export type QueryGetExchangeRateArgs = {
  from_currency: Scalars['String'];
  to_currency: Scalars['String'];
};


export type QueryGetFinancialSummaryArgs = {
  input: FinancialSummaryInput;
};


export type QueryGetGlobalExchangeRateArgs = {
  base: Scalars['String'];
  target: Scalars['String'];
};


export type QueryGetMyP2pPaymentMethodsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetNotificationsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetOfframpArgs = {
  uuid: Scalars['String'];
};


export type QueryGetOrderArgs = {
  uuid: Scalars['String'];
};


export type QueryGetOrdersArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetOrdersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetOrdersWhereWhereConditions>;
};


export type QueryGetP2pOrderArgs = {
  uuid: Scalars['String'];
};


export type QueryGetP2pOrdersArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetP2pOrdersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetP2pOrdersWhereWhereConditions>;
};


export type QueryGetP2pPaymentMethodArgs = {
  uuid: Scalars['String'];
};


export type QueryGetPointTransactionsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetPointTransactionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetPointTransactionsWhereWhereConditions>;
};


export type QueryGetProductArgs = {
  uuid: Scalars['String'];
};


export type QueryGetProductsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetProductsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetProductsWhereWhereConditions>;
};


export type QueryGetRecommendedExchangeAdsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetRecommendedExchangeAdsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetRecommendedExchangeAdsWhereWhereConditions>;
};


export type QueryGetSavedAccountsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetSinglePointTransactionArgs = {
  uuid: Scalars['String'];
};


export type QueryGetSingleTransactionArgs = {
  uuid: Scalars['String'];
};


export type QueryGetStoreLocationArgs = {
  uuid: Scalars['String'];
};


export type QueryGetStoreLocationsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetTransactionsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetTransactionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetTransactionsWhereWhereConditions>;
};


export type QueryGetTransferFeesArgs = {
  amount: Scalars['Float'];
  currency: Scalars['String'];
  type: Scalars['String'];
};


export type QueryGetWithdrawInfoArgs = {
  amount: Scalars['Float'];
  country_code?: InputMaybe<Scalars['String']>;
  currency?: InputMaybe<Scalars['String']>;
};


export type QueryGetYellowCardNetworkArgs = {
  country_code: Scalars['String'];
};


export type QueryResolveBankAccountNameArgs = {
  account_number: Scalars['String'];
  bank_code: Scalars['String'];
};

/** Allowed column names for Query.GetEventTickets.orderBy. */
export enum QueryGetEventTicketsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.GetEventTickets.orderBy. */
export type QueryGetEventTicketsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetEventTicketsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetEventTickets.where. */
export enum QueryGetEventTicketsWhereColumn {
  CreatedAt = 'CREATED_AT',
  ProductId = 'PRODUCT_ID',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetEventTickets`. */
export type QueryGetEventTicketsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetEventTicketsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetEventTicketsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetEventTicketsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetEventTicketsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetEventTickets`. */
export type QueryGetEventTicketsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetEventTicketsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetExchangeAds.orderBy. */
export enum QueryGetExchangeAdsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.GetExchangeAds.orderBy. */
export type QueryGetExchangeAdsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetExchangeAdsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetExchangeAds.where. */
export enum QueryGetExchangeAdsWhereColumn {
  CreatedAt = 'CREATED_AT',
  FromCurrency = 'FROM_CURRENCY',
  Status = 'STATUS',
  ToCurrency = 'TO_CURRENCY',
  UpdatedAt = 'UPDATED_AT'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetExchangeAds`. */
export type QueryGetExchangeAdsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetExchangeAdsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetExchangeAdsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetExchangeAdsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetExchangeAdsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetExchangeAds`. */
export type QueryGetExchangeAdsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetExchangeAdsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetOrders.orderBy. */
export enum QueryGetOrdersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.GetOrders.orderBy. */
export type QueryGetOrdersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetOrdersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetOrders.where. */
export enum QueryGetOrdersWhereColumn {
  CreatedAt = 'CREATED_AT',
  Currency = 'CURRENCY',
  OrderNumber = 'ORDER_NUMBER',
  PaymentStatus = 'PAYMENT_STATUS',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetOrders`. */
export type QueryGetOrdersWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetOrdersWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetOrdersWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetOrdersWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetOrdersWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetOrders`. */
export type QueryGetOrdersWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetOrdersWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetP2pOrders.orderBy. */
export enum QueryGetP2pOrdersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.GetP2pOrders.orderBy. */
export type QueryGetP2pOrdersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetP2pOrdersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetP2pOrders.where. */
export enum QueryGetP2pOrdersWhereColumn {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT',
  ExpiredAt = 'EXPIRED_AT',
  PaymentType = 'PAYMENT_TYPE',
  PayoutOption = 'PAYOUT_OPTION',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetP2pOrders`. */
export type QueryGetP2pOrdersWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetP2pOrdersWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetP2pOrdersWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetP2pOrdersWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetP2pOrdersWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetP2pOrders`. */
export type QueryGetP2pOrdersWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetP2pOrdersWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetPointTransactions.orderBy. */
export enum QueryGetPointTransactionsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.GetPointTransactions.orderBy. */
export type QueryGetPointTransactionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetPointTransactionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetPointTransactions.where. */
export enum QueryGetPointTransactionsWhereColumn {
  Amount = 'AMOUNT',
  ChargeableType = 'CHARGEABLE_TYPE',
  CreatedAt = 'CREATED_AT',
  Currency = 'CURRENCY',
  DrOrCr = 'DR_OR_CR',
  Reference = 'REFERENCE',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetPointTransactions`. */
export type QueryGetPointTransactionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetPointTransactionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetPointTransactionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetPointTransactionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetPointTransactionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetPointTransactions`. */
export type QueryGetPointTransactionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetPointTransactionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetProducts.orderBy. */
export enum QueryGetProductsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.GetProducts.orderBy. */
export type QueryGetProductsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetProductsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetProducts.where. */
export enum QueryGetProductsWhereColumn {
  CreatedAt = 'CREATED_AT',
  Currency = 'CURRENCY',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Price = 'PRICE',
  Sku = 'SKU',
  Status = 'STATUS',
  Type = 'TYPE',
  UpdatedAt = 'UPDATED_AT'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetProducts`. */
export type QueryGetProductsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetProductsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetProductsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetProductsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetProductsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetProducts`. */
export type QueryGetProductsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetProductsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetRecommendedExchangeAds.orderBy. */
export enum QueryGetRecommendedExchangeAdsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT'
}

/** Order by clause for Query.GetRecommendedExchangeAds.orderBy. */
export type QueryGetRecommendedExchangeAdsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetRecommendedExchangeAdsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetRecommendedExchangeAds.where. */
export enum QueryGetRecommendedExchangeAdsWhereColumn {
  CreatedAt = 'CREATED_AT',
  FromCurrency = 'FROM_CURRENCY',
  Status = 'STATUS',
  ToCurrency = 'TO_CURRENCY',
  UpdatedAt = 'UPDATED_AT'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetRecommendedExchangeAds`. */
export type QueryGetRecommendedExchangeAdsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetRecommendedExchangeAdsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetRecommendedExchangeAdsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetRecommendedExchangeAdsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetRecommendedExchangeAdsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetRecommendedExchangeAds`. */
export type QueryGetRecommendedExchangeAdsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetRecommendedExchangeAdsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

/** Allowed column names for Query.GetTransactions.orderBy. */
export enum QueryGetTransactionsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.GetTransactions.orderBy. */
export type QueryGetTransactionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGetTransactionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.GetTransactions.where. */
export enum QueryGetTransactionsWhereColumn {
  Amount = 'AMOUNT',
  ChargeableType = 'CHARGEABLE_TYPE',
  CreatedAt = 'CREATED_AT',
  Currency = 'CURRENCY',
  DrOrCr = 'DR_OR_CR',
  Reference = 'REFERENCE',
  Status = 'STATUS',
  UpdatedAt = 'UPDATED_AT'
}

/** Dynamic WHERE conditions for the `where` argument of the query `GetTransactions`. */
export type QueryGetTransactionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetTransactionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryGetTransactionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetTransactionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetTransactionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument of the query `GetTransactions`. */
export type QueryGetTransactionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryGetTransactionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type RenewalInput = {
  autoRenew: Scalars['Boolean'];
  price?: InputMaybe<Scalars['Float']>;
};

export type RequiredFields = {
  __typename?: 'RequiredFields';
  IMAGE?: Maybe<Array<Scalars['String']>>;
  NUMBER?: Maybe<Array<Scalars['String']>>;
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

/** A sale */
export type Sale = {
  __typename?: 'Sale';
  /** Applied Discounts */
  appliedDiscounts?: Maybe<Scalars['String']>;
  /** Sale Created At */
  createdAt: Scalars['String'];
  /** Currency */
  currency: Scalars['String'];
  /** Customer ID */
  customerId: Scalars['Int'];
  /** Discount Amount */
  discountAmount: Scalars['Float'];
  /** Unique ID */
  id: Scalars['Int'];
  /** Items */
  items: Scalars['String'];
  /** Metadata */
  metadata?: Maybe<Scalars['String']>;
  /** Payment Details */
  paymentDetails: Scalars['String'];
  /** Refund Details */
  refundDetails?: Maybe<Scalars['String']>;
  /** Status */
  status: Scalars['String'];
  /** Subtotal Amount */
  subtotalAmount: Scalars['Float'];
  /** Tax Amount */
  taxAmount: Scalars['Float'];
  /** Tax Details */
  taxDetails?: Maybe<Scalars['String']>;
  /** Total Amount */
  totalAmount: Scalars['Float'];
  /** Transaction ID */
  transactionId: Scalars['String'];
  /** Sale Updated At */
  updatedAt: Scalars['String'];
  /** The attached user */
  user: User;
  /** UUID */
  uuid: Scalars['String'];
};

/** Sender Details */
export type Sender = {
  __typename?: 'Sender';
  /** Sender's Address */
  address: Scalars['String'];
  /** Sender's Country */
  country: Scalars['String'];
  /** Sender's Date of Birth */
  dob: Scalars['String'];
  /** Sender's Email */
  email: Scalars['String'];
  /** Sender's ID Number */
  idNumber: Scalars['String'];
  /** Sender's ID Type */
  idType: Scalars['String'];
  /** Sender's Name */
  name: Scalars['String'];
  /** Sender's Phone Number */
  phone: Scalars['String'];
};

export enum ShippingClass {
  Express = 'express',
  Oversized = 'oversized',
  Standard = 'standard'
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** A physical store location tied to a business profile. */
export type StoreLocation = {
  __typename?: 'StoreLocation';
  /** Street or building address */
  address: Scalars['String'];
  /** Associated business ID */
  business_id: Scalars['String'];
  /** City where the store is located */
  city: Scalars['String'];
  /** Country (ISO code or full name) */
  country: Scalars['String'];
  /** When the store location was created */
  created_at: Scalars['DateTime'];
  /** Latitude coordinate (if available) */
  latitude?: Maybe<Scalars['Float']>;
  /** Longitude coordinate (if available) */
  longitude?: Maybe<Scalars['Float']>;
  /** Stringified metadata (e.g. hours, tags, notes) */
  meta_data?: Maybe<Scalars['String']>;
  /** Name or label for the location */
  name?: Maybe<Scalars['String']>;
  /** When the store location was last updated */
  updated_at: Scalars['DateTime'];
  /** Public UUID for external reference */
  uuid: Scalars['String'];
};

/** A paginated list of StoreLocation items. */
export type StoreLocationPaginator = {
  __typename?: 'StoreLocationPaginator';
  /** A list of StoreLocation items. */
  data: Array<StoreLocation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type SubscriptionProductInput = {
  billing: BillingInput;
  features: Array<Scalars['String']>;
  renewal: RenewalInput;
  type: Scalars['String'];
};

export type SupportedCurrency = {
  __typename?: 'SupportedCurrency';
  code: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  supported_methods: Array<Scalars['String']>;
};

export type SupportedMethods = {
  __typename?: 'SupportedMethods';
  IMAGE?: Maybe<Scalars['String']>;
  NUMBER?: Maybe<Scalars['String']>;
};

/** A ticket */
export type Ticket = {
  __typename?: 'Ticket';
  /** Ticket Created At */
  createdAt: Scalars['String'];
  /** Unique ID */
  id: Scalars['Int'];
  /** Price */
  price: Scalars['Float'];
  /** Product */
  product: Product;
  /** QR Code */
  qrCode: Scalars['String'];
  /** Sale */
  sale: Sale;
  /** Sale ID */
  saleId?: Maybe<Scalars['Int']>;
  /** Status */
  status: Scalars['String'];
  /** Ticket Type */
  ticketType: Scalars['String'];
  /** Ticket Updated At */
  updatedAt: Scalars['String'];
  /** User */
  user: User;
  /** User ID */
  userId: Scalars['Int'];
  /** UUID */
  uuid: Scalars['String'];
  /** Variant ID */
  variantId?: Maybe<Scalars['String']>;
};

/** A paginated list of Ticket items. */
export type TicketPaginator = {
  __typename?: 'TicketPaginator';
  /** A list of Ticket items. */
  data: Array<Ticket>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A single transaction */
export type Transaction = {
  __typename?: 'Transaction';
  /** Transaction Amount */
  amount: Scalars['Float'];
  /** Charge ID */
  charge_id: Scalars['String'];
  /** Chargeable Type */
  chargeable_type: Scalars['String'];
  /** Charges */
  charges: Scalars['Float'];
  /** Transaction Created At */
  created_at: Scalars['DateTime'];
  /** Currency (default: 'USDC') */
  currency: Scalars['String'];
  /** Transaction Description */
  description: Scalars['String'];
  /** Credit or Debit: 'credit' or 'debit' */
  dr_or_cr: Scalars['String'];
  /** Gateway (default: 'Greep-wallet') */
  gateway: Scalars['String'];
  /** The associated point transaction */
  point_transaction?: Maybe<PointTransaction>;
  /** Transaction Reference */
  reference: Scalars['String'];
  /** State of the transaction ('active' or 'archived') */
  state: Scalars['String'];
  /** Transaction Status ('default', 'pending', 'successful') */
  status: Scalars['String'];
  /** Transaction Updated At */
  updated_at: Scalars['DateTime'];
  /** User ID */
  user_id: Scalars['Int'];
  /** Unique UUID */
  uuid: Scalars['String'];
  /** Wallet Balance */
  wallet_balance: Scalars['Float'];
  /** Wallet ID */
  wallet_id: Scalars['Int'];
};

/** A paginated list of Transaction items. */
export type TransactionPaginator = {
  __typename?: 'TransactionPaginator';
  /** A list of Transaction items. */
  data: Array<Transaction>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** An account trustline */
export type Trustline = {
  __typename?: 'Trustline';
  /** Account UUID */
  account_id?: Maybe<Scalars['String']>;
  /** Asset Code */
  asset_code: Scalars['String'];
  /** Asset Issuer */
  asset_issuer: Scalars['String'];
  /** Trustline Created At */
  created_at?: Maybe<Scalars['DateTime']>;
  /** Unique UUID */
  id: Scalars['String'];
  /** Trustline Status */
  status: Scalars['String'];
  /** Trust Limit */
  trust_limit?: Maybe<Scalars['Float']>;
};

export type UpdateProductInput = {
  businessId?: InputMaybe<Scalars['Int']>;
  categoryIds?: InputMaybe<Array<Scalars['String']>>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  digitalDetails?: InputMaybe<DigitalProductInput>;
  eventDetails?: InputMaybe<EventProductInput>;
  id: Scalars['Int'];
  images?: InputMaybe<Array<ImageInput>>;
  inventoryCount?: InputMaybe<Scalars['Int']>;
  isBackorderAllowed?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  physicalDetails?: InputMaybe<PhysicalProductInput>;
  price?: InputMaybe<Scalars['Float']>;
  sku?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<ProductStatus>;
  stockThreshold?: InputMaybe<Scalars['Int']>;
  subscriptionDetails?: InputMaybe<SubscriptionProductInput>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  type?: InputMaybe<ProductType>;
  variants?: InputMaybe<Array<ProductVariantInput>>;
};

/** A User in Greep */
export type User = {
  __typename?: 'User';
  /** The attached businesses */
  businesses: Array<Business>;
  /** The user created at */
  created_at: Scalars['DateTime'];
  /** The user email */
  email: Scalars['String'];
  /** The user email verified at */
  email_verified_at?: Maybe<Scalars['String']>;
  /** The user first name */
  first_name: Scalars['String'];
  /** The user ID */
  id: Scalars['ID'];
  /** The user last name */
  last_name: Scalars['String'];
  /** The user phone */
  phone?: Maybe<Scalars['String']>;
  /** The user phone verified at */
  phone_verified_at?: Maybe<Scalars['String']>;
  /** The attached profile */
  profile: Profile;
  /** The user status */
  status: Scalars['String'];
  /** The auth passcode */
  transaction_pin?: Maybe<Scalars['String']>;
  /** The user updated at */
  updated_at: Scalars['DateTime'];
  /** The user username */
  username?: Maybe<Scalars['String']>;
  /** Unique UUID */
  uuid: Scalars['String'];
  /** The attached wallet */
  wallet: Wallet;
};

/** A single beneficiary */
export type UserBank = {
  __typename?: 'UserBank';
  /** Account Number */
  account_no: Scalars['String'];
  /** Bank Code */
  bank_code: Scalars['String'];
  /** Bank Name */
  bank_name: Scalars['String'];
  /** Currency (default: 'USDC') */
  currency: Scalars['String'];
  /** Is Verified */
  is_verified: Scalars['Boolean'];
  /** Metadata associated with the beneficiary */
  meta_data?: Maybe<Scalars['String']>;
  /** State of the beneficiary (active or archived) */
  state: Scalars['String'];
  /** Unique UUID */
  uuid: Scalars['String'];
  /** Wallet ID */
  wallet_id: Scalars['Int'];
};

/** A paginated list of UserBank items. */
export type UserBankPaginator = {
  __typename?: 'UserBankPaginator';
  /** A list of UserBank items. */
  data: Array<UserBank>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum UserType {
  Business = 'Business',
  Customer = 'Customer',
  Rider = 'Rider'
}

/** Verification request details. */
export type Verification = {
  __typename?: 'Verification';
  /** The authenticated user ID. */
  auth_user_id: Scalars['String'];
  /** When the verification request was created. */
  created_at: Scalars['DateTime'];
  /** Type of document submitted for verification. */
  document_type: DocumentType;
  /** URL of the submitted document. */
  document_url: Scalars['String'];
  /** Unique primary key. */
  id: Scalars['ID'];
  /** Current status of the verification request. */
  status: VerificationStatus;
  /** When the verification request was last updated. */
  updated_at: Scalars['DateTime'];
  /** The user type associated with the verification. */
  user_type: UserType;
  /** Additional verification data if needed. */
  verification_data?: Maybe<Scalars['JSON']>;
};

export enum VerificationStatus {
  Approved = 'Approved',
  Pending = 'Pending',
  Rejected = 'Rejected'
}

export type VerifyChecksInput = {
  dob?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['Boolean']>;
  phone?: InputMaybe<Scalars['Boolean']>;
};

/** A single wallet */
export type Wallet = {
  __typename?: 'Wallet';
  /** Cash Per Point */
  cash_per_point: Scalars['Float'];
  /** Cash Point Balance */
  cash_point_balance: Scalars['Float'];
  /** Wallet Created At */
  created_at: Scalars['DateTime'];
  /** Credited Amount */
  credited_amount: Scalars['Float'];
  /** Credited Point Amount */
  credited_point_amount: Scalars['Float'];
  /** Currency (default: 'USDC') */
  currency: Scalars['String'];
  /** Debited Amount */
  debited_amount: Scalars['Float'];
  /** Debited Point Amount */
  debited_point_amount: Scalars['Float'];
  /** Locked Balance */
  locked_balance: Scalars['Float'];
  /** Point Balance */
  point_balance: Scalars['Float'];
  /** Wallet State ('active' or 'archived') */
  state: Scalars['String'];
  /** Total Balance */
  total_balance: Scalars['Float'];
  /** Wallet Updated At */
  updated_at: Scalars['DateTime'];
  /** Unique UUID */
  uuid: Scalars['String'];
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String'];
};

export type WithdrawInfo = {
  __typename?: 'WithdrawInfo';
  currency?: Maybe<Scalars['String']>;
  methods: Array<WithdrawMethod>;
};

export type WithdrawMethod = {
  __typename?: 'WithdrawMethod';
  description?: Maybe<Scalars['String']>;
  fee?: Maybe<Scalars['String']>;
  max_amount?: Maybe<Scalars['Float']>;
  min_amount?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  unique_id?: Maybe<Scalars['String']>;
};

/** Yellowcard Network */
export type YellowcardNetwork = {
  __typename?: 'YellowcardNetwork';
  /** Account Number Type */
  accountNumberType?: Maybe<Scalars['String']>;
  /** Channel IDs */
  channelIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Network Code */
  code?: Maybe<Scalars['String']>;
  /** Country Code */
  country?: Maybe<Scalars['String']>;
  /** Country Account Number Type */
  countryAccountNumberType?: Maybe<Scalars['String']>;
  /** Has branch */
  hasBranch?: Maybe<Scalars['Boolean']>;
  /** Unique ID */
  id: Scalars['String'];
  /** Network Name */
  name?: Maybe<Scalars['String']>;
  /** Status */
  status?: Maybe<Scalars['String']>;
};
