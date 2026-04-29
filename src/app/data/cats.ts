import { supabase } from '../lib/supabaseClient';

export interface Cat {
  id: string;
  name: string;
  breed: string;
  gender: 'Male' | 'Female';
  status: 'Stray' | 'Homed';
  tnr: boolean;
  image: string;
  description: string;
  location: string;
  spottedDate: string;
  vetBills?: {
    description: string;
    amount: string;
    date: string;
    paid: boolean;
  }[];
  freeForAdoption?: boolean;
  adoptionCluster?: string;
  adoptionEmail?: string;
}

export async function fetchCats(): Promise<Cat[]> {
  if (!supabase) {
    console.warn('Supabase not configured, returning fallback data');
    return cats;
  }

  try {
    const { data, error } = await supabase
      .from('cats')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching cats:', error);
      return cats; // Return fallback data on error
    }

    // Transform database format to match UI format
    return (data || []).map((cat: any) => ({
  id: cat.id,
  name: cat.name,
  breed: cat.breed,
  gender: cat.gender,
  status: cat.status,
  tnr: cat.tnr,
  image: cat.image,
  description: cat.description,
  location: cat.location,
  spottedDate: cat.spotted_date,
  freeForAdoption: cat.free_for_adoption,
  adoptionCluster: cat.adoption_cluster,
  adoptionEmail: cat.adoption_email,
      vetBills: (cat.vet_bills || []).map((bill: any) => ({
        description: bill.description,
        amount: bill.amount,
        date: bill.date,
        paid: bill.paid,
      })),
    }));
  } catch (err) {
    console.error('Exception fetching cats:', err);
    return cats;
  }
}

export async function fetchCatById(id: string): Promise<Cat | null> {
  if (!supabase) {
    return cats.find(c => c.id === id) || null;
  }

  try {
    const { data, error } = await supabase
      .from('cats')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching cat:', error);
      return cats.find(c => c.id === id) || null;
    }

    if (!data) return null;

    // Transform database format to match UI format
return (data || []).map((cat: any) => ({
  id: cat.id,
  name: cat.name,
  breed: cat.breed,
  gender: cat.gender,
  status: cat.status,
  tnr: cat.tnr,
  image: cat.image,
  description: cat.description,
  location: cat.location,
  spottedDate: cat.spotted_date,
  freeForAdoption: cat.free_for_adoption,
  adoptionCluster: cat.adoption_cluster,
  adoptionEmail: cat.adoption_email,
}));
  } catch (err) {
    console.error('Exception fetching cat:', err);
    return cats.find(c => c.id === id) || null;
  }
}

// Keep fallback static data empty - all cats come from database
export const cats: Cat[] = [];

export const homedCats: Cat[] = [];
