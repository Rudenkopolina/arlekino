import styled, { css } from 'styled-components'
import Icon from '../../../../../assets/img/useravatarmobile.svg'
import IconOpen from '../../../../../assets/img/burger.svg'
import IconClose from '../../../../../assets/img/closeburgermobileorange.svg'

const StyledUserMobile = styled.div`

  width: 94px;
  height: 46px;
  background: #FFFFFF;
  box-shadow: 2px 4px 9px rgba(75, 92, 168, 0.2);
  border-radius: 0px 0px 9px 9px;
  cursor: pointer;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    left: 13px;
    top: 12px;
    width: 22px;
    height: 22px;
    background: url(${(Icon)}) center center no-repeat;
  }
  i {
      position: absolute;
      ${({isVisible }) => {
        if (!isVisible) {
          return css`
                    right: 14px;
                    top: 17px;
                    width: 23px;
                    height: 11px;
                    background: url(${(IconOpen)}) center center no-repeat;
                   `}
        else {
          return css`
                    top: 16px;
                    width: 18px;
                    height: 16px;
                    background: url(${(IconClose)}) center center no-repeat;
                    right: 14px;
                   `
        }
      }}
  
    
  }
	
`

export default StyledUserMobile
