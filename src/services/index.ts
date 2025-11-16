import AuthApi from "./AuthApi";
import UserApi from "./UserApi";
import NotificationApi from "./NotificationApi";
import WalletApi from "./WalletApi";
import CommerceApi from "./CommerceApi";
import MessagingApi from "./MessagingApi";
import BeneficiaryApi from "./BeneficiaryApi";

export const $api = {
  auth: new AuthApi(),
  user: new UserApi(),
  commerce: new CommerceApi(),
  notification: new NotificationApi(),
  wallet: new WalletApi(),
  messaging: new MessagingApi(),
  beneficiary: new BeneficiaryApi(),
};
