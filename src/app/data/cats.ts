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
    description: 'Echo was first spotted in February 2025. Called Echo because of the rains he (albeit MoT 18/04) and we saw...',
    location: 'Cluster O near the park',
    spottedDate: 'February 2025',
    vetBills: []
  },
  {
    id: 'felix',
    name: 'Felix',
    breed: 'Domestic Short Hair/Black & White',
    gender: 'Male',
    status: 'Stray',
    tnr: true,
    image: PLACEHOLDER_IMAGE,
    description: 'Felix has been around since early 2017 at least! Such a pretty boy, but we had to trap against his will...',
    location: 'Cluster O main area',
    spottedDate: 'January 2017',
    vetBills: []
  },
  {
    id: 'luna',
    name: 'Luna',
    breed: 'Domestic Short Hair/Calico',
    gender: 'Female',
    status: 'Stray',
    tnr: true,
    image: PLACEHOLDER_IMAGE,
    description: 'Luna is another one of our OSs. She has been around since before 2016. She is super soft and loves to cuddle...',
    location: 'Cluster O park entrance',
    spottedDate: 'July 2016',
    vetBills: []
  },
  {
    id: 'mango',
    name: 'Mango',
    breed: 'Domestic Short Hair/Ginger',
    gender: 'Male',
    status: 'Stray',
    tnr: true,
    image: PLACEHOLDER_IMAGE,
    description: 'Mango is a gentle, sweet boy who is almost one year old! He arrived in Cluster O at just 12 weeks old...',
    location: 'Cluster O building 3',
    spottedDate: 'June 2024',
    vetBills: []
  },
  {
    id: 'misty',
    name: 'Misty',
    breed: 'Domestic Long Hair/Grey',
    gender: 'Female',
    status: 'Stray',
    tnr: true,
    image: PLACEHOLDER_IMAGE,
    description: 'Misty was first spotted in mid-Jan 2020. She was terrified at first but now enjoys hanging out with our team...',
    location: 'Cluster O near community center',
    spottedDate: 'January 2020',
    vetBills: []
  },
  {
    id: 'oscar',
    name: 'Oscar',
    breed: 'Arabian Mau/Ginger & White',
    gender: 'Male',
    status: 'Stray',
    tnr: true,
    image: PLACEHOLDER_IMAGE,
    description: 'Oscar was first spotted in August 2021 in Cluster O. He was very hard to get close to, but we eventually managed to get him for TNR in December that year. He has become a bit of a protector for the Cluster O colony.',
    location: 'Cluster P carpark down from Carrefour',
    spottedDate: 'August 2021',
    vetBills: [
      {
        description: 'TNR - kindly sponsored by DMCC',
        amount: 'AED 161.25',
        date: 'Dec 21, 2021',
        paid: true
      }
    ]
  }
];

export const homedCats: Cat[] = [
  // Add more homed cats as needed
];
