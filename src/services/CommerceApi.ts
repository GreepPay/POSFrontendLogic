import {
  MutationCreateProductArgs,
  MutationUpdateProductArgs,
  Order,
  OrderPaginator,
  Product,
  ProductPaginator,
  TicketPaginator,
} from "../gql/graphql"
import { OperationResult } from "urql"
import { BaseApiService } from "./common/BaseService"

export default class CommerceApi extends BaseApiService {
  // Query
  public GetProducts = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = ""
  ) => {
    // console.log("GetProducts called with:", {
    //   page,
    //   count,
    //   orderType,
    //   order,
    //   whereQuery,
    // })
    const requestData = `
      query GetProducts(
        $page: Int!,
        $count: Int!
      ){
        GetProducts(
          first: $count,
          page: $page,
          orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}
        ) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
          uuid
          id
          businessId
          business {
            id
          }
          sku
          name
          slug
          description
          price
          currency
          taxCode
          type
          status
          variants
          inventoryCount
          stockThreshold
          isBackorderAllowed
          downloadUrl
          downloadLimit
          license
          fileInfo
          dimensions
          weight
          billingInterval
          trialPeriodDays
          gracePeriod
          renewal
          features
          eventType
          eventStartDate
          eventEndDate
          venueName
          eventOnlineUrl
          eventLocation
          eventCapacity
          eventRegisteredCount
          eventWaitlistEnabled
          metaTitle
          metaDescription
          isVisible
          images
          createdAt
          updatedAt
          }
        }
      }
    `
    const response: Promise<
      OperationResult<{
        GetProducts: ProductPaginator
      }>
    > = this.query(requestData, {
      page,
      count,
    })

    return response
  }

  public GetEventTickets = (productId: number, first: number, page: number) => {
    const requestData = `
      query GetEventTickets(
        $productId: Int!
        $first: Int!
        $page: Int
      ) {
        GetEventTickets(
          productId: $productId
          first: $first
          page: $page  
        ) {
         paginatorInfo {
             total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
            id
            uuid 
            variantId
            saleId
            sale {
              id
              uuid
              transactionId
              customerId
              subtotalAmount
              taxAmount
              discountAmount
              totalAmount
              currency
              status
              items
              appliedDiscounts
              taxDetails
              paymentDetails
              refundDetails
              metadata
              createdAt
              updatedAt
            }
            user {
              id
              uuid
              first_name
              last_name
              username
              email
              phone
              email_verified_at
              phone_verified_at
              status
              profile { 
                user_type
                profile_picture
                verification_status 
                updated_at
                default_currency
                created_at
              } 
            }
            userId
            ticketType
            price
            qrCode
            status
            createdAt
            updatedAt
          } 
        }
      }
    `
    const response: Promise<
      OperationResult<{
        GetEventTickets: TicketPaginator
      }>
    > = this.query(requestData, {
      productId,
      first,
      page,
    })

    return response
  }

  public GetProduct = (uuid: string) => {
    const requestData = `
      query GetProduct($uuid: String!) {
        GetProduct(uuid: $uuid) {
        uuid
        id
        businessId
        business {
          id
        }
        sku
        name
        slug
        description
        price
        currency
        taxCode
        type
        status
        variants
        inventoryCount
        stockThreshold
        isBackorderAllowed
        downloadUrl
        downloadLimit
        license
        fileInfo
        dimensions
        weight
        billingInterval
        trialPeriodDays
        gracePeriod
        renewal
        features
        eventType
        eventStartDate
        eventEndDate
        venueName
        eventOnlineUrl
        eventLocation
        eventCapacity
        eventRegisteredCount
        eventWaitlistEnabled
        metaTitle
        metaDescription
        isVisible
        images
        createdAt
        updatedAt
          eventOveview {
          revenue
          tickets_sold
          tickets_left
          checkins
        }
        }
      }
    `
    const response: Promise<
      OperationResult<{
        GetProduct: Product
      }>
    > = this.query(requestData, {
      uuid,
    })

    return response
  }

  public GetOrders = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetOrders(
        $page: Int!,
        $count: Int!
      ){
        GetOrders(
          first: $count,
          page: $page,
          orderBy: {
            column: ${orderType ? orderType : "CREATED_AT"},
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}
        ) {
          paginatorInfo {
            total
            perPage
            lastPage
            lastItem
            hasMorePages
            firstItem
            currentPage
            count
          }
          data {
          id
          orderNumber
          customerId
          user {
            id
          }
          sale {
            id
          }
          items
          subtotalAmount
          taxAmount
          discountAmount
          totalAmount
          currency
          status
          shippingAddress
          billingAddress
          paymentMethod
          paymentStatus
          paymentDetails
          appliedDiscounts
          taxDetails
          refundDetails
          deliveries {
            id
          }
          statusHistory
          createdAt
          updatedAt
          }
        }
      }
    `
    const response: Promise<
      OperationResult<{
        GetOrders: OrderPaginator
      }>
    > = this.query(requestData, {
      page,
      count,
    })

    return response
  }

  public GetOrder = (uuid: string) => {
    const requestData = `
      query GetOrder($uuid: String!) {
        GetOrder(uuid: $uuid) {
        id
        orderNumber
        customerId
        user {
          id
        }
        sale {
          id
        }
        items
        subtotalAmount
        taxAmount
        discountAmount
        totalAmount
        currency
        status
        shippingAddress
        billingAddress
        paymentMethod
        paymentStatus
        paymentDetails
        appliedDiscounts
        taxDetails
        refundDetails
        deliveries {
          id
        }
        statusHistory
        createdAt
        updatedAt
        }
      }
    `
    const response: Promise<
      OperationResult<{
        GetOrder: Order
      }>
    > = this.query(requestData, {
      uuid,
    })

    return response
  }

  // Mutations
  public CreateProduct = (data: MutationCreateProductArgs) => {
    const requestData = `
        mutation CreateProduct($input: CreateProductInput!) {
          CreateProduct(input: $input) {
          uuid
          id
          businessId
          business {
            id
          }
          sku
          name
          slug
          description
          price
          currency
          taxCode
          type
          status
          variants
          inventoryCount
          stockThreshold
          isBackorderAllowed
          downloadUrl
          downloadLimit
          license
          fileInfo
          dimensions
          weight
          billingInterval
          trialPeriodDays
          gracePeriod
          renewal
          features
          eventType
          eventStartDate
          eventEndDate
          venueName
          eventOnlineUrl
          eventLocation
          eventCapacity
          eventRegisteredCount
          eventWaitlistEnabled
          metaTitle
          metaDescription
          isVisible
          images
          createdAt
          updatedAt
          }
        }
      `

    const response: Promise<
      OperationResult<{
        CreateProduct: Product
      }>
    > = this.mutation(requestData, data)

    return response
  }

  public UpdateProduct = (data: MutationUpdateProductArgs) => {
    const requestData = `
        mutation UpdateProduct($input: UpdateProductInput!) {
          UpdateProduct(input: $input) {
          uuid
          id
          businessId
          business {
            id
          }
          sku
          name
          slug
          description
          price
          currency
          taxCode
          type
          status
          variants
          inventoryCount
          stockThreshold
          isBackorderAllowed
          downloadUrl
          downloadLimit
          license
          fileInfo
          dimensions
          weight
          billingInterval
          trialPeriodDays
          gracePeriod
          renewal
          features
          eventType
          eventStartDate
          eventEndDate
          venueName
          eventOnlineUrl
          eventLocation
          eventCapacity
          eventRegisteredCount
          eventWaitlistEnabled
          metaTitle
          metaDescription
          isVisible
          images
          createdAt
          updatedAt
          }
        }
      `

    const response: Promise<
      OperationResult<{
        UpdateProduct: Product
      }>
    > = this.mutation(requestData, data)

    return response
  }

  public DeleteProduct = (product_id: number) => {
    const requestData = `
        mutation DeleteProduct($product_id: Int!) {
          DeleteProduct(product_id: $product_id)
        }
      `

    const response: Promise<
      OperationResult<{
        DeleteProduct: Boolean
      }>
    > = this.mutation(requestData, { product_id })

    return response
  }
}
