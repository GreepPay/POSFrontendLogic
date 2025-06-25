import {
  ExchangeAd,
  ExchangeAdPaginator,
  ExchangeRate,
  FinancialSummaryInput,
  FinancialSummaryResponse,
  GlobalExchangeRate,
  MutationCreateExchangeAdArgs,
  MutationCreateProductArgs,
  MutationCreateSavedAccountArgs,
  MutationInitiateWithdrawalArgs,
  MutationUpdateExchangeAdArgs,
  OffRamp,
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

  public GetWithdrawInfo = (amount: number, currency: string) => {
    const requestData = `
      query GetWithdrawInfo($amount: Float!, $currency: String!) {
        GetWithdrawInfo(amount: $amount, currency: $currency) {
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
    whereQuery = "",
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
    whereQuery = "",
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
    whereQuery = "",
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
    metadata = "",
  ) => {
    const requestData = `
        mutation ConfirmWithdrawal(
          $uuid: String!
          $currency: String!
          $amount: Float!
          $metadata: String
        ) {
          ConfirmWithdrawal(
            uuid: $uuid
            currency: $currency
            amount: $amount
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
}
