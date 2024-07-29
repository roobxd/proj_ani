import { StateCreator } from 'zustand';
import { fetchLocations } from '../services/locationService';
import { Location } from '../models/Location';

export interface LocationStoreState {
  locations: Location[];
  selectedLocation: Location | null;
  locationLoading: boolean;
  locationError: string | null;
  fetchLocations: () => Promise<void>;
  setSelectedLocation: (selectedLocationId: string) => Promise<void>;
  addLocation: (location: Omit<Location, 'id'>) => Promise<void>;
  updateLocation: (locationId: string, updates: Partial<Location>) => Promise<void>;
  deleteLocation: (locationId: string) => Promise<void>;
}

export const createLocationSlice: StateCreator<LocationStoreState> = (set) => ({
  locations: [],
  selectedLocation: null,
  locationLoading: false,
  locationError: null,

  fetchLocations: async () => {
    set({locationLoading: true, locationError: null})

    try {
        const data = await fetchLocations()
        set({locationLoading: false, locations: data})
    } catch(error: any) {
        set({locationLoading: false, locationError: error.message})
    }
  },

  setSelectedLocation: async (selectedLocationId: string) => {

  },

  addLocation: async (location: Omit<Location, 'id'>) => {
  

  },

  updateLocation: async (locationId: string, updates: Partial<Location>) => {

  },

  deleteLocation: async (locationId: string) => {

  },
});
