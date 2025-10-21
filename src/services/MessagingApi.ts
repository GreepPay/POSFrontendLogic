import {
  Conversation,
  Message,
  MutationCreateMessageArgs,
  MutationInitiateConversationArgs,
  MutationUpdateProductArgs,
  Product,
} from "../gql/graphql";
import { OperationResult } from "urql";
import { BaseApiService } from "./common/BaseService";

export default class MessagingApi extends BaseApiService {
  // Query
  public GetSingleConversation = (uuid: string) => {
    const requestData = `
      query GetConversation($uuid: String!) {
        GetConversation(uuid: $uuid) {
          id
          uuid
          name
          entity_type
          metadata
          stage
          participants {
            id
            user_id
            state
            user {
              first_name
              last_name
              uuid
            }
          }
          exchangeAd {
            uuid
            from_currency
            to_currency
            ad_type
            business {
                uuid
                id
                business_name
                auth_user_id
                storeLocations {
                name
                address
                city
                country
              }
            }
            rate
            min_amount
            max_amount
            payout_address
            address_details
            payout_banks
            business_id
            status
            created_at
            updated_at
           }
          messages {
            id
            content
            status
            metadata
            createdAt
            updatedAt
            sender {
              first_name
              last_name
              uuid
            }
            replied_message {
              id
              content
              metadata
              status
              participant {
                id
                user_id
                user {
                  first_name
                  last_name
                  uuid
                }
              }
            }
          }
          state
          created_at
          updated_at
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetConversation: Conversation;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

  // ✅ NEW: Get conversations by entity UUID
  public GetConversationsByEntity = (entityUuid: string) => {
    const requestData = `
      query GetConversationsByEntity($entity_uuid: String!) {
        GetConversationsByEntity(entity_uuid: $entity_uuid) {
          id
          uuid
          name
          entity_type
          metadata
          stage
          participants {
            id
            user_id
            state
            user {
              first_name
              last_name
              uuid
            }
          }
          exchangeAd {
            uuid
            from_currency
            to_currency
            business {
                uuid
                id
                business_name
            }
            rate
            min_amount
            max_amount
            payout_address
            address_details
            payout_banks
            business_id
            status
            created_at
            updated_at
           }
          messages {
            id
            content
            status
            metadata
            createdAt
            updatedAt
            sender {
              first_name
              last_name
              uuid
            }
            replied_message {
              id
              content
              metadata
              status
              participant {
                id
                user_id
                user {
                  first_name
                  last_name
                  uuid
                }
              }
            }
          }
          state
          created_at
          updated_at
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetConversationsByEntity: Conversation[];
      }>
    > = this.query(requestData, {
      entity_uuid: entityUuid,
    });

    return response;
  };

  // Mutations
  public CreateMessage = (data: MutationCreateMessageArgs) => {
    const requestData = `
        mutation CreateMessage($input: MessageInput!) {
          CreateMessage(input: $input) {
            id
            content
            uuid
            status
            conversation_id
            state
            createdAt
            updatedAt
            metadata
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

  public InitiateConversation = (data: MutationInitiateConversationArgs) => {
    const requestData = `
        mutation InitiateConversation($input: ConversationInput!) {
          InitiateConversation(input: $input) {
            id
            uuid
            name
            entity_type
            participants {
               id
               user_id
               state
               user {
                 first_name
                 last_name
                 uuid
               }
            }
            messages {
              id
              content
              status
              metadata
              sender {
                first_name
                last_name
                uuid
              }
              replied_message {
                id
                content
                metadata
                status
                participant {
                  id
                  user_id
                  user {
                    first_name
                    last_name
                    uuid
                  }
                }
              }
            }
            state
            created_at
            updated_at
          }
        }
      `;
    const response: Promise<
      OperationResult<{
        InitiateConversation: Conversation;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public AddParticipant = (data: {
    conversation_id: number;
    user_id: number;
    added_by: number;
  }) => {
    const requestData = `
        mutation AddParticipant($input: AddParticipantInput!) {
          AddParticipant(input: $input) {
            id
            uuid
            name
            entity_type
            participants {
               id
               user_id
               state
               user {
                 first_name
                 last_name
                 uuid
               }
            }
            messages {
              id
              content
              status
              metadata
              sender {
                first_name
                last_name
                uuid
              }
              replied_message {
                id
                content
                metadata
                status
                participant {
                  id
                  user_id
                  user {
                    first_name
                    last_name
                    uuid
                  }
                }
              }
            }
            state
            created_at
            updated_at
          }
        }
      `;
    const response: Promise<
      OperationResult<{
        AddParticipant: Conversation;
      }>
    > = this.mutation(requestData, {
      input: data,
    });

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
