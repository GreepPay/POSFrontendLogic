import {
  MutationCreateBusinessProfileArgs,
  MutationUpdateBusinessProfileArgs,
  MutationUpdateProfileArgs,
  MutationCreateStoreLocationArgs,
} from "../../gql/graphql";
import { $api } from "../../services";
import { CombinedError } from "urql";
import Common from "./Common";
import { Logic } from "..";

export default class User extends Common {
  constructor() {
    super();
  }

  // Base Variables
  public StoreLocations: any = null;

  // Mutation Variables
  public UpdateProfileForm: MutationUpdateProfileArgs | undefined;
  public CreateBusinessProfileForm:
    | MutationCreateBusinessProfileArgs
    | undefined;
  public UpdateBusinessProfileForm:
    | MutationUpdateBusinessProfileArgs
    | undefined;
  public CreateStoreLocationForm: MutationCreateStoreLocationArgs | undefined;

  // Queries

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
}
