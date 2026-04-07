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
}

export async function fetchCats(): Promise<Cat[]> {
  const { data, error } = await supabase
    .from('cats')
    .select('*, vet_bills(*)')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching cats:', error);
    throw error;
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
    vetBills: (cat.vet_bills || []).map((bill: any) => ({
      description: bill.description,
      amount: bill.amount,
      date: bill.date,
      paid: bill.paid,
    })),
  }));
}

export async function fetchCatById(id: string): Promise<Cat | null> {
  const { data, error } = await supabase
    .from('cats')
    .select('*, vet_bills(*)')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching cat:', error);
    return null;
  }

  if (!data) return null;

  // Transform database format to match UI format
  return {
    id: data.id,
    name: data.name,
    breed: data.breed,
    gender: data.gender,
    status: data.status,
    tnr: data.tnr,
    image: data.image,
    description: data.description,
    location: data.location,
    spottedDate: data.spotted_date,
    vetBills: (data.vet_bills || []).map((bill: any) => ({
      description: bill.description,
      amount: bill.amount,
      date: bill.date,
      paid: bill.paid,
    })),
  };
}

// Keep fallback static data for development
const PLACEHOLDER_IMAGE = 'https://images.unsplash.com/photo-1574158622147-e121fcdc2e8e?w=400&h=400&fit=crop';

export const cats: Cat[] = [
  {
    id: 'echo',
    name: 'Echo',
    breed: 'Domestic Short Hair/Tabby',
    gender: 'Female',
    status: 'Stray',
    tnr: true,
    image: PLACEHOLDER_IMAGE,
    description: 'Echo was first spotted in February 2025.',
    location: 'Cluster O near the park',
    spottedDate: 'February 2025',
    vetBills: []
  },
];

export const homedCats: Cat[] = [];
