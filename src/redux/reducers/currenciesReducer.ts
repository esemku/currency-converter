import * as currencyConverterConstants from '../constants/currencyConverterConstants';

const initialState = {
  currenciesList: [],
  convertedAmount: {
    amount: null,
    from: '',
    to: '',
  },
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
        convertedAmount: {
          convertedAmount: action.data.to[0].mid,
          convertedFrom: action.data.from,
          convertedTo: action.data.to[0].quotecurrency,
        },
      };
    }
    default: {
      return state;
    }
  }
}
