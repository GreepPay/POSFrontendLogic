import { BaseApiService } from "./common/BaseService";
import { OperationResult } from "urql";
import {
  MutationSendResetPasswordOtpArgs,
  MutationResendEmailOtpArgs,
  AuthResponse,
  MutationResetPasswordArgs,
  MutationSignInArgs,
  MutationSignUpArgs,
  MutationUpdatePasswordArgs,
  MutationVerifyUserOtpArgs,
  User,
} from "src/gql/graphql";

export default class AuthApi extends BaseApiService {
  // Queries
  public GetAuthUser = () => {
    const requestData = `
      query GetAuthUser {
        GetAuthUser {
          id
          uuid
          first_name
          last_name
          phone
          email_verified_at
          email
          phone_verified_at
          username
          transaction_pin
          businesses {
            uuid
            id
            business_name
            logo
            category
            banner
            description
            created_at
            country
            city
            business_type
            address
            default_currency
            wallet {
              total_balance
              point_balance
              currency
              state
            }
          }
          profile {
            profile_picture
            verification_status
            default_currency
            business {
              banner
              business_name
              city
              country
              description
              logo
              category
            }
          }
          wallet {
            total_balance
            point_balance
            currency
            state
          }
        }
      }
		`;

    const response: Promise<
      OperationResult<{
        GetAuthUser: User;
      }>
    > = this.query(requestData, {});

    return response;
  };

  //  Mutations
  public SignUp = (
    data: MutationSignUpArgs,
    progressCallback: (progress: number) => void,
  ) => {
    const requestData = `
      mutation SignUp(
        $first_name: String
        $last_name: String
        $phone_number: String
        $email: String!
        $password: String!
        $state: String
        $country: String
        $default_currency: String!
        $business_name: String
        $business_logo: Upload
        $business_category: String
        $business_description: String
        $documents: [Upload!]
      ) {
        SignUp(
          first_name: $first_name
          last_name: $last_name
          phone_number: $phone_number
          email: $email
          password: $password
          state: $state
          country: $country
          default_currency: $default_currency
          business_name: $business_name
          business_logo: $business_logo
          business_category: $business_category
          business_description: $business_description
          documents: $documents
        ) {
          uuid
          first_name
          last_name
          email
          email_verified_at
          status
          username
          profile {
            default_currency
            verification_status
            business {
              city
              country
              business_name
            }
          }
        }
      }
		`;

    const response: Promise<
      OperationResult<{
        SignUp: User;
      }>
    > = this.mutationWithProgress(requestData, data, progressCallback);

    return response;
  };
  
  public SendResetPasswordOTP = (data: MutationSendResetPasswordOtpArgs) => {
    const requestData = `
      mutation SendResetPasswordOTP($email: String!) {
        SendResetPasswordOTP(email: $email)
      }
    `
    console.log(
      "helloe"
    )

    const response: Promise<
      OperationResult<{ SendResetPasswordOTP: string }>
    > = this.mutation(requestData, data)
    return response
  }

  public SignIn = (data: MutationSignInArgs) => {
    const requestData = `
      mutation SignIn($email: String!, $password: String!) {
        SignIn(email: $email, password: $password) {
          token
          user {
            uuid
            first_name
            last_name
            email_verified_at
            phone_verified_at
          }
        }
      }

		`;

    const response: Promise<
      OperationResult<{
        SignIn: AuthResponse;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  /**
   * @description Resends the email OTP to verify a user's email
   * @params email - The user's email address
   * @response Boolean - Returns true if the OTP was successfully resent, false otherwise
   */
  public ResendEmailOTP = (data: MutationResendEmailOtpArgs) => {
    const requestData = `
    mutation ResendEmailOTP($email: String!) {
      ResendEmailOTP(email: $email)
    }
  `;

    const response: Promise<OperationResult<{ ResendEmailOTP: boolean }>> =
      this.mutation(requestData, data);

    return response;
  };

  public ResetPassword = (data: MutationResetPasswordArgs) => {
    const requestData = `
      mutation ResetPassword(
        $userUuid: String!
        $otpCode: String!
        $newPassword: String!
      ) {
        ResetPassword(
          user_uuid: $userUuid
          otp_code: $otpCode
          new_password: $newPassword
        )
      }
		`;

    const response: Promise<
      OperationResult<{
        ResetPassword: Boolean;
      }>
    > = this.mutation(requestData, data);

    return response;
  };
  
  

  public UpdatePassword = (data: MutationUpdatePasswordArgs) => {
    const request_data = `
        mutation UpdatePassword($currentPassword: String!, $newPassword: String!) {
          UpdatePassword(current_password: $currentPassword, new_password: $newPassword)
        }
      `;

    const response: Promise<
      OperationResult<{
        UpdatePassword: Boolean;
      }>
    > = this.mutation(request_data, data);

    return response;
  };

  public VerifyUserOTP = (data: MutationVerifyUserOtpArgs) => {
    const requestData = `
      mutation VerifyUserOTP($user_uuid: String!, $otp: String!) {
        VerifyUserOTP(user_uuid: $user_uuid, otp: $otp)
      }
    `;

    const response: Promise<
      OperationResult<{
        VerifyUserOTP: Boolean;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public SignOut = () => {
    const requestData = `
    mutation SignOut {
       SignOut
    }
  `;

    const response: Promise<OperationResult<{ SignOut: boolean }>> =
      this.mutation(requestData, {});

    return response;
  };
}
