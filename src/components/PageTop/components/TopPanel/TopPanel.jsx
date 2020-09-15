import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import StyledMessages from './styled/StyledMessages'
import StyledWallet from './styled/StyledWallet'
import StyledTopPanel from './styled/StyledTopPanel'
import Messages from '../../../../assets/img/envelope.svg'
import Wallet from '../../../../assets/img/wallest.svg'
import StyledCharge from './styled/StyledCharge'
import { Badge } from 'antd'


const TopPanel = () => (
  <StyledTopPanel>

        <StyledMessages>
          <Badge dot><i><img src={Messages} alt='' /></i></Badge>
          <p>2 новых</p>
        </StyledMessages>

        <StyledWallet>
          <i><img src={Wallet} alt='' /></i>
          <p>23$</p>
        </StyledWallet>

        <StyledCharge>
          <a href="/"><FormattedMessage id='TopPanel.txt' /></a>
        </StyledCharge>
  </StyledTopPanel>
)
export default injectIntl(TopPanel);
