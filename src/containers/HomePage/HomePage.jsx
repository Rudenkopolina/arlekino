import React, { useState } from 'react'
import StyledHomePage from './styled/StyledHomePage'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Container from '../../components/styled/StyledContainer'
import PageTop from '../../components/PageTop/PageTop'
import MainMenu from '../../components/MainMenu/MainMenu'
import HomePageContent from './HomePageContent/HomePageContent'
import SiderMobile from '../../components/Header/components/SiderMobile/SiderMobile'

const HomePage = () => {

  //outer
  const [isVisibleSiderOuter, setVisibilitySiderOuter ] = useState(false);
  const collapseSiderOuter = () => {
    setVisibilitySiderOuter(!isVisibleSiderOuter);
    isVisibleSiderInner && collapseSiderInner();
  };

  //inner
  const [isVisibleSiderInner, setVisibilitySiderInner ] = useState(false);
  const collapseSiderInner = () => {
    setVisibilitySiderInner(!isVisibleSiderInner);
  };

  return (
    <StyledHomePage isShowMenu={isVisibleSiderOuter}>
      <Header
        isVisibleSiderOuter={isVisibleSiderOuter}
        collapseSiderOuter={collapseSiderOuter}
        collapsedInner={isVisibleSiderInner}
        onCollapseInner={collapseSiderInner}
      />

      <SiderMobile
        collapsedOuter ={isVisibleSiderOuter}
        onCollapseOuter={collapseSiderOuter}
        collapsedInner={isVisibleSiderInner}
        onCollapseInner={collapseSiderInner}
      >
      </SiderMobile>

      <Container>
        <PageTop />
      </Container>

      <MainMenu isDesktop={true} />

      <HomePageContent />

      <Footer />

    </StyledHomePage>)
}

export default HomePage
