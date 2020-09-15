import React from 'react'
import { Dropdown } from 'antd';
import UserForm from '../../../../components/Forms/UserForm/UserForm'
import StyledUserBlock from './styled/StyledUserBlock'
import StyledUser from './styled/StyledUser'
import StyledUserName from './styled/StyledUserName'
import StyledAvatar from './styled/StyledAvatar'
import LogoutBlock from './styled/StyledLogout'
import AvatarImg from '../../../../assets/img/avatar.svg'
import LogoutIcon from '../../../../assets/img/logout.svg'
import StyledUserMenu from './styled/StyledUserMenu'
import StyledWallet from '../../../PageTop/components/TopPanel/styled/StyledWallet'
import Wallet from '../../../../assets/img/wallest.svg'
import StyledMobileLeftCol from './styled/StyledMobileLeftCol'
import StyledUserDropdownWrapper from './styled/StyledDropDownUserWrapper'
import Burger from './styled/StyledBurger'

const UserBlock = ({onCollapseOuter, onCollapseInner, collapsedInner,isVisibleMenuDevice,collapseMenuDevices}) => {
  const onClose = () => {

    if (isVisibleMenuDevice === true) {
      collapseMenuDevices();
    }
    onCollapseInner();

  }

  return (
    <StyledUserBlock>

        <StyledUserMenu>
          <StyledUserDropdownWrapper>
            <Dropdown dropdownClassName="dropdownUser" placement="bottomRight" getPopupContainer={trigger => trigger.parentNode} overlay={<UserForm  />} trigger={['click']}>
              <StyledUser>
                <StyledAvatar>
                  <img src={AvatarImg} alt='' />
                </StyledAvatar>
                <StyledUserName>Valeriy</StyledUserName>
                <i><svg fill="none" height="7" viewBox="0 0 11 7" width="11" xmlns="http://www.w3.org/2000/svg"><path d="m10.8242.794494-.3603-.362824c-.1134-.11331-.2643-.175733-.4256-.175733-.16111 0-.31216.062423-.42556.175733l-4.11028 4.11046-4.11502-4.115021c-.11322-.11331-.26427-.175644-.425424-.175644-.161156 0-.312295.062334-.425605.175644l-.36041.360588c-.2346681.234493-.2346681.616453 0 .850943l4.899419 4.91704c.11322.11322.26409.19299.42668.19299h.00188c.16124 0 .31212-.07986.42534-.19299l4.89488-4.90372c.1134-.11322.1756-.26865.1758-.4298 0-.16125-.0624-.314535-.1758-.427666z" fill="#bfc5e7"/></svg></i>
              </StyledUser>
            </Dropdown>
          </StyledUserDropdownWrapper>

          <LogoutBlock isDesktop={true} ><img src={LogoutIcon} alt='' /></LogoutBlock>

          <StyledMobileLeftCol>
            <StyledWallet>
              <i><img src={Wallet} alt='' /></i>
              <p>23$</p>
            </StyledWallet>

              <Burger.Row onClick={onClose}>
                <Burger.LineTop isCollapse={collapsedInner} ></Burger.LineTop>
                <Burger.LineBottom isCollapse={collapsedInner} ></Burger.LineBottom>
              </Burger.Row>

          </StyledMobileLeftCol>
        </StyledUserMenu>

    </StyledUserBlock>
  )
}

export default UserBlock
