import svgPaths from "./svg-3ndfjpw0e4";
import imgDreamTeamJltLogo from "./48d339b1aea985ce1c9f57f48eb5e2a4e70590e0.png";
import imgEcho from "./9b84a428202274209ee471d204f92f9546d9bf97.png";
import imgFelix from "./c1f959250d9a3cf7c66d161749e7e94637877cc1.png";
import imgFluffyTail from "./010ff5504f12b63841a24191b03f1f15ce69f777.png";
import imgGrey from "./d47d41043b20d36a5110ef458640279ed83d2aab.png";
import imgLuna from "./411a4ab2f9223f4c3231b8cc5d94f4fdb4ddb9b7.png";
import imgMango from "./a997d11106aef23930c529130db4907df29eb25d.png";
import imgMaple from "./53cbb2857c0aa85a3c37a97db71125b343ea1bc0.png";
import imgMeeku from "./5ef940beaa257fd603c1ace9e5604d32c1eccd10.png";
import imgMisty from "./900c54a1a187ea532efe3a6358df8353fb936446.png";

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

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[0.8px] relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[44px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[52.8px]">Meet Our Cats</p>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[600px] relative shrink-0 w-[600px]" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#636e72] text-[17.6px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[28.16px] mb-0">Each cat has a unique story. Click on any cat to learn more about them,</p>
        <p className="leading-[28.16px]">including their location and any pending vet bills.</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[15.07px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Heading2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[0.16px] items-center max-h-[32px] relative shrink-0" data-name="Container">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[12.5%_14.62%_14.62%_12.5%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.575 14.575">
            <path d={svgPaths.p3863c300} fill="var(--fill-0, #636E72)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[0.16px] items-start max-h-[32px] pr-[8px] relative shrink-0" data-name="Margin">
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-42 overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[16px] w-full">
        <p className="leading-[normal]">Search cats by name...</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="flex-[1_0_0] h-[40px] min-h-px min-w-px relative" data-name="Input">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pr-[14px] py-[8.5px] relative size-full">
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Fieldset() {
  return (
    <div className="absolute inset-[-5px_0_0_0] overflow-clip rounded-[16px]" data-name="Fieldset">
      <div className="absolute border border-[rgba(0,0,0,0.23)] border-solid inset-[5px_0_0_0] rounded-[16px]" data-name="Fieldset:styles" />
    </div>
  );
}

function Container6() {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[14px] relative w-full">
          <Margin />
          <Input />
          <Fieldset />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[32px] relative shrink-0 w-[400px]" data-name="Container">
      <Container6 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[32.02px] relative shrink-0 w-[158px] z-[1]" data-name="Heading 5">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Fredoka:Medium',sans-serif] font-medium h-[33px] justify-center leading-[0] left-0 text-[#2d3436] text-[24px] top-[15.5px] w-[158.323px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Stray Cats (51)</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[8px] isolate items-center relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 z-[2]">
        <div className="flex-none rotate-180">
          <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[17px]" data-name="Component 5">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
              <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.41">
                  <path d={svgPaths.p180a8a80} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Heading1 />
    </div>
  );
}

function ButtonShowFiltersMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Button - Show filters:margin">
      <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[17px] shrink-0" data-name="Component 4">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[16.67%_16.87%_16.67%_16.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9132 16">
              <path d={svgPaths.p9b12f00} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return <div className="absolute inset-[-16px_0_0.42px_-16px]" data-name="Container" />;
}

function Echo() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Echo">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-25%] w-full" src={imgEcho} />
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <Echo />
      <Border />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Echo</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Echo was first spotted in February 2026. Called Echo</p>
        <p className="leading-[21px]">{`because of the noise he makes! Very timid so we can'…`}</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading3 />
        <Container16 />
      </div>
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.02px_762.67px_856.69px_0] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow />
    </div>
  );
}

function Felix() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Felix">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-2.77%] max-w-none top-0 w-[105.54%]" src={imgFelix} />
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TnrStatus() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[12px] rounded-[14px] shadow-[0px_2px_6px_0px_rgba(46,125,50,0.3)] size-[28px] top-[12px]" data-name="TNR Status">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pa2c7200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <Felix />
      <Border1 />
      <TnrStatus />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Felix</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Felix has been around since about 2017 at least! Such</p>
        <p className="leading-[21px]">a lovely boy, but will hold his own against the other…</p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading4 />
        <Container20 />
      </div>
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.02px_373.34px_856.69px_389.33px] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow1 />
    </div>
  );
}

