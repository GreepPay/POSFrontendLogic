import {
  MutationCreateProductArgs,
  MutationUpdateProductArgs,
  Order,
  OrderPaginator,
  Product,
  ProductPaginator,
  TicketPaginator,
  Delivery,
  DeliveryLocationPaginator,
} from "../../gql/graphql";
import { $api } from "../../services";
import Common from "./Common";
import { Logic } from "..";
import { CombinedError } from "urql";

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

export default class Commerce extends Common {
  // Base Variables
  public ManyShopProducts: ProductPaginator | undefined;
  public SingleProduct: Product | undefined;
  public ManyEventProducts: ProductPaginator | undefined;
  public ManyEventTickets: TicketPaginator | undefined;
  public ManyOrders: OrderPaginator | undefined;
  public SingleOrder: Order | undefined;
  public ManyDeliveries: DeliveryPaginator | undefined;
  public ManyBusinessDeliveries: DeliveryPaginator | undefined;
  public SingleDelivery: Delivery | undefined;
  public ManyDeliveryLocations: DeliveryLocationPaginator | undefined;

  // Mutations
  public CreateProductForm: MutationCreateProductArgs | undefined;
  public UpdateProductForm: MutationUpdateProductArgs | undefined;

  constructor() {
    super();

    this.defineReactiveProperty("ManyShopProducts", undefined);
    this.defineReactiveProperty("SingleProduct", undefined);
    this.defineReactiveProperty("ManyEventTickets", undefined);
    this.defineReactiveProperty("ManyEventProducts", undefined);
    this.defineReactiveProperty("ManyOrders", undefined);
    this.defineReactiveProperty("SingleOrder", undefined);
    this.defineReactiveProperty("ManyDeliveries", undefined);
    this.defineReactiveProperty("ManyBusinessDeliveries", undefined);
    this.defineReactiveProperty("SingleDelivery", undefined);
    this.defineReactiveProperty("ManyDeliveryLocations", undefined);
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
    let whereQuery = "";

    if (searchQuery) {
      whereQuery = `{
          column: NAME
          operator: LIKE
          value: "%${searchQuery}%"
          AND: {
            column: TYPE
            operator: NEQ
            value: "event"
          }
        }`;
    } else {
      whereQuery = `{
          column: TYPE
          operator: NEQ
          value: "event"
          
        }`;
    }

    return $api.commerce
      .GetProducts(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyShopProducts = response.data?.GetProducts;
        }
        return response.data?.GetProducts;
      });
  };

  public GetEventProducts = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    searchQuery = "",
    isSearch = false
  ) => {
    let whereQuery = "";

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
        }`;
    } else {
      whereQuery = `{
          column: TYPE
          operator: EQ
          value: "event"
        }`;
    }

    return $api.commerce
      .GetProducts(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyEventProducts = response.data?.GetProducts;
        }
        return response.data?.GetProducts;
      });
  };

  public GetEventTickets = async (
    productId: number,
    page: number,
    first: number
    // orderType = "CREATED_AT",
    // order = "DESC" as "DESC" | "ASC",
    // searchQuery = "",
    // isSearch = false
  ) => {
    let whereQuery = "";

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
        this.ManyEventTickets = response.data?.GetEventTickets;
      });
  };

  public GetProduct = async (uuid: string) => {
    return $api.commerce.GetProduct(uuid).then((response) => {
      this.SingleProduct = response.data?.GetProduct;
      return response.data?.GetProduct;
    });
  };

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
          this.ManyOrders = response.data?.GetOrders;
        }
        return response.data?.GetOrders;
      });
  };

  public GetOrder = async (uuid: string) => {
    return $api.commerce.GetOrder(uuid).then((response) => {
      this.SingleOrder = response.data?.GetOrder;
      return response.data?.GetOrder;
    });
  };

  public GetDeliveries = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false
  ) => {
    return $api.commerce
      .GetDeliveries(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyDeliveries = response.data?.GetDeliveries;
        }
        return response.data?.GetDeliveries;
      });
  };

  public GetCustomDeliveryRequests = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    isSearch = false
  ) => {
    return $api.commerce
      .GetCustomDeliveryRequests(page, count, orderType, order)
      .then((response) => {
        if (!isSearch) {
          this.ManyDeliveries = response.data?.GetDeliveries;
        }
        return response.data?.GetDeliveries;
      });
  };

  public GetBusinessDeliveries = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order = "DESC" as "DESC" | "ASC",
    whereQuery = "",
    isSearch = false
  ) => {
    return $api.commerce
      .GetBusinessDeliveries(page, count, orderType, order, whereQuery)
      .then((response) => {
        if (!isSearch) {
          this.ManyBusinessDeliveries = response.data?.GetBusinessDeliveries;
        }
        return response.data?.GetBusinessDeliveries;
      });
  };

  public GetDelivery = async (id: number) => {
    return $api.commerce.GetDelivery(id).then((response) => {
      this.SingleDelivery = response.data?.GetDelivery;
      return response.data?.GetDelivery;
    });
  };

  public GetDeliveryByUuid = async (uuid: string) => {
    return $api.commerce.GetDeliveryByUuid(uuid).then((response) => {
      this.SingleDelivery = response.data?.GetDeliveryByUuid;
      return response.data?.GetDeliveryByUuid;
    });
  };

  public GetDeliveryLocations = async (
    page: number,
    count: number,
    orderType = "CREATED_AT",
    order: "DESC" | "ASC" = "DESC",
    whereQuery = ""
  ) => {
    return $api.commerce
      .GetDeliveryLocations(page, count, orderType, order, whereQuery)
      .then((response) => {
        this.ManyDeliveryLocations = response.data?.GetDeliveryLocations;
        return this.ManyDeliveryLocations;
      });
  };

  // Mutations
  public CreateProduct = () => {
    if (this.CreateProductForm) {
      return $api.commerce
        .CreateProduct(this.CreateProductForm)
        .then((response) => {
          if (response.data?.CreateProduct) {
            Logic.Common.hideLoader();
            return response.data.CreateProduct;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.hideLoader();
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public UpdateProduct = () => {
    if (this.UpdateProductForm) {
      return $api.commerce
        .UpdateProduct(this.UpdateProductForm)
        .then((response) => {
          if (response.data?.UpdateProduct) {
            Logic.Common.hideLoader();
            return response.data.UpdateProduct;
          }
        })
        .catch((error: CombinedError) => {
          Logic.Common.hideLoader();
          Logic.Common.showError(error, "Oops!", "error-alert");
          throw error;
        });
    }
  };

  public DeleteProduct = async (product_id: number) => {
    return $api.commerce
      .DeleteProduct(product_id)
      .then((response) => {
        if (response.data?.DeleteProduct) {
          Logic.Common.hideLoader();
          return response.data.DeleteProduct;
        }
      })
      .catch((error: CombinedError) => {
        Logic.Common.hideLoader();
        Logic.Common.showError(error, "Oops!", "error-alert");
        throw error;
      });
  };

  public AcceptDelivery = async (deliveryId: number) => {
    return $api.commerce
      .AcceptDelivery(deliveryId)
      .then(async (response) => {
        if (response.data?.AcceptDelivery) {
          await this.GetDelivery(deliveryId);
          return response;
        }
        return response;
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(
          error,
          "Failed to accept delivery",
          "error-alert"
        );
        throw error;
      });
  };
}
