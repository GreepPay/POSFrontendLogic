import {
  MutationCreateBusinessProfileArgs,
  MutationUpdateBusinessProfileArgs,
  MutationUpdateProfileArgs,
  MutationCreateStoreLocationArgs,
  MutationAddDeliveryAddressArgs,
  MutationUpdateDeliveryAddressArgs,
} from "src/gql/graphql";
import { OperationResult } from "urql";
import { BaseApiService } from "./common/BaseService";

export default class UserApi extends BaseApiService {
  // Mutation
  public UpdateProfile = (data: MutationUpdateProfileArgs) => {
    const requestData = `
      mutation UpdateProfile(
        $first_name: String
        $profile_photo: Upload
        $phone_number: String
        $last_name: String
        $default_currency: String
        $country: String
        $state: String
        $documents: [Upload!]
        $business_name: String
        $business_logo: Upload
        $business_category: String
        $business_description: String
        $auth_passcode: String
      ) {
        UpdateProfile(
          first_name: $first_name
          profile_photo: $profile_photo
          phone_number: $phone_number
          last_name: $last_name
          default_currency: $default_currency
          country: $country
          state: $state
          documents: $documents
          business_name: $business_name
          business_logo: $business_logo
          business_category: $business_category
          business_description: $business_description
          auth_passcode: $auth_passcode
        )
      }
		`;

    const response: Promise<
      OperationResult<{
        UpdateProfile: Boolean;
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public CreateBusinessProfile = (data: MutationCreateBusinessProfileArgs) => {
    const requestData = `
      mutation CreateBusinessProfile(
        $business_name: String!
        $business_type: String!
        $business_logo: Upload
        $location: String!
        $category: String
        $banner: Upload
        $description: String
        $website: String
        $resident_permit: Upload
        $passport: Upload
        $registration_number: String
        $documents: [Upload!]
        $country: String
        $city: String
        $address: String
        $default_currency: String
    ) {
        CreateBusinessProfile(
            business_name: $business_name
            business_type: $business_type
            business_logo: $business_logo
            location: $location
            category: $category
            banner: $banner
            description: $description
            website: $website
            resident_permit: $resident_permit
            passport: $passport
            registration_number: $registration_number
            documents: $documents
            country: $country
            city: $city
            address: $address
            default_currency: $default_currency
        ) {
            id
        }
    }
    `;

    const response: Promise<
      OperationResult<{
        CreateBusinessProfile: { id: string };
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public UpdateBusinessProfile = (data: MutationUpdateBusinessProfileArgs) => {
    const requestData = `
      mutation UpdateBusinessProfile(
        $business_uuid: String!
        $business_name: String
        $business_type: String
        $business_logo: Upload
        $location: String
        $category: String
        $banner: Upload
        $description: String
        $website: String
        $resident_permit: Upload
        $passport: Upload
        $registration_number: String
        $documents: [Upload!]
        $country: String
        $city: String
        $address: String
        $default_currency: String
      ) {
        UpdateBusinessProfile(
          business_uuid: $business_uuid
          business_name: $business_name
          business_type: $business_type
          business_logo: $business_logo
          location: $location
          category: $category
          banner: $banner
          description: $description
          website: $website
          resident_permit: $resident_permit
          passport: $passport
          registration_number: $registration_number
          documents: $documents
          country: $country
          city: $city
          address: $address
          default_currency: $default_currency
        ) {
          id
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        UpdateBusinessProfile: { id: string };
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public CreateStoreLocation = (data: MutationCreateStoreLocationArgs) => {
    const requestData = `
      mutation CreateStoreLocation(
        $business_uuid: String!
        $name: String!
        $address: String!
        $city: String!
        $country: String!
        $latitude: Float
        $longitude: Float
        $meta_data: String
      ) {
        CreateStoreLocation(
          business_uuid: $business_uuid
          name: $name
          address: $address
          city: $city
          country: $country
          latitude: $latitude
          longitude: $longitude
          meta_data: $meta_data
        ) {
          uuid
          name
          address
          city
          country
          latitude
          longitude
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        CreateStoreLocation: {
          uuid: string;
          name: string;
          address: string;
          city: string;
          country: string;
          latitude?: number;
          longitude?: number;
        };
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public AddDeliveryAddress = (data: MutationAddDeliveryAddressArgs) => {
    const requestData = `
      mutation AddDeliveryAddress(
        $name: String!
        $description: String
        $google_map_link: String
        $delivery_location_id: String
        $is_default: Boolean
      ) {
        AddDeliveryAddress(
          name: $name
          description: $description
          google_map_link: $google_map_link
          delivery_location_id: $delivery_location_id
          is_default: $is_default
        ) {
          uuid
          name
          description
          google_map_link
          delivery_location_id
          is_default
          is_active
          created_at
          updated_at
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        AddDeliveryAddress: {
          uuid: string;
          name: string;
          description?: string;
          google_map_link?: string;
          delivery_location_id?: string;
          is_default: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public UpdateDeliveryAddress = (data: MutationUpdateDeliveryAddressArgs) => {
    const requestData = `
      mutation UpdateDeliveryAddress(
        $id: ID!
        $name: String
        $description: String
        $google_map_link: String
        $delivery_location_id: String
        $is_default: Boolean
        $is_active: Boolean
      ) {
        UpdateDeliveryAddress(
          id: $id
          name: $name
          description: $description
          google_map_link: $google_map_link
          delivery_location_id: $delivery_location_id
          is_default: $is_default
          is_active: $is_active
        ) {
          uuid
          name
          description
          google_map_link
          delivery_location_id
          is_default
          is_active
          created_at
          updated_at
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        UpdateDeliveryAddress: {
          uuid: string;
          name: string;
          description?: string;
          google_map_link?: string;
          delivery_location_id?: string;
          is_default: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
      }>
    > = this.mutation(requestData, data);

    return response;
  };

  public GetStoreLocations = (first: number = 20, page: number = 1) => {
    const requestData = `
      query GetStoreLocations($first: Int!, $page: Int) {
        GetStoreLocations(first: $first, page: $page) {
          data {
            uuid
            name
            address
            city
            country
            latitude
            longitude
            meta_data
            business_id
            created_at
            updated_at
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
        GetStoreLocations: {
          data: Array<{
            uuid: string;
            name: string;
            address: string;
            city: string;
            country: string;
            latitude?: number;
            longitude?: number;
            meta_data?: string;
            business_id: string;
            created_at: string;
            updated_at: string;
          }>;
          paginatorInfo: {
            count: number;
            currentPage: number;
            firstItem: number;
            hasMorePages: boolean;
            lastItem: number;
            lastPage: number;
            perPage: number;
            total: number;
          };
        };
      }>
    > = this.query(requestData, { first, page });

    return response;
  };

  public GetDeliveryAddresses = (first: number = 20, page: number = 1) => {
    const requestData = `
      query GetDeliveryAddresses($first: Int!, $page: Int) {
        GetDeliveryAddresses(first: $first, page: $page) {
          data {
            uuid
            name
            description
            google_map_link
            delivery_location_id
            is_default
            is_active
            created_at
            updated_at
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
        GetDeliveryAddresses: {
          data: Array<{
            uuid: string;
            name: string;
            description?: string;
            google_map_link?: string;
            delivery_location_id?: string;
            is_default: boolean;
            is_active: boolean;
            created_at: string;
            updated_at: string;
          }>;
          paginatorInfo: {
            count: number;
            currentPage: number;
            firstItem: number;
            hasMorePages: boolean;
            lastItem: number;
            lastPage: number;
            perPage: number;
            total: number;
          };
        };
      }>
    > = this.query(requestData, { first, page });

    return response;
  };

  public GetDeliveryAddress = (uuid: string) => {
    const requestData = `
      query GetDeliveryAddress($uuid: String!) {
        GetDeliveryAddress(uuid: $uuid) {
          uuid
          name
          description
          google_map_link
          delivery_location_id
          is_default
          is_active
          created_at
          updated_at
        }
      }
    `;

    const response: Promise<
      OperationResult<{
        GetDeliveryAddress: {
          uuid: string;
          name: string;
          description?: string;
          google_map_link?: string;
          delivery_location_id?: string;
          is_default: boolean;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
      }>
    > = this.query(requestData, { uuid });

    return response;
  };
}
