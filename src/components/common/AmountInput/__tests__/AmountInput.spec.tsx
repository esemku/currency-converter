import { render } from '@testing-library/react';
import React from 'react';
import AmountInput from '../AmountInput';

describe('<AmountInput />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <AmountInput inputName="inputName" label="label" onChange={jest.fn()} />,
    );

    expect(container).toMatchSnapshot();
  });
});
