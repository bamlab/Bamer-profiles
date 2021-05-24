import React from 'react';
import { Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { BamerProfile } from '../../types';
import { useHome } from './useHome';

const extractKey = (item: BamerProfile) => item.name;

export const Home = () => {
  const { profiles, navigate } = useHome();

  const renderProfile: ListRenderItem<BamerProfile> = ({ item: profile }) => (
    <TouchableOpacity onPress={() => navigate('Profile', profile)}>
      <Text>{profile.name}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={profiles}
      keyExtractor={extractKey}
      renderItem={renderProfile}
    />
  );
};
