import svgPaths from "./svg-4mqciv2hvm";
import imgDreamTeamJltLogo from "./48d339b1aea985ce1c9f57f48eb5e2a4e70590e0.png";

function DreamTeamJltLogo() {
  return (
    <div className="aspect-[40/40] flex-[1_0_0] min-h-px min-w-px relative" data-name="Dream Team JLT Logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDreamTeamJltLogo} />
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start justify-center relative shrink-0" data-name="Link">
      <DreamTeamJltLogo />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[22.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.84px]">Dream Team JLT</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function ButtonSwitchToDarkModeMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Button - Switch to dark mode:margin">
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="Component 4">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
              <path d={svgPaths.pa8c7600} fill="var(--fill-0, #2D3436)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-center justify-center px-[24px] py-[10px] relative rounded-[24px] shrink-0" data-name="Component 1">
        <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24.5px]">Home</p>
        </div>
      </div>
      <div className="bg-[#ff6b6b] content-stretch flex items-center justify-center min-w-[64px] px-[24px] py-[8px] relative rounded-[24px] shrink-0" data-name="Component 2">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="Link:shadow" />
        <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24.5px]">See Cats</p>
        </div>
      </div>
      <ButtonSwitchToDarkModeMargin />
    </div>
  );
}

function Container() {
  return (
    <div className="min-h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between min-h-[inherit] px-[24px] py-[9.75px] relative w-full">
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px shrink-0 sticky top-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(45,52,54,0.12)] border-b border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
      <Container />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center opacity-70 relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Component 5">
        <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
          <p className="leading-[20px]">Privacy Policy</p>
        </div>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
        <p className="leading-[20px]">© 2026 Dream Team JLT. All rights reserved. Made with ❤️ for cats.</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#2d3436] content-stretch flex flex-col items-start left-0 pb-[32px] pt-[31px] px-[384px] right-0 top-[1828.95px]" data-name="Background">
      <Container4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[56px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">
          <span className="leading-[67.2px]">{`Helping Cats, `}</span>
          <span className="leading-[67.2px] text-[#ff6b6b]">One</span>
        </p>
        <p>
          <span className="leading-[67.2px] text-[#ff6b6b]">Purr</span>
          <span className="leading-[67.2px]">{` at a Time`}</span>
        </p>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-col font-['Fredoka:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.68px] mb-0">Join us in making a difference in the lives of cats who need us</p>
        <p className="leading-[26.68px]">most.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute bottom-1/2 left-[8.33%] right-[70.83%] top-[29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667">
            <path d={svgPaths.p324e7ff0} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.5%_52.08%_66.67%_27.08%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667">
            <path d={svgPaths.p324e7ff0} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[12.5%_27.08%_66.67%_52.08%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667">
            <path d={svgPaths.p324e7ff0} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
          </svg>
        </div>
        <div className="absolute bottom-1/2 left-[70.83%] right-[8.33%] top-[29.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.16667 4.16667">
            <path d={svgPaths.p324e7ff0} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[43.75%_16.71%_8.31%_16.64%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3294 9.58702">
            <path d={svgPaths.p9ebf590} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 15.2917">
            <path d={svgPaths.p22b57600} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-wrap gap-[0px_16px] h-[68.7px] items-start pt-[16.7px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#ff6b6b] min-w-[64px] relative rounded-[24px] self-stretch shrink-0" data-name="Component 6">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] pl-[28px] pr-[32px] py-[12px] relative">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="Link:shadow" />
            <Container9 />
            <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]">See Our Cats</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ff6b6b] min-w-[64px] relative rounded-[24px] self-stretch shrink-0" data-name="Component 6">
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] h-full items-center justify-center min-w-[inherit] pl-[28px] pr-[32px] py-[12px] relative">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="Link:shadow" />
            <Container10 />
            <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]">I want to Help!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] max-w-[592px] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col gap-[15.3px] items-start max-w-[inherit] pl-[32px] pt-[31.095px] relative w-full">
        <Heading />
        <Heading3 />
        <Container8 />
      </div>
    </div>
  );
}

function DreamTeamJltLogo1() {
  return (
    <div className="relative shrink-0 size-[340px]" data-name="Dream Team JLT logo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgDreamTeamJltLogo} />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[7px] relative shrink-0" data-name="Container">
      <DreamTeamJltLogo1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex inset-[28.5px_0_-3.5px_32px] items-center justify-center" data-name="Container">
      <Container13 />
    </div>
  );
}

function Container11() {
  return (
    <div className="flex-[1_0_0] h-[372px] max-w-[592px] min-h-px min-w-px relative" data-name="Container">
      <Container12 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-center flex flex-wrap gap-0 items-center justify-center relative shrink-0 w-[1184px]" data-name="Container">
      <Container7 />
      <Container11 />
    </div>
  );
}

function Container5() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pr-[24px] relative w-full">
        <Container6 />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 overflow-clip pb-[96px] pl-[352px] pr-[360px] pt-[64px] right-0 top-0" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 249, 245) 0%, rgb(255, 232, 232) 50%, rgb(232, 246, 245) 100%)" }}>
      <div className="absolute bg-[rgba(255,107,107,0.1)] right-[-50px] rounded-[100px] size-[200px] top-[-50px]" data-name="Overlay" />
      <div className="absolute bg-[rgba(78,205,196,0.15)] bottom-[-30px] left-[-30px] rounded-[75px] size-[150px]" data-name="Overlay" />
      <Container5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[40px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[46.68px]">Learn More About Us</p>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="grid grid-cols-[_56px] grid-rows-[_56px] relative rounded-[18px] shrink-0 size-[56px]" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 107, 107, 0.2) 0%, rgba(255, 107, 107, 0.55) 100%)" }}>
      <div className="col-1 overflow-clip relative row-1 shrink-0 size-[30px]" data-name="Component 3">
        <div className="absolute inset-[12.5%_8.33%_11.04%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 22.9375">
            <path d={svgPaths.p1c64eb80} fill="var(--fill-0, #FF6B6B)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[67.47px] leading-[0] relative shrink-0 w-[151.98px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[32px] justify-center left-0 text-[12px] text-[rgba(255,107,107,0.85)] top-[15px] tracking-[1.68px] uppercase w-[68.896px]">
        <p className="leading-[31.92px]">Purpose</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold h-[36px] justify-center left-0 text-[#2d3436] text-[28.8px] top-[49.41px] w-[152.298px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.57px]">Our Mission</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-0.18px] top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[17.6px] text-[rgba(255,107,107,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px]">01</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="flex-[1_0_0] h-[26.39px] min-h-px min-w-[16.809999465942383px] relative" data-name="Margin">
      <Container18 />
    </div>
  );
}

