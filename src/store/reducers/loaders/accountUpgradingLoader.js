import {
  ACCOUNT_IS_UPGRADING,
  ACCOUNT_IS_NOT_UPGRADING,
} from "../../actions/loaders/accountUpgradingLoader";

const accountUpgradingLoader = (state = false, action) => {
  switch (action.type) {
    case ACCOUNT_IS_UPGRADING:
      return true;

    case ACCOUNT_IS_NOT_UPGRADING:
      return false;

    default:
      return state;
  }
};

export default accountUpgradingLoader;