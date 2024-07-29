import Group from 'src/models/Group';
import { Location } from '../models/Location';
import { supabase } from '../utils/supabase';

export const fetchGroups = async (): Promise<Group[]>  => {
    const { data, error } = await supabase
        .from('groups')
        .select()

    if (error) { throw new Error(`Error querying groups: ${error.message}`) }
    
    return data as Group[];
};