function Container17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative w-full">
        <Background3 />
        <Paragraph />
        <Margin />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[16px] w-full">
        <p className="leading-[27.2px] mb-0">We are a community-driven cat welfare group committed to supporting stray and dumped cats in our neighborhood (between Clusters O and R in JLT).</p>
        <p className="leading-[27.2px] mb-0">Through our Trap‑Neuter‑Release (TNR) programme, we ensure a healthier, more balanced community cat population over time. If you see a cat with a</p>
        <p className="leading-[27.2px]">small snip on its left ear, this indicates that the cat has been neutured.</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[16px] w-full">
        <p className="leading-[27.2px]">In addition to TNR, we provide daily food, cover vet costs when needed and work to place vulnerable cats in safe, loving, forever homes.</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[16px] w-full">
        <p className="leading-[27.2px]">We operate entirely on goodwill and donations - every single dirham received goes directly toward the care and wellbeing of our feline friends.</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15px] items-start relative w-full">
        <Container20 />
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[64px] w-full" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(159.915deg, rgba(255, 107, 107, 0.08) 0%, rgb(255, 255, 255) 45%, rgba(255, 107, 107, 0.16) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[15.19px] items-start p-[33px] relative size-full">
          <Container17 />
          <Container19 />
          <div className="absolute bg-[rgba(255,107,107,0.18)] right-[-39px] rounded-[70px] size-[140px] top-[-49px]" data-name="Overlay" />
          <div className="absolute bottom-[-64.94px] flex items-center justify-center left-[-34.94px] size-[131.886px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-6 flex-none">
              <div className="relative rounded-[512px] size-[120px]" data-name="Border">
                <div aria-hidden="true" className="absolute border border-[rgba(255,107,107,0.3)] border-dashed inset-0 pointer-events-none rounded-[512px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,107,107,0.2)] border-solid inset-0 pointer-events-none rounded-[64px] shadow-[0px_18px_35px_0px_rgba(255,107,107,0.18)]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[0_0_434.15px_0] items-start justify-center pl-[24px] pt-[24px]" data-name="Container">
      <BackgroundBorderShadow />
    </div>
  );
}

