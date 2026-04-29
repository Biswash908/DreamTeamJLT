import { Link } from 'react-router';
import { Header } from '../components/Header';
import { useDarkMode } from '../context/DarkModeContext';
import catImage from '../../imports/Cats/48d339b1aea985ce1c9f57f48eb5e2a4e70590e0.png';

export function HomePage() {
  const { isDarkMode } = useDarkMode();
  
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-[#10141a]' : 'bg-[#fff9f5]'}`}>
      <Header />
      
      {/* Hero Section */}
      <div className={`relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-[#0f141a] via-[#151c24] to-[#0c2a2a]' : 'bg-gradient-to-br from-[#fff9f5] via-[#ffe8e8] to-[#e8f6f5]'}`}>
        <div className={`absolute ${isDarkMode ? 'bg-[rgba(255,107,107,0.2)]' : 'bg-[rgba(255,107,107,0.1)]'} right-[-50px] rounded-full w-[200px] h-[200px] top-[-50px]`} />
        <div className={`absolute ${isDarkMode ? 'bg-[rgba(78,205,196,0.25)]' : 'bg-[rgba(78,205,196,0.15)]'} bottom-[-30px] left-[-30px] rounded-full w-[150px] h-[150px]`} />
        
        <div className="max-w-[1200px] mx-auto px-6 py-16 relative">
          <div className="flex flex-wrap items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 min-w-[300px] max-w-[550px]">
              <h1 className={`font-['Fredoka'] font-bold text-[48px] leading-tight mb-4 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                Helping Cats, <span className="text-[#ff6b6b]">One Purr</span> at a Time
              </h1>
              <p className={`font-['Fredoka'] text-[18px] mb-6 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                Join us in making a difference in the lives of cats who need us most.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/cats" className="no-underline">
                  <div className="bg-[#ff6b6b] rounded-[24px] px-7 py-3 flex items-center gap-2 hover:-translate-y-2 transition-all duration-300 shadow-md cursor-pointer">
                    <div className="w-5 h-5">
                      <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                    <span className="font-['Fredoka'] font-medium text-[16px] text-[rgba(0,0,0,0.87)]" style={{ fontVariationSettings: "'wdth' 100" }}>See Our Cats</span>
                  </div>
                </Link>
                
                <Link to="/donate" className="no-underline">
                  <div className="bg-[#ff6b6b] rounded-[24px] px-7 py-3 flex items-center gap-2 hover:-translate-y-2 transition-all duration-300 shadow-md cursor-pointer">
                    <div className="w-5 h-5">
                      <svg viewBox="0 0 20 20" fill="none">
                        <path d="M10 17.5 C 10 17.5, 3 12, 3 7.5 C 3 5, 5 3, 7 3 C 8.5 3, 9.5 4, 10 5 C 10.5 4, 11.5 3, 13 3 C 15 3, 17 5, 17 7.5 C 17 12, 10 17.5, 10 17.5 Z" fill="rgba(0,0,0,0.87)" />
                      </svg>
                    </div>
                    <span className="font-['Fredoka'] font-medium text-[16px] text-[rgba(0,0,0,0.87)]" style={{ fontVariationSettings: "'wdth' 100" }}>I want to Help!</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Logo */}
           <div className="flex-1 min-w-[300px] max-w-[400px] flex justify-center">
  <img
    src={catImage}
    alt="Cat"
    className="max-w-full h-auto"
  />
</div>
          </div>
        </div>
      </div>

      {/* Learn More Section */}
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <h2 className={`font-['Fredoka'] font-semibold text-[28px] sm:text-[34px] md:text-[40px] text-center mb-12 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
          Learn More About Us
        </h2>

        {/* Our Mission Card - Large at Top */}
          <div className={`rounded-[32px] p-8 mb-6 hover:-translate-y-3 transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-[rgba(255,107,107,0.18)] via-[rgba(16,20,26,0.92)] to-[rgba(255,107,107,0.12)]' : 'bg-gradient-to-br from-[rgba(255,107,107,0.08)] via-white to-[rgba(255,107,107,0.16)]'} shadow-lg border ${isDarkMode ? 'border-[rgba(255,107,107,0.3)]' : 'border-[rgba(255,107,107,0.2)]'}`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-[rgba(255,107,107,0.2)] to-[rgba(255,107,107,0.55)] flex items-center justify-center flex-shrink-0 text-2xl">
                🎯
              </div>
            <div className="flex-1">
              <p className="font-['Nunito'] font-bold text-[12px] text-[rgba(255,107,107,0.85)] uppercase tracking-wider mb-1">Purpose</p>
              <h3 className={`font-['Fredoka'] font-semibold text-[28px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>Our Mission</h3>
            </div>
            <span className="font-['Fredoka'] font-semibold text-[18px] text-[rgba(255,107,107,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>01</span>
          </div>
          <div className={`font-['Nunito'] text-[16px] leading-relaxed space-y-3 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
            <p>We are a community-driven cat welfare group committed to supporting stray and dumped cats in our neighborhood (between Clusters O and R in JLT). Through our Trap‑Neuter‑Release (TNR) programme, we ensure a healthier, more balanced community cat population over time. If you see a cat with a small snip on its left ear, this indicates that the cat has been neutered.</p>
            <p>In addition to TNR, we provide daily food, cover vet costs when needed and work to place vulnerable cats in safe, loving, forever homes.</p>
            <p>We operate entirely on goodwill and donations - every single dirham received goes directly toward the care and wellbeing of our feline friends.</p>
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* How We Help */}
          <div className={`rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-[rgba(78,205,196,0.18)] via-[rgba(16,20,26,0.92)] to-[rgba(78,205,196,0.12)]' : 'bg-gradient-to-br from-[rgba(78,205,196,0.08)] via-white to-[rgba(78,205,196,0.16)]'} shadow-lg border ${isDarkMode ? 'border-[rgba(78,205,196,0.3)]' : 'border-[rgba(78,205,196,0.2)]'}`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-[rgba(78,205,196,0.2)] to-[rgba(78,205,196,0.55)] flex items-center justify-center flex-shrink-0 text-2xl">
                🤝
              </div>
              <div className="flex-1">
                <p className="font-['Nunito'] font-bold text-[12px] text-[rgba(78,205,196,0.85)] uppercase tracking-wider mb-1">Care in Action</p>
                <h3 className={`font-['Fredoka'] font-semibold text-[28px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>How We Help</h3>
              </div>
              <span className="font-['Fredoka'] font-semibold text-[18px] text-[rgba(78,205,196,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>02</span>
            </div>
            <div className={`font-['Nunito'] text-[16px] leading-relaxed space-y-3 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
              <p>Within our Dream Team Community we currently care for over 40 cats between Clusters O and R, as well as the surrounding areas. We have eight feeding stations, all of which are regularly replenished with dry cat food and fresh water, and we endeavour to provide wet food on a daily basis.</p>
              <p>Our work is made possible through a dedicated network of feeder volunteers. We cover vet bills through community donations and actively seek forever homes either within the UAE or internationally, fundraising towards flight expenses, where required.</p>
            </div>
          </div>

          {/* How You Can Help */}
          <div className={`rounded-[32px] p-8 hover:-translate-y-3 transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-br from-[rgba(244,162,97,0.18)] via-[rgba(16,20,26,0.92)] to-[rgba(244,162,97,0.12)]' : 'bg-gradient-to-br from-[rgba(244,162,97,0.08)] via-white to-[rgba(244,162,97,0.16)]'} shadow-lg border ${isDarkMode ? 'border-[rgba(244,162,97,0.3)]' : 'border-[rgba(244,162,97,0.2)]'}`}>
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-[18px] bg-gradient-to-br from-[rgba(244,162,97,0.2)] to-[rgba(244,162,97,0.55)] flex items-center justify-center flex-shrink-0 text-2xl">
                ✨
              </div>
              <div className="flex-1">
                <p className="font-['Nunito'] font-bold text-[12px] text-[rgba(244,162,97,0.85)] uppercase tracking-wider mb-1">Join the Team</p>
                <h3 className={`font-['Fredoka'] font-semibold text-[28px] ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>How You Can Help</h3>
              </div>
              <span className="font-['Fredoka'] font-semibold text-[18px] text-[rgba(244,162,97,0.85)]" style={{ fontVariationSettings: "'wdth' 100" }}>03</span>
            </div>
            <div className={`font-['Nunito'] text-[16px] leading-relaxed space-y-3 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]'}`}>
              <p>There are many ways you can support our work. We have an <a href="https://amazon.ae" target="_blank" rel="noopener noreferrer" className="text-[#f4a261] font-bold underline">Amazon Wish List</a> to help keep our feeding stations stocked for the many hungry cats we care for. We are also always grateful for support with outstanding vet bills.</p>
              <p>You can also help by fostering or adopting a cat in need, volunteering your time with feeding or wet-food rounds, or simply spreading the word about what we do. Every contribution, big or small, truly makes a difference.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Full Width */}
      <div className={`w-full ${isDarkMode ? 'bg-[#2d3436]' : 'bg-[#ff6b6b]'} py-16 px-6`}>
        <div className="max-w-[1200px] mx-auto text-center">
          <h2 className={`font-['Fredoka'] font-bold text-[24px] sm:text-[30px] md:text-[36px] mb-4 ${isDarkMode ? 'text-white' : 'text-[#2d3436]'}`} style={{ fontVariationSettings: "'wdth' 100" }}>
            Ready to Meet Your New Best Friend?
          </h2>
          <p className={`font-['Nunito'] text-[14px] sm:text-[16px] md:text-[18px] mb-8 ${isDarkMode ? 'text-[#b5c0c8]' : 'text-[#2d3436]'} opacity-90`}>
            Browse our cat profiles and find your perfect companion.
          </p>
          <Link to="/cats" className="no-underline inline-block">
            <div className={`${isDarkMode ? 'bg-[#ff6b6b] text-white' : 'bg-white text-[#ff6b6b]'} rounded-[20px] sm:rounded-[24px] px-8 sm:px-12 py-3 sm:py-4 font-['Fredoka'] font-medium text-[14px] sm:text-[16px] md:text-[20px] hover:scale-110 transition-transform duration-300 shadow-lg cursor-pointer`} style={{ fontVariationSettings: "'wdth' 100" }}>
              Meet Adoptable Cats
            </div>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-[#0b0f14]' : 'bg-[#2d3436]'} py-8 px-6 mt-auto`}>
        <div className="max-w-[1200px] mx-auto text-center">
          <div className="font-['Nunito'] text-white text-[14px] opacity-70 space-y-1">
            <p>Privacy Policy</p>
            <p>© 2026 Dream Team JLT. All rights reserved. Made with ❤️ for cats.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
