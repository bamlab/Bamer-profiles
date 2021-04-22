import React, { useEffect, useState } from 'react';
import { Text, FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/core';
import { BamerProfile } from '../../types';

export const Home = () => {
  const [profiles, setProfiles] = useState<BamerProfile[] | undefined>();
  const { navigate } = useNavigation();

  useEffect(() => {
    axios
      .get('https://www.bam/profiles')
      .then(response => setProfiles(response.data.profiles));
  }, []);

  const renderProfile: ListRenderItem<BamerProfile> = ({ item: profile }) => (
    <TouchableOpacity onPress={() => navigate('Profile', profile)}>
      <Text>{profile.name}</Text>
    </TouchableOpacity>
  );

  const extractKey = (item: BamerProfile) => item.name;

  return (
    <FlatList
      data={profiles}
      keyExtractor={extractKey}
      renderItem={renderProfile}
    />
  );
};
