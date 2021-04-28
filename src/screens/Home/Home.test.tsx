import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Home } from './Home';
import nock from 'nock';
import { BamerProfile } from '../../types';

const julienProfile = {
  name: 'Julien G',
  email: 'julieng@bam.tech',
  phoneNumber: '973293790732',
  githubHandle: '@jul',
};

const alixProfile = {
  name: 'Alix B',
  email: 'alix@bam.tech',
  phoneNumber: '98298298',
  githubHandle: '@lyx',
};

const guillaumeProfile = {
  name: 'Guillaume G',
  email: 'gui@bam.tech',
  phoneNumber: '9872873987',
  githubHandle: '@guig',
};

const mockBamerProfiles: BamerProfile[] = [
  alixProfile,
  julienProfile,
  guillaumeProfile,
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
      expect(getByText('Julien G')).toBeTruthy();
      expect(getByText('Guillaume G')).toBeTruthy();
    });
  });

  it('should call navigate with profile data on name press', async () => {
    nock('https://www.bam')
      .get('/profiles')
      .reply(200, { profiles: mockBamerProfiles });

    const { findByText } = render(<Home />);
    const NameButton = await findByText(julienProfile.name);
    fireEvent.press(NameButton);

    expect(mockNavigate).toHaveBeenCalledWith('Profile', julienProfile);
  });
});
