import Auth from "./Auth";
import Common from "./Common";
import Form from "./Form";
import Wallet from "./Wallet";
import User from "./User";
import Notification from "./Notification";
import Commerce from "./Commerce";
import Messaging from "./Messaging";
import Beneficiary from "./Beneficiary";
import Product from "./Product"

export const Logic = {
  Auth: new Auth(),
  Common: new Common(),
  Form: new Form(),
  Notification: new Notification(),
  User: new User(),
  Product: new Product(),
  Wallet: new Wallet(),
  Commerce: new Commerce(),
  Messaging: new Messaging(),
  Beneficiary: new Beneficiary(),
};
