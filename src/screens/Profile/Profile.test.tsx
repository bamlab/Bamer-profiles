import { render } from '@testing-library/react-native';
import { Profile } from './Profile';
import React from 'react';

describe('Profile', () => {
  it('should display correct name, email, phone number, github handle', () => {
    const { getByText } = render(<Profile />);

    expect(getByText('Name: Julien L')).toBeTruthy();
    expect(getByText('Email: jl@bam.tech')).toBeTruthy();
    expect(getByText('Phone Number: 01010290309')).toBeTruthy();
    expect(getByText('Github handle: @marsrover')).toBeTruthy();
  });
});
