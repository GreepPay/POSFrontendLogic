import {
  MutationCreateProductArgs,
  MutationUpdateProductArgs,
  Order,
  OrderPaginator,
  Product,
  ProductPaginator,
} from "../gql/graphql";
import { OperationResult } from "urql";
import { BaseApiService } from "./common/BaseService";

export default class CommerceApi extends BaseApiService {
  // Query
  public GetProducts = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = "",
  ) => {
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
    `;
    const response: Promise<
      OperationResult<{
        GetProducts: ProductPaginator;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };

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
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetProduct: Product;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

  public GetOrders = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = "",
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
    `;
    const response: Promise<
      OperationResult<{
        GetOrders: OrderPaginator;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };

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
    `;
    const response: Promise<
      OperationResult<{
        GetOrder: Order;
      }>
    > = this.query(requestData, {
      uuid,
    });

    return response;
  };

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
      `;

    const response: Promise<
      OperationResult<{
        CreateProduct: Product;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

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
      `;

    const response: Promise<
      OperationResult<{
        UpdateProduct: Product;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public DeleteProduct = (product_id: number) => {
    const requestData = `
        mutation DeleteProduct($product_id: Int!) {
          DeleteProduct(product_id: $product_id)
        }
      `;

    const response: Promise<
      OperationResult<{
        DeleteProduct: Boolean;
      }>
    > = this.mutation(requestData, { product_id });

    return response;
  };
}
