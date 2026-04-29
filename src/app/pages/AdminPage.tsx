import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { useDarkMode } from '../context/DarkModeContext';
import { Cat, cats as initialCats, homedCats as initialHomedCats } from '../data/cats';
import { Plus, Edit2, Trash2, Save, X, DollarSign, Heart, Sliders, Upload } from 'lucide-react';
import { useClusters } from '../../hooks/useClusters';
import { supabase } from '../lib/supabaseClient';
import { fetchCats } from '../data/cats';

export function AdminPage() {
  const { isDarkMode } = useDarkMode();
  const { clusters, loading: clustersLoading } = useClusters();
  const [allCats, setAllCats] = useState<Cat[]>([...initialCats, ...initialHomedCats]);
  const [editingCat, setEditingCat] = useState<Cat | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [adoptionInterests, setAdoptionInterests] = useState<Record<string, any>>({});
  const [sortByGender, setSortByGender] = useState<'All' | 'Male' | 'Female'>('All');
  const [sortByTNR, setSortByTNR] = useState<'All' | 'Yes' | 'No'>('All');
  const [sortByStatus, setSortByStatus] = useState<'All' | 'Stray' | 'Homed'>('All');
  const [sortByAdoption, setSortByAdoption] = useState<'All' | 'Yes' | 'No'>('All');
  const [sortByCluster, setSortByCluster] = useState('All');
  const [showSortModal, setShowSortModal] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const clustersList = ['Cluster A', 'Cluster B', 'Cluster C', 'Cluster D', 'Cluster E', 'Cluster F', 'Cluster G', 'Cluster H', 'Cluster I', 'Cluster J', 'Cluster K', 'Cluster L', 'Cluster M', 'Cluster N', 'Cluster O', 'Cluster P', 'Cluster Q', 'Cluster R', 'Cluster S', 'Cluster T', 'Cluster U', 'Cluster V', 'Cluster W', 'Cluster X', 'Cluster Y', 'Cluster Z', 'Cluster Central Park'];

  // Load from localStorage on mount
useEffect(() => {
  const loadCats = async () => {
    const catsFromDB = await fetchCats();
    setAllCats(catsFromDB);
  };

  loadCats();

  const interests = localStorage.getItem('adoption-interests');
  if (interests) {
    setAdoptionInterests(JSON.parse(interests));
  }
}, []);

  // Save to localStorage and Supabase whenever cats change
  const saveCats = async (updatedCats: Cat[]) => {
    setAllCats(updatedCats);
    
    // Save to Supabase if configured
    if (supabase) {
      try {
        const batchSize = 5;
        for (let i = 0; i < updatedCats.length; i += batchSize) {
          const batch = updatedCats.slice(i, i + batchSize);
          for (const cat of batch) {
            const { error: deleteError } = await supabase
              .from('cats')
              .delete()
              .eq('id', cat.id);
            
            if (deleteError && deleteError.code !== 'PGRST116') {
              console.warn(`Error deleting cat ${cat.id}:`, deleteError);
            }

            const insertData = {
              id: cat.id,
              name: cat.name,
              breed: cat.breed,
              gender: cat.gender,
              status: cat.status,
              tnr: cat.tnr,
              image: cat.image,
              description: cat.description,
              location: cat.location,
              spotted_date: cat.spottedDate,
              free_for_adoption: cat.freeForAdoption || false,
              adoption_cluster: cat.adoptionCluster || null,
              adoption_email: cat.adoptionEmail || null,
            };

            const { error: insertError } = await supabase
              .from('cats')
              .insert(insertData);

            if (insertError) {
              console.error(`[v0] Error saving cat ${cat.id}:`, insertError);
              console.error(`[v0] Insert data was:`, insertData);
            } else {
              console.log(`[v0] Successfully saved cat ${cat.name} to Supabase`);
            }
          }
        }
      } catch (err) {
        console.error('[v0] Exception saving cats to Supabase:', err);
      }
    }
  };

  const handleAddNew = () => {
    // Generate a proper UUID v4 for the new cat
    const generateUUID = () => {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    };

    const newCat: Cat = {
      id: generateUUID(),
      name: '',
      breed: '',
      gender: 'Male',
      status: 'Stray',
      tnr: false,
      image: '',
      description: '',
      location: '',
      spottedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      vetBills: [],
      freeForAdoption: false,
      adoptionCluster: 'All',
      adoptionEmail: ''
    };
    setEditingCat(newCat);
    setIsAddingNew(true);
  };

  const handleSave = async () => {
    if (!editingCat) return;

    if (isAddingNew) {
      await saveCats([...allCats, editingCat]);
      setIsAddingNew(false);
    } else {
      await saveCats(allCats.map(c => c.id === editingCat.id ? editingCat : c));
    }
    setEditingCat(null);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this cat?')) {
      const updatedCats = allCats.filter(c => c.id !== id);
      await saveCats(updatedCats);
      
      // Also delete from Supabase
      if (supabase) {
        const { error } = await supabase
          .from('cats')
          .delete()
          .eq('id', id);
        
        if (error) {
          console.warn('[v0] Error deleting cat from Supabase:', error);
        } else {
          console.log(`[v0] Deleted cat ${id} from Supabase`);
        }
      }
    }
  };

  const handleCancel = () => {
    setEditingCat(null);
    setIsAddingNew(false);
  };

  const handleImageUpload = async (file: File) => {
    if (!file) return;

    try {
      setIsUploadingImage(true);

      // Create a unique filename with timestamp
      const fileExt = file.name.split('.').pop();
      const fileName = `${editingCat?.id || 'cat'}-${Date.now()}.${fileExt}`;
      const filePath = `cat-images/${fileName}`;

      // Upload to Supabase Storage
      const { data, error } = await supabase.storage
        .from('dreamteam-cats')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        alert(`Upload failed: ${error.message}`);
        setIsUploadingImage(false);
        return;
      }

      // Get the public URL
      const { data: publicUrlData } = supabase.storage
        .from('dreamteam-cats')
        .getPublicUrl(filePath);

      if (editingCat && publicUrlData) {
        setEditingCat({
          ...editingCat,
          image: publicUrlData.publicUrl
        });
      }
    } catch (error) {
      console.error('Image upload error:', error);
      alert('Failed to upload image');
    } finally {
      setIsUploadingImage(false);
    }
  };

  const filteredCats = allCats
    .filter(cat =>
      (cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cat.breed.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (sortByGender === 'All' || cat.gender === sortByGender) &&
      (sortByTNR === 'All' || (sortByTNR === 'Yes' ? cat.tnr : !cat.tnr)) &&
      (sortByStatus === 'All' || cat.status === sortByStatus) &&
      (sortByAdoption === 'All' || (sortByAdoption === 'Yes' ? cat.freeForAdoption : !cat.freeForAdoption)) &&
      (sortByCluster === 'All' || cat.adoptionCluster === sortByCluster)
    )
    .sort((a, b) => {
      // Primary sort: by cluster
      const clusterA = a.adoptionCluster || 'z-unknown'; // Sort unknowns to end
      const clusterB = b.adoptionCluster || 'z-unknown';
      const clusterCompare = clusterA.localeCompare(clusterB);
      
      if (clusterCompare !== 0) return clusterCompare;
      
      // Secondary sorts within same cluster
      // Sort by gender (Female first, then Male)
      const genderOrder = { 'Female': 0, 'Male': 1 };
      const genderCompare = (genderOrder[a.gender as keyof typeof genderOrder] || 2) - (genderOrder[b.gender as keyof typeof genderOrder] || 2);
      if (genderCompare !== 0) return genderCompare;
      
      // Sort by TNR status (TNR'd first)
      const tnrCompare = (b.tnr ? 1 : 0) - (a.tnr ? 1 : 0);
      if (tnrCompare !== 0) return tnrCompare;
      
      // Sort by status (Stray first, then Homed)
      const statusOrder = { 'Stray': 0, 'Homed': 1 };
      const statusCompare = (statusOrder[a.status as keyof typeof statusOrder] || 2) - (statusOrder[b.status as keyof typeof statusOrder] || 2);
      if (statusCompare !== 0) return statusCompare;
      
      // Sort by free for adoption (Yes first)
      const adoptionCompare = (b.freeForAdoption ? 1 : 0) - (a.freeForAdoption ? 1 : 0);
      return adoptionCompare;
    });

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`}>
      <Header />
      
      <div className="flex-1 max-w-[1400px] w-full mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className={`font-['Fredoka'] font-semibold text-[28px] sm:text-[36px] md:text-[44px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
              Admin Dashboard
            </h1>
            <p className={`font-['Nunito'] text-[14px] sm:text-[16px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
              Manage all cats and their information
            </p>
          </div>
          <button
            onClick={handleAddNew}
            className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-[12px] sm:rounded-[16px] px-4 py-2 sm:px-6 sm:py-3 flex items-center gap-2 font-['Fredoka'] font-medium text-[14px] sm:text-[16px] transition-colors shadow-lg whitespace-nowrap"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
            Add New Cat
          </button>
        </div>

        {/* Search and Sort Bar */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className={`flex-1 max-w-[400px] rounded-[16px] border ${isDarkMode ? 'border-[rgba(255,255,255,0.23)] bg-[#1a2028]' : 'border-[rgba(0,0,0,0.23)] bg-white'}`}>
            <div className="flex items-center px-4 py-2.5">
              <svg className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search cats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 bg-transparent border-none outline-none font-['Nunito'] text-[16px] ${isDarkMode ? 'text-[#f4f7f9] placeholder:text-[#b5c0c8]' : 'text-[#2d3436] placeholder:text-[#636e72]'} placeholder:opacity-60`}
              />
            </div>
          </div>

          {/* Sort Button */}
          <button
            onClick={() => setShowSortModal(true)}
            className={`p-3 rounded-[12px] transition-all duration-200 ${isDarkMode ? 'bg-[#1a2028] hover:bg-[#2a3238] text-[#b5c0c8]' : 'bg-gray-100 hover:bg-gray-200 text-[#636e72]'}`}
          >
            <Sliders className="w-5 h-5" />
          </button>
        </div>

        {/* Sort Modal */}
        {showSortModal && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setShowSortModal(false)} />
            <div className={`fixed top-24 right-6 w-72 p-6 rounded-[16px] shadow-2xl z-50 ${isDarkMode ? 'bg-[#1a2028] border border-[rgba(255,255,255,0.1)]' : 'bg-white border border-[rgba(0,0,0,0.1)]'}`} onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`font-['Nunito'] font-semibold text-[16px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Filters</h3>
                <button onClick={() => setShowSortModal(false)} className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-[rgba(255,255,255,0.1)]' : 'hover:bg-[rgba(0,0,0,0.05)]'}`}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4">
                {/* Gender */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[13px] mb-2 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Gender</label>
                  <select
                    value={sortByGender}
                    onChange={(e) => setSortByGender(e.target.value as 'All' | 'Male' | 'Female')}
                    className={`w-full px-3 py-2 rounded-[8px] border font-['Nunito'] text-[14px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.15)] text-[#f4f7f9]' : 'bg-gray-50 border-[rgba(0,0,0,0.1)] text-[#2d3436]'} focus:outline-none focus:border-[#4ecdc4] cursor-pointer`}
                  >
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* TNR */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[13px] mb-2 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>TNR&apos;d Status</label>
                  <select
                    value={sortByTNR}
                    onChange={(e) => setSortByTNR(e.target.value as 'All' | 'Yes' | 'No')}
                    className={`w-full px-3 py-2 rounded-[8px] border font-['Nunito'] text-[14px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.15)] text-[#f4f7f9]' : 'bg-gray-50 border-[rgba(0,0,0,0.1)] text-[#2d3436]'} focus:outline-none focus:border-[#4ecdc4] cursor-pointer`}
                  >
                    <option value="All">All</option>
                    <option value="Yes">TNR&apos;d</option>
                    <option value="No">Not TNR&apos;d</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[13px] mb-2 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Status</label>
                  <select
                    value={sortByStatus}
                    onChange={(e) => setSortByStatus(e.target.value as 'All' | 'Stray' | 'Homed')}
                    className={`w-full px-3 py-2 rounded-[8px] border font-['Nunito'] text-[14px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.15)] text-[#f4f7f9]' : 'bg-gray-50 border-[rgba(0,0,0,0.1)] text-[#2d3436]'} focus:outline-none focus:border-[#4ecdc4] cursor-pointer`}
                  >
                    <option value="All">All</option>
                    <option value="Stray">Stray</option>
                    <option value="Homed">Homed</option>
                  </select>
                </div>

                {/* Free for Adoption */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[13px] mb-2 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Free for Adoption</label>
                  <select
                    value={sortByAdoption}
                    onChange={(e) => setSortByAdoption(e.target.value as 'All' | 'Yes' | 'No')}
                    className={`w-full px-3 py-2 rounded-[8px] border font-['Nunito'] text-[14px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.15)] text-[#f4f7f9]' : 'bg-gray-50 border-[rgba(0,0,0,0.1)] text-[#2d3436]'} focus:outline-none focus:border-[#4ecdc4] cursor-pointer`}
                  >
                    <option value="All">All</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                {/* Cluster */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[13px] mb-2 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Cluster</label>
                  <select
                    value={sortByCluster}
                    onChange={(e) => setSortByCluster(e.target.value)}
                    className={`w-full px-3 py-2 rounded-[8px] border font-['Nunito'] text-[14px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.15)] text-[#f4f7f9]' : 'bg-gray-50 border-[rgba(0,0,0,0.1)] text-[#2d3436]'} focus:outline-none focus:border-[#4ecdc4] cursor-pointer`}
                  >
                    <option value="All">All Clusters</option>
                    {clustersList.map((cluster) => (
                      <option key={cluster} value={cluster}>
                        {cluster}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Edit Form Modal */}
        {editingCat && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6 overflow-y-auto">
            <div className={`${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} rounded-[24px] p-8 max-w-[700px] w-full max-h-[90vh] overflow-y-auto shadow-2xl`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className={`font-['Fredoka'] font-semibold text-[28px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {isAddingNew ? 'Add New Cat' : 'Edit Cat'}
                </h2>
                <button onClick={handleCancel} className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-[rgba(255,255,255,0.1)]' : 'hover:bg-[rgba(0,0,0,0.05)]'}`}>
                  <X className={`w-6 h-6 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} />
                </button>
              </div>

              <div className="space-y-4">
                {/* Name */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Name *</label>
                  <input
                    type="text"
                    value={editingCat.name}
                    onChange={(e) => setEditingCat({ ...editingCat, name: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b]`}
                    placeholder="Enter cat name"
                  />
                </div>

                {/* Breed */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Breed *</label>
                  <input
                    type="text"
                    value={editingCat.breed}
                    onChange={(e) => setEditingCat({ ...editingCat, breed: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b]`}
                    placeholder="e.g., Domestic Short Hair/Tabby"
                  />
                </div>

                {/* Gender & Status Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Gender</label>
                    <select
                      value={editingCat.gender}
                      onChange={(e) => setEditingCat({ ...editingCat, gender: e.target.value as 'Male' | 'Female' })}
                      className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b] cursor-pointer`}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>

                  <div>
                    <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Status</label>
                    <select
                      value={editingCat.status}
                      onChange={(e) => setEditingCat({ ...editingCat, status: e.target.value as 'Stray' | 'Homed' })}
                      className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b] cursor-pointer`}
                    >
                      <option value="Stray">Stray</option>
                      <option value="Homed">Homed</option>
                    </select>
                  </div>
                </div>

                {/* TNR Checkbox */}
                <div>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingCat.tnr}
                      onChange={(e) => setEditingCat({ ...editingCat, tnr: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-[#ff6b6b] text-[#ff6b6b] focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-0 cursor-pointer"
                    />
                    <span className={`ml-3 font-['Nunito'] text-[16px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>TNR'd (Trap-Neuter-Release)</span>
                  </label>
                </div>

                {/* Cat Image */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Cat Image *</label>
                  
                  {/* Image Preview */}
                  {editingCat.image && (
                    <div className="mb-3 relative">
                      <img
                        src={editingCat.image}
                        alt="Cat preview"
                        className="w-full h-40 object-cover rounded-[12px]"
                      />
                      <button
                        type="button"
                        onClick={() => setEditingCat({ ...editingCat, image: '' })}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}

                  {/* File Input */}
                  <label className={`flex items-center justify-center w-full px-4 py-8 rounded-[12px] border-2 border-dashed cursor-pointer transition-colors ${
                    isDarkMode
                      ? 'bg-[#10141a] border-[#4ecdc4] hover:border-[#3db8b0]'
                      : 'bg-[#f8f9fa] border-[#4ecdc4] hover:border-[#3db8b0]'
                  } ${isUploadingImage ? 'opacity-50 cursor-not-allowed' : ''}`}>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          handleImageUpload(file);
                        }
                      }}
                      disabled={isUploadingImage}
                      className="hidden"
                    />
                    <div className="text-center">
                      <Upload className={`w-8 h-8 mx-auto mb-2 ${isDarkMode ? 'text-[#4ecdc4]' : 'text-[#4ecdc4]'}`} />
                      <p className={`font-['Nunito'] font-semibold ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>
                        {isUploadingImage ? 'Uploading...' : 'Click to upload or drag and drop'}
                      </p>
                      <p className={`font-['Nunito'] text-[12px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </label>
                </div>

                {/* Location */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Location *</label>
                  <input
                    type="text"
                    value={editingCat.location}
                    onChange={(e) => setEditingCat({ ...editingCat, location: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b]`}
                    placeholder="e.g., near the park"
                  />
                </div>

                {/* Spotted Date */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Spotted Date</label>
                  <input
                    type="text"
                    value={editingCat.spottedDate}
                    onChange={(e) => setEditingCat({ ...editingCat, spottedDate: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b]`}
                    placeholder="e.g., February 2025"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Description *</label>
                  <textarea
                    value={editingCat.description}
                    onChange={(e) => setEditingCat({ ...editingCat, description: e.target.value })}
                    rows={4}
                    className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b] resize-vertical`}
                    placeholder="Tell us about this cat..."
                  />
                </div>

                {/* Free for Adoption Checkbox */}
                <div className={`border-t pt-4 ${isDarkMode ? 'border-[rgba(255,255,255,0.1)]' : 'border-[rgba(0,0,0,0.1)]'}`}>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={editingCat.freeForAdoption || false}
                      onChange={(e) => setEditingCat({ ...editingCat, freeForAdoption: e.target.checked })}
                      className="w-5 h-5 rounded border-2 border-[#4ecdc4] text-[#4ecdc4] focus:ring-2 focus:ring-[#4ecdc4] focus:ring-offset-0 cursor-pointer"
                    />
                    <span className={`ml-3 font-['Nunito'] text-[16px] font-semibold ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Free for Adoption</span>
                  </label>
                </div>

                {/* Adoption Cluster & Email */}
                <div className="space-y-4 pt-4">
                  <div>
                    <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Cluster Location</label>
                    <select
                      value={editingCat.adoptionCluster || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, adoptionCluster: e.target.value })}
                      disabled={clustersLoading}
                      className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#4ecdc4] cursor-pointer ${clustersLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <option value="">{clustersLoading ? 'Loading clusters...' : 'Select a cluster...'}</option>
                      {clusters.map((cluster) => (
                        <option key={cluster.id} value={cluster.cluster_name}>
                          {cluster.cluster_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Cluster Email</label>
                    <input
                      type="email"
                      value={editingCat.adoptionEmail || ''}
                      onChange={(e) => setEditingCat({ ...editingCat, adoptionEmail: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#4ecdc4]`}
                      placeholder="e.g., cluster@dreamteam.com"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSave}
                    disabled={!editingCat.name || !editingCat.breed || !editingCat.image || !editingCat.description || !editingCat.location}
                    className="flex-1 bg-[#4ecdc4] hover:bg-[#3db8b0] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-[16px] px-6 py-3 flex items-center justify-center gap-2 font-['Fredoka'] font-medium text-[16px] transition-colors shadow-lg"
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <Save className="w-5 h-5" />
                    Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className={`flex-1 rounded-[16px] px-6 py-3 flex items-center justify-center gap-2 font-['Fredoka'] font-medium text-[16px] transition-colors ${isDarkMode ? 'bg-[#2d3436] hover:bg-[#3d4446] text-white' : 'bg-gray-200 hover:bg-gray-300 text-[#2d3436]'}`}
                    style={{ fontVariationSettings: "'wdth' 100" }}
                  >
                    <X className="w-5 h-5" />
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

            {/* Cats Table */}
            <div className={`rounded-[24px] ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} shadow-lg overflow-hidden`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${isDarkMode ? 'bg-[#0f141a]' : 'bg-[#f8f9fa]'}`}>
                <tr>
                  <th className={`px-6 py-4 text-left font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Image</th>
                  <th className={`px-6 py-4 text-left font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Name</th>
                  <th className={`px-6 py-4 text-left font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Breed</th>
                  <th className={`px-6 py-4 text-left font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Gender</th>
                  <th className={`px-6 py-4 text-left font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Status</th>
                  <th className={`px-6 py-4 text-left font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>TNR</th>
                  <th className={`px-6 py-4 text-center font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Interests</th>
                  <th className={`px-6 py-4 text-center font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Free for Adoption</th>
                  <th className={`px-6 py-4 text-left font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Location</th>
                  <th className={`px-6 py-4 text-center font-['Fredoka'] font-medium text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCats.map((cat, index) => (
                  <tr
                    key={cat.id}
                    className={`border-t ${isDarkMode ? 'border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.03)]' : 'border-[rgba(0,0,0,0.1)] hover:bg-[rgba(0,0,0,0.02)]'} transition-colors`}
                  >
                    <td className="px-6 py-4">
                      <img
                        src={cat.image}
                        alt={cat.name}
                        className="w-12 h-12 rounded-[8px] object-cover"
                      />
                    </td>
                    <td className={`px-6 py-4 font-['Fredoka'] text-[16px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      {cat.name}
                    </td>
                    <td className={`px-6 py-4 font-['Nunito'] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                      {cat.breed}
                    </td>
                    <td className={`px-6 py-4 font-['Nunito'] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                      {cat.gender}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-['Nunito'] font-semibold ${cat.status === 'Stray' ? 'bg-[#ff6b6b]/20 text-[#ff6b6b]' : 'bg-[#4ecdc4]/20 text-[#4ecdc4]'}`}>
                        {cat.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-['Nunito'] font-semibold ${cat.tnr ? 'bg-[#2e7d32]/20 text-[#2e7d32]' : 'bg-gray-400/20 text-gray-500'}`}>
                        {cat.tnr ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {adoptionInterests[cat.id] ? (
                        <div className="flex items-center justify-center gap-2">
                          <Heart className="w-4 h-4 text-[#ff6b6b]" fill="#ff6b6b" />
                          <span className={`font-['Fredoka'] font-semibold text-[14px] text-[#ff6b6b]`} style={{ fontVariationSettings: "'wdth' 100" }}>
                            Interested
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <span className={`font-['Nunito'] text-[14px] ${isDarkMode ? 'text-[#636e72]' : 'text-[#b5c0c8]'}`}>
                            None
                          </span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center">
                        {cat.freeForAdoption ? (
                          <span className="inline-block px-3 py-1 rounded-full text-[12px] font-['Nunito'] font-semibold bg-[#4ecdc4]/20 text-[#4ecdc4]">
                            Yes
                          </span>
                        ) : (
                          <span className={`inline-block px-3 py-1 rounded-full text-[12px] font-['Nunito'] font-semibold ${isDarkMode ? 'bg-[rgba(181,192,200,0.1)] text-[#b5c0c8]' : 'bg-gray-300/20 text-[#636e72]'}`}>
                            No
                          </span>
                        )}
                      </div>
                    </td>
                    <td className={`px-6 py-4 font-['Nunito'] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'} max-w-[200px] truncate`}>
                      {cat.adoptionCluster && cat.location 
                        ? `${cat.adoptionCluster}, ${cat.location}` 
                        : cat.location}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => {
                            setEditingCat(cat);
                            setIsAddingNew(false);
                          }}
                          className={`p-2 rounded-[8px] ${isDarkMode ? 'hover:bg-[rgba(255,255,255,0.1)]' : 'hover:bg-[rgba(0,0,0,0.05)]'} transition-colors`}
                          title="Edit"
                        >
                          <Edit2 className={`w-5 h-5 ${isDarkMode ? 'text-[#4ecdc4]' : 'text-[#3db8b0]'}`} />
                        </button>
                        <button
                          onClick={() => handleDelete(cat.id)}
                          className={`p-2 rounded-[8px] ${isDarkMode ? 'hover:bg-[rgba(255,255,255,0.1)]' : 'hover:bg-[rgba(0,0,0,0.05)]'} transition-colors`}
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5 text-[#ff6b6b]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCats.length === 0 && (
            <div className="text-center py-12">
              <p className={`font-['Nunito'] text-[16px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                No cats found. {searchQuery ? 'Try a different search.' : 'Add your first cat!'}
              </p>
            </div>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          <div className={`rounded-[20px] p-6 ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} shadow-md`}>
            <div className={`font-['Nunito'] text-[14px] mb-1 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Total Cats</div>
            <div className={`font-['Fredoka'] font-semibold text-[24px] sm:text-[28px] md:text-[32px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
              {allCats.length}
            </div>
          </div>
          <div className={`rounded-[20px] p-6 ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} shadow-md`}>
            <div className={`font-['Nunito'] text-[14px] mb-1 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Not TNR&apos;d</div>
            <div className={`font-['Fredoka'] font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-[#ff6b6b]`} style={{ fontVariationSettings: "'wdth' 100" }}>
              {allCats.filter(cat => !cat.tnr).length}
            </div>
          </div>
          <div className={`rounded-[20px] p-6 ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} shadow-md`}>
            <div className={`font-['Nunito'] text-[14px] mb-1 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Stray</div>
            <div className={`font-['Fredoka'] font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-[#4ecdc4]`} style={{ fontVariationSettings: "'wdth' 100" }}>
              {allCats.filter(cat => cat.status === 'Stray').length}
            </div>
          </div>
          <div className={`rounded-[20px] p-6 ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} shadow-md`}>
            <div className={`font-['Nunito'] text-[14px] mb-1 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Homed</div>
            <div className={`font-['Fredoka'] font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-[#2e7d32]`} style={{ fontVariationSettings: "'wdth' 100" }}>
              {allCats.filter(cat => cat.status === 'Homed').length}
            </div>
          </div>
          <div className={`rounded-[20px] p-6 ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} shadow-md`}>
            <div className={`font-['Nunito'] text-[14px] mb-1 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Free for Adoption</div>
            <div className={`font-['Fredoka'] font-semibold text-[24px] sm:text-[28px] md:text-[32px] text-[#1a95b5]`} style={{ fontVariationSettings: "'wdth' 100" }}>
              {allCats.filter(cat => cat.freeForAdoption).length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
