import { BaseApiService } from "./common/BaseService";
import { OperationResult } from "urql";
import {
  Beneficiary,
  BeneficiaryPaginator,
  QueryGetBeneficiariesArgs,
} from "../gql/graphql";

export default class BeneficiaryApi extends BaseApiService {
  // #region QUERIES
  public GetBeneficiaries = (data: QueryGetBeneficiariesArgs) => {
    const requestData = `
      query GetBeneficiaries($first: Int!, $page: Int) {
        GetBeneficiaries(first: $first, page: $page) {
          data {
            id
            beneficiary {
              uuid
              first_name
              last_name
              username
              email
              profile {
                default_currency
              }
              wallet {
               uuid
              }
            }
            metadata
            state
            created_at
            updated_at
            owner {
              uuid
              first_name
              last_name
              username
              status
              profile {
                default_currency
              }
              created_at
              updated_at
            }
          }
          paginatorInfo {
            count
            currentPage
            firstItem
            hasMorePages
            lastItem
            lastPage
            perPage
            total
          }
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetBeneficiaries: BeneficiaryPaginator;
      }>
    > = this.query(requestData, data);

    return response;
  };
  // #endregion QUERIES

  // #endregion MUTATIONS
}
