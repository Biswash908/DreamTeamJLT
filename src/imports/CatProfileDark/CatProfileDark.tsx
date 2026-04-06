import svgPaths from "./svg-pi6f3qp5hb";
import imgDreamTeamJltLogo from "./48d339b1aea985ce1c9f57f48eb5e2a4e70590e0.png";
import imgApricot from "./ff0812713632093bbfed68bdb08f39cb86c88192.png";

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
    <div className="bg-[#161c23] content-stretch flex flex-col items-start pb-px shrink-0 sticky top-0 w-full" data-name="Header">
      <div aria-hidden="true" className="absolute border-[rgba(244,247,249,0.12)] border-b border-solid inset-0 pointer-events-none shadow-[0px_2px_12px_0px_rgba(0,0,0,0.35)]" />
      <Container />
    </div>
  );
}

function Apricot() {
  return (
    <div className="aspect-[560/560] relative shrink-0 w-full" data-name="Apricot">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgApricot} />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Apricot />
      <div aria-hidden="true" className="absolute border-8 border-[#161c23] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-[#161c23] content-stretch flex flex-col items-start overflow-clip relative rounded-[64px] shadow-[0px_12px_40px_0px_rgba(0,0,0,0.55)] shrink-0 w-full" data-name="Background+Shadow">
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
      <div className="flex flex-col font-['Fredoka:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[40px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[48px]">Apricot</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[191.84px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[11px] text-[#4ecdc4] text-[13px] top-[9px] w-[170.172px]">
          <p className="leading-[19.5px]">{`Arabian Mau/White & Ginger`}</p>
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
        <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 14.1667">
            <path d={svgPaths.p35c92480} fill="var(--fill-0, black)" fillOpacity="0.87" id="Vector" />
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
    <div className="h-[19.5px] overflow-clip relative shrink-0 w-[85.45px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Nunito:Regular',sans-serif] font-normal h-[20px] justify-center leading-[0] left-[12px] text-[13px] text-[rgba(0,0,0,0.87)] top-[9px] w-[61.839px]">
        <p className="leading-[19.5px]">Adoptable</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#4ecdc4] content-stretch flex h-[32px] items-center justify-center max-w-[560px] relative rounded-[16px] shrink-0" data-name="Background">
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
      <Background />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[15.455px] relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[17.6px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[29.92px] mb-0">Apricot is another new kitten, first spotted in February 2026. He is part</p>
        <p className="leading-[29.92px]">{`of the new 'fruit salad' gang.`}</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container9 />
      <Heading1 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Nunito:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[14px] whitespace-nowrap">
        <p className="leading-[21.98px]">Location</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Behind the bushes down from Carrefour Cluster P.</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[364px]" data-name="Container">
      <Heading2 />
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[32px]" data-name="Component 3">
        <div className="absolute inset-[8.33%_20.83%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6667 26.6667">
            <path d={svgPaths.p18ee2040} fill="var(--fill-0, #4ECDC4)" id="Vector" />
          </svg>
        </div>
      </div>
      <Container14 />
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(78,205,196,0.18)] relative rounded-[16px] shrink-0 w-full" data-name="Overlay">
      <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[16px] shadow-[0px_2px_1px_-1px_rgba(0,0,0,0.2),0px_1px_1px_0px_rgba(0,0,0,0.14),0px_1px_3px_0px_rgba(0,0,0,0.12)]" data-name="Overlay+Shadow" />
        <Container13 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#f4f7f9] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Veterinary Bills</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#b5c0c8] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">No vet bills - this cat is healthy!</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-center py-[32px] relative shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[48px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
            <path d={svgPaths.p3e4c5900} fill="var(--fill-0, #4ECDC4)" id="Vector" />
          </svg>
        </div>
      </div>
      <Heading4 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container17 />
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] max-w-[592px] min-h-px min-w-px relative self-stretch" data-name="Container">
      <div className="content-stretch flex flex-col gap-[32px] items-start max-w-[inherit] pl-[32px] pt-[32px] relative size-full">
        <Container8 />
        <Overlay />
        <Container16 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-wrap gap-0 h-[592px] items-start justify-center left-[-8px] right-[24px] top-[32px]" data-name="Container">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[624px] max-w-[1200px] relative shrink-0 w-[1200px]" data-name="Container">
      <div className="absolute content-stretch flex items-center justify-center left-[24px] p-[8px] rounded-[20px] top-0" data-name="Component 4">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[16.67%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <path d={svgPaths.pd1b3d80} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Container4 />
    </div>
  );
}

export default function CatProfileDark() {
  return (
    <div className="bg-[#0f141a] content-stretch flex flex-col gap-[48px] items-center pb-[528px] relative size-full" data-name="Cat profile dark">
      <Header />
      <Container3 />
    </div>
  );
}