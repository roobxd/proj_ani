import { Location } from '../models/Location';
import { supabase } from '../utils/supabase';

export const fetchLocations = async (): Promise<Location[]>  => {
    const { data, error } = await supabase
        .from('locations')
        .select()

    if (error) {
        throw new Error(`Error querying locations: ${error.message}`)
    }

    return data as Location[];
};

