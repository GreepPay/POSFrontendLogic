import {
  MutationCreateBusinessProfileArgs,
  MutationUpdateBusinessProfileArgs,
  MutationUpdateProfileArgs,
  MutationCreateStoreLocationArgs,
  MutationAddDeliveryAddressArgs,
  MutationUpdateDeliveryAddressArgs,
  MutationCreateBusinessScheduleArgs,
  MutationUpdateBusinessScheduleArgs,
  QueryGetBusinessSchedulesArgs,
  DeliveryAddressPaginator,
  User as UserModel,
  Business as BusinessModel,
  BusinessSchedulePaginator,
} from "../../gql/graphql";
import { $api } from "../../services";
import { CombinedError } from "urql";
import Common from "./Common";
import { Logic } from "..";

export default class User extends Common {
  constructor() {
    super();

    this.defineReactiveProperty("StoreLocations", null);
    this.defineReactiveProperty("DeliveryAddresses", null);
    this.defineReactiveProperty("SelectedDeliveryAddress", null);
    this.defineReactiveProperty("ManyP2PDeliveryAddresses", undefined);
    this.defineReactiveProperty("SearchedUsers", undefined);
    this.defineReactiveProperty("SingleUser", undefined);
    this.defineReactiveProperty("SearchedBusinesses", undefined);
    this.defineReactiveProperty("BusinessSchedules", undefined);
  }

  // Base Variables
  public StoreLocations: any = null;
  public DeliveryAddresses: any = null;
  public SelectedDeliveryAddress: any = null;
  public ManyP2PDeliveryAddresses: DeliveryAddressPaginator | undefined;
  public SearchedUsers: UserModel[] | undefined;
  public SingleUser: UserModel | undefined;
  public SearchedBusinesses: BusinessModel[] | undefined;
  public BusinessSchedules: BusinessSchedulePaginator | undefined;

  // Mutation Variables
  public UpdateProfileForm: MutationUpdateProfileArgs | undefined;
  public CreateBusinessProfileForm:
    | MutationCreateBusinessProfileArgs
    | undefined;
  public UpdateBusinessProfileForm:
    | MutationUpdateBusinessProfileArgs
    | undefined;
  public CreateStoreLocationForm: MutationCreateStoreLocationArgs | undefined;
  public AddDeliveryAddressForm: MutationAddDeliveryAddressArgs | undefined;
  public UpdateDeliveryAddressForm:
    | MutationUpdateDeliveryAddressArgs
    | undefined;
  public UpdateBusinessScheduleForm:
    | MutationUpdateBusinessScheduleArgs
    | undefined;
  public CreateBusinessScheduleForm:
    | MutationCreateBusinessScheduleArgs
    | undefined;

  // Queries
  public SearchForUsers = async (query: string) => {
    return $api.user
      .SearchUsers({
        query,
      })
      .then((response) => {
        this.SearchedUsers = response.data?.SearchUsers;
        return response.data?.SearchUsers;
      });
  };

  public SearchForBusinesses = async (query: string) => {
    return $api.user
      .SearchBusinesses({
        query,
      })
      .then((response) => {
        this.SearchedBusinesses = response.data?.SearchBusinesses;
        return response.data?.SearchBusinesses;
      });
  };

  public GetSingleUser = async (
    uuid: string
  ): Promise<UserModel | undefined> => {
    return $api.user.GetSingleUser(uuid).then((response) => {
      this.SingleUser = response.data?.GetSingleUser;
      return response.data?.GetSingleUser;
    });
  };

