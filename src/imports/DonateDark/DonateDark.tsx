import svgPaths from "./svg-zqsz4pm4w4";
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
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[22.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
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

function ButtonSwitchToLightModeMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[4px] relative shrink-0" data-name="Button - Switch to light mode:margin">
      <div className="content-stretch flex items-center justify-center p-[8px] relative rounded-[20px] shrink-0" data-name="Component 4">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[4.17%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <path d={svgPaths.p29db5c00} fill="var(--fill-0, #F4F7F9)" id="Vector" />
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
        <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24.5px]">Home</p>
        </div>
      </div>
      <div className="bg-[#ff6b6b] content-stretch flex items-center justify-center min-w-[64px] px-[24px] py-[8px] relative rounded-[24px] shrink-0" data-name="Component 2">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="Link:shadow" />
        <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-[rgba(0,0,0,0.87)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[24.5px]">See Cats</p>
        </div>
      </div>
      <ButtonSwitchToLightModeMargin />
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
    <div className="bg-[#161c23] content-stretch flex flex-col items-start pb-px shrink-0 sticky top-0 w-full z-[2]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(244,247,249,0.12)] border-b border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(0,0,0,0.35)]" />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[40px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[48px]">Want to help?</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[640px] relative shrink-0 w-[640px]" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[16px] text-center whitespace-nowrap">
        <p className="leading-[24px] mb-0">We operate entirely on goodwill and donations - every dirham goes directly toward food,</p>
        <p className="leading-[24px]">medical care, and the wellbeing of our cats.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container5 />
    </div>
  );
}

function Background1() {
  return (
    <div className="grid grid-cols-[_56px] grid-rows-[_56px] relative rounded-[18px] shrink-0 size-[56px]" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgba(102, 187, 106, 0.25) 0%, rgba(102, 187, 106, 0.6) 100%)" }}>
      <div className="col-1 overflow-clip relative row-1 shrink-0 size-[30px]" data-name="Component 3">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 20">
            <path d={svgPaths.p1cf08200} fill="var(--fill-0, #66BB6A)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 4">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[25.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[31.62px]">Pay the Vet Clinic</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative w-full">
        <Background1 />
        <Heading1 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">This link goes directly to the vet clinic.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.91px] relative w-full">
        <div className="flex flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
          <p className="leading-[31.92px]">Payment details</p>
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-full relative shrink-0 w-[101.23px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-0 text-[#b5c0c8] text-[14px] top-[9.5px] w-[101.587px]">
        <p className="leading-[20px]">Payment reason</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-full relative shrink-0 w-[107.14px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold h-[21px] justify-center leading-[0] left-0 text-[#f4f7f9] text-[14px] top-[9.5px] w-[107.506px]">
        <p className="leading-[20px]">Invoice of animal</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="col-1 h-[20.02px] justify-self-stretch relative row-2 shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap items-start justify-between relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-full relative shrink-0 w-[127.81px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-0 text-[#b5c0c8] text-[14px] top-[9.5px] w-[128.208px]">
        <p className="leading-[20px]">Reference to include</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-full relative shrink-0 w-[82.5px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-0 text-[#f4f7f9] text-[14px] top-[9.5px] w-[82.827px]">
        <p className="leading-[20px]">Dream Team</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="col-1 h-[20.02px] justify-self-stretch relative row-3 shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-wrap items-start justify-between relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function OverlayBorder() {
  return (
    <div className="bg-[rgba(102,187,106,0.18)] col-1 h-[125.13px] justify-self-stretch relative rounded-[48px] row-2 shrink-0" data-name="Overlay+Border">
      <div aria-hidden="true" className="absolute border border-[rgba(102,187,106,0.4)] border-dashed inset-0 pointer-events-none rounded-[48px]" />
      <div className="gap-x-[9.600000381469727px] gap-y-[9.600000381469727px] grid grid-cols-[_562px] grid-rows-[___31.91px_20.02px_20.02px] p-[17px] relative size-full">
        <Container11 />
        <Container12 />
        <Container15 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[14px] w-full">
          <p className="leading-[20px] mb-0">Any donation, big or small, is greatly appreciated. All funds received go towards our</p>
          <p className="leading-[20px]">outstanding bills or future kitty cases, which sadly are always ongoing.</p>
        </div>
      </div>
    </div>
  );
}

function OverlayVerticalBorder() {
  return (
    <div className="bg-[rgba(78,205,196,0.18)] col-1 justify-self-stretch relative rounded-[48px] row-3 self-start shrink-0" data-name="Overlay+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#4ecdc4] border-l-4 border-solid inset-0 pointer-events-none rounded-[48px]" />
      <div className="content-stretch flex flex-col items-start pb-[16px] pl-[20px] pr-[16px] pt-[15.005px] relative w-full">
        <Container18 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[261.16px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[_596px] grid-rows-[___24px_125.12px_72.03px] pb-[8px] relative size-full">
        <Container10 />
        <OverlayBorder />
        <OverlayVerticalBorder />
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[64px] w-full" data-name="Background+Border+Shadow" style={{ backgroundImage: "linear-gradient(159.979deg, rgba(102, 187, 106, 0.2) 0%, rgba(14, 18, 22, 0.92) 55%, rgba(102, 187, 106, 0.14) 100%)" }}>
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[33px] relative size-full">
          <Container8 />
          <Container9 />
          <div className="bg-[#66bb6a] min-w-[64px] relative rounded-[24px] shrink-0 w-full" data-name="Component 2">
            <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center min-w-[inherit] px-[24px] py-[11.2px] relative w-full">
                <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[24px] shadow-[0px_3px_1px_-2px_rgba(0,0,0,0.2),0px_2px_2px_0px_rgba(0,0,0,0.14),0px_1px_5px_0px_rgba(0,0,0,0.12)]" data-name="Link:shadow" />
                <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.87)] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                  <p className="leading-[28px]">Pay</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-[rgba(102,187,106,0.22)] right-[-19px] rounded-[60px] size-[120px] top-[-39px]" data-name="Overlay" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(102,187,106,0.3)] border-solid inset-0 pointer-events-none rounded-[64px] shadow-[0px_20px_40px_0px_rgba(0,0,0,0.5)]" />
    </div>
  );
}

function Container7() {
  return (
    <div className="max-w-[685.9996337890625px] relative self-stretch shrink-0 w-[686px]" data-name="Container">
      <div className="flex flex-col justify-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-center max-w-[inherit] pl-[24px] pt-[24px] relative size-full">
          <BackgroundBorderShadow />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[16px] shrink-0 size-[48px]" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgba(255, 107, 107, 0.25) 0%, rgba(255, 107, 107, 0.6) 100%)" }}>
      <div className="col-1 overflow-clip relative row-1 shrink-0 size-[26px]" data-name="Component 3">
        <div className="absolute inset-[8.33%_8.29%_8.33%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7608 21.6667">
            <path d={svgPaths.p33b97900} fill="var(--fill-0, #FF6B6B)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 5">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.68px]">Other Ways to Help</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative w-full">
        <Background2 />
        <Heading2 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[40.03px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-0 text-[#b5c0c8] text-[14px] top-[9.5px] w-[379.938px]">
          <p className="leading-[20px]">There are many ways you can support our work. We have an</p>
        </div>
        <div className="absolute h-[19px] left-0 top-[20.02px] w-[119.14px]" data-name="Component 5">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-0 text-[#ff6b6b] text-[14px] top-[9.5px] w-[119.525px]">
            <p className="decoration-solid leading-[20px] underline">Amazon Wish List</p>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[21px] justify-center leading-[0] left-[122.77px] text-[#b5c0c8] text-[14px] top-[29.52px] w-[260.831px]">
          <p className="leading-[20px]">to help keep our feeding stations stocked.</p>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[3.015px] relative w-full">
        <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[14px] w-full">
          <p className="leading-[20px] mb-0">You can also help by fostering or adopting a cat in need,</p>
          <p className="leading-[20px] mb-0">volunteering your time with feeding or wet-food rounds, or</p>
          <p className="leading-[20px]">simply spreading the word about what we do.</p>
        </div>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start leading-[0] pb-[21.01px] pt-[3px] relative text-[14px] w-full">
        <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center mb-[-20px] relative shrink-0 text-[#b5c0c8] whitespace-nowrap">
          <p className="leading-[20px]">{`We also have a fundraising tracker for all the cats in JLT. `}</p>
        </div>
        <div className="font-['Nunito:Bold',sans-serif] font-bold h-[39.02px] mb-[-20px] relative shrink-0 text-[#ff6b6b] w-[386.94px]" data-name="Component 5">
          <div className="-translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-[353.27px] top-[9.5px] w-[33.972px]">
            <p className="decoration-solid leading-[20px] underline">View</p>
          </div>
          <div className="-translate-y-1/2 absolute flex flex-col h-[21px] justify-center left-0 top-[29.51px] w-[128.008px]">
            <p className="decoration-solid leading-[20px] underline">Fundraising Tracker</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OverlayBorderShadow() {
  return (
    <div className="bg-[rgba(255,107,107,0.12)] col-1 justify-self-stretch relative rounded-[64px] row-1 self-start shrink-0" data-name="Overlay+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(255,107,107,0.25)] border-solid inset-0 pointer-events-none rounded-[64px] shadow-[0px_14px_28px_0px_rgba(0,0,0,0.45)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[29px] relative w-full">
        <Container21 />
        <Container22 />
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="grid grid-cols-[_48px] grid-rows-[_48px] relative rounded-[16px] shrink-0 size-[48px]" data-name="Background" style={{ backgroundImage: "linear-gradient(135deg, rgba(78, 205, 196, 0.25) 0%, rgba(78, 205, 196, 0.6) 100%)" }}>
      <div className="col-1 overflow-clip relative row-1 shrink-0 size-[26px]" data-name="Component 3">
        <div className="absolute inset-[12.5%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 19.5">
            <path d={svgPaths.p34f3d080} fill="var(--fill-0, #4ECDC4)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 5">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[26.68px]">Contact Us</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative w-full">
        <Background3 />
        <Heading3 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[20.02px] items-center pb-[1.02px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`Email: `}</p>
      </div>
      <div className="h-[19px] relative shrink-0 w-[193.75px]" data-name="Component 5">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Bold',sans-serif] font-bold h-[21px] justify-center leading-[0] left-0 text-[#f4f7f9] text-[14px] top-[9.5px] w-[194.101px]">
          <p className="decoration-[rgba(255,107,107,0.4)] decoration-solid leading-[20px] underline">dreamteamcatsjlt@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[14px] w-full">
        <p className="leading-[20px]">Location: JLT, Dubai, UAE</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[7px] items-start relative w-full">
        <Container27 />
        <Container28 />
      </div>
    </div>
  );
}

function OverlayBorderShadow1() {
  return (
    <div className="bg-[rgba(78,205,196,0.12)] col-1 justify-self-stretch relative rounded-[64px] row-2 self-start shrink-0" data-name="Overlay+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[rgba(78,205,196,0.25)] border-solid inset-0 pointer-events-none rounded-[64px] shadow-[0px_14px_28px_0px_rgba(0,0,0,0.45)]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[29px] relative w-full">
        <Container25 />
        <Container26 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[_466px] grid-rows-[__290.11px_166.03px] h-[480.14px] relative shrink-0 w-full" data-name="Container">
      <OverlayBorderShadow />
      <OverlayBorderShadow1 />
    </div>
  );
}

function Container19() {
  return (
    <div className="max-w-[490.0003967285156px] relative self-stretch shrink-0 w-[490px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pl-[24px] pt-[24px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-wrap gap-0 h-[528.14px] items-start justify-center pb-[24px] relative shrink-0 w-[1176px]" data-name="Container">
      <Container7 />
      <Container19 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[14px] text-center whitespace-nowrap">
        <p className="leading-[20px]">Every contribution, no matter the size, helps us provide food, medical care, and love to cats in need.</p>
      </div>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(255,107,107,0.2)] relative rounded-[15984px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start pb-[24px] pt-[23px] px-[24px] relative w-full">
        <Container29 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="max-w-[1200px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end max-w-[inherit] px-[24px] relative w-full">
          <Container4 />
          <Container6 />
          <Overlay />
        </div>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-gradient-to-b from-[#0f141a] relative shrink-0 to-[#0c1117] via-[#141b23] via-[45%] w-full z-[1]" data-name="Background">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[360px] py-[80px] relative w-full">
          <div className="absolute bg-[rgba(255,107,107,0.16)] right-[-80px] rounded-[130px] size-[260px] top-[-120px]" data-name="Overlay" />
          <div className="absolute bg-[rgba(78,205,196,0.14)] bottom-[-140px] left-[-90px] rounded-[160px] size-[320px]" data-name="Overlay" />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

export default function DonateDark() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative size-full" data-name="Donate dark" style={{ backgroundImage: "linear-gradient(90deg, rgb(15, 20, 26) 0%, rgb(15, 20, 26) 100%), linear-gradient(90deg, rgb(15, 20, 26) 0%, rgb(15, 20, 26) 100%), linear-gradient(90deg, rgb(18, 18, 18) 0%, rgb(18, 18, 18) 100%)" }}>
      <Header />
      <Background />
    </div>
  );
}