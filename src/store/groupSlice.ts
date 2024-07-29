import { StateCreator } from 'zustand';
import Group from '../models/Group';
import { fetchGroups } from '../services/groupService';

export interface GroupStoreState {
  groups: Group[];
  fetchGroups: () => Promise<void>;
}

export const createGroupSlice: StateCreator<GroupStoreState> = (set) => ({
  groups: [],

  fetchGroups: async () => {
    const groups = await fetchGroups();
    set({ groups });
  },

});
