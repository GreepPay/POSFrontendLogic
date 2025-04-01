import {
  ExchangeRate,
  MutationCreateSavedAccountArgs,
  MutationInitiateWithdrawalArgs,
  PointTransaction,
  PointTransactionPaginator,
  SupportedCurrency,
  Transaction,
  TransactionPaginator,
  UserBankPaginator,
} from "../../gql/graphql";
import { $api } from "../../services";
import { CombinedError } from "urql";
import Common from "./Common";
import { Logic } from "..";

export default class Wallet extends Common {
  constructor() {
    super();
  }

  // Base Variables
  public CurrentExchangeRate: ExchangeRate | undefined;
  public ManyOffRampCurrencies: SupportedCurrency[] | undefined;
  public ManyPointTransactions: PointTransactionPaginator | undefined;
  public ManyTransactions: TransactionPaginator | undefined;
  public ManySavedAccounts: UserBankPaginator | undefined;
  public SinglePointTransaction: PointTransaction | undefined;
  public SingleTransaction: Transaction | undefined;

  // Mutation Variables
  public CreateSavedAccountForm: MutationCreateSavedAccountArgs | undefined;
  public InitiateWithdrawalForm: MutationInitiateWithdrawalArgs | undefined;

  // Queries
  public GetExchangeRate = async (
    from_currency: string,
    to_currency: string,
  ): Promise<ExchangeRate | undefined> => {
    return $api.wallet
      .GetExchangeRate(from_currency, to_currency)
      .then((response) => {
        this.CurrentExchangeRate = response.data?.GetExchangeRate;
        return this.CurrentExchangeRate;
      });
  };

  public GetPointTransactions = async (
    page: number,
    count: number,
    orderType: "CREATED_AT",
    order: "DESC",
    whereQuery = "",
  ) => {
    return $api.wallet
      .GetPointTransactions(page, count, orderType, order, whereQuery)
      .then((response) => {
        this.ManyPointTransactions = response.data?.GetPointTransactions;
        return this.ManyPointTransactions;
      });
  };

  public GetTransactions = async (
    page: number,
    count: number,
    orderType: "CREATED_AT",
    order: "DESC",
    whereQuery = "",
  ) => {
    return $api.wallet
      .GetTransactions(page, count, orderType, order, whereQuery)
      .then((response) => {
        this.ManyTransactions = response.data?.GetTransactions;
        return this.ManyTransactions;
      });
  };

  public GetSavedAccounts = async (first: number, page: number) => {
    return $api.wallet.GetSavedAccounts(first, page).then((response) => {
      this.ManySavedAccounts = response.data?.GetSavedAccounts;
      return this.ManySavedAccounts;
    });
  };

  public GetSinglePointTransaction = async (uuid: string) => {
    return $api.wallet.GetSinglePointTransaction(uuid).then((response) => {
      this.SinglePointTransaction = response.data?.GetSinglePointTransaction;
      return this.SinglePointTransaction;
    });
  };

  public GetSingleTransaction = async (uuid: string) => {
    return $api.wallet.GetSingleTransaction(uuid).then((response) => {
      this.SingleTransaction = response.data?.GetSingleTransaction;
      return this.SingleTransaction;
    });
  };

  // Mutations
  public CreateSavedAccount = async () => {
    if (this.CreateSavedAccountForm) {
      return $api.wallet
        .CreateSavedAccount(this.CreateSavedAccountForm)
        .then((response) => {
          if (response.data?.CreateSavedAccount) {
            return response.data.CreateSavedAccount;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
        });
    }
  };

  public InitiateWithdrawal = async () => {
    if (this.InitiateWithdrawalForm) {
      return $api.wallet
        .InitiateWithdrawal(this.InitiateWithdrawalForm)
        .then((response) => {
          if (response.data?.InitiateWithdrawal) {
            return response.data.InitiateWithdrawal;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
        });
    }
  };

  public RedeemGRPToken = (grpAmount: number) => {
    if (grpAmount) {
      return $api.wallet
        .RedeemGRPToken(grpAmount)
        .then((response) => {
          if (response.data?.RedeemGRPToken) {
            return response.data.RedeemGRPToken;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
        });
    }
  };

  public RemoveSavedAccount = (saved_account_uuid: string) => {
    if (saved_account_uuid) {
      return $api.wallet
        .RemoveSavedAccount(saved_account_uuid)
        .then((response) => {
          if (response.data?.RemoveSavedAccount) {
            return response.data.RemoveSavedAccount;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
        });
    }
  };
}
