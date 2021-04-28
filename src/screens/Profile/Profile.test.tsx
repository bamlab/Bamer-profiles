import { render } from '@testing-library/react-native';
import { Profile } from './Profile';
import React from 'react';

describe('Profile', () => {
  it('should display correct name, email, phone number, github handle', () => {
    const name = 'Julien L';
    const githubHandle = 'marsrover';
    const phoneNumber = '939723793';
    const email = 'jl@bam.tech';

    const { getByText } = render(
      <Profile
        route={{
          params: { name, phoneNumber, email, githubHandle },
          name: 'Profile',
          key: 'Profile',
        }}
      />,
    );

    expect(getByText('Name: ' + name)).toBeTruthy();
    expect(getByText('Email: ' + email)).toBeTruthy();
    expect(getByText('Phone Number: ' + phoneNumber)).toBeTruthy();
    expect(getByText('Github handle: ' + githubHandle)).toBeTruthy();
  });
});
