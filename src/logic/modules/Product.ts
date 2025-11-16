import {
  QueryGetCategoriesOrderByOrderByClause,
  Product as GqlProduct,
  ProductPaginator,
  Category,
} from "../../gql/graphql"

import { $api } from "../../services"
import { CombinedError } from "urql"
import Common from "./Common"
import { Logic } from ".."


export default class Product extends Common {
  
      public Categories: Category[] = [] // Change to array
    
    constructor() {
      super()
          this.defineReactiveProperty("Categories", undefined)
    
    }
    
    public GetCategories = async (
      limit?: number
    ): Promise<Category[] | undefined> => {
      return $api.product
        .GetCategories(limit)
        .then((response) => {
          this.Categories = response.data?.GetCategories || [] 
          return this.Categories
        })
        .catch((error: CombinedError) => {
          Logic.Common.showError(
            error,
            "Failed to fetch categories",
            "error-alert"
          )
          return undefined
        })
    }
}