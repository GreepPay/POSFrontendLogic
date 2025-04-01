import { MutationUpdateProfileArgs } from "src/gql/graphql";
import { OperationResult } from "urql";
import { BaseApiService } from "./common/BaseService";

export default class UserApi extends BaseApiService {
  // Mutation
  public UpdateProfile = (data: MutationUpdateProfileArgs) => {
    const requestData = `
      mutation UpdateProfile(
        $first_name: String
        $profile_photo: Upload
        $last_name: String
        $default_currency: String
        $country: String
        $state: String
        $documents: [Upload!]
        $business_name: String
      ) {
        UpdateProfile(
          first_name: $first_name
          profile_photo: $profile_photo
          last_name: $last_name
          default_currency: $default_currency
          country: $country
          state: $state
          documents: $documents
          business_name: $business_name
        )
      }
		`;

    const response: Promise<
      OperationResult<{
        UpdateProfile: Boolean;
      }>
    > = this.mutation(requestData, data);

    return response;
  };
}
