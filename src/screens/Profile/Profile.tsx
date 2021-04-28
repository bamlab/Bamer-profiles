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

  const [repos, setRepos] = useState<
    { link: string; nbStars: number; name: string }[]
  >();
  const [popularRepos, setPopularRepos] = useState<
    { link: string; nbStars: number; name: string }[]
  >([]);

  useEffect(() => {
    // fetch the github repositories of the candidate
    axios
      .get('https://github/api/' + githubHandle + '/repos/')
      .then(res => setRepos(res.data.repos));
  }, []);

  useEffect(() => {
    if (repos) {
      const orderedReposByStar = repos.sort((a, b) => b.nbStars - a.nbStars);
      setPopularRepos([orderedReposByStar[0], orderedReposByStar[1]]);
    }
  }, [repos]);

  const textStyle = { fontSize: 20, color: 'grey' };

  return (
    <View>
      <Text>Detailed Profile</Text>
      <Text style={textStyle}>Name: {name}</Text>
      <Text style={textStyle}>Email: {email}</Text>
      <Text style={textStyle}>Phone Number: {phoneNumber}</Text>

      <Text style={textStyle}>Github handle: {githubHandle}</Text>
      <Text style={textStyle}>Number of repositories: {repos?.length}</Text>

      {popularRepos.map(repo => (
        <TouchableOpacity onPress={() => Linking.openURL(repo.link)}>
          <View style={{ backgroundColor: '#ccc', borderColor: '#333' }}>
            <Text style={textStyle}>{repo.name}</Text>
            <Text style={textStyle}>{repo.nbStars}</Text>
            <Text style={textStyle}>{repo.link}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
