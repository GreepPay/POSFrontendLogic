import {
  AnchorTransation,
  BankAccountNameResponse,
  ExchangeAd,
  ExchangeAdPaginator,
  ExchangeOrder,
  ExchangeRate,
  FinancialSummaryInput,
  FinancialSummaryResponse,
  FlutterwaveBank,
  FlutterwaveBankBranch,
  GlobalExchangeRate,
  InteractiveWithdrawalResponse,
  MutationCreateExchangeAdArgs,
  MutationCreateP2pPaymentMethodArgs,
  MutationCreateProductArgs,
  MutationCreateSavedAccountArgs,
  MutationExtractAnchorTransactionArgs,
  MutationInitiateInteractiveWithdrawalArgs,
  MutationInitiateWithdrawalArgs,
  MutationSoftDeleteP2pPaymentMethodArgs,
  MutationUpdateExchangeAdArgs,
  MutationUpdateP2pPaymentMethodArgs,
  OffRamp,
  P2pPaymentMethod,
  P2pPaymentMethodPaginator,
  PointTransaction,
  PointTransactionPaginator,
  SupportedCurrency,
  Transaction,
  TransactionPaginator,
  UserBank,
  UserBankPaginator,
  WithdrawInfo,
  YellowcardNetwork,
} from "../gql/graphql";
import { OperationResult } from "urql";
import { BaseApiService } from "./common/BaseService";

export default class WalletApi extends BaseApiService {
  // Query
  public GetExchangeRate = (from_currency: string, to_currency: string) => {
    const requestData = `
      query GetExchangeRate($from_currency: String!, $to_currency: String!) {
        GetExchangeRate(from_currency: $from_currency, to_currency: $to_currency) {
          rates {
            buy
            code
            locale
            rateId
            sell
            updatedAt
          }
        }
      }

		`;

    const response: Promise<
      OperationResult<{
        GetExchangeRate: ExchangeRate;
      }>
    > = this.query(requestData, {
      from_currency,
      to_currency,
    });

    return response;
  };

  public GetWithdrawInfo = (
    amount: number,
    currency: string,
    country_code: string
  ) => {
    const requestData = `
      query GetWithdrawInfo($amount: Float!, $currency: String!, $country_code: String) {
        GetWithdrawInfo(amount: $amount, currency: $currency, country_code: $country_code) {
          currency
          methods {
            name
            description
            fee
            min_amount
            max_amount
            unique_id
          }
        }
      }
		`;

    const response: Promise<
      OperationResult<{
        GetWithdrawInfo: WithdrawInfo;
      }>
    > = this.query(requestData, {
      amount,
      currency,
      country_code,
    });

    return response;
  };

  public GetBanksByCountry = (country: string) => {
    const requestData = `
        query GetBanksByCountry($country: String!) {
          GetBanksByCountry(country: $country) {
             id
             code
             name
             provider_type
          }
        }
      `;

    const response: Promise<
      OperationResult<{
        GetBanksByCountry: FlutterwaveBank[];
      }>
    > = this.query(requestData, {
      country,
    });

    return response;
  };

  public GetBankBranchesByBankId = (bank_id: number) => {
    const requestData = `
        query GetBankBranchesByBankId($bank_id: String!) {
          GetBankBranchesByBankId(bank_id: $bank_id) {
             id
             branch_code
             branch_name
             swift_code
             bic
             bank_id
          }
        }
      `;

    const response: Promise<
      OperationResult<{
        GetBankBranchesByBankId: FlutterwaveBankBranch[];
      }>
    > = this.query(requestData, {
      bank_id,
    });

    return response;
  };

  public ResolveBankAccountName = (
    account_number: string,
    bank_code: string
  ) => {
    const requestData = `
        query ResolveBankAccountName($account_number: String!, $bank_code: String!) {
          ResolveBankAccountName(account_number: $account_number, bank_code: $bank_code) {
             account_number
             account_name
          }
        }
      `;

    const response: Promise<
      OperationResult<{
        ResolveBankAccountName: BankAccountNameResponse;
      }>
    > = this.query(requestData, {
      account_number,
      bank_code,
    });

    return response;
  };