function FluffyTail() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Fluffy Tail">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[140.63%] left-0 max-w-none top-[-20.32%] w-full" src={imgFluffyTail} />
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TnrStatus1() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[12px] rounded-[14px] shadow-[0px_2px_6px_0px_rgba(46,125,50,0.3)] size-[28px] top-[12px]" data-name="TNR Status">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pa2c7200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <FluffyTail />
      <Border2 />
      <TnrStatus1 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Fluffy Tail</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Fluffy Tail is also an old timer in JLT and is super fluffy</p>
        <p className="leading-[21px]">(hence the name!). She gets on well with most of the…</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading5 />
        <Container24 />
      </div>
    </div>
  );
}

function BackgroundShadow2() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container22 />
      <Container23 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[-0.02px_-15.99px_856.69px_778.66px] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow2 />
    </div>
  );
}

function Grey() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Grey">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[150%] left-0 max-w-none top-[-25%] w-full" src={imgGrey} />
      </div>
    </div>
  );
}

function Border3() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TnrStatus2() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[12px] rounded-[14px] shadow-[0px_2px_6px_0px_rgba(46,125,50,0.3)] size-[28px] top-[12px]" data-name="TNR Status">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pa2c7200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <Grey />
      <Border3 />
      <TnrStatus2 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Grey</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Grey was born in JLT in 2017 and his brother is</p>
        <p className="leading-[21px]">{`'Scrappy'. Unfortunately, when the new colony arrive…`}</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading6 />
        <Container28 />
      </div>
    </div>
  );
}

function BackgroundShadow3() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[499.31px_762.67px_357.36px_0] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow3 />
    </div>
  );
}

function Luna() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Luna">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgLuna} />
      </div>
    </div>
  );
}

function Border4() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TnrStatus3() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[12px] rounded-[14px] shadow-[0px_2px_6px_0px_rgba(46,125,50,0.3)] size-[28px] top-[12px]" data-name="TNR Status">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pa2c7200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <Luna />
      <Border4 />
      <TnrStatus3 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Luna</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Luna is another one of our OGs. She has been around</p>
        <p className="leading-[21px]">since before 2016. Her fur is super soft, but she has …</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading7 />
        <Container32 />
      </div>
    </div>
  );
}

function BackgroundShadow4() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[499.31px_373.34px_357.36px_389.33px] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow4 />
    </div>
  );
}

function Mango() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Mango">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-15.83%] max-w-none top-0 w-[131.67%]" src={imgMango} />
      </div>
    </div>
  );
}

function Border5() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TnrStatus4() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[12px] rounded-[14px] shadow-[0px_2px_6px_0px_rgba(46,125,50,0.3)] size-[28px] top-[12px]" data-name="TNR Status">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pa2c7200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <Mango />
      <Border5 />
      <TnrStatus4 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Mango</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Mango is a gentle, cuddly boy who is almost one year</p>
        <p className="leading-[21px]">old. He arrived in Cluster O at just 12 weeks old and…</p>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading8 />
        <Container36 />
      </div>
    </div>
  );
}

function BackgroundShadow5() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container34 />
      <Container35 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[499.31px_-15.99px_357.36px_778.66px] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow5 />
    </div>
  );
}

function Maple() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Maple">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMaple} />
      </div>
    </div>
  );
}

function Border6() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TnrStatus5() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[12px] rounded-[14px] shadow-[0px_2px_6px_0px_rgba(46,125,50,0.3)] size-[28px] top-[12px]" data-name="TNR Status">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pa2c7200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <Maple />
      <Border6 />
      <TnrStatus5 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Maple</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Maple is a new member of the Dream Team Group.</p>
        <p className="leading-[21px]">Unfortunately, he has had some severe health issues…</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading9 />
        <Container40 />
      </div>
    </div>
  );
}

function BackgroundShadow6() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[998.64px_762.67px_-141.97px_0] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow6 />
    </div>
  );
}

function Meeku() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Meeku">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-12.36%] max-w-none top-0 w-[124.72%]" src={imgMeeku} />
      </div>
    </div>
  );
}

function Border7() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TnrStatus6() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[12px] rounded-[14px] shadow-[0px_2px_6px_0px_rgba(46,125,50,0.3)] size-[28px] top-[12px]" data-name="TNR Status">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pa2c7200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <Meeku />
      <Border7 />
      <TnrStatus6 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Meeku</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Meeku moved to our area from Cluster D where she</p>
        <p className="leading-[21px]">{`was known as 'Silverbush Mamma'. She is extremely…`}</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading10 />
        <Container44 />
      </div>
    </div>
  );
}

