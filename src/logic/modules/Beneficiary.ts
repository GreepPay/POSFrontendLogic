import {
  Beneficiary,
  BeneficiaryPaginator,
  QueryGetBeneficiariesArgs,
} from "../../gql/graphql";
import { $api } from "../../services";
import { CombinedError } from "urql";
import Common from "./Common";
import { Logic } from "..";

export default class BeneficiaryModule extends Common {
  constructor() {
    super();
    this.defineReactiveProperty("ManyBeneficiaries", undefined);
  }

  // Base Variables
  public ManyBeneficiaries: BeneficiaryPaginator | undefined;

  public GetBeneficiaries = async (
    data: QueryGetBeneficiariesArgs
  ): Promise<BeneficiaryPaginator | undefined> => {
    return $api.beneficiary
      .GetBeneficiaries(data)
      .then((response) => {
        this.ManyBeneficiaries = response.data?.GetBeneficiaries;
        return response.data?.GetBeneficiaries;
      })
      .catch((error: CombinedError) => {
        Logic.Common.showError(
          error,
          "Failed to fetch beneficiaries",
          "error-alert"
        );
        return undefined;
      });
  };
}