  public GetTransferFees = (amount: number, currency: string, type: string) => {
    const requestData = `
        query GetTransferFees($amount: Float!, $currency: String!, $type: String!) {
          GetTransferFees(amount: $amount, currency: $currency, type: $type) 
        }
      `;

    const response: Promise<
      OperationResult<{
        GetTransferFees: number;
      }>
    > = this.query(requestData, {
      amount,
      currency,
      type,
    });

    return response;
  };

  public GetGlobalExchangeRate = (base: string, target: string) => {
    const requestData = `
      query GetGlobalExchangeRate($base: String!, $target: String!) {
        GetGlobalExchangeRate(base: $base, target: $target) {
          base
          target
          mid
          unit
        }
      }
		`;

    const response: Promise<
      OperationResult<{
        GetGlobalExchangeRate: GlobalExchangeRate;
      }>
    > = this.query(requestData, {
      base,
      target,
    });

    return response;
  };

  public GetOffRampCurrencies = () => {
    const requestData = `
        query GetOffRampCurrencies {
          GetOffRampCurrencies {
            code
            country
            currency
            supported_methods
          }
        }
    `;

    const response: Promise<
      OperationResult<{
        GetOffRampCurrencies: SupportedCurrency[];
      }>
    > = this.query(requestData, {});

    return response;
  };

  public GetYellowCardNetwork = (country_code: string) => {
    const requestData = `
        query GetYellowCardNetwork($country_code: String!) {
          GetYellowCardNetwork(country_code: $country_code) {
            id
            code
            hasBranch
            name
            country
            accountNumberType
            countryAccountNumberType
            status
            channelIds
          }
        }
    `;

    const response: Promise<
      OperationResult<{
        GetYellowCardNetwork: YellowcardNetwork[];
      }>
    > = this.query(requestData, {
      country_code,
    });

    return response;
  };

  public GetBankAccountDetails = (accountNumber: string, networkId: string) => {
    const requestData = `
        query GetBankAccountDetails($accountNumber: String!, $networkId: String!) {
          GetBankAccountDetails(accountNumber: $accountNumber, networkId: $networkId)
        }
    `;

    const response: Promise<
      OperationResult<{
        GetBankAccountDetails: string;
      }>
    > = this.query(requestData, {
      accountNumber,
      networkId,
    });

    return response;
  };