function BackgroundShadow7() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[998.64px_373.34px_-141.97px_389.33px] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow7 />
    </div>
  );
}

function Misty() {
  return (
    <div className="aspect-[373.3299865722656/373.3299865722656] relative shrink-0 w-full" data-name="Misty">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-38.89%] max-w-none top-0 w-[177.78%]" src={imgMisty} />
      </div>
    </div>
  );
}

function Border8() {
  return (
    <div className="absolute inset-0 pointer-events-none rounded-[14px]" data-name="Border">
      <div aria-hidden="true" className="absolute border-6 border-solid border-white inset-0 rounded-[14px]" />
      <div className="absolute inset-0 rounded-[14px]" data-name="Overlay+Shadow">
        <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[14px]" />
        <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0px_0px_0px_7px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}

function TnrStatus7() {
  return (
    <div className="absolute bg-[#2e7d32] content-stretch flex items-center justify-center left-[12px] rounded-[14px] shadow-[0px_2px_6px_0px_rgba(46,125,50,0.3)] size-[28px] top-[12px]" data-name="TNR Status">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Component 3">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.pa2c7200} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full z-[2]" data-name="Container">
      <Misty />
      <Border8 />
      <TnrStatus7 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 6">
      <div className="flex flex-col font-['Fredoka:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2d3436] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Misty</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#636e72] text-[14px] w-full">
        <p className="leading-[21px] mb-0">Misty was first spotted in mid-Jan 2026. She was</p>
        <p className="leading-[21px]">terrified but that meant she was attacking some of t…</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Container">
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
        <Heading11 />
        <Container48 />
      </div>
    </div>
  );
}

function BackgroundShadow8() {
  return (
    <div className="bg-white content-stretch flex flex-col isolate items-start overflow-clip relative rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.08)] shrink-0 w-full" data-name="Background+Shadow">
      <Container46 />
      <Container47 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[998.64px_-15.99px_-141.97px_778.66px] items-start max-w-[389.33294677734375px] pl-[16px] pt-[16px]" data-name="Container">
      <BackgroundShadow8 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[1356px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
      <Container17 />
      <Container21 />
      <Container25 />
      <Container29 />
      <Container33 />
      <Container37 />
      <Container41 />
      <Container45 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[1548px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Component 6">
        <Container10 />
        <ButtonShowFiltersMargin />
      </div>
      <Container11 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[32.02px] relative shrink-0 w-[183.17px]" data-name="Heading 5">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Fredoka:Medium',sans-serif] font-medium h-[33px] justify-center leading-[0] left-0 text-[#2d3436] text-[24px] top-[15.5px] w-[183.512px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[32px]">Homed Cats (22)</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Container">
      <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[17px] shrink-0" data-name="Component 4">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute bottom-[33.33%] left-1/4 right-1/4 top-[35.79%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 7.41">
              <path d={svgPaths.p180a8a80} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Heading12 />
    </div>
  );
}

function ButtonShowFiltersMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[4px] relative shrink-0" data-name="Button - Show filters:margin">
      <div className="content-stretch flex items-center justify-center p-[5px] relative rounded-[17px] shrink-0" data-name="Component 4">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Component 3">
          <div className="absolute inset-[16.67%_16.87%_16.67%_16.83%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.9132 16">
              <path d={svgPaths.p9b12f00} fill="var(--fill-0, black)" fillOpacity="0.54" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[1886px] items-start max-w-[1200px] pb-[16px] px-[24px] relative shrink-0 w-[1200px]" data-name="Container">
      <Container4 />
      <Container5 />
      <Container9 />
      <div className="content-stretch flex items-center justify-between pt-[16px] relative shrink-0 w-full" data-name="Component 6">
        <Container49 />
        <ButtonShowFiltersMargin1 />
      </div>
    </div>
  );
}

export default function Cats() {
  return (
    <div className="content-stretch flex flex-col gap-[47px] items-center pb-[46px] relative size-full" data-name="Cats" style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 249, 245) 0%, rgb(255, 249, 245) 100%), linear-gradient(90deg, rgb(255, 249, 245) 0%, rgb(255, 249, 245) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Header />
      <Container3 />
    </div>
  );
}