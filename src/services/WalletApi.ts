import {
  ExchangeRate,
  MutationCreateSavedAccountArgs,
  MutationInitiateWithdrawalArgs,
  PointTransaction,
  PointTransactionPaginator,
  SupportedCurrency,
  Transaction,
  TransactionPaginator,
  UserBank,
  UserBankPaginator,
} from "src/gql/graphql";
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

  // Mutations

  public CreateSavedAccount = (data: MutationCreateSavedAccountArgs) => {
    const requestData = `
        mutation CreateSavedAccount($type: String!, $unique_id: String!, $metadata: String!) {
          CreateSavedAccount(type: $type, unique_id: $unique_id, metadata: $metadata) {
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
    > = this.mutation(requestData, {
      data,
    });

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
          )
        }
      `;

    const response: Promise<
      OperationResult<{
        InitiateWithdrawal: Boolean;
      }>
    > = this.mutation(requestData, {
      data,
    });

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
}
