import React from 'react'
import StyledHomePage from './styled/StyledHomePage'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Container from '../../components/styled/StyledContainer'
import PageTop from '../../components/PageTop/PageTop'
import MainMenu from '../../components/MainMenu/MainMenu'
import HomePageContent from './HomePageContent/HomePageContent'

const HomePage = () => {

  return (
    <StyledHomePage>
      <Header />

      <Container>
        <PageTop />
      </Container>

      <MainMenu />

      <HomePageContent />

      <Footer />

    </StyledHomePage>)
}

export default HomePage
