import { fireEvent, render, screen, within } from '@testing-library/react';
import React from 'react';
import * as ReactRedux from 'react-redux';
import configureStore from 'redux-mock-store';
import * as MockStore from 'utils/mocks/store';
import Home from '../Home';

describe('<Home />', () => {
  const mockStore = configureStore();
  const store = mockStore(MockStore.store);

  it('renders correctly', () => {
    const { container } = render(
      <ReactRedux.Provider store={store}>
        <Home />
      </ReactRedux.Provider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('unlocking the convert button after entering amount', () => {
    const { getByTestId, queryByTestId } = render(
      <ReactRedux.Provider store={store}>
        <Home />
      </ReactRedux.Provider>,
    );

    expect(getByTestId('convertButton')).toHaveAttribute('disabled');

    fireEvent.change(screen.getByTestId('amountInput'), {
      target: { value: 5000 },
    });
    expect(getByTestId('convertButton')).not.toHaveAttribute('disabled');
    expect(queryByTestId('convertedAmountWrapper')).not.toBeInTheDocument();
  });

  it('changes value of currencyFrom select properly', () => {
    const { getByTestId, getByRole, queryByText } = render(
      <ReactRedux.Provider store={store}>
        <Home />
      </ReactRedux.Provider>,
    );

    const fromCurrencySelect = within(
      getByTestId('selectCurrencycurrencyFrom'),
    ).getByRole('button');

    fireEvent.mouseDown(fromCurrencySelect);
    const listbox = within(getByRole('listbox'));
    fireEvent.mouseDown(listbox.getByText('NOK'));

    expect(queryByText('NOK')).toBeInTheDocument();
  });

  it('changes value of currencyTo select properly', () => {
    const { getByTestId, getByRole, queryByText } = render(
      <ReactRedux.Provider store={store}>
        <Home />
      </ReactRedux.Provider>,
    );

    const toCurrencySelect = within(
      getByTestId('selectCurrencycurrencyTo'),
    ).getByRole('button');

    fireEvent.mouseDown(toCurrencySelect);
    const listbox = within(getByRole('listbox'));
    fireEvent.mouseDown(listbox.getByText('CAD'));

    expect(queryByText('CAD')).toBeInTheDocument();
  });
});
