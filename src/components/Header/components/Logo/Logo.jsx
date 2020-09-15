import React from 'react'
import styled from 'styled-components'
import { DEVICE, SIZE } from '../../../../constants/media'

const Logo = () => (
  <StyledLogo>
    <LogoText>Arlekino.tv</LogoText>
  </StyledLogo>
)
export default Logo

const StyledLogo = styled.div`
	display: flex;
	width: 230px;
	height: 78px;
	background: var(--white);
	border-radius: 0px 0px 9px 9px;
	justify-content: center;
	align-items: center;
  cursor: pointer;
  @media ${DEVICE.tabletL} {
    background: none;
    height: 55px;
  }
`

const LogoText = styled.div`
  color: var(--mainblue);
  font-weight: 600;
  line-height: 36px;
  font-size: 38px;

  @media ${DEVICE.tabletL} {
    color: var(--white);
    font-size: 35px;
  }

  @media (max-width: ${SIZE.mobileL}px) {
    color: var(--white);
    font-size: 25px;
  }
`;