import React from 'react'
import StyledFooter from './styled/StyledFooter'
import Container from '../styled/StyledContainer'
import { FormattedMessage, injectIntl } from 'react-intl'
import Copyright from './styled/StyledCopyright'
import FooterContent from './styled/StyledFooterContent'
import AcceptBlock from './styled/StyledAcceptBlock'
import PayPalIcon from '../../assets/img/paypal1.svg'
import PayAccept2 from '../../assets/img/acceptpay2.svg'

const Footer = ({isMobile}) => {
  return (
    <StyledFooter isMobile={isMobile}>
      <Container>

        <FooterContent>
          <Copyright><FormattedMessage id='Footer.Copyright' /></Copyright>

          <AcceptBlock>
            <p><FormattedMessage id='Footer.Accept' /></p>
            <i><img src={PayPalIcon} alt='' /></i>
            <span>Pay Pal</span>
            <i><img src={PayAccept2} alt='' /></i>
          </AcceptBlock>
        </FooterContent>

      </Container>
    </StyledFooter>
	    )
}
export default injectIntl(Footer)
