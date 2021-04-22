import { render } from '@testing-library/react-native';
import React from 'react';
import { Home } from './Home';

describe('Home', () => {
  it('should display a list of BAMer names', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Alix B')).toBeTruthy();
    expect(getByText('Julien P')).toBeTruthy();
    expect(getByText('Alice A')).toBeTruthy();
    expect(getByText('Louis Z')).toBeTruthy();
    expect(getByText('Yann L')).toBeTruthy();
  });
});
