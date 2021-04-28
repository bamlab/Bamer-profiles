import { RouteProp } from '@react-navigation/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { BamerProfile } from '../../types';

type RootStackParamList = {
  Profile: BamerProfile;
};

type Props = {
  route: RouteProp<RootStackParamList, 'Profile'>;
};

export const Profile = ({ route: { params } }: Props) => {
  const { name, email, phoneNumber, githubHandle } = params;

  const [ghRepos, setGhRepos] = useState<
    { link: string; nbStars: number; name: string }[]
  >();
  // 2 most popular repos (most starred)
  const [popularRepos, setPopularRepos] = useState<
    { link: string; nbStars: number; name: string }[]
  >([]);

  useEffect(() => {
    // fetch the github repositories of the candidate
    axios
      .get('https://github/api/' + githubHandle + '/repos/')
      .then(res => setGhRepos(res.data.repos));
  }, []);

  useEffect(() => {
    // compute 2 most popular repos
    if (ghRepos) {
      const orderedReposByStar = ghRepos.sort((a, b) => b.nbStars - a.nbStars);
      setPopularRepos([orderedReposByStar[0], orderedReposByStar[1]]);
    }
  }, [ghRepos]);

  const textStyle = { fontSize: 16, color: 'black' };

  return (
    <View>
      <Text>Detailed Profile</Text>
      {/* Personnal info */}
      <Text style={textStyle}>Name: {name}</Text>
      <Text style={textStyle}>Email: {email}</Text>
      <Text style={textStyle}>Phone Number: {phoneNumber}</Text>

      {/* Github info */}
      <Text style={textStyle}>Github handle: {githubHandle}</Text>
      <Text style={textStyle}>Number of repositories: {ghRepos?.length}</Text>

      <Text style={{ fontSize: 20, marginBottom: 10, paddingTop: 20 }}>
        2 most popular repositories
      </Text>
      {popularRepos.map(repo => {
        <TouchableOpacity onPress={() => Linking.openURL(repo.link)}>
          <View style={{ backgroundColor: '#ccc', borderColor: '#333' }}>
            <Text>{repo.name}</Text>
            <Text>{repo.nbStars}</Text>
          </View>
        </TouchableOpacity>;
      })}
    </View>
  );
};
