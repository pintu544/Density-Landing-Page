import * as React from "react";
import { FunctionComponent } from "react";
import Header from "../components/header";
import TradeHeroContainer from "../components/trade-hero-container";
import DynamicComponent1 from "../components/dynamic-component1";
import styled from "styled-components";
import DerivativeTradingCard1 from "../components/derivative-trading-card1";
import ContainerCard1 from "../components/container-card1";
import TradeMorePayLessSection1 from "../components/trade-more-pay-less-section1";
import MarketExplorerSection1 from "../components/market-explorer-section1";
import Container from "../components/container";
import CryptoCard from "../components/crypto-card";
import SectionCardForm1 from "../components/section-card-form1";
import SectionCard2 from "../components/section-card2";
import SectionCard1 from "../components/section-card1";
import SectionCardFormFilter from "../components/section-card-form-filter";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent11 from "../components/frame-component11";
import FrameComponent12 from "../components/frame-component12";
import FormContainer from "../components/form-container";

const GroupChild = styled.img`
  position: absolute;
  height: 102.2%;
  width: 103.44%;
  top: -1.09%;
  right: -1.81%;
  bottom: -1.11%;
  left: -1.63%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const GroupItem = styled.div`
  position: absolute;
  height: 3.09%;
  width: 1.01%;
  top: 59.02%;
  right: 98.99%;
  bottom: 37.89%;
  left: 0%;
  border-radius: 50%;
  background-color: var(--color-yellowgreen);
  filter: blur(4.47px);
  opacity: 0.4;
`;
const GroupInner = styled.div`
  position: absolute;
  height: 4.29%;
  width: 1.01%;
  top: 23.13%;
  right: -1.01%;
  bottom: 72.59%;
  left: 100%;
  border-radius: 50%;
  background-color: var(--white);
  filter: blur(4.47px);
  transform: rotate(180deg);
  transform-origin: 0 0;
  opacity: 0.5;
`;
const GroupIcon = styled.img`
  position: absolute;
  height: 58.47%;
  width: 76.47%;
  top: 0%;
  right: 13%;
  bottom: 41.53%;
  left: 10.53%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const OneApp = styled.p`
  margin: 0;
`;
const OneAppEndlessContainer = styled.div`
  position: absolute;
  top: 61.96%;
  left: 0%;
  letter-spacing: -0.8px;
  line-height: 40.2px;
  font-weight: 300;
`;
const GroupDiv = styled.div`
  position: absolute;
  height: 56.8%;
  width: 61.51%;
  top: 20.95%;
  right: 19.1%;
  bottom: 22.25%;
  left: 19.39%;
`;
const GroupContainer = styled.div`
  position: relative;
  width: 276.4px;
  height: 560px;
`;
const GroupParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-101xl) 0px 240px;
  gap: var(--gap-101xl);
`;
const Unlock = styled.span``;
const Span = styled.span`
  color: #d4f938;
`;
const NewFrontiers = styled.span`
  color: var(--white);
`;
const UnlockNewFrontiersContainer = styled.b`
  position: relative;
  letter-spacing: -2.1px;
  line-height: 76.88px;
  display: inline-block;
  width: 846px;
`;
const AreYouA = styled.div`
  position: relative;
  font-size: 22.37px;
  line-height: 32.85px;
  color: var(--neutrals-grey-4);
  display: inline-block;
  width: 659.1px;
`;
const UnlockNewFrontiersParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-9xl);
`;
const TextureIcon = styled.img`
  position: absolute;
  height: 100%;
  top: 0%;
  bottom: 0%;
  left: calc(50% - 565px);
  max-height: 100%;
  width: 1130px;
  object-fit: cover;
  mix-blend-mode: overlay;
`;
const FrameGroup = styled.div`
  position: relative;
  width: 1130px;
  height: 510px;
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-131xl) 0px;
  gap: var(--gap-45xl);
  font-size: var(--font-size-53xl);
  color: var(--electric-green-primary);
  font-family: var(--font-familjen-grotesk);
`;
const LandingPageRoot = styled.div`
  position: relative;
  background: radial-gradient(50% 50% at 50% 50%, #58f28a, #000);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: center;
  font-size: var(--font-size-14xl-5);
  color: var(--white);
  font-family: var(--font-hanken-grotesk);
`;

const LandingPage: FunctionComponent = () => {
  return (
    <LandingPageRoot>
      <Header />
      <TradeHeroContainer />
      <DynamicComponent1 />
      <GroupParent>
        <GroupContainer>
          <GroupChild alt="" src="/group-1000003808.svg" />
          <GroupItem />
          <GroupInner />
          <GroupDiv>
            <GroupIcon alt="" src="/group-18145967.svg" />
            <OneAppEndlessContainer>
              <OneApp>One App.</OneApp>
              <OneApp>{`Endless `}</OneApp>
              <OneApp>Possibilities</OneApp>
            </OneAppEndlessContainer>
          </GroupDiv>
        </GroupContainer>
        <DerivativeTradingCard1 />
        <ContainerCard1 />
      </GroupParent>
      <TradeMorePayLessSection1 />
      <MarketExplorerSection1 />
      <FrameParent>
        <UnlockNewFrontiersParent>
          <UnlockNewFrontiersContainer>
            <Unlock>Unlock</Unlock>
            <Span>{` `}</Span>
            <NewFrontiers>New Frontiers.</NewFrontiers>
          </UnlockNewFrontiersContainer>
          <AreYouA>
            Are you a stock trader looking for new opportunities to make money?
            We got you covered!
          </AreYouA>
        </UnlockNewFrontiersParent>
        <Container />
        <FrameGroup>
          <CryptoCard />
          <TextureIcon alt="" src="/texture2@2x.png" />
        </FrameGroup>
      </FrameParent>
      <SectionCardForm1 />
      <SectionCard2 />
      <SectionCard1 />
      <SectionCardFormFilter />
      <FrameComponent9 />
      <FrameComponent10 />
      <FrameComponent11 />
      <FrameComponent12 />
      <FormContainer />
    </LandingPageRoot>
  );
};

export default LandingPage;