  // Mutations
  public UpdateProfile = async () => {
    if (this.UpdateProfileForm) {
      return $api.user
        .UpdateProfile(this.UpdateProfileForm)
        .then((response) => {
          if (response.data?.UpdateProfile) {
            return response.data.UpdateProfile;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public CreateBusinessProfile = async () => {
    if (this.CreateBusinessProfileForm) {
      return $api.user
        .CreateBusinessProfile(this.CreateBusinessProfileForm)
        .then((response) => {
          if (response.data?.CreateBusinessProfile) {
            return response.data.CreateBusinessProfile;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public UpdateBusinessProfile = async () => {
    if (this.UpdateBusinessProfileForm) {
      return $api.user
        .UpdateBusinessProfile(this.UpdateBusinessProfileForm)
        .then((response) => {
          if (response.data?.UpdateBusinessProfile) {
            return response.data.UpdateBusinessProfile;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public CreateStoreLocation = async () => {
    if (this.CreateStoreLocationForm) {
      return $api.user
        .CreateStoreLocation(this.CreateStoreLocationForm)
        .then((response) => {
          if (response.data?.CreateStoreLocation) {
            return response.data.CreateStoreLocation;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public AddDeliveryAddress = async () => {
    if (this.AddDeliveryAddressForm) {
      return $api.user
        .AddDeliveryAddress(this.AddDeliveryAddressForm)
        .then((response) => {
          if (response.data?.AddDeliveryAddress) {
            return response.data.AddDeliveryAddress;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public UpdateDeliveryAddress = async () => {
    if (this.UpdateDeliveryAddressForm) {
      return $api.user
        .UpdateDeliveryAddress(this.UpdateDeliveryAddressForm)
        .then((response) => {
          if (response.data?.UpdateDeliveryAddress) {
            return response.data.UpdateDeliveryAddress;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public GetStoreLocations = async (first: number = 20, page: number = 1) => {
    return $api.user
      .GetStoreLocations(first, page)
      .then((response) => {
        if (response.data?.GetStoreLocations) {
          this.StoreLocations = response.data.GetStoreLocations;
          return response.data.GetStoreLocations;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw error;
      });
  };

  public GetDeliveryAddresses = async (
    first: number = 20,
    page: number = 1
  ) => {
    return $api.user
      .GetDeliveryAddresses(first, page)
      .then((response) => {
        if (response.data?.GetDeliveryAddresses) {
          this.DeliveryAddresses = response.data.GetDeliveryAddresses;
          return response.data.GetDeliveryAddresses;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw error;
      });
  };

  public GetDeliveryAddress = async (uuid: string) => {
    return $api.user
      .GetDeliveryAddress(uuid)
      .then((response) => {
        if (response.data?.GetDeliveryAddress) {
          return response.data.GetDeliveryAddress;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw error;
      });
  };

  public GetP2PDeliveryAddresses = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = ""
  ) => {
    return $api.user
      .GetP2PDeliveryAddresses(page, count, orderType, order, whereQuery)
      .then((response) => {
        this.ManyP2PDeliveryAddresses = response.data?.GetP2PDeliveryAddresses;
        return response.data?.GetP2PDeliveryAddresses;
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

  public UpdateBusinessSchedule = async (
    data: MutationUpdateBusinessScheduleArgs
  ) => {
    return $api.user
      .UpdateBusinessSchedule(data)
      .then((response) => {
        if (response.data?.UpdateBusinessSchedule) {
          return response.data.UpdateBusinessSchedule;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(
          error,
          "Failed to update schedule",
          "error-alert"
        );
        throw error;
      });
  };

  public GetBusinessSchedules = async (
    first: number = 50,
    page: number = 1
  ) => {
    return $api.user
      .GetBusinessSchedules({ first, page })
      .then((response) => {
        if (response.data?.GetBusinessSchedules) {
          this.BusinessSchedules = response.data.GetBusinessSchedules;
          return response.data.GetBusinessSchedules;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(
          error,
          "Failed to load schedules",
          "error-alert"
        );
        throw error;
      });
  };

  public CreateBusinessSchedule = async (
    data: MutationCreateBusinessScheduleArgs
  ) => {
    return $api.user
      .CreateBusinessSchedule(data)
      .then((response) => {
        if (response.data?.CreateBusinessSchedule) {
          return response.data.CreateBusinessSchedule;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(
          error,
          "Failed to create schedule",
          "error-alert"
        );
        throw error;
      });
  };
}
