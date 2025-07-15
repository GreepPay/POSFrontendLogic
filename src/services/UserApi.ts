import {
  MutationCreateBusinessProfileArgs,
  MutationVerifyUserIdentityArgs,
  MutationUpdateBusinessProfileArgs,
  MutationUpdateProfileArgs,
} from "src/gql/graphql";
import { OperationResult } from "urql";
import { BaseApiService } from "./common/BaseService";

export default class UserApi extends BaseApiService {
  // Mutation
  public UpdateProfile = (data: MutationUpdateProfileArgs) => {
    const requestData = `
      mutation UpdateProfile(
        $first_name: String
        $profile_photo: Upload
        $phone_number: String
        $last_name: String
        $default_currency: String
        $country: String
        $state: String
        $documents: [Upload!]
        $business_name: String
        $business_logo: Upload
        $business_category: String
        $business_description: String
        $auth_passcode: String
      ) {
        UpdateProfile(
          first_name: $first_name
          profile_photo: $profile_photo
          phone_number: $phone_number
          last_name: $last_name
          default_currency: $default_currency
          country: $country
          state: $state
          documents: $documents
          business_name: $business_name
          business_logo: $business_logo
          business_category: $business_category
          business_description: $business_description
          auth_passcode: $auth_passcode
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

  public CreateBusinessProfile = (data: MutationCreateBusinessProfileArgs) => {
    const requestData = `
      mutation CreateBusinessProfile(
        $business_name: String!
        $business_type: String!
        $business_logo: Upload
        $location: String!
        $category: String
        $banner: Upload
        $description: String
        $website: String
        $resident_permit: Upload
        $passport: Upload
        $registration_number: String
        $documents: [Upload!]
        $country: String
        $city: String
        $address: String
        $default_currency: String
    ) {
        CreateBusinessProfile(
            business_name: $business_name
            business_type: $business_type
            business_logo: $business_logo
            location: $location
            category: $category
            banner: $banner
            description: $description
            website: $website
            resident_permit: $resident_permit
            passport: $passport
            registration_number: $registration_number
            documents: $documents
            country: $country
            city: $city
            address: $address
            default_currency: $default_currency
        ) {
            id
        }
    }
    `;

    const response: Promise<
      OperationResult<{
        CreateBusinessProfile: { id: string };
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public UpdateBusinessProfile = (data: MutationUpdateBusinessProfileArgs) => {
    const requestData = `
      mutation UpdateBusinessProfile(
        $business_uuid: String!
        $business_name: String
        $business_type: String
        $business_logo: Upload
        $location: String
        $category: String
        $banner: Upload
        $description: String
        $website: String
        $resident_permit: Upload
        $passport: Upload
        $registration_number: String
        $documents: [Upload!]
        $country: String
        $city: String
        $address: String
        $default_currency: String
      ) {
        UpdateBusinessProfile(
          business_uuid: $business_uuid
          business_name: $business_name
          business_type: $business_type
          business_logo: $business_logo
          location: $location
          category: $category
          banner: $banner
          description: $description
          website: $website
          resident_permit: $resident_permit
          passport: $passport
          registration_number: $registration_number
          documents: $documents
          country: $country
          city: $city
          address: $address
          default_currency: $default_currency
        ) {
          id
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        UpdateBusinessProfile: { id: string };
      }>
    > = this.mutation(requestData, data);

    return response;
  };


  public VerifyUserIdentity = (data: MutationVerifyUserIdentityArgs) => {
  const  requestData = `
    mutation VerifyUserIdentity(
      $user_uuid: String
      $id_type: String!
      $id_number: String!
      $id_country: String!
    ) {
      VerifyUserIdentity(
        user_uuid: $user_uuid
        id_type: $id_type
        id_number: $id_number
        id_country: $id_country
      )
    }
  `;

  const response: Promise<OperationResult<{ VerifyUserIdentity: boolean }>> =
    this.mutation( requestData, data);

  return response;
};

}
