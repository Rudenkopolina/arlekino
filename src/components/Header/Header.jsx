import React  from 'react'
import MenuHeader from '../MenuHeader/MenuHeader'
import Logo from './components/Logo/Logo'
import StyledHeader from './styled/StyledHeader'
import Container from '../styled/StyledContainer'
import StyledHeaderWrap from './styled/StyledHeaderWrap'
import LangControl from './components/LangControl/LangControl'
import UserBlock from './components/UserBlock/UserBlock'
import StyledHeaderRightCol from './styled/StyledHeaderRightCol'
import MobileTopMenu from './components/MobileTopMenu/MobileTopMenu'


// <SiderMobile isCollapse={isVisibleSider} />
const Header = ({isVisibleSiderOuter,collapseSiderOuter,isVisibleSiderInner,collapseSiderInner}) => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <Logo />
          <MobileTopMenu isVisible={isVisibleSiderOuter} toggleSiderOuter={collapseSiderOuter}/>

          <StyledHeaderRightCol>
            <MenuHeader />
            <LangControl />
            <UserBlock />
          </StyledHeaderRightCol>

        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
	    )
}
export default Header
