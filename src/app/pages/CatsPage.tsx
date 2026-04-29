import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Header } from '../components/Header';
import { useDarkMode } from '../context/DarkModeContext';
import { cats, homedCats, fetchCats, Cat } from '../data/cats';
import { ChevronDown, ChevronUp, Filter, Scissors } from 'lucide-react';

export function CatsPage() {
  const { isDarkMode } = useDarkMode();
  const [allCats, setAllCats] = useState<Cat[]>([...cats, ...homedCats]);
  const [isLoading, setIsLoading] = useState(true);

  // Load from Supabase on mount, fallback to localStorage
  useEffect(() => {
    const loadCats = async () => {
      try {
        const fetchedCats = await fetchCats();
        if (fetchedCats.length > 0) {
          setAllCats(fetchedCats);
          console.log('[v0] Loaded cats from Supabase:', fetchedCats);
        } else {
          // Fallback to localStorage if Supabase is empty
          const stored = localStorage.getItem('dreamTeamCats');
          if (stored) {
            const parsedCats = JSON.parse(stored);
            setAllCats(parsedCats);
            console.log('[v0] Loaded cats from localStorage:', parsedCats);
          }
        }
      } catch (err) {
        console.error('[v0] Error loading cats:', err);
        // Fallback to localStorage on error
        const stored = localStorage.getItem('dreamTeamCats');
        if (stored) {
          try {
            const parsedCats = JSON.parse(stored);
            setAllCats(parsedCats);
          } catch (parseErr) {
            console.error('[v0] Error parsing localStorage cats:', parseErr);
          }
        }
      } finally {
        setIsLoading(false);
      }
    };

    loadCats();
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [showStray, setShowStray] = useState(true);
  const [showHomed, setShowHomed] = useState(true);
  const [showFilters, setShowFilters] = useState(false);
  const [filterTNR, setFilterTNR] = useState(false);
  const [filterAdoptable, setFilterAdoptable] = useState(false);
  const [filterGender, setFilterGender] = useState<'All' | 'Male' | 'Female'>('All');
  const [filterCluster, setFilterCluster] = useState('All');

  const clusters = ['Cluster A', 'Cluster B', 'Cluster C', 'Cluster D', 'Cluster E', 'Cluster F', 'Cluster G', 'Cluster H', 'Cluster I', 'Cluster J', 'Cluster K', 'Cluster L', 'Cluster M', 'Cluster N', 'Cluster O', 'Cluster P', 'Cluster Q', 'Cluster R', 'Cluster S', 'Cluster T', 'Cluster U', 'Cluster V', 'Cluster W', 'Cluster X', 'Cluster Y', 'Cluster Z', 'Cluster Central Park'];
  
  const filteredCats = allCats.filter(cat => {
    const matchesSearch = cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          cat.breed.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTNR = !filterTNR || cat.tnr;
    const matchesAdoptable = !filterAdoptable || cat.status === 'Stray';
    const matchesGender = filterGender === 'All' || cat.gender === filterGender;
    const matchesCluster = filterCluster === 'All' || cat.adoptionCluster === filterCluster;
    return matchesSearch && matchesTNR && matchesAdoptable && matchesGender && matchesCluster;
  });

  const strayCats = filteredCats.filter(c => c.status === 'Stray');
  const homed = filteredCats.filter(c => c.status === 'Homed');

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`}>
      <Header />
      
      <div className="flex-1 max-w-[1200px] w-full mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className={`font-['Fredoka'] font-semibold text-[28px] sm:text-[36px] md:text-[44px] mb-3 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            Meet Our Cats
          </h1>
          <p className={`font-['Fredoka'] font-medium text-[14px] sm:text-[16px] md:text-[17.6px] max-w-[600px] mx-auto ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            Each cat has a unique story. Click on any cat to learn more about them,<br />including their location and any pending vet bills.
          </p>
        </div>

        {/* Search Bar and Filter - Left Aligned */}
        <div className="flex items-center gap-4 mb-8 max-w-[400px]">
          {/* Search Bar */}
          <div className={`flex-1 relative rounded-[16px] border ${isDarkMode ? 'border-[rgba(255,255,255,0.23)] bg-[#1a2028]' : 'border-[rgba(0,0,0,0.23)] bg-white'}`}>
            <div className="flex items-center px-4 py-2.5">
              <svg className={`w-5 h-5 mr-3 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <input
                type="text"
                placeholder="Search cats by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`flex-1 bg-transparent border-none outline-none font-['Nunito'] text-[16px] ${isDarkMode ? 'text-[#f4f7f9] placeholder:text-[#b5c0c8]' : 'text-[#2d3436] placeholder:text-[#636e72]'} placeholder:opacity-60`}
              />
            </div>
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2.5 rounded-[17px] ${isDarkMode ? 'hover:bg-[rgba(255,255,255,0.05)]' : 'hover:bg-[rgba(0,0,0,0.05)]'} transition-colors`}
          >
            <Filter className={`w-6 h-6 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} />
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className={`mb-8 p-6 rounded-[24px] ${isDarkMode ? 'bg-[#1a2028] border border-[rgba(255,255,255,0.1)]' : 'bg-white border border-[rgba(0,0,0,0.1)]'} shadow-lg max-w-[400px]`}>
            <h3 className={`font-['Fredoka'] font-semibold text-[18px] mb-4 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Filters</h3>
            
            {/* Checkboxes */}
            <div className="space-y-3 mb-4">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterTNR}
                  onChange={(e) => setFilterTNR(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-[#ff6b6b] text-[#ff6b6b] focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-0 cursor-pointer"
                />
                <span className={`ml-3 font-['Nunito'] text-[16px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>TNR'd</span>
              </label>
              
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filterAdoptable}
                  onChange={(e) => setFilterAdoptable(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-[#ff6b6b] text-[#ff6b6b] focus:ring-2 focus:ring-[#ff6b6b] focus:ring-offset-0 cursor-pointer"
                />
                <span className={`ml-3 font-['Nunito'] text-[16px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Adoptable</span>
              </label>
            </div>

            {/* Gender Dropdown */}
            <div className="mb-4">
              <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Gender</label>
              <select
                value={filterGender}
                onChange={(e) => setFilterGender(e.target.value as any)}
                className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b] cursor-pointer`}
              >
                <option value="All">All Genders</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            {/* Cluster Dropdown */}
            <div>
              <label className={`block font-['Nunito'] font-semibold text-[14px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Cluster</label>
              <select
                value={filterCluster}
                onChange={(e) => setFilterCluster(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-[12px] border font-['Nunito'] text-[16px] ${isDarkMode ? 'bg-[#10141a] border-[rgba(255,255,255,0.23)] text-[#f4f7f9]' : 'bg-white border-[rgba(0,0,0,0.23)] text-[#2d3436]'} focus:outline-none focus:border-[#ff6b6b] cursor-pointer`}
              >
                <option value="All">All Clusters</option>
                {clusters.map((cluster) => (
                  <option key={cluster} value={cluster}>
                    {cluster}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Stray Cats Section */}
        <div className="mb-12">
          <button
            onClick={() => setShowStray(!showStray)}
            className={`flex items-center gap-3 mb-6 p-2 rounded-[12px] ${isDarkMode ? 'hover:bg-[rgba(255,255,255,0.05)]' : 'hover:bg-[rgba(0,0,0,0.05)]'} transition-colors`}
          >
            {showStray ? (
              <ChevronUp className={`w-6 h-6 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} />
            ) : (
              <ChevronDown className={`w-6 h-6 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} />
            )}
            <h2 className={`font-['Fredoka'] font-medium text-[24px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
              Stray Cats ({strayCats.length})
            </h2>
          </button>

          {showStray && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {strayCats.map((cat) => (
                <Link key={cat.id} to={`/cat/${cat.id}`} className="no-underline group">
                  <div className={`rounded-[24px] overflow-hidden hover:-translate-y-3 transition-all duration-300 ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} shadow-lg`}>
                    {/* Cat Image */}
                    <div className="relative aspect-square overflow-hidden">
                      <img 
                        src={cat.image} 
                        alt={cat.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {cat.tnr && (
                        <div className="absolute top-3 left-3 bg-[#2e7d32] rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                          <Scissors className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>

                    {/* Cat Info */}
                    <div className="p-4">
                      <h3 className={`font-['Fredoka'] font-semibold text-[20px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                        {cat.name}
                      </h3>
                      <p className={`font-['Nunito'] text-[14px] leading-relaxed line-clamp-2 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {showStray && strayCats.length === 0 && (
            <div className="text-center py-12">
              <p className={`font-['Nunito'] text-[16px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                No stray cats found matching your filters.
              </p>
            </div>
          )}
        </div>

        {/* Homed Cats Section */}
        {homed.length > 0 && (
          <div>
            <button
              onClick={() => setShowHomed(!showHomed)}
              className={`flex items-center gap-3 mb-6 p-2 rounded-[12px] ${isDarkMode ? 'hover:bg-[rgba(255,255,255,0.05)]' : 'hover:bg-[rgba(0,0,0,0.05)]'} transition-colors`}
            >
              {showHomed ? (
                <ChevronUp className={`w-6 h-6 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} />
              ) : (
                <ChevronDown className={`w-6 h-6 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} />
              )}
              <h2 className={`font-['Fredoka'] font-medium text-[24px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                Homed Cats ({homed.length})
              </h2>
            </button>

            {showHomed && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {homed.map((cat) => (
                  <Link key={cat.id} to={`/cat/${cat.id}`} className="no-underline group">
                    <div className={`rounded-[24px] overflow-hidden hover:-translate-y-3 transition-all duration-300 ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'} shadow-lg`}>
                      <div className="relative aspect-square overflow-hidden">
                        <img 
                          src={cat.image} 
                          alt={cat.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className={`font-['Fredoka'] font-semibold text-[20px] mb-2 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                          {cat.name}
                        </h3>
                        <p className={`font-['Nunito'] text-[14px] leading-relaxed line-clamp-2 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                          {cat.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
