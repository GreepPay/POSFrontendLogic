import {
  MutationCreateProductArgs,
  MutationUpdateProductArgs,
  Order,
  OrderPaginator,
  Product,
  ProductPaginator,
  TicketPaginator,
} from "../../gql/graphql"
import { $api } from "../../services"
import Common from "./Common"
import { Logic } from ".."
import { CombinedError } from "urql"

export default class Commerce extends Common {
  // Base Variables
  public ManyShopProducts: ProductPaginator | undefined
  public SingleProduct: Product | undefined
  public ManyEventProducts: ProductPaginator | undefined
  public ManyEventTickets: TicketPaginator | undefined
  public ManyOrders: OrderPaginator | undefined
  public SingleOrder: Order | undefined

  // Mutations
  public CreateProductForm: MutationCreateProductArgs | undefined
  public UpdateProductForm: MutationUpdateProductArgs | undefined

  constructor() {
    super()

    this.defineReactiveProperty("ManyShopProducts", undefined)
    this.defineReactiveProperty("SingleProduct", undefined)
    this.defineReactiveProperty("ManyEventTickets", undefined)
    this.defineReactiveProperty("ManyEventProducts", undefined)
    this.defineReactiveProperty("ManyOrders", undefined)
    this.defineReactiveProperty("SingleOrder", undefined)
  }

  // Queries
  public GetShopProducts = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    searchQuery = "",
    isSearch = false
  ) => {
    let whereQuery = ""

    if (searchQuery) {
      whereQuery = `{
          column: NAME
          operator: LIKE
          value: "%${searchQuery}%"
          AND: {
            column: TYPE
            operator: EQ
            value: "physical"
            OR: {
              column: TYPE
              operator: EQ
              value: "digital"
            }
          }
        }`
    } else {
      whereQuery = `{
          column: TYPE
          operator: EQ
          value: "physical"
          OR: {
            column: TYPE
            operator: EQ
            value: "digital"
          }
        }`
    }

    return $api.commerce
      .GetProducts(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyShopProducts = response.data?.GetProducts
        }
        return response.data?.GetProducts
      })
  }

  public GetEventProducts = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    searchQuery = "",
    isSearch = false
  ) => {
    let whereQuery = ""

    if (searchQuery) {
      whereQuery = `{
          column: NAME
          operator: LIKE
          value: "%${searchQuery}%"
          AND: {
            column: TYPE
            operator: EQ
            value: "event"
          }
        }`
    } else {
      whereQuery = `{
          column: TYPE
          operator: EQ
          value: "event"
        }`
    }

    return $api.commerce
      .GetProducts(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyEventProducts = response.data?.GetProducts
        }
        return response.data?.GetProducts
      })
  }

  public GetEventTickets = async (
    productId: number,
    page: number,
    first: number
    // orderType = "CREATED_AT",
    // order = "DESC" as "DESC" | "ASC",
    // searchQuery = "",
    // isSearch = false
  ) => {
    let whereQuery = ""

    // if (searchQuery) {
    //   whereQuery = `{
    //       column: NAME
    //       operator: LIKE
    //       value: "%${searchQuery}%"
    //       AND: {
    //         column: TYPE
    //         operator: EQ
    //         value: "event"
    //       }
    //     }`
    // } else {
    //   whereQuery = `{
    //       column: TYPE
    //       operator: EQ
    //       value: "event"
    //     }`
    // }

    return $api.commerce
      .GetEventTickets(productId, page, first)
      .then((response) => {
        this.ManyEventTickets = response.data?.GetEventTickets
      })
  }

  public GetProduct = async (uuid: string) => {
    return $api.commerce.GetProduct(uuid).then((response) => {
      this.SingleProduct = response.data?.GetProduct
      return response.data?.GetProduct
    })
  }

  public GetOrders = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false
  ) => {
    return $api.commerce
      .GetOrders(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyOrders = response.data?.GetOrders
        }
        return response.data?.GetOrders
      })
  }

  public GetOrder = async (uuid: string) => {
    return $api.commerce.GetOrder(uuid).then((response) => {
      this.SingleOrder = response.data?.GetOrder
      return response.data?.GetOrder
    })
  }

  // Mutations
  public CreateProduct = () => {
    if (this.CreateProductForm) {
      return $api.commerce
        .CreateProduct(this.CreateProductForm)
        .then((response) => {
          if (response.data?.CreateProduct) {
            Logic.Common.hideLoader()
            return response.data.CreateProduct
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.hideLoader()
          Logic.Common.showError(error, "Oops!", "error-alert")
          throw error
        })
    }
  }

  public UpdateProduct = () => {
    if (this.UpdateProductForm) {
      return $api.commerce
        .UpdateProduct(this.UpdateProductForm)
        .then((response) => {
          if (response.data?.UpdateProduct) {
            Logic.Common.hideLoader()
            return response.data.UpdateProduct
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.hideLoader()
          Logic.Common.showError(error, "Oops!", "error-alert")
          throw error
        })
    }
  }

  public DeleteProduct = async (product_id: number) => {
    return $api.commerce
      .DeleteProduct(product_id)
      .then((response) => {
        if (response.data?.DeleteProduct) {
          Logic.Common.hideLoader()
          return response.data.DeleteProduct
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.hideLoader()
        Logic.Common.showError(error, "Oops!", "error-alert")
        throw error
      })
  }
}
