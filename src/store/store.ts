import { create } from 'zustand';
import { AnimalStoreState, createAnimalSlice } from './animalSlice';
import { createGroupSlice, GroupStoreState } from './groupSlice';
import { createAuthSlice, AuthStoreState } from './authSlice';
import { LocationStoreState, createLocationSlice } from './locationSlice';

type StoreState = LocationStoreState & AuthStoreState & AnimalStoreState & GroupStoreState;

const useStore = create<StoreState>()((set, get, store) => ({
  ...createAnimalSlice(set, get, store),
  ...createGroupSlice(set, get, store),
  ...createLocationSlice(set, get, store),
  ...createAuthSlice(set, get, store),
}));

export default useStore;
