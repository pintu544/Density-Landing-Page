import * as React from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";
import AccountRegistrationSection from "./account-registration-section";

const DerivatesMadeSimple = styled.p`
  margin: 0;
`;
const In1 = styled.span``;
const Easy = styled.span`
  color: var(--electric-green-primary);
`;
const Steps = styled.span`
  color: var(--white);
`;
const DerivatesMadeSimpleContainer = styled.b`
  position: relative;
  letter-spacing: -0.02em;
  line-height: 80px;
  display: inline-block;
  width: 936px;
  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;
const FrameChild = styled.img`
  position: relative;
  width: 1134px;
  height: 1px;
  opacity: 0.4;
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--gap-21xl);
  text-align: left;
  font-size: var(--font-size-21xl);
  font-family: var(--mobile-caption-1-medium);
`;
const DerivatesMadeSimpleIn3EasParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--padding-101xl) 0px;
  gap: var(--gap-101xl);
  text-align: center;
  font-size: var(--font-size-53xl);
  color: var(--white);
  font-family: var(--font-familjen-grotesk);
`;

const SectionCard2: FunctionComponent = () => {
  return (
    <DerivatesMadeSimpleIn3EasParentRoot>
      <DerivatesMadeSimpleContainer>
        <DerivatesMadeSimple>Derivates made simple</DerivatesMadeSimple>
        <DerivatesMadeSimple>
          <In1>{`in `}</In1>
          <Easy>3 Easy</Easy>
          <Steps> Steps</Steps>
        </DerivatesMadeSimple>
      </DerivatesMadeSimpleContainer>
      <FrameParent>
        <AccountRegistrationSection
          imageDimensions="/group-626793.svg"
          imageDimensionsText="/group-1000003801.svg"
          ctaText="Create an Account"
          ctaButtonText={`Register & Complete your Verification in less than 2 minutes`}
        />
        <FrameChild alt="" src="/vector-5.svg" />
        <AccountRegistrationSection
          imageDimensions="/group-626794.svg"
          imageDimensionsText="/group-626789.svg"
          ctaText="Deposit Funds"
          ctaButtonText="Add funds quickly using a variety of payment methods"
          propWidth="1446px"
          propWidth1="107.1px"
          propHeight="100px"
        />
        <FrameChild alt="" src="/vector-6.svg" />
        <AccountRegistrationSection
          imageDimensions="/group-6267941.svg"
          imageDimensionsText="/group-1000003802.svg"
          ctaText="Become a Trader"
          ctaButtonText={`Choose Your Trading Pair & Trade Seamlessly`}
          propWidth="1442px"
          propWidth1="115.8px"
          propHeight="120px"
        />
      </FrameParent>
    </DerivatesMadeSimpleIn3EasParentRoot>
  );
};

export default SectionCard2;
