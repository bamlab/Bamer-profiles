import React, { useEffect, useState } from 'react';
import { Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';

export const Home = () => {
  const [profiles, setProfiles] = useState();
  const { navigate } = useNavigation();

  useEffect(() => {
    axios
      .get('https://www.bam/profiles')
      .then(response => setProfiles(response.data.profiles));
  }, []);

  const renderProfile: ListRenderItem<string> = ({ item }) => (
    <TouchableOpacity onPress={() => navigate('Profile', { name: 'Julien P' })}>
      <Text>{item}</Text>
    </TouchableOpacity>
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
