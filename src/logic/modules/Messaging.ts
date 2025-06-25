import { MutationCreateMessageArgs } from "../../gql/graphql";
import { $api } from "../../services";
import { CombinedError } from "urql";
import Common from "./Common";
import { Logic } from "..";

export default class Messaging extends Common {
  // Base Variables

  // Mutation Variables
  public CreateMessageForm: MutationCreateMessageArgs | undefined;

  constructor() {
    super();
  }

  // Queries

  // Mutations
  public CreateMessage = () => {
    if (this.CreateMessageForm) {
      return $api.messaging
        .CreateMessage(this.CreateMessageForm)
        .then((response) => {
          if (response.data?.CreateMessage) {
            Logic.Common.hideLoader();
            return response.data.CreateMessage;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.hideLoader();
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };
}
