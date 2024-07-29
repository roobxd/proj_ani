import { StateCreator } from 'zustand';
import {Animal} from '../models/Animal';
import { fetchAnimals, addAnimal, updateAnimal, deleteAnimal } from '../services/animalService';

export interface AnimalStoreState {
  animals: Animal[];
  selectedAnimal: string | null;
  fetchAnimals: () => Promise<void>;
  addAnimal: (animal: Omit<Animal, 'id'>) => Promise<void>;
  updateAnimal: (animalId: string, updates: Partial<Animal>) => Promise<void>;
  deleteAnimal: (animalId: string) => Promise<void>;
  setSelectedAnimal: (animalId: string) => void;
  animalError: string | null;
  animalLoading: boolean;
}

export const createAnimalSlice: StateCreator<AnimalStoreState> = (set) => ({
  animals: [],
  selectedAnimal: null,
  animalError: null,
  animalLoading: false,

  fetchAnimals: async () => {
    try {
      const animals = await fetchAnimals();
      set({ animals, animalError: null });
    } catch (error: any) {
      set({ animalError: error.message });
    }
  },

  addAnimal: async (animal: Omit<Animal, 'id'>) => {
    try {
      await addAnimal(animal);
      const animals = await fetchAnimals();
      set({ animals, animalError: null });
    } catch (error: any) {
      set({ animalError: error.message });
    }
  },

  setSelectedAnimal: (selectedAnimalId: string) => {
    try {
      set({selectedAnimal: selectedAnimalId})
    } catch(error: any) {

    }
  },

  updateAnimal: async (animalId: string, updates: Partial<Animal>) => {
    try {
      await updateAnimal(animalId, updates);
      const animals = await fetchAnimals();
      set({ animals, animalError: null });
    } catch (error: any) {
      set({ animalError: error.message });
    }
  },

  deleteAnimal: async (animalId: string) => {
    try {
      await deleteAnimal(animalId);
      const animals = await fetchAnimals();
      set({ animals, animalError: null });
    } catch (error: any) {
      set({ animalError: error.message });
    }
  },
});
