import AuthApi from "./AuthApi";
import UserApi from "./UserApi";
import NotificationApi from "./NotificationApi";
import WalletApi from "./WalletApi";
import CommerceApi from "./CommerceApi";
import MessagingApi from "./MessagingApi";

export const $api = {
  auth: new AuthApi(),
  user: new UserApi(),
  notification: new NotificationApi(),
  wallet: new WalletApi(),
  commerce: new CommerceApi(),
  messaging: new MessagingApi(),
};
