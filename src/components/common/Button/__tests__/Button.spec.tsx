import { render } from '@testing-library/react';
import React from 'react';
import Button from '../Button';

describe('<Button />', () => {
  it('renders correctly', () => {
    const { container } = render(
      <Button
        name="name"
        disabled={false}
        onClick={jest.fn()}
        className="className"
      />,
    );

    expect(container).toMatchSnapshot();
  });
});
