import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { getProfiles } from '../../modules/profile/controller';
import { BamerProfile } from '../../types';

export const useHome = () => {
  const [profiles, setProfiles] = useState<BamerProfile[] | undefined>();
  const { navigate } = useNavigation();

  useEffect(() => {
    getProfiles(setProfiles);
  }, []);

  return {
    profiles,
    navigate,
  };
};
