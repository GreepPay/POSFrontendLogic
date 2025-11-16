import { BaseApiService } from "./common/BaseService"
import { OperationResult } from "urql"
import {
  Category,
  PaginatorInfo,
  Product,
  ProductPaginator,
} from "../gql/graphql"

export default class ProductApi extends BaseApiService {

  
  
public GetCategories = (
    limit?: number
  ) => {
    const requestData = `
    query GetCategories($limit: Int) {
      GetCategories(limit: $limit) {
        slug
        name
        id
        uuid
        updatedAt
      }
    }
  `
  
    const response: Promise<
      OperationResult<{
        GetCategories: Category[]
      }>
    > = this.query(requestData, { limit })
  
    return response
  }


}
