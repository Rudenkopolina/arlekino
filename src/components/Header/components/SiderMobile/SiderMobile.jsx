import React, { useState } from 'react'
import StylerSiderMobile from './styled/StyledSider'
import UserBlock from '../UserBlock/UserBlock'
import StyledSiderTop from './styled/StyledSiderTop'
import MainMenu from '../../../MainMenu/MainMenu'
import StyledSiderContent from './styled/StyledSiderContent'
import MenuHeader from '../../../MenuHeader/MenuHeader'
import StyledContainer from '../../../styled/StyledContainer'
import AsideDevices from '../../../Aside/components/AsideDevices/AsideDevices'
import AsidePlaylists from '../../../Aside/components/AsidePlaylists/AsidePlaylists'
import AsideServers from '../../../Aside/components/AsideServers/AsideServers'
import StyledSiderSecond from './styled/StyledSiderSecond'
import Button from '../../../../components/Button/Button'
import LangControl from '../LangControl/LangControl'
import { FormattedMessage } from 'react-intl'
import StyledTestPeriod from './styled/StyledTestPeriod'
import StyledBurgerContainer from './styled/StyledBurgerContainer'
import StyledGoDesktop from './styled/StyledGoDesktop'
import StyledBurgerContainerOuter from './styled/StyledBurgerContainerOuter'

const SiderMobile = ({collapsedOuter, onCollapseOuter,collapsedInner, onCollapseInner }) => {

  const [isVisibleMenuDevice, setVisibilityMenuDevice ] = useState(false);
  const collapseMenuDevices = () => {
    setVisibilityMenuDevice(!isVisibleMenuDevice);
  }; //visibility for dropdown with  searchdevices

  return (
    <StylerSiderMobile
      collapsed={collapsedOuter}
      collapsible
      trigger={null}
      onCollapse = { onCollapseOuter }
    >

      <StyledBurgerContainerOuter isVisibleInner={collapsedInner}>
        <StyledSiderTop>
              <StyledContainer relative>
                <UserBlock isVisibleMenuDevice={isVisibleMenuDevice} collapseMenuDevices={collapseMenuDevices} onCollapseOuter={onCollapseOuter} collapsedInner={collapsedInner} onCollapseInner={onCollapseInner}/>
              </StyledContainer>
        </StyledSiderTop>

      <StyledSiderContent>

        <StyledContainer  paddingbottom={'100px'} relative>
          <StyledGoDesktop>ПК версия </StyledGoDesktop>
          <MainMenu/>
          <MenuHeader />
          <LangControl />
          <Button className="siderBtn" uitype='bordered' align='center' onClick={onCollapseOuter}><FormattedMessage id="SiderMobile.Close" /></Button>
        </StyledContainer>

        <StyledSiderSecond
          collapsible
          trigger={null}
          collapsed={collapsedInner}
          onCollapse={onCollapseInner}
        >
          <StyledBurgerContainer>
            <StyledContainer paddingbottom={'150px'} relative>

              <AsideDevices
                            isVisibleMenuDevice={isVisibleMenuDevice}
                            collapseMenuDevices={collapseMenuDevices}
                            isMobile={true} />

              <AsidePlaylists isMobile={true}/>
              <AsideServers isMobile={true} />
              <StyledTestPeriod to={'/'}><FormattedMessage id="SiderMobile.Test" /></StyledTestPeriod>

            </StyledContainer>
          </StyledBurgerContainer>

        </StyledSiderSecond>

      </StyledSiderContent>


      </StyledBurgerContainerOuter>
    </StylerSiderMobile>

    )
}
export default SiderMobile
