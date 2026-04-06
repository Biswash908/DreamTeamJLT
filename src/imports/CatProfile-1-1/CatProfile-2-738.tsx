import svgPaths from "./svg-07eiceefl0";
import imgDreamTeamJltLogo from "./48d339b1aea985ce1c9f57f48eb5e2a4e70590e0.png";
import imgOscar from "./cfde5566075c77adf30c05ee0c21cdf148f89cfb.png";

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
    <div className="bg-white content-stretch flex flex-col items-start pb-px shrink-0 sticky top-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(45,52,54,0.12)] border-b border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(0,0,0,0.06)]" />
      <Container />
    </div>
  );
}

function Oscar() {
  return (
    <div className="aspect-[560/560] relative shrink-0 w-full" data-name="Oscar">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[129.73%] left-0 max-w-none top-[-14.86%] w-full" src={imgOscar} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Oscar />
      <div aria-hidden="true" className="absolute border-8 border-solid border-white inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[64px] shadow-[0px_12px_40px_0px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Background+Shadow">
      <Container6 />
    </div>
  );
}

function Container5() {
  return (
    <div className="flex-[1_0_0] max-w-[592px] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pl-[32px] pt-[32px] relative size-full">
        <BackgroundShadow />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[40px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[48px]">Oscar</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[191.2px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[11px] text-[#4ecdc4] text-[13px] top-[9px] w-[169.531px]">
          <p className="leading-[19.5px]">{`Arabian Mau/Ginger & White`}</p>
        </div>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center max-w-[560px] p-px relative rounded-[16px] shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(78,205,196,0.7)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container10 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[50.72px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[11px] text-[#ff6b6b] text-[13px] top-[9px] w-[29.093px]">
          <p className="leading-[19.5px]">Male</p>
        </div>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center max-w-[560px] p-px relative rounded-[16px] shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(255,107,107,0.7)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container11 />
    </div>
  );
}

function Svg() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative shrink-0 size-[20px]" data-name="SVG">
      <div className="flex-[1_0_0] min-h-px min-w-px overflow-clip relative w-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p2b5fcd00} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[20px] items-start pl-[5px] relative shrink-0 w-[19px]" data-name="SVG:margin">
      <Svg />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-[50.16px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[12px] text-[13px] text-white top-[9px] w-[26.517px]">
        <p className="leading-[19.5px]">TNR</p>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#2e7d32] content-stretch flex h-[32px] items-center justify-center max-w-[560px] relative rounded-[16px] shrink-0" data-name="Background">
      <SvgMargin />
      <Container12 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-start flex flex-wrap gap-[0px_8px] items-start relative shrink-0 w-full" data-name="Container">
      <Border />
      <Border1 />
      <Background1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[113.72px] overflow-clip relative shrink-0 w-full" data-name="Heading 6">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Fredoka:Medium',sans-serif] font-medium h-[90px] justify-center leading-[0] left-0 text-[#636e72] text-[17.6px] top-[60.4px] w-[554.44px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[29.92px] mb-0">Oscar was first spotted in August 2021 in Cluster O. He was very hard</p>
        <p className="leading-[29.92px] mb-0">to get close to, but we eventually managed to get him for TNR in</p>
        <p className="leading-[29.92px]">December that year. He has become a bit of a protector for the Clust…</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative">
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Component 3">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 5.5575">
              <path d={svgPaths.p324409f0} fill="var(--fill-0, #FF6B6B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start pb-[16px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container9 />
      <Heading1 />
      <div className="bg-[rgba(45,52,54,0.04)] min-w-[64px] relative rounded-[15984px] shrink-0 w-full" data-name="Component 5">
        <div aria-hidden="true" className="absolute border border-[rgba(45,52,54,0.2)] border-solid inset-0 pointer-events-none rounded-[15984px]" />
        <div className="flex flex-row items-center justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center min-w-[inherit] pl-[230.05px] pr-[228.06px] py-[7px] relative w-full">
            <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#ff6b6b] text-[16px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="leading-[28px]">View more</p>
            </div>
            <Container13 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] whitespace-nowrap">
        <p className="leading-[21.98px]">Location</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Cluster P carpark down from Carrefour</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[281px]" data-name="Container">
      <Heading2 />
      <Container16 />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Component 3">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 26.6667">
            <path d={svgPaths.p18ee2040} fill="var(--fill-0, #4ECDC4)" id="Vector" />
          </svg>
        </div>
      </div>
      <Container15 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(78,205,196,0.08)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" data-name="Overlay+Shadow" />
        <Container14 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Veterinary Bills</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[17.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28.16px]">Paid Bills</p>
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[16px] w-full">
        <p className="leading-[28px]">TNR - kindly sponsored by DMCC</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-1px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[20px]">Paid: Dec 21, 2021</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-px relative" data-name="Container">
      <Heading5 />
      <Container21 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative w-full">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p1a707180} fill="var(--fill-0, #4ECDC4)" id="Vector" />
            </svg>
          </div>
        </div>
        <Container20 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[94.52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold h-[20px] justify-center leading-[0] left-[11px] text-[#2e7d32] text-[13px] top-[9px] w-[72.832px]">
          <p className="leading-[19.5px]">AED 161.25</p>
        </div>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="h-[32px] relative rounded-[16px] shrink-0" data-name="Border">
      <div aria-hidden="true" className="absolute border border-[rgba(46,125,50,0.7)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center p-px relative">
        <Container22 />
      </div>
    </div>
  );
}

function OverlayVerticalBorder() {
  return (
    <div className="bg-[rgba(78,205,196,0.04)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay+VerticalBorder">
      <div aria-hidden="true" className="absolute border-[#4ecdc4] border-l-4 border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-center flex flex-wrap items-center justify-between pl-[20px] pr-[16px] py-[16px] relative w-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" data-name="Overlay+Shadow" />
          <Container19 />
          <Border2 />
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading4 />
      <OverlayVerticalBorder />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start pt-[8px] relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container18 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] max-w-[592px] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] pl-[32px] pt-[32px] relative size-full">
        <Container8 />
        <Overlay />
        <Container17 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-0 h-[645.84px] items-start justify-center left-[-8px] min-h-[645.8400268554688px] right-[24px] top-[32px]" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[677.84px] max-w-[1200px] relative shrink-0 w-[1200px]" data-name="Container">
      <div className="absolute content-stretch flex items-center justify-center left-[24px] p-[8px] rounded-[20px] top-0" data-name="Component 4">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.pd1b3d80} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container4 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#fff9f5] content-stretch flex flex-col gap-[48px] items-center pb-[474.16px] relative shrink-0 w-full" data-name="Background">
      <Header />
      <Container3 />
    </div>
  );
}

export default function CatProfile() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Cat Profile" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 249, 245) 0%, rgb(255, 249, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Background />
      <div className="-translate-y-1/2 absolute bg-[rgba(255,107,107,0.08)] content-stretch flex items-center justify-center left-[16px] opacity-35 rounded-[20px] size-[40px] top-[calc(50%-32.75px)]" data-name="Component 6">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.pd1b3d80} fill="var(--fill-0, #FF6B6B)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="-translate-y-1/2 absolute bg-[rgba(78,205,196,0.08)] content-stretch flex items-center justify-center opacity-35 right-[16px] rounded-[20px] size-[40px] top-[calc(50%-32.75px)]" data-name="Component 6">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.p14168ea0} fill="var(--fill-0, #4ECDC4)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}