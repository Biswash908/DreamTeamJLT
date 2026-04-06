import { Header } from '../components/Header';
import { useDarkMode } from '../context/DarkModeContext';
import { Heart, Mail, MapPin, ExternalLink } from 'lucide-react';

export function DonatePage() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`content-stretch flex flex-col isolate items-start relative size-full ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`} data-name="Donate">
      <Header />
      <div className={`bg-gradient-to-b ${isDarkMode ? 'from-[#10141a] to-[#161c23] via-[#141a21]' : 'from-[#fff9f5] to-[#f6fffd] via-white'} relative shrink-0 via-[45%] w-full z-[1] flex-1`} data-name="Background">
        <div className="overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start px-[24px] py-[80px] relative w-full max-md:px-[16px] max-md:py-[40px]">
            <div className={`absolute rounded-[130px] size-[260px] top-[-120px] right-[-80px] ${isDarkMode ? 'bg-[rgba(255,107,107,0.05)]' : 'bg-[rgba(255,107,107,0.08)]'}`} data-name="Overlay" />
            <div className={`absolute rounded-[160px] size-[320px] bottom-[-140px] left-[-90px] ${isDarkMode ? 'bg-[rgba(78,205,196,0.05)]' : 'bg-[rgba(78,205,196,0.08)]'}`} data-name="Overlay" />
            
            <div className="max-w-[1200px] relative shrink-0 w-full mx-auto" data-name="Container">
              <div className="flex flex-col items-center max-w-[inherit] size-full">
                <div className="content-stretch flex flex-col gap-[24px] items-center max-w-[inherit] relative w-full">
                  {/* Page Header */}
                  <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full text-center" data-name="Container">
                    <div className={`font-['Fredoka:Bold',sans-serif] font-bold text-[40px] max-md:text-[32px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                      Want to help?
                    </div>
                    <div className={`font-['Nunito:Regular',sans-serif] text-[16px] max-w-[640px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                      We operate entirely on goodwill and donations - every dirham goes directly toward food, medical care, and the wellbeing of our cats.
                    </div>
                  </div>

                  {/* Main Content Grid */}
                  <div className="flex gap-[24px] items-start justify-center w-full max-lg:flex-col mt-[24px]">
                    {/* Left Card - Pay the Vet */}
                    <div className="flex-1 max-w-[686px] max-lg:max-w-full">
                      <div className={`bg-gradient-to-br rounded-[64px] p-[33px] relative overflow-hidden hover:-translate-y-3 transition-all duration-300 ${isDarkMode ? 'from-[rgba(46,125,50,0.15)] via-[#1a2120] to-[rgba(46,125,50,0.1)]' : 'from-[rgba(46,125,50,0.12)] via-white to-[rgba(46,125,50,0.18)]'}`} style={{ boxShadow: isDarkMode ? '0px 20px 40px 0px rgba(0,0,0,0.4)' : '0px 20px 40px 0px rgba(46,125,50,0.2)', border: isDarkMode ? '1px solid rgba(46,125,50,0.2)' : '1px solid rgba(46,125,50,0.3)' }}>
                        <div className="absolute bg-[rgba(46,125,50,0.18)] right-[-19px] rounded-[60px] size-[120px] top-[-39px]" data-name="Overlay" />
                        
                        <div className="relative z-10">
                          {/* Header */}
                          <div className="flex gap-[16px] items-center mb-[16px]">
                            <div className="bg-gradient-to-br from-[rgba(46,125,50,0.25)] to-[rgba(46,125,50,0.6)] rounded-[18px] p-[14px] shrink-0">
                              <Heart className="w-[28px] h-[28px] text-[#2e7d32]" />
                            </div>
                            <div className={`font-['Fredoka:SemiBold',sans-serif] font-semibold text-[25.6px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                              Pay the Vet Clinic
                            </div>
                          </div>

                          {/* Description */}
                          <div className={`font-['Nunito:Regular',sans-serif] text-[16px] mb-[16px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                            This link goes directly to the vet clinic.
                          </div>

                          {/* Payment Details Box */}
                          <div className={`border border-dashed rounded-[48px] p-[17px] mb-[16px] ${isDarkMode ? 'bg-[rgba(46,125,50,0.08)] border-[rgba(46,125,50,0.3)]' : 'bg-[rgba(46,125,50,0.08)] border-[rgba(46,125,50,0.4)]'}`}>
                            <div className={`font-['Nunito:Bold',sans-serif] font-bold text-[12px] tracking-[1.44px] uppercase mb-[12px] ${isDarkMode ? 'text-[#7a9f93]' : 'text-[#636e72]'}`}>
                              PAYMENT DETAILS
                            </div>
                            
                            <div className="flex justify-between items-center mb-[8px]">
                              <span className={`font-['Nunito:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Payment reason</span>
                              <span className={`font-['Nunito:SemiBold',sans-serif] text-[14px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Invoice of animal</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                              <span className={`font-['Nunito:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>Reference to include</span>
                              <span className={`font-['Nunito:Bold',sans-serif] text-[14px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>Dream Team</span>
                            </div>
                          </div>

                          {/* Info Note */}
                          <div className={`border-l-4 border-[#4ecdc4] rounded-[48px] p-[17px] mb-[16px] ${isDarkMode ? 'bg-[rgba(78,205,196,0.06)]' : 'bg-[rgba(78,205,196,0.08)]'}`}>
                            <div className={`font-['Nunito:Regular',sans-serif] text-[14px] leading-[20px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                              Any donation, big or small, is greatly appreciated. All funds received go towards our outstanding bills or future kitty cases, which sadly are always ongoing.
                            </div>
                          </div>

                          {/* Pay Button */}
                          <button className="bg-[#2e7d32] hover:bg-[#27632a] transition-colors w-full rounded-[24px] px-[24px] py-[11.2px] border-none cursor-pointer" style={{ boxShadow: '0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)' }}>
                            <span className="font-['Fredoka:Medium',sans-serif] font-medium text-white text-[16px] flex items-center justify-center gap-[8px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                              Pay
                              <ExternalLink className="w-[16px] h-[16px]" />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Right Cards */}
                    <div className="flex-1 max-w-[490px] max-lg:max-w-full flex flex-col gap-[24px]">
                      {/* Other Ways to Help */}
                      <div className={`border rounded-[64px] p-[29px] relative hover:-translate-y-3 transition-all duration-300 ${isDarkMode ? 'bg-[rgba(255,107,107,0.04)] border-[rgba(255,107,107,0.2)]' : 'bg-[rgba(255,107,107,0.05)] border-[rgba(255,107,107,0.25)]'}`} style={{ boxShadow: isDarkMode ? '0px 14px 28px 0px rgba(0,0,0,0.3)' : '0px 14px 28px 0px rgba(255,107,107,0.15)' }}>
                        {/* Header */}
                        <div className="flex gap-[16px] items-center mb-[12px]">
                          <div className="bg-gradient-to-br from-[rgba(255,107,107,0.25)] to-[rgba(255,107,107,0.6)] rounded-[16px] p-[12px] shrink-0">
                            <Heart className="w-[24px] h-[24px] text-[#ff6b6b]" />
                          </div>
                          <div className={`font-['Fredoka:SemiBold',sans-serif] font-semibold text-[20px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                            Other Ways to Help
                          </div>
                        </div>

                        {/* Content */}
                        <div className={`font-['Nunito:Regular',sans-serif] text-[14px] leading-[20px] mb-[12px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                          There are many ways you can support our work. We have an{' '}
                          <a href="https://amazon.ae" target="_blank" rel="noopener noreferrer" className="text-[#ff6b6b] font-bold underline">
                            Amazon Wish List
                          </a>{' '}
                          to help keep our feeding stations stocked.
                        </div>

                        <div className={`font-['Nunito:Regular',sans-serif] text-[14px] leading-[20px] mb-[12px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                          You can also help by fostering or adopting a cat in need, volunteering your time with feeding or wet-food rounds, or simply spreading the word about what we do.
                        </div>

                        <div className={`font-['Nunito:Regular',sans-serif] text-[14px] leading-[20px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                          We also have a fundraising tracker for all the cats in JLT.{' '}
                          <a href="#" className="text-[#ff6b6b] font-bold underline">
                            View Fundraising Tracker
                          </a>
                        </div>
                      </div>

                      {/* Contact Us */}
                      <div className={`border rounded-[64px] p-[29px] relative hover:-translate-y-3 transition-all duration-300 ${isDarkMode ? 'bg-[rgba(78,205,196,0.06)] border-[rgba(78,205,196,0.2)]' : 'bg-[rgba(78,205,196,0.06)] border-[rgba(78,205,196,0.25)]'}`} style={{ boxShadow: isDarkMode ? '0px 14px 28px 0px rgba(0,0,0,0.3)' : '0px 14px 28px 0px rgba(78,205,196,0.14)' }}>
                        {/* Header */}
                        <div className="flex gap-[16px] items-center mb-[12px]">
                          <div className="bg-gradient-to-br from-[rgba(78,205,196,0.25)] to-[rgba(78,205,196,0.6)] rounded-[16px] p-[12px] shrink-0">
                            <Mail className="w-[24px] h-[24px] text-[#4ecdc4]" />
                          </div>
                          <div className={`font-['Fredoka:SemiBold',sans-serif] font-semibold text-[20px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                            Contact Us
                          </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-[7px]">
                          <div className="flex items-start gap-[8px]">
                            <span className={`font-['Nunito:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#2d3436]'}`}>Email:</span>
                            <a href="mailto:dreamteamcatsjlt@gmail.com" className={`font-['Nunito:Bold',sans-serif] text-[14px] underline decoration-[rgba(255,107,107,0.4)] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`}>
                              dreamteamcatsjlt@gmail.com
                            </a>
                          </div>
                          
                          <div className={`font-['Nunito:Regular',sans-serif] text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#2d3436]'}`}>
                            Location: JLT, Dubai, UAE
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Note */}
                  <div className={`rounded-[15984px] px-[24px] py-[24px] w-full text-center mt-[24px] ${isDarkMode ? 'bg-[rgba(255,107,107,0.05)]' : 'bg-[rgba(255,107,107,0.08)]'}`}>
                    <div className={`font-['Nunito:Italic',sans-serif] italic text-[14px] ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
                      Every contribution, no matter the size, helps us provide food, medical care, and love to cats in need.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
