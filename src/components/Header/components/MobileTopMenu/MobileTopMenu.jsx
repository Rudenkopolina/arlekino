import React from 'react'
import StyledMobileTopMenu from './styled/StyledMobileTopMenu'
import StyledMsgIcon from './styled/StyledMsgIcon'
import { Badge } from 'antd'
import StyledUserMobile from './styled/StyledUserMobile'


const MobileTopMenu = ({isVisible, toggleSiderOuter}) => {
  return (
    <StyledMobileTopMenu>
      <Badge dot>
        <StyledMsgIcon></StyledMsgIcon>
      </Badge>

      <StyledUserMobile isVisible={isVisible}>
          <i onClick={toggleSiderOuter}></i>
      </StyledUserMobile>

    </StyledMobileTopMenu>
  )
}
export default MobileTopMenu
