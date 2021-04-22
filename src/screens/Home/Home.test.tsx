import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Home } from './Home';
import nock from 'nock';

const mockBamerProfiles = [
  'Alix B',
  'Julien P',
  'Alice A',
  'Louis Z',
  'Yann L',
];

const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate };

jest.mock('@react-navigation/core', () => ({
  useNavigation: () => mockNavigation,
}));

describe('Home', () => {
  it('should display a list of BAMer names from bam api', async () => {
    nock('https://www.bam')
      .get('/profiles')
      .reply(200, { profiles: mockBamerProfiles });

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Alix B')).toBeTruthy();
      expect(getByText('Julien P')).toBeTruthy();
      expect(getByText('Alice A')).toBeTruthy();
      expect(getByText('Louis Z')).toBeTruthy();
      expect(getByText('Yann L')).toBeTruthy();
    });
  });

  it('should call navigate with profile data on name press', async () => {
    nock('https://www.bam')
      .get('/profiles')
      .reply(200, { profiles: mockBamerProfiles });

    const { findByText } = render(<Home />);
    const NameButton = await findByText('Julien P');
    fireEvent.press(NameButton);

    expect(mockNavigate).toHaveBeenCalledWith('Profile', { name: 'Julien P' });
  });
});
