import {
  ExchangeAd,
  ExchangeAdPaginator,
  ExchangeOrder,
  ExchangeRate,
  FinancialSummaryInput,
  FinancialSummaryResponse,
  GlobalExchangeRate,
  MutationCreateExchangeAdArgs,
  MutationCreateSavedAccountArgs,
  MutationExtractAnchorTransactionArgs,
  MutationInitiateInteractiveWithdrawalArgs,
  MutationInitiateWithdrawalArgs,
  MutationUpdateExchangeAdArgs,
  OffRamp,
  PointTransaction,
  PointTransactionPaginator,
  SupportedCurrency,
  Transaction,
  TransactionPaginator,
  UserBankPaginator,
  WithdrawInfo,
  YellowcardNetwork,
} from "../../gql/graphql";
import { $api } from "../../services";
import { CombinedError } from "urql";
import Common from "./Common";
import { Logic } from "..";

export default class Wallet extends Common {
  // Base Variables
  public CurrentExchangeRate: ExchangeRate | undefined;
  public ManyOffRampCurrencies: SupportedCurrency[] | undefined;
  public ManyPointTransactions: PointTransactionPaginator | undefined;
  public ManyTransactions: TransactionPaginator | undefined;
  public ManySavedAccounts: UserBankPaginator | undefined;
  public SinglePointTransaction: PointTransaction | undefined;
  public SingleTransaction: Transaction | undefined;
  public CurrentGlobalExchangeRate: GlobalExchangeRate | undefined;
  public NormalFinancialSummary: FinancialSummaryResponse | undefined;
  public PointFinancialSummary: FinancialSummaryResponse | undefined;
  public CurrentWithdrawalInfo: WithdrawInfo | undefined;
  public CurrentYellowCardNetworks: YellowcardNetwork[] | undefined;
  public CurrentOfframp: OffRamp | undefined;
  public ManyExchangeAds: ExchangeAdPaginator | undefined;
  public ManyRecommendedExchangeAds: ExchangeAdPaginator | undefined;
  public SingleExchangeAd: ExchangeAd | undefined;
  public ManyP2pOrders: { data: ExchangeOrder[]; paginatorInfo: any } | undefined;
  public SingleP2pOrder: ExchangeOrder | undefined;

  // Mutation Variables
  public CreateSavedAccountForm: MutationCreateSavedAccountArgs | undefined;
  public InitiateWithdrawalForm: MutationInitiateWithdrawalArgs | undefined;
  public CreateExchangeAdForm: MutationCreateExchangeAdArgs | undefined;
  public UpdateExchangeAdForm: MutationUpdateExchangeAdArgs | undefined;
  public InitiateInteractiveWithdrawalForm: MutationInitiateInteractiveWithdrawalArgs | undefined;
  public ExtractAnchorTransactionForm: MutationExtractAnchorTransactionArgs | undefined;

  constructor() {
    super();

    this.defineReactiveProperty("CurrentExchangeRate", undefined);
    this.defineReactiveProperty("ManyOffRampCurrencies", undefined);
    this.defineReactiveProperty("ManyPointTransactions", undefined);
    this.defineReactiveProperty("ManyTransactions", undefined);
    this.defineReactiveProperty("ManySavedAccounts", undefined);
    this.defineReactiveProperty("SinglePointTransaction", undefined);
    this.defineReactiveProperty("SingleTransaction", undefined);
    this.defineReactiveProperty("CurrentGlobalExchangeRate", undefined);
    this.defineReactiveProperty("NormalFinancialSummary", undefined);
    this.defineReactiveProperty("PointFinancialSummary", undefined);
    this.defineReactiveProperty("CurrentWithdrawalInfo", undefined);
    this.defineReactiveProperty("CurrentYellowCardNetworks", undefined);
    this.defineReactiveProperty("CurrentOfframp", undefined);
    this.defineReactiveProperty("ManyExchangeAds", undefined);
    this.defineReactiveProperty("SingleExchangeAd", undefined);
    this.defineReactiveProperty("ManyRecommendedExchangeAds", undefined);
    this.defineReactiveProperty("ManyP2pOrders", undefined);
    this.defineReactiveProperty("SingleP2pOrder", undefined);
  }

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

