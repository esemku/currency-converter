import { render } from '@testing-library/react';
import React from 'react';
import { ICurrencyListItem } from 'types/currencies';
import SelectCurrency from '../SelectCurrency';

const currenciesList: ICurrencyListItem[] = [
  { iso: 'PLN', currency_name: 'Pol', is_obsolete: false },
  { iso: 'GBP', currency_name: 'Eng', is_obsolete: false },
  { iso: 'NOK', currency_name: 'Nor', is_obsolete: false },
];

describe('<SelectCurrency />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SelectCurrency
        currenciesList={currenciesList}
        value="PLN"
        label="label"
        id="id"
        onChange={jest.fn()}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
