import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router';
import { Header } from '../components/Header';
import { cats, homedCats, fetchCats, Cat } from '../data/cats';
import { ChevronLeft, ChevronRight, MapPin, Check, Heart, Home, FileText, Download, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useDarkMode } from '../context/DarkModeContext';
import { supabase } from '../lib/supabaseClient';

// Bills Section Component
function BillsSection({ bills, isDarkMode, formatDate }: { bills: any[]; isDarkMode: boolean; formatDate: (date: string) => string }) {
  const [showAllPaid, setShowAllPaid] = useState(false);
  const [showAllUnpaid, setShowAllUnpaid] = useState(false);

  const paidBills = bills.filter(bill => bill.paid);
  const unpaidBills = bills.filter(bill => !bill.paid);
  
  const displayPaidBills = showAllPaid ? paidBills : paidBills.slice(0, 2);
  const displayUnpaidBills = showAllUnpaid ? unpaidBills : unpaidBills.slice(0, 2);

  const totalBills = paidBills.length + unpaidBills.length;
  const hasMorePaid = paidBills.length > 2;
  const hasMoreUnpaid = unpaidBills.length > 2;
  const totalMore = (showAllPaid ? 0 : Math.max(0, paidBills.length - 2)) + (showAllUnpaid ? 0 : Math.max(0, unpaidBills.length - 2));

  return (
    <div>
      <div className={`font-['Fredoka:SemiBold',sans-serif] font-semibold text-[20px] mb-[16px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
        Veterinary Bills
      </div>

      {totalBills > 0 ? (
        <div>
          {/* Paid Bills Section */}
          {paidBills.length > 0 && (
            <div className="mb-6">
              <div className={`font-['Nunito:SemiBold',sans-serif] font-semibold text-[14px] mb-[12px] ${isDarkMode ? 'text-[#7a9f93]' : 'text-[#636e72]'}`}>
                Paid Bills
              </div>
              <div className="space-y-3">
                {displayPaidBills.map((bill, index) => (
                  <div 
                    key={index}
                    className={`border-l-4 border-[#4ecdc4] rounded-[16px] p-[16px] flex items-center justify-between gap-[16px] max-sm:flex-col max-sm:items-start ${isDarkMode ? 'bg-[rgba(78,205,196,0.06)]' : 'bg-[rgba(78,205,196,0.04)]'}`}
                    style={{ boxShadow: isDarkMode ? '0px 2px 1px -1px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.28), 0px 1px 3px 0px rgba(0,0,0,0.24)' : '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}
                  >
                    <div className="flex items-center gap-[16px] flex-1">
                      <div className="w-[24px] h-[24px] rounded-full bg-[#4ecdc4] flex items-center justify-center flex-shrink-0">
                        <Check className="w-[16px] h-[16px] text-white" />
                      </div>
                      <div>
                        <div className={`font-['Nunito:SemiBold',sans-serif] font-semibold text-[16px] mb-[4px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>
                          {bill.description}
                        </div>
                        <div className={`font-['Nunito:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                          Paid: {formatDate(bill.date)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-[12px] flex-shrink-0">
                      {bill.file_url && (
                        <a
                          href={bill.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-[6px] px-[8px] py-[4px] rounded-[8px] bg-[#4ecdc4]/20 hover:bg-[#4ecdc4]/30 transition-colors"
                        >
                          <Download className="w-[14px] h-[14px] text-[#4ecdc4]" />
                          <span className="font-['Nunito:SemiBold',sans-serif] text-[#4ecdc4] text-[12px]">View</span>
                        </a>
                      )}
                      <div className="border border-[rgba(46,125,50,0.7)] rounded-[16px] px-[11px] py-[6px]">
                        <span className="font-['Nunito:SemiBold',sans-serif] text-[#2e7d32] text-[13px]">AED {bill.amount}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {hasMorePaid && !showAllPaid && (
                  <button
                    onClick={() => setShowAllPaid(true)}
                    className={`w-full py-2 rounded-[12px] font-['Nunito:SemiBold',sans-serif] text-[14px] transition-colors ${isDarkMode ? 'bg-[rgba(78,205,196,0.08)] hover:bg-[rgba(78,205,196,0.15)] text-[#4ecdc4]' : 'bg-[rgba(78,205,196,0.08)] hover:bg-[rgba(78,205,196,0.15)] text-[#4ecdc4]'}`}
                  >
                    Show {paidBills.length - 2} more paid bills
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Unpaid Bills Section */}
          {unpaidBills.length > 0 && (
            <div className="mb-6">
              <div className={`font-['Nunito:SemiBold',sans-serif] font-semibold text-[14px] mb-[12px] ${isDarkMode ? 'text-[#d88080]' : 'text-[#636e72]'}`}>
                Pending Bills
              </div>
              <div className="space-y-3">
                {displayUnpaidBills.map((bill, index) => (
                  <div 
                    key={index}
                    className={`border-l-4 border-[#ff6b6b] rounded-[16px] p-[16px] flex items-center justify-between gap-[16px] max-sm:flex-col max-sm:items-start ${isDarkMode ? 'bg-[rgba(255,107,107,0.06)]' : 'bg-[rgba(255,107,107,0.04)]'}`}
                    style={{ boxShadow: isDarkMode ? '0px 2px 1px -1px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.28), 0px 1px 3px 0px rgba(0,0,0,0.24)' : '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}
                  >
                    <div className="flex items-center gap-[16px] flex-1">
                      <div className="w-[24px] h-[24px] rounded-full bg-[#ff6b6b] flex items-center justify-center flex-shrink-0">
                        <AlertCircle className="w-[16px] h-[16px] text-white" />
                      </div>
                      <div>
                        <div className={`font-['Nunito:SemiBold',sans-serif] font-semibold text-[16px] mb-[4px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>
                          {bill.description}
                        </div>
                        <div className={`font-['Nunito:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                          Due: {formatDate(bill.date)}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-[12px] flex-shrink-0">
                      {bill.file_url && (
                        <a
                          href={bill.file_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-[6px] px-[8px] py-[4px] rounded-[8px] bg-[#ff6b6b]/20 hover:bg-[#ff6b6b]/30 transition-colors"
                        >
                          <Download className="w-[14px] h-[14px] text-[#ff6b6b]" />
                          <span className="font-['Nunito:SemiBold',sans-serif] text-[#ff6b6b] text-[12px]">View</span>
                        </a>
                      )}
                      <div className="border border-[rgba(255,107,107,0.7)] rounded-[16px] px-[11px] py-[6px]">
                        <span className="font-['Nunito:SemiBold',sans-serif] text-[#ff6b6b] text-[13px]">AED {bill.amount}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {hasMoreUnpaid && !showAllUnpaid && (
                  <button
                    onClick={() => setShowAllUnpaid(true)}
                    className={`w-full py-2 rounded-[12px] font-['Nunito:SemiBold',sans-serif] text-[14px] transition-colors ${isDarkMode ? 'bg-[rgba(255,107,107,0.08)] hover:bg-[rgba(255,107,107,0.15)] text-[#ff6b6b]' : 'bg-[rgba(255,107,107,0.08)] hover:bg-[rgba(255,107,107,0.15)] text-[#ff6b6b]'}`}
                  >
                    Show {unpaidBills.length - 2} more pending bills
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Show all bills button - only if there are more bills */}
          {totalMore > 0 && !showAllPaid && !showAllUnpaid && (
            <button
              onClick={() => {
                if (hasMorePaid) setShowAllPaid(true);
                if (hasMoreUnpaid) setShowAllUnpaid(true);
              }}
              className={`w-full py-2 rounded-[12px] font-['Nunito:SemiBold',sans-serif] text-[14px] transition-colors ${isDarkMode ? 'border border-[rgba(180,192,200,0.3)] text-[#b5c0c8] hover:bg-[rgba(180,192,200,0.1)]' : 'border border-[rgba(99,110,114,0.3)] text-[#636e72] hover:bg-[rgba(99,110,114,0.1)]'}`}
            >
              Show all bills
            </button>
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-[16px] py-[48px]">
          <div className="w-[80px] h-[80px] rounded-full bg-[#4ecdc4] flex items-center justify-center">
            <Check className="w-[40px] h-[40px] text-white" />
          </div>
          <div className={`font-['Nunito:SemiBold',sans-serif] font-semibold text-[16px] text-center ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
            No vet bills - this cat is healthy!
          </div>
        </div>
      )}
    </div>
  );
}

export function CatProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkMode } = useDarkMode();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [allCats, setAllCats] = useState<Cat[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bills, setBills] = useState<any[]>([]);

  const formatDate = (dateString: string) => {
    try {
      const [year, month, day] = dateString.split('-');
      const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch {
      return dateString;
    }
  };

  const formatClusters = (clusters?: string[], location?: string) => {
    if (!location) return '';
    if (!clusters || clusters.length === 0) return location;
    
    let clusterString = '';
    if (clusters.length === 1) {
      clusterString = clusters[0];
    } else if (clusters.length === 2) {
      clusterString = `${clusters[0]} and ${clusters[1]}`;
    } else {
      const allButLast = clusters.slice(0, -1).join(', ');
      clusterString = `${allButLast} and ${clusters[clusters.length - 1]}`;
    }
    
    return `${location} (${clusterString})`;
  };

  const fetchBills = async (catId: string) => {
    try {
      console.log('[v0] Fetching bills for cat:', catId);
      const { data, error } = await supabase
        .from('bills')
        .select('*')
        .eq('cat_id', catId)
        .order('date', { ascending: false });

      if (error) {
        console.warn('[v0] Error fetching bills:', error);
        setBills([]);
      } else {
        console.log('[v0] Loaded bills from Supabase:', data);
        setBills(data || []);
      }
    } catch (err) {
      console.error('[v0] Exception fetching bills:', err);
      setBills([]);
    }
  };

useEffect(() => {
  const loadCats = async () => {
    try {
      const fetchedCats = await fetchCats();

      if (fetchedCats.length > 0) {
        setAllCats(fetchedCats);
        console.log('[v0] Loaded cats from Supabase:', fetchedCats);
      } else {
        // fallback to localStorage
        const stored = localStorage.getItem('dreamTeamCats');

        if (stored) {
          const parsedCats = JSON.parse(stored);
          setAllCats(parsedCats);
        } else {
          setAllCats([...cats, ...homedCats]);
        }
      }
    } catch (err) {
      console.error('[v0] Error loading cats:', err);

      // fallback
      const stored = localStorage.getItem('dreamTeamCats');

      if (stored) {
        try {
          const parsedCats = JSON.parse(stored);
          setAllCats(parsedCats);
        } catch {
          setAllCats([...cats, ...homedCats]);
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  loadCats();
}, []);

  const currentCat = allCats.find(c => c.id === id);
  const currentIndex = allCats.findIndex(c => c.id === id);

  const prevCat = currentIndex > 0 ? allCats[currentIndex - 1] : null;
  const nextCat = currentIndex < allCats.length - 1 ? allCats[currentIndex + 1] : null;

  // Debug: Log current cat data
  if (currentCat) {
    console.log('[v0] Current cat:', currentCat.name, 'adoptionClusters:', currentCat.adoptionClusters);
  }

  // Fetch bills when currentCat changes
  useEffect(() => {
    if (currentCat?.id) {
      fetchBills(currentCat.id);
    }
  }, [currentCat?.id]);



  const handleExpressInterest = () => {
    if (!currentCat || !currentCat.adoptionEmail) return;

    const emailBody = `Hi JLT Cats Team,

I'm interested in adopting ${currentCat.name}! I'd love to learn more about the adoption process.

A little about me:
- Name: 
- Contact number: 

Looking forward to hearing from you!

Best regards`;

    const mailtoLink = `mailto:${currentCat.adoptionEmail}?subject=Adoption Inquiry - ${currentCat.name}&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;

    toast.success(`Email sent for ${currentCat.name}!`);
  };

  if (isLoading) {
  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`}>
      <div className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
        Loading...
      </div>
    </div>
  );
}

  if (!currentCat) {
    return (
      <div className={`content-stretch flex flex-col items-center justify-center size-full ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`}>
        <Header />
        <div className="text-center">
          <div className={`font-['Fredoka:Bold',sans-serif] text-[32px] mb-[16px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Cat Not Found</div>
          <Link to="/cats" className="text-[#ff6b6b] font-['Nunito:SemiBold',sans-serif] underline">
            Back to All Cats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`content-stretch flex flex-col items-start relative size-full ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`} data-name="Cat Profile">
      <Header />
      <div className={`content-stretch flex flex-col items-center pb-[48px] pt-[32px] relative shrink-0 w-full flex-1 ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`} data-name="Background">
        <div className="max-w-[1200px] w-full px-[24px] relative">
          {/* Navigation Arrows */}
          {prevCat && (
            <button
              onClick={() => navigate(`/cat/${prevCat.id}`)}
              className="fixed left-[16px] top-[50%] -translate-y-1/2 z-10 bg-[rgba(255,107,107,0.08)] hover:bg-[rgba(255,107,107,0.15)] transition-colors rounded-[20px] p-[10px] border-none cursor-pointer max-md:hidden"
              aria-label="Previous cat"
            >
              <ChevronLeft className="w-[24px] h-[24px] text-[#ff6b6b]" />
            </button>
          )}
          
          {nextCat && (
            <button
              onClick={() => navigate(`/cat/${nextCat.id}`)}
              className="fixed right-[16px] top-[50%] -translate-y-1/2 z-10 bg-[rgba(78,205,196,0.08)] hover:bg-[rgba(78,205,196,0.15)] transition-colors rounded-[20px] p-[10px] border-none cursor-pointer max-md:hidden"
              aria-label="Next cat"
            >
              <ChevronRight className="w-[24px] h-[24px] text-[#4ecdc4]" />
            </button>
          )}

          {/* Back Button */}
          <Link to="/cats" className={`inline-flex items-center gap-[8px] mb-[24px] transition-colors no-underline ${isDarkMode ? 'text-[#b5c0c8] hover:text-[#f4f7f9]' : 'text-[#636e72] hover:text-[#2d3436]'}`}>
            <ChevronLeft className="w-[20px] h-[20px]" />
            <span className="font-['Nunito:SemiBold',sans-serif] text-[14px]">Back</span>
          </Link>

          {/* Main Content */}
          <div className="flex gap-[48px] max-lg:flex-col">
            {/* Left - Cat Image */}
            <div className="flex-1 max-w-[592px] max-lg:max-w-full">
              <div className={`rounded-[64px] overflow-hidden ${isDarkMode ? 'bg-[#1a2028]' : 'bg-white'}`} style={{ boxShadow: isDarkMode ? '0px 12px 40px 0px rgba(0,0,0,0.3)' : '0px 12px 40px 0px rgba(0,0,0,0.1)' }}>
                <div className="aspect-square relative">
                  <img 
                    src={currentCat.image} 
                    alt={currentCat.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right - Cat Details */}
            <div className="flex-1 max-w-[592px] max-lg:max-w-full">
              {/* Name and Tags */}
              <div className="mb-[24px]">
                <div className={`font-['Fredoka:Bold',sans-serif] font-bold text-[40px] mb-[12px] max-md:text-[32px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {currentCat.name}
                </div>
                
                <div className="flex flex-wrap gap-[8px] mb-[12px]">
                  <div className="border border-[rgba(78,205,196,0.7)] rounded-[16px] px-[11px] py-[6px]">
                    <span className="font-['Nunito:Regular',sans-serif] text-[#4ecdc4] text-[13px]">{currentCat.breed}</span>
                  </div>
                  <div className="border border-[rgba(255,107,107,0.7)] rounded-[16px] px-[11px] py-[6px]">
                    <span className="font-['Nunito:Regular',sans-serif] text-[#ff6b6b] text-[13px]">{currentCat.gender}</span>
                  </div>
                  {currentCat.tnr && (
                    <div className={`rounded-[16px] px-[12px] py-[6px] flex items-center gap-[6px] ${isDarkMode ? 'bg-[#2e7d32]' : 'bg-[#2e7d32]'}`}>
                      <div className={`w-[16px] h-[16px] rounded-full flex items-center justify-center flex-shrink-0 ${isDarkMode ? 'bg-white' : 'bg-white'}`}>
                        <Check className={`w-[12px] h-[12px] text-[#2e7d32]`} />
                      </div>
                      <span className="font-['Nunito:SemiBold',sans-serif] text-white text-[13px]">TNR</span>
                    </div>
                  )}
                  {currentCat.freeForAdoption === true && (
                    <div className="bg-[#4ecdc4] rounded-[16px] px-[12px] py-[6px] flex items-center gap-[6px]">
                      <Home className="w-[16px] h-[16px] text-black" />
                      <span className="font-['Nunito:SemiBold',sans-serif] text-black text-[13px]">Adoptable</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className={`font-['Fredoka:Medium',sans-serif] text-[17.6px] leading-[29.92px] mb-[12px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                  {showFullDescription ? currentCat.description : `${currentCat.description.slice(0, 200)}${currentCat.description.length > 200 ? '...' : ''}`}
                </div>

                {currentCat.description.length > 200 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className={`transition-colors border rounded-[15984px] px-[24px] py-[7px] cursor-pointer w-full ${isDarkMode ? 'bg-[rgba(45,52,54,0.08)] hover:bg-[rgba(45,52,54,0.12)] border-[rgba(45,52,54,0.3)]' : 'bg-[rgba(45,52,54,0.04)] hover:bg-[rgba(45,52,54,0.08)] border-[rgba(45,52,54,0.2)]'}`}
                  >
                    <span className="font-['Fredoka:Medium',sans-serif] text-[#ff6b6b] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {showFullDescription ? 'View less' : 'View more'}
                    </span>
                  </button>
                )}
              </div>

              {/* Location */}
              <div className={`rounded-[16px] p-[24px] mb-[24px] ${isDarkMode ? 'bg-[rgba(78,205,196,0.06)]' : 'bg-[rgba(78,205,196,0.08)]'}`} style={{ boxShadow: isDarkMode ? '0px 2px 1px -1px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.28), 0px 1px 3px 0px rgba(0,0,0,0.24)' : '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)' }}>
                <div className="flex items-center gap-[16px]">
                  <MapPin className="w-[32px] h-[32px] text-[#4ecdc4] flex-shrink-0" />
                  <div>
                    <div className={`font-['Nunito:SemiBold',sans-serif] font-semibold text-[14px] mb-[4px] ${isDarkMode ? 'text-[#7a9f93]' : 'text-[#636e72]'}`}>
                      Location
                    </div>
                    <div className={`font-['Nunito:Medium',sans-serif] font-medium text-[16px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>
                      {formatClusters(currentCat.adoptionClusters, currentCat.location)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Interested in Adopting Section - Only show if free for adoption */}
              {currentCat.freeForAdoption === true && currentCat.status === 'Stray' && (
              <div
                className={`relative rounded-[48px] mb-[32px] overflow-hidden border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${isDarkMode ? 'bg-[rgba(78,205,196,0.08)] border-[rgba(78,205,196,0.25)]' : 'bg-[#f0f9f8] border-[#d4f1ed]'}`}
                style={{
                  boxShadow: isDarkMode ? '0px 8px 24px rgba(0,0,0,0.2)' : '0px 8px 24px rgba(78,205,196,0.12)'
                }}
              >
                {/* Decorative paw prints on the right */}
                <div className="absolute right-4 top-8 opacity-20 pointer-events-none text-[#4ecdc4] text-4xl">
                  <div className="text-6xl" style={{ lineHeight: '1' }}>
                    🐾
                  </div>
                  <div className="text-5xl ml-4 mt-2" style={{ lineHeight: '1' }}>
                    🐾
                  </div>
                </div>

                <div className="relative p-8 md:p-10 max-w-2xl">
                  {/* Icon and Heading */}
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-16 h-16 rounded-3xl bg-[#4ecdc4] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Heart className="w-8 h-8 text-white" fill="white" />
                    </div>
                    <h3 className={`font-['Fredoka:Bold',sans-serif] font-bold text-2xl md:text-3xl leading-tight ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      Interested in adopting {currentCat.name}?
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`font-['Nunito:Regular',sans-serif] text-base md:text-lg leading-relaxed mb-8 max-w-xl ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                    If you'd like to welcome {currentCat.name} into your home, we'd love to hear from you! Click below to send us an inquiry.
                  </p>

                  {/* Button with paw icon */}
                  <button
                    onClick={handleExpressInterest}
                    className="rounded-full px-8 py-3 flex items-center gap-3 font-['Fredoka:SemiBold',sans-serif] font-semibold text-base transition-all duration-200 bg-[#4ecdc4] text-black hover:bg-[#3db5ad] cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
                    style={{
                      fontVariationSettings: "'wdth' 100"
                    }}
                  >
                                        <span className="text-lg">
                      <div className="w-5 h-5">
                      <svg viewBox="0 0 24 24" fill="rgba(0,0,0,0.87)" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="5.5" cy="10.5" rx="2.2" ry="3" transform="rotate(-15 5.5 10.5)" />
  <ellipse cx="9.5" cy="6.5" rx="2.2" ry="3.2" />
  <ellipse cx="14.5" cy="6.5" rx="2.2" ry="3.2" />
  <ellipse cx="18.5" cy="10.5" rx="2.2" ry="3" transform="rotate(15 18.5 10.5)" />
  
  <path d="M12 12.5
           c-3.5 0-6 2-6.5 5
           s1 4.5 3 4.5
           c1.5 0 2.5-1 3.5-1
           s2 1 3.5 1
           c2 0 3.5-1.5 3-4.5
           s-3-5-6.5-5z" />
</svg>

                    </div>
                    </span>
                    <span>I'm Interested!</span>
                  </button>
                </div>
              </div>
              )}

              {/* Veterinary Bills */}
              <BillsSection bills={bills} isDarkMode={isDarkMode} formatDate={formatDate} />
              </div>


            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between mt-[32px] gap-[16px] md:hidden">
            {prevCat ? (
              <button
                onClick={() => navigate(`/cat/${prevCat.id}`)}
                className="flex-1 bg-[rgba(255,107,107,0.08)] hover:bg-[rgba(255,107,107,0.15)] transition-colors rounded-[20px] px-[16px] py-[12px] border-none cursor-pointer flex items-center justify-center gap-[8px]"
              >
                <ChevronLeft className="w-[20px] h-[20px] text-[#ff6b6b]" />
                <span className="font-['Nunito:SemiBold',sans-serif] text-[#ff6b6b] text-[14px]">{prevCat.name}</span>
              </button>
            ) : (
              <div className="flex-1"></div>
            )}
            
            {nextCat ? (
              <button
                onClick={() => navigate(`/cat/${nextCat.id}`)}
                className="flex-1 bg-[rgba(78,205,196,0.08)] hover:bg-[rgba(78,205,196,0.15)] transition-colors rounded-[20px] px-[16px] py-[12px] border-none cursor-pointer flex items-center justify-center gap-[8px]"
              >
                <span className="font-['Nunito:SemiBold',sans-serif] text-[#4ecdc4] text-[14px]">{nextCat.name}</span>
                <ChevronRight className="w-[20px] h-[20px] text-[#4ecdc4]" />
              </button>
            ) : (
              <div className="flex-1"></div>
            )}
          </div>
        </div>
      </div>
  );
}