  public GetWithdrawInfo = async (
    amount: number,
    currency: string,
  ): Promise<WithdrawInfo | undefined> => {
    return $api.wallet.GetWithdrawInfo(amount, currency).then((response) => {
      this.CurrentWithdrawalInfo = response.data?.GetWithdrawInfo;
      return this.CurrentWithdrawalInfo;
    });
  };

  public GetYellowCardNetwork = async (
    country_code: string,
  ): Promise<YellowcardNetwork[] | undefined> => {
    return $api.wallet.GetYellowCardNetwork(country_code).then((response) => {
      this.CurrentYellowCardNetworks = response.data?.GetYellowCardNetwork;
      return this.CurrentYellowCardNetworks;
    });
  };

  public GetGlobalExchangeRate = async (
    base = "USD",
    target = "",
  ): Promise<GlobalExchangeRate | undefined> => {
    if (!target) {
      const currentBusiness = Logic.Auth?.GetDefaultBusiness();
      target = currentBusiness?.default_currency || "USD";
    }

    if (target == "USDC" || target == "USDT") {
      target = "USD";
    }

    if (target == "EURC") {
      target = "EUR";
    }
    return $api.wallet.GetGlobalExchangeRate(base, target).then((response) => {
      this.CurrentGlobalExchangeRate = response.data?.GetGlobalExchangeRate;
      return this.CurrentGlobalExchangeRate;
    });
  };

