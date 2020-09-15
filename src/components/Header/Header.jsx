import React from 'react'
import styled from 'styled-components'
import { DEVICE } from '../../constants/media'
import MenuHeader from '../MenuHeader/MenuHeader'
import EnvelopeIcon from '../../assets/img/envelopeWhite.svg'
import User from '../../assets/img/user.svg'
import Menu from '../../assets/img/orangeMenu.svg'

import Logo from './components/Logo/Logo'
import LangControl from './components/LangControl/LangControl'
import UserBlock from './components/UserBlock/UserBlock'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <StyledHeaderWrap>
          <Logo />

          <StyledHeaderRightCol>
            <MenuHeader />
            <UserActions>
              <LangControl />
              <UserBlock />
            </UserActions>
            <MobileActions>
              <Icon><Image src={EnvelopeIcon} alt='' /></Icon>
              <WhiteContainer>
                <Icon><Image src={User} alt='' /></Icon>
                <Icon><Image src={Menu} alt='' /></Icon>
              </WhiteContainer>
            </MobileActions>
          </StyledHeaderRightCol>

        </StyledHeaderWrap>
      </Container>
    </StyledHeader>
  )
}
export default Header

const StyledHeader = styled.div`
  display: flex;
  background: var(--gradientHeader);
  height: 103px;
  @media ${DEVICE.tabletL} {
    height: 78px;
  }
`

const Container = styled.div`
  max-width: 1250px;
  display: ${({ display }) => display === "flex" ? "flex" : "block"}};
  ${({ justify }) => justify && `justify-content: ${justify};`}
  width: 100%;
  padding: 0 1.5rem;
  margin: 0 auto;
	
	@media ${DEVICE.laptopS} {
    max-width:1200px;
  }
    
  @media ${DEVICE.laptopL}  {
    max-width: 1250px;
  }
  
  @media ${DEVICE.desktop} {
    max-width: 1450px;
  }
`

const StyledHeaderWrap = styled.div`
  	display: flex;
  	justify-content: space-between;
`

const StyledHeaderRightCol = styled.div`
    display: flex;
    align-items: center;
    min-width: 50%;
    @media ${DEVICE.tabletL} {
      align-items: end;
      justify-content: flex-end;
    }
`

const UserActions = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  @media ${DEVICE.tabletL} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  @media ${DEVICE.tabletL} {
    display: flex;
  }
`;

const WhiteContainer = styled.div`
  display: flex;
  background: var(--white);
  box-shadow: 2px 4px 9px rgba(75, 92, 168, 0.2);
  border-radius: 0px 0px 9px 9px;
  margin: 0 1rem;
  padding: 0 1rem;
`;

const Icon = styled.i`
  margin: .7rem;
`;

const Image = styled.img``;
