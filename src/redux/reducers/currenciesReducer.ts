import * as currencyConverterConstants from '../constants/currencyConverterConstants';

const initialState = {
  currenciesList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case currencyConverterConstants.GET_CURRENCIES_LIST_SUCCESS: {
      return {
        ...state,
        currenciesList: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
