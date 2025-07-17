import {
  Message,
  MutationCreateMessageArgs,
  MutationUpdateProductArgs,
  Product,
} from "../gql/graphql";
import { OperationResult } from "urql";
import { BaseApiService } from "./common/BaseService";

export default class MessagingApi extends BaseApiService {
  // Query

  // Mutations
  public CreateMessage = (data: MutationCreateMessageArgs) => {
    const requestData = `
        mutation CreateMessage($input: MessageInput!) {
          CreateMessage(input: $input) {
            id
            content
            uuid
            status
            sender_id
            conversation_id
            state
            created_at
            updated_at
          }
        }
      `;

    const response: Promise<
      OperationResult<{
        CreateMessage: Message;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public SoftDeleteMessage = (message_id: number) => {
    const requestData = `
        mutation SoftDeleteMessage($message_id: Int!) {
          SoftDeleteMessage(message_id: $message_id)
        }
      `;

    const response: Promise<
      OperationResult<{
        SoftDeleteMessage: Boolean;
      }>
    > = this.mutation(requestData, { message_id });

    return response;
  };
}
