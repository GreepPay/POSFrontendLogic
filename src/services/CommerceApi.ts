import {
  MutationCreateProductArgs,
  MutationUpdateProductArgs,
  Order,
  OrderPaginator,
  Product,
  ProductPaginator,
  TicketPaginator,
  Delivery,
} from "../gql/graphql";
import { OperationResult } from "urql";
import { BaseApiService } from "./common/BaseService";

// Temporary type definition for DeliveryPaginator
type DeliveryPaginator = {
  __typename?: "DeliveryPaginator";
  data: Array<Delivery>;
  paginatorInfo: {
    total: number;
    perPage: number;
    lastPage: number;
    lastItem?: number;
    hasMorePages: boolean;
    firstItem?: number;
    currentPage: number;
    count: number;
  };
};

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
            category{
              id
              name
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
    `;
    const response: Promise<
      OperationResult<{
        GetEventTickets: TicketPaginator;
      }>
    > = this.query(requestData, {
      productId,
      first,
      page,
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
          category{
            id
            name
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

  public GetDeliveries = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetDeliveries(
        $page: Int!,
        $count: Int!
      ){
        GetDeliveries(
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
            uuid
            type
            status
            deliveryAddress
            metadata
            trackingNumber
            estimatedDeliveryDate
            actualDeliveryDate
            trackingUpdates
            deliveryAttempts
            order {
              id
              uuid
              orderNumber
              customerId
              user {
                id
                uuid
                first_name
                last_name
                email
                phone
              }
              totalAmount
              currency
              status
            }
            createdAt
            updatedAt
          }
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetDeliveries: DeliveryPaginator;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };

  public GetCustomDeliveryRequests = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC"
  ) => {
    const whereQuery = `{
      AND: [
        {
          column: TYPE
          operator: EQ
          value: "custom"
        }
        {
          column: STATUS
          operator: EQ
          value: "pending"
        }
      ]
    }`;

    return this.GetDeliveries(page, count, orderType, order, whereQuery);
  };

  public GetBusinessDeliveries = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetBusinessDeliveries(
        $page: Int!,
        $count: Int!
      ){
        GetBusinessDeliveries(
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
            uuid
            trackingNumber
            status
            estimatedDeliveryDate
            actualDeliveryDate
            deliveryAddress
            metadata
            trackingUpdates
            deliveryAttempts
            order {
              id
              uuid
              orderNumber
              customerId
              user {
                id
                uuid
                first_name
                last_name
                email
                phone
              }
              totalAmount
              currency
              status
            }
            createdAt
            updatedAt
          }
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetBusinessDeliveries: DeliveryPaginator;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };

  public GetDelivery = (id: number) => {
    const requestData = `
      query GetDelivery($id: Int!) {
        GetDelivery(id: $id) {
          id
          uuid
          trackingNumber
          status
          type
          estimatedDeliveryDate
          actualDeliveryDate
          deliveryAddress
          metadata
          trackingUpdates
          deliveryAttempts
          order {
            id
            uuid
            orderNumber
            customerId
            user {
              id
              uuid
              first_name
              last_name
              email
              phone
            }
            totalAmount
            currency
            status
          }
          createdAt
          updatedAt
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetDelivery: Delivery;
      }>
    > = this.query(requestData, {
      id,
    });

    return response;
  };

  public GetDeliveryByUuid = (uuid: string) => {
    const requestData = `
      query GetDeliveryByUuid($uuid: String!) {
        GetDeliveryByUuid(uuid: $uuid) {
          id
          uuid
          trackingNumber
          status
          type
          estimatedDeliveryDate
          actualDeliveryDate
          deliveryAddress
          pickupAddress
          metadata
          trackingUpdates
          deliveryAttempts
          weight
          scheduledTime
          scheduledDate
          user {
            id
            uuid
            first_name
            last_name
            email
            phone
            profile {
              profile_picture
            }
          }
          order {
            id
            uuid
            orderNumber
            customerId
            user {
              id
              uuid
              first_name
              last_name
              email
              phone
              profile {
                profile_picture
              }
            }
            totalAmount
            currency
            status
            items
          }
          createdAt
          updatedAt
        }
      }
    `;
    const response: Promise<
      OperationResult<{
        GetDeliveryByUuid: Delivery;
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

  public AcceptDelivery = (deliveryId: number) => {
    const requestData = `
      mutation AcceptDelivery($deliveryId: Int!) {
        AcceptDelivery(deliveryId: $deliveryId)
      }
    `;

    const response: Promise<
      OperationResult<{
        AcceptDelivery: boolean;
      }>
    > = this.mutation(requestData, { deliveryId });

    return response;
  };

  public GetDeliveryLocations = (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "ASC" | "DESC" = "DESC",
    whereQuery = ""
  ) => {
    const requestData = `
      query GetDeliveryLocations($page: Int!, $count: Int!) {
        GetDeliveryLocations(
          first: $count,
          page: $page,
          orderBy: {
            column: AREA,
            order: ${order}
          }
          ${whereQuery ? `where: ${whereQuery}` : ""}
        ) {
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
          data {
            id
            country
            area
            status
            createdAt
            updatedAt
          }
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetDeliveryLocations: any;
      }>
    > = this.query(requestData, {
      page,
      count,
    });

    return response;
  };
}
