import { $api } from "../../services";
import { CombinedError } from "urql";
import Common from "./Common";
import { Logic } from "..";
import {
  MutationResetPasswordArgs,
  MutationSignInArgs,
  MutationSignUpArgs,
  MutationUpdatePasswordArgs,
  MutationVerifyUserOtpArgs,
  User,
} from "src/gql/graphql";

export default class Auth extends Common {
  // Base Variables
  public AccessToken: string | null = null;
  public AuthUser: User | undefined = undefined;
  public RequestUuid: string | null = null;

  // Mutation Variables
  public SignUpForm: MutationSignUpArgs | undefined;
  public SignInForm: MutationSignInArgs | undefined;
  public ResetPasswordForm: MutationResetPasswordArgs | undefined;
  public UpdatePasswordForm: MutationUpdatePasswordArgs | undefined;
  public VerifyUserOTPForm: MutationVerifyUserOtpArgs | undefined;

  constructor() {
    super();

    this.defineReactiveProperty("AccessToken", null);
    this.defineReactiveProperty("AuthUser", undefined);
    this.defineReactiveProperty("RequestUuid", null);

    this.AccessToken = localStorage.getItem("access_token");
    this.AuthUser = localStorage.getItem("auth_user")
      ? JSON.parse(localStorage.getItem("auth_user") || "{}")
      : undefined;
  }

  // Private methods
  private SetUpAuth = (AuthResponse: any | undefined) => {
    if (AuthResponse) {
      this.AccessToken = AuthResponse.token;
      this.AuthUser = this.updatedData(this.AuthUser, AuthResponse.user);
      // save to localstorage
      localStorage.setItem(
        "access_token",
        this.AccessToken ? this.AccessToken : "",
      );
      localStorage.setItem("auth_user", JSON.stringify(this.AuthUser));
    }
  };

  // Queries
  public GetAuthUser = async (): Promise<User | undefined> => {
    return $api.auth
      .GetAuthUser()
      .then((response) => {
        this.AuthUser = response.data?.GetAuthUser;
        localStorage.setItem("auth_user", JSON.stringify(this.AuthUser));
        return this.AuthUser;
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert");
        Logic.Auth.SignOut();
        throw error;
      });
  };

  public GetDefaultBusiness = () => {
    return this.AuthUser?.businesses?.[0];
  };

  // Mutations
  public SignUp = (
    formIsValid: boolean,
    progressCallback: (progress: number) => void,
  ) => {
    if (formIsValid && this.SignUpForm) {
      return $api.auth
        .SignUp(this.SignUpForm, progressCallback)
        .then((response) => {
          this.AuthUser = response.data?.SignUp;
          localStorage.setItem("auth_user", JSON.stringify(this.AuthUser));

          // Save auth email and pass
          localStorage.setItem("auth_email", this.SignUpForm?.email || "");
          localStorage.setItem("auth_pass", this.SignUpForm?.password || "");

          return this.AuthUser;
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw new Error(error.message);
        });
    }
  };

  public SignIn = (formIsValid: boolean) => {
    if (formIsValid && this.SignInForm) {
      return $api.auth
        .SignIn(this.SignInForm)
        .then((response) => {
          if (response.data?.SignIn) {
            this.SetUpAuth(response.data.SignIn);

            return response.data;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw new Error(error.message);
        });
    }
  };

  public ResendEmailOTP = async (email: string) => {
    return $api.auth
      .ResendEmailOTP(email)
      .then((response) => {
        if (response.data?.ResendEmailOTP) {
          return response.data.ResendEmailOTP;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw new Error(error.message);
      });
  };

  public ResetPassword = async () => {
    if (this.ResetPasswordForm) {
      return $api.auth
        .ResetPassword(this.ResetPasswordForm)
        .then((response) => {
          if (response.data?.ResetPassword) {
            return response.data.ResetPassword;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw new Error(error.message);
        });
    }
  };

  public SendResetPasswordOTP = async (email: string) => {
    return $api.auth
      .SendResetPasswordOTP(email)
      .then((response) => {
        if (response.data?.SendResetPasswordOTP) {
          return response.data.SendResetPasswordOTP;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw new Error(error.message);
      });
  };

  public UpdatePassword = () => {
    if (this.UpdatePasswordForm) {
      return $api.auth
        .UpdatePassword(this.UpdatePasswordForm)
        .then((response) => {
          if (response.data?.UpdatePassword) {
            return response.data.UpdatePassword;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw new Error(error.message);
        });
    }
  };

  public VerifyUserOTP = () => {
    if (this.VerifyUserOTPForm) {
      return $api.auth
        .VerifyUserOTP(this.VerifyUserOTPForm)
        .then((response) => {
          if (response.data?.VerifyUserOTP) {
            return response.data.VerifyUserOTP;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw new Error(error.message);
        });
    }
  };

  public SignOut = () => {
    Logic.Common.showLoader({ loading: true, show: true });
    $api.auth
      .SignOut()
      .then(() => {
        localStorage.clear();
        Logic.Common.hideLoader();
        Logic.Common.GoToRoute("/auth/login", true);
      })
      .catch((error) => {
        localStorage.clear();
        Logic.Common.hideLoader();
        Logic.Common.GoToRoute("/auth/login", true);
        Logic.Common.showError(error, "Oops!", "error-alert");
      });
  };
}
