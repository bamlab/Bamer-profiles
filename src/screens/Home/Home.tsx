import React, { useEffect, useState } from 'react';
import { Text, FlatList, ListRenderItem } from 'react-native';
import axios from 'axios';

export const Home = () => {
  const [profiles, setProfiles] = useState();

  useEffect(() => {
    axios
      .get('https://www.bam/profiles')
      .then(response => setProfiles(response.data.profiles));
  }, []);

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
