import { useState, useEffect } from 'react';

export interface Cluster {
  id: string;
  cluster_name: string;
  cluster_email: string;
}

export function useClusters() {
  const [clusters, setClusters] = useState<Cluster[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Hardcoded clusters: A-Z and Central Park
    const hardcodedClusters: Cluster[] = [
      { id: '1', cluster_name: 'Cluster A', cluster_email: '' },
      { id: '2', cluster_name: 'Cluster B', cluster_email: '' },
      { id: '3', cluster_name: 'Cluster C', cluster_email: '' },
      { id: '4', cluster_name: 'Cluster D', cluster_email: '' },
      { id: '5', cluster_name: 'Cluster E', cluster_email: '' },
      { id: '6', cluster_name: 'Cluster F', cluster_email: '' },
      { id: '7', cluster_name: 'Cluster G', cluster_email: '' },
      { id: '8', cluster_name: 'Cluster H', cluster_email: '' },
      { id: '9', cluster_name: 'Cluster I', cluster_email: '' },
      { id: '10', cluster_name: 'Cluster J', cluster_email: '' },
      { id: '11', cluster_name: 'Cluster K', cluster_email: '' },
      { id: '12', cluster_name: 'Cluster L', cluster_email: '' },
      { id: '13', cluster_name: 'Cluster M', cluster_email: '' },
      { id: '14', cluster_name: 'Cluster N', cluster_email: '' },
      { id: '15', cluster_name: 'Cluster O', cluster_email: '' },
      { id: '16', cluster_name: 'Cluster P', cluster_email: '' },
      { id: '17', cluster_name: 'Cluster Q', cluster_email: '' },
      { id: '18', cluster_name: 'Cluster R', cluster_email: '' },
      { id: '19', cluster_name: 'Cluster S', cluster_email: '' },
      { id: '20', cluster_name: 'Cluster T', cluster_email: '' },
      { id: '21', cluster_name: 'Cluster U', cluster_email: '' },
      { id: '22', cluster_name: 'Cluster V', cluster_email: '' },
      { id: '23', cluster_name: 'Cluster W', cluster_email: '' },
      { id: '24', cluster_name: 'Cluster X', cluster_email: '' },
      { id: '25', cluster_name: 'Cluster Y', cluster_email: '' },
      { id: '26', cluster_name: 'Cluster Z', cluster_email: '' },
      { id: '27', cluster_name: 'Cluster Central Park', cluster_email: '' },
    ];

    setClusters(hardcodedClusters);
    setError(null);
  }, []);

  return { clusters, loading, error };
}
