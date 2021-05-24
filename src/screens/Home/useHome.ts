import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BamerProfile } from '../../types';

export const useHome = () => {
  const [profiles, setProfiles] = useState<BamerProfile[] | undefined>();
  const { navigate } = useNavigation();

  useEffect(() => {
    axios
      .get('https://www.bam/profiles')
      .then(response => setProfiles(response.data.profiles));
  }, []);

  return {
    profiles,
    navigate,
  };
};
