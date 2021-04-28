import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';
import { BamerProfile } from '../../types';

type RootStackParamList = {
  Profile: BamerProfile;
};

type Props = {
  route: RouteProp<RootStackParamList, 'Profile'>;
};

export const Profile = ({ route: { params } }: Props) => {
  const { name, email, phoneNumber, githubHandle } = params;

  return (
    <View>
      <Text>Detailed Profile</Text>
      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Phone Number: {phoneNumber}</Text>
      <Text>Github handle: {githubHandle}</Text>
    </View>
  );
};
