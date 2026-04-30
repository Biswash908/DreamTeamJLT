import { Link, useLocation } from 'react-router';
import { useDarkMode } from '../context/DarkModeContext';
import JltLogo from '../../imports/Cats/JLTLogo.png';
import JltLogoWhite from '../../imports/Cats/JLTLOGOWhite2.png';

function DreamTeamJltLogo({ isDarkMode }: { isDarkMode: boolean }) {
  return (
    <div className="w-[40px] h-[40px] relative flex-shrink-0">
      <img
        src={isDarkMode ? JltLogoWhite : JltLogo}
        alt="JLT Logo"
        className="absolute inset-0 w-full h-full object-contain scale-200"
      />
    </div>
  );
}

export function Header() {
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className={`${isDarkMode ? 'bg-[#161c23]' : 'bg-white'} content-stretch flex flex-col items-start pb-px shrink-0 sticky top-0 w-full z-[2]`} data-name="Header">
      <div aria-hidden="true" className={`absolute ${isDarkMode ? 'border-[rgba(244,247,249,0.12)] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.35)]' : 'border-[rgba(45,52,54,0.12)] shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]'} border-b border-solid inset-0 pointer-events-none`} />
      <div className="min-h-[64px] relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-row items-center min-h-[inherit] size-full">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between min-h-[inherit] px-[24px] py-[9.75px] relative w-full">
            <Link to="/" className="no-underline">
              <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
                <DreamTeamJltLogo isDarkMode={isDarkMode} />
                <div className="content-stretch flex flex-col items-start relative shrink-0 max-sm:hidden">
                  <div className={`flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 ${isDarkMode ? 'text-[#f4f7f9]' : 'text-[#2d3436]'} text-[22.4px] whitespace-nowrap`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[35.84px]">JLT Cats</p>
                  </div>
                </div>
              </div>
            </Link>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 max-sm:gap-[8px]">
              <Link to="/" className="no-underline">
                <div className={`content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[24px] shrink-0 max-sm:px-[16px] transition-colors ${isActive('/') ? (isDarkMode ? 'bg-[rgba(255,107,107,0.2)]' : 'bg-[rgba(255,107,107,0.1)]') : (isDarkMode ? 'hover:bg-[rgba(255,255,255,0.05)]' : 'hover:bg-[rgba(0,0,0,0.05)]')}`} data-name="Component 1">
                  <div className={`flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center whitespace-nowrap ${isActive('/') ? 'text-[#ff6b6b]' : (isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]')}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[24.5px]">Home</p>
                  </div>
                </div>
              </Link>
              <Link to="/cats" className="no-underline">
                <div className={`content-stretch flex items-center justify-center min-w-[64px] px-[24px] py-[8px] relative rounded-[24px] shrink-0 max-sm:px-[16px] transition-colors ${isActive('/cats') || location.pathname.startsWith('/cat/') ? 'bg-[#ff6b6b]' : 'bg-[rgba(255,107,107,0.7)] hover:bg-[#ff6b6b]'}`} data-name="Component 2">
                  <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="Link:shadow" />
                  <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[24.5px]">See Cats</p>
                  </div>
                </div>
              </Link>
              <Link to="/admin" className="no-underline">
                <div className={`content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[24px] shrink-0 max-sm:px-[16px] transition-colors ${isActive('/admin') ? (isDarkMode ? 'bg-[rgba(78,205,196,0.2)]' : 'bg-[rgba(78,205,196,0.1)]') : (isDarkMode ? 'hover:bg-[rgba(255,255,255,0.05)]' : 'hover:bg-[rgba(0,0,0,0.05)]')}`} data-name="Component 3">
                  <div className={`flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center whitespace-nowrap ${isActive('/admin') ? 'text-[#4ecdc4]' : (isDarkMode ? 'text-[#b5c0c8]' : 'text-[#636e72]')}`} style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-[24.5px]">Admin</p>
                  </div>
                </div>
              </Link>
              <button
                onClick={toggleDarkMode}
                className={`content-stretch flex flex-col items-start pl-[4px] relative shrink-0 bg-transparent border-none cursor-pointer ${isDarkMode ? 'hover:bg-[rgba(255,255,255,0.05)]' : 'hover:bg-[rgba(0,0,0,0.05)]'} rounded-[20px] transition-colors`}
                data-name="Button - Toggle dark mode:margin"
                aria-label="Toggle dark mode"
              >
                <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="Component 4">
                  <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
                    {isDarkMode ? (
                      <div className="absolute inset-0 flex items-center justify-center text-xl">
                        ☀️
                      </div>
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-xl">
                        🌙
                      </div>
                    )}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
