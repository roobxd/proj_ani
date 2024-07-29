export interface Animal {
    animal_id: string;
    name: string;
    species: string;
    image_url: string;
  
    group_id?: string;
    description?: string;
    age?: number;
    weight?: number;
    weight_unit?: string;
    sex?: string;
    dateOfBirth?: Date;
  }