  public GetPointTransactions = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetPointTransactions(
        $page: Int!,
        $count: Int!
      ){
        GetPointTransactions(
          first: $count,
          page: $page,
          orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}
        ) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
            uuid
            amount
            charge_id
            chargeable_type
            created_at
            updated_at
            currency
            description
            dr_or_cr
            point_balance
            reference
            state
            status
          }
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetPointTransactions: PointTransactionPaginator;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };

  public GetFinancialSummary = (input: FinancialSummaryInput) => {
    const requestData = `
      query GetFinancialSummary($input: FinancialSummaryInput!) {
        GetFinancialSummary(input: $input) {
         credit
         debit
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetFinancialSummary: FinancialSummaryResponse;
      }>
    > = this.query(requestData, {
      input,
    });

    return response;
  };

  public GetTransactions = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetTransactions(
        $page: Int!,
        $count: Int!
      ){
        GetTransactions(
          first: $count,
          page: $page,
          orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}
        ) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
            amount
            gateway
            reference
            charges
            chargeable_type
            currency
            description
            dr_or_cr
            state
            status
            wallet_balance
            uuid
            updated_at
            created_at
          }
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetTransactions: TransactionPaginator;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };

  public GetExchangeAds = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetExchangeAds(
        $page: Int!,
        $count: Int!
      ){
        GetExchangeAds(
          first: $count,
          page: $page,
          orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}
        ) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
          uuid
          business {
           id
          }
          from_currency
          to_currency
          rate
          min_amount
          max_amount
          payout_address
          address_details
          payout_banks
          business_id
          status
          ad_type
          created_at
          updated_at
          }
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetExchangeAds: ExchangeAdPaginator;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };

  public GetRecommendedExchangeAds = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetRecommendedExchangeAds(
        $page: Int!,
        $count: Int!
      ){
        GetRecommendedExchangeAds(
          first: $count,
          page: $page,
          orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}
        ) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
          uuid
          business {
           id
           uuid
           logo
           business_name
          }
          from_currency
          to_currency
          rate
          min_amount
          max_amount
          payout_address
          address_details
          payout_banks
          business_id
          status
          ad_type
          created_at
          updated_at
          }
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetRecommendedExchangeAds: ExchangeAdPaginator;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };

  public GetExchangeAd = (uuid: string) => {
    const requestData = `
      query GetExchangeAd($uuid: String!) {
        GetExchangeAd(uuid: $uuid) {
          uuid
          business {
          id
          }
          from_currency
          to_currency
          rate
          min_amount
          max_amount
          payout_address
          address_details
          payout_banks
          business_id
          status
          ad_type
          created_at
          updated_at
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetExchangeAd: ExchangeAd;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

  public GetSavedAccounts = (first: number, page: number) => {
    const requestData = `
      query GetSavedAccounts($first: Int!, $page: Int) {
        GetSavedAccounts(first: $first, page: $page) {
          paginatorInfo {
            count
            currentPage
            firstItem
            hasMorePages
            lastItem
            lastPage
            perPage
            total
          }
          data {
            account_no
            bank_code
            bank_name
            currency
            is_verified
            meta_data
            state
            uuid
          }
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetSavedAccounts: UserBankPaginator;
      }>
    > = this.query(requestData, {
      first,
      page,
    });

    return response;
  };

  public GetSinglePointTransaction = (uuid: string) => {
    const requestData = `
      query GetSinglePointTransaction($uuid: String!) {
        GetSinglePointTransaction(uuid: $uuid) {
          amount
          charge_id
          chargeable_type
          created_at
          currency
          description
          dr_or_cr
          extra_data
          point_balance
          reference
          state
          status
          updated_at
          uuid
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetSinglePointTransaction: PointTransaction;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

  public GetSingleTransaction = (uuid: string) => {
    const requestData = `
      query GetSingleTransaction($uuid: String!) {
        GetSingleTransaction(uuid: $uuid) {
          amount
          charge_id
          chargeable_type
          charges
          created_at
          currency
          description
          dr_or_cr
          gateway
          reference
          state
          status
          updated_at
          uuid
          blockchain_transid
          wallet_balance
          point_transaction {
           uuid
           amount
          }
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetSingleTransaction: Transaction;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

  public GetOfframp = (uuid: string) => {
    const requestData = `
      query GetOfframp($uuid: String!) {
        GetOfframp(uuid: $uuid) {
        id
        uuid
        amount
        payment_reference
        yellow_card_payment {
          currency
          amount
          convertedAmount
          status
          rate
          destination {
            accountName
            accountNumber
            accountType
          }
          expiresAt
        }
        state
        payment_channel
        description
        status
        currency
        extra_data
        senderName
        senderCountry
        senderPhone
        senderAddress
        senderBusinessName
        created_at
        updated_at
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetOfframp: OffRamp;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

  // Mutations

  public CreateSavedAccount = (data: MutationCreateSavedAccountArgs) => {
    const requestData = `
        mutation CreateSavedAccount($type: String!, $unique_id: String!, $metadata: String!, $uploads: [Upload!]) {
          CreateSavedAccount(type: $type, unique_id: $unique_id, metadata: $metadata, uploads: $uploads) {
            account_no
            bank_code
            bank_name
            currency
            is_verified
            meta_data
            state
            uuid
          }
        }
      `;

    const response: Promise<
      OperationResult<{
        CreateSavedAccount: UserBank;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public InitiateWithdrawal = (data: MutationInitiateWithdrawalArgs) => {
    const requestData = `
        mutation InitiateWithdrawal(
          $saved_account_uuid: String!
          $amount: Float!
          $withdrawal_currency: String!
        ) {
          InitiateWithdrawal(
            saved_account_uuid: $saved_account_uuid
            amount: $amount
            withdrawal_currency: $withdrawal_currency
          ) {
             id
             uuid
             amount
             payment_reference
             yellow_card_payment {
               currency
               amount
               convertedAmount
               status
               rate
               destination {
                 accountName
                 accountNumber
                 accountType
               }
               expiresAt
             }
             state
             payment_channel
             description
             status
             currency
             extra_data
             senderName
             senderCountry
             senderPhone
             senderAddress
             senderBusinessName
             created_at
             updated_at
          }
        }
      `;

    const response: Promise<
      OperationResult<{
        InitiateWithdrawal: OffRamp;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public ConfirmWithdrawal = (
    uuid: string,
    currency: string,
    amount: number,
    country_code: string,
    metadata = ""
  ) => {
    const requestData = `
        mutation ConfirmWithdrawal(
          $uuid: String!
          $currency: String!
          $amount: Float!
          $country_code: String!
          $metadata: String
        ) {
          ConfirmWithdrawal(
            uuid: $uuid
            currency: $currency
            amount: $amount
            country_code: $country_code
            metadata: $metadata
          ) {
             id
             uuid
             amount
             payment_reference
             yellow_card_payment {
               currency
               amount
               convertedAmount
               status
               rate
               destination {
                 accountName
                 accountNumber
                 accountType
               }
               expiresAt
             }
             state
             payment_channel
             description
             status
             currency
             extra_data
             senderName
             senderCountry
             senderPhone
             senderAddress
             senderBusinessName
             created_at
             updated_at
          }
        }
      `;

    const response: Promise<
      OperationResult<{
        ConfirmWithdrawal: OffRamp;
      }>
    > = this.mutation(requestData, {
      uuid,
      currency,
      amount,
      country_code,
      metadata,
    });

    return response;
  };

  public CreateExchangeAd = (data: MutationCreateExchangeAdArgs) => {
    const requestData = `
      mutation CreateExchangeAd(
            $from_currency: String!
            $to_currency: String!
            $rate: Float!
            $min_amount: Float!
            $max_amount: Float!
            $payout_address: String!
            $address_details: String!
            $business_id: String!
            $payout_banks: String
            $ad_type: String!
          ) {
            CreateExchangeAd(
              from_currency: $from_currency
              to_currency: $to_currency
              rate: $rate
              min_amount: $min_amount
              max_amount: $max_amount
              payout_address: $payout_address
              address_details: $address_details
              business_id: $business_id
              payout_banks: $payout_banks
              ad_type: $ad_type
            ) {
              uuid
              business {
                id
              }
              from_currency
              to_currency
              rate
              min_amount
              max_amount
              payout_address
              address_details
              payout_banks
              business_id
              ad_type
              status
              created_at
              updated_at
            }
          }
        `;

    const response: Promise<
      OperationResult<{
        CreateExchangeAd: ExchangeAd;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public UpdateExchangeAd = (data: MutationUpdateExchangeAdArgs) => {
    const requestData = `
      mutation UpdateExchangeAd(
            $exchange_ad_uuid: String!
            $rate: Float
            $min_amount: Float
            $max_amount: Float
            $payout_address: String
            $address_details: String
            $payout_banks: String
            $status: String
            $ad_type: String
          ) {
            UpdateExchangeAd(
              exchange_ad_uuid: $exchange_ad_uuid
              rate: $rate
              min_amount: $min_amount
              max_amount: $max_amount
              payout_address: $payout_address
              address_details: $address_details
              payout_banks: $payout_banks
              status: $status
              ad_type: $ad_type
            ) {
              uuid
              business {
                id
              }
              from_currency
              to_currency
              rate
              min_amount
              max_amount
              payout_address
              address_details
              payout_banks
              ad_type
              business_id
              status
              created_at
              updated_at
            }
          }
        `;

    const response: Promise<
      OperationResult<{
        UpdateExchangeAd: ExchangeAd;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public RedeemGRPToken = (grpAmount: number) => {
    const requestData = `
        mutation RedeemGRPToken($grpAmount: Float!) {
          RedeemGRPToken(grp_amount: $grpAmount)
        }
      `;

    const response: Promise<
      OperationResult<{
        RedeemGRPToken: Boolean;
      }>
    > = this.mutation(requestData, {
      grpAmount,
    });

    return response;
  };

  public CreateCrpytoTransfer = (crypto: string, network: string) => {
    const requestData = `
        mutation CreateCrpytoTransfer($crypto: String!, $network: String!) {
          CreateCrpytoTransfer(crypto: $crypto, network: $network) {
            id
            uuid
            amount
            payment_reference
            state
            payment_channel
            description
            status
            currency
            extra_data
            senderName
            senderCountry
            senderPhone
            senderAddress
            senderBusinessName
            created_at
            updated_at
          }
        }
      `;

    const response: Promise<
      OperationResult<{
        CreateCrpytoTransfer: OffRamp;
      }>
    > = this.mutation(requestData, {
      crypto,
      network,
    });

    return response;
  };

  public RemoveSavedAccount = (saved_account_uuid: string) => {
    const requestData = `
        mutation RemoveSavedAccount($saved_account_uuid: String!) {
          RemoveSavedAccount(saved_account_uuid: $saved_account_uuid)
        }
      `;

    const response: Promise<
      OperationResult<{
        RemoveSavedAccount: Boolean;
      }>
    > = this.mutation(requestData, {
      saved_account_uuid,
    });

    return response;
  };

  public InitiateWalletKYC = (currency: string) => {
    const requestData = `
        mutation InitiateWalletKYC($currency: String!) {
          InitiateWalletKYC(currency: $currency)
        }
      `;

    const response: Promise<
      OperationResult<{
        InitiateWalletKYC: string;
      }>
    > = this.mutation(requestData, {
      currency,
    });

    return response;
  };

  public InitiateInteractiveWithdrawal = (
    data: MutationInitiateInteractiveWithdrawalArgs
  ) => {
    const requestData = `
      mutation InitiateInteractiveWithdrawal($amount: Float!, $withdrawal_currency: String!) {
        InitiateInteractiveWithdrawal(amount: $amount, withdrawal_currency: $withdrawal_currency) {
          type
          url
          id
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        InitiateInteractiveWithdrawal: InteractiveWithdrawalResponse;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public ExtractAnchorTransaction = (
    data: MutationExtractAnchorTransactionArgs
  ) => {
    const requestData = `
      mutation ExtractAnchorTransaction($transaction_id: String!, $withdrawal_currency: String!) {
        ExtractAnchorTransaction(transaction_id: $transaction_id, withdrawal_currency: $withdrawal_currency) {
          id
          kind
          status
          status_eta
          more_info_url
          amount_in
          amount_out
          amount_fee
          started_at
          completed_at
          stellar_transaction_id
          external_transaction_id
          message
          refunded
          deposit_memo
          deposit_memo_type
          from
          to
          withdraw_anchor_account
          withdraw_memo
          withdraw_memo_type
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        ExtractAnchorTransaction: AnchorTransation;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  // P2P Orders
  public GetP2pOrders = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC" = "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetP2pOrders($first: Int!, $page: Int!) {
        GetP2pOrders(first: $first, page: $page) {
          data {
            id
            uuid
            amount
            expected_amount
            status
            payment_type
            payout_option
            pickup_location_address_line
            pickup_location_city
            pickup_location_country
            created_at
            updated_at
            expired_at
            ad {
              uuid
              from_currency
              to_currency
              rate
              status
              business {
                uuid
                business_name
                logo
                address
                city
                country
              }
            }
            user {
              id
              uuid
              first_name
              last_name
              email
              phone
            }
          }
          paginatorInfo {
            count
            currentPage
            firstItem
            hasMorePages
            lastItem
            lastPage
            perPage
            total
          }
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetP2pOrders: {
          data: ExchangeOrder[];
          paginatorInfo: any;
        };
      }>
    > = this.query(requestData, {
      first: count,
      page,
    });

    return response;
  };

  public GetP2pPaymentMethods = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC" = "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetMyP2pPaymentMethods($page: Int!, $count: Int!) {
        GetMyP2pPaymentMethods(first: $count, page: $page,   orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
            uuid
            user_id
            account_name
            account_number
            bank_name
            currency
            meta_data
            created_at
            updated_at
          }
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetMyP2pPaymentMethods: P2pPaymentMethodPaginator;
      }>
    > = this.query(requestData, { page, count });

    return response;
  };

  public GetP2pOrder = (uuid: string) => {
    const requestData = `
      query GetP2pOrder($uuid: String!) {
        GetP2pOrder(uuid: $uuid) {
          id
          uuid
          amount
          expected_amount
          status
          payment_type
          payout_option
          pickup_location_address_line
          pickup_location_city
          pickup_location_country
          conversation_uuid
          created_at
          updated_at
          expired_at
          ad {
            uuid
            from_currency
            to_currency
            rate
            status
            ad_type
            business {
              uuid
              business_name
              logo
              address
              city
              country
              user {
                id
                uuid
                first_name
                last_name
                email
              }
            }
          }
          user {
            id
            uuid
            first_name
            last_name
            email
            phone
          }
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetP2pOrder: ExchangeOrder;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

  public CreateP2pOrder = (orderData: {
    exchange_ad_uuid: string;
    amount: number;
    delivery_address: string;
    city: string;
    country: string;
    payment_type: string;
    payout_option: string;
    conversation_uuid: string;
    metadata?: string;
  }) => {
    const requestData = `
      mutation CreateP2pOrder(
        $exchange_ad_uuid: String!
        $amount: Float!
        $delivery_address: String!
        $city: String!
        $country: String!
        $payment_type: String!
        $payout_option: String!
        $conversation_uuid: String!
        $metadata: String
      ) {
        CreateP2pOrder(
          exchange_ad_uuid: $exchange_ad_uuid
          amount: $amount
          delivery_address: $delivery_address
          city: $city
          country: $country
          payment_type: $payment_type
          payout_option: $payout_option
          conversation_uuid: $conversation_uuid
          metadata: $metadata
        ) {
          id
          uuid
          amount
          expected_amount
          status
          payment_type
          payout_option
          pickup_location_address_line
          pickup_location_city
          pickup_location_country
          conversation_uuid
          created_at
          updated_at
          expired_at
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        CreateP2pOrder: ExchangeOrder;
      }>
    > = this.mutation(requestData, orderData);

    return response;
  };

  public UploadFile = (file: File) => {
    const requestData = `
      mutation UploadFile($file: Upload!) {
        UploadFile(file: $file)
      }
    `;

    // Ensure file is properly passed and handle potential null/undefined cases
    if (!file) {
      throw new Error("File is required for upload");
    }

    // Ensure the file is a valid File object
    if (!(file instanceof File)) {
      throw new Error("Invalid file object provided");
    }

    // Log file details for debugging
    console.log("Uploading file:", {
      name: file.name,
      size: file.size,
      type: file.type,
    });

    const response: Promise<
      OperationResult<{
        UploadFile: string;
      }>
    > = this.mutation(requestData, { file });

    return response;
  };

  // ✅ NEW: Release P2P Funds mutation
  public ReleaseP2pFunds = (
    order_uuid: string,
    amount: number,
    metadata?: string
  ) => {
    const requestData = `
      mutation ReleaseP2pFunds($order_uuid: String!, $amount: Float!, $metadata: String) {
        ReleaseP2pFunds(order_uuid: $order_uuid, amount: $amount, metadata: $metadata)
      }
    `;

    const response: Promise<
      OperationResult<{
        ReleaseP2pFunds: boolean;
      }>
    > = this.mutation(requestData, {
      order_uuid,
      amount,
      metadata,
    });

    return response;
  };

  // P2P Payment Methods
  public GetMyP2pPaymentMethods = (
    first: number,
    page: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC" = "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetMyP2pPaymentMethods($first: Int!, $page: Int) {
        GetMyP2pPaymentMethods(first: $first, page: $page,    orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}) {
          paginatorInfo {
            count
            currentPage
            firstItem
            hasMorePages
            lastItem
            lastPage
            perPage
            total
          }
          data {
            uuid
            user_id
            bank_name
            account_number
            account_name
            currency
            meta_data
            created_at
            updated_at
          }
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetMyP2pPaymentMethods: P2pPaymentMethodPaginator;
      }>
    > = this.query(requestData, {
      first,
      page,
    });

    return response;
  };

  public GetP2pPaymentMethod = (uuid: string) => {
    const requestData = `
      query GetP2pPaymentMethod($uuid: String!) {
        GetP2pPaymentMethod(uuid: $uuid) {
          uuid
          user_id
          bank_name
          account_number
          account_name
          currency
          meta_data
          created_at
          updated_at
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetP2pPaymentMethod: P2pPaymentMethod;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

  public CreateP2pPaymentMethod = (
    data: MutationCreateP2pPaymentMethodArgs
  ) => {
    const requestData = `
      mutation CreateP2pPaymentMethod(
        $bank_name: String!
        $account_number: String!
        $account_name: String!
        $currency: String
        $meta_data: String
      ) {
        CreateP2pPaymentMethod(
          bank_name: $bank_name
          account_number: $account_number
          account_name: $account_name
          currency: $currency
          meta_data: $meta_data
        ) {
          uuid
          user_id
          bank_name
          account_number
          account_name
          currency
          meta_data
          created_at
          updated_at
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        CreateP2pPaymentMethod: P2pPaymentMethod;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public UpdateP2pPaymentMethod = (
    data: MutationUpdateP2pPaymentMethodArgs
  ) => {
    const requestData = `
      mutation UpdateP2pPaymentMethod(
        $p2p_payment_method_uuid: String!
        $bank_name: String
        $account_number: String
        $account_name: String
        $currency: String
        $meta_data: String
      ) {
        UpdateP2pPaymentMethod(
          p2p_payment_method_uuid: $p2p_payment_method_uuid
          bank_name: $bank_name
          account_number: $account_number
          account_name: $account_name
          currency: $currency
          meta_data: $meta_data
        ) {
          uuid
          user_id
          bank_name
          account_number
          account_name
          currency
          meta_data
          created_at
          updated_at
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        UpdateP2pPaymentMethod: P2pPaymentMethod;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public SoftDeleteP2pPaymentMethod = (
    data: MutationSoftDeleteP2pPaymentMethodArgs
  ) => {
    const requestData = `
      mutation SoftDeleteP2pPaymentMethod($p2p_payment_method_uuid: String!) {
        SoftDeleteP2pPaymentMethod(p2p_payment_method_uuid: $p2p_payment_method_uuid)
      }
    `;

    const response: Promise<
      OperationResult<{
        SoftDeleteP2pPaymentMethod: boolean;
      }>
    > = this.mutation(requestData, data);

    return response;
  };
}
