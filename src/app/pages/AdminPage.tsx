import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { useDarkMode } from '../context/DarkModeContext';
import { Cat, cats as initialCats, homedCats as initialHomedCats } from '../data/cats';
import { Plus, Edit2, Trash2, Save, X } from 'lucide-react';

export function AdminPage() {
  const { isDarkMode } = useDarkMode();
  const [allCats, setAllCats] = useState<Cat[]>([...initialCats, ...initialHomedCats]);
  const [editingCat, setEditingCat] = useState<Cat | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('dreamTeamCats');
    if (stored) {
      setAllCats(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage whenever cats change
  const saveCats = (updatedCats: Cat[]) => {
    setAllCats(updatedCats);
    localStorage.setItem('dreamTeamCats', JSON.stringify(updatedCats));
  };

  const handleAddNew = () => {
    const newCat: Cat = {
      id: `cat-${Date.now()}`,
      name: '',
      breed: '',
      gender: 'Male',
      status: 'Stray',
      tnr: false,
      image: '',
      description: '',
      location: '',
      spottedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      vetBills: []
    };
    setEditingCat(newCat);
    setIsAddingNew(true);
  };

  const handleSave = () => {
    if (!editingCat) return;

    if (isAddingNew) {
      saveCats([...allCats, editingCat]);
      setIsAddingNew(false);
    } else {
      saveCats(allCats.map(c => c.id === editingCat.id ? editingCat : c));
    }
    setEditingCat(null);
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this cat?')) {
      saveCats(allCats.filter(c => c.id !== id));
    }
  };

  const handleCancel = () => {
    setEditingCat(null);
    setIsAddingNew(false);
  };

  const filteredCats = allCats.filter(cat =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.breed.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`}>
      <Header />
      
      <div className="flex-1 max-w-[1400px] w-full mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className={`font-['Fredoka'] font-semibold text-[44px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
              Admin Dashboard
            </h1>
            <p className={`font-['Nunito'] text-[16px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
              Manage all cats and their information
            </p>
          </div>
          <button
            onClick={handleAddNew}
            className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white rounded-[16px] px-6 py-3 flex items-center gap-2 font-['Fredoka'] font-medium text-[16px] transition-colors shadow-lg"
            style={{ fontVariationSettings: "'wdth' 100" }}
          >
            <Plus className="w-5 h-5" />
            Add New Cat
          </button>
        </div>

        {/* Search */}
        <div className={`mb-6 max-w-[400px] rounded-[16px] border ${isDarkMode ? 'border-[rgba(255,255,255,0.23)] bg-[#1a2028]' : 'border-[rgba(0,0,0,0.23)] bg-white'}`}>
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

                {/* Image URL */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Image URL *</label>
                  <input
                    type="text"
                    value={editingCat.image}
                    onChange={(e) => setEditingCat({ ...editingCat, image: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b]`}
                    placeholder="e.g., https://example.com/cat.jpg"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Location *</label>
                  <input
                    type="text"
                    value={editingCat.location}
                    onChange={(e) => setEditingCat({ ...editingCat, location: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b]`}
                    placeholder="e.g., Cluster O near the park"
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
                    <td className={`px-6 py-4 font-['Nunito'] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'} max-w-[200px] truncate`}>
                      {cat.location}
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
      </div>
    </div>
  );
}
