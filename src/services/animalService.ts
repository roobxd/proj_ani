import { Animal } from '../models/Animal';
import { supabase } from '../utils/supabase';

// Fetch all animals
export const fetchAnimals = async (): Promise<Animal[]> => {
  const { data, error } = await supabase
    .from('animals')
    .select('*');
  if (error) throw new Error(error.message);
  return data as Animal[];
};

// Fetch an animal by ID
export const fetchAnimalById = async (animalId: string): Promise<Animal | null> => {
  console.log("sb " + supabase.getChannels)
  const { data, error } = await supabase
    .from('animals')
    .select('*')
    .eq('id', animalId)
    .single();
  if (error) throw new Error(error.message);
  return data as Animal;
};

// Add a new animal
export const addAnimal = async (animal: Omit<Animal, 'id'>): Promise<string> => {
  const { data, error } = await supabase
    .from('animals')
    .insert(animal)
    .select('id')
    .single();
  if (error) throw new Error(error.message);
  return data.id;
};

// Update an existing animal
export const updateAnimal = async (animalId: string, updates: Partial<Animal>) => {
  const { error } = await supabase
    .from('animals')
    .update(updates)
    .eq('id', animalId);
  if (error) throw new Error(error.message);
};

// Delete an animal
export const deleteAnimal = async (animalId: string) => {
  const { error } = await supabase
    .from('animals')
    .delete()
    .eq('id', animalId);
  if (error) throw new Error(error.message);
};
