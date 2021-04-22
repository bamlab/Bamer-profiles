import React from 'react';
import { Text, FlatList, ListRenderItem } from 'react-native';

export const Home = () => {
  const profiles = ['Alix B', 'Julien P', 'Alice A', 'Louis Z', 'Yann L'];

  const renderProfile: ListRenderItem<string> = ({ item }) => (
    <Text>{item}</Text>
  );

  const extractKey = (item: string) => item;

  return (
    <FlatList
      data={profiles}
      keyExtractor={extractKey}
      renderItem={renderProfile}
    />
  );
};
