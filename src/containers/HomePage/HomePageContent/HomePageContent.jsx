import React from 'react'
import Styled from './styled/StyledHomePageContent'
import Container from '../../../components/styled/StyledContainer'
import Aside from '../../../components/Aside/Aside'
import Steps from '../../../components/Steps/Steps'
import Intro from '../../../components/Intro/Intro'
import MyDevicesBlock from '../../../components/MyDevicesBlock/MyDevicesBlock'
import OptionalPanel from '../../../components/MyDevicesBlock/components/OptionalPanel/OptionalPanel'
import PromoAside from '../../../components/Aside/components/PromoAside/PromoAside'
import AsideDevices from '../../../components/Aside/components/AsideDevices/AsideDevices'
import AsidePlaylists from '../../../components/Aside/components/AsidePlaylists/AsidePlaylists'
import AsideServers from '../../../components/Aside/components/AsideServers/AsideServers'

const HomePageContent = () => {

  return (
    <>
      <Styled.HomePageContent>
        <Container display="flex" justify="space-between">
          <Styled.PageContent>
            <Steps/>
            <Intro/>
            <MyDevicesBlock />
            <OptionalPanel  />
          </Styled.PageContent>

          <Aside>
            <PromoAside/>
            <aside>
              <AsideDevices />
              <AsidePlaylists/>
              <AsideServers/>
            </aside>
          </Aside>
        </Container>
      </Styled.HomePageContent>

    </>)
}

export default HomePageContent