function Background4() {
  return (
    <div className="grid grid-cols-[_56px] grid-rows-[_56px] relative rounded-[18px] shrink-0 size-[56px]" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgba(78, 205, 196, 0.2) 0%, rgba(78, 205, 196, 0.55) 100%)" }}>
      <div className="col-1 overflow-clip relative row-1 shrink-0 size-[30px]" data-name="Component 3">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
            <path d={svgPaths.p68e5a80} fill="var(--fill-0, #4ECDC4)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[67.47px] leading-[0] relative shrink-0 w-[169.94px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[32px] justify-center left-0 text-[12px] text-[rgba(78,205,196,0.85)] top-[15px] tracking-[1.68px] uppercase w-[121.107px]">
        <p className="leading-[31.92px]">Care in Action</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold h-[36px] justify-center left-0 text-[#2d3436] text-[28.8px] top-[49.4px] w-[170.272px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.57px]">How We Help</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-0.78px] top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[17.6px] text-[rgba(78,205,196,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px]">02</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="flex-[1_0_0] h-[26.39px] min-h-px min-w-[20.219999313354492px] relative" data-name="Margin">
      <Container25 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative w-full">
        <Background4 />
        <Paragraph1 />
        <Margin1 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.565px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[16px] w-full">
        <p className="leading-[27.2px] mb-0">Within our Dream Team Community we currently care for over 40</p>
        <p className="leading-[27.2px] mb-0">cats between Clusters O and R, as well as the surrounding areas. We</p>
        <p className="leading-[27.2px] mb-0">have eight feeding stations, all of which are regularly replenished</p>
        <p className="leading-[27.2px] mb-0">with dry cat food and fresh water, and we endeavour to provide wet</p>
        <p className="leading-[27.2px]">food on a daily basis.</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[16px] w-full">
        <p className="leading-[27.2px] mb-0">Our work is made possible through a dedicated network of feeder</p>
        <p className="leading-[27.2px] mb-0">volunteers. We cover vet bills through community donations and</p>
        <p className="leading-[27.2px] mb-0">actively seek forever homes either within the UAE or internationally,</p>
        <p className="leading-[27.2px]">fundraising towards flight expenses, where required.</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.275px] items-start relative w-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[64px] w-full" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(159.975deg, rgba(78, 205, 196, 0.08) 0%, rgb(255, 255, 255) 45%, rgba(78, 205, 196, 0.16) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[15.375px] items-start p-[33px] relative size-full">
          <Container24 />
          <Container26 />
          <div className="absolute bg-[rgba(78,205,196,0.18)] right-[-39px] rounded-[70px] size-[140px] top-[-49px]" data-name="Overlay" />
          <div className="absolute bottom-[-64.93px] flex items-center justify-center left-[-34.94px] size-[131.886px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-6 flex-none">
              <div className="relative rounded-[512px] size-[120px]" data-name="Border">
                <div aria-hidden="true" className="absolute border border-[rgba(78,205,196,0.3)] border-dashed inset-0 pointer-events-none rounded-[512px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(78,205,196,0.2)] border-solid inset-0 pointer-events-none rounded-[64px] shadow-[0px_18px_35px_0px_rgba(78,205,196,0.18)]" />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[341.41px_588px_-0.01px_0] items-start justify-center max-w-[588px] pl-[24px] pt-[24px]" data-name="Container">
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Background5() {
  return (
    <div className="grid grid-cols-[_56px] grid-rows-[_56px] relative rounded-[18px] shrink-0 size-[56px]" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgba(244, 162, 97, 0.2) 0%, rgba(244, 162, 97, 0.55) 100%)" }}>
      <div className="col-1 overflow-clip relative row-1 shrink-0 size-[30px]" data-name="Component 3">
        <div className="absolute inset-[8.33%_8.29%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26.2625 25">
            <path d={svgPaths.p27e7c400} fill="var(--fill-0, #F4A261)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[67.47px] leading-[0] relative shrink-0 w-[233.5px]" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[32px] justify-center left-0 text-[12px] text-[rgba(244,162,97,0.85)] top-[15px] tracking-[1.68px] uppercase w-[112.454px]">
        <p className="leading-[31.92px]">Join the Team</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold h-[36px] justify-center left-0 text-[#2d3436] text-[28.8px] top-[49.4px] w-[233.882px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[35.57px]">How You Can Help</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col items-start right-[-1.86px] top-[-1px]" data-name="Container">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[17.6px] text-[rgba(244,162,97,0.85)] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.4px]">03</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="flex-[1_0_0] h-[26.39px] min-h-px min-w-[20.139999389648438px] relative" data-name="Margin">
      <Container31 />
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative w-full">
        <Background5 />
        <Paragraph2 />
        <Margin2 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[135.94px] relative shrink-0 w-full" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-0 text-[#636e72] text-[16px] top-[13px] w-[434.179px]">
        <p className="leading-[27.2px]">There are many ways you can support our work. We have an</p>
      </div>
      <div className="absolute h-[22px] left-0 top-[29.18px] w-[136.17px]" data-name="Component 7">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[28px] justify-center leading-[0] left-0 text-[#ff6b6b] text-[16px] top-[11px] w-[136.476px]">
          <p className="decoration-solid leading-[27.2px] underline">Amazon Wish List</p>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[28px] justify-center leading-[0] left-[140.31px] text-[#636e72] text-[16px] top-[40.18px] w-[345.715px]">
        <p className="leading-[27.2px]">to help keep our feeding stations stocked for the</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[82px] justify-center leading-[0] left-0 text-[#636e72] text-[16px] top-[94.56px] w-[486.26px]">
        <p className="leading-[27.2px] mb-0">many hungry cats we care for. We are also always grateful for</p>
        <p className="leading-[27.2px] mb-0">support with outstanding veterinary bills, which can be paid directly</p>
        <p className="leading-[27.2px]">to the vets by credit card or cash.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[16px] w-full">
        <p className="leading-[27.2px] mb-0">You can also help by fostering or adopting a cat in need, volunteering</p>
        <p className="leading-[27.2px] mb-0">your time with feeding or wet-food rounds, or simply spreading the</p>
        <p className="leading-[27.2px] mb-0">word about what we do. Every contribution, big or small, truly makes</p>
        <p className="leading-[27.2px]">a difference.</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[15.275px] items-start relative w-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[64px] w-full" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(159.975deg, rgba(244, 162, 97, 0.08) 0%, rgb(255, 255, 255) 45%, rgba(244, 162, 97, 0.16) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
          <Container30 />
          <Container32 />
          <div className="absolute bg-[rgba(244,162,97,0.18)] right-[-39px] rounded-[70px] size-[140px] top-[-49px]" data-name="Overlay" />
          <div className="absolute bottom-[-64.93px] flex items-center justify-center left-[-34.94px] size-[131.886px]" style={{ "--transform-inner-width": "1185", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="-rotate-6 flex-none">
              <div className="relative rounded-[512px] size-[120px]" data-name="Border">
                <div aria-hidden="true" className="absolute border border-[rgba(244,162,97,0.3)] border-dashed inset-0 pointer-events-none rounded-[512px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(244,162,97,0.2)] border-solid inset-0 pointer-events-none rounded-[64px] shadow-[0px_18px_35px_0px_rgba(244,162,97,0.18)]" />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[341.41px_0_-0.01px_588px] items-start justify-center max-w-[588px] pl-[24px] pt-[24px]" data-name="Container">
      <BackgroundBorderShadow2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[775.56px] relative shrink-0 w-[1176px]" data-name="Container">
      <Container16 />
      <Container23 />
      <Container29 />
    </div>
  );
}

function Container14() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end max-w-[inherit] px-[24px] relative w-full">
          <Heading1 />
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#fff9f5] items-start left-0 overflow-clip px-[360px] py-[80px] right-0 to-[#f6fffd] top-[532px] via-[40%] via-white" data-name="Background">
      <div className="absolute bg-[rgba(255,107,107,0.08)] blur-[0px] left-[-80px] rounded-[130px] size-[260px] top-[-120px]" data-name="Overlay+Blur" />
      <div className="absolute bg-[rgba(78,205,196,0.08)] bottom-[-140px] right-[-90px] rounded-[150px] size-[300px]" data-name="Overlay" />
      <Container14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[28px] text-[rgba(0,0,0,0.87)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[34.58px]">Ready to Meet Your New Best Friend?</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center opacity-90 pb-[17px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[17.6px] text-[rgba(0,0,0,0.87)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28.16px]">Browse our cat profiles and find your perfect companion.</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="max-w-[900px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[15px] items-center max-w-[inherit] px-[24px] relative w-full">
          <Heading2 />
          <Heading4 />
          <div className="bg-white content-stretch flex items-center justify-center min-w-[64px] px-[40px] py-[12px] relative rounded-[24px] shrink-0" data-name="Component 2">
            <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="Link:shadow" />
            <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff6b6b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]">Meet Adoptable Cats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background6() {
  return (
    <div className="absolute bg-[#ff6b6b] content-stretch flex flex-col items-start left-0 px-[510px] py-[64px] right-0 top-[1538.23px]" data-name="Background">
      <Container35 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[1936.98px] relative shrink-0 w-full z-[1]" data-name="Container">
      <Background />
      <Background1 />
      <Background2 />
      <Background6 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="Home" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 249, 245) 0%, rgb(255, 249, 245) 100%), linear-gradient(90deg, rgb(255, 249, 245) 0%, rgb(255, 249, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header />
      <Container3 />
    </div>
  );
}