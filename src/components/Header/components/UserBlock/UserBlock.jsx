import React, { useState } from 'react'
import styled from 'styled-components'
import { Dropdown } from 'antd';
import UserForm from '../../../../components/Forms/UserForm/UserForm'

import AvatarImg from '../../../../assets/img/avatar.svg'
import DropDownIcon from '../../../../assets/img/arrowdown.svg'
import LogoutIcon from '../../../../assets/img/logout.svg'

const UserBlock = () => {
  const [isVisible, setVisibility ] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  return (
    <StyledUserBlock>
          <Dropdown placement="bottomRight" overlay={<UserForm  />} trigger={['click']}>
            <FlexWrapper>
              <StyledAvatar>
                <img src={AvatarImg} alt='' />
              </StyledAvatar>
              <StyledUserName>Valeriy</StyledUserName>
              <i><img src={DropDownIcon} alt='' /></i>
            </FlexWrapper>
          </Dropdown>
          <LogoutBlock><img src={LogoutIcon} alt='' /></LogoutBlock>
    </StyledUserBlock>
  )
}

export default UserBlock;

const StyledUserName = styled.div`
	font-family: var(--fontGilroyRegular);
	font-size: 14px;
  color: var(--white);
  padding: 0 1rem;
  min-width: 5rem;
`

const FlexWrapper = styled.div`
	display: flex;
	align-items: center;
`

const StyledUserBlock = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	
	i {
		display: block;
	}
	.ant-dropdown-trigger.ant-dropdown-open {
	  i {
	      transform: rotate(180deg);
	  }
	}
`

const LogoutBlock = styled.div`
  margin: 0 1rem;
  padding-top: 2px;
`

const StyledAvatar = styled.div`
	display: flex;
	width: 33px;
	height: 33px;
	border-radius: 50%;
	img {
		display: block;
	}
`