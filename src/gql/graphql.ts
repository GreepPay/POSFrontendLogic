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

export type AuthResponse = {
  __typename?: 'AuthResponse';
  token: Scalars['String'];
  user: User;
};

/** Business profile details. */
export type Business = {
  __typename?: 'Business';
  /** Business banner URL. */
  banner?: Maybe<Scalars['String']>;
  /** Business name. */
  business_name?: Maybe<Scalars['String']>;
  /** Business city */
  city?: Maybe<Scalars['String']>;
  /** Business country */
  country?: Maybe<Scalars['String']>;
  /** When the business profile was created. */
  created_at: Scalars['DateTime'];
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
  /** When the business profile was last updated. */
  updated_at: Scalars['DateTime'];
  /** Associated User Profile. */
  user_profile?: Maybe<Profile>;
  /** Business website URL. */
  website?: Maybe<Scalars['String']>;
};

export enum DocumentType {
  InternationalPassport = 'International_Passport',
  License = 'License',
  ResidentPermit = 'Resident_Permit',
  StudentId = 'Student_ID'
}

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

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a saved account */
  CreateSavedAccount: UserBank;
  /** Initiate withdrawal */
  InitiateWithdrawal: Scalars['Boolean'];
  /** Mark specific notifications as read for the authenticated user. */
  MarkNotificationsAsRead?: Maybe<Scalars['Boolean']>;
  /** Redeem GRP tokens */
  RedeemGRPToken: Scalars['Boolean'];
  /** Remove a saved account */
  RemoveSavedAccount: Scalars['Boolean'];
  /** Resend email OTP */
  ResendEmailOTP: Scalars['Boolean'];
  /** Reset password for user */
  ResetPassword: Scalars['Boolean'];
  /** Save a push notification token for the authenticated user. */
  SavePushNotificationToken?: Maybe<Scalars['Boolean']>;
  /** send rest password OTP */
  SendResetPasswordOTP: Scalars['Boolean'];
  /** Sign in a user */
  SignIn: AuthResponse;
  /** Sign up a new user */
  SignUp: User;
  /** Update user password */
  UpdatePassword: Scalars['Boolean'];
  /** Update a user's profile with detailed information */
  UpdateProfile: Scalars['Boolean'];
  /** Verify user OTP */
  VerifyUserOTP: Scalars['Boolean'];
};


export type MutationCreateSavedAccountArgs = {
  metadata: Scalars['String'];
  type: Scalars['String'];
  unique_id: Scalars['String'];
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


export type MutationSendResetPasswordOtpArgs = {
  email: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  business_name: Scalars['String'];
  country: Scalars['String'];
  default_currency: Scalars['String'];
  documents: Array<Scalars['Upload']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  state: Scalars['String'];
};


export type MutationUpdatePasswordArgs = {
  current_password: Scalars['String'];
  new_password: Scalars['String'];
};


export type MutationUpdateProfileArgs = {
  business_name?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  default_currency?: InputMaybe<Scalars['String']>;
  documents?: InputMaybe<Array<Scalars['Upload']>>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  profile_photo?: InputMaybe<Scalars['Upload']>;
  state?: InputMaybe<Scalars['String']>;
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

/** A user profile on Greep */
export type Profile = {
  __typename?: 'Profile';
  /** User UUID */
  auth_user_id: Scalars['String'];
  /** The attached customer */
  business: Business;
  /** Profile Created At */
  created_at: Scalars['DateTime'];
  /** Default Currency */
  default_currency: Scalars['String'];
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
  /** Get the authenticated user */
  GetAuthUser?: Maybe<User>;
  /** Get the current exchange rate between two currencies */
  GetExchangeRate: ExchangeRate;
  /** Get the global exchange rate between two currencies */
  GetGlobalExchangeRate: GlobalExchangeRate;
  /** Get a paginated list of notifications for the authenticated user */
  GetNotifications: NotificationPaginator;
  /** Get the currently supported off-ramp currencies */
  GetOffRampCurrencies: Array<SupportedCurrency>;
  /** Get many point transactions */
  GetPointTransactions: PointTransactionPaginator;
  /** Get a paginated list of saved accounts for the authenticated user */
  GetSavedAccounts: UserBankPaginator;
  /** Get a single point transaction by UUID */
  GetSinglePointTransaction?: Maybe<PointTransaction>;
  /** Get a single transaction by UUID */
  GetSingleTransaction?: Maybe<Transaction>;
  /** Get many transactions - paginated list of transactions for the authenticated user */
  GetTransactions: TransactionPaginator;
};


export type QueryGetExchangeRateArgs = {
  from_currency: Scalars['String'];
  to_currency: Scalars['String'];
};


export type QueryGetGlobalExchangeRateArgs = {
  base: Scalars['String'];
  target: Scalars['String'];
};


export type QueryGetNotificationsArgs = {
  first: Scalars['Int'];
  page?: InputMaybe<Scalars['Int']>;
};


export type QueryGetPointTransactionsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetPointTransactionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetPointTransactionsWhereWhereConditions>;
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


export type QueryGetTransactionsArgs = {
  first: Scalars['Int'];
  orderBy?: InputMaybe<Array<QueryGetTransactionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<QueryGetTransactionsWhereWhereConditions>;
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
  Currency = 'CURRENCY',
  DrOrCr = 'DR_OR_CR',
  Reference = 'REFERENCE',
  Status = 'STATUS'
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
  Currency = 'CURRENCY',
  DrOrCr = 'DR_OR_CR',
  Reference = 'REFERENCE',
  Status = 'STATUS'
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

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type SupportedCurrency = {
  __typename?: 'SupportedCurrency';
  code: Scalars['String'];
  country: Scalars['String'];
  currency: Scalars['String'];
  supported_methods: Array<Scalars['String']>;
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

/** A User in Greep */
export type User = {
  __typename?: 'User';
  /** The user created at */
  created_at: Scalars['DateTime'];
  /** The user email */
  email: Scalars['String'];
  /** The user email verified at */
  email_verified_at?: Maybe<Scalars['DateTime']>;
  /** The user first name */
  first_name: Scalars['String'];
  /** The user last name */
  last_name: Scalars['String'];
  /** The user phone */
  phone?: Maybe<Scalars['String']>;
  /** The user phone verified at */
  phone_verified_at?: Maybe<Scalars['DateTime']>;
  /** The attached profile */
  profile: Profile;
  /** The user status */
  status: Scalars['String'];
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