  public GetPointTransactions = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false,
  ) => {
    return $api.wallet
      .GetPointTransactions(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyPointTransactions = response.data?.GetPointTransactions;
        }
        return response.data?.GetPointTransactions;
      });
  };

  public GetExchangeAds = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false,
  ) => {
    return $api.wallet
      .GetExchangeAds(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyExchangeAds = response.data?.GetExchangeAds;
        }
        return response.data?.GetExchangeAds;
      });
  };

  public GetRecommendedExchangeAds = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false,
  ) => {
    return $api.wallet
      .GetRecommendedExchangeAds(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyRecommendedExchangeAds =
            response.data?.GetRecommendedExchangeAds;
        }
        return response.data?.GetRecommendedExchangeAds;
      });
  };

  public GetPointFinancialSummary = async (from = "", to = "") => {
    const input: FinancialSummaryInput = {
      type: "point",
      from,
      to,
    };
    return $api.wallet.GetFinancialSummary(input).then((response) => {
      this.PointFinancialSummary = response.data?.GetFinancialSummary;
      return this.PointFinancialSummary;
    });
  };

  public GetBankAccountDetails = async (
    accountNumber: string,
    networkId: string,
  ) => {
    return $api.wallet
      .GetBankAccountDetails(accountNumber, networkId)
      .then((response) => {
        return response.data?.GetBankAccountDetails;
      });
  };

  public GetNormalFinancialSummary = async (from = "", to = "") => {
    const input: FinancialSummaryInput = {
      type: "normal",
      from,
      to,
    };
    return $api.wallet.GetFinancialSummary(input).then((response) => {
      this.NormalFinancialSummary = response.data?.GetFinancialSummary;
      return this.NormalFinancialSummary;
    });
  };

  public GetTransactions = async (
    page: number,
    count: number,
    orderType: "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false,
  ) => {
    return $api.wallet
      .GetTransactions(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyTransactions = response.data?.GetTransactions;
        }
        return response.data?.GetTransactions;
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

  public GetExchangeAd = async (uuid: string) => {
    return $api.wallet.GetExchangeAd(uuid).then((response) => {
      this.SingleExchangeAd = response.data?.GetExchangeAd;
      return this.SingleExchangeAd;
    });
  };

  public GetSingleTransaction = async (uuid: string) => {
    return $api.wallet.GetSingleTransaction(uuid).then((response) => {
      this.SingleTransaction = response.data?.GetSingleTransaction;
      return this.SingleTransaction;
    });
  };

  public GetOfframp = async (uuid: string) => {
    if (!uuid) {
      this.CurrentOfframp = undefined;
      return Promise.resolve(true);
    }
    return $api.wallet.GetOfframp(uuid).then((response) => {
      this.CurrentOfframp = response.data?.GetOfframp;
      return this.CurrentOfframp;
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
          throw error;
        });
    }
  };

  public InitiateInteractiveWithdrawal = async () => {
    if (this.InitiateInteractiveWithdrawalForm) {
      return $api.wallet
        .InitiateInteractiveWithdrawal(this.InitiateInteractiveWithdrawalForm)
        .then((response) => {
          if (response.data?.InitiateInteractiveWithdrawal) {
            return response.data.InitiateInteractiveWithdrawal;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  }

  public ExtractAnchorTransaction = async () => {
    if (this.ExtractAnchorTransactionForm) {
      return $api.wallet
        .ExtractAnchorTransaction(
          this.ExtractAnchorTransactionForm,
        )
        .then((response) => {
          if (response.data?.ExtractAnchorTransaction) {
            return response.data.ExtractAnchorTransaction;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public CreateExchangeAd = async () => {
    if (this.CreateExchangeAdForm) {
      return $api.wallet
        .CreateExchangeAd(this.CreateExchangeAdForm)
        .then((response) => {
          if (response.data?.CreateExchangeAd) {
            this.SingleExchangeAd = response.data.CreateExchangeAd;
            return response.data.CreateExchangeAd;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public UpdateExchangeAd = async () => {
    if (this.UpdateExchangeAdForm) {
      return $api.wallet
        .UpdateExchangeAd(this.UpdateExchangeAdForm)
        .then((response) => {
          if (response.data?.UpdateExchangeAd) {
            this.SingleExchangeAd = response.data.UpdateExchangeAd;
            return response.data.UpdateExchangeAd;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public InitiateWithdrawal = async () => {
    if (this.InitiateWithdrawalForm) {
      return $api.wallet
        .InitiateWithdrawal(this.InitiateWithdrawalForm)
        .then((response) => {
          if (response.data?.InitiateWithdrawal) {
            this.CurrentOfframp = response.data.InitiateWithdrawal;
            return response.data.InitiateWithdrawal;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public ConfirmWithdrawal = async (
    uuid: string,
    currency: string,
    amount: number,
    metadata = "",
  ) => {
    if (uuid) {
      return $api.wallet
        .ConfirmWithdrawal(uuid, currency, amount, metadata)
        .then((response) => {
          if (response.data?.ConfirmWithdrawal) {
            this.CurrentOfframp = response.data.ConfirmWithdrawal;
            return response.data.ConfirmWithdrawal;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
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
          throw error;
        });
    }
  };

  public InitiateWalletKYC = (currency: string) => {
    if (currency) {
      return $api.wallet
        .InitiateWalletKYC(currency)
        .then((response) => {
          if (response.data?.InitiateWalletKYC) {
            Logic.Common.hideLoader();
            return response.data.InitiateWalletKYC;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.hideLoader();
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
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
          throw error;
        });
    }
  };

  // P2P Orders
  public GetP2pOrders = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false,
  ) => {
    return $api.wallet
      .GetP2pOrders(page, count, orderType, order, whereQuery)
      .then((response) => {
        this.ManyP2pOrders = response.data?.GetP2pOrders;
        return this.ManyP2pOrders;
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw error;
      });
  };

  public GetP2pOrder = async (uuid: string) => {
    return $api.wallet
      .GetP2pOrder(uuid)
      .then((response) => {
        this.SingleP2pOrder = response.data?.GetP2pOrder;
        return this.SingleP2pOrder;
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw error;
      });
  };

  public CreateP2pOrder = async (orderData: {
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
    return $api.wallet
      .CreateP2pOrder(orderData)
      .then((response) => {
        if (response.data?.CreateP2pOrder) {
          Logic.Common.hideLoader();
          return response.data.CreateP2pOrder;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.hideLoader();
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw error;
      });
  };

  public UploadFile = async (file: File) => {
    Logic.Common.showLoader({ loading: true, show: true });
    return $api.wallet
      .UploadFile(file)
      .then((response) => {
        if (response.data?.UploadFile) {
          Logic.Common.hideLoader();
          return response.data.UploadFile;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.hideLoader();
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw error;
      });
  };
}
