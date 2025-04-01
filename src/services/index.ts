import AuthApi from "./AuthApi";
import UserApi from "./UserApi";
import NotificationApi from "./NotificationApi";
import WalletApi from "./WalletApi";

export const $api = {
  auth: new AuthApi(),
  user: new UserApi(),
  notification: new NotificationApi(),
  wallet: new WalletApi(),
};
