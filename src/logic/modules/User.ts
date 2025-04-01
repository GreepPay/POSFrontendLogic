import { MutationUpdateProfileArgs } from "../../gql/graphql";
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
        });
    }
  };
}
