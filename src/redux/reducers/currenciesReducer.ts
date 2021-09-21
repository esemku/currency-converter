import * as currencyConverterConstants from '../constants/currencyConverterConstants';

const initialState = {
  currenciesList: [],
  convertedAmount: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case currencyConverterConstants.GET_CURRENCIES_LIST_SUCCESS: {
      return {
        ...state,
        currenciesList: action.data,
      };
    }
    case currencyConverterConstants.CONVERT_FROM_CURRENCY_SUCCESS: {
      return {
        ...state,
        convertedAmount: action.data,
      };
    }
    default: {
      return state;
    }
  }
}
