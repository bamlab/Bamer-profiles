import { RouteProp } from '@react-navigation/core';
import React from 'react';
import { View, Text } from 'react-native';

type RootStackParamList = {
  Profile: {
    name: string;
    githubHandle: string;
    phoneNumber: string;
    email: string;
  };
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
