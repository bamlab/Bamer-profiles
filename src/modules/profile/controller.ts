import { BamerProfile } from '../../types';
import { fetchProfiles } from './api';

export const getProfiles = async (
  setProfiles: (profiles: BamerProfile[]) => void,
) => {
  const response = await fetchProfiles();
  setProfiles(response.data.profiles);
};
