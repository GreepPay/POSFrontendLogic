import Auth from "./Auth";
import Common from "./Common";
import Form from "./Form";
import Wallet from "./Wallet";
import User from "./User";
import Notification from "./Notification";

export const Logic = {
  Auth: new Auth(),
  Common: new Common(),
  Form: new Form(),
  Notification: new Notification(),
  User: new User(),
  Wallet: new Wallet(),
};
