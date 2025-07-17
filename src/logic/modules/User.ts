import {
  MutationCreateBusinessProfileArgs,
  MutationUpdateBusinessProfileArgs,
  MutationUpdateProfileArgs,
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

  // Mutation Variables
  public UpdateProfileForm: MutationUpdateProfileArgs | undefined;
  public CreateBusinessProfileForm:
    | MutationCreateBusinessProfileArgs
    | undefined;
  public UpdateBusinessProfileForm:
    | MutationUpdateBusinessProfileArgs
    | undefined;

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
}
