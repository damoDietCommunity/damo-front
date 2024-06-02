import React from 'react';
import { HomePageContainer, BounceHeading, DamoTextContainer, DamoText, FadeInText } from '../styles/HomePageStyle';

function HomePage() {
  return (
    <HomePageContainer>
      <div>
        <BounceHeading>다이어터</BounceHeading>
        <BounceHeading>모여라</BounceHeading>
        <DamoTextContainer>
          <DamoText src="/damoText/D1__R.png" />
          <DamoText src="/damoText/A1__R.png" />
          <DamoText src="/damoText/M1__R.png" />
          <DamoText src="/damoText/O1__R.png" />
        </DamoTextContainer>
        {/* <FadeInText>채팅방에서 실시간으로 소통하고</FadeInText> */}
        <FadeInText>함께라서 더 쉬운 다이어트</FadeInText>
      </div>
    </HomePageContainer>
  );
}

export default HomePage;
