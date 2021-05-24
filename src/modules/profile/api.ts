import axios from 'axios';
import { BamerProfile } from '../../types';

export const fetchProfiles = () => {
  return axios.get<{ profiles: BamerProfile[] }>('https://www.bam/profiles');
};